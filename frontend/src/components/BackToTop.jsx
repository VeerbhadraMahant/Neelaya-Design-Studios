export default function BackToTop({ visible }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button className={`to-top${visible ? ' visible' : ''}`} aria-label="Back to top" onClick={scrollToTop}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
