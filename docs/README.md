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

1. **Schema-First:** Always consult `docs/backend.json` first. Do not guess field names. This is our "Single Source of Truth."
2. **Set Variables:** Use standardized naming conventions (e.g., `serviceBusinessId`, `technicianId`). Avoid aliases like `bizId` or `techId` in code to maintain indexability.
3. **Standardized Context:** When asking for changes, refer to the "ServiceBusiness" as the Tenant and "Technician" as the User.
4. **DRY Components:** Check `src/components/ui` for existing Radix/ShadCN components before building new ones.
5. **Non-Blocking Mutations:** Always use `src/firebase/non-blocking-updates.tsx` for writes to ensure the UI stays responsive without complex local state management.

## 🧠 The Schema as an Orchestration Layer
TradeOS isn't just an app; it's a platform built on a "set schema." Because every tenant's data follows the exact same variables indexed in `backend.json`, we can perform "Deep Learning" and aggregate analysis across the platform while maintaining strict data isolation. Agents should respect this schema as it forms the basis for all cross-tenant AI functionality.

## 🛠 Active Features
- [x] AI-powered Job Description expansion (Dispatcher).
- [x] AI-generated Work Summaries for invoicing (Technician).
- [x] Real-time job status tracking.
- [x] Multi-tenant data scoping.
- [x] Mobile-massive UI for field workers.

## 🚀 Vision
TradeOS is a **Platform-as-a-Service**. Business owners (Handymen, Plumbers) sign up to get their own portal. The Homepage must always reflect this "SaaS" nature.
