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
- Security is enforced via Firestore Rules using **Authorization Independence**.

## 🧠 The "Hive Intelligence" Vision
TradeOS isn't just an app; it's a **Hive of Trades**. Because every tenant's data follows the exact same variables indexed in `backend.json`, AI agents can:
1. **Cross-Tenant Learning:** Observe patterns in how "Plumbers in the Northeast" handle winter emergencies without ever accessing private customer PII.
2. **Standardized Reasoning:** Use the "set schema" as a logic bridge to provide industry-standard recommendations across isolated tenants.
3. **Hive Persistence:** As the platform grows, the "Hive" gets smarter, teaching every new tenant the best practices discovered by the collective.

## 🤖 Guidance for Agents (Token Efficiency)

1. **Schema-First:** Always consult `docs/backend.json` first. Do not guess field names. This is our "Single Source of Truth."
2. **Predictable Variables:** Use standardized naming conventions (e.g., `serviceBusinessId`, `technicianId`). This allows for deep learning indexing.
3. **Frugal Generation:** Use existing ShadCN components and non-blocking Firebase utilities.

## 🛠 Active Features
- [x] AI-powered Job Description expansion (Dispatcher).
- [x] AI-generated Work Summaries for invoicing (Technician).
- [x] Multi-tenant data scoping and Hive-ready indexing.
