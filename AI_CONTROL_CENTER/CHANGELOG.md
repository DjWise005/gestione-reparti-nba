# Changelog

> Contiene SOLO: file modificati, data, modifica eseguita, esito.
> Per le motivazioni vedere DECISIONS.md.

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

## [2026-05-06] — Creazione AI_CONTROL_CENTER

| Campo       | Dettaglio                                              |
|-------------|--------------------------------------------------------|
| File        | `AI_CONTROL_CENTER/` (10 file)                         |
| Modifica    | Creazione cartella di controllo con tutti i file di documentazione |
| Eseguita da | Claude                                                 |
| Esito       | ✅ OK                                                  |
