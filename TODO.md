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

- [ ] **Capabilities PV fantasma quando DTU tem slots não ocupados** —
  Se o DTU reporta `pv_number=4` mas o usuário só tem 2 microinversores conectados,
  o app cria `pv3`/`pv4` que ficam permanentemente a zero. O usuário vê dois
  "painéis" sem geração e não sabe se é falha ou slot vazio — confunde e polui o dashboard.

  **Solução** (mesmo padrão do Deye): após o primeiro poll com dados reais (sol presente),
  verificar `data.pv_data` — cada entrada representa um microinversor que efetivamente
  respondeu ao DTU. Contar quantos têm `power > 0` ou `voltage > 0` e ajustar
  `panel_count` em settings + remover/não criar capabilities dos slots sem resposta.
  
  PV1/PV2 ficam sempre (estruturais, mesmo a zero). PV3/PV4+ só ficam se detectados
  com geração real. Mesma lógica já implementada no Deye em `_refresh_info`.

  **Atenção**: o DTU pode reportar `pv_number` correto (contagem real de microinversores
  registados), então o problema só ocorre se o DTU conta por slots de hardware e não
  por microinversores ativos. Confirmar com dados reais antes de implementar.

- [ ] **Script de scan para Hoymiles** — equivalente ao `deye_scan_mac.sh`,
  para diagnóstico de DTUs Hoymiles em terminal (IP, SN, painéis, dados em tempo real).

- [ ] **Repair flow** — não implementado ainda (ver CONTEXT.md).
