# Test History

---

## [TEST-011] — T-11: Pagina /reparti in produzione Vercel
- **Data:** 2026-05-11
- **Ambiente:** Produzione (https://gestione-reparti-nba.vercel.app/reparti)
- **Cosa è stato testato:** Rendering pagina /reparti in produzione dopo push commit f7769c3 — visualizzazione 6 reparti da Airtable, navigazione Home ↔ /reparti
- **Esito:** ✅ Passato
- **Errore rilevato:** Nessuno
- **Fix applicato:** —
- **Risultato dopo fix:** 6 reparti visualizzati in produzione; navigazione Home ↔ /reparti funzionante; grafica accettata provvisoriamente

---

## [TEST-009] — T-10: Navigazione Home → /reparti (locale)
- **Data:** 2026-05-11
- **Ambiente:** Locale (http://localhost:3000)
- **Cosa è stato testato:** Click sul CTA "Accedi alla piattaforma →" dalla Home — verifica che `<Link href="/reparti">` navighi correttamente alla pagina /reparti
- **Esito:** ✅ Passato
- **Errore rilevato:** Nessuno
- **Fix applicato:** —
- **Risultato dopo fix:** Navigazione Home → /reparti funzionante; link ← Home sulla pagina /reparti funzionante

---

## [TEST-010] — T-08: Pagina /reparti — rendering dati (locale)
- **Data:** 2026-05-11
- **Ambiente:** Locale (http://localhost:3000/reparti)
- **Cosa è stato testato:** Rendering pagina /reparti come Server Component — visualizzazione tabella con 6 reparti da Airtable, badge stato colorati, contatore "6 totali"
- **Esito:** ✅ Passato
- **Errore rilevato:** Nessuno
- **Fix applicato:** —
- **Risultato dopo fix:** 6 reparti visualizzati (Amministrazione, Carrozzeria, Logistica, Officina, Preparazione, Vendite); grafica accettata provvisoriamente dall'utente

---

## [TEST-001] — Verifica server di sviluppo locale
- **Data:** 2026-05-05
- **Ambiente:** Locale (http://localhost:3000)
- **Cosa è stato testato:** Avvio dev server Next.js e rendering pagina di benvenuto
- **Esito:** ✅ Passato
- **Errore rilevato:** —
- **Fix applicato:** —
- **Risultato dopo fix:** —

---

## [TEST-002] — Verifica deploy Vercel
- **Data:** 2026-05-05
- **Ambiente:** Produzione (https://gestione-reparti-nba.vercel.app)
- **Cosa è stato testato:** Build Next.js in produzione, rendering pagina di benvenuto live
- **Esito:** ✅ Passato
- **Errore rilevato:** Warning GitHub Login Connection non collegata (non bloccante)
- **Fix applicato:** —
- **Risultato dopo fix:** Deploy completato correttamente via CLI

---

## [TEST-008] — T-07: Verifica auto-deploy GitHub↔Vercel
- **Data:** 2026-05-11
- **Ambiente:** Produzione (Vercel auto-deploy)
- **Cosa è stato testato:** Push commit `e3550aa` su `main` per verificare che Vercel triggerasse deploy automatico senza `vercel --prod`
- **Esito:** ✅ Passato
- **Errore rilevato:** Nessuno
- **Fix applicato:** —
- **Risultato dopo fix:** Deploy automatico partito in 35s dal push, Ready in 20s. File di test `test-auto-deploy.txt` rimosso nel commit successivo. ISS-001 chiusa.

---

## [TEST-007] — T-06: GET /api/reparti in produzione Vercel
- **Data:** 2026-05-11
- **Ambiente:** Produzione (https://gestione-reparti-nba.vercel.app/api/reparti)
- **Cosa è stato testato:** Route API con variabili d'ambiente configurate manualmente su Vercel e build deployata da commit ef2bb2d
- **Esito:** ✅ Passato
- **Errore rilevato:** Nessuno
- **Fix applicato:** —
- **Risultato dopo fix:** 200 OK — 6 reparti reali restituiti (Amministrazione, Carrozzeria, Logistica, Officina, Preparazione, Vendite). ISS-003 chiusa.

---

## [TEST-004] — T-05: Build TypeScript produzione
- **Data:** 2026-05-11
- **Ambiente:** Locale (`npm run build`)
- **Cosa è stato testato:** Compilazione TypeScript completa con i 3 nuovi file sorgente
- **Esito:** ✅ Passato
- **Errore rilevato:** Nessuno
- **Fix applicato:** —
- **Risultato dopo fix:** Build completata in ~5s. Route `/api/reparti` con `Revalidate: 1m` visibile nell'output

---

## [TEST-005] — T-01: GET /api/reparti con dati reali
- **Data:** 2026-05-11
- **Ambiente:** Locale (http://localhost:3000/api/reparti)
- **Cosa è stato testato:** Route API con token valido e tabella Airtable popolata
- **Esito:** ✅ Passato
- **Errore rilevato:** Nessuno
- **Fix applicato:** —
- **Risultato dopo fix:** 200 OK — 6 reparti restituiti (Amministrazione, Carrozzeria, Logistica, Officina, Preparazione, Vendite). Tabella non era vuota come da PROJECT_STATUS precedente — aggiornato.

---

## [TEST-006] — T-03: Errori espliciti per env vars mancanti
- **Data:** 2026-05-11
- **Ambiente:** Node.js (simulazione isolata, senza modificare .env.local)
- **Cosa è stato testato:** Comportamento di `getConfig()` con AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_REPARTI assenti uno alla volta
- **Esito:** ✅ Passato
- **Errore rilevato:** Nessuno — tutti e 3 i controlli lanciano errori espliciti con nome variabile
- **Fix applicato:** —
- **Risultato dopo fix:** Fail-fast confermato per ogni variabile mancante

---

## [TEST-003] — Verifica token Airtable e creazione base
- **Data:** 2026-05-06
- **Ambiente:** Airtable REST API
- **Cosa è stato testato:** Autenticazione token PAT, creazione base "Gestione Reparti NBA", creazione tabella "Reparti" con 9 campi
- **Esito:** ✅ Passato
- **Errore rilevato:** Endpoint `/meta/workspaces` restituisce 401 (scope non disponibile su piano base)
- **Fix applicato:** Recupero workspaceId tramite input manuale dell'utente
- **Risultato dopo fix:** Base e tabella create correttamente (Base ID: appFkHbvmtkKi0PYt)
