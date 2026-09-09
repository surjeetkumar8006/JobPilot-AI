# JobPilot AI Datasets

This directory contains pre-seeded benchmark datasets for Code Kitchen evaluation:

- `sample-jobs.json`: Contains 10+ realistic software engineering job postings across top technology companies (Google Cloud, Razorpay, Swiggy, Atlassian, Zomato, PhonePe, Cred, Postman, Flipkart, InMobi).
- `sample-drafts.json`: Pre-generated AI cover letters, cold email outreach, and post-interview follow-up nudges.

---

## Firestore Schema Mapping

`sample-jobs.json` populates the top-level `jobs/` collection:
```
jobs/{jobId}
  ├── company
  ├── role
  ├── location
  ├── type
  ├── salary
  ├── description
  └── requirements (array)
```

And links to drafts under `jobs/{jobId}/drafts/{draftId}`.
