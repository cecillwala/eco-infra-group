import React from 'react';
import './Footer.css';

const X = "/assets/X.png";
const linkedIn = "/assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 text-center">

          {/* Contact Information */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#C79336] mb-6 uppercase">Contact Us</h2>
             <p className="mb-1">Pinetree Plaza, 8th Floor</p>
            <p className="mb-1">Kaburu Drive, Off Ngong Road</p>
            <p className="mb-1">P.O. Box 633-00200</p>
            <p className="mb-1">Nairobi</p>
          </div>

          {/* Emails & Phone */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#C79336] mb-6 uppercase">Get In Touch</h2>
            <div className="flex flex-col space-y-3 text-lg">
              <a href="mailto:infra@ecosinfragroup.com" className="hover:text-amber-500 transition-colors">
                info@ecosinfragroup.com
              </a>
              <a href="mailto:ecosinfragroup.com" className="hover:text-amber-500 transition-colors">
                ecosinfragroup.com
              </a>
              <a href="tel:+254726612470" className="hover:text-amber-500 transition-colors">
                +254 715 296 278
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#C79336] mb-6 uppercase">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://x.com/EcosInfra" 
                className="hover:scale-110 transform transition-transform" 
                target="_blank" 
                rel="noopener noreferrer">
                <img 
                  src={X} 
                  alt="X" 
                  className="w-8 h-8" />
              </a>
              <a 
                href="https://www.linkedin.com/feed/" 
                className="hover:scale-110 transform transition-transform"
                target="_blank" 
                rel="noopener noreferrer">
                <img 
                  src={linkedIn} 
                  alt="LinkedIn" 
                  className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#C79336] my-12 mx-auto"></div>

        {/* Footer Signature */}
          <img 
            className="logo mx-auto"
            src="/assets/footer-logo.png" 
            alt="Ecos Infra Group Logo" 
          />
      </div>
    </footer>
  );
};

export default Footer;

