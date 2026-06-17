import { useEffect, useRef } from 'react';
import './BookingProcess.css';

const steps = [
  {
    number: '01',
    title: 'Select Your Fleet',
    description: 'Browse our diverse fleet of pristine Sedans, spacious MPVs, or high-capacity Tempo Travellers and pick the ride that matches your needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Provide Trip Details',
    description: 'Enter your pickup point, final destination, preferred travel date, and passenger details in our quick lead form.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Instant Confirmation',
    description: 'Receive an instant call or message to confirm your booking and trip requirements. Fast, hassle-free confirmation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Ride Comfortably',
    description: 'Your assigned vehicle arrives on time. Sit back and enjoy a safe, cozy ride with one of Nellore\'s most professional, courteous drivers.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

const BookingProcess = () => {
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

    const steps = sectionRef.current?.querySelectorAll('.process-card');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process section" id="booking-process" ref={sectionRef}>
      <div className="process__bg-line"></div>
      <div className="container">
        <div className="process__header">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">
            Simple & Transparent <span className="text-gold">4-Step Booking</span>
          </h2>
          <p className="section-subtitle">
            Renting a cab with LD Car Travels is quick and painless. From picking your vehicle to completing your journey, here is what you can expect.
          </p>
        </div>

        <div className="process__grid">
          {steps.map((step, index) => (
            <div 
              className="process-card glass-card" 
              key={index} 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="process-card__number-badge">{step.number}</div>
              <div className="process-card__header">
                <div className="process-card__icon-wrap">
                  <div className="process-card__icon">{step.icon}</div>
                </div>
                <h3 className="process-card__title">{step.title}</h3>
              </div>
              <p className="process-card__desc">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="process-card__connector">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
