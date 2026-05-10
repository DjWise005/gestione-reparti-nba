# AI_CONTROL_CENTER — Manuale Operativo

## Scopo
Cartella di controllo del progetto "Gestione Reparti NBA".
Traccia decisioni, modifiche, test, problemi e avanzamento sessione.

## Regole obbligatorie
1. Nessuna modifica al codice applicativo senza approvazione esplicita.
2. Ogni modifica va loggata in CHANGELOG.md DOPO l'esecuzione.
3. Ogni decisione va motivata in DECISIONS.md PRIMA dell'implementazione.
4. Le proposte non ancora approvate restano in PENDING_DECISIONS.md.
5. Ogni sessione inizia aggiornando SESSION_CONTEXT.md.
6. Ogni sessione termina aggiornando NEXT_STEPS.md e VERSION_HISTORY.md.

## Flusso operativo corretto
1. IDEAZIONE     → prompt/idea formulata (ChatGPT o utente)
2. PROPOSTA      → Claude propone la soluzione con dettagli
3. APPROVAZIONE  → utente dà OK esplicito
4. MODIFICA      → Claude esegue solo ciò che è stato approvato
5. TEST          → verifica funzionamento (locale o produzione)
6. LOG FINALE    → aggiornamento CHANGELOG, TEST_HISTORY, VERSION_HISTORY

## Flusso decisionale
```
Idea / proposta
      ↓
PENDING_DECISIONS.md   ← tutte le proposte nascono qui
      ↓
  [approvazione esplicita utente]
      ↓
DECISIONS.md           ← solo decisioni approvate
      ↓
CHANGELOG.md           ← solo dopo esecuzione
```

## File e responsabilità
| File                   | Aggiornato quando                         |
|------------------------|-------------------------------------------|
| SESSION_CONTEXT.md     | Inizio e fine di ogni sessione            |
| DECISIONS.md           | Prima di ogni scelta tecnica approvata    |
| PENDING_DECISIONS.md   | Quando emerge una proposta da valutare    |
| CHANGELOG.md           | Dopo ogni modifica eseguita               |
| VERSION_HISTORY.md     | Ad ogni rilascio o cambiamento di stato   |
| TEST_HISTORY.md        | Dopo ogni ciclo di test                   |
| OPEN_ISSUES.md         | Quando emerge un problema                 |
| NEXT_STEPS.md          | Fine sessione o cambio di priorità        |
| PROMPTS_LOG.md         | Quando un prompt produce output rilevante |

## Riferimenti progetto
- **Repository GitHub:** https://github.com/DjWise005/gestione-reparti-nba
- **URL Produzione:** https://gestione-reparti-nba.vercel.app
- **Airtable Base ID:** appFkHbvmtkKi0PYt
- **Versione corrente:** v0.1.0
