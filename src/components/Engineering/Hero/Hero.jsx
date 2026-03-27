import React from "react";

const energyBg = "https://res.cloudinary.com/drkmm8xka/image/upload/v1770183123/assets_1_yif4en.png";
const irrigationBg = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80";

const HeroSection = ({ backgroundImage, title, description }) => {
  return (
    <section className="relative h-[95vh] w-full flex items-center justify-center">
      {/* Background */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content box */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <div className="bg-black/70 p-10 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-widest mb-4">
            {title}
          </h1>

          {/* Gold divider line */}
          <div className="w-24 h-[2px] bg-[#C79336] mx-auto mb-6" />

          <p className="text-base md:text-lg text-white leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

const EnergyHero = () => (
  <HeroSection
    backgroundImage={energyBg}
    title="Energy Sector Advisory"
    description="We deliver integrated energy sector advisory services combining strategic, technical, and independent engineering expertise across power, transmission, and oil and gas developments."
  />
);

const IrrigationHero = () => (
  <HeroSection
    backgroundImage={irrigationBg}
    title="Irrigation Engineering Advisory"
    description="Delivering Water Security, Agricultural Productivity, and Climate Resilience Across Sub-Saharan Africa."
  />
);

const Hero = () => (
  <>
    <EnergyHero />
    <IrrigationHero />
  </>
);

export { EnergyHero, IrrigationHero };
export default Hero;