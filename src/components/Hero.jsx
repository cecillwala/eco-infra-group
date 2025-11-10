import React from 'react';

const backgroundImage = "/assets/PROFILE IMAGE-01.png";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="w-full h-full object-cover absolute"
      />

      {/* Content Overlay - Updated to center content vertically */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30 px-4">
        <div className="max-w-4xl bg-black bg-opacity-70 p-8 rounded-lg">
          {/* Main Title - Styled to match screenshot */}
          <h1 class="text-[28px] md:text-[35px] font-bold mb-6 text-white uppercase tracking-wider">
                ECO INFRA GROUP
            </h1>
          
          {/* Subtitle with decorative line */}
          <div className="relative mb-8">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#C79336]"></div>
            
          </div>
          
          {/* Main content text */}
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
            Eco Infra Group is an economic and social infrastructure transaction advisory ﬁrm that provides
expert advisory services to public and private sector institutions across Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;