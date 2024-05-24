import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SignupForm />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
