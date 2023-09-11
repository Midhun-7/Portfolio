import React from 'react';
import ContactForm from './ContactForm'; // Import the ContactForm component

function Contact() {
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <p>
        You can reach out to me using the following contact information or by filling out the form below.
      </p>
      <div id="contact-form">
        <ContactForm /> {/* Include the ContactForm component */}
      </div>
      {/* Add your contact information and contact form here */}
    </div>
  );
}

export default Contact;
