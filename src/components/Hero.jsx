import { useEffect, useRef } from 'react';
import heroBg from '../assets/Herobg.png';
import './Hero.css';

const Hero = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll('.hero__stat-number');
    if (!counters) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters(counters);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounters = (counters) => {
    counters.forEach((counter) => {
      const target = parseFloat(counter.dataset.target);
      const isDecimal = counter.dataset.decimal === 'true';
      const duration = 2000;
      const start = performance.now();

      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = eased * target;

        counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    });
  };

  return (
    <section className="hero" id="home">
      {/* Full-screen background image from assets */}
      <div className="hero__bg-media">
        <img src={heroBg} alt="" className="hero__bg-img" />
        <div className="hero__bg-overlay"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text-content">
          <h1 className="hero__title animate-fade-up delay-1">
            Your Trusted<br />
            <span className="text-gold">Travel Partner</span><br />
            in Nellore
          </h1>

          <p className="hero__subtitle animate-fade-up delay-2">
            Experience safe, comfortable & affordable cab services with 
            professional drivers. From outstation trips to airport transfers — 
            we make every journey memorable.
          </p>

          <div className="hero__cta-group animate-fade-up delay-3">
            <a href="tel:09966587402" className="btn btn-primary btn-lg hero__cta-call">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Book Now — Call Us
            </a>
            <a
              href="https://wa.me/919966587402?text=Hi%20LD%20Car%20Travels!%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="hero__trust animate-fade-up delay-4">
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--emerald-400)">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span>Verified & Trusted</span>
            </div>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold-500)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>4.9★ Google Rating</span>
            </div>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--blue-500)">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="var(--blue-500)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>844+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats" ref={statsRef}>
        <div className="hero__stats-inner container">
          <div className="hero__stat">
            <span className="hero__stat-number" data-target="844" data-decimal="false">0</span>
            <span className="hero__stat-suffix">+</span>
            <span className="hero__stat-label">Happy Customers</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number" data-target="4.9" data-decimal="true">0</span>
            <span className="hero__stat-suffix">★</span>
            <span className="hero__stat-label">Google Rating</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number" data-target="8" data-decimal="false">0</span>
            <span className="hero__stat-suffix">+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number" data-target="50" data-decimal="false">0</span>
            <span className="hero__stat-suffix">+</span>
            <span className="hero__stat-label">Fleet Vehicles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
