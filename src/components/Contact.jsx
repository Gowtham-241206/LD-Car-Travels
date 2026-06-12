import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    carType: 'sedan',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi LD Car Travels! I'd like to book a cab.%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Pickup:* ${formData.pickup}%0A` +
      `*Drop:* ${formData.drop}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Car Type:* ${formData.carType}%0A` +
      `*Message:* ${formData.message || 'N/A'}`;
    
    window.open(`https://wa.me/919966587402?text=${msg}`, '_blank');
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__bg-orb"></div>
      <div className="container">
        <div className="contact__grid">
          {/* Left - Contact Info */}
          <div className="contact__info">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">
              Book Your Ride<br />
              <span className="text-gold">Today</span>
            </h2>
            <p className="section-subtitle">
              Ready to travel? Fill the form or contact us directly. 
              We're available 24/7 for all your travel needs.
            </p>

            <div className="contact__details">
              <a href="tel:09966587402" className="contact__detail" id="contact-phone">
                <div className="contact__detail-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Call Us</div>
                  <div className="contact__detail-value">099665 87402</div>
                </div>
              </a>

              <a href="https://wa.me/919966587402" target="_blank" rel="noopener noreferrer" className="contact__detail" id="contact-whatsapp">
                <div className="contact__detail-icon contact__detail-icon--wa">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">WhatsApp</div>
                  <div className="contact__detail-value">+91 99665 87402</div>
                </div>
              </a>

              <div className="contact__detail" id="contact-address">
                <div className="contact__detail-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Address</div>
                  <div className="contact__detail-value">Alankar Centre, Mulapeta,<br/>Nellore, AP 524003</div>
                </div>
              </div>

              <a href="https://ldcartravels.in" target="_blank" rel="noopener noreferrer" className="contact__detail" id="contact-website">
                <div className="contact__detail-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Website</div>
                  <div className="contact__detail-value">ldcartravels.in</div>
                </div>
              </a>
            </div>

            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.9!2d79.9867!3d14.4426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI2JzMzLjQiTiA3OcKwNTknMTIuMSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px', opacity: 0.8 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LD Car Travels Location"
              ></iframe>
            </div>
          </div>

          {/* Right - Booking Form */}
          <div className="contact__form-wrap">
            <div className="contact__form-card glass-card">
              <div className="contact__form-header">
                <h3 className="contact__form-title">Quick Booking</h3>
                <p className="contact__form-subtitle">Fill in your details & we'll get back to you instantly</p>
              </div>
              <form onSubmit={handleSubmit} className="contact__form" id="booking-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pickup" className="form-label">Pickup Location</label>
                    <input
                      type="text"
                      id="pickup"
                      name="pickup"
                      className="form-input"
                      placeholder="Pickup city"
                      value={formData.pickup}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="drop" className="form-label">Drop Location</label>
                    <input
                      type="text"
                      id="drop"
                      name="drop"
                      className="form-input"
                      placeholder="Drop city"
                      value={formData.drop}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">Travel Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-input"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="carType" className="form-label">Car Type</label>
                    <select
                      id="carType"
                      name="carType"
                      className="form-input"
                      value={formData.carType}
                      onChange={handleChange}
                    >
                      <option value="sedan">Sedan (Dzire/Etios)</option>
                      <option value="ertiga">Ertiga</option>
                      <option value="innova">Innova</option>
                      <option value="crysta">Innova Crysta</option>
                      <option value="tempo">Tempo Traveller</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Additional Notes (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Any special requirements..."
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-whatsapp btn-lg contact__submit" id="submit-booking">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send Booking via WhatsApp
                </button>
                <p className="contact__form-note">
                  Or call directly: <a href="tel:09966587402"><strong>099665 87402</strong></a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
