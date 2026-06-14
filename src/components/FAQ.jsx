import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Where is LD Car Travels located, and which areas do you serve?',
    answer: 'We are located at Alankar Centre, Mulapeta, Nellore, Andhra Pradesh 524003. We provide reliable taxi services in Nellore city and surrounding regions, and offer outstation rentals to anywhere in Andhra Pradesh, Telangana, Tamil Nadu, and Karnataka.',
  },
  {
    question: 'What are your most frequently booked outstation routes?',
    answer: 'Our most popular outstation routes include Nellore to Tirupati, Nellore to Chennai, Nellore to Vijayawada, Nellore to Hyderabad, and Nellore to Bangalore. We cater to one-way drops, round trips, and multi-day packages.',
  },
  {
    question: 'How is the booking fare calculated? Are there any hidden fees?',
    answer: 'Our rates start from just ₹11/km for sedans and are transparently defined. Toll gates, parking fees, and state border permits are charged extra based on actual receipts. We guarantee no surge pricing and no hidden costs.',
  },
  {
    question: 'Are your vehicles clean and drivers verified?',
    answer: 'Absolutely. As mentioned in our customer reviews, all vehicles are thoroughly cleaned, sanitized, and serviced before every journey. Our drivers are expert professionals who are punctual, polite, and familiar with all major routes.',
  },
  {
    question: 'How do I book a taxi? Do you arrange rides on short notice?',
    answer: 'Booking is effortless! You can call us directly at 099665 87402, chat with us on WhatsApp, or submit the booking form on our website. We specialize in prompt arrangements and can arrange cars quickly even on short notice.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured data for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <section className="faq section" id="faq">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="container">
        <div className="faq__header">
          <p className="section-label">Questions & Answers</p>
          <h2 className="section-title">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our car rental service, pricing, routes, and safety protocols.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} 
                key={index}
              >
                <button 
                  className="faq-item__trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="faq-item__question">{faq.question}</span>
                  <span className="faq-item__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </span>
                </button>
                <div 
                  className="faq-item__content"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  style={{
                    maxHeight: isOpen ? '250px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="faq-item__answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
