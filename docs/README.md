# TradeOS: Agentic Orchestration Guide

This document serves as the primary technical reference for AI agents building or modifying the TradeOS platform.

## 🏗 Project Architecture

TradeOS is a **multi-tenant** Field Service Management (FSM) platform centered around the "AI Buddy" concept.

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, ShadCN UI, Tailwind CSS
- **Backend:** Firebase (Firestore, Authentication)
- **AI Integration:** Genkit v1.x
- **The "Buddy" Core:** The app behaves as a proactive agent rather than a passive database.

## 🧠 The "Hive Intelligence" (The 5 Vs)
1. **Volume:** Aggregating job data for industry trends.
2. **Velocity:** Real-time speed-to-invoice benchmarks.
3. **Variety:** Standardizing trades (HVAC, Auto, Plumbing) into a unified schema.
4. **Veracity:** Multimodal QA (Photo/Video) labeling to audit field work.
5. **Value:** Automated monetization and growth insights for small businesses.

## 🤖 Active Agents & Roles

1. **The Dispatcher Agent (Data Ingestion):**
   - Expands messy notes into professional technical descriptions.

2. **The Veracity Agent (Multimodal Audit):**
   - Correlates technician notes with site evidence (photos/video).
   - Returns technical labels for the "Hive" index.

3. **The Buddy Agent (Proactive Automation):**
   - **Trigger:** Job status changes (e.g., 'En Route', 'In Progress').
   - **Action:** Sends client SMS/Email notifications, prepares invoice drafts, and reminders for technicians.

## 🛠 Guidance for Agents

1. **Schema-First:** Consult `docs/backend.json`. All jobs MUST have a `serviceBusinessId`.
2. **Predictable Orchestration:** Every 'Job Completed' status change should be preceded by a `Veracity Audit`.
3. **Proactive UI:** Surface what the "AI Buddy" is doing (e.g., "AI is notifying the client", "Verification complete").
