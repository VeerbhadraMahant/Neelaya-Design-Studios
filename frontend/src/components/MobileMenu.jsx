import { nav } from '../data/siteContent.js';

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`}>
      <button className="close-btn" aria-label="Close menu" onClick={onClose}>
        &times;
      </button>
      {nav.map((item) => (
        <a key={item.href} href={item.href} onClick={onClose}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
