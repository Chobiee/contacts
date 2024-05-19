import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-container">
        <h1>Contact Information</h1>
        <div className="contact-item">
          <h2>Phone Number</h2>
          <p>0947 406 7412</p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p>sucasagardenresortph@gmail.com</p>
        </div>
        <div className="contact-item">
          <h2>Location</h2>
          <p>515 Yakal cor. Lauan Street Barangay 3, Tanauan City, Batangas, Tanauan, Philippines</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
