const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

async function post(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || 'Something went wrong. Please try again.';
    const error = new Error(message);
    error.fieldErrors = data?.errors;
    throw error;
  }
  return data;
}

export const api = {
  submitContact: (payload) => post('/api/contact', payload),
  subscribeNewsletter: (email) => post('/api/newsletter', { email }),
};
