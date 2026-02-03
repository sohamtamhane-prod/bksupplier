import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Machinery = lazy(() => import('./components/Machinery'));
const Quality = lazy(() => import('./components/Quality'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '40px', height: '40px', border: '4px solid #f3f4f6', borderTop: '4px solid #004d99', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
  </div>
);

function App() {
  return (
    <div className="w-full" style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Products />
        <Machinery />
        <Quality />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
