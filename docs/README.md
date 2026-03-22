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
1. **Universal Trade Logic:** Treat specific trades (plumbing, auto repair) as *values* rather than unique code structures. A "booking" is a "booking" regardless of the wrench size.
2. **Deep Learning Indexing:** Standardized fields like `industry`, `jobType`, and `tags` allow the Hive to measure:
    - **Volume:** How many HVAC emergencies happen during a heatwave?
    - **Velocity:** How fast can a standard brake job be completed across 500 shops?
    - **Veracity:** Cross-referencing site evidence photos with work summaries to ensure audit-grade accuracy.
    - **Value:** Identifying high-margin services across the collective to recommend growth paths to small businesses.
3. **Privacy-Preserving Learning:** Observe patterns without ever accessing private customer PII.

## 🤖 Guidance for Agents (Token Efficiency)

1. **Schema-First:** Always consult `docs/backend.json` first. Do not guess field names.
2. **Predictable Variables:** Use standardized naming (e.g., `serviceBusinessId`, `technicianId`). This allows the Hive to index your work.
3. **Frugal Generation:** Use existing ShadCN components and non-blocking Firebase utilities.

## 🛠 Active Features
- [x] AI-powered Job Description expansion (Dispatcher).
- [x] AI-generated Work Summaries for invoicing (Technician).
- [x] Multi-tenant data scoping and Hive-ready indexing.