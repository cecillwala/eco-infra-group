import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    // Check if we need to scroll to services section
    const shouldScrollToServices = sessionStorage.getItem('scrollToServices');
    if (shouldScrollToServices) {
      // Clear the flag
      sessionStorage.removeItem('scrollToServices');
      // Scroll to services section with a small delay to ensure DOM is ready
      setTimeout(() => {
        const servicesElement = document.getElementById('services');
        if (servicesElement) {
          servicesElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);


  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4 uppercase">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
        </div>

        {/* Service 1: Project Finance & Infrastructure Advisory */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Project Finance & Infrastructure Advisory</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                We specialize in designing innovative finance structures for infrastructure projects. Our services include financial modeling, bankability assessments, debt syndication, and structuring of blended finance solutions.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Ecos Infra Group works with multilateral institutions, DFIs, sovereign funds, and commercial lenders to deliver long-term capital solutions that align with project needs and policy objectives.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/service5.png"
              alt="Project Finance Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 2: Public-Private Partnerships (PPP) Advisory */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Public-Private Partnerships (PPP) Advisory</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                PPP advisory is a core competency at Ecos Infra Group. We guide clients through the full transaction lifecycle—from project scoping and feasibility studies to procurement design, investor engagement, and financial close.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our work includes drafting PPP agreements, concession structuring, public sector capacity building, and risk allocation. We've supported landmark PPP initiatives in housing, transport, energy, and healthcare, helping governments leverage private capital for infrastructure development.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/service4.png"
              alt="PPP Advisory Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 3: Capital Raising */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Capital Raising</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Ecos Infra Group supports clients in raising capital across the full spectrum of funding instruments—equity, debt, mezzanine, and blended finance. We advise both public and private institutions on structuring and securing project financing from domestic and international markets.
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

        {/* Service 4: Mergers & Acquisitions */}
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

        {/* Service 5: Valuation & Transaction Structuring */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Valuation & Transaction Structuring</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Ecos Infra Group provides independent and strategic valuation services to support fundraising, acquisitions, restructuring, and shareholder transactions. We analyze enterprise value, assets, liabilities, and sector benchmarks to guide negotiations.
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

        

        {/* Service 6: Restructuring & Insolvency Advisory */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Restructuring & Insolvency Advisory</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                For clients navigating financial distress or strategic repositioning, we offer tailored restructuring solutions. Our services cover business diagnostics, debt restructuring, asset recovery, creditor engagement, and turnaround planning.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                We also advise on insolvency options, ensuring that businesses and institutions can protect value and transition to sustainable operations.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/service6.png"
              alt="Restructuring Advisory Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 7: Alternative Investment Strategies */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Alternative Investment Strategies</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                We support institutional investors, pension funds, and asset managers in accessing alternative investments, including infrastructure equity, private credit, and impact-linked assets.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our team helps clients develop investment theses, screen project pipelines, conduct risk assessments, and implement ESG-aligned strategies. We also offer training and capacity-building for asset owners looking to diversify into illiquid or non-traditional investment opportunities.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/service7.png"
              alt="Alternative Investment Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 8: Public Sector Policy & Strategic Advisory */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Public Sector Policy & Strategic Advisory</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Ecos Infra Group partners with governments and development institutions to strengthen investment policy frameworks, identify priority projects, and attract private sector participation.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                We help craft strategic investment plans, advise on regulatory and legal environments, and design mechanisms to increase transparency, efficiency, and fiscal resilience. Our support includes organizing investor roundtables, preparing investment promotion materials, and mobilizing support from development partners.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/service8.png"
              alt="Public Sector Advisory Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 7: Financial Advisory*/}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 ">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Financial Advisory</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                In  collaboration with our affiliate company, Ecos Infra Capital, we provide specialized financial advisory services designed to help businesses and investors 
                navigate complex financial landscapes. Our expertise spans across transaction advisory, 
                project finance structuring, and alternative investment strategies.
              </p>
              <button onClick={() => navigate("/financial-advisory")} className="border border-[#C79336] font-semibold p-5 pr-9 pl-9 text-xl hover:text-[#fff] hover:bg-[#C79336] duration-300 ease-in-out text-[#C79336] rounded-2xl">Read More</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/AdvServ3.png"
              alt="Alternative Investment Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
     {/* Service 8: Engineering Advisory*/}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Engineering Advisory</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                We deliver integrated energy sector advisory services combining strategic, technical, and independent engineering expertise across power, transmission, and oil and gas developments.<br></br>
                 </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                We provide expert advisory services in delivering Water Security, Agricultural Productivity, and Climate Resilience Across Sub-Saharan Africa.
              </p>
              <button onClick={() => navigate("/engineering")} className="border border-[#C79336] font-semibold p-5 pr-9 pl-9 text-xl hover:text-[#fff] hover:bg-[#C79336] duration-300 ease-in-out text-[#C79336] rounded-2xl">Read More</button>
            </div>

          </div>
          <div className="md:w-1/2">
            <img 
              src="https://res.cloudinary.com/duwyaucf1/image/upload/v1772237561/OIL_AND_LPG_ADVISORY_hvyayr.jpg"
              alt="Public Sector Advisory Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 8: Public Sector Policy & Strategic Advisory */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img 
              src="https://res.cloudinary.com/duwyaucf1/image/upload/v1774817408/Screenshot_2026-03-29_234832_a7nqh6.png"
              alt="Public Sector Advisory Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Capacity Building</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Through our affiliate company, Ecos Infra Institute provides various capacity building programmes across Africa
                and the Middle East. These programmes include Public Private Partnership project implementation, project management, contract management and construction Management.
              </p>
              <button onClick={() => navigate("/institute")} className="border border-[#C79336] font-semibold p-5 pr-9 pl-9 text-xl hover:text-[#fff] hover:bg-[#C79336] duration-300 ease-in-out text-[#C79336] rounded-2xl">Read More</button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;