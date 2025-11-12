import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      partner: "Kenyatta National Hospital",
      partnerLogo: "/Projects/KNH icon.png",
      projectImage: "/Projects/KNH.png",
      tagline: "Staff & Caregiver Accommodation - Enhancing Welfare and Service Delivery",
      description: [
        "Preparation, structuring, and implementation advisory for KNH staff and caregiver accommodation project under the PPP framework, including needs assessment, market analysis, technical, financial, legal, and environmental & social due diligence, and PPP procurement."
      ]
    },
    {
      id: 2,
      partner: "DBSA",
      partnerLogo: "/Projects/DBSA Icon.png",
      projectImage: "/Projects/dbsa img.png",
      tagline: "Development Bank of Southeast Africa - Building Africa's Prosperity",
      description: [
        "Project Finance Transaction Advisory for the Social Housing Programme (SHP) for the Infrastructure Fund (IF) Phase 2: Intermediate Phase: Appointment of a Fund Manager"
      ]
    },
    {
      id: 3,
      partner: "LIAISON GROUP",
      partnerLogo: "/Projects/liaison logo.png",
      projectImage: "/Projects/liaison img.png",
      tagline: "",
      description: [
        "Provision of transaction advisory consultancy services for the construction of Kenya Defense Forces affordable houses in various sites located within Nairobi, Laikipia, Mombasa, and Nakuru under the Affordable Housing Project through Public Private Partnership Initiative"
      ]
    },
    {
      id: 4,
      partner: "East, Central and Southern Africa Health Community",
      partnerLogo: "/Projects/ECS.png",
      projectImage: "/Projects/ECS img.png",
      tagline: "Financing Project Experience for Better Nature",
      description: [
        "First stage advisory services to a feasibility study and next phase development for the East, Central and Southern Africa Health Community (ECSA HC).",
        "• Construction feasibility analysis and time-bound supporting measures that will continue if necessary to ensure that the infrastructure meets experienced standards. A five-star hotel, office complex, ECSA HC staff residences and solar plant;",
        "• Supply and installation of medical and non-medical equipment including furniture."
      ]
    },
    {
      id: 5,
      partner: "THE NAIROBI HOSPITAL",
      partnerLogo: "/Projects/NaiHosp.png",
      projectImage: "/Projects/naihos img.png",
      tagline: "",
      description: [
        "Environmental Impact Assessment for the refurbishment of the Labour Ward and Theatre and construction of Oncology and Cancer Treatment Centre and Medical Records buildings."
      ]
    },
    {
      id: 6,
      partner: "BIDCO",
      partnerLogo: "/Projects/bidco.png",
      projectImage: "/Projects/bidco img.png",
      tagline: "",
      description: [
        "Execution of three Environmental Impact Assessments (EIAs) for expansion of newer production facilities.",
        "Undertaking of NEMA Environmental Audits (EA).",
        "Training and implementation of the best practices in industrial pollution prevention / cleaner production."
      ]
    },
    {
      id: 7,
      partner: "ROCO",
      partnerLogo: "/Projects/roco.png",
      projectImage: "/Projects/roco img.png",
      tagline: "",
      description: [
        "Collecting primary data and drafting a feasibility study;",
        "Conducting a comprehensive needs assessment and gap analysis of existing ESG framework;",
        "Designing a fully compliant ESMS framework aligned with IFC Performance Standards and other global benchmarks;",
        "Developing guidelines, manuals, and operational procedures for environmental and social risk management;",
        "Facilitating interactive training sessions for ECSA Secretariat staff and partners;",
        "Creating a monitoring and evaluation framework for ESMS implementation;",
        "Providing recommendations for long-term ESMS sustainability and internal policy alignment;",
        "Drafting of a PPP Project Agreement for the project; and",
        "Negotiation of the Transaction."
      ]
    },
    {
      id: 8,
      partner: "EAST AFRICAN COMMUNITY LAKE VICTORIA BASIN COMMISSION",
      partnerLogo: "/Projects/EAC.png",
      projectImage: "/Projects/eac img.png",
      tagline: "One People, One Destiny",
      description: [
        "Collecting primary data and drafting a feasibility study;",
        "Conducting a comprehensive needs assessment and gap analysis of existing ESG framework;",
        "Designing a fully compliant ESMS framework aligned with IFC Performance Standards and other global benchmarks;",
        "Developing guidelines, manuals, and operational procedures for environmental and social risk management;",
        "Facilitating interactive training sessions for ECSA Secretariat staff and partners;",
        "Creating a monitoring and evaluation framework for ESMS implementation;",
        "Providing recommendations for long-term ESMS sustainability and internal policy alignment;",
        "Drafting of a PPP Project Agreement for the project; and",
        "Negotiation of the Transaction."
      ]
    }
  ];

  return (
    <section id="partneredprojects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4 uppercase">
            Our Partner Network Projects
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={project.projectImage} 
                  alt={project.partner}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Partner Logo */}
                <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md w-16 h-16 flex items-center justify-center">
                  <img 
                    src={project.partnerLogo} 
                    alt={`${project.partner} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-amber-800">{project.partner}</h3>
                  {project.tagline && (
                    <p className="text-sm text-gray-600 italic mt-1">{project.tagline}</p>
                  )}
                </div>

                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-2">Project Description:</h4>
                  <ul className="space-y-2 text-gray-700">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        {item.startsWith('•') ? (
                          <>
                            <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-2"></span>
                            <span>{item.substring(1)}</span>
                          </>
                        ) : (
                          <span>{item}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;