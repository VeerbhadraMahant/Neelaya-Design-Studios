import { useEffect } from 'react';

/**
 * Moves a track element horizontally in lock-step with page scroll —
 * scrolling down slides it right-to-left, scrolling up reverses it.
 * The track's content is expected to be rendered twice in a row (see
 * WorkCarousel.jsx); once the translated distance passes the width of a
 * single copy, the offset wraps back to 0 so the loop is seamless.
 *
 * While the pointer is over `hoverRef`'s element, wheel/trackpad input is
 * redirected into horizontal movement instead of scrolling the page — so
 * scrolling "on" the cards moves the cards, not the page.
 *
 * Motion is eased: each scroll/wheel tick nudges a target offset, and a
 * continuously-running rAF loop lerps the rendered position toward that
 * target every frame — so the row glides and settles instead of jumping
 * to each new value.
 *
 * Applies the transform directly to the DOM node via a ref instead of
 * React state, so this can run every frame without re-rendering.
 *
 * Desktop/trackpad (pointer:fine) only — touch devices get a plain native
 * horizontally-swipeable row instead (see the pointer:coarse rules in
 * global.css), so this hook is a no-op there and leaves the track alone.
 */
export function useScrollMarquee(trackRef, hoverRef, speed = 0.6, ease = 0.09) {
  useEffect(() => {
    const track = trackRef.current;
    const hoverEl = hoverRef.current;
    if (!track) return undefined;

    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let setWidth = 0;
    const measure = () => {
      setWidth = track.scrollWidth / 2;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let target = 0;
    let current = 0;
    let lastY = window.scrollY;
    let rafId;

    const tick = () => {
      current += (target - current) * ease;
      if (setWidth > 0) {
        // Wrap only the value we render, so the eased target/current pair
        // never has to jump when the loop point is crossed.
        const display = ((current % setWidth) + setWidth) % setWidth;
        track.style.transform = `translate3d(${-display}px, 0, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onScroll = () => {
      const y = window.scrollY;
      target += (y - lastY) * speed;
      lastY = y;
    };

    const onWheel = (e) => {
      // Hijack the scroll: move the row instead of the page.
      e.preventDefault();
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      target += delta * speed;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    hoverEl?.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      hoverEl?.removeEventListener('wheel', onWheel);
      ro.disconnect();
    };
  }, [trackRef, hoverRef, speed, ease]);
}
