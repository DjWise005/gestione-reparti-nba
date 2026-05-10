# Open Issues

| ID      | Descrizione breve                              | Priorità   | Stato  | Aperto il  |
|---------|------------------------------------------------|------------|--------|------------|
| ISS-001 | Vercel: GitHub Login Connection non collegata  | 🟡 Media   | Aperto | 2026-05-05 |
| ISS-002 | Airtable: `/meta/workspaces` non accessibile   | 🟢 Bassa   | Aperto | 2026-05-06 |
| ISS-003 | Token Airtable non configurato su Vercel       | 🔴 Alta    | Aperto | 2026-05-06 |

---

### Dettaglio issue

**ISS-001** — GitHub Login Connection su Vercel non collegata: il deploy avviene solo manualmente via CLI (`vercel --prod`). Ogni push su `main` non triggera deploy automatico.

**ISS-002** — Endpoint Airtable `/meta/workspaces` restituisce 401 (scope enterprise non disponibile sul piano base). Il `workspaceId` deve essere recuperato manualmente dall'URL del browser.

**ISS-003** — Il token Airtable è salvato in `.env.local` (escluso da git) ma non è ancora stato configurato come variabile d'ambiente sul progetto Vercel. In produzione l'integrazione Airtable non funzionerà finché non viene aggiunto.
