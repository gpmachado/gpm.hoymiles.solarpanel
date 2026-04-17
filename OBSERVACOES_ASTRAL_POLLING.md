# Observacoes e sugestoes - Astral polling Hoymiles

## Contexto observado

Durante `homey app run --remote`, com o device desligado por estar de noite, os logs mostraram:

```text
Timezone check — tz='UTC' utc=23:49 local=23:49 is_night=False
Night backoff disabled — Homey geolocation not set
Poll: no data — inverter sleeping, keeping last values
Polling started — every 60s
```

Isso indica que o inversor/DTU esta dormindo, mas o app nao consegue confirmar que e noite usando `astral`, porque falta localizacao e o timezone retornado esta como `UTC`.

## Erros encontrados

### 1. Homey geolocation nao esta disponivel

O codigo depende de:

```python
self.homey.geolocation.get_latitude()
self.homey.geolocation.get_longitude()
```

No log aparece:

```text
Night backoff disabled — Homey geolocation not set
```

Sem latitude/longitude, o `astral` nao calcula nascer e por do sol. O app assume dia por seguranca e continua polling a cada 60 segundos.

### 2. Timezone retornado como UTC

O log mostra:

```text
Timezone check — tz='UTC'
```

Para uso no Brasil, isso causa risco de comparacao errada entre horario local e horario UTC. Mesmo que sunrise/sunset sejam calculados corretamente, comparar contra UTC pode fazer o app decidir noite/dia na hora errada.

### 3. Polling continua a cada 60s durante a noite

Quando o DTU esta dormindo, o app recebe:

```text
Poll: no data — inverter sleeping, keeping last values
```

Como o night backoff nao ativou, o loop continua no intervalo normal:

```text
Polling started — every 60s
```

O esperado seria aplicar backoff noturno de 30 minutos.

### 4. Possivel chamada dupla de `_get_sunrise_sunset()`

No caminho de erro de polling, o padrao atual pode chamar `_is_night_time()` e depois chamar `_get_sunrise_sunset()` novamente apenas para montar o log.

Risco:

- primeira chamada retorna valores validos;
- segunda chamada retorna `None` por falha temporaria;
- o unpack `sunrise, sunset = None` causa erro.

### 5. Timezone pode ser lido duas vezes

Se `_get_sunrise_sunset()` le o timezone para calcular `sunrise/sunset`, e `_is_night_time()` le de novo para comparar o horario atual, uma falha ou valor diferente na segunda leitura pode misturar:

- sunrise/sunset em horario local;
- horario atual em UTC.

Isso pode ativar ou desativar o night backoff na hora errada.

### 6. Logs de warning sem prefixo do device

Algumas mensagens usam `_LOGGER.warning(...)`, por exemplo:

```text
Night backoff disabled — Homey geolocation not set
```

Elas aparecem sem o prefixo completo do device. Em ambientes com dois DTUs, fica mais dificil saber qual device gerou o aviso.

## Sugestoes de correcao

### 1. Adicionar fallback manual de localizacao solar

Adicionar settings opcionais ao device:

```text
solar_latitude
solar_longitude
solar_timezone
```

Exemplo para Sao Paulo:

```text
solar_latitude: -23.5505
solar_longitude: -46.6333
solar_timezone: America/Sao_Paulo
```

Uso sugerido:

- se Homey tiver latitude/longitude/timezone validos, usar Homey;
- se Homey vier vazio ou `UTC`, usar os valores manuais;
- se nao houver dados suficientes, nao aplicar night backoff.

### 2. Retornar timezone junto com sunrise/sunset

Alterar `_get_sunrise_sunset()` para retornar:

```python
tuple[float, float, str] | None
```

Ou seja:

```python
(sunrise, sunset, tz_name)
```

Assim `_is_night_time()` usa o mesmo timezone que foi usado pelo `astral`.

### 3. Evitar chamada dupla sem guard

Em vez de:

```python
if self._is_night_time():
    sunrise, sunset = self._get_sunrise_sunset()
```

Usar:

```python
sun_times = self._get_sunrise_sunset()
if sun_times is not None and self._is_night_time_from(sun_times):
    sunrise, sunset, tz_name = sun_times
```

Isso evita unpack de `None` e garante consistencia no ciclo de polling.

### 4. Checar noite antes de chamar o DTU

Hoje o app tenta chamar o DTU e so depois reage ao erro/no data. Durante a noite, melhor checar a janela solar antes:

```python
async def _poll_standard(self) -> None:
    sun_times = self._get_sunrise_sunset()
    if sun_times is not None and self._is_night_time_from(sun_times):
        await self._apply_night_backoff(sun_times)
        return

    data = await self._dtu.async_get_real_data_new()
```

Beneficio:

- nao consulta o DTU enquanto o inversor esta dormindo;
- reduz logs repetidos;
- respeita o backoff noturno de 30 minutos.

### 5. Centralizar aplicacao do night backoff

Criar helper:

```python
async def _apply_night_backoff(
    self,
    sun_times: tuple[float, float, str],
    reason: Exception | None = None,
) -> None:
    self._consecutive_errors = 0
    await self._apply_zeros()
    await self.set_available()
    self._backoff_until = time.monotonic() + _BACKOFF_NIGHT
    sunrise, sunset, _tz_name = sun_times
    suffix = f" | {reason}" if reason else ""
    self.log(
        f"poll: night — backing off 30 min | "
        f"sunrise≈{sunrise:.2f}h sunset≈{sunset:.2f}h{suffix}"
    )
```

Beneficio:

- evita duplicacao;
- deixa o caminho normal e o caminho de erro com o mesmo comportamento;
- mantem o device disponivel durante a noite.

### 6. Usar `self.log` para mensagens associadas ao device

Trocar warnings relacionados ao device de:

```python
_LOGGER.warning("Night backoff disabled — Homey geolocation not set")
```

para:

```python
self.log("Night backoff disabled — Homey geolocation not set")
```

Assim o log mostra qual device gerou a mensagem.

## Exemplo de codigo sugerido

### Helper para setting numerica

```python
def _get_float_setting(self, key: str) -> float | None:
    raw = self.get_setting(key)
    if raw in (None, ""):
        return None
    try:
        return float(raw)
    except (TypeError, ValueError):
        self.log(f"Ignoring invalid numeric setting {key}={raw!r}")
        return None
```

### Calculo de sunrise/sunset com fallback manual

```python
def _get_sunrise_sunset(self) -> tuple[float, float, str] | None:
    try:
        manual_lat = self._get_float_setting("solar_latitude")
        manual_lng = self._get_float_setting("solar_longitude")
        manual_tz = (self.get_setting("solar_timezone") or "").strip()

        lat = manual_lat
        lng = manual_lng
        tz_name = manual_tz

        if manual_lat is None:
            lat = self.homey.geolocation.get_latitude()
        if manual_lng is None:
            lng = self.homey.geolocation.get_longitude()
        if not manual_tz:
            tz_name = self.homey.clock.get_timezone()

        if lat is None or lng is None or not tz_name:
            self.log("Night backoff disabled — solar location or timezone not set")
            return None

        loc = LocationInfo(latitude=lat, longitude=lng, timezone=tz_name)
        s = sun(loc.observer, tzinfo=ZoneInfo(tz_name))
        sr = s["sunrise"].hour + s["sunrise"].minute / 60
        ss = s["sunset"].hour + s["sunset"].minute / 60

        self.log(
            f"Sun times: sunrise={sr:.2f}h sunset={ss:.2f}h "
            f"tz={tz_name} lat={lat} lng={lng}"
        )
        return (sr, ss, tz_name)
    except Exception as e:
        self.log(f"Night backoff disabled — sun calculation failed: {e}")
        return None
```

### Decisao de noite usando o mesmo timezone

```python
def _is_night_time(self) -> bool:
    return self._is_night_time_from(self._get_sunrise_sunset())

def _is_night_time_from(self, sun_times: tuple[float, float, str] | None) -> bool:
    if sun_times is None:
        return False

    sunrise, sunset, tz_name = sun_times
    try:
        now = datetime.now(timezone.utc)
        local = now.astimezone(ZoneInfo(tz_name))
        local_hour = local.hour + local.minute / 60
        is_night = local_hour < (sunrise - 0.5) or local_hour >= (sunset + 0.5)

        self.log(
            f"[TZ] tz={tz_name!r} utc={now.strftime('%H:%M')} "
            f"local={local.strftime('%H:%M')} ({local_hour:.2f}h) "
            f"window={sunrise - 0.5:.2f}h–{sunset + 0.5:.2f}h "
            f"→ {'NIGHT' if is_night else 'DAY'}"
        )
        return is_night
    except Exception as e:
        self.log(f"Night time check failed ({e}) — assuming daytime")
        return False
```

## Resultado esperado

Quando estiver de noite e as coordenadas/timezone estiverem validos, o log deve ficar parecido com:

```text
Sun times: sunrise=06.12h sunset=17.85h tz=America/Sao_Paulo lat=-23.5505 lng=-46.6333
[TZ] tz='America/Sao_Paulo' utc=23:49 local=20:49 (...) window=05.62h–18.35h → NIGHT
poll: night — backing off 30 min | sunrise≈06.12h sunset≈17.85h
```

O app deve:

- zerar medidas instantaneas;
- manter `meter_power` historico;
- manter o device disponivel;
- evitar polling a cada 60 segundos durante a noite;
- voltar ao polling normal durante a janela solar.
