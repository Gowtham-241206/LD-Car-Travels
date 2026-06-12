import { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Outstation Trips',
    description: 'Travel comfortably to any destination across Andhra Pradesh, Telangana & beyond. One-way and round trips available at the best rates.',
    features: ['One-way & Round Trip', 'Multi-city Tours', '24/7 Availability'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M12 8v8m-4-4h8"/>
      </svg>
    ),
    title: 'Local City Rides',
    description: 'Navigate Nellore city with ease. From business meetings to shopping trips — reliable local cab service at pocket-friendly prices.',
    features: ['Hourly Packages', 'Business Travel', 'Shopping Trips'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
      </svg>
    ),
    title: 'Airport Transfers',
    description: 'Timely airport pickups and drops to Tirupati, Chennai, Vijayawada & Hyderabad airports. Track your ride and travel stress-free.',
    features: ['Flight Tracking', 'Meet & Greet', 'No Hidden Charges'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Pilgrimage Tours',
    description: 'Visit Tirupati, Srisailam, Mantralayam & other sacred destinations with our specially curated pilgrimage tour packages.',
    features: ['Temple Circuits', 'Multi-day Packages', 'Experienced Drivers'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Corporate Travel',
    description: 'Dedicated fleet for corporate clients. Monthly packages, employee transportation & executive travel solutions for businesses in Nellore.',
    features: ['Monthly Contracts', 'Executive Cars', 'Billing Support'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Wedding & Events',
    description: 'Make your special day even more memorable. Premium decorated cars for weddings, receptions & all special occasions.',
    features: ['Decorated Cars', 'Flexible Hours', 'Premium Fleet'],
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services section" id="services" ref={sectionRef}>
      <div className="services__bg-glow"></div>
      <div className="container">
        <div className="services__header">
          <p className="section-label">Our Services</p>
          <h2 className="section-title">
            Complete Travel Solutions<br />
            <span className="text-gold">For Every Need</span>
          </h2>
          <p className="section-subtitle">
            From daily commutes to special occasions — we have the perfect ride for you. 
            Professional service at prices that won't break the bank.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="service-card glass-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((feature, i) => (
                  <li key={i} className="service-card__feature">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="tel:09966587402" className="service-card__cta">
                Book Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
