import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";

const ContactForm = () => {

  const [isSuccess, setIsSuccess] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
//Replace the userID, Template_ID, service_ID with your Email JS Account
    emailjs.sendForm("service_ID", "template_ID", e.target, "User_Id").then((result) =>{
      console.log(result.text);
      setIsSuccess(true);
      setIsFormVisible(false);
    }, (error) => {
    console.log(error.text);
  });

    e.target.reset();
  };

const handleAlertClose = () =>
{
  setIsSuccess(false);
  setIsFormVisible(true);
};  

  return (
    <div className="contact-form-container">
           {isFormVisible && (
        <div className="contact-form-main">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit} className="contact-form">
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
              placeholder="Your Message"
            ></textarea>
            
            <button type="submit">Send</button>
          </form>
        </div>
      )}

     { isSuccess && (
        <div className="success-alert">
        <p>Message Sent Successfully</p>
        <button onClick={handleAlertClose}>Close</button>
        </div>
      )
    }
      </div>

    
  );
};

export default ContactForm;
