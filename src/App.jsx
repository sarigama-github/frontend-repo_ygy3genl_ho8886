import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PreviewCarousel from './components/PreviewCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <PreviewCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
