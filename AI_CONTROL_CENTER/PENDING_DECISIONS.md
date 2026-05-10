# Pending Decisions

> Questo file contiene idee, proposte e modifiche NON ancora approvate.
> Solo dopo approvazione esplicita dell'utente una voce viene spostata in DECISIONS.md.

---

## [PND-001] — Integrazione Airtable nel codice Next.js
- **Data proposta:** 2026-05-06
- **Proposta da:** Claude
- **Descrizione:** Creare le route API in Next.js per leggere e scrivere i reparti da Airtable, e visualizzarli nella UI
- **Alternative valutate:**
  - Opzione A: Usare `airtable.js` SDK ufficiale
  - Opzione B: Chiamate REST dirette con `fetch` native di Next.js (nessuna dipendenza aggiuntiva)
- **Dubbi aperti:** Gestione delle variabili d'ambiente su Vercel per il token Airtable
- **Impatto potenziale:** Modifica a `src/app/`, aggiunta route `/api/reparti`
- **Stato:** 🟡 In valutazione

---

## [PND-002] — Collegamento GitHub ↔ Vercel per deploy automatico
- **Data proposta:** 2026-05-06
- **Proposta da:** Claude
- **Descrizione:** Collegare il repo GitHub a Vercel tramite Login Connection per attivare deploy automatici ad ogni push su `main`
- **Alternative valutate:**
  - Opzione A: Collegamento tramite dashboard Vercel (richiede login GitHub su Vercel)
  - Opzione B: Mantenere deploy manuale via CLI (`vercel --prod`)
- **Dubbi aperti:** L'utente deve aggiungere la GitHub Connection nelle impostazioni account Vercel
- **Impatto potenziale:** Ogni push su `main` triggera un deploy in produzione automaticamente
- **Stato:** 🟡 In valutazione
