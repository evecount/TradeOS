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

## 🤖 Guidance for Agents (Token Efficiency)

To help agents work efficiently and minimize token usage:

1. **Schema-First:** Always consult `docs/backend.json` first. Do not guess field names.
2. **Standardized Context:** When asking for changes, refer to the "ServiceBusiness" as the Tenant and "Technician" as the User.
3. **DRY Components:** Check `src/components/ui` for existing Radix/ShadCN components before building new ones.
4. **Non-Blocking Mutations:** Always use `src/firebase/non-blocking-updates.tsx` for writes to ensure the UI stays responsive without complex local state management.
5. **Frugal File Updates:** If fixing a UI bug, only modify the specific component; do not rewrite the entire page layout unless requested.

## 🛠 Active Features
- [x] AI-powered Job Description expansion (Dispatcher).
- [x] AI-generated Work Summaries for invoicing (Technician).
- [x] Real-time job status tracking.
- [x] Multi-tenant data scoping.
- [x] Mobile-massive UI for field workers.

## 🚀 Vision
TradeOS isn't just an app; it's a **Platform-as-a-Service**. Business owners (Handymen, Plumbers) sign up to get their own portal. The Homepage must always reflect this "SaaS" nature.
