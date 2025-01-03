import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;