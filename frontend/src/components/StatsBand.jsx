import { useReveal } from '../hooks/useReveal.js';
import { useCountUp } from '../hooks/useCountUp.js';
import { stats } from '../data/siteContent.js';

function Stat({ num, label }) {
  const { ref: revealRef, className } = useReveal('reveal');
  const { ref: countRef, display } = useCountUp(num);

  // Both hooks need a ref on the same element, so merge them with a callback ref.
  const setRefs = (el) => {
    revealRef.current = el;
    countRef.current = el;
  };

  return (
    <div className={`stat-lg ${className}`} ref={setRefs}>
      <div className="num">{display}</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s) => (
            <Stat key={s.label} num={s.num} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
