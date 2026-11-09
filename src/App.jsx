import { useState, useCallback, useMemo } from 'react';
import './main.scss';
import './media.scss';

import heroImage from './assets/imgs/hero-bg.webp';
import georgeImage from './assets/imgs/george-russell.jpg';
import lewisImage from './assets/imgs/lewis-hamilton.jpg';
import carImage from './assets/imgs/mercedes-f1-car.webp';
import newsletterBg from './assets/imgs/newsletter-bg.webp';

import Counter from './Counter';
import { useReveal, useScrollEffects } from './hooks';
import {
  navItems,
  heroFacts,
  marqueeItems,
  about,
  timeline,
  stats,
  seasons,
  drivers,
  legend,
  car,
  partners,
  ownership,
  footerCols,
} from './data';

const driverImages = { george: georgeImage };
const maxWins = Math.max(...seasons.map((s) => s.wins));

const Star = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
    <path d="M24 5v19M24 24 7.5 33.5M24 24l16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SectionHead = ({ eyebrow, title, children }) => (
  <header className="section-head">
    <p className="eyebrow" data-reveal>{eyebrow}</p>
    <h2 className="section-title" data-reveal style={{ '--d': '80ms' }}>{title}</h2>
    {children}
  </header>
);

const App = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);
  const stableSetScrolled = useCallback((v) => setScrolled(v), []);
  const stableSetActive = useCallback((v) => setActive(v), []);

  useReveal();
  useScrollEffects(stableSetScrolled, stableSetActive, sectionIds);

  const setMenu = (open) => {
    setIsMenuOpen(open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubscribed(true);
      setEmail('');
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div className="app">
      <div className="progress-bar" aria-hidden="true" />

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#top" className="logo" aria-label="Mercedes-AMG PETRONAS F1 Team">
            <Star />
            <span className="logo-text">
              <strong>Mercedes-AMG</strong>
              <em>PETRONAS F1 Team</em>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className={`nav-link ${active === item.id ? 'is-active' : ''}`}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#newsletter" className="btn btn-small">Join us</a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setMenu(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setMenu(false)} />
      <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Mobile">
        <ul className="mobile-nav-list">
          {navItems.map((item, i) => (
            <li key={item.id} className="mobile-nav-item" style={{ '--i': i }}>
              <a href={item.href} className="mobile-nav-link" onClick={() => setMenu(false)}>
                <small>0{i + 1}</small>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-nav-item" style={{ '--i': navItems.length }}>
            <a href="#newsletter" className="btn" onClick={() => setMenu(false)}>Join us</a>
          </li>
        </ul>
      </nav>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="hero-shade" />
          <div className="container hero-inner">
            <p className="eyebrow hero-eyebrow">Formula One World Championship</p>
            <h1 className="headline">
              <span className="line"><span>Unleashing Speed.</span></span>
              <span className="line"><span>Engineering <i>Excellence.</i></span></span>
            </h1>
            <p className="subheadline">
              The Mercedes-AMG PETRONAS Formula One Team: eight straight Constructors’ titles,
              two UK factories and one rule that has never changed since 1954. Build it better.
            </p>
            <div className="hero-actions">
              <a href="#about" className="btn">Explore the team</a>
              <a href="#car" className="link-arrow">See the W16</a>
            </div>
          </div>
          <ul className="hero-facts container">
            {heroFacts.map((f) => (
              <li key={f.label}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
          <a href="#about" className="scroll-cue" aria-label="Scroll down"><span /></a>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <div className="marquee-group" key={k}>
                {marqueeItems.map((t) => (
                  <span key={t + k}>{t}<i /></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="container split">
            <div className="split-lead">
              <SectionHead eyebrow={about.eyebrow} title={about.title} />
            </div>
            <div className="split-body">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="lede" data-reveal style={{ '--d': `${i * 120}ms` }}>{p}</p>
              ))}
              <dl className="facts" data-reveal>
                {about.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* HISTORY */}
        <section id="history" className="section history">
          <div className="container">
            <SectionHead eyebrow="02 / History" title="From Reims to the hybrid era" />
            <ol className="timeline" data-progress="center">
              <span className="timeline-line" aria-hidden="true" />
              {timeline.map((t, i) => (
                <li key={t.year} className="timeline-item" data-reveal style={{ '--d': '0ms' }}>
                  <span className="timeline-year">{t.year}</span>
                  <div>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                  <span className="timeline-dot" aria-hidden="true" data-i={i} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DRIVERS */}
        <section id="drivers" className="section drivers">
          <div className="container">
            <SectionHead eyebrow="03 / Drivers" title="The line-up">
              <p className="section-sub" data-reveal style={{ '--d': '160ms' }}>
                Two drivers, two generations of talent. The team’s future is built around them.
              </p>
            </SectionHead>

            <div className="driver-list">
              {drivers.map((d, i) => (
                <article key={d.last} className={`driver ${i % 2 ? 'reverse' : ''}`}>
                  <div className="driver-visual" data-reveal="mask">
                    {d.image ? (
                      <img src={driverImages[d.image]} alt={`${d.first} ${d.last}`} loading="lazy" />
                    ) : (
                      <div className="driver-mono" aria-hidden="true">
                        <span>{d.number}</span>
                        <small>{d.last}</small>
                      </div>
                    )}
                    <span className="driver-number">#{d.number}</span>
                  </div>
                  <div className="driver-info">
                    <p className="eyebrow" data-reveal>{d.role} / {d.country}</p>
                    <h3 className="driver-name" data-reveal style={{ '--d': '80ms' }}>
                      {d.first} <strong>{d.last}</strong>
                    </h3>
                    <p className="driver-bio" data-reveal style={{ '--d': '160ms' }}>{d.bio}</p>
                    <dl className="facts compact" data-reveal style={{ '--d': '240ms' }}>
                      {d.facts.map(([k, v]) => (
                        <div key={k}>
                          <dt>{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>

            <aside className="legend" data-reveal>
              <img src={lewisImage} alt={legend.name} loading="lazy" />
              <div className="legend-text">
                <p className="eyebrow">Legacy / {legend.years}</p>
                <h3>{legend.name}</h3>
                <p>{legend.text}</p>
              </div>
              <ul className="legend-figures">
                {legend.figures.map((f) => (
                  <li key={f.label}>
                    <strong>{f.value}</strong>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* CAR */}
        <section id="car" className="section car">
          <div className="container">
            <SectionHead eyebrow={`04 / The car, ${car.season}`} title={`Mercedes-AMG ${car.name}`}>
              <p className="section-sub" data-reveal style={{ '--d': '160ms' }}>{car.intro}</p>
            </SectionHead>
          </div>
          <div className="car-stage" data-progress="viewport">
            <img src={carImage} alt="Mercedes-AMG F1 W16 on track" loading="lazy" />
            <span className="car-stage-label">F1 W16 · Suzuka</span>
          </div>
          <div className="container">
            <div className="spec-groups">
              {car.groups.map((g, gi) => (
                <div key={g.title} className="spec-group" data-reveal style={{ '--d': `${gi * 120}ms` }}>
                  <h3>{g.title}</h3>
                  <dl>
                    {g.rows.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="section results">
          <div className="container">
            <SectionHead eyebrow="05 / Results" title="The numbers behind the silver" />

            <ul className="stats">
              {stats.map((s, i) => (
                <li key={s.label} data-reveal style={{ '--d': `${i * 100}ms` }}>
                  <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                  <span>{s.label}</span>
                  <small>{s.note}</small>
                </li>
              ))}
            </ul>

            <div className="chart" data-reveal>
              <div className="chart-head">
                <h3>Grand Prix wins by season</h3>
                <p>Teal bars mark a Constructors’ title.</p>
              </div>
              <ul className="bars">
                {seasons.map((s, i) => (
                  <li key={s.year} className={s.pos === 1 ? 'champ' : ''}>
                    <span className="bar-value">{s.wins}</span>
                    <span
                      className="bar"
                      style={{ '--r': s.wins / maxWins, '--i': i }}
                    />
                    <span className="bar-year">{String(s.year).slice(2)}</span>
                    <span className="bar-pos">P{s.pos}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="section partners">
          <div className="container">
            <SectionHead eyebrow="06 / Partners" title="Who builds it with us" />
            <div className="tiers">
              {partners.map((t, ti) => (
                <div key={t.tier} className="tier" data-reveal style={{ '--d': `${ti * 100}ms` }}>
                  <h3>{t.tier}</h3>
                  <ul>
                    {t.items.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="ownership" data-reveal>
              <h3>Who owns the team</h3>
              <div className="own-bar">
                {ownership.map((o, i) => (
                  <span key={o.name} style={{ '--w': `${o.share}%`, '--i': i }} />
                ))}
              </div>
              <ul>
                {ownership.map((o) => (
                  <li key={o.name}>
                    <strong>{Math.round(o.share)}%</strong> {o.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section id="newsletter" className="section newsletter">
          <div className="newsletter-bg" style={{ backgroundImage: `url(${newsletterBg})` }} data-progress="viewport" />
          <div className="container newsletter-inner">
            <p className="eyebrow" data-reveal>07 / Stay close</p>
            <h2 className="section-title" data-reveal style={{ '--d': '80ms' }}>Never miss a lap</h2>
            <p className="section-sub" data-reveal style={{ '--d': '160ms' }}>
              Race reports, car updates and behind-the-scenes stories from Brackley and Brixworth,
              straight to your inbox.
            </p>

            {!isSubscribed ? (
              <form className="newsletter-form" onSubmit={handleSubscribe} noValidate data-reveal style={{ '--d': '240ms' }}>
                <div className={`form-group ${!isEmailValid ? 'error' : ''}`}>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValid(true);
                    }}
                    className={!isEmailValid ? 'invalid' : ''}
                    aria-invalid={!isEmailValid}
                  />
                  {!isEmailValid && <p className="error-message">Please enter a valid email address.</p>}
                </div>
                <button type="submit" className="btn">Subscribe</button>
              </form>
            ) : (
              <div className="success-message" role="status">
                <p>You’re on the list. The next update lands in your inbox soon.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo"><Star size={36} /></a>
            <p>Mercedes-AMG PETRONAS Formula One Team. Brackley, Northamptonshire, UK.</p>
          </div>
          {footerCols.map((c) => (
            <div key={c.title} className="footer-col">
              <h4>{c.title}</h4>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container footer-base">
          <p>© 2025 Mercedes-AMG PETRONAS Formula One Team. Fan-made portfolio project — not affiliated with Mercedes-AMG PETRONAS F1 Team, Mercedes-Benz Group or PETRONAS. All brand assets are property of their respective owners.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
