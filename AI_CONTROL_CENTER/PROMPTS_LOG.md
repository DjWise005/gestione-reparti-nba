# Prompts Log

---

## [PRM-001] — Inizializzazione progetto Next.js
- **Data:** 2026-05-05
- **Prompt:** Crea una cartella 'Developer', entra lì dentro e inizializza un progetto Next.js in una sottocartella chiamata 'Gestione Reparti by NBA'. Usa le impostazioni standard per Vercel.
- **Risposta sintetica:** Creata cartella Developer, inizializzato progetto con `create-next-app` (TS + Tailwind + App Router), risolto conflitto nome npm con rinomina cartella
- **Output prodotto:** Progetto Next.js funzionante in `/Users/wise/Developer/Gestione Reparti by NBA/`
- **Note:** Il nome cartella con spazi e maiuscole ha richiesto workaround (init con nome valido + rename)

---

## [PRM-002] — Pagina di benvenuto e deploy
- **Data:** 2026-05-05
- **Prompt:** Personalizza la pagina iniziale con design Tailwind CSS "Gestione Reparti NBA", poi procedi con deploy su Vercel e GitHub.
- **Risposta sintetica:** Sostituito `page.tsx` con welcome page, installato gh CLI, creato repo GitHub, installato Vercel CLI, deploy in produzione
- **Output prodotto:** https://gestione-reparti-nba.vercel.app — https://github.com/DjWise005/gestione-reparti-nba
- **Note:** GitHub Login Connection su Vercel non collegata (warning non bloccante)

---

## [PRM-003] — Configurazione Airtable
- **Data:** 2026-05-06
- **Prompt:** Gestisci interamente Airtable: crea una nuova Base dedicata al progetto e genera la tabella 'Reparti' con le colonne necessarie.
- **Risposta sintetica:** Autenticato con PAT, recuperato workspaceId manualmente (wsptBFd3V5m9p2iC3), creata base e tabella via REST API, salvato `.env.local`
- **Output prodotto:** Base ID `appFkHbvmtkKi0PYt`, tabella `tblTGnRQ8C97uzpbI` con 9 campi
- **Note:** Endpoint `/meta/workspaces` non accessibile senza scope enterprise — workspaceId fornito manualmente dall'utente

---

## [PRM-004] — Struttura AI_CONTROL_CENTER
- **Data:** 2026-05-06
- **Prompt:** Crea una cartella di controllo AI_CONTROL_CENTER per tracciare decisioni, prompt, modifiche, test, problemi e prossimi step. Metodo di lavoro controllato con approvazione esplicita prima di ogni azione.
- **Risposta sintetica:** Proposta struttura, iterata con l'utente per 3 revisioni, approvata e creata con 10 file
- **Output prodotto:** `AI_CONTROL_CENTER/` con README, SESSION_CONTEXT, DECISIONS, PENDING_DECISIONS, CHANGELOG, VERSION_HISTORY, TEST_HISTORY, OPEN_ISSUES, NEXT_STEPS, PROMPTS_LOG
- **Note:** Flusso di approvazione stabilito: proposta → attesa OK → esecuzione
