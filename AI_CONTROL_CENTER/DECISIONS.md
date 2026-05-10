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

## [DEC-003] — Struttura tabella Reparti in Airtable
- **Data:** 2026-05-06
- **Contesto:** Definizione dei campi della tabella principale
- **Decisione presa:** 9 campi (Nome Reparto, Responsabile, N° Dipendenti, Budget €, Sede, Stato, Email Reparto, Descrizione, Data Creazione)
- **Motivazione:** Copertura dei dati operativi essenziali per la gestione di un reparto aziendale
- **Alternative scartate:**
  - Includere campi relazionali (es. link a tabella Dipendenti) → rimandato a versione successiva
- **Impatto futuro previsto:** Aggiunta di tabelle correlate (Dipendenti, Turni) richiederà campi di tipo "Link to another record"
- **Approvata da:** Utente (2026-05-06)
