import React from 'react'
import ContactForm from "../components/ContactForm"
import "./ContactPage.css"
export const ContactPage = () => {
  return (
    <div className='ContactPageContainer'>
        <ContactForm/>
        <div className='ContactDetails'>
            <h3>Contact Details</h3>
            <p>Andhra Pradesh, India</p>
            <p>Email: aadilrazashaik@gmail.com</p>
            <p>contact: +91 1234567891</p>
        </div>
        
    </div>
  )
}
export default ContactPage