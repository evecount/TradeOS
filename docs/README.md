# TradeOS: Agentic Orchestration Guide

This document serves as the primary technical reference for AI agents building or modifying the TradeOS platform.

## 🏗 Project Architecture

TradeOS is a **multi-tenant** Field Service Management (FSM) platform.

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, ShadCN UI, Tailwind CSS
- **Backend/Database:** Firebase (Firestore, Authentication)
- **AI Integration:** Genkit v1.x (Google Gemini Multimodal)
- **Language:** TypeScript

### Multi-Tenancy Model
Isolation is handled at the `ServiceBusiness` level.
- All core entities (Jobs, Customers, Invoices) are scoped via a `serviceBusinessId`.
- Security is enforced via Firestore Rules using **Authorization Independence**.

## 🧠 The "Hive Intelligence" Vision (The 5 Vs)
TradeOS leverages the collective operational data of thousands of tenants to provide competitive advantages via the 5 Vs:

1. **Volume:** Aggregating job types to identify macro-trends (e.g., failure rates).
2. **Velocity:** Measuring service delivery speed to predict job completion times.
3. **Variety:** Standardizing diverse trades into a unified schema for pattern recognition.
4. **Veracity:** Using multimodal AI agents to label and verify site evidence (photos/video) against work summaries. **This is the core QA layer.**
5. **Value:** Turning operational data into actionable growth paths for small businesses.

## 🤖 Active Agents & Orchestration

1. **The Dispatcher Agent (Messy Data Handler):**
   - **File:** `src/ai/flows/generate-job-description.ts`
   - **Role:** Takes unstructured customer notes and expands them into professional technical job descriptions.
   - **Trigger:** Job creation modal (`CreateJobModal.tsx`).

2. **The Veracity Agent (Multimodal QA):**
   - **File:** `src/ai/flows/generate-work-summary.ts`
   - **Role:** Correlates technician field notes with site evidence (photos) to create verified summaries for invoicing.
   - **Output:** Returns a `verificationLabel` (technical ID of the fix) and `isVerified` (boolean).
   - **Requirement:** Every mark-complete action should trigger a veracity check.

## 🛠 Guidance for Agents (Token Efficiency)

1. **Schema-First:** Always consult `docs/backend.json` first.
2. **Predictable Variables:** Use standardized naming (`serviceBusinessId`, `technicianId`).
3. **Frugal Generation:** Use existing ShadCN components and non-blocking Firebase utilities.
4. **Multimodal Awareness:** Assume AI can process both text and media to verify work. Use the `Veracity Agent` pattern for all field evidence.