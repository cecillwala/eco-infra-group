import React, { useState, useEffect } from 'react';

const Sectors = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectors = [
    {
      id: 1,
      title: "Irrigation Systems Engineering",
      sectorImage: "/assets/energy.png",
      description: "We design efficient, scalable, and context-responsive irrigation systems that maximize agricultural productivity and resource sustainability.",
      reverse: false,
    },
    {
      id: 2,
      title: "Independent Engineering Advisory",
      sectorImage: "/assets/transport.png",
      description: "We provide impartial technical oversight to investors, lenders, and contracting authorities to ensure project bankability, performance assurance, and risk mitigation.",
      reverse: true,
    },
    {
      id: 3,
      title: "Water Resources & Hydrological Advisory",
      sectorImage: "/assets/water.png",
      description: "Our team supports sustainable water allocation and long-term resource planning.",
      reverse: false,
    },
    {
      id: 4,
      title: "Agricultural Infrastructure & Climate Resilience",
      sectorImage: "/assets/climate.png",
      description: "We align irrigation infrastructure with climate adaptation and agricultural productivity goals.",
      reverse: true,
    },
    {
      id: 5,
      title: "Project Development & Transaction Support",
      sectorImage: "/assets/social.png",
      description: "We support the structuring and delivery of irrigation projects as viable investments.",
      reverse: false,
    },
  ];

  return (
    <div id="sectors">
      <section className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4">
              Our Core Services
            </h2>
            <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
          </div>

          {/* Alternating rows */}
          <div className="flex flex-col gap-8 mb-16">
            {sectors.map((sector) => (
              <div
                key={sector.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col md:flex-row ${sector.reverse ? 'md:flex-row-reverse' : ''}`}
                onClick={() => setSelectedSector(sector)}
              >
                {/* Image */}
                <div className="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden group flex-shrink-0">
                  <img
                    src={sector.sectorImage}
                    alt={sector.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center flex-grow">
                  <h3 className="text-xl font-bold text-[#C79336] mb-3">{sector.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">{sector.description}</p>
                  <button className="text-[#C79336] hover:text-amber-800 font-semibold text-sm flex items-center w-fit">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      {selectedSector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedSector.sectorImage}
                alt={selectedSector.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedSector(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#C79336] mb-4">{selectedSector.title}</h3>
              <p className="text-gray-700 leading-relaxed">{selectedSector.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sectors;