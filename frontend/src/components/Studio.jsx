import { useReveal } from '../hooks/useReveal.js';
import { studio, business } from '../data/siteContent.js';

export default function Studio() {
  const { ref: mediaRef, className: mediaClass } = useReveal('reveal-left');
  const { ref: textRef, className: textClass } = useReveal('reveal-right');

  return (
    <section id="studio">
      <div className="wrap">
        <div className="studio-grid">
          <div className={`studio-media ${mediaClass}`} ref={mediaRef}>
            <img src={studio.image} alt={studio.imageAlt} loading="lazy" />
          </div>
          <div className={`studio-text ${textClass}`} ref={textRef}>
            <span className="eyebrow">{studio.eyebrow}</span>
            <h2>{studio.heading}</h2>
            <p className="lead">{studio.lead}</p>
            {studio.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="founder">
              <div className="founder-line" />
              <div>
                <div className="fname">{business.founder}</div>
                <div className="frole">{studio.founderRole}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
