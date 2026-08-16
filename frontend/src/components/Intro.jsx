import { useReveal } from '../hooks/useReveal.js';
import { intro } from '../data/siteContent.js';

export default function Intro() {
  const { ref, className } = useReveal('reveal-scale');

  return (
    <section className="intro">
      <div className="wrap">
        <div className="intro-grid">
          <span className="eyebrow">{intro.eyebrow}</span>
          <div>
            <p className={`intro-lead ${className}`} ref={ref}>
              {intro.lead.map((part, i) =>
                typeof part === 'string' ? (
                  <span key={i}>{part}</span>
                ) : (
                  <strong key={i}>{part.emphasis}</strong>
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
