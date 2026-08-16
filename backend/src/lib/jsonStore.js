import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', '..', 'data');

/**
 * Minimal append-only JSON file store.
 * Fine for a low-traffic studio site; swap for a real database
 * (Postgres, SQLite, Mongo...) later without touching the routes —
 * they only call append()/readAll() below.
 */
async function ensureFile(fileName) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, fileName);
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, '[]', 'utf-8');
  }
  return filePath;
}

export async function append(fileName, entry) {
  const filePath = await ensureFile(fileName);
  const raw = await fs.readFile(filePath, 'utf-8');
  const list = JSON.parse(raw || '[]');
  list.push(entry);
  await fs.writeFile(filePath, JSON.stringify(list, null, 2), 'utf-8');
  return entry;
}

export async function readAll(fileName) {
  const filePath = await ensureFile(fileName);
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw || '[]');
}
