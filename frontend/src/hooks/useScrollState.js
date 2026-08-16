import { useEffect, useState } from 'react';

/**
 * Tracks page scroll position for the sticky header's "scrolled" state
 * and the back-to-top button's visibility.
 */
export function useScrollState() {
  const [scrolled, setScrolled] = useState(false);
  const [pastFold, setPastFold] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setPastFold(window.scrollY > 600);
    };
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return { scrolled, pastFold };
}
