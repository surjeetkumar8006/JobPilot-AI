# JobPilot AI - System Architecture Document 🏛️

Presented by Google Cloud & AIM Media House for Code Kitchen Season 1.

---

## 1. System Overview

JobPilot AI is an automated intelligence pipeline and tracking system built for software engineers to streamline their job search, application lifecycle, AI resume tuning, cover letter generation, and automated follow-ups.

---

## 2. GCP Architecture & Components

```
                ┌──────────────────────────┐
                │       React 18 UI        │
                │     (Tailwind CSS)       │
                └────────────┬─────────────┘
                             │
                             ▼ HTTPS / REST API
                ┌──────────────────────────┐
                │   GCP Cloud Run Service  │
                │ (Node.js Express Engine) │
                └──────┬─────────────┬─────┘
                       │             │
                       ▼             ▼
      ┌──────────────────┐         ┌─────────────────────┐
      │  Firestore NoSQL │         │  Google Gemini API  │
      │    Database      │         │ (2.5 Flash / 1.5)   │
      └──────────────────┘         └─────────────────────┘
               ▲
               │ Triggers Automated Reminders
      ┌──────────────────┐
      │  Cloud Scheduler │
      └──────────────────┘
```

### Component Breakdown:
1. **Frontend UI (React + Vite)**: Interactive dashboard rendering application tables, Kanban view, status timeline, and AI prompt generation forms.
2. **Backend API (Cloud Run / Node.js Express)**: REST backend exposing application CRUD endpoints, status history tracking, Gemini AI prompt orchestrator, and nudge scheduling.
3. **Database (Firestore)**: Document-oriented NoSQL database managing user applications, status logs, cover letter drafts, and benchmark job datasets.
4. **AI Engine (Google Gemini)**: Analyzes job descriptions, extracts skills, generates tailored resume bullets, creates cover letters, and composes interview follow-up emails.
5. **Scheduler (Cloud Scheduler)**: Sends periodic cron triggers to `/api/nudges/check` to evaluate overdue follow-ups and push notifications.
