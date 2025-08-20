import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Separate navigation items into different categories
  const homeLinks = ['About Us', 'Our Services'];
  const pageLinks = [
    { label: 'Financial Advisory', path: '/financial-advisory' },
    { label: 'Partnered Projects', path: '/projects' },
    { label: 'Experience', path: '/sector-experience' },
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

  // Function to handle navigation to hero section
  const navigateToHero = (e) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      e.preventDefault();
      window.location.href = `/#hero`;
    }
    // If already on homepage, default anchor behavior will work
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo link - works on all pages */}
          <Link 
            to="/#hero" 
            className="block w-[180px]"   // increased from 120px to 180px (50% bigger)
            onClick={navigateToHero}
          >
            <img 
              src="/assets/eco logo9.png" 
              alt="Bravion Logo" 
              className="w-full h-auto"
            />
          </Link>


          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 text-sm font-semibold">
            {/* Home Link - works on all pages */}
            <li>
              <Link
                to="/#hero"
                className="hover:text-amber-600 transition"
                onClick={navigateToHero}
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
                  onClick={() => location.pathname !== '/' && navigateToHero({ preventDefault: () => {} })}
                >
                  {label}
                </a>
              </li>
            ))}
            
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
            {/* Home Link - works on all pages */}
            <li>
              <Link
                to="/#hero"
                className="block hover:text-amber-600 transition py-2"
                onClick={(e) => {
                  navigateToHero(e);
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
                    if (location.pathname !== '/') {
                      e.preventDefault();
                      window.location.href = `/#${createAnchorLink(label)}`;
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
            
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;