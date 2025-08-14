import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-6 uppercase">
              Contact Us
            </h2>
            
            <div className="space-y-3 text-lg">
              <p>CIC Plaza II, 5th Floor</p>
              <p>Upperhill, Mara Road</p>
              <p>P. O. Box 57249-00200</p>
              <p>Nairobi</p>
            </div>
            
            <div className="mt-6 space-y-2">
              <p>
                <a 
                  href="mailto:info@ecoinfra.co.ke" 
                  className="hover:text-amber-500 transition-colors"
                >
                  info@ecoinfra.co.ke
                </a>
              </p>
              <p>
                <a 
                  href="tel:+254726612470" 
                  className="hover:text-amber-500 transition-colors"
                >
                  +254713399602
                </a>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-amber-600 my-6"></div>

          {/* Footer Signature */}
          <p className="text-2xl font-bold text-amber-600">
            ECO INFRA CAPITAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;