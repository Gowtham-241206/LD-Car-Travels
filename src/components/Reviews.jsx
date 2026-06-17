import { useState, useEffect, useRef } from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Bhargav Tej Udayabhanu',
    badge: 'Local Guide · 19 reviews',
    rating: 5,
    time: '3 months ago',
    text: 'I recently used the services of this cab rental agency and was thoroughly impressed. The drivers are highly professional, punctual, and ensure a smooth ride every time. The customer-friendly approach of the service makes booking and travel hassle-free.',
    avatar: 'BT',
  },
  {
    name: 'Dr. Kiran Kumar',
    badge: '1 review',
    rating: 5,
    time: '5 months ago',
    text: 'Excellent service. Car condition is good. Driver Venky is polite and helpful. Owner Suresh Reddy garu receiving and services are very nice. Highly recommendable.',
    avatar: 'DK',
  },
  {
    name: 'Tarun Pushpagiri',
    badge: 'Local Guide · 67 reviews',
    rating: 5,
    time: '8 months ago',
    text: 'The car was arranged promptly on a short notice, driver was punctual on dot. Car was tidy and in excellent condition. I would happily avail the service again.',
    avatar: 'TP',
  },
  {
    name: 'Sai Gowtham',
    badge: 'Local Guide · 2 photos',
    rating: 5,
    time: 'a year ago',
    text: 'Super service, good quality and top quality vehicles. The best cab service in Nellore. Very reliable and professional. Highly recommended!',
    avatar: 'SG',
  },
  {
    name: 'Rajesh K',
    badge: 'Local Guide',
    rating: 5,
    time: '6 months ago',
    text: 'Nice selection of cars, comfortable rides, and excellent service. The drivers are expert and know all routes well. Very comfortable journey.',
    avatar: 'RK',
  },
  {
    name: 'Venkat S',
    badge: '3 reviews',
    rating: 5,
    time: '4 months ago',
    text: 'Great service provider. LD Car Travels taxi service is highly professional. The car was clean and well maintained. Driver was very polite and responsive. Will definitely book again!',
    avatar: 'VS',
  },
];

const highlightTags = [
  { label: 'polite response', count: 24 },
  { label: 'car condition', count: 25 },
  { label: 'expert drivers', count: 8 },
  { label: 'punctual drivers', count: 6 },
  { label: 'honest service', count: 18 },
  { label: 'clean vehicles', count: 15 },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[activeIndex];
      if (card) {
        const scrollLeft = card.offsetLeft - scrollRef.current.offsetWidth / 2 + card.offsetWidth / 2;
        scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  };

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="reviews__header">
          <div className="reviews__header-left">
            <p className="section-label">Customer Reviews</p>
            <h2 className="section-title">
              What Our Customers <span className="text-gold">Say</span>
            </h2>
            <p className="section-subtitle">
              Real reviews from real customers. Our 4.9★ rating speaks 
              volumes about our commitment to service excellence.
            </p>
          </div>

          <div className="reviews__header-right">
            <div className="reviews__rating-big">
              <div className="reviews__rating-number">4.9</div>
              <div className="reviews__rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <div className="reviews__rating-count">Based on 844 reviews</div>
              <div className="reviews__google-badge">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="reviews__tags">
          {highlightTags.map((tag, i) => (
            <div className="reviews__tag" key={i}>
              <span>{tag.label}</span>
              <span className="reviews__tag-count">{tag.count}</span>
            </div>
          ))}
        </div>

        {/* Cards carousel */}
        <div className="reviews__carousel" ref={scrollRef}>
          {reviews.map((review, index) => (
            <div 
              className={`review-card ${index === activeIndex ? 'review-card--active' : ''}`}
              key={index}
              onClick={() => handleDotClick(index)}
            >
              <div className="review-card__header">
                <div className="review-card__avatar">{review.avatar}</div>
                <div>
                  <div className="review-card__name">{review.name}</div>
                  <div className="review-card__badge">{review.badge}</div>
                </div>
                <div className="review-card__time">{review.time}</div>
              </div>
              <div className="review-card__stars">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="review-card__text">{review.text}</p>
              <div className="review-card__source">
                <svg width="14" height="14" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Posted on Google</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews__dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`reviews__dot ${i === activeIndex ? 'reviews__dot--active' : ''}`}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
