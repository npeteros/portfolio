# MARIE — My AI Recordkeeper for Income & Expenses

MARIE is a personal finance PWA built for Filipino households. It tracks income, expenses, budgets, savings goals, and debts, and layers an AI advisor on top that can chat about your finances and log records for you.

## Features

- **Dashboard** — at-a-glance summary of income, expenses, and balances.
- **Transactions** — add, edit, and browse income/expense entries by category.
- **AI text scan** — paste a receipt or a line like "GCash load 300" and have the AI extract amount, category, date, and type automatically.
- **Budgets** — set monthly spending limits per category and track progress.
- **Savings goals** — track saved vs. target amounts with an ETA date.
- **Debts** — track balances, original amounts, interest rates, and due dates.
- **Marie AI** — a chat-based advisor (`/ai`) that answers questions about your finances and can create/update/delete transactions, budgets, goals, and debts via tool calling. Replies default to Philippine Pesos (₱).
- **Auth** — email/password and Google sign-in (with account linking) via [Better Auth](https://www.better-auth.com/), plus a forgot/reset password flow over Gmail SMTP.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Prisma 7](https://www.prisma.io/) on PostgreSQL (built for [Supabase](https://supabase.com/), via the transaction pooler)
- [Better Auth](https://www.better-auth.com/) for sessions, Google OAuth, and password reset
- [TanStack Query](https://tanstack.com/query) for client-side data fetching
- [Tailwind CSS 4](https://tailwindcss.com/)
- OpenAI SDK, pointed at either OpenAI or [OpenRouter](https://openrouter.ai/) depending on config

> **Note:** this repo runs a customized/pinned Next.js build with behavior that may differ from the public docs you already know. Before making framework-level changes, check the guides under `node_modules/next/dist/docs/` and follow any deprecation notices there.

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

You'll need:

- `AI_PROVIDER` — `openai` or `openrouter`, plus the matching API key (`OPENAI_API_KEY` / `OPENROUTER_API_KEY`).
- `DATABASE_URL` / `DIRECT_URL` — Postgres connection strings (Supabase: Settings → Database → Connection string). `DATABASE_URL` should use the pooler; `DIRECT_URL` is used only for migrations.
- `BETTER_AUTH_SECRET` / `BETTER_AUTH_URL` — auth config.
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — for "Continue with Google" (redirect URI: `{BETTER_AUTH_URL}/api/auth/callback/google`).
- `GMAIL_USER` / `GMAIL_APP_PASSWORD` — used to send password reset emails via an [app password](https://myaccount.google.com/apppasswords).

### 3. Set up the database

```bash
npx prisma generate
npx prisma migrate dev
npm run db:seed   # optional: seed sample data
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll land on `/login`, and authenticated users are redirected to `/dashboard`.

## Project structure

```
app/
  (app)/            # authenticated routes: dashboard, transactions, budget, goals, debts, ai, settings
  api/               # route handlers: auth, transactions (+scan), budget, goals, debts, chat, summary
  login/ register/ forgot-password/ reset-password/
  screens/           # top-level screen components rendered by (app) routes
  components/        # shared UI (sidebar, bottom nav, mascot, etc.)
lib/
  ai/                # AI client factory (OpenAI/OpenRouter)
  db/                # data-access helpers per domain
  hooks/             # TanStack Query hooks
  auth.ts            # Better Auth server config
prisma/
  schema.prisma      # Transaction, BudgetCategory, SavingsGoal, Debt, + auth models
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | `prisma generate` + `next build` |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run db:seed` | Seed the database (`prisma/seed.ts`) |

## Deployment

Deploys like any Next.js app (e.g. on [Vercel](https://vercel.com/new)). Make sure the environment variables above are set in your hosting provider, and that `prisma generate` runs as part of the build (already wired into `npm run build`).
