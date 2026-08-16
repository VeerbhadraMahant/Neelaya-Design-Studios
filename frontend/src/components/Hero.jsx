import { hero, business } from '../data/siteContent.js';

const [wordmarkPrimary, ...rest] = business.name.toUpperCase().split(' ');
const wordmarkSecondary = rest.join(' ');

export default function Hero() {
  return (
    <section className="hero" id="main-content">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.2) 30%, rgba(0,0,0,.75) 100%), url('${hero.image}')`,
        }}
      />
      <div className="hero-wordmark-wrap">
        <div className="hero-wordmark">
          <span className="wordmark-primary">{wordmarkPrimary}</span>
          <span className="wordmark-secondary">{wordmarkSecondary}</span>
        </div>
      </div>
      <div className="wrap hero-content">
        <span className="eyebrow on-dark">{hero.eyebrow}</span>
        <h1>{hero.heading}</h1>
        <div className="hero-sub">
          <p>{hero.body}</p>
          <a href={hero.cta.href} className="btn on-dark">
            {hero.cta.label} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
