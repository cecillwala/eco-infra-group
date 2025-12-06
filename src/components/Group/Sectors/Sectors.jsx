import React, { useState,useEffect } from 'react';


const Sectors = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const sectors = [
    {
      id: 1,
      title: "Energy",
      sectorImage: "/assets/energy.png",
      description: [
            "We support the development and financing of energy infrastructure including transmission lines, mini-grids, renewable energy (solar, wind, hydro), and power generation projects. Our services cover technical feasibility, environmental safeguards, regulatory compliance, and investment structuring."
        ]
    },
    {
      id: 2,
      title: "Transport",
      sectorImage: "/assets/transport.png",
      description: [
            "From highways and expressways to rail, ports, and airports, we advise on strategic transport corridors that facilitate trade, connectivity, and regional development. We provide transaction advisory, social assessments, and public communication strategies for large-scale transport projects."
        ]
    },
    {
      id: 3,
      title: "Urban Development",
      sectorImage: "/assets/urban.png",
      description: [
            "We help governments and private partners shape sustainable cities through advisory services in housing, smart urban planning, resilience-building, and infrastructure integration. Our work includes feasibility studies, policy reform, and inclusive stakeholder engagement."
        ]
    },
    {
      id: 4,
      title: "Water and Sanitation",
      sectorImage: "/assets/water.png",
      description: [
            "We work with utilities, development banks, and ministries to strengthen access to clean water and improved sanitation. Services include technical studies, investment planning, SEIA/RAP development, and community sensitization."
        ]
    },
    {
      id: 5,
      title: "Social Infrastructure",
      sectorImage: "/assets/social.png",
      description: [
            "We support the planning, financing, and delivery of health, education, and public safety infrastructure. Whether it’s schools, hospitals, or public facilities, we ensure infrastructure serves its purpose efficiently and equitably."
        ]
    },
    {
      id: 6,
      title: "Climate and Environment",
      sectorImage: "/assets/climate.png",
      description: [
            "We advise on green infrastructure, climate-smart investments, and adaptation strategies that promote environmental sustainability and resilience. Our team delivers ESIA, climate risk screening, and ESG strategy integration across projects."
        ]
    }
  ];

  // eslint-disable-next-lineconst sectors = [...new Set(projects.map(p => p.sector))];

  return (
    <div id="sectors">
      <div className="">
        <section className="min-h-screen bg-gray-50 py-10">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4">
                Sectors We Serve
              </h2>
              <div className="w-20 h-1 bg-[#C79336] mx-auto mb-8"></div>
            </div>

            

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {sectors.map((sector) => (
                <div 
                  key={sector.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
                  onClick={() => setSelectedSector(sector)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden group">
                    <img 
                      src={sector.sectorImage} 
                      alt={sector.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-amber-800 mb-1">{sector.title}</h3>
                    </div>

                    <div className="flex-grow">
                      <p className="line-clamp-3 text-lg text-gray-800 leading-relaxed tracking-normal">
                        {sector.description[0]}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-amber-700 hover:text-amber-800 font-semibold text-sm flex items-center">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* Project Detail Modal */}
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

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{selectedSector.title}</h3>
                    {selectedSector.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        {item.startsWith('•') ? (
                          <>
                            <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{item.substring(1).trim()}</span>
                          </>
                        ) : (
                          <span className="leading-relaxed">{item}</span>
                        )}
                      </li>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sectors;