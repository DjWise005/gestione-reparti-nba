# Project Status

> Snapshot aggiornato dello stato reale del progetto.
> Aggiornare ad ogni sessione o cambio di stato rilevante.

---

## Stato generale
- **Versione:** v0.4.0
- **Stato:** STABLE
- **Ultimo aggiornamento:** 2026-05-12
- **Deploy attivo:** https://gestione-reparti-nba.vercel.app
- **Repository:** https://github.com/DjWise005/gestione-reparti-nba (branch: main, 25 commit)
- **Auto-deploy:** ✅ Attivo — ogni push su `main` triggera deploy Vercel automatico

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
| Pagina /dashboard       | ✅ Funzionante  | 7 statistiche aggregate da Airtable via service |
| Pagina /impostazioni    | ✅ Funzionante  | Info sistema reali: versione, ambiente, stato, ANO-001 |
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
│   │   │   └── page.tsx        🟡 placeholder
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
| ID     | Descrizione                                                    | Priorità  |
|--------|----------------------------------------------------------------|-----------|
| ANO-001 | Campi Airtable vuoti: Stato, Budget, N° Dipendenti — dashboard mostra zeri | 🟡 Non bloccante |

## Prossimi step (da NEXT_STEPS.md)
1. Popolare dati Airtable (Stato, Budget, N° Dipendenti) — azione manuale utente
2. Pianificare prossima feature di sviluppo
3. Pianificare autenticazione (PND-003)
