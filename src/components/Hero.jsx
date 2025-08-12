import React from 'react';

const backgroundImage = "/assets/eco hero2.png";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="w-full h-full object-cover absolute"
      />

      {/* Content Overlay - Updated to match screenshot */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30 px-4">
        <div className="max-w-4xl bg-black bg-opacity-70 p-8 rounded-lg">
          {/* Main Title - Styled to match screenshot */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wider">
            ECO INFRA CAPITAL
          </h1>
          
          {/* Subtitle with decorative line */}
          <div className="relative mb-8">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-green-500"></div>
            
          </div>
          
          {/* Main content text */}
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
            Eco Infra Capital is a strategic and transaction advisory Company serving public and private sector institutions operating in Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;