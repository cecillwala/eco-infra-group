import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation,} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import './index.css';



import Footer from './components/Footer/Footer';
import FinancialAdvisoryPage from './components/FinancialAdvisoryPage';
import SectorExperiencePage from './components/SectorExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import Institute from './components/Institute/Institute';
import Group from './components/Group/Group';
// import EcosInfraLanding from './components/EcoInfraCapital';


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
        <Hero />
        <AboutUs />
        <Services />
      <Footer/>
      
      
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/financial-advisory" element={<FinancialAdvisoryPage />} />
          <Route path="/sector-experience" element={<SectorExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/institute" element={<Institute/>} />
          <Route path="/group" element={<Group/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;