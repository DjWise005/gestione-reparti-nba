# Decisions Log

> Solo decisioni approvate esplicitamente dall'utente.
> Le proposte in valutazione si trovano in PENDING_DECISIONS.md.

---

## [DEC-001] — Stack tecnologico: Next.js + Tailwind CSS + TypeScript
- **Data:** 2026-05-05
- **Contesto:** Scelta dello stack per la WebApp "Gestione Reparti NBA"
- **Decisione presa:** Next.js 16 con App Router, TypeScript, Tailwind CSS, deploy su Vercel
- **Motivazione:** Stack ufficialmente supportato da Vercel, ottimizzato per deploy rapidi, con generazione statica e SSR integrati
- **Alternative scartate:**
  - Vite + React standalone → nessun SSR nativo, deploy più complesso
  - Remix → meno diffuso, ecosistema più piccolo
- **Impatto futuro previsto:** Aggiornamenti Next.js potrebbero richiedere migrazioni; App Router è la direzione ufficiale
- **Approvata da:** Utente (2026-05-05) — approvazione implicita tramite istruzione "usa le impostazioni standard per Vercel"

---

## [DEC-002] — Database: Airtable come backend dati
- **Data:** 2026-05-06
- **Contesto:** Scelta del sistema di gestione dati per i reparti
- **Decisione presa:** Airtable con Personal Access Token, base dedicata "Gestione Reparti NBA"
- **Motivazione:** Interfaccia visuale per gestire i dati senza dev, API REST pronta, flessibile per aggiungere tabelle
- **Alternative scartate:**
  - Supabase → più potente ma più complesso da configurare
  - Firebase → vendor lock-in Google, pricing meno prevedibile
  - PostgreSQL → richiede infrastruttura server dedicata
- **Impatto futuro previsto:** Limiti di rate API su piano gratuito; escalation a piano Pro se i record crescono oltre 1.000
- **Approvata da:** Utente (2026-05-06)

---

## [DEC-004] — Libreria UI: shadcn/ui
- **Data:** 2026-05-11
- **Contesto:** Fase Frontend MVP — Application Shell. Necessità di componenti UI accessibili e coerenti per sidebar, topbar, navigazione mobile, dashboard.
- **Decisione presa:** Installare shadcn/ui (stile `new-york`, base-color `slate`, CSS variables attive)
- **Motivazione:** Componenti copia-incolla basati su Radix UI; nessun bundle overhead (solo i componenti installati); supporto nativo Tailwind v4; compatibile con React 19 + Next.js 16; coerente con la palette slate già in uso
- **Alternative scartate:**
  - Pure Tailwind custom → più lento da sviluppare, meno accessibilità out-of-the-box
  - Material UI / Chakra → vendor lock-in pesante, styling divergente dal design attuale
- **Impatto:**
  - Aggiunge dipendenze: `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`
  - Crea `components.json` alla radice del progetto
  - Crea `src/lib/utils.ts` (helper `cn()`)
  - Modifica `globals.css` aggiungendo CSS custom properties per il tema shadcn
- **Impatto futuro previsto:** I componenti shadcn vivono in `src/components/ui/` — aggiornamenti via `npx shadcn@latest add <component>`, non via npm update
- **Approvata da:** Utente (2026-05-11)

---

## [DEC-003] — Struttura tabella Reparti in Airtable
- **Data:** 2026-05-06
- **Contesto:** Definizione dei campi della tabella principale
- **Decisione presa:** 9 campi (Nome Reparto, Responsabile, N° Dipendenti, Budget €, Sede, Stato, Email Reparto, Descrizione, Data Creazione)
- **Motivazione:** Copertura dei dati operativi essenziali per la gestione di un reparto aziendale
- **Alternative scartate:**
  - Includere campi relazionali (es. link a tabella Dipendenti) → rimandato a versione successiva
- **Impatto futuro previsto:** Aggiunta di tabelle correlate (Dipendenti, Turni) richiederà campi di tipo "Link to another record"
- **Approvata da:** Utente (2026-05-06)
