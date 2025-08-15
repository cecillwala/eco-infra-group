import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';



import Footer from './components/Footer';
import FinancialAdvisoryPage from './components/FinancialAdvisoryPage';
import SectorExperiencePage from './components/SectorExperiencePage';
import ProjectsPage from './components/ProjectsPage';

// Home page component
const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      
      
      
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/financial-advisory" element={<FinancialAdvisoryPage />} />
          <Route path="/sector-experience" element={<SectorExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;