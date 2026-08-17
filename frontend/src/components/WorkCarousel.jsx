import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { usePinnedCarousel } from '../hooks/usePinnedCarousel.js';
import { portfolio } from '../data/siteContent.js';

function ProjectCard({ project }) {
  const { ref, className } = useReveal('reveal');
  return (
    <article className={`c-card ${className}`} ref={ref}>
      <div className="c-img">
        <img src={project.image} alt={project.alt} loading={project.idx === '01' ? 'eager' : 'lazy'} />
      </div>
      <div className="c-meta">
        <div>
          <span className="tag">{project.tag}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="c-idx">{project.idx}</span>
      </div>
    </article>
  );
}

export default function WorkCarousel() {
  const { ref: headRef, className: headClass } = useReveal('reveal');
  const { ref: ctaRef, className: ctaClass } = useReveal('reveal');
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  // Desktop/trackpad: pins the row and maps vertical scroll to horizontal
  // position, then releases so the page continues scrolling normally.
  // Mobile: no-ops — the CSS below gives it a plain native swipeable row.
  usePinnedCarousel(pinRef, trackRef);

  return (
    <section id="work">
      <div className="wrap">
        <div className={`work-head-row ${headClass}`} ref={headRef}>
          <div>
            <span className="eyebrow">{portfolio.eyebrow}</span>
            <h2>{portfolio.heading}</h2>
          </div>
        </div>
      </div>

      <div className="carousel-pin" ref={pinRef}>
        <div className="carousel-pin-inner">
          <div className="carousel-track-wrap">
            <div className="carousel" ref={trackRef}>
              {portfolio.projects.map((project) => (
                <ProjectCard key={project.idx} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className={`portfolio-cta ${ctaClass}`} ref={ctaRef}>
          <a href={portfolio.cta.href} className="link-cta">
            {portfolio.cta.label} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
