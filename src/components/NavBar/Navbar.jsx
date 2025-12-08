// eco-infra
import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  // const [targetSection, setTargetSection] = useState(null);
  
  // Home page section links (excluding Our Services which needs special handling)
  const homeLinks = ['About Us'];
  const pageLinks = [
    { label: 'Financial Advisory', path: '/financial-advisory#top' },
    { label: 'Partnered Projects', path: '/projects#top' },
    { label: 'Experience', path: '/sector-experience#top' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to create anchor links for home page sections
  const createAnchorLink = (label) => {
    const anchorMap = {
      'About Us': 'aboutus',
      'Our Services': 'services', 
      'Experience': 'sectorexperience',
      'Partnered Projects': 'projects'
    };
    return anchorMap[label] || label.toLowerCase().replace(/\s/g, '');
  };

  // Function to handle navigation to the top of homepage
  const navigateToHome = (e) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage
      e.preventDefault();
      window.location.href = '/';
    } else {
      // If already on homepage, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to handle navigation to services section
  const navigateToServices = (e) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate directly to services section on homepage
      e.preventDefault();
      window.location.href = '/#services';
    }
    // If already on homepage, default anchor behavior will work
  };

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };


  // Function to handle navigation for other home page sections
  const navigateToHomeSection = (e, section) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      window.location.href = `/#${createAnchorLink(section)}`;
    }
    // If already on homepage, default anchor behavior will work
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 w-full">
      <div className="mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo link - goes to top of homepage */}
          <Link 
            to="/" 
            className="block w-[180px]"
            onClick={navigateToHome}
          >
            <div className='logo'>
              <img 
                src="/assets/logo.png" 
                alt="Ecos Infra Group Logo" 
                
              />
                {/* <div className='logo-text'>
                  <h1>ECOS INFRA GROUP</h1>
                  <small><span className='span-text'>ECO</span>NOMIC AND <span className='span-text'>S</span>OCIAL INFRASTRUCTURE</small>
                </div> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 text-sm font-semibold">
            {/* Home Link - goes to top of homepage */}
            <li>
              <Link
                to="/"
                className="hover:text-amber-600 transition"
                onClick={navigateToHome}
              >
                Home
              </Link>
            </li>
            
            {/* Home Page Section Links */}
            {homeLinks.map((label, i) => (
              <li key={i}>
                <a
                  href={`#${createAnchorLink(label)}`}
                  className="hover:text-amber-600 transition"
                  onClick={(e) => navigateToHomeSection(e, label)}
                >
                  {label}
                </a>
              </li>
            ))}
            {/* Our Services Link - special handling */}
            <li>
              <a
                href="/#services"
                className="hover:text-amber-600 transition"
                // onClick={() => navigateToSection('services')}
              >
                Our Services
              </a>
            </li>
            
            {/* Separate Page Links */}
            {pageLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-amber-600 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}

             <li>
              <a
                href="/group"
                className="hover:text-amber-600 transition"
              >
                Asset Management
              </a>
            </li>

            <li>
              <a
                href="/institute"
                className="hover:text-amber-600 transition"
              >
                Capacity Building
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none text-[#C79336]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}
        >
          <ul className="flex flex-col gap-4 text-sm font-semibold">
            {/* Home Link - goes to top of homepage */}
            <li>
              <Link
                to="/"
                className="block hover:text-amber-600 transition py-2"
                onClick={(e) => {
                  navigateToHome(e);
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            
            {/* Home Page Section Links */}
            {homeLinks.map((label, i) => (
              <li key={i}>
                <a
                  href={`#${createAnchorLink(label)}`}
                  className="block hover:text-amber-600 transition py-2"
                  onClick={(e) => {
                    navigateToHomeSection(e, label);
                    setIsMenuOpen(false);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
            
            {/* Our Services Link - special handling */}
            <li>
              <a
                href="#services"
                className="block hover:text-amber-600 transition py-2"
                onClick={(e) => {
                  navigateToServices(e);
                  setIsMenuOpen(false);
                }}
              >
                Our Services
              </a>
            </li>
            
            {/* Separate Page Links */}
            {pageLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="block hover:text-amber-600 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

             <li>
              <a
                href="/group"
                className="hover:text-amber-600 transition"
              >
                Asset Management
              </a>
            </li>

            <li>
              <a
                href="/institute"
                className="hover:text-amber-600 transition"
              >
                Capacity Building
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;