import { useState } from 'react';
import { business, footer } from '../data/siteContent.js';
import { api } from '../lib/api.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState(footer.newsletterNote);
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await api.subscribeNewsletter(email);
      setStatus('sent');
      setNote(res.message || "Thanks - you're on the list.");
      setEmail('');
    } catch (err) {
      setStatus('error');
      setNote(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="mark">N</span> {business.shortName}
            </a>
            <p>{footer.brandBlurb}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Stay Updated</h4>
            <form className="newsletter-form" onSubmit={onSubmit}>
              <label htmlFor="newsletterEmail" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
                Email address
              </label>
              <input
                type="email"
                id="newsletterEmail"
                placeholder="Your email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" aria-label="Subscribe" disabled={status === 'sending'}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
            <p className="newsletter-note">{note}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <div className="socials">
            {business.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
