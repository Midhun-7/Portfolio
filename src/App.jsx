import React from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Header />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
