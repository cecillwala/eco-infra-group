import React from 'react';
import './AboutUs.css'

const EnergyAboutUs = () => {
  return (
    <section className="bg-[#f0f0f0] py-20 px-6">

      <div className="flex justify-center mb-10"></div>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10 relative overflow-hidden">

        <h2 className="text-2xl md:text-3xl font-bold text-[#C79336] mb-2">
          Capability Overview
        </h2>
        <div className="w-12 h-1 bg-[#C79336] mb-4 rounded"></div>

        <p className="text-gray-600 leading-relaxed text-base mb-16">
          By providing objective technical assurance and risk-informed guidance, we support governments,
          investors, and developers in delivering resilient and efficient energy infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

          <div className="bg-[#fdf8f0] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <img
              src="https://res.cloudinary.com/duwyaucf1/image/upload/v1772237252/TRANSMISION_LINES_td9xab.jpg"
              alt="Transmission"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#C79336] mb-3">
                Transmission & Engineering Advisory
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Independent expert and engineering advisory for transmission infrastructure,
                technical due diligence, design and construction oversight, and performance
                verification across the project lifecycle.
              </p>
            </div>
          </div>

          <div className="bg-[#fdf8f0] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <img
              src="https://res.cloudinary.com/duwyaucf1/image/upload/v1772237267/HEALTH_AND_SAFETY-02_bfnppi.jpg"
              alt="HSE ESG"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#C79336] mb-3">
                HSE & ESG Advisory
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Specialized advisory in health, safety, and environmental management, together
                with Environmental, Social, and Governance (ESG) frameworks to support
                sustainable, compliant, and bankable energy investments.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const IrrigationAboutUs = () => {
  return (
    <section id="aboutus" className="about-us py-10 bg-gray-100">

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4 uppercase">
          About Us
        </h2>
        <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
      </div>

      <div className="objectives mx-auto grid md:grid-cols-2 gap-8 mt-16">
        <div className="objective-1 bg-white p-12 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300 col-span-2 max-w-5xl mx-auto w-full relative">

          {/* Decorative circle */}


          <h3 className="text-2xl font-semibold text-[#C79336] mb-4 text-left">
            Capability Overview
          </h3>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <div className="w-16 h-1 bg-[#C79336] mb-6"></div>

            <p className="text-gray-700">
              We provide integrated irrigation engineering and independent engineering advisory services
              that enable governments, financiers, and private developers to design, implement, and manage
              sustainable water infrastructure. Our practice combines technical excellence, commercial insight,
              and regional experience to support bankable, climate-resilient irrigation systems tailored to
              Africa's diverse hydrological and agricultural landscapes.
            </p>

            <p className="text-gray-700">
              Operating across Sub-Saharan Africa, we deliver solutions that enhance food security, optimize
              water resource utilization, and strengthen long-term asset performance while safeguarding
              environmental and social sustainability.
            </p>

            <p className="text-gray-700">
              We act as trusted technical partners throughout the entire project lifecycle from feasibility
              and investment structuring to construction oversight and operational optimization.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

const AboutUs = () => (
  <>
    <EnergyAboutUs />
    <IrrigationAboutUs />
  </>
);

export { EnergyAboutUs, IrrigationAboutUs };
export default AboutUs;