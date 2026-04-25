# TODO — gpm.python.hoymiles

## Concluído ✅

- **Sun times cacheado** — calculado 1x/dia, não em cada poll.
- **Per-poll sun check log removido** — `_is_night_time_from()` não loga mais a cada ciclo.

## Pendente

- [ ] **Publicar no Homey App Store** — versão v1.1.9 pronta.

- [ ] **UX: confirm_structure enganoso com 2+ DTUs** —
  Quando 2+ DTUs são encontrados, a tela `confirm_structure` mostra os dados do
  primeiro DTU e pede ao utilizador para confirmar o `panel_count` — mas esse valor
  é **silenciosamente ignorado** pelo driver (o override só se aplica quando há
  exactamente 1 DTU). Ambos os DTUs usam a contagem auto-detectada.

  Exemplo real (log de Gabriel):
  - `confirm_structure — panels:2` (utilizador digitou 2)
  - `list_devices — DTU1 panels:4` / `list_devices — DTU2 panels:4` (auto-detect ignorou o 2)

  **Solução**: quando `len(found_dtus) > 1`, saltar a tela de confirmação ou
  mostrar uma nota "Multiple DTUs detected — panel count auto-set per DTU.
  Adjust individually in device Settings if needed."

  **Workaround actual**: as Settings de cada device já têm o campo `panel_count`
  editável — o utilizador pode corrigir por device após o pairing sem re-pair.

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
