import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import contactRouter from './routes/contact.js';
import newsletterRouter from './routes/newsletter.js';

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = new Set([
  'http://localhost:5173',
  ...(process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim()) : []),
]);

app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser requests (curl, server-to-server) with no Origin header.
      if (!origin || allowedOrigins.has(origin)) return callback(null, true);
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
  })
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'neelaya-backend', time: new Date().toISOString() });
});

app.use('/api/contact', contactRouter);
app.use('/api/newsletter', newsletterRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ ok: false, message: 'Something went wrong. Please try again.' });
});

app.listen(PORT, () => {
  console.log(`Neelaya API listening on http://localhost:${PORT}`);
});
