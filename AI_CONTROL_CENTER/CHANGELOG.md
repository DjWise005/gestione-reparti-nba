# Changelog

> Contiene SOLO: file modificati, data, modifica eseguita, esito.
> Per le motivazioni vedere DECISIONS.md.

---

## [2026-05-12] — Separazione ambienti Fase 1 (RSK-001 / RSK-002)

| Campo       | Dettaglio                                                                                   |
|-------------|---------------------------------------------------------------------------------------------|
| Scope       | Governance + infrastruttura — nessuna modifica codice applicativo                           |
| Azioni      | Branch `develop` creato e pushato; Vercel Preview deployment attivo; env vars Preview configurate manualmente dall'utente (`AIRTABLE_BASE_ID` e `AIRTABLE_TABLE_REPARTI` separati per Production/Preview); cross-contamination test passato |
| Verifica    | Preview → Airtable TEST ✅ (descrizione "SEED DATA — TEST ENV") · Production → Airtable PROD ✅ (dati operativi non contaminati) |
| Commit      | `e81ac38` (trigger Preview deployment)                                                      |
| Eseguita da | Utente (Fase B env vars) + Claude (branch, commit, push, verifica)                         |
| Esito       | ✅ RSK-001 e RSK-002 MITIGATI FASE 1 — restano .env.local, branch protection, PR procedure, seed script |

---

## [2026-05-05] — Inizializzazione progetto Next.js

| Campo       | Dettaglio                                              |
|-------------|--------------------------------------------------------|
| File        | `tutto il progetto`                                    |
| Modifica    | Creazione progetto con `create-next-app` (TS + Tailwind + App Router) |
| Eseguita da | Claude                                                 |
| Esito       | ✅ OK                                                  |

---

## [2026-05-05] — Pagina di benvenuto

| Campo       | Dettaglio                                              |
|-------------|--------------------------------------------------------|
| File        | `src/app/page.tsx`                                     |
| Modifica    | Sostituzione pagina default con welcome page "Gestione Reparti NBA" |
| Eseguita da | Claude                                                 |
| Esito       | ✅ OK                                                  |

---

## [2026-05-05] — Deploy su Vercel

| Campo       | Dettaglio                                              |
|-------------|--------------------------------------------------------|
| File        | `.vercel/` (generato automaticamente)                  |
| Modifica    | Primo deploy in produzione su Vercel                   |
| Eseguita da | Claude (vercel CLI)                                    |
| Esito       | ✅ OK — https://gestione-reparti-nba.vercel.app        |

---

## [2026-05-05] — Repository GitHub

| Campo       | Dettaglio                                              |
|-------------|--------------------------------------------------------|
| File        | Tutto il progetto                                      |
| Modifica    | Creazione repo pubblico e push branch `main`           |
| Eseguita da | Claude (gh CLI)                                        |
| Esito       | ✅ OK — https://github.com/DjWise005/gestione-reparti-nba |

---

## [2026-05-06] — Configurazione Airtable

| Campo       | Dettaglio                                              |
|-------------|--------------------------------------------------------|
| File        | `.env.local`                                           |
| Modifica    | Creazione base Airtable "Gestione Reparti NBA" e tabella "Reparti"; salvataggio token e Base ID in `.env.local` |
| Eseguita da | Claude (Airtable REST API)                             |
| Esito       | ✅ OK — Base ID: appFkHbvmtkKi0PYt                     |

---

## [2026-05-11] — Verifica auto-deploy e chiusura ISS-001

| Campo       | Dettaglio                                                                  |
|-------------|----------------------------------------------------------------------------|
| File        | `test-auto-deploy.txt` (creato e rimosso)                                  |
| Modifica    | File di test creato, pushato su `main` (commit `e3550aa`), deploy automatico verificato in 35s, file rimosso |
| Eseguita da | Utente (GitHub↔Vercel connection) + Claude (commit/push/rimozione file)    |
| Esito       | ✅ OK — ISS-001 chiusa, auto-deploy attivo                                  |

---

## [2026-05-11] — Deploy produzione e chiusura ISS-003

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File        | Vercel (env variables + deploy)                                  |
| Modifica    | Variabili d'ambiente configurate manualmente dall'utente su Vercel; redeploy manuale via `vercel --prod` (commit ef2bb2d) |
| Eseguita da | Utente (env vars) + Claude (deploy)                              |
| Esito       | ✅ OK — T-06 passato in produzione, ISS-003 chiusa               |

---

## [2026-05-11] — Bootstrap Airtable Integration Layer

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File        | `src/types/airtable.ts`                                          |
| Modifica    | Creazione tipi TypeScript (RepartoFields, AirtableRecord, AirtableResponse, Reparto) |
| Eseguita da | Claude                                                           |
| Esito       | ✅ OK                                                             |

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File        | `src/lib/airtable.ts`                                            |
| Modifica    | Creazione client Airtable server-only con fetch nativo, check 3 env vars, revalidate 60s |
| Eseguita da | Claude                                                           |
| Esito       | ✅ OK                                                             |

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File        | `src/app/api/reparti/route.ts`                                   |
| Modifica    | Creazione route GET /api/reparti con Response.json() (Next.js 16) |
| Eseguita da | Claude                                                           |
| Esito       | ✅ OK                                                             |

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File        | `package.json` / `package-lock.json`                             |
| Modifica    | Installazione `server-only` (1 pacchetto, zero dipendenze transitive) |
| Eseguita da | Claude (approvato esplicitamente)                                |
| Esito       | ✅ OK                                                             |

---

## [2026-05-11] — Installazione shadcn/ui v4 (DEC-004)

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File creati | `components.json`, `src/lib/utils.ts`, `src/components/ui/button.tsx` |
| File modificati | `package.json`, `package-lock.json`, `src/app/globals.css`  |
| Modifica    | Installazione shadcn/ui v4.7.0 con preset `base-nova`; aggiunta dipendenze: `@base-ui/react`, `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`, `tw-animate-css` |
| Eseguita da | Claude (approvata con DEC-004)                                   |
| Esito       | ✅ OK — build TypeScript pulita dopo installazione               |

---

## [2026-05-11] — Routing MVP completo + Refactor PageContainer

| Campo       | Dettaglio                                                                    |
|-------------|------------------------------------------------------------------------------|
| File creati | `src/app/(app)/impostazioni/page.tsx`                                        |
| File modificati | `src/app/(app)/dashboard/page.tsx`, `src/app/(app)/reparti/page.tsx`     |
| Modifica    | Refactor dashboard e reparti con PageContainer/PageHeader; aggiunta route /impostazioni; routing MVP completato (/dashboard · /reparti · /impostazioni); test produzione shell OK |
| Commit chiave | `91218db` dashboard refactor · `33398ff` reparti refactor · `df0f17d` impostazioni |
| Eseguita da | Claude (approvazione step-by-step)                                           |
| Esito       | ✅ Application Shell MVP completa e verificata in produzione                 |

---

## [2026-05-11] — Application Shell MVP completata

| Campo       | Dettaglio                                                                    |
|-------------|------------------------------------------------------------------------------|
| File creati | `(app)/layout.tsx`, `(app)/dashboard/page.tsx`, `components/layout/Sidebar.tsx`, `components/layout/Topbar.tsx`, `components/layout/MobileNav.tsx`, `components/shared/PageContainer.tsx` |
| File modificati | `src/app/layout.tsx` (lang, metadata, font), `src/app/(app)/reparti/page.tsx` (spostata), `package.json` (+shadcn) |
| Modifica    | Installazione shadcn/ui v4 (DEC-004); route group `(app)` con layout shell; Sidebar desktop; Topbar con titolo dinamico; MobileNav bottom bar; PageContainer/PageHeader; dashboard placeholder |
| Commit chiave | `e756ac2` shadcn · `d2a271f` route group · `194c28e` Sidebar · `62051af` Topbar · `78b753e` MobileNav · `477659c` PageContainer · `5801b68` shell completa |
| Eseguita da | Claude (approvazione step-by-step dell'utente)                               |
| Esito       | ✅ Build TypeScript pulita — test locale OK — test produzione da eseguire    |

---

## [2026-05-11] — v0.2.0 — Test produzione /reparti (T-11)

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File        | Governance (`VERSION_HISTORY.md`, `PROJECT_STATUS.md`, `TEST_HISTORY.md`) |
| Modifica    | T-11 passato in produzione — pagina /reparti verificata su Vercel; VERSION_HISTORY aggiornato a v0.2.0 STABLE |
| Eseguita da | Utente (verifica manuale) + Claude (governance)                  |
| Esito       | ✅ OK — v0.2.0 STABLE                                            |

---

## [2026-05-11] — Pagina /reparti — Server Component

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File        | `src/app/reparti/page.tsx`                                       |
| Modifica    | Creazione pagina /reparti come Server Component: chiama `getReparti()` direttamente, tabella reparti con badge stato colorati, gestione errore con try/catch, link ← Home |
| Eseguita da | Claude                                                           |
| Esito       | ✅ OK — verificata localmente nel browser (6 reparti visualizzati) |

| Campo       | Dettaglio                                                        |
|-------------|------------------------------------------------------------------|
| File        | `src/app/page.tsx`                                               |
| Modifica    | Sostituzione `<button>` CTA con `<Link href="/reparti">` (aggiunto `import Link`) |
| Eseguita da | Claude                                                           |
| Esito       | ✅ OK — navigazione Home → /reparti verificata localmente         |

---

## [2026-05-12] — Validazione end-to-end + popolamento dataset demo QA

| Campo       | Dettaglio                                                                                   |
|-------------|---------------------------------------------------------------------------------------------|
| Scope       | Solo dati Airtable — nessuna modifica codice                                                |
| Azione      | PATCH Airtable su 3 record (Officina, Preparazione, Vendite) con dataset demo QA: Stato, Budget (€), N° Dipendenti |
| Dataset demo | Officina: Attivo / €8.500 / 15 dip · Preparazione: In Ristrutturazione / €2.000 / 4 dip · Vendite: Attivo / €11.000 / 9 dip |
| Verifica    | Raw Airtable ✅ · /api/reparti ✅ · ISR scadenza attesa ✅ · /dashboard ✅ · /reparti ✅    |
| Risultato dashboard | Attivi: 3 · Inattivi: 1 · In Ristr.: 2 · Budget totale: €29.000 · Top: Logistica (50 dip) |
| Eseguita da | Claude (PATCH via API) + utente (3 record preesistenti)                                     |
| Esito       | ✅ ANO-001 risolta tecnicamente — validazione end-to-end completa in produzione             |
| Rischio aperto | Dataset è DEMO/QA — nessuna separazione ambienti DEV/TEST/PROD (RSK-001, RSK-002)      |

---

## [2026-05-12] — Pagina /impostazioni con contenuto reale

| Campo       | Dettaglio                                                                    |
|-------------|------------------------------------------------------------------------------|
| File modificati | `src/app/(app)/impostazioni/page.tsx`                                    |
| Modifica    | Sostituito placeholder con 4 sezioni informative: Applicazione (v0.4.0, ambiente), Infrastruttura, Sicurezza, Note operative (ANO-001) |
| Commit      | `ed395cf`                                                                    |
| Eseguita da | Claude (approvazione utente)                                                 |
| Esito       | ✅ Build pulita — test produzione OK (7/7 test passati)                      |

---

## [2026-05-12] — Service layer + Dashboard dati reali

| Campo       | Dettaglio                                                                    |
|-------------|------------------------------------------------------------------------------|
| File creati | `src/services/reparti.service.ts`                                            |
| File modificati | `src/types/airtable.ts`, `src/app/(app)/reparti/page.tsx`, `src/app/(app)/reparti/[id]/page.tsx`, `src/app/(app)/dashboard/page.tsx` |
| Modifica    | Creazione service layer con `getRepartiList()`, `getRepartoDetail()`, `getRepartiStats()`; aggiunta interface `RepartiStats`; refactor pages per usare service; dashboard con 7 card statistiche aggregate da Airtable |
| Commit chiave | `add52e4` service layer · `ec06f74` refactor pages · `ea8facf` dashboard  |
| Eseguita da | Claude (approvazione step-by-step)                                           |
| Esito       | ✅ Build pulita — test produzione OK — anomalia: campi Airtable vuoti (non bloccante) |

---

## [2026-05-12] — Back button su /reparti/[id]

| Campo       | Dettaglio                                                                    |
|-------------|------------------------------------------------------------------------------|
| File modificati | `src/app/(app)/reparti/[id]/page.tsx`                                    |
| Modifica    | Aggiunto link "← Torna ai reparti" verso `/reparti` sopra il PageHeader; nessun componente nuovo |
| Commit      | `7824575`                                                                    |
| Eseguita da | Claude (approvazione utente)                                                 |
| Esito       | ✅ Build pulita — pushato in produzione                                      |

---

## [2026-05-12] — Feature: dettaglio reparto /reparti/[id]

| Campo       | Dettaglio                                                                    |
|-------------|------------------------------------------------------------------------------|
| File modificati | `src/lib/airtable.ts`, `src/app/(app)/reparti/page.tsx`              |
| File creati | `src/app/(app)/reparti/[id]/page.tsx`                                        |
| Modifica    | Aggiunta `getRepartoById(id)` al client Airtable; creazione pagina dettaglio Server Component con badge stato + campi filtrati; righe della lista rese cliccabili via `<Link block>` su ogni cella (no "use client") |
| Commit chiave | `142de64` getRepartoById + pagina [id] · `81970fd` lista cliccabile      |
| Eseguita da | Claude (approvazione step-by-step)                                           |
| Esito       | ✅ Build TypeScript pulita — navigazione lista → dettaglio funzionante       |

---

## [2026-05-06] — Creazione AI_CONTROL_CENTER

| Campo       | Dettaglio                                              |
|-------------|--------------------------------------------------------|
| File        | `AI_CONTROL_CENTER/` (10 file)                         |
| Modifica    | Creazione cartella di controllo con tutti i file di documentazione |
| Eseguita da | Claude                                                 |
| Esito       | ✅ OK                                                  |
