import { useReveal } from '../hooks/useReveal.js';
import { process } from '../data/siteContent.js';

function Step({ step }) {
  const { ref, className } = useReveal('reveal');
  return (
    <div className={`p-step ${className}`} ref={ref}>
      <span className="p-idx">{step.idx}</span>
      <h3>{step.title}</h3>
      <p className="p-desc">{step.body}</p>
    </div>
  );
}

export default function Process() {
  const { ref, className } = useReveal('reveal');
  return (
    <section className="process">
      <div className="wrap">
        <div className={`process-head ${className}`} ref={ref}>
          <span className="eyebrow on-dark">{process.eyebrow}</span>
          <h2>{process.heading}</h2>
        </div>
        <div className="process-list">
          {process.steps.map((step) => (
            <Step key={step.idx} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
