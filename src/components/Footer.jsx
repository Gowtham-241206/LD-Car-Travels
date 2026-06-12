import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Routes', href: '#routes' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Outstation Trips',
    'Local City Rides',
    'Airport Transfers',
    'Pilgrimage Tours',
    'Corporate Travel',
    'Wedding & Events',
  ];

  const destinations = [
    'Nellore to Tirupati',
    'Nellore to Chennai',
    'Nellore to Hyderabad',
    'Nellore to Vijayawada',
    'Nellore to Bangalore',
    'Nellore to Srisailam',
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 17h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H3v8a2 2 0 0 0 2 2Zm14 0h-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3v8a2 2 0 0 1-2 2Z" fill="url(#fCarGrad)"/>
                    <rect x="4" y="6" width="16" height="9" rx="3" fill="url(#fCarGrad)"/>
                    <circle cx="7.5" cy="17" r="1.5" fill="#0a0a0b"/>
                    <circle cx="16.5" cy="17" r="1.5" fill="#0a0a0b"/>
                    <defs>
                      <linearGradient id="fCarGrad" x1="0" y1="0" x2="24" y2="24">
                        <stop offset="0%" stopColor="#fbbf24"/>
                        <stop offset="100%" stopColor="#d97706"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span className="footer__brand-name">LD Car Travels</span>
                  <span className="footer__brand-telugu telugu-text">ల్డ్ కారు ట్రావెల్స్</span>
                </div>
              </div>
              <p className="footer__brand-desc">
                Nellore's most trusted cab service with 8+ years of excellence. 
                Safe, comfortable & affordable rides for all your travel needs.
              </p>
              <div className="footer__social">
                <a href="tel:09966587402" className="footer__social-link" aria-label="Call us">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </a>
                <a href="https://wa.me/919966587402" target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--wa" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Google Maps">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__col-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__col-title">Our Services</h4>
              <ul className="footer__col-list">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#services">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div className="footer__col">
              <h4 className="footer__col-title">Popular Routes</h4>
              <ul className="footer__col-list">
                {destinations.map((dest) => (
                  <li key={dest}>
                    <a href="#routes">{dest}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} LD Car Travels. All rights reserved.
            </p>
            <p className="footer__lgbtq">
              <span className="footer__rainbow">🏳️‍🌈</span> LGBTQ+ Friendly
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
