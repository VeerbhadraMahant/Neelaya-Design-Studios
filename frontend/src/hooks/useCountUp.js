import { useEffect, useRef, useState } from 'react';

/**
 * Animates a "60+" / "5" style stat label from 0 up to its target value
 * once it scrolls into view. Returns a ref to attach and the text to render.
 */
export function useCountUp(raw, duration = 1000) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(raw);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const match = String(raw).match(/^(\d+)(.*)$/);
    if (!match) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setDisplay(raw);
      return undefined;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(target * eased) + suffix);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [raw, duration]);

  return { ref, display };
}
