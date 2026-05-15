# CLAUDE — Context & Quick Reference

**Progetto:** Gestione Reparti by NBA  
**Obiettivo:** Sistema gestione commesse automotive multi-reparto  
**Orizzonte:** Produzione multi-anno, >200 ordini/mese

---

## ⚠️ PRIORITÀ DOCUMENTALE

In caso di conflitto tra documenti:

1. **ARCHITECTURE_GUARDRAILS.md** ← LAW (regole architetturali)
2. **DATABASE_SCHEMA.md** ← Schema DB definitivo (quando disponibile)
3. **export_completo_*.md** ← Contesto business
4. **PROJECT_STATUS.md** ← Stato progetto
5. **CLAUDE.md** ← Quick reference operativo

---

## ⚠️ Fonte Temporanea Schema Database

Fino alla creazione di `DATABASE_SCHEMA.md`, la fonte temporanea è:

- `prisma/schema.prisma`
- `ARCHITECTURE_GUARDRAILS.md`

---

## Regola Fondamentale

`CLAUDE.md` è solo riferimento rapido operativo.  
NON è la fonte architetturale definitiva.

Se trovi incoerenze tra questo file e `ARCHITECTURE_GUARDRAILS.md`:

→ prevale SEMPRE `ARCHITECTURE_GUARDRAILS.md`

---

## Stack Tecnologico

Versione di riferimento: vedere `ARCHITECTURE_GUARDRAILS.md`

- **Framework:** Next.js 14.x (App Router)
- **Language:** TypeScript 5.x strict
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Auth:** Clerk
- **Deploy:** Vercel
- **Runtime:** Node.js 20 LTS

### ⚠️ Regola Upgrade

Upgrade major richiedono approvazione esplicita di Marco.

---

## Repository

- **GitHub:** https://github.com/DjWise005/gestione-reparti-nba
- **Production URL:** https://gestione-reparti-nba.vercel.app

---

## Database (Neon PostgreSQL)

- **Provider:** Neon (Frankfurt region)
- **Connection:** tramite `DATABASE_URL` e `DIRECT_URL`
- **Schema:** Prisma ORM
- **Migrations:** Prisma Migrate

---

## Autenticazione (Clerk)

- **Provider:** Clerk
- **Metodi attivi:** Email + Google OAuth
- **Features:**
  - protezione route
  - session management
  - UserButton

---

## Ambienti

| Ambiente | URL | Database |
|---|---|---|
| Development | http://localhost:3000 | Neon DEV |
| Preview | https://gestione-reparti-nba-*.vercel.app | Neon TEST |
| Production | https://gestione-reparti-nba.vercel.app | Neon PROD |

---

## Struttura Progetto

```text
gestione-reparti-nba/
├── src/
│   ├── app/                    ← Route App Router
│   ├── components/             ← Componenti React
│   ├── lib/                    ← Utility, helpers, Prisma
│   └── types/                  ← Tipi condivisi
│
├── prisma/
│   ├── schema.prisma           ← Fonte temporanea schema DB
│   └── migrations/             ← Storico migration
│
├── AI_CONTROL_CENTER/          ← Governance progetto
│
├── ARCHITECTURE_GUARDRAILS.md  ← LAW architetturale
│
└── export_completo_*.md        ← Contesto business
```

---

## Workflow Lettura

Prima di ogni sviluppo:

1. Leggere `ARCHITECTURE_GUARDRAILS.md`
2. Verificare `PROJECT_STATUS.md`
3. Controllare `prisma/schema.prisma`
4. Verificare `NEXT_STEPS.md`
5. In caso di dubbio → prevale `ARCHITECTURE_GUARDRAILS.md`

---

## Principi Architetturali Critici

### 1. Database-First Architecture

`order_phases` è l'entità operativa centrale, NON `orders`.

---

### 2. RBAC Obbligatorio

❌ Vietato:

```ts
if (user.role === "Admin")
```

✅ Corretto:

```ts
if (await hasPermission(userId, "order.unlock"))
```

---

### 3. Ricerca Telaio NON Univoca

❌ Vietato:

- UNIQUE su `telaio_ultime_5`

✅ Corretto:

- Index normale
- Disambiguazione UI

---

### 4. Audit Log Obbligatorio

❌ Vietato:

- update senza audit

✅ Corretto:

- transaction + `audit_logs.create()`

---

### 5. Workflow NON Lineare

Il workflow deve supportare:

- fasi parallele
- reparti ripetuti
- fasi rinviabili
- eccezioni operative reali

---

## ⚠️ Regola Modifiche Architetturali

Claude NON può senza approvazione esplicita di Marco:

- ❌ Cambiare stack tecnologico
- ❌ Cambiare pattern architetturali
- ❌ Introdurre nuove dipendenze critiche
- ❌ Modificare schema database
- ❌ Cambiare workflow Git
- ❌ Introdurre state management (Redux, Zustand, ecc.)
- ❌ Cambiare auth provider
- ❌ Cambiare ORM
- ❌ Migrare a un altro database
- ❌ Eseguire refactor architetturali massivi non richiesti

---

### Obiettivo

Proteggere il progetto da:

- “miglioramenti” non richiesti
- refactor prematuri
- cambi stack inutili
- complessità non necessaria
- debito tecnico introdotto artificialmente

---

### Regola Operativa

Se Claude ritiene necessario un cambio architetturale:

1. NON implementarlo direttamente
2. Spiegare:
   - problema rilevato
   - rischio attuale
   - soluzione proposta
   - impatto sul progetto
3. Attendere approvazione esplicita di Marco

Senza approvazione:

- ❌ nessuna modifica architetturale deve essere eseguita

---

## Filosofia MVP

### Priorità

1. Stabilità
2. Coerenza dati
3. Workflow reale funzionante
4. UX operativa
5. Ottimizzazioni DOPO MVP

---

### Evitare

- ❌ Over-engineering precoce
- ❌ Automazioni premature
- ❌ Ottimizzazioni non necessarie
- ❌ “Cervello NASA” prima del core operativo
- ❌ Complessità non necessaria in fase MVP

---

### Il sistema deve prima

- ✅ Reggere operativamente
- ✅ Essere usato realmente dai reparti
- ✅ Essere comprensibile dagli utenti
- ✅ Ridurre errori operativi reali
- ✅ Velocizzare il workflow quotidiano

---

### SOLO DOPO MVP

- AI predittiva
- Forecasting avanzato
- Automazioni sofisticate
- Analytics avanzati
- Ottimizzazioni infrastrutturali
- Machine learning operativo

---

## Workflow Sviluppo

### Branch Strategy (OBBLIGATORIA)

```bash
# 1. Crea branch dedicato
git checkout -b feature/nome-descrittivo

# 2. Lavora sul branch
# ... sviluppo ...

# 3. Commit modifiche
git add .
git commit -m "type(scope): descrizione"

# 4. Push branch
git push origin feature/nome-descrittivo

# 5. STOP
# Chiedi conferma a Marco prima del merge su main
```

---

## ❌ VIETATO

- Push diretto su `main`
- Merge su `main` senza approvazione
- `git push origin main` senza conferma
- Modifiche architetturali non approvate
- Refactor massivi non richiesti
- Introduzione librerie critiche senza approvazione

---

## ✅ OBBLIGATORIO

- Usare branch dedicati
- Fare commit chiari e leggibili
- Chiedere conferma prima del merge
- Rispettare `ARCHITECTURE_GUARDRAILS.md`
- Aggiornare documentazione se necessario

---

## Commit Format

```text
type(scope): descrizione breve
```

### Types supportati

- feat
- fix
- docs
- refactor
- test
- chore

---

### Esempi Commit

```text
feat(orders): add CRUD operations
fix(auth): resolve logout redirect
docs(readme): update setup instructions
refactor(phases): extract status logic
test(workflow): add phase transition validation
chore(deps): update prisma version
```

---

## Variabili Ambiente Critiche

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_live_..."
CLERK_SECRET_KEY="sk_live_..."
```

---

## ⚠️ Sicurezza

❌ MAI committare:

- `.env.local`
- secret keys
- token
- credenziali database

---

## Comandi Utili

```bash
# Development
npm run dev

# Prisma
npx prisma generate
npx prisma migrate dev
npx prisma studio

# Git
git status
git checkout -b feature/nome
git add .
git commit -m "type(scope): message"
git push origin branch-name
```

---

## Stato Attuale

### ✅ Completato

- Clerk auth integrato
- Middleware protezione route
- PostgreSQL Neon configurato
- Architecture Guardrails documentate

---

### ⏳ Prossimo Step

- Schema Prisma completo
- Migrations database
- Seed data iniziali

---

## Contatti

- **Responsabile:** Marco Bassani
- **Email:** marco@bassaniauto.com

---

## 📌 PROMEMORIA FINALE

1. Dubbio architetturale → leggere `ARCHITECTURE_GUARDRAILS.md`
2. Conflitto documenti → prevale `ARCHITECTURE_GUARDRAILS.md`
3. Merge su `main` → chiedere conferma
4. Modifica stack/schema → chiedere conferma
5. Questo file NON è la verità architetturale

---

**Questo file è un quick reference operativo.**