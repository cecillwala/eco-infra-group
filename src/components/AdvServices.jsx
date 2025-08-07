import React from 'react';

const AdvisoryServices = () => {
  const advisoryCategories = [
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
    <section id="advisory-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4 uppercase">
            Financial Advisory Services
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto"></div>
        </div>

        {/* Advisory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisoryCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
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

export default AdvisoryServices;