import { useEffect, useRef, useState } from 'react';

/**
 * Attach to any element to fade/slide it in once it scrolls into view.
 * Usage: const { ref, className } = useReveal('reveal-scale');
 * <div ref={ref} className={className}>...</div>
 */
export function useReveal(variant = 'reveal') {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, className: `${variant}${visible ? ' in' : ''}` };
}
