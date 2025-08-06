import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4 uppercase">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto"></div>
        </div>

        {/* Service 1: Capital Raising */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Capital Raising</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Eco Infra Capital supports clients in raising capital across the full spectrum of funding instruments—equity, debt, mezzanine, and blended finance. We advise both public and private institutions on structuring and securing project financing from domestic and international markets.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our team has experience arranging credit-enhanced instruments, Export Credit Agency (ECA)-backed finance, green bonds, and concessional funding. We also develop bankable investment cases and marketing materials, and coordinate investor roadshows to drive capital mobilization.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/service1.png"
              alt="Capital Raising Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 2: Mergers & Acquisitions */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mergers & Acquisitions</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                We offer end-to-end advisory for mergers, acquisitions, disposals, and joint ventures. Our team supports clients from opportunity identification and due diligence to deal structuring, negotiation, and execution.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                We leverage our regional networks and deep sector knowledge to facilitate strategic combinations that enhance value for investors and stakeholders. Our M&A experience spans infrastructure, real estate, energy, transport, healthcare, and financial services.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/service2.png"
              alt="Mergers & Acquisitions Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 3: Valuation & Transaction Structuring */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Valuation & Transaction Structuring</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Eco Infra Capital provides independent and strategic valuation services to support fundraising, acquisitions, restructuring, and shareholder transactions. We analyze enterprise value, assets, liabilities, and sector benchmarks to guide negotiations.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Additionally, we structure optimal financing models, develop robust financial projections, and advise on capital allocation strategies that enhance deal success and financial sustainability.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/service3.png"
              alt="Valuation & Transaction Structuring Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;