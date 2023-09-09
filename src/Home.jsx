import React from 'react';
import Header from './Header';

function Home() {
  return (
    <div id="home">
      <Header /> {/* Corrected to render the Header component */}
      <div className="jumbotron">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am Midhun Muraleedharan, a MERN stack developer. I create amazing web applications.
        </p>
      </div>
    </div>
  );
}

export default Home;
