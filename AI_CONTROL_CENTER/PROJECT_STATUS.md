# Project Status

> Snapshot aggiornato dello stato reale del progetto.
> Aggiornare ad ogni sessione o cambio di stato rilevante.

---

## Stato generale
- **Versione:** v0.1.0
- **Stato:** STABLE
- **Ultimo aggiornamento:** 2026-05-11
- **Deploy attivo:** https://gestione-reparti-nba.vercel.app
- **Repository:** https://github.com/DjWise005/gestione-reparti-nba (branch: main, 5 commit)
- **Auto-deploy:** ✅ Attivo — ogni push su `main` triggera deploy Vercel automatico

---

## Componenti del sistema

| Componente              | Stato          | Note                                           |
|-------------------------|----------------|------------------------------------------------|
| Next.js App (frontend)  | ✅ Funzionante  | Welcome page + pagina /reparti                 |
| Airtable (database)     | ✅ Collegato    | 6 reparti presenti, API restituisce dati reali |
| API routes Next.js      | ✅ Attive       | GET /api/reparti — revalidate 60s              |
| Pagina /reparti         | ✅ Funzionante  | Server Component — test locale OK, prod da fare |
| Autenticazione          | ❌ Assente      | Non pianificata nella versione corrente         |
| GitHub↔Vercel auto-deploy | ✅ Attivo     | Ogni push su main triggera deploy automatico   |
| Vercel env variables    | ✅ Configurate  | Configurate manualmente dall'utente su Vercel  |

---

## Airtable
- **Base:** Gestione Reparti NBA (`appFkHbvmtkKi0PYt`)
- **Tabella Reparti:** `tblTGnRQ8C97uzpbI`
- **Campi:** Nome Reparto · Responsabile · N° Dipendenti · Budget (€) · Sede · Stato · Email Reparto · Descrizione · Data Creazione
- **Record presenti:** 6 (Amministrazione, Carrozzeria, Logistica, Officina, Preparazione, Vendite)
- **SDK installato:** No — integrazione via fetch nativo (server-only)

---

## Struttura src/ attuale
```
src/
├── app/
│   ├── api/
│   │   └── reparti/
│   │       └── route.ts    ✅ GET /api/reparti
│   ├── reparti/
│   │   └── page.tsx        ✅ Server Component — tabella reparti da Airtable
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx          ⚠️ metadata non aggiornati, lang="en"
│   └── page.tsx            ✅ welcome page + CTA → /reparti
├── lib/
│   └── airtable.ts         ✅ client server-only
└── types/
    └── airtable.ts         ✅ tipi TypeScript
```
**Assenti:** `components/`

---

## Problemi aperti (da OPEN_ISSUES.md)
| ID      | Problema                                   | Priorità |
|---------|--------------------------------------------|----------|
| ~~ISS-001~~ | ~~GitHub↔Vercel connection non collegata~~ | ✅ Risolto |
| ISS-002 | Airtable `/meta/workspaces` inaccessibile  | 🟢 Bassa |
| ~~ISS-003~~ | ~~Token Airtable non su Vercel env variables~~ | ✅ Risolto |

---

## Prossimi step (da NEXT_STEPS.md)
1. Test produzione /reparti (T-11) — dopo commit + push
2. Miglioramento UI /reparti (grafica accettata provvisoriamente)
3. Aggiornare metadata in `layout.tsx`
