import { useReveal } from '../hooks/useReveal.js';
import { ctaBand } from '../data/siteContent.js';

export default function CTABand() {
  const { ref, className } = useReveal('reveal');

  return (
    <section
      className="cta-band"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.72)), url('${ctaBand.image}')`,
      }}
    >
      <div className={`wrap ${className}`} ref={ref}>
        <span className="eyebrow on-dark">{ctaBand.eyebrow}</span>
        <h2>{ctaBand.heading}</h2>
        <div className="cta-actions">
          <a href={ctaBand.cta.href} className="btn on-dark">
            {ctaBand.cta.label} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
