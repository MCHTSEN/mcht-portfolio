import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { WorkSection } from './components/WorkSection';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-text-dark font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <WorkSection />
        <Contact />
      </main>
      
      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-100">
        <p className="mb-2">© 2025 Mucahit SEN. All rights reserved.</p>
        <p className="text-xs">Flutter | Dart | Mobile Development</p>
      </footer>
    </div>
  );
}

export default App;