# Next Steps

## Priorità alta
- [ ] **Separazione ambienti DEV/TEST/PROD** — definire strategia: branch separati, basi Airtable separate, variabili d'ambiente per ambiente. Senza questa separazione, debugging, audit e qualsiasi analisi futura sono ambigui. (RSK-001)
- [ ] **Strategia seed/demo data** — separare i dati demo dal database usato in produzione; definire procedura di reset/seed controllata. Dataset demo e dati reali non devono convivere: forecasting, KPI e AI futuri verrebbero contaminati. (RSK-002)
- [ ] **Distinzione dataset demo vs dati operativi reali** — rendere esplicito nel sistema quali record sono demo e quali sono dati reali aziendali
- [ ] **Schema enforcement e validazione dati** — introdurre validazione server-side dei valori Airtable prima che entrino nel service layer: enum Stato, range Budget, intero positivo N° Dipendenti. Senza questo, corruzione logica silenziosa di KPI e aggregazioni. (RSK-004)

## Priorità media
- [ ] Decidere prossima feature di sviluppo (da concordare con utente)
- [ ] Autenticazione (PND-003 — rimandato a fase dedicata)

## Backlog
- [ ] Creare tabella Dipendenti in Airtable e collegarla a Reparti
- [ ] Gestione turni / calendario

---
_Ultimo aggiornamento: 2026-05-12_
