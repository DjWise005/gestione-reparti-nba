<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-control-rules -->
# Regole operative del progetto — Gestione Reparti NBA

Prima di eseguire qualsiasi task, Claude deve leggere obbligatoriamente i seguenti file nell'ordine indicato:

1. `AI_CONTROL_CENTER/CLAUDE.md` — regole operative, cosa è permesso fare e cosa no
2. `AI_CONTROL_CENTER/PROJECT_STATUS.md` — stato attuale del progetto, cosa funziona e cosa manca
3. `AI_CONTROL_CENTER/ARCHITECTURE_GUARDRAILS.md` — vincoli architetturali approvati, stack e struttura
4. `AI_CONTROL_CENTER/DECISIONS.md` — decisioni già prese, da non rimettere in discussione
5. `AI_CONTROL_CENTER/CURRENT_TASK.md` — se presente, contiene il task attivo con dettagli e vincoli

Nessuna modifica al codice applicativo senza approvazione esplicita dell'utente.
Ogni proposta deve essere mostrata e approvata prima dell'esecuzione.
<!-- END:project-control-rules -->
