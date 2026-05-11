# Project Status

> Snapshot aggiornato dello stato reale del progetto.
> Aggiornare ad ogni sessione o cambio di stato rilevante.

---

## Stato generale
- **Versione:** v0.2.0
- **Stato:** STABLE
- **Ultimo aggiornamento:** 2026-05-11
- **Deploy attivo:** https://gestione-reparti-nba.vercel.app
- **Repository:** https://github.com/DjWise005/gestione-reparti-nba (branch: main, 18 commit)
- **Auto-deploy:** ✅ Attivo — ogni push su `main` triggera deploy Vercel automatico

---

## Componenti del sistema

| Componente              | Stato          | Note                                           |
|-------------------------|----------------|------------------------------------------------|
| Next.js App (frontend)  | ✅ Funzionante  | Landing page + Application Shell MVP           |
| Application Shell       | ✅ Completata   | Sidebar + Topbar + MobileNav — test locale ✅  |
| Airtable (database)     | ✅ Collegato    | 6 reparti presenti, API restituisce dati reali |
| API routes Next.js      | ✅ Attive       | GET /api/reparti — revalidate 60s              |
| Pagina /reparti         | ✅ Funzionante  | Server Component — layout custom (da refactor) |
| Pagina /dashboard       | 🟡 Placeholder  | Struttura presente, nessun dato reale          |
| Pagina /impostazioni    | 🟡 Placeholder  | Struttura presente, configurazione da fare     |
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
│   │   │   └── page.tsx        🟡 placeholder
│   │   ├── impostazioni/
│   │   │   └── page.tsx        🟡 placeholder
│   │   ├── reparti/
│   │   │   └── page.tsx        ✅ Server Component — tabella Airtable
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
├── lib/
│   ├── airtable.ts             ✅ client server-only
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

## Prossimi step (da NEXT_STEPS.md)
1. Aggiornare CTA landing page (`src/app/page.tsx`) da `/reparti` a `/dashboard`
2. Test produzione post-CTA
3. Checkpoint — prima feature reale solo dopo validazione completa
4. Miglioramento UI /reparti (grafica accettata provvisoriamente)
