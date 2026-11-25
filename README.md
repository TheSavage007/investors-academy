# The Investors Academy Inc. Platform

Full stack web platform for **The Investors Academy Inc.**, a nonprofit rebuilding lives in Atlanta through housing support, youth outreach, workforce development, a food pantry and a clothing closet.

The platform runs the public site, takes in requests for help, records donation pledges and newsletter signups, and gives staff a secure dashboard to work every request from first contact to enrollment. I designed the database and built the application end to end.

## What it does

| Area | Capability |
| --- | --- |
| Public site | Home, About, Programs, Get Help and Donate pages with photo slideshow, mission band, FAQ and sticky call to action |
| Intake | "Get Help" form writes a `Participant` record tagged to the program the person needs |
| Fundraising | Donation pledge form (one time or monthly) writes a `DonationPledge` record |
| Newsletter | Signup form writes a `Subscriber` record |
| Staff dashboard | Admin only view with live counts (new requests, total requests, subscribers, total pledged), request pipeline with inline status updates, subscriber and pledge tables |
| Auth | Email and Google sign in, registration, password reset and multi factor authentication; role based access (`admin`, `user`) |

## Tech stack

- **Frontend:** React 19, TanStack Start and TanStack Router (file based routing, server rendering), Tailwind CSS, Radix UI primitives, Lucide icons
- **Backend and data:** Base44 backend (managed database, auth, row level security) through the `@base44/sdk`
- **Runtime and hosting:** Cloudflare Workers runtime via the Cloudflare Vite plugin, hosted on Base44
- **Tooling:** Vite, ESLint, PostCSS

## Database

Four entities, each with row level security so the public can submit but only staff can read or change records.

```
Participant      request for help (program, household size, status pipeline)
DonationPledge   gift pledge (amount, one time or monthly, acknowledgment status)
Subscriber       newsletter contact
User             app account with role (admin or user)
```

Full field definitions, enums, access rules and the request pipeline are in **[docs/DATABASE.md](docs/DATABASE.md)**. Schema source files live in [`base44/entities/`](base44/entities).

## Project structure

```
investors-academy/
├── base44/
│   ├── config.jsonc            app build settings
│   └── entities/               database schemas (Participant, DonationPledge, Subscriber, User)
├── docs/
│   └── DATABASE.md             data model, access rules, pipeline
├── src/
│   ├── api/                    backend client
│   ├── components/
│   │   ├── site/               public site sections and forms
│   │   ├── admin/              staff dashboard tables and stat cards
│   │   ├── auth/               sign in, registration, MFA, password reset
│   │   └── ui/                 shared UI component library
│   ├── hooks/                  responsive helpers
│   ├── lib/                    auth context, program and status lookups, error capture
│   ├── routes/
│   │   ├── _site/              public pages: index, about, programs, get-help, donate
│   │   ├── _authed/            gated pages: admin dashboard
│   │   └── login, register, mfa, forgot-password, reset-password
│   ├── router.jsx
│   ├── server.js               Worker entry
│   └── start.js                request and server function middleware
├── package.json
├── vite.config.js
└── wrangler.jsonc
```

## Run locally

```bash
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run lint
```

The app talks to its Base44 backend, so a linked Base44 app is required for live data.

## Security notes

- Public visitors can **create** intake requests, pledges and subscriptions but cannot read them back.
- Only users with the `admin` role can read, update or delete records; a participant can read only the request they created.
- The admin route is client gated (`ssr: false`) and every query is still enforced server side by row level security.
- No secrets are stored in this repository.

## Author

**Randy O. Powell**
Data analytics, website and database design for The Investors Academy Inc.
GitHub: [TheSavage007](https://github.com/TheSavage007)

© The Investors Academy Inc. All rights reserved.
