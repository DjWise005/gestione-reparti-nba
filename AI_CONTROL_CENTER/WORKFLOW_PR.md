# Workflow PR develop → main

> Procedura operativa definitiva per il flusso di sviluppo e rilascio.
> Aggiornare se il processo cambia.

---

## Flusso standard step-by-step

```
1. Sei sempre su branch `develop` durante lo sviluppo
2. Claude lavora, propone, tu approvi → commit su `develop`
3. Push: git push origin develop
4. GitHub → apri PR: develop → main
5. Verifica Preview deployment Vercel (generato automaticamente)
6. Esegui checklist QA sul Preview URL
7. Se tutto ok → "Merge pull request" (Squash or Merge)
8. Production si aggiorna automaticamente (auto-deploy Vercel su main)
9. Verifica produzione post-merge
10. Torna su develop per il lavoro successivo
```

---

## Regole obbligatorie prima di mergeare

| # | Regola |
|---|---|
| 1 | Preview deployment Vercel → stato **Ready** (non Error) |
| 2 | Nessun errore TypeScript nel build log del Preview |
| 3 | Checklist QA completata (vedi sezione successiva) |
| 4 | Nessun `console.log` o debug code dimenticato |
| 5 | Governance aggiornata (CHANGELOG, SESSION_CONTEXT, PROJECT_STATUS) |

---

## Checklist QA minima pre-merge

```
□ /dashboard carica senza errori
□ /reparti mostra la lista (almeno 1 record)
□ /reparti/[id] apre il dettaglio di un reparto
□ /impostazioni si carica
□ Navigazione sidebar funziona (desktop)
□ Nessuna pagina mostra errore 500 o schermo bianco
□ La feature introdotta dalla PR funziona come atteso
```

---

## Strategia hotfix urgente

Se c'è un bug critico in produzione che non può aspettare il flusso normale:

```
1. git checkout main
2. git checkout -b hotfix/descrizione-breve
3. Fix minimale — solo la correzione, niente altro
4. PR: hotfix/descrizione-breve → main
5. Merge diretto (disabilita temporaneamente branch protection se necessario)
6. Riabilita branch protection subito dopo
7. git checkout develop && git merge main  ← riporta il fix su develop
```

Usare **solo** per bug che bloccano utenti reali. Non per refactor o piccole migliorie.

---

## Convenzioni commit e branch

**Branch naming:**
```
develop          → sviluppo corrente (sempre attivo)
feature/nome     → nuova feature    (es. feature/auth-login)
fix/nome         → bug fix          (es. fix/dashboard-zeri)
hotfix/nome      → fix urgente su produzione
chore/nome       → governance, dipendenze, config
```

**Commit message format:**
```
feat:     descrizione nuova funzionalità
fix:      descrizione bug corretto
chore:    aggiornamento governance/config
refactor: ristrutturazione codice senza cambi funzionali
docs:     documentazione e guide operative
```

Regola: **una cosa per commit** — non mescolare feature e fix nello stesso commit.

---

## Divisione dei ruoli Claude / utente

| Azione | Chi |
|---|---|
| Propone modifica codice | Claude |
| Approva la modifica | **Utente** |
| Esegue il commit | Claude (dopo approvazione) |
| Fa push su develop | Claude (dopo approvazione esplicita) |
| Apre la PR su GitHub | Utente (o Claude su richiesta) |
| Esegue checklist QA sul Preview | **Utente** |
| Approva e mergia la PR | **Utente — sempre** |
| Verifica produzione post-merge | **Utente** |
| Aggiorna governance | Claude (propone, utente approva commit) |

**Regola assoluta:** Claude non fa mai merge su main. Il merge è sempre decisione dell'utente.

---

## Anti-pattern da evitare assolutamente

| Anti-pattern | Rischio |
|---|---|
| `git push origin main` diretto | Bypassi PR e QA — bug in produzione senza verifica |
| Merge senza Preview **Ready** | Deploy rotto in produzione |
| Feature grandi in un solo commit | Impossibile fare rollback granulare |
| Commit di `.env.local` | Token Airtable esposto pubblicamente su GitHub |
| Disabilitare branch protection e dimenticarsi di riabilitarla | Main rimane non protetto permanentemente |
| Lavorare direttamente su `main` per "una piccola modifica" | Il flusso si rompe gradualmente |

---

_Ultimo aggiornamento: 2026-05-12_
