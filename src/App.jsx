import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100">
      <Header />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
