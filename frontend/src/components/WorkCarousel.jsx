import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { useScrollMarquee } from '../hooks/useScrollMarquee.js';
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
  const trackRef = useRef(null);
  const trackWrapRef = useRef(null);

  useScrollMarquee(trackRef, trackWrapRef, 0.6);

  // Render the set twice back-to-back so the marquee has somewhere to loop to.
  const loopedProjects = [...portfolio.projects, ...portfolio.projects];

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

      <div className="carousel-track-wrap" ref={trackWrapRef}>
        <div className="carousel" ref={trackRef}>
          {loopedProjects.map((project, i) => (
            <ProjectCard key={`${project.idx}-${i}`} project={project} />
          ))}
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
