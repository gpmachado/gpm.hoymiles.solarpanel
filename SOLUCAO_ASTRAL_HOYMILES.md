# Solucao Astral para polling Hoymiles

## Diagnostico do log

No run remoto apareceu:

```text
Timezone check — tz='UTC' utc=23:49 local=23:49 is_night=False
Night backoff disabled — Homey geolocation not set
Poll: no data — inverter sleeping, keeping last values
Polling started — every 60s
```

Isso mostra duas coisas:

- `self.homey.clock.get_timezone()` esta retornando `UTC`.
- `self.homey.geolocation.get_latitude()` / `get_longitude()` nao estao vindo preenchidos.

Com isso, o `astral` nao consegue calcular nascer/por do sol e o app cai no modo seguro: assume dia e continua polling a cada 60 segundos.

## Solucao proposta

Adicionar um fallback manual nas settings do device:

- `solar_latitude`
- `solar_longitude`
- `solar_timezone`

O codigo tenta usar a localizacao/timezone do Homey primeiro. Se o Homey nao fornecer, usa as settings manuais. Para Sao Paulo, por exemplo:

```text
solar_latitude: -23.5505
solar_longitude: -46.6333
solar_timezone: America/Sao_Paulo
```

Tambem vale mudar o polling padrao para checar a janela solar antes de chamar o DTU. Assim, durante a noite ele aplica zeros e faz backoff de 30 minutos sem ficar chamando o inversor a cada 60s.

## Patch conceitual em `drivers/hoymiles/device.py`

Adicionar constante:

```python
_UTC_TIMEZONES = {"UTC", "Etc/UTC"}
```

Reiniciar polling quando as settings solares mudarem:

```python
async def on_settings(self, old_settings, new_settings, changed_keys) -> None:
    if any(k in changed_keys for k in ("ip", "is_encrypted", "enc_rand")):
        await self._build_dtu()
    if any(k in changed_keys for k in ("polling_interval", "solar_latitude", "solar_longitude", "solar_timezone")):
        self._start_polling()
```

No inicio de `_poll_standard`, checar noite antes de chamar o DTU:

```python
async def _poll_standard(self) -> None:
    sun_times = self._get_sunrise_sunset()
    if sun_times is not None and self._is_night_time_from(sun_times):
        await self._apply_night_backoff(sun_times)
        return

    try:
        data = await self._dtu.async_get_real_data_new()
    except Exception as e:
        sun_times = self._get_sunrise_sunset()
        if sun_times is not None and self._is_night_time_from(sun_times):
            await self._apply_night_backoff(sun_times, e)
        else:
            self._consecutive_errors += 1
            self.log(f"Poll error ({self._consecutive_errors}): {e}")
            if self._consecutive_errors >= self._ERROR_THRESHOLD:
                await self.set_unavailable(str(e))
        return
```

Substituir `_get_sunrise_sunset` e `_is_night_time` por esta versao:

```python
def _get_sunrise_sunset(self) -> tuple[float, float, str] | None:
    """Returns (sunrise, sunset, timezone) using astral."""
    try:
        manual_lat = self._get_float_setting("solar_latitude")
        manual_lng = self._get_float_setting("solar_longitude")
        manual_tz  = (self.get_setting("solar_timezone") or "").strip()

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

        if manual_tz == "" and (manual_lat is not None or manual_lng is not None) and tz_name in _UTC_TIMEZONES:
            self.log("Night backoff disabled — set Solar timezone when using manual solar location")
            return None

        loc = LocationInfo(latitude=lat, longitude=lng, timezone=tz_name)
        s   = sun(loc.observer, tzinfo=ZoneInfo(tz_name))
        sr  = s["sunrise"].hour + s["sunrise"].minute / 60
        ss  = s["sunset"].hour  + s["sunset"].minute  / 60
        self.log(f"Sun times: sunrise={sr:.2f}h sunset={ss:.2f}h tz={tz_name} lat={lat} lng={lng}")
        return (sr, ss, tz_name)
    except Exception as e:
        self.log(f"Night backoff disabled — sun calculation failed: {e}")
        return None

def _is_night_time(self) -> bool:
    return self._is_night_time_from(self._get_sunrise_sunset())

def _is_night_time_from(self, sun_times: tuple[float, float, str] | None) -> bool:
    if sun_times is None:
        return False
    sunrise, sunset, tz_name = sun_times
    try:
        now        = datetime.now(timezone.utc)
        local      = now.astimezone(ZoneInfo(tz_name))
        local_hour = local.hour + local.minute / 60
        is_night   = local_hour < (sunrise - 0.5) or local_hour >= (sunset + 0.5)
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

Adicionar helpers:

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

## Settings em `drivers/hoymiles/driver.compose.json`

Adicionar estes blocos logo depois de `polling_interval`:

```json
{
  "id": "solar_latitude",
  "type": "number",
  "label": { "en": "Solar latitude" },
  "hint": { "en": "Optional fallback when Homey location is unavailable. Example: -23.5505." },
  "min": -90,
  "max": 90
},
{
  "id": "solar_longitude",
  "type": "number",
  "label": { "en": "Solar longitude" },
  "hint": { "en": "Optional fallback when Homey location is unavailable. Example: -46.6333." },
  "min": -180,
  "max": 180
},
{
  "id": "solar_timezone",
  "type": "text",
  "label": { "en": "Solar timezone" },
  "hint": { "en": "IANA timezone used with manual coordinates. Example: America/Sao_Paulo." },
  "placeholder": { "en": "America/Sao_Paulo" }
}
```

Depois de aplicar, rodar:

```sh
homey app run --remote
```

O log esperado a noite fica parecido com:

```text
Sun times: sunrise=06.xxh sunset=17.xxh tz=America/Sao_Paulo lat=-23.5505 lng=-46.6333
[TZ] tz='America/Sao_Paulo' utc=23:49 local=20:49 (...) window=...
poll: night — backing off 30 min | sunrise≈06.xxh sunset≈17.xxh
```
