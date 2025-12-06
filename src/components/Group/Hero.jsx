import React from "react";
const backgroundImage = "/assets/assets.png";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center mt-15 justify-center">
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="w-full h-full object-cover absolute"
      />

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative max-w-5xl text-center text-white px-7">
        <h4 className="text-xl md:text-5xl font-bold leading-tight mb-6">
          Transforming Infrastructure Through <span className="text-[#C79336]">Financial Advisory & Asset Management</span>
        </h4>

        <p className="md:text-2xl leading-relaxed mb-8 text-200 text-[#fff]">
          Ecos Infra Group provides expert advisory services in project communication,
          public engagement, and training. We partner with governments, development
          institutions, and private sector actors to deliver sustainable and transformative
          infrastructure solutions across Africa.
        </p>
      </div>
    </section>
  );
};

export default Hero;
