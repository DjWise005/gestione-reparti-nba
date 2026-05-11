# Pending Decisions

> Questo file contiene idee, proposte e modifiche NON ancora approvate.
> Solo dopo approvazione esplicita dell'utente una voce viene spostata in DECISIONS.md.

---

## [PND-003] — Sistema di autenticazione (fase futura dedicata)
- **Data proposta:** 2026-05-12
- **Proposta da:** Claude
- **Descrizione:** Progettare e implementare il sistema di autenticazione per proteggere le route sotto `(app)/`. Da affrontare in una fase dedicata, non nell'MVP corrente (vedi DEC-005).
- **Alternative da valutare:**
  - NextAuth/Auth.js con provider Google o credenziali
  - Middleware Next.js con JWT custom
  - Servizio esterno (Clerk, Supabase Auth, ecc.)
- **Dubbi aperti:** Quale provider? Quanti ruoli (admin, viewer)? SSO aziendale?
- **Impatto potenziale:** `src/middleware.ts`, `(app)/layout.tsx`, aggiunta `(auth)/login/`, gestione sessioni
- **Stato:** 🔵 Rimandato — da pianificare in fase dedicata (DEC-005)

---

## ~~[PND-001]~~ — ~~Integrazione Airtable nel codice Next.js~~ ✅ Chiusa
- **Stato:** Implementata — REST fetch nativo, `GET /api/reparti`, pagina `/reparti` con dati reali

---

## ~~[PND-002]~~ — ~~Collegamento GitHub ↔ Vercel per deploy automatico~~ ✅ Chiusa
- **Stato:** Implementata — auto-deploy attivo, ogni push su `main` triggera deploy Vercel (ISS-001 chiusa)
