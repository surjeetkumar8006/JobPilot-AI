# Firestore Data Model Specifications 🗄️

## Document Hierarchy & Sub-collections

```
users/
  └── {userId}/
        ├── profile/
        │     ├── name
        │     ├── email
        │     └── targetRoles (array)
        │
        └── applications/
              └── {applicationId}
                    ├── company: string
                    ├── role: string
                    ├── jobDescription: string
                    ├── extractedSkills: string[]
                    ├── priority: 'High' | 'Medium' | 'Low'
                    ├── status: 'Wishlist' | 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Rejected'
                    ├── applicationDate: timestamp
                    ├── deadline: timestamp
                    ├── createdAt: timestamp
                    ├── updatedAt: timestamp
                    │
                    ├── statusHistory/
                    │     └── {historyId}
                    │           ├── from: string
                    │           ├── to: string
                    │           └── changedAt: timestamp
                    │
                    └── drafts/
                          └── {draftId}
                                ├── type: 'Cover Letter' | 'Cold Email' | 'Follow-Up' | 'Resume Bullets'
                                ├── content: string
                                ├── status: 'Draft' | 'Final' | 'Sent'
                                └── createdAt: timestamp

jobs/
  └── {jobId}
        ├── company: string
        ├── role: string
        ├── location: string
        ├── type: string
        ├── salary: string
        ├── description: string
        ├── requirements: string[]
        │
        └── drafts/
              └── {draftId}
                    ├── type: string
                    ├── contents: string
                    ├── status: string
                    └── createdAt: timestamp
```
