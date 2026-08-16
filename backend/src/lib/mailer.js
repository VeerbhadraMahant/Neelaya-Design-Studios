/**
 * Placeholder email hook.
 *
 * The demo backend stores submissions to JSON files (see lib/jsonStore.js)
 * so the site works out of the box with zero configuration. To also (or
 * instead) send a real email when someone submits the contact form or signs
 * up for the newsletter:
 *
 *   1. `npm install nodemailer` in backend/
 *   2. Fill in the SMTP_* vars in backend/.env (see .env.example)
 *   3. Uncomment the nodemailer code below
 *   4. Call `sendNotification(...)` from routes/contact.js / routes/newsletter.js
 *
 * Nothing else in the app needs to change — routes only depend on this
 * function's signature, not on how the notification is actually delivered.
 */
export async function sendNotification({ subject, text }) {
  if (!process.env.SMTP_HOST) {
    // No SMTP configured — this is a no-op in the default demo setup.
    return { sent: false, reason: 'SMTP not configured' };
  }

  // --- Uncomment once nodemailer is installed and .env is filled in ---
  // const nodemailer = (await import('nodemailer')).default;
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT || 587),
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // });
  // await transporter.sendMail({
  //   from: process.env.SMTP_USER,
  //   to: process.env.STUDIO_NOTIFY_EMAIL,
  //   subject,
  //   text,
  // });
  // return { sent: true };

  return { sent: false, reason: 'sendNotification not yet implemented' };
}
