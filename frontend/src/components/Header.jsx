import { business, nav } from '../data/siteContent.js';

export default function Header({ scrolled, onOpenMenu }) {
  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap">
        <a href="#top" className="logo">
          <span className="mark">N</span> {business.name}
        </a>
        <nav className="nav-links">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className={`btn nav-cta${scrolled ? '' : ' on-dark'}`}>
          Begin a Project <span className="arrow">→</span>
        </a>
        <button className="burger" aria-label="Open menu" onClick={onOpenMenu}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
