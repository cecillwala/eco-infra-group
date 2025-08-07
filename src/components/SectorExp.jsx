import React from 'react';

const SectorExperience = () => {
  const sectors = [
    {
      id: 1,
      title: "Energy and Environment",
      image: "/assets/SectExp.png",
      description: [
        "We assist clients measure, quantify and demonstrate Environmental, Social and Governance (ESG) issues and social license to operate in a credible manner that withstands scrutiny from investors, shareholders, regulators and the public.",
        "We also provide guidance on stakeholder mapping and describe the requirements for public participation."
      ]
    },
    {
      id: 2,
      title: "Transport and Infrastructure",
      image: "/assets/SectExp2.png",
      description: [
        "We develop solution concepts and deliver initial economic and feasibility studies through to defining and implementing engineering design, construction, commissioning, handover and operation of infrastructure projects."
      ]
    },
    {
      id: 3,
      title: "Health and Housing",
      image: "/assets/SectExp3.png",
      description: [
        "We advise on developing and redeveloping hospital infrastructure, as well as the models that work for a successful Healthcare PPP Project while supporting our clients with project conceptualization, carrying out detailed feasibility studies, the bidding stage and through financial close."
      ]
    },
    {
      id: 4,
      title: "Legal and Regulatory Affairs",
      image: "/assets/SectExp4.png",
      description: [
        "We have capacity to investigate any regulatory matters involving a project, ranging from tax matters, environmental, institutional and contractual arrangements.",
        "We assist in preparing a draft Project Agreement and risk allocation matrix in the construction and operation of any kind of projects, and provide strategies for mitigating risks."
      ]
    }
  ];

  return (
    <section id="sector-experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4 uppercase">
            Select Sector Experience
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto"></div>
        </div>

        {/* Sector Items */}
        <div className="space-y-20">
          {sectors.map((sector, index) => (
            <div 
              key={sector.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image - Alternates sides */}
              <div className="md:w-1/2 w-full">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-amber-700 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full">
                    {sector.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-semibold text-amber-800 mb-4">
                  {sector.title}
                </h3>
                <div className="space-y-4">
                  {sector.description.map((paragraph, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorExperience;