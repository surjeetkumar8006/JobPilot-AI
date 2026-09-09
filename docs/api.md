# JobPilot AI REST API Documentation 🔌

Base URL: `http://localhost:5000/api` (Local) / `https://jobpilot-ai-backend.run.app/api` (Cloud Run)

---

## 1. Applications

### `GET /api/applications`
Fetch all applications for current user.
- **Query Params**: `status`, `search`
- **Response**: Array of Application objects.

### `POST /api/applications`
Create a new job application.
- **Body**: `{ company, role, jobDescription, priority, status, applicationDate }`
- **Response**: Created application document object.

### `GET /api/applications/:id`
Fetch single application details including `statusHistory` and `drafts`.

### `PATCH /api/applications/:id/status`
Update application stage status. Automatically appends a `statusHistory` document.
- **Body**: `{ status }`

### `POST /api/applications/:id/analyze`
Invoke Gemini AI to parse Job Description, extract required skills, and output key requirements.

---

## 2. AI Drafts

### `POST /api/drafts/generate`
Generate AI Cover Letter / Cold Email / Resume Bullets via Gemini API.
- **Body**: `{ applicationId, type, customInstructions }`
- **Response**: Generated text content & draft object.

### `GET /api/drafts/application/:applicationId`
List all drafts associated with an application.

---

## 3. Nudges & Reminders

### `GET /api/nudges`
Fetch active follow-up reminders and scheduled nudges.

### `POST /api/nudges/check`
Triggered by Cloud Scheduler to scan overdue application follow-ups.
