# TODO — gpm.python.hoymiles

## Concluído ✅

- **Sun times cacheado** — calculado 1x/dia, não em cada poll.
- **Per-poll sun check log removido** — `_is_night_time_from()` não loga mais a cada ciclo.

## Pendente

- [ ] **Publicar no Homey App Store** — versão v1.1.9 pronta.

- [ ] **Panel count por DTU quando múltiplos DTUs são encontrados** —
  Hoje o `confirm_structure` permite ajustar o `panel_count` mas esse override
  só é aplicado quando há **exatamente 1 DTU** detectado. Com 2+ DTUs, cada um
  usa a contagem auto-detectada (comportamento correto para o caso Gabriel: 2×4=8).
  
  **Problema**: quem tiver DTUs com contagens diferentes (ex: um com 4 painéis e
  outro com 2) não consegue corrigir individualmente pelo pairing wizard — o
  `confirm_structure` mostra apenas 1 campo que não é aplicado quando há múltiplos.
  
  **Solução possível**: após o `list_devices` criar os devices, permitir ajustar
  o `panel_count` por device individualmente nas Settings de cada device
  (o campo já existe em `driver.compose.json`). O usuário faz o pairing,
  os dois DTUs entram com a contagem auto-detectada, e depois ajusta cada um
  nas settings se necessário.

- [ ] **Capabilities PV fantasma — microinversor com slots não ocupados** —
  O número de entradas PV por microinversor varia com o modelo:
  - 1 painel: HM-300/350/400
  - 2 painéis: HM-600/700/800, HMS-800/1000/1600/2000
  - 3 painéis: HMT-1800/2250
  - 4 painéis: HM-1200/1500

  Se um microinversor de 4 entradas tiver apenas 2 painéis conectados, o DTU pode
  reportar `pv_number=4` (slots físicos) em vez de 2 (painéis ativos). O app cria
  `pv3`/`pv4` que ficam permanentemente a zero — o usuário não sabe se é falha ou
  slot vazio.

  **Solução** (mesmo padrão do Deye): após o primeiro poll com sol presente,
  verificar `data.pv_data` — cada entrada com `voltage > 0` é um painel ativo.
  Contar os ativos, actualizar `panel_count` em settings e não criar capabilities
  para slots sem resposta. PV1/PV2 ficam sempre (estruturais).

  **Nota**: `pv_number` vem de `app_info.pv_number` no `_refresh_info`. Se esse
  valor já reflectir apenas microinversores activos (não slots físicos), o problema
  pode não existir na prática — confirmar com hardware real antes de implementar.

- [ ] **Script de scan para Hoymiles** — equivalente ao `deye_scan_mac.sh`,
  para diagnóstico de DTUs Hoymiles em terminal (IP, SN, painéis, dados em tempo real).

- [ ] **Repair flow** — não implementado ainda (ver CONTEXT.md).
