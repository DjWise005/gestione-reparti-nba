# Architecture Guardrails

> Vincoli architetturali approvati. Nessuna deroga senza decisione esplicita in DECISIONS.md.

---

## Stack approvato (non modificare senza approvazione)
| Layer       | Tecnologia           | Versione |
|-------------|----------------------|----------|
| Framework   | Next.js (App Router) | 16.x     |
| Language    | TypeScript           | 5.x      |
| Styling     | Tailwind CSS         | v4       |
| UI Library  | shadcn/ui            | latest (DEC-004) |
| Database    | Airtable (REST API)  | —        |
| Deploy      | Vercel               | —        |
| Runtime     | Node.js              | LTS      |

---

## Struttura cartelle — schema approvato
```
src/
├── app/
│   ├── api/          ← route handler Next.js (server-side)
│   ├── (routes)/     ← pagine e layout
│   └── globals.css
├── components/       ← componenti React riutilizzabili
├── lib/              ← utility, client Airtable, helpers
└── types/            ← tipi TypeScript condivisi
```

---

## Regole obbligatorie

### Dati e API
- Tutte le chiamate ad Airtable avvengono **solo lato server** (route API o Server Components)
- Il token Airtable non deve mai essere esposto nel codice client
- Le variabili d'ambiente con prefisso `NEXT_PUBLIC_` sono visibili al browser — **non usarle per token segreti**
- Usare `fetch` nativo di Next.js (con caching integrato) prima di aggiungere librerie esterne

### Componenti
- I componenti in `src/components/` devono essere riutilizzabili e senza logica di business
- La logica di fetch dati appartiene a Server Components o route API, non ai Client Components
- Usare `"use client"` solo quando strettamente necessario (interattività, hooks browser)

### Dipendenze
- Non aggiungere dipendenze senza approvazione esplicita
- Preferire funzionalità native di Next.js/React prima di installare librerie
- Ogni nuova dipendenza richiede una voce in DECISIONS.md

### TypeScript
- `strict: true` è attivo e deve rimanere tale
- Nessun `any` esplicito senza commento giustificativo
- I tipi condivisi vanno in `src/types/`

### Styling
- Usare esclusivamente classi Tailwind CSS v4
- Nessun file CSS aggiuntivo oltre `globals.css` salvo casi eccezionali approvati
- **shadcn/ui è approvato (DEC-004)** — altri framework UI (MUI, Chakra, etc.) richiedono nuova approvazione
- I componenti shadcn vanno in `src/components/ui/` e si aggiornano via `npx shadcn@latest add`

---

## Decisioni architetturali di riferimento
- DEC-001 — Stack tecnologico
- DEC-002 — Airtable come backend
- DEC-003 — Struttura tabella Reparti

---

## Deroga a questi guardrails
Qualsiasi deroga richiede:
1. Proposta in `PENDING_DECISIONS.md`
2. Approvazione esplicita dell'utente
3. Registrazione in `DECISIONS.md` prima dell'implementazione
