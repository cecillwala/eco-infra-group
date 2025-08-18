import React, { useState } from 'react';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      partner: "DBSA",
      partnerLogo: "/Projects/DBSA Icon.png",
      projectImage: "/Projects/dbsa img.png",
      tagline: "Development Bank of Southeast Africa - Building Africa's Prosperity",
      sector: "Financial Services",
      status: "Completed",
      description: [
        "Project Finance Transaction Advisory for the Social Housing Programme (SHP) for the Infrastructure Fund (IF) Phase 2: Intermediate Phase: Appointment of a Fund Manager"
      ]
    },
    {
      id: 2,
      partner: "LIAISON GROUP",
      partnerLogo: "/Projects/liaison logo.png",
      projectImage: "/Projects/liaison img.png",
      tagline: "",
      sector: "Real Estate & Housing",
      status: "In Progress",
      description: [
        "Provision of transaction advisory consultancy services for the construction of Kenya Defense Forces affordable houses in various sites located within Nairobi, Laikipia, Mombasa, and Nakuru under the Affordable Housing Project through Public Private Partnership Initiative"
      ]
    },
    {
      id: 3,
      partner: "East, Central and Southern Africa Health Community",
      partnerLogo: "/Projects/ECS.png",
      projectImage: "/Projects/ECS img.png",
      tagline: "Financing Project Experience for Better Nature",
      sector: "Healthcare Infrastructure",
      status: "In Progress",
      description: [
        "First stage advisory services to a feasibility study and next phase development for the East, Central and Southern Africa Health Community (ECSA HC).",
        "• Construction feasibility analysis and time-bound supporting measures that will continue if necessary to ensure that the infrastructure meets experienced standards. A five-star hotel, office complex, ECSA HC staff residences and solar plant;",
        "• Supply and installation of medical and non-medical equipment including furniture."
      ]
    },
    {
      id: 4,
      partner: "THE NAIROBI HOSPITAL",
      partnerLogo: "/Projects/NaiHosp.png",
      projectImage: "/Projects/naihos img.png",
      tagline: "",
      sector: "Healthcare",
      status: "Completed",
      description: [
        "Environmental Impact Assessment for the refurbishment of the Labour Ward and Theatre and construction of Oncology and Cancer Treatment Centre and Medical Records buildings."
      ]
    },
    {
      id: 5,
      partner: "BIDCO",
      partnerLogo: "/Projects/bidco.png",
      projectImage: "/Projects/bidco img.png",
      tagline: "",
      sector: "Manufacturing",
      status: "Completed",
      description: [
        "Execution of three Environmental Impact Assessments (EIAs) for expansion of newer production facilities.",
        "Undertaking of NEMA Environmental Audits (EA).",
        "Training and implementation of the best practices in industrial pollution prevention / cleaner production."
      ]
    },
    {
      id: 6,
      partner: "ROCO",
      partnerLogo: "/Projects/roco.png",
      projectImage: "/Projects/roco img.png",
      tagline: "",
      sector: "ESG & Risk Management",
      status: "Completed",
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
      id: 7,
      partner: "EAST AFRICAN COMMUNITY LAKE VICTORIA BASIN COMMISSION",
      partnerLogo: "/Projects/EAC.png",
      projectImage: "/Projects/eac img.png",
      tagline: "One People, One Destiny",
      sector: "Environmental Management",
      status: "In Progress",
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // eslint-disable-next-lineconst sectors = [...new Set(projects.map(p => p.sector))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Partner Network Projects
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Collaborating with leading organizations to deliver impactful solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
              Project Portfolio
            </h2>
            <div className="w-20 h-1 bg-amber-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our diverse portfolio showcases successful partnerships across multiple sectors, 
              delivering innovative solutions that create lasting value for our clients and communities.
            </p>
          </div>

          

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
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

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-amber-800 mb-1">{project.partner}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                        {project.sector}
                      </span>
                    </div>
                    {project.tagline && (
                      <p className="text-sm text-gray-600 italic">{project.tagline}</p>
                    )}
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-2">Project Overview:</h4>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {project.description[0]}
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
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.projectImage} 
                alt={selectedProject.partner}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={selectedProject.partnerLogo} 
                  alt={`${selectedProject.partner} logo`}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h2 className="text-2xl font-bold text-amber-800">{selectedProject.partner}</h2>
                  {selectedProject.tagline && (
                    <p className="text-gray-600 italic">{selectedProject.tagline}</p>
                  )}
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                      {selectedProject.sector}
                    </span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Details:</h3>
                <ul className="space-y-3 text-gray-700">
                  {selectedProject.description.map((item, i) => (
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;