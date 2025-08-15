import React from 'react';

const SectorExperiencePage = () => {
  const sectors = [
    {
      id: 1,
      title: "Energy and Environment",
      image: "/assets/SectExp.png",
      description: [
        "We assist clients measure, quantify and demonstrate Environmental, Social and Governance (ESG) issues and social license to operate in a credible manner that withstands scrutiny from investors, shareholders, regulators and the public.",
        "We also provide guidance on stakeholder mapping and describe the requirements for public participation."
      ],
      keyServices: [
        "ESG assessment and reporting",
        "Environmental impact evaluations",
        "Stakeholder mapping and engagement",
        "Public participation facilitation",
        "Social license to operate advisory"
      ]
    },
    {
      id: 2,
      title: "Transport and Infrastructure",
      image: "/assets/SectExp2.png",
      description: [
        "We develop solution concepts and deliver initial economic and feasibility studies through to defining and implementing engineering design, construction, commissioning, handover and operation of infrastructure projects."
      ],
      keyServices: [
        "Infrastructure feasibility studies",
        "Economic impact analysis",
        "Engineering design consultation",
        "Project implementation support",
        "Operational planning and handover"
      ]
    },
    {
      id: 3,
      title: "Health and Housing",
      image: "/assets/SectExp3.png",
      description: [
        "We advise on developing and redeveloping hospital infrastructure, as well as the models that work for a successful Healthcare PPP Project while supporting our clients with project conceptualization, carrying out detailed feasibility studies, the bidding stage and through financial close."
      ],
      keyServices: [
        "Healthcare infrastructure development",
        "PPP project structuring",
        "Hospital redevelopment planning",
        "Healthcare feasibility studies",
        "Project bidding support"
      ]
    },
    {
      id: 4,
      title: "Legal and Regulatory Affairs",
      image: "/assets/SectExp4.png",
      description: [
        "We have capacity to investigate any regulatory matters involving a project, ranging from tax matters, environmental, institutional and contractual arrangements.",
        "We assist in preparing a draft Project Agreement and risk allocation matrix in the construction and operation of any kind of projects, and provide strategies for mitigating risks."
      ],
      keyServices: [
        "Regulatory compliance investigation",
        "Tax advisory services",
        "Contract drafting and review",
        "Risk assessment and mitigation",
        "Project agreement structuring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sector Experience
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Specialized expertise across key industry sectors
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Our Sector Expertise
            </h2>
            <div className="w-20 h-1 bg-amber-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              With deep industry knowledge and extensive experience, we deliver tailored solutions 
              across multiple sectors. Our multidisciplinary approach ensures comprehensive support 
              for complex projects and strategic initiatives.
            </p>
          </div>

          {/* Sector Items */}
          <div className="space-y-20 mb-16">
            {sectors.map((sector, index) => (
              <div 
                key={sector.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image - Alternates sides */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={sector.image} 
                      alt={sector.title}
                      className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-amber-700 text-white text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                      {sector.id}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 w-full">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-amber-800 mb-6">
                    {sector.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    {sector.description.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key Services */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-amber-800 mb-4">Key Services:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {sector.keyServices.map((service, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-amber-800 mb-2">Our Impact</h3>
              <p className="text-gray-600">Delivering results across multiple sectors</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">4</div>
                <div className="text-gray-600 text-sm">Key Sectors</div>
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default SectorExperiencePage;