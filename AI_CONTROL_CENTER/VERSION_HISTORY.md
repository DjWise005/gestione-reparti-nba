# Version History

> MAJOR = cambiamenti strutturali importanti
> MINOR = nuove funzionalità
> PATCH = bug fix o piccoli miglioramenti

---

## v0.2.0 — 2026-05-11 — STABLE

- **Stato:** STABLE
- **Modifiche introdotte:**
  - Bootstrap Airtable Integration Layer: `src/lib/airtable.ts`, `src/types/airtable.ts`, `src/app/api/reparti/route.ts`
  - Pagina `/reparti`: Server Component con tabella reparti da Airtable, badge stato colorati, gestione errore
  - `src/app/page.tsx`: CTA `<button>` → `<Link href="/reparti">`
  - Auto-deploy GitHub↔Vercel attivo (ISS-001 chiusa)
  - Variabili d'ambiente Airtable configurate su Vercel (ISS-003 chiusa)
- **Problemi noti:**
  - Grafica `/reparti` accettata provvisoriamente — miglioramento UI previsto
  - `layout.tsx`: metadata e `lang="en"` non ancora aggiornati
- **Rollback:** commit `2714c67` (v0.1.0 + Airtable layer pre-pagina)
- **Note:** Prima versione con dati reali Airtable visibili in UI — verificata in produzione (T-11 ✅)

---

## v0.1.0 — 2026-05-05 — STABLE

- **Stato:** STABLE
- **Modifiche introdotte:**
  - Inizializzazione progetto Next.js 16 (App Router, TypeScript, Tailwind CSS)
  - Pagina di benvenuto "Gestione Reparti NBA"
  - Deploy su Vercel: https://gestione-reparti-nba.vercel.app
  - Repository GitHub: https://github.com/DjWise005/gestione-reparti-nba
- **Problemi noti:**
  - GitHub Login Connection su Vercel non ancora collegata (deploy manuale)
- **Rollback:** —
- **Note:** Prima versione funzionante e deployata in produzione
