# Project Status

> Snapshot aggiornato dello stato reale del progetto.
> Aggiornare ad ogni sessione o cambio di stato rilevante.

---

## Stato generale
- **Versione:** v0.4.0
- **Stato:** FUNCTIONALLY VALIDATED
- **Ultimo aggiornamento:** 2026-05-12
- **Deploy attivo:** https://gestione-reparti-nba.vercel.app
- **Repository:** https://github.com/DjWise005/gestione-reparti-nba (branch: main, 27 commit)
- **Auto-deploy:** ✅ Attivo — ogni push su `main` triggera deploy Vercel automatico
- **Branch attivi:** `main` (Production) · `develop` (Preview)
- **Ambienti Vercel:** Production → Airtable PROD · Preview → Airtable TEST (separazione validata 2026-05-12)

---

## Componenti del sistema

| Componente              | Stato          | Note                                           |
|-------------------------|----------------|------------------------------------------------|
| Next.js App (frontend)  | ✅ Funzionante  | Landing page + Application Shell MVP           |
| Application Shell       | ✅ Completata   | Sidebar + Topbar + MobileNav — test locale ✅  |
| Airtable (database)     | ✅ Collegato    | 6 reparti presenti, API restituisce dati reali |
| API routes Next.js      | ✅ Attive       | GET /api/reparti — revalidate 60s              |
| Pagina /reparti         | ✅ Funzionante  | Server Component — tabella cliccabile          |
| Pagina /reparti/[id]    | ✅ Funzionante  | Server Component — dettaglio con dati reali    |
| Pagina /dashboard       | ✅ Validata     | 7 statistiche end-to-end: raw Airtable → API → service → UI |
| Pagina /impostazioni    | ✅ Funzionante  | Info sistema reali: versione, ambiente, stato, ANO-001 |
| Autenticazione          | ❌ Assente      | Non pianificata nella versione corrente         |
| GitHub↔Vercel auto-deploy | ✅ Attivo     | Ogni push su main triggera deploy automatico   |
| Vercel env variables    | ✅ Configurate  | Configurate manualmente dall'utente su Vercel  |
| Branch develop          | ✅ Attivo       | Creato e pushato — Preview deployment collegato |
| Airtable TEST base      | ✅ Attiva       | Base separata da PROD — dataset SEED DATA TEST ENV |
| Branch protection main  | ✅ Attiva       | Push diretti bloccati — obbligatorio PR develop→main |
| .env.local (locale)     | ✅ Isolato      | Punta ad Airtable TEST — sviluppo locale separato da PROD |
| Workflow PR             | ✅ Formalizzato | WORKFLOW_PR.md — checklist QA, hotfix, convenzioni commit |

---

## Airtable
- **Base:** Gestione Reparti NBA (`appFkHbvmtkKi0PYt`)
- **Tabella Reparti:** `tblTGnRQ8C97uzpbI`
- **Campi:** Nome Reparto · Responsabile · N° Dipendenti · Budget (€) · Sede · Stato · Email Reparto · Descrizione · Data Creazione
- **Record presenti:** 6 (Amministrazione, Carrozzeria, Logistica, Officina, Preparazione, Vendite)
- **SDK installato:** No — integrazione via fetch nativo (server-only)

> ⚠️ **Dataset attuale: DEMO / QA** — I valori di Stato, Budget e N° Dipendenti presenti sono dati demo inseriti a scopo di test e validazione tecnica. Non rappresentano dati operativi reali aziendali. Vanno sostituiti con dati reali prima di un uso operativo.

---

## Dipendenze aggiuntive (post shadcn/ui)
| Pacchetto               | Versione  | Motivo              |
|-------------------------|-----------|---------------------|
| `shadcn`                | ^4.7.0    | CLI shadcn (runtime)|
| `@base-ui/react`        | ^1.4.1    | Headless UI (base-nova preset) |
| `clsx`                  | ^2.1.1    | Utility classi CSS  |
| `tailwind-merge`        | ^3.6.0    | Merge classi Tailwind |
| `class-variance-authority` | ^0.7.1 | Varianti componenti |
| `lucide-react`          | ^1.14.0   | Icone               |
| `tw-animate-css`        | ^1.4.0    | Animazioni CSS      |

---

## Struttura src/ attuale
```
src/
├── app/
│   ├── (app)/
│   │   ├── dashboard/
│   │   │   └── page.tsx        ✅ statistiche reali via getRepartiStats()
│   │   ├── impostazioni/
│   │   │   └── page.tsx        ✅ info sistema reali (v0.4.0, ambiente, ANO-001)
│   │   ├── reparti/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx    ✅ Server Component — dettaglio reparto
│   │   │   └── page.tsx        ✅ Server Component — lista cliccabile
│   │   └── layout.tsx          ✅ shell: Sidebar + Topbar + MobileNav
│   ├── api/
│   │   └── reparti/
│   │       └── route.ts        ✅ GET /api/reparti
│   ├── favicon.ico
│   ├── globals.css             ✅ tema shadcn v4 (oklch vars)
│   ├── layout.tsx              ✅ root layout (lang="it", metadata OK)
│   └── page.tsx                ✅ landing page + CTA → /reparti
├── components/
│   ├── layout/
│   │   ├── MobileNav.tsx       ✅ bottom nav mobile (md:hidden)
│   │   ├── Sidebar.tsx         ✅ navigazione desktop
│   │   └── Topbar.tsx          ✅ header titolo dinamico + utente
│   ├── shared/
│   │   └── PageContainer.tsx   ✅ PageContainer + PageHeader
│   └── ui/
│       └── button.tsx          ✅ shadcn Button (base-nova)
├── services/
│   └── reparti.service.ts      ✅ service layer — getRepartiList/Detail/Stats
├── lib/
│   ├── airtable.ts             ✅ client server-only (accesso solo via service)
│   └── utils.ts                ✅ cn() helper (clsx + tailwind-merge)
└── types/
    └── airtable.ts             ✅ tipi TypeScript
```
**Radice:** `components.json` (configurazione shadcn)

---

## Problemi aperti (da OPEN_ISSUES.md)
| ID      | Problema                                   | Priorità |
|---------|--------------------------------------------|----------|
| ~~ISS-001~~ | ~~GitHub↔Vercel connection non collegata~~ | ✅ Risolto |
| ISS-002 | Airtable `/meta/workspaces` inaccessibile  | 🟢 Bassa |
| ~~ISS-003~~ | ~~Token Airtable non su Vercel env variables~~ | ✅ Risolto |

---

## Anomalie note
| ID      | Descrizione                                                                   | Priorità      | Stato    |
|---------|-------------------------------------------------------------------------------|---------------|----------|
| ~~ANO-001~~ | ~~Campi Airtable vuoti: Stato, Budget, N° Dipendenti — dashboard mostra zeri~~ | —         | ✅ RISOLTA TECNICAMENTE — dataset demo popolato, validazione end-to-end completata |

## Rischi residui
| ID      | Rischio                                                                                  | Priorità  |
|---------|------------------------------------------------------------------------------------------|-----------|
| RSK-001 | **Separazione ambienti — MITIGATO OPERATIVAMENTE** — DEV (locale) · Preview · Production su Airtable separate; branch protection su main; workflow PR formalizzato; .env.local isolato su TEST. Residuo: seed script controllato (backlog). | 🟢 Bassa |
| RSK-002 | **Contaminazione dataset demo/reale — MITIGATO OPERATIVAMENTE** — tre ambienti distinti con dataset indipendenti; cross-contamination test passato. Residuo: seed script controllato (backlog). | 🟢 Bassa |
| RSK-003 | Route `(app)/` accessibili senza autenticazione (accettato — DEC-005) | 🟡 Media |
| RSK-004 | **Assenza schema enforcement / validazione dati lato server** — Airtable accetta valori arbitrari senza validazione: stati non previsti (typo, valori liberi), budget negativi o incoerenti, N° Dipendenti come testo libero, formati inconsistenti tra record. Nessun layer applicativo valida i dati in ingresso prima della lettura. Conseguenze: corruzione logica silenziosa di KPI, aggregazioni, forecasting e workflow futuri. | 🔴 Alta |

## Prossimi step (da NEXT_STEPS.md)
1. ~~Separazione ambienti~~ → ✅ MITIGATO OPERATIVAMENTE — Fase 1+2 complete
2. ~~Strategia seed/demo data~~ → ✅ MITIGATO OPERATIVAMENTE — seed script rimane in backlog
3. Schema enforcement e validazione dati (RSK-004 — priorità alta)
4. Pianificare prossima feature di sviluppo
5. Pianificare autenticazione (PND-003)
