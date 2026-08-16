# AI Job Application Assistant

A small AI-assisted workflow prototype I built to explore how AI can support job searching without taking control away from the applicant.

## What it does

The prototype is designed around five steps:

1. **Job intake** — capture the job description and requirements.
2. **Fit analysis** — separate strong matches, gaps, and evidence that needs verification.
3. **CV selection** — recommend which version of a candidate's CV is most relevant.
4. **Application drafting** — generate tailored talking points, cover-letter structure, and interview preparation prompts.
5. **Human approval** — the applicant reviews everything before submitting an application.

## Why I built it

I wanted to learn by solving a real workflow problem rather than building a generic chatbot. The project combines prompt design, structured data, workflow thinking, and lightweight front-end development.

## Responsible-AI choices

- It does **not** invent qualifications or experience.
- It flags missing evidence instead of treating a keyword match as proof.
- It does **not** submit applications automatically.
- Personal information and confidential employer/client information should be removed before using real data in a public demo.

## Current prototype

The accompanying `index.html` and `app.js` files provide a browser-based demonstration of the workflow and its scoring logic. The scoring layer is deliberately transparent so that an applicant can inspect why a role was considered a strong, moderate, or weak match.

## What I'm learning next

The next iteration would connect the workflow to an LLM API, structured CV/job-description extraction, and a small application tracker while keeping human approval as the final gate.

**Built as a learning project by Nonjabulo Matomela.**
