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

## 🧠 The "Hive Intelligence" Vision (The 5 Vs)
TradeOS isn't just an app; it's a **Hive of Trades**. Because every tenant's data follows the exact same variables indexed in `backend.json`, the platform leverages the 5 Vs to provide a competitive advantage to small businesses:

1. **Volume:** Aggregating job data across thousands of shops to identify macro-trends (e.g., HVAC failure rates during specific weather patterns).
2. **Velocity:** Measuring the speed of service delivery (generation rate) to benchmark efficiency and predict completion times.
3. **Variety:** Standardizing diverse trades (plumbing, auto repair, electrical) as values within a unified schema, allowing for cross-industry pattern recognition.
4. **Veracity:** Using AI to correlate site evidence (photos) with work summaries, ensuring the accuracy and trustworthiness of field data.
5. **Value:** Turning raw operational data into actionable insights—identifying high-margin services and recommending growth paths for tenants.

## 🤖 Guidance for Agents (Token Efficiency)

1. **Schema-First:** Always consult `docs/backend.json` first. Do not guess field names.
2. **Predictable Variables:** Use standardized naming (e.g., `serviceBusinessId`, `technicianId`). This allows the Hive to index your work.
3. **Frugal Generation:** Use existing ShadCN components and non-blocking Firebase utilities.

## 🛠 Active Features
- [x] AI-powered Job Description expansion (Dispatcher).
- [x] AI-generated Work Summaries for invoicing (Technician).
- [x] Multi-tenant data scoping and Hive-ready indexing.