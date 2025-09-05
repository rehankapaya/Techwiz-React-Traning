import React from 'react';
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';

const ContactPage = () => {
  return (
    <>
    <NavbarComponent/>
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Here's how you can reach us.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Us</h3>
              <p>123 Design Street</p>
              <p>Interior City, IC 12345</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri: 9am-5pm</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@homestyle.com</p>
              <p>support@homestyle.com</p>
            </div>
          </div>
          
          <div className="office-hours">
            <h2>Office Hours</h2>
            <div className="hours-grid">
              <div className="hours-day">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-day">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-day">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          
          <div className="map-section">
            <h2>Find Us</h2>
            <div className="map-placeholder">
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14481.164599461661!2d67.06959285541987!3d24.853903800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d00e00a4dd7%3A0xde9eb6e9f8dbec60!2sHome%20Style%20Furniture%20%26%20Interior!5e0!3m2!1sen!2s!4v1757064443647!5m2!1sen!2s" width="1000" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent/>
    </>
  );
};

export default ContactPage;