import { Router } from 'express';
import { append, readAll } from '../lib/jsonStore.js';
import { sendNotification } from '../lib/mailer.js';

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const { fname, femail, fphone, ftype, fmessage } = req.body || {};

  const errors = {};
  if (!fname || !fname.trim()) errors.fname = 'Full name is required.';
  if (!femail || !EMAIL_RE.test(femail)) errors.femail = 'A valid email is required.';
  if (!fmessage || !fmessage.trim()) errors.fmessage = 'Tell us a little about your space.';

  if (Object.keys(errors).length) {
    return res.status(400).json({ ok: false, errors });
  }

  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    name: fname.trim(),
    email: femail.trim(),
    phone: (fphone || '').trim(),
    projectType: ftype || 'Residential',
    message: fmessage.trim(),
    submittedAt: new Date().toISOString(),
  };

  await append('contact-submissions.json', entry);

  await sendNotification({
    subject: `New project inquiry from ${entry.name}`,
    text: `${entry.name} <${entry.email}> (${entry.phone || 'no phone'})\nProject type: ${entry.projectType}\n\n${entry.message}`,
  });

  res.status(201).json({ ok: true, message: "Thank you - your inquiry has been noted. We'll be in touch within two business days." });
});

// Simple listing endpoint so the studio (or a future admin UI) can review submissions.
router.get('/', async (_req, res) => {
  const entries = await readAll('contact-submissions.json');
  res.json({ ok: true, entries });
});

export default router;
