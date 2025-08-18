import React from 'react';

const AboutUs = () => {
  return (
    <section id="aboutus" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section - Adjust path as needed */}
          <div className="md:w-1/2">
            <img 
              src="/assets/aboutus.png"  // Replace with your actual image path
              alt="About Eco Infra Capital"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2">
            {/* Section Title with decorative element */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4 uppercase">
                What we do
              </h2>
              <div className="w-20 h-1 bg-amber-700"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We work closely with public and private sector clients to unlock
                investment opportunities, structure bankable projects, and mobilize
                capital through innovative financing instruments.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Our core service areas include capital raising, public-private partnerships (PPP), 
                mergers and acquisitions, project finance, restructuring, and infrastructure advisory.
              </p>
            </div>

            {/* Optional Button - Uncomment if needed */}
            {/* <button className="mt-8 px-6 py-3 bg-amber-700 text-white font-semibold rounded hover:bg-amber-800 transition">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;