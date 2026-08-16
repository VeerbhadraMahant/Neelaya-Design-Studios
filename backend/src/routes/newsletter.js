import { Router } from 'express';
import { append, readAll } from '../lib/jsonStore.js';

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const { email } = req.body || {};

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, errors: { email: 'A valid email is required.' } });
  }

  const existing = await readAll('newsletter-subscribers.json');
  const already = existing.some((e) => e.email.toLowerCase() === email.trim().toLowerCase());

  if (!already) {
    await append('newsletter-subscribers.json', {
      email: email.trim(),
      subscribedAt: new Date().toISOString(),
    });
  }

  res.status(201).json({ ok: true, message: "Thanks - you're on the list." });
});

router.get('/', async (_req, res) => {
  const entries = await readAll('newsletter-subscribers.json');
  res.json({ ok: true, entries });
});

export default router;
