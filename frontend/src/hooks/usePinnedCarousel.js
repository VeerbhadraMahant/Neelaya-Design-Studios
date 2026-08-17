import { useEffect } from 'react';

/**
 * Desktop/trackpad (pointer:fine) only. Mobile gets a plain native
 * horizontally-scrollable, swipeable row instead (see the pointer:coarse
 * rules in global.css) — no JS needed there, touch scrolling handles it.
 *
 * Turns the section into a "scroll-jack" gallery: `pinRef`'s element is
 * given extra height so that, while the user scrolls down through it,
 * `stickyRef`'s element stays pinned in the viewport and the horizontal
 * position of `trackRef`'s element is driven by how far through that
 * extra height the user has scrolled. Once fully scrolled through, the
 * section releases and the page continues scrolling down normally — the
 * user's scroll is never captured or blocked, just mapped.
 */
export function usePinnedCarousel(pinRef, trackRef, ease = 0.18) {
  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return undefined;

    const fine = window.matchMedia('(pointer: fine)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine.matches || reduceMotion) {
      pin.style.height = '';
      return undefined;
    }

    let extra = 0;
    let target = 0;
    let current = 0;
    let rafId;

    const measure = () => {
      const overflow = track.scrollWidth - window.innerWidth;
      extra = Math.max(0, overflow);
      pin.style.height = extra > 0 ? `calc(100vh + ${extra}px)` : '100vh';
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);

    const onScroll = () => {
      if (extra <= 0) return;
      const rect = pin.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      target = progress * extra;
    };
    onScroll();

    const tick = () => {
      current += (target - current) * ease;
      track.style.transform = `translate3d(${-current}px, 0, 0)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      ro.disconnect();
      pin.style.height = '';
      track.style.transform = '';
    };
  }, [pinRef, trackRef, ease]);
}
