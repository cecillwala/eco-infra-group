import React, { useEffect } from 'react';

const FinancialAdvisoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advisoryServices = [
    {
      title: "Transaction & Strategy Advisory",
      image: "/assets/FinAdv1.png",
      items: [
        "Project feasibility studies to ensure project viability and sustainability",
        "Financial and operational due diligence, market research and in depth transaction analysis",
        "Project syndication and the identification of, and engagement with, aligned investors",
        "Development of relevant investor materials such as teasers and information memoranda",
        "Valuation of businesses and assets and liabilities analysis in support of negotiations"
      ]
    },
    {
      title: "Project Finance Structuring",
      image: "/assets/FinAdv2.png",
      items: [
        "Determination of optimal capital structures",
        "Structuring and arranging finance across the capital structure (equity, mezzanine and senior debt)",
        "Development of bankable investment feasibility studies and appraisals",
        "Development of detailed financial models and tools used to identify project funding requirements",
        "Global and local institutional investor engagement"
      ]
    },
    {
      title: "Alternative Investment Strategies",
      image: "/assets/FinAdv3.png",
      items: [
        "Development of alternative asset investment strategies",
        "Development of portfolio risk mitigation strategies for alternative asset investments",
        "Development and analysis of investment pipeline for projects",
        "Trainings and capacity building services for institutional investors on alternative asset investments",
        "Independent and transparent valuation of illiquid and private assets"
      ]
    },
    {
      title: "Public Sector Policy Advisory",
      image: "/assets/AdvServ1.png",
      items: [
        "Expertise in Public-Private-Partnership (PPP) financing structures, concessions, management contracts and loans",
        "Structuring of government and public sector body initiatives and strategic plans",
        "Mobilization of local and international private capital to address short-and long-term priorities and reduce reliance on budgetary allocations",
        "Engagement with global development partner networks and mobilization of investment support",
        "Capacity building for public sector personnel"
      ]
    },
    {
      title: "Private Equity",
      image: "/assets/AdvServ2.png",
      items: [
        "Origination, negotiation and execution of private equity transactions",
        "Raising capital from family owned businesses, high-net worth individuals and other institutional investors",
        "Drafting Marketing documentation",
        "Organizing and executing roadshows",
        "Deal Sourcing",
        "Investment opportunity identification",
        "Investor and target introduction"
      ]
    },
    {
      title: "Corporate Finance",
      image: "/assets/AdvServ3.png",
      items: [
        "Prepare an information memorandum for marketing",
        "Determine optimal capital structure",
        "Market research on sectors and regions",
        "Use our network to identify potential investors and financiers",
        "Negotiate terms & recommend best offer",
        "Financial close",
        "Post transaction advisory/monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div id="top" className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Financial Advisory Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Comprehensive financial solutions to drive your business forward
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4">
              Our Advisory Services
            </h2>
            <div className="w-20 h-1 bg-[#C79336] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We provide specialized financial advisory services designed to help businesses and investors 
              navigate complex financial landscapes. Our expertise spans across transaction advisory, 
              project finance structuring, and alternative investment strategies.
            </p>
          </div>

          {/* Advisory Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advisoryServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAdvisoryPage;