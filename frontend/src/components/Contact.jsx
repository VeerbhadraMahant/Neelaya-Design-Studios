import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { contact, business } from '../data/siteContent.js';
import { api } from '../lib/api.js';

const initialForm = { fname: '', femail: '', fphone: '', ftype: contact.projectTypes[0], fmessage: '' };

export default function Contact() {
  const { ref: infoRef, className: infoClass } = useReveal('reveal');
  const { ref: formRef, className: formClass } = useReveal('reveal');

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [note, setNote] = useState(contact.formNote);
  const [fieldErrors, setFieldErrors] = useState({});

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setFieldErrors({});
    try {
      const res = await api.submitContact(form);
      setStatus('sent');
      setNote(res.message || "Thank you - we'll be in touch soon.");
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setFieldErrors(err.fieldErrors || {});
      setNote(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className={`contact-info ${infoClass}`} ref={infoRef}>
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2>{contact.heading}</h2>
            <p className="lead">{contact.lead}</p>
            <div className="info-row">
              <div className="info-item">
                <div className="label">Studio</div>
                <div className="val">{business.address.full}</div>
              </div>
              <div className="info-item">
                <div className="label">Phone</div>
                <a className="val" href={`tel:${business.phoneHref}`}>{business.phone}</a>
              </div>
              <div className="info-item">
                <div className="label">Hours</div>
                <div className="val">{business.hours}</div>
              </div>
            </div>
          </div>

          <form className={formClass} ref={formRef} onSubmit={onSubmit}>
            <div className="two-col">
              <div className="field">
                <label htmlFor="fname">Full Name</label>
                <input type="text" id="fname" name="fname" required autoComplete="name" value={form.fname} onChange={onChange} />
                {fieldErrors.fname && <span className="field-error">{fieldErrors.fname}</span>}
              </div>
              <div className="field">
                <label htmlFor="femail">Email</label>
                <input type="email" id="femail" name="femail" required autoComplete="email" value={form.femail} onChange={onChange} />
                {fieldErrors.femail && <span className="field-error">{fieldErrors.femail}</span>}
              </div>
            </div>
            <div className="two-col">
              <div className="field">
                <label htmlFor="fphone">Phone</label>
                <input type="tel" id="fphone" name="fphone" autoComplete="tel" value={form.fphone} onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="ftype">Project Type</label>
                <select id="ftype" name="ftype" value={form.ftype} onChange={onChange}>
                  {contact.projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="fmessage">Tell us about your space</label>
              <textarea id="fmessage" name="fmessage" required value={form.fmessage} onChange={onChange} />
              {fieldErrors.fmessage && <span className="field-error">{fieldErrors.fmessage}</span>}
            </div>
            <button type="submit" className="btn btn-fill" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Inquiry'} <span className="arrow">→</span>
            </button>
            <p className={`form-note${status === 'error' ? ' is-error' : ''}${status === 'sent' ? ' is-success' : ''}`}>
              {note}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
