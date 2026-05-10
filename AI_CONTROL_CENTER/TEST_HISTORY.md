# Test History

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
