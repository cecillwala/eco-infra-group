import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ['Home', 'About Us', 'Our Services', 'Financial Advisory', 'Experience', 'Partnered Projects'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="block w-[120px]"> {/* Container controls click area */}
          <img 
            src="/assets/eco logo7.png" 
            alt="Bravion Logo" 
            className="w-full h-auto"  // Logo will scale to container width
          />
        </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 text-sm font-semibold">
            {links.map((label, i) => (
              <li key={i}>
                <a
                  href={`#${label.toLowerCase().replace(/\s/g, '')}`}
                  className="hover:text-amber-600 transition"  // Changed from red-500 to amber-600
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none text-amber-600"  // Added amber-600 color
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
            {links.map((label, i) => (
              <li key={i}>
                <a
                  href={`#${label.toLowerCase().replace(/\s/g, '')}`}
                  className="block hover:text-amber-600 transition py-2"  // Changed from red-500 to amber-600
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;