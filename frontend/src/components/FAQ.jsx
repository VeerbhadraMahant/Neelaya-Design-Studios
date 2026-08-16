import { useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { faq } from '../data/siteContent.js';

function FaqItem({ item, open, onToggle }) {
  const answerRef = useRef(null);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" aria-expanded={open} onClick={onToggle}>
        <span>{item.q}</span>
        <span className="plus" />
      </button>
      <div
        className="faq-a"
        ref={answerRef}
        style={{ maxHeight: open ? `${answerRef.current?.scrollHeight ?? 0}px` : undefined }}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref: headRef, className: headClass } = useReveal('reveal');
  const { ref: listRef, className: listClass } = useReveal('reveal');
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq">
      <div className="wrap">
        <div className={`section-head ${headClass}`} ref={headRef}>
          <div>
            <span className="eyebrow">{faq.eyebrow}</span>
            <h2>{faq.heading}</h2>
          </div>
        </div>
        <div className={`faq-wrap ${listClass}`} ref={listRef}>
          {faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
