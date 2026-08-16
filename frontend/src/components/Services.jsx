import { useReveal } from '../hooks/useReveal.js';
import { services } from '../data/siteContent.js';

function ServiceCard({ item }) {
  const { ref, className } = useReveal('reveal');
  return (
    <div className={`service-card ${className}`} ref={ref}>
      <span className="service-num">{item.num}</span>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
}

export default function Services() {
  const { ref: headRef, className: headClass } = useReveal('reveal');

  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className={`section-head ${headClass}`} ref={headRef}>
          <div>
            <span className="eyebrow">{services.eyebrow}</span>
            <h2>{services.heading}</h2>
          </div>
          <p style={{ maxWidth: 340, color: 'var(--steel)', fontSize: 14, lineHeight: 1.5 }}>
            {services.intro}
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className="services-grid">
          {services.items.map((item) => (
            <ServiceCard key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
