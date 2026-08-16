import { useReveal } from '../hooks/useReveal.js';
import { reviews } from '../data/siteContent.js';

function ReviewCard({ review }) {
  const { ref, className } = useReveal('reveal-scale');
  return (
    <div className={`review-card ${className}`} ref={ref}>
      <span className="stars">★★★★★</span>
      <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
      <cite>{review.author}</cite>
    </div>
  );
}

export default function Reviews() {
  const { ref: headRef, className: headClass } = useReveal('reveal');
  const { ref: ctaRef, className: ctaClass } = useReveal('reveal');

  return (
    <section className="testimonial">
      <div className="wrap">
        <div className={`reviews-head ${headClass}`} ref={headRef}>
          <span className="eyebrow" style={{ marginBottom: 0 }}>{reviews.eyebrow}</span>
          <div className="reviews-rating">
            <span className="stars">★★★★★</span>
            <strong>{reviews.rating}</strong> · {reviews.count} {reviews.source}
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.items.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
        <div className={`reviews-cta ${ctaClass}`} ref={ctaRef}>
          <a href={reviews.cta.href} target="_blank" rel="noopener noreferrer" className="link-cta">
            {reviews.cta.label} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
