import { useState, useEffect, useRef } from 'react';
import './Fleet.css';
import dzireImg from '../assets/Dzire.png';
import etiosImg from '../assets/Etios.png';
import innovaImg from '../assets/Innova.png';
import crystaImg from '../assets/Innovacrysta.png';
import ertigaImg from '../assets/Ertiga.png';
import tempoImg from '../assets/Tempo.png';

const vehicles = [
  {
    name: 'Swift Dzire',
    type: 'Sedan',
    seats: '4 Passengers',
    ac: 'AC',
    luggage: '2 Bags',
    idealFor: 'City & Short Trips',
    priceRange: '₹11/km',
    features: ['Comfortable Sedan', 'Fuel Efficient', 'Smooth Ride'],
    popular: false,
    image: dzireImg,
  },
  {
    name: 'Toyota Etios',
    type: 'Sedan',
    seats: '4 Passengers',
    ac: 'AC',
    luggage: '3 Bags',
    idealFor: 'Outstation Trips',
    priceRange: '₹12/km',
    features: ['Spacious Boot', 'Highway Ready', 'Toyota Reliability'],
    popular: true,
    image: etiosImg,
  },
  {
    name: 'Toyota Innova',
    type: 'MUV',
    seats: '6-7 Passengers',
    ac: 'AC',
    luggage: '4 Bags',
    idealFor: 'Family & Group Travel',
    priceRange: '₹16/km',
    features: ['Family Comfort', 'Extra Legroom', 'Premium Interior'],
    popular: true,
    image: innovaImg,
  },
  {
    name: 'Innova Crysta',
    type: 'Premium MUV',
    seats: '6-7 Passengers',
    ac: 'AC',
    luggage: '4 Bags',
    idealFor: 'Premium Travel',
    priceRange: '₹18/km',
    features: ['Luxury Interior', 'Captain Seats', 'Business Class'],
    popular: false,
    image: crystaImg,
  },
  {
    name: 'Ertiga',
    type: 'MPV',
    seats: '6 Passengers',
    ac: 'AC',
    luggage: '3 Bags',
    idealFor: 'Small Groups',
    priceRange: '₹13/km',
    features: ['Spacious MPV', 'Comfortable', 'Value for Money'],
    popular: false,
    image: ertigaImg,
  },
  {
    name: 'Tempo Traveller',
    type: 'Mini Bus',
    seats: '12-16 Passengers',
    ac: 'AC/Non-AC',
    luggage: '8+ Bags',
    idealFor: 'Large Groups & Tours',
    priceRange: '₹22/km',
    features: ['Push-back Seats', 'Group Travel', 'Tour Ready'],
    popular: false,
    image: tempoImg,
  },
];

const Fleet = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const filters = ['All', 'Sedan', 'MUV', 'Premium MUV', 'MPV', 'Mini Bus'];
  
  const filteredVehicles = activeFilter === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.type === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.fleet-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section className="fleet section" id="fleet" ref={sectionRef}>
      <div className="container">
        <div className="fleet__header">
          <p className="section-label">Our Fleet</p>
          <h2 className="section-title">
            Choose Your <span className="text-gold">Perfect Ride</span>
          </h2>
          <p className="section-subtitle">
            Wide selection of well-maintained vehicles to suit every budget and requirement. 
            All cars are regularly serviced and sanitized.
          </p>
        </div>

        <div className="fleet__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`fleet__filter ${activeFilter === filter ? 'fleet__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="fleet__grid">
          {filteredVehicles.map((vehicle, index) => (
            <div className="fleet-card glass-card" key={vehicle.name} style={{ animationDelay: `${index * 0.1}s` }}>
              {vehicle.popular && (
                <div className="fleet-card__badge">Most Popular</div>
              )}
              <div className="fleet-card__image-wrapper">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="fleet-card__image"
                />
              </div>
              <div className="fleet-card__header">
                <div>
                  <h3 className="fleet-card__name">{vehicle.name}</h3>
                  <span className="fleet-card__type">{vehicle.type}</span>
                </div>
              </div>

              <div className="fleet-card__specs">
                <div className="fleet-card__spec">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  {vehicle.seats}
                </div>
                <div className="fleet-card__spec">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
                  </svg>
                  {vehicle.ac}
                </div>
                <div className="fleet-card__spec">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  {vehicle.luggage}
                </div>
              </div>

              <div className="fleet-card__ideal">
                <span className="fleet-card__ideal-label">Ideal for:</span>
                <span className="fleet-card__ideal-value">{vehicle.idealFor}</span>
              </div>

              <ul className="fleet-card__features">
                {vehicle.features.map((f, i) => (
                  <li key={i}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-400)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="fleet-card__footer">
                <div className="fleet-card__price">
                  <span className="fleet-card__price-label">Starting from</span>
                  <span className="fleet-card__price-value">{vehicle.priceRange}</span>
                </div>
                <a href="tel:09966587402" className="btn btn-primary btn-sm">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
