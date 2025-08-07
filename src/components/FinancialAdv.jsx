import React from 'react';

const FinancialAdvisory = () => {
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
    }
  ];

  return (
    <section id="financialadvisory" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4 uppercase">
            Financial Advisory
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our range of financial advisory services cover the following:
          </p>
        </div>

        {/* Advisory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisoryServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
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
                      <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Signature */}
        
      </div>
    </section>
  );
};

export default FinancialAdvisory;