import './Routes.css';

const routes = [
  { from: 'Nellore', to: 'Tirupati', distance: '175 km', time: '3 hrs' },
  { from: 'Nellore', to: 'Chennai', distance: '180 km', time: '3.5 hrs' },
  { from: 'Nellore', to: 'Hyderabad', distance: '460 km', time: '7 hrs' },
  { from: 'Nellore', to: 'Vijayawada', distance: '280 km', time: '4.5 hrs' },
  { from: 'Nellore', to: 'Ongole', distance: '130 km', time: '2.5 hrs' },
  { from: 'Nellore', to: 'Srisailam', distance: '340 km', time: '6 hrs' },
  { from: 'Nellore', to: 'Bangalore', distance: '380 km', time: '6 hrs' },
  { from: 'Nellore', to: 'Guntur', distance: '240 km', time: '4 hrs' },
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
            Reliable one-way and round-trip rides.
            Enjoy comfortable, safe journeys with professional drivers.
          </p>
        </div>

        <div className="routes__list">
          {routes.map((route, index) => (
            <div className="route-row glass-card" key={index}>
              <div className="route-row__connection">
                <span className="route-row__city">{route.from}</span>
                <span className="route-row__connector">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="route-row__arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <span className="route-row__city route-row__city--to">{route.to}</span>
              </div>
              
              <div className="route-row__meta">
                <div className="route-row__detail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{route.distance}</span>
                </div>
                <div className="route-row__detail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{route.time}</span>
                </div>
              </div>
              
              <div className="route-row__action">
                <a href="tel:09966587402" className="btn btn-primary btn-sm route-row__book-btn">
                  Book Cab
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
