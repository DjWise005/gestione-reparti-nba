# PROJECT STATUS

**Ultimo aggiornamento:** 2026-05-15  
**Stato corrente:** Fase 1 completata — Setup infrastruttura e autenticazione  
**Fase attuale:** Validazione dominio MVP e fondazioni backend  
**Prossimo obiettivo:** Schema Prisma MVP validabile (Giorno 3)

---

# 🎯 MILESTONE ATTUALE

## GIORNO 2 — Auth + Architecture Guardrails ✅

Infrastruttura base completata.

Il progetto entra ora nella fase più critica:

- modellazione dominio;
- struttura database;
- workflow operativi;
- audit trail;
- separazione responsabilità backend.

---

# ⚠️ REALTÀ ATTUALE DEL PROGETTO

Il progetto NON è ancora in fase prodotto stabile.

Attualmente siamo in:

- bootstrap architetturale;
- consolidamento governance;
- validazione modello operativo;
- definizione fondazioni backend.

L’infrastruttura è pronta.  
Il dominio business NON è ancora congelato.

---

# ✅ DEFINITION OF DONE — FASE 1

La Fase 1 è considerata completata SOLO perché:

- Deploy Vercel funzionante
- Clerk integrato correttamente
- Login/Logout operativo
- Middleware protezione route funzionante
- Dashboard protetta validata
- PostgreSQL Neon collegato
- Variabili ambiente configurate
- Workflow Git definito
- Architecture Guardrails approvati
- Pipeline base di sviluppo stabile

---

# Stack Tecnologico Attivo

| Layer | Tecnologia | Versione | Stato |
|---|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 | ✅ Attivo |
| Language | TypeScript | 5.x | ✅ Attivo |
| Styling | Tailwind CSS | v4 | ✅ Attivo |
| Database | PostgreSQL (Neon) | — | ✅ Configurato |
| ORM | Prisma | — | ⏳ Setup Giorno 3 |
| Authentication | Clerk | — | ✅ Funzionante |
| Deploy | Vercel | — | ✅ Attivo |
| Runtime | Node.js | LTS | ✅ Attivo |

---

# ⚠️ STANDARD TECNOLOGICO UFFICIALE

La versione ufficiale del progetto è:

## Next.js 16.2.4

Tutti i documenti di governance, sviluppo e architettura devono essere considerati allineati a questa versione.

Eventuali riferimenti storici a Next.js 14 sono da considerarsi legacy e non più validi.

---

# Componenti Implementati

| Componente | Stato | Note |
|---|---|---|
| Clerk Authentication | ✅ Funzionante | Login/Logout con UserButton |
| Middleware protezione | ✅ Attivo | Route protection funzionante |
| Dashboard protetta | ✅ Validata | Solo utenti autenticati |
| PostgreSQL Neon | ✅ Collegato | Database production-ready |
| Governance Architecture | ✅ Attiva | Guardrails e workflow AI definiti |
| Prisma schema | ⏳ In sviluppo | MVP schema Giorno 3 |

---

# Ambienti

| Ambiente | URL | Database | Stato |
|---|---|---|---|
| Development | http://localhost:3000 | Neon DEV | ✅ Attivo |
| Preview | https://gestione-reparti-nba-*.vercel.app | Neon TEST | ✅ Attivo |
| Production | https://gestione-reparti-nba.vercel.app | Neon PROD | ✅ Attivo |

---

# ⚠️ FOCUS ATTUALE

L’obiettivo NON è creare subito il database definitivo.

L’obiettivo reale è:

## costruire uno schema MVP operativo validabile

Il dominio reale dovrà essere stressato con:

- workflow veri;
- eccezioni operative;
- urgenze;
- blocchi;
- parallelismi;
- override;
- conflitti tra reparti;
- ritardi reali.

Solo dopo questa validazione sarà corretto consolidare il modello finale.

---

# Scope MVP Backend (Fase Corrente)

## Entità prioritarie

Congelare inizialmente SOLO:

- Ordine
- Fase
- Reparto
- Utente
- Evento
- Blocco
- Priorità

Tutto il resto verrà introdotto progressivamente.

---

# ⚠️ PRINCIPIO ARCHITETTURALE CRITICO

## Ogni cambio stato deve generare un evento

Ogni modifica operativa dovrà produrre audit trail immutabile.

Obiettivi:

- storicizzazione completa;
- tracciabilità operativa;
- debugging;
- KPI;
- forecasting futuro;
- analisi colli di bottiglia;
- accountability utenti/reparti.

Questo principio è considerato fondamentale.

---

# Issue Aperti

| ID | Descrizione | Priorità | Stato |
|---|---|---|---|
| ISS-NEW-001 | Schema Prisma MVP da implementare | 🔴 Alta | ⏳ Giorno 3 |
| ISS-NEW-002 | Migrations iniziali database | 🔴 Alta | ⏳ Giorno 3 |
| ISS-NEW-003 | Seed data iniziali (reparti, ruoli) | 🟡 Media | ⏳ Giorno 3 |
| ISS-NEW-004 | Definizione relazioni dominio MVP | 🔴 Alta | ⏳ In analisi |
| ISS-NEW-005 | Strategia audit/event log | 🔴 Alta | ⏳ Da definire |

---

# 🚫 Blockers Attivi

| ID | Descrizione | Stato |
|---|---|---|
| BLK-001 | Workflow ordine/reparti non ancora congelato | Aperto |
| BLK-002 | Regole transizioni stati incomplete | Aperto |
| BLK-003 | Strategia definitiva eventi backend non consolidata | Aperto |

---

# ⚠️ Rischi Attivi

| ID | Descrizione | Severità | Stato |
|---|---|---|---|
| RSK-NEW-001 | Migrazione Airtable non pianificata nel dettaglio | 🟡 Media | Aperto |
| RSK-NEW-002 | Schema DB non validato con casi reali | 🟡 Media | Aperto |
| RSK-NEW-003 | Complessità dominio sottostimata | 🔴 Alta | Aperto |
| RSK-NEW-004 | Schema Prisma troppo rigido | 🔴 Alta | Aperto |
| RSK-NEW-005 | Crescita incontrollata logica backend | 🔴 Alta | Aperto |
| RSK-NEW-006 | Accoppiamento UI/business logic | 🔴 Alta | Aperto |
| RSK-NEW-007 | Audit trail insufficiente | 🔴 Alta | Aperto |
| RSK-NEW-008 | Mancanza test integration workflow | 🟡 Media | Aperto |

---

# KPI Tecnici Futuri

| KPI | Stato |
|---|---|
| Build success rate | ⏳ Da implementare post-MVP |
| Deploy success rate | ⏳ Da implementare post-MVP |
| Migration success rate | ⏳ Da implementare post-MVP |
| Error rate API | ⏳ Da implementare post-MVP |
| Response time API | ⏳ Da implementare post-MVP |
| Rollback deploy count | ⏳ Da implementare post-MVP |
| TypeScript warnings | ⏳ Da implementare post-MVP |
| Coverage workflow critici | ⏳ Da implementare post-MVP |

---

# Decisioni Architetturali Recenti

- DEC-NEW-001 — Migrazione Airtable → PostgreSQL/Neon
- DEC-NEW-002 — Prisma come ORM ufficiale
- DEC-NEW-003 — Clerk come provider Auth
- DEC-NEW-004 — Architecture Guardrails obbligatori
- DEC-NEW-005 — Approccio MVP validabile prima dello schema definitivo
- DEC-NEW-006 — Event/Audit trail come fondazione architetturale

---

# Governance Enforcement

Le seguenti regole sono obbligatorie:

- Lettura ARCHITECTURE_GUARDRAILS.md prima di modifiche backend
- Aggiornamento CHANGELOG.md dopo modifiche
- Aggiornamento DECISIONS.md per decisioni architetturali
- Nessun refactor massivo senza approvazione
- Nessuna modifica architetturale implicita
- Nessuna business logic dentro componenti UI

---

# Assunzioni Correnti MVP

| Assunzione | Stato |
|---|---|
| Workflow reparti NON sequenziale (parallelo/ripetibile) | Attiva |
| ETA calcolata lato server | Attiva |
| Audit trail immutabile | Attiva |
| Multi-tenant NON previsto MVP | Attiva |
| Real-time completo NON prioritario MVP | Attiva |
| Forecasting avanzato post-MVP | Attiva |

---

# Dipendenze Step Giorno 3

```text
Validazione dominio MVP
↓
Definizione relazioni fondamentali
↓
Schema Prisma MVP
↓
Migration iniziale
↓
Seed dati base
↓
Test database
↓
Prisma Studio validation
↓
Prime API backend