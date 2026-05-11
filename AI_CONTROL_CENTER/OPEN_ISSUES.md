# Open Issues

| ID      | Descrizione breve                              | Priorità   | Stato  | Aperto il  |
|---------|------------------------------------------------|------------|--------|------------|
| ISS-001 | Vercel: GitHub Login Connection non collegata  | 🟡 Media   | ✅ Risolto | 2026-05-05 |
| ISS-002 | Airtable: `/meta/workspaces` non accessibile   | 🟢 Bassa   | Aperto | 2026-05-06 |
| ISS-003 | Token Airtable non configurato su Vercel       | 🔴 Alta    | ✅ Risolto | 2026-05-06 |

---

### Dettaglio issue

**ISS-001** ✅ Risolto il 2026-05-11 — GitHub↔Vercel connection configurata dall'utente in dashboard. Verificato con commit `e3550aa`: push su `main` ha triggerato deploy automatico in 35s (Ready in 20s) senza intervento manuale. Deploy automatici attivi da ora.

**ISS-002** — Endpoint Airtable `/meta/workspaces` restituisce 401 (scope enterprise non disponibile sul piano base). Il `workspaceId` deve essere recuperato manualmente dall'URL del browser.

**ISS-003** ✅ Risolto il 2026-05-11 — Le variabili `AIRTABLE_TOKEN`, `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_REPARTI` sono state configurate manualmente dall'utente sul progetto Vercel prima del redeploy. Test T-06 in produzione confermato: `GET /api/reparti` restituisce `200 OK` con 6 reparti reali.
