import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm'; // Import the ContactForm component

function Home() {
  return (
    <div id="home">
      <div id="home">
      <Header /> {/* Corrected to render the Header component */}
      <div className="jumbotron">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am Midhun Muraleedharan, a MERN stack developer. I create amazing web applications.
        </p>
      </div>
    </div>

      <div id="contact-form">
        <h2>Contact Me</h2>
        <ContactForm /> {/* Include the ContactForm component */}
      </div>
    </div>
  );
}

export default Home;
