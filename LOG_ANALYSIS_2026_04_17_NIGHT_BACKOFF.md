# Analise de log: Hoymiles night backoff em UTC

## Log analisado

Execucao:

```text
homey app run --remote
```

Horario do log:

```text
2026-04-17 00:17...
```

Trechos relevantes:

```text
Night backoff disabled — solar location or timezone not set
Timezone check — tz='UTC' utc=00:17 local=00:17 is_night=False
DTU built — ip:192.168.1.202 encrypted:False
DTU built — ip:192.168.1.201 encrypted:False
Poll: no data — inverter sleeping, keeping last values
Polling started — every 60s
```

Depois disso, a cada ciclo:

```text
Night backoff disabled — solar location or timezone not set
Poll: no data — inverter sleeping, keeping last values
```

## Conclusao

O app esta em modo seguro, mas ainda nao esta aplicando night backoff.

Ele detecta corretamente que:

- Homey esta retornando timezone como `UTC`;
- geolocalizacao/timezone solar nao estao disponiveis;
- por seguranca, `is_night=False`;
- portanto nao aplica night mode;
- continua polling normal a cada 60 segundos.

## O que esta correto

O comportamento atual evita o problema mais grave:

- nao entra em night mode usando UTC indevidamente;
- nao zera capabilities por falso positivo;
- nao marca indisponivel por erro de timezone;
- mantem ultimos valores quando o inversor esta dormindo.

Isso e melhor do que assumir noite com horario UTC.

## O que ainda nao esta ideal

Como o app nao consegue calcular a janela solar, ele nao sabe que e noite.

Consequencia:

- continua consultando os DTUs a cada 60 segundos;
- recebe `no data`;
- log fica repetitivo;
- nao usa backoff de 30 minutos;
- nao aplica zeros de forma intencional por night mode.

## Causa raiz observada

O log confirma:

```text
tz='UTC'
Night backoff disabled — solar location or timezone not set
```

Isso significa que o Homey nao esta fornecendo uma localizacao/timezone util para o calculo solar.

## Solucao recomendada

Adicionar fallback manual por device:

- `solar_latitude`;
- `solar_longitude`;
- `solar_timezone`.

Exemplo para Sao Paulo:

```text
solar_latitude: -23.5505
solar_longitude: -46.6333
solar_timezone: America/Sao_Paulo
```

Com isso, o app poderia calcular:

- sunrise;
- sunset;
- hora local real;
- janela de polling diurno.

## Comportamento esperado depois da melhoria

A noite:

```text
Sun times: sunrise=06.xx sunset=17.xx tz=America/Sao_Paulo
[TZ] utc=00:17 local=21:17 window=...
poll: night — backing off 30 min
```

Durante esse periodo:

- nao chama o DTU a cada 60s;
- aplica zeros em valores instantaneos, se esta for a decisao de UX;
- preserva energia total;
- mantem device disponivel;
- evita spam de log.

## Observacao importante

Esse log tambem confirma que timestamp UTC no `homey app run --remote` e esperado ou, pelo menos, recorrente.

O problema nao e o timestamp do log ser UTC.

O problema seria usar UTC como horario local para decidir night mode.

Neste log, o app nao fez isso. Ele desabilitou night backoff por falta de localizacao/timezone, que e a escolha conservadora correta.

## Proxima decisao

Escolher entre:

1. manter comportamento seguro atual:
   - sem night backoff quando faltar localizacao;
   - polling continua a cada 60s;
   - menos risco, mais ruido;

2. adicionar fallback manual:
   - reduz polling noturno;
   - melhora UX;
   - exige settings solares preenchidas;

3. adicionar tambem setting para habilitar/desabilitar night backoff:
   - melhor para troubleshooting;
   - mais controle para usuario avancado.

## Recomendacao final

Implementar fallback manual de localizacao/timezone como melhoria futura, mas manter a regra conservadora:

```text
sem timezone/localizacao confiavel -> assume daytime -> nao aplica night off
```

Isso evita falso night mode e preserva seguranca da UX.
