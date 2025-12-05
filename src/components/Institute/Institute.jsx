import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './NavBar/NavBar';

import Footer from './Footer/Footer';
import Hero from './Hero';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services';
import WhyUs from './WhyUs/WhyUs';
import Courses from './Courses/Courses';



// Home page component
const HomePage = () => {
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
        <Navbar/>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Courses/>
            <WhyUs/>
        <Footer/>
    </>
  );
};

function Institute() {
  return (
    <>
      <HomePage/>
    </>
  );
}

export default Institute;