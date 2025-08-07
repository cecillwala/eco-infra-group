import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FinancialAdvisory from './components/FinancialAdv';
import AdvisoryServices from './components/AdvServices';
import SectorExperience from './components/SectorExp';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <FinancialAdvisory />
      <AdvisoryServices />
      <SectorExperience />
      <Projects/>
      <Footer/>
     
    </>
  );
}

export default App;