import './WhyChooseUs.css';

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Safe & Secure',
    description: 'Verified drivers, GPS-tracked vehicles, and 24/7 support for your complete peace of mind.',
    stat: '100%',
    statLabel: 'Safety Record',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Always Punctual',
    description: 'Our drivers arrive on time, every time. We value your schedule as much as you do.',
    stat: '99%',
    statLabel: 'On-time Rate',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Transparent Billing',
    description: 'No surge pricing or hidden charges. What you see is what you pay.',
    stat: '0',
    statLabel: 'Hidden Fees',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Top Rated',
    description: 'Rated 4.9★ by 844+ customers on Google. Our reputation speaks for our quality service.',
    stat: '4.9★',
    statLabel: 'Google Rating',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Well-Maintained Cars',
    description: 'Clean, sanitized, and regularly serviced vehicles. Every ride feels like a brand new car.',
    stat: '50+',
    statLabel: 'Fleet Vehicles',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: '24/7 Support',
    description: 'Day or night, our team is always available. Book a cab any time with a single phone call.',
    stat: '24/7',
    statLabel: 'Availability',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why section" id="why-us">
      <div className="why__bg-gradient"></div>
      <div className="container">
        <div className="why__header">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">
            Nellore Trusts <span className="text-gold">LD Car Travels</span>
          </h2>
          <p className="section-subtitle">
            With 8+ years of experience and 844+ happy customers, 
            we've earned the trust of Nellore. Here's why we stand out.
          </p>
        </div>

        <div className="why__grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>
              <div className="why-card__icon-wrap">
                <div className="why-card__icon">{reason.icon}</div>
              </div>
              <div className="why-card__content">
                <h3 className="why-card__title">{reason.title}</h3>
                <p className="why-card__desc">{reason.description}</p>
              </div>
              <div className="why-card__stat">
                <span className="why-card__stat-value">{reason.stat}</span>
                <span className="why-card__stat-label">{reason.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
