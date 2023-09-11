import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      </div>
  );
}

export default App;
