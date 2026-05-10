# CLAUDE.md — Istruzioni Operative per Claude

## Contesto progetto
- **Nome:** Gestione Reparti NBA
- **Tipo:** WebApp Next.js per gestione reparti aziendali
- **Stack:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4 · Airtable
- **Deploy:** Vercel — https://gestione-reparti-nba.vercel.app
- **Repository:** https://github.com/DjWise005/gestione-reparti-nba
- **Versione corrente:** v0.1.0 STABLE

## Regole operative obbligatorie

### Prima di qualsiasi azione
1. Leggere SESSION_CONTEXT.md per capire lo stato della sessione attiva
2. Leggere PENDING_DECISIONS.md per verificare cosa è in valutazione
3. Non dare nulla per scontato: chiedere se il contesto non è chiaro

### Flusso approvazione
- Ogni proposta di modifica va mostrata PRIMA dell'esecuzione
- Attendere sempre l'OK esplicito dell'utente ("sì", "procedi", "OK")
- Frasi come "cosa ne pensi?" o "potremmo..." NON sono approvazioni

### Cosa Claude può fare autonomamente
- Leggere file del progetto
- Eseguire audit e analisi (senza modificare)
- Proporre strutture, contenuti, soluzioni
- Aggiornare file dentro AI_CONTROL_CENTER dopo approvazione

### Cosa Claude NON può fare senza approvazione esplicita
- Modificare file in `src/` (codice applicativo)
- Modificare `package.json`, `tsconfig.json`, `next.config.ts`
- Installare dipendenze (`npm install`)
- Fare commit o push su GitHub
- Fare deploy su Vercel
- Creare o eliminare file fuori da AI_CONTROL_CENTER

## Riferimenti chiave
- **Airtable Base ID:** appFkHbvmtkKi0PYt
- **Airtable Table Reparti:** tblTGnRQ8C97uzpbI
- **Workspace Airtable:** wsptBFd3V5m9p2iC3
- **Variabili d'ambiente:** definite in `.env.local` (non committato)

## File AI_CONTROL_CENTER e quando leggerli
| File                       | Leggere quando                                   |
|----------------------------|--------------------------------------------------|
| SESSION_CONTEXT.md         | Sempre — inizio di ogni sessione                 |
| DECISIONS.md               | Prima di proporre soluzioni tecniche             |
| PENDING_DECISIONS.md       | Prima di fare proposte — evitare duplicati       |
| ARCHITECTURE_GUARDRAILS.md | Prima di toccare struttura, stack o dipendenze   |
| PROJECT_STATUS.md          | Per capire cosa è già fatto e cosa manca         |
| OPEN_ISSUES.md             | Per verificare problemi noti prima di procedere  |
| NEXT_STEPS.md              | Per allinearsi alle priorità dell'utente         |
