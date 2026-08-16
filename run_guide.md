# Run Guide

## 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Runs at `http://localhost:4000`.

## 2. Frontend

Open a second terminal.

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Runs at `http://localhost:5173`.

## 3. Open the site

Visit `http://localhost:5173` in a browser. Keep both terminals running.

---

## Other commands

**Frontend production build:**
```bash
cd frontend
npm run build
npm run preview
```

**Backend production start:**
```bash
cd backend
npm start
```

**Stop servers:** `Ctrl+C` in each terminal.

**Check backend is alive:**
```bash
curl http://localhost:4000/api/health
```
