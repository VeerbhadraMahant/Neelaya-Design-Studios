# Neelaya Design Studio — Website

A React frontend + Node/Express backend for the Neelaya Design Studio site.
Previously this was a single static `index.html`; it's now a proper app so
future content and design changes are easy to make without touching markup.

```
Neelaya/
├── frontend/              Vite + React app (the website itself)
│   └── src/
│       ├── data/siteContent.js   ← ALL page copy lives here
│       ├── components/           One component per section
│       ├── hooks/                Scroll reveal, count-up, header state
│       ├── lib/api.js            Talks to the backend
│       └── styles/global.css     All styling (design tokens at the top)
├── backend/                Express API (contact form + newsletter)
│   └── src/
│       ├── server.js
│       ├── routes/         contact.js, newsletter.js
│       └── lib/            jsonStore.js (persistence), mailer.js (email hook)
└── legacy-static-site/     The original single-file HTML site, kept for
                             reference. No longer deployed.
```

## Running it locally

You need two terminals — the API and the website are separate processes.

**Backend** (http://localhost:4000):
```bash
cd backend
cp .env.example .env      # first time only
npm install
npm run dev
```

**Frontend** (http://localhost:5173):
```bash
cd frontend
cp .env.example .env.local   # first time only
npm install
npm run dev
```

Open http://localhost:5173 — the contact form and newsletter signup in the
footer call the backend and will show a real success/error message.

## Customizing the site

**Change any text, add a project, edit an FAQ, update a stat** — edit
`frontend/src/data/siteContent.js`. It's a single file with every piece of
copy on the site (hero text, services, portfolio projects, process steps,
studio bio, reviews, FAQ, contact info, footer links). No component code
needs to change for a content edit.

**Change colors, spacing, or type** — edit the CSS custom properties at the
top of `frontend/src/styles/global.css` (`--ink`, `--signal`, `--radius`,
`--section-gap`, etc.). Everything on the site references these tokens.

**Add or reorder a section** — sections are composed in
`frontend/src/App.jsx`. Each section is its own component in
`frontend/src/components/`.

**Add a portfolio photo** — add an entry to the `projects` array in
`siteContent.js` with an `image` URL, `alt` text, `title`, and `tag`. The
horizontal carousel picks it up automatically.

## Contact form & newsletter data

Submissions are stored as JSON in `backend/data/` (gitignored) — there's no
database to set up. To review submissions:

```bash
curl http://localhost:4000/api/contact
curl http://localhost:4000/api/newsletter
```

To have submissions emailed to the studio instead of (or in addition to)
being saved locally, see the instructions in `backend/src/lib/mailer.js` —
it's a small nodemailer stub that's disabled until you add SMTP credentials
to `backend/.env`.

## Deploying

- **Frontend**: `cd frontend && npm run build` produces a static `dist/`
  folder — deploy it to Vercel, Netlify, or any static host. Set
  `VITE_API_URL` to your backend's public URL before building.
- **Backend**: deploy `backend/` to any Node host (Render, Railway, Fly.io,
  a VPS, etc.) and set `CORS_ORIGIN` to your deployed frontend's URL.

The old `legacy-static-site/vercel.json` was written for the single-file
static site and won't apply to this structure — write a fresh deployment
config once you've picked hosts for the two halves.
