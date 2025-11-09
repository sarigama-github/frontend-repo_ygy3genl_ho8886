import React from 'react';
import Header from './components/Header';
import SplineHero from './components/SplineHero';
import Analytics from './components/Analytics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <main>
        <SplineHero />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
