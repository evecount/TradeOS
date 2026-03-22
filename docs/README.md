# TradeOS: Agentic Orchestration Guide

This document serves as the primary technical reference for AI agents building or modifying the TradeOS platform.

## 🏗 Project Architecture

TradeOS is a **multi-tenant** Field Service Management (FSM) platform.

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, ShadCN UI, Tailwind CSS
- **Backend/Database:** Firebase (Firestore, Authentication)
- **AI Integration:** Genkit v1.x (Google Gemini)
- **Language:** TypeScript

### Multi-Tenancy Model
Isolation is handled at the `ServiceBusiness` level.
- All core entities (Jobs, Customers, Invoices) are scoped via a `serviceBusinessId`.
- Security is enforced via Firestore Rules (see `firestore.rules`) using **Authorization Independence**.
- Documents in subcollections denormalize the `serviceBusinessId` to avoid expensive lookups.

### Project Structure
- `src/app/dispatcher`: Dashboard for office staff/dispatchers.
- `src/app/technician`: Mobile-first interface for field workers.
- `src/ai/flows`: Genkit server actions for AI-powered features (Work summaries, Job enhancements).
- `src/firebase`: Client-side Firebase SDK configuration and hooks.
- `docs/backend.json`: The "Source of Truth" for data entities and Firestore paths.

## 🤖 Guidance for Agents

1. **Schema First:** Always consult `docs/backend.json` before modifying data structures.
2. **Client-Side Firebase:** Use the provided hooks (`useCollection`, `useDoc`, `useUser`) from `@/firebase`.
3. **Non-Blocking Mutations:** Use the utilities in `@/firebase/non-blocking-updates.tsx` to maintain UI responsiveness and offline support.
4. **Genkit Flows:** Implement GenAI features as server actions in `src/ai/flows`. Ensure they follow the `ai.defineFlow` pattern.
5. **UI Consistency:** Use ShadCN components. Prefer the `primary` color for Dispatcher UI and `accent` for Technician UI to distinguish contexts.

## 🛠 Active Features
- [x] AI-powered Job Description expansion.
- [x] AI-generated Work Summaries for invoicing.
- [x] Real-time job status tracking.
- [x] Multi-tenant data scoping (Mock layer currently, shifting to Firebase).
