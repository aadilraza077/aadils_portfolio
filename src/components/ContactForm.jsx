import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {

  return (
    <div className="contact-form-container">
      <div>
        <h3>Contact Form</h3>
      </div>
      
      <form  className="contact-form">
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
        />
       
        <input
          type="email"
          name="email"
          placeholder="Your Email"
        />
        
        <textarea
          name="message"
          placeholder="Your Message">
        </textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;

