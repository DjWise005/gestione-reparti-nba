# Next Steps

## Priorità alta
- [x] ~~**Separazione ambienti DEV/TEST/PROD — Fase 1**~~ → MITIGATO: branch `develop`, Preview deployment, Airtable TEST separata da PROD, cross-contamination test passato. (RSK-001 MITIGATO FASE 1)
- [ ] **Separazione ambienti — Fase 2 (completamento)**:
  - [ ] `.env.local` → puntare ad Airtable TEST per sviluppo locale
  - [ ] Regola operativa: sviluppo solo su `develop`, mai commit diretti su `main`
  - [ ] Branch protection su `main` (GitHub Settings)
  - [ ] Procedura PR `develop` → `main` definita
  - [ ] Seed script controllato per Airtable TEST (futuro)
- [x] ~~**Distinzione dataset demo vs dati operativi reali — Fase 1**~~ → MITIGATO: Preview usa dataset "SEED DATA — TEST ENV" separato da PROD. (RSK-002 MITIGATO FASE 1)
- [ ] **Schema enforcement e validazione dati** — introdurre validazione server-side dei valori Airtable prima che entrino nel service layer: enum Stato, range Budget, intero positivo N° Dipendenti. Senza questo, corruzione logica silenziosa di KPI e aggregazioni. (RSK-004)

## Priorità media
- [ ] Decidere prossima feature di sviluppo (da concordare con utente)
- [ ] Autenticazione (PND-003 — rimandato a fase dedicata)

## Backlog
- [ ] Creare tabella Dipendenti in Airtable e collegarla a Reparti
- [ ] Gestione turni / calendario

---
_Ultimo aggiornamento: 2026-05-12 — separazione ambienti Fase 1 completata_
