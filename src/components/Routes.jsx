import './Routes.css';

const routes = [
  { from: 'Nellore', to: 'Tirupati', distance: '175 km', time: '3 hrs', price: '₹2,500' },
  { from: 'Nellore', to: 'Chennai', distance: '180 km', time: '3.5 hrs', price: '₹2,800' },
  { from: 'Nellore', to: 'Hyderabad', distance: '460 km', time: '7 hrs', price: '₹6,500' },
  { from: 'Nellore', to: 'Vijayawada', distance: '280 km', time: '4.5 hrs', price: '₹3,800' },
  { from: 'Nellore', to: 'Ongole', distance: '130 km', time: '2.5 hrs', price: '₹1,800' },
  { from: 'Nellore', to: 'Srisailam', distance: '340 km', time: '6 hrs', price: '₹4,800' },
  { from: 'Nellore', to: 'Bangalore', distance: '380 km', time: '6 hrs', price: '₹5,500' },
  { from: 'Nellore', to: 'Guntur', distance: '240 km', time: '4 hrs', price: '₹3,200' },
];

const Routes = () => {
  return (
    <section className="routes section" id="routes">
      <div className="container">
        <div className="routes__header">
          <p className="section-label">Popular Routes</p>
          <h2 className="section-title">
            Frequently Booked <span className="text-gold">Routes</span>
          </h2>
          <p className="section-subtitle">
            One-way and round-trip rides at transparent prices. 
            No surge pricing, no hidden charges — just honest fares.
          </p>
        </div>

        <div className="routes__grid">
          {routes.map((route, index) => (
            <div className="route-card glass-card" key={index}>
              <div className="route-card__route">
                <div className="route-card__city">
                  <div className="route-card__dot route-card__dot--start"></div>
                  <span>{route.from}</span>
                </div>
                <div className="route-card__line">
                  <svg width="40" height="2" viewBox="0 0 40 2">
                    <line x1="0" y1="1" x2="40" y2="1" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="4 4"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold-400)" className="route-card__arrow">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  <svg width="40" height="2" viewBox="0 0 40 2">
                    <line x1="0" y1="1" x2="40" y2="1" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="4 4"/>
                  </svg>
                </div>
                <div className="route-card__city">
                  <div className="route-card__dot route-card__dot--end"></div>
                  <span>{route.to}</span>
                </div>
              </div>
              
              <div className="route-card__details">
                <div className="route-card__detail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--dark-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {route.distance}
                </div>
                <div className="route-card__detail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--dark-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {route.time}
                </div>
              </div>

              <div className="route-card__footer">
                <div className="route-card__price">
                  <span className="route-card__price-label">Starts from</span>
                  <span className="route-card__price-value">{route.price}</span>
                </div>
                <a href="tel:09966587402" className="route-card__book">
                  Book
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="routes__cta">
          <p className="routes__cta-text">Don't see your route? We cover <strong>all destinations</strong>!</p>
          <a href="tel:09966587402" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Routes;
