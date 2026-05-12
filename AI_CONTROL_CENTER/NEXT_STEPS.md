# Next Steps

## Priorità alta
- [x] ~~**Separazione ambienti DEV/PREVIEW/PROD**~~ → ✅ MITIGATO OPERATIVAMENTE: .env.local su TEST, branch develop attivo, Preview → Airtable TEST, Production → Airtable PROD, branch protection main, workflow PR formalizzato. (RSK-001 MITIGATO OPERATIVAMENTE)
- [x] ~~**Distinzione dataset demo vs dati operativi reali**~~ → ✅ MITIGATO OPERATIVAMENTE: tre ambienti con dataset indipendenti, cross-contamination test passato. (RSK-002 MITIGATO OPERATIVAMENTE)
- [ ] **Schema enforcement e validazione dati** — introdurre validazione server-side dei valori Airtable prima che entrino nel service layer: enum Stato, range Budget, intero positivo N° Dipendenti. Senza questo, corruzione logica silenziosa di KPI e aggregazioni. (RSK-004)

## Priorità media
- [ ] Decidere prossima feature di sviluppo (da concordare con utente)
- [ ] Autenticazione (PND-003 — rimandato a fase dedicata)

## Backlog
- [ ] Creare tabella Dipendenti in Airtable e collegarla a Reparti
- [ ] Gestione turni / calendario

---
_Ultimo aggiornamento: 2026-05-12 — separazione ambienti Fase 1+2 completata, RSK-001/002 MITIGATI OPERATIVAMENTE_
