import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from './Footer/Footer';
import { EnergyHero, IrrigationHero } from './Hero/Hero';
import { EnergyAboutUs, IrrigationAboutUs } from './AboutUs/AboutUs';
import Sectors from './Sectors/Sectors';
import Services from './Services/Services';

const Engineering = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
    <Navbar />
         <EnergyHero />
         <EnergyAboutUs />
        <IrrigationHero />
        <IrrigationAboutUs />
        <Sectors />
        <Services/>
    <Footer />
    </>
  );
};

export default Engineering;