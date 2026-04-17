# Solucao: confirmar estrutura antes de criar capabilities

## Objetivo

Evitar que uma deteccao automatica errada crie o device Hoymiles com capabilities incorretas.

Esta solucao vale para o app Hoymiles e tem uma equivalente no app Deye.

## Diferenca em relacao ao Deye

No Deye, a decisao principal e o `model`.

No Hoymiles, a estrutura do device depende principalmente de:

- `panel_count`;
- `three_phase`;
- `is_hybrid`;
- `is_encrypted`;
- `inverter_sns`;
- `dtu_sn`.

Esses campos sao detectados no pareamento e usados para montar as capabilities.

## Problema atual

As capabilities sao criadas em `list_devices`, usando:

```python
_build_capabilities(count, three, hybrid)
_build_capabilities_options(count, three, hybrid)
```

Se a deteccao vier errada, o device pode ser criado com:

- numero errado de PVs;
- capabilities de fase erradas;
- modo hybrid incorreto;
- bateria ausente;
- capabilities sobrando;
- settings inconsistentes com o DTU real.

Exemplos:

- detecta `panel_count = 2`, mas o sistema tem 4 paineis;
- detecta `three_phase = False`, mas o sistema e trifasico;
- detecta `is_hybrid = False`, mas existe armazenamento/bateria;
- detecta encrypted incorretamente e depois o polling falha.

## Diretiva

Nao criar capabilities definitivas antes do usuario poder revisar a estrutura detectada.

Para Hoymiles, a tela de confirmacao deve revisar a estrutura, nao apenas um "modelo".

## Solucao recomendada para Hoymiles

## 1. Descobrir DTUs primeiro

O fluxo deve comecar por discovery:

- procurar DTUs na rede;
- mostrar cards dos DTUs encontrados;
- permitir fallback manual por IP.

Nesta etapa ainda nao criar capabilities.

## 2. Consultar dados basicos do DTU

Para cada DTU encontrado, tentar obter:

- IP;
- `dtu_sn`;
- firmware;
- hardware;
- SSID/RSSI, se disponivel;
- encrypted;
- `panel_count`;
- `three_phase`;
- `is_hybrid`;
- `inverter_sns`.

## 3. Mostrar card do DTU antes de criar device

Card sugerido:

```text
Hoymiles DTU
IP: 192.168.1.xxx
Serial: 4141...
Panels: 4
Phases: 1-phase / 3-phase
Hybrid: yes/no
Encrypted: yes/no
```

## 4. Tela de confirmacao da estrutura

Antes de `add_devices`, mostrar campos editaveis:

- `panel_count`;
- `three_phase`;
- `is_hybrid`;
- `is_encrypted`;
- `dtu_sn`, se estiver vazio ou duvidoso.

Tambem mostrar aviso:

```text
These settings define which capabilities Homey will create.
Changing them later may require re-pairing.
```

## 5. Auto-confirmar apenas quando confiavel

Regra sugerida:

- `app_info` respondeu e `pv_number` veio valido;
- `real_data` respondeu e confirmou `pv_data`;
- `three_phase` confirmado por `tgs_data`;
- `hybrid` confirmado por gateway/registry;
- encrypted confirmado por DFS/enc_rand.

Se qualquer parte estiver incerta:

- preselecionar valores detectados;
- mas pedir confirmacao manual.

## 6. Criar capabilities somente depois da confirmacao

`list_devices` deve usar a estrutura confirmada:

```python
count  = confirmed["panel_count"]
three  = confirmed["three_phase"]
hybrid = confirmed["is_hybrid"]

capabilities = _build_capabilities(count, three, hybrid)
options      = _build_capabilities_options(count, three, hybrid)
```

## Repair: ainda nao existe

O app Hoymiles ainda nao tem repair flow.

Portanto, a solucao principal deve ser feita no pareamento, antes da criacao das capabilities.

Enquanto nao houver repair, qualquer erro estrutural relevante deve ser resolvido por re-pair.

## Repair futuro: o que poderia fazer

Esta secao e apenas uma recomendacao futura, nao descreve funcionalidade existente.

## Repair futuro seguro

Repair pode:

- corrigir IP;
- atualizar encryption settings;
- atualizar `enc_rand`;
- atualizar firmware/DTU info;
- redetectar estrutura;
- mostrar diferencas encontradas.

## Repair futuro conservador para capabilities

Repair pode ser usado para ajustes pequenos, por exemplo:

- atualizar `is_encrypted`;
- atualizar `enc_rand`;
- corrigir IP;
- atualizar metadados.

Mas deve ter cuidado com:

- mudar `panel_count`;
- mudar `three_phase`;
- mudar `is_hybrid`.

Esses campos mudam a lista de capabilities esperadas.

## Quando exigir re-pair

Exigir re-pareamento quando:

- `panel_count` muda e exige adicionar/remover PV capabilities;
- `three_phase` muda e exige trocar voltage/current simples por fases;
- `is_hybrid` muda e exige battery capabilities;
- a estrutura de capabilities atual nao bate com a esperada.

Mensagem sugerida:

```text
The detected DTU structure requires different capabilities.
Please remove and add this Hoymiles device again to create the correct capabilities.
```

## Heuristica futura de compatibilidade

Antes de permitir salvar uma nova estrutura no repair, comparar:

- capabilities atuais;
- capabilities esperadas por `_build_capabilities(new_count, new_three, new_hybrid)`;
- se as capabilities novas sao subconjunto das atuais;
- se nao ha necessidade de remover capabilities;
- se Energy config continua valida.

Regra simples:

- se so muda IP/encryption/metadados: permitir repair;
- se muda capabilities estruturais: pedir re-pair.

## Melhor UX recomendada

Fluxo ideal:

1. `Searching for Hoymiles DTUs...`
2. Mostrar DTUs encontrados como cards.
3. Usuario seleciona DTU.
4. `Detecting DTU structure...`
5. Tela de confirmacao:
   - panels;
   - phases;
   - hybrid;
   - encrypted;
   - serial;
   - preview das capabilities principais.
6. Usuario confirma.
7. Homey cria o device com capabilities corretas.

## Preview recomendado

Exemplo para 4 paineis monofasico:

```text
Will create:
- Current Power
- Daily Energy
- Lifetime Energy
- PV1 Power / Voltage / Current
- PV2 Power / Voltage / Current
- PV3 Power / Voltage / Current
- PV4 Power / Voltage / Current
- Voltage
- Current
- Frequency
- Temperature
- Alarm
```

Exemplo para trifasico:

```text
Will create:
- Phase A Voltage / Current
- Phase B Voltage / Current
- Phase C Voltage / Current
```

Exemplo para hybrid:

```text
Will create:
- Current Power
- Daily Energy
- Lifetime Energy
- Battery SOC
- Alarm
```

## Conclusao

Para Hoymiles, o equivalente ao "modelo" e a estrutura detectada do DTU.

A melhor solucao e:

- detectar automaticamente;
- mostrar a estrutura antes de criar capabilities;
- permitir correcao manual;
- criar capabilities somente depois da confirmacao;
- como ainda nao ha repair, exigir re-pair quando mudar a estrutura de capabilities;
- se um repair for criado no futuro, usa-lo apenas para conexao/metadados ou mudancas seguras.
