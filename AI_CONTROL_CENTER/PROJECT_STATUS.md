# Project Status

> Snapshot aggiornato dello stato reale del progetto.
> Aggiornare ad ogni sessione o cambio di stato rilevante.

---

## Stato generale
- **Versione:** v0.1.0
- **Stato:** STABLE
- **Ultimo aggiornamento:** 2026-05-11
- **Deploy attivo:** https://gestione-reparti-nba.vercel.app
- **Repository:** https://github.com/DjWise005/gestione-reparti-nba (branch: main, 2 commit)

---

## Componenti del sistema

| Componente              | Stato          | Note                                           |
|-------------------------|----------------|------------------------------------------------|
| Next.js App (frontend)  | ✅ Funzionante  | Welcome page deployata su Vercel               |
| Airtable (database)     | ✅ Collegato    | 6 reparti presenti, API restituisce dati reali |
| API routes Next.js      | ✅ Attive       | GET /api/reparti — revalidate 60s              |
| Autenticazione          | ❌ Assente      | Non pianificata nella versione corrente         |
| GitHub Actions / CI     | ❌ Assente      | Nessuna pipeline configurata                   |
| Vercel env variables    | ⚠️ Mancanti    | Token Airtable solo in `.env.local` locale     |

---

## Airtable
- **Base:** Gestione Reparti NBA (`appFkHbvmtkKi0PYt`)
- **Tabella Reparti:** `tblTGnRQ8C97uzpbI`
- **Campi:** Nome Reparto · Responsabile · N° Dipendenti · Budget (€) · Sede · Stato · Email Reparto · Descrizione · Data Creazione
- **Record presenti:** 0 (tabella vuota)
- **SDK installato:** No — integrazione via REST API diretta da implementare

---

## Struttura src/ attuale
```
src/
├── app/
│   ├── api/
│   │   └── reparti/
│   │       └── route.ts ✅ GET /api/reparti
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx        ⚠️ metadata non aggiornati, lang="en"
│   └── page.tsx          ✅ welcome page personalizzata
├── lib/
│   └── airtable.ts       ✅ client server-only
└── types/
    └── airtable.ts       ✅ tipi TypeScript
```
**Assenti:** `components/`

---

## Problemi aperti (da OPEN_ISSUES.md)
| ID      | Problema                                   | Priorità |
|---------|--------------------------------------------|----------|
| ISS-001 | GitHub↔Vercel connection non collegata     | 🟡 Media |
| ISS-002 | Airtable `/meta/workspaces` inaccessibile  | 🟢 Bassa |
| ISS-003 | Token Airtable non su Vercel env variables | 🔴 Alta  |

---

## Prossimi step (da NEXT_STEPS.md)
1. Configurare variabili d'ambiente su Vercel (ISS-003)
2. Creare route API `/api/reparti`
3. Collegare GitHub a Vercel per deploy automatici
4. Aggiornare metadata in `layout.tsx`
