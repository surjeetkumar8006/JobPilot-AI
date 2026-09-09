# JobPilot AI 🚀

> **AI-Powered Job Application Tracker & Career Optimization Pipeline**  
> *Built for Code Kitchen Track 03 (Presented by Google Cloud)*

![JobPilot AI Architecture](https://img.shields.io/badge/GCP-Cloud%20Run%20%7C%20Firestore%20%7C%20Gemini%20%7C%20Scheduler-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Audition-Qualified%20(97%2F100)-orange)

---

## 🌟 Overview

**JobPilot AI** is an intelligent, data-driven application tracking system designed for students and early-career software developers applying to multiple roles. Applying to dozens of jobs quickly leads to missed deadlines, generic resumes, un-tracked follow-ups, and interview disorganization.

JobPilot AI automates application tracking, leverages Google Gemini AI to analyze Job Descriptions (JDs), extract core skills, tailor resume bullet points, draft custom cover letters, and schedule timely follow-up nudges via Cloud Scheduler.

---

## ✨ Features

- 📊 **Interactive Dashboard**: Real-time stats on total applications, active interview stages, offer rate, pending drafts, and upcoming follow-ups.
- 📋 **Application Lifecycle Management**: Track applications across stages (`Wishlist`, `Applied`, `Screening`, `Interview`, `Offer`, `Rejected`) with complete `statusHistory` logging.
- 🧠 **Gemini AI Engine**:
  - **JD Requirement & Skill Parsing**: Automatically extracts key tech stack, required experience, and soft skills.
  - **Tailored Resume Bullets**: Generates customized achievement bullets matching target JDs.
  - **Cold Outreach & Cover Letters**: Builds personalized candidate messages in seconds.
  - **Follow-up Nudges**: Recommends strategic follow-up timing and email templates.
- 🗄️ **Firestore Architecture**: Optimized document schema with sub-collections (`statusHistory`, `drafts`) and top-level job reference datasets.
- ⚡ **Full-Stack Local & Cloud Execution**: Runs locally using Node/Express + Vite/React and deploys seamlessly to GCP Cloud Run.

---

## 🏗️ Project Architecture

```
                 ┌──────────────────┐
                 │   Frontend UI    │
                 │ (React + Vite)   │
                 └────────┬─────────┘
                          │
                          ↓ REST API
                 ┌──────────────────┐
                 │  Cloud Run / Node│
                 │ Express Backend  │
                 └───┬──────────┬───┘
                     │          │
             ┌───────┘          └────────┐
             ↓                           ↓
      ┌──────────────┐            ┌─────────────┐
      │  Firestore   │            │ Gemini 1.5/ │
      │  Database    │            │ 2.5 Flash   │
      └──────────────┘            └─────────────┘
             ↑
             │ Triggers Nudges
      ┌──────────────┐
      │Cloud Scheduler│
      └──────────────┘
```

---

## 📂 Complete Project Structure

```
JobPilot AI/
├── frontend/             # React 18 + Vite + Tailwind CSS Frontend
├── backend/              # Node.js + Express REST API Backend
├── data/                 # Sample Job Postings & Draft Templates
├── scripts/              # Firestore Seed & Dataset Import Scripts
├── docs/                 # System Architecture, Data Model & API Docs
├── tests/                # Jest Automated Test Suite
├── docker-compose.yml    # Docker Local Development Orchestration
└── README.md
```

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- **Node.js**: v18+ (Recommended v20+)
- **npm**: v9+
- (Optional) **Google Gemini API Key** for live AI features.

### 1. Clone & Set Up Backend

```bash
cd backend
npm install
cp .env.example .env
# Optional: Add your GEMINI_API_KEY in .env
npm run dev
```
Backend runs at `http://localhost:5000`.

### 2. Set Up Frontend

```bash
cd ../frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`.

### 3. Seed Dataset to Firestore / Mock Store

```bash
cd ..
node scripts/seedFirestore.js
```

---

## 🧪 Running Tests

```bash
# Run root dataset & schema validation tests
npm test

# Run backend API integration tests
cd backend && npm test
```

---

## 📜 License

MIT License © 2026 Code Kitchen Team.
