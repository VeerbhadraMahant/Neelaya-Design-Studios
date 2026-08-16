import { useEffect, useRef } from 'react';

const HOVER_SELECTOR =
  'nav, a, button, .btn, .link-cta, .service-card, .c-card, .review-card, .faq-q, input, select, textarea, .to-top';

/**
 * Custom circular cursor: a small translucent dot at rest, growing into a
 * white disc with mix-blend-mode:difference on hover — which optically
 * inverts any text/UI it passes over. Desktop (fine pointer) only; see
 * global.css for the pointer:coarse fallback that hides it entirely.
 */
export default function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    const dot = dotRef.current;
    if (!dot) return undefined;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let shown = false;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!shown) {
        dotX = mouseX;
        dotY = mouseY;
        shown = true;
        dot.style.opacity = '';
      }
    };

    const raf = () => {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(raf);
    };

    const onMouseOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) dot.classList.add('active');
    };
    const onMouseOut = (e) => {
      const leavingHover = e.target.closest(HOVER_SELECTOR);
      const enteringHover = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(HOVER_SELECTOR);
      if (leavingHover && !enteringHover) dot.classList.remove('active');
    };
    const onDocLeave = () => {
      dot.style.opacity = '0';
    };
    const onDocEnter = () => {
      dot.style.opacity = '';
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseleave', onDocLeave);
    document.addEventListener('mouseenter', onDocEnter);
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseleave', onDocLeave);
      document.removeEventListener('mouseenter', onDocEnter);
    };
  }, []);

  return <div className="cursor-dot" ref={dotRef} aria-hidden="true" />;
}
