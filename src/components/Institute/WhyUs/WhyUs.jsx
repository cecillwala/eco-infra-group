import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
  return (
    <section id="aboutus" className="why-us py-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fff] mb-4 uppercase">
            Why Us
          </h2>
          <div className="w-20 h-1 bg-[#fff] mx-auto"></div>
        </div>
        <div className='objectives'>
        <div className='objective'>
          <h2 className="text-xl font-bold mb-4">
            VALUE PROPOSITION
          </h2>
          <p>
            At Ecos Infra Institute we are committed to enhancing the efficiency, effectiveness and success of clients in implementing PPP 
            projects. We do this through driving and offering practical and pragmatic best practice in PPP projects implementation.
          </p>
          <br></br>
          <p>
            Ecos Infra Institute’s customers can expect the highest quality capacity building. Accreditation by APMG International offers 
            us the recognised standard worldwide. By becoming accredited with APMG International, our clients can be certain we offer the 
            highest quality capacity building.
          </p>
          <br></br>
          <p>
            APMG itself is accredited by The United Kingdom Accreditation Service (UKAS) against the ISO 17021, ISO 17024, ISO 17025 and ISO 17065 standards
            for its operations and a number of its qualifications. UKAS is the only national accreditation body in the United Kingdom and their certificate is recognised by
            the UK government and in many other countries around the world.
          </p>
        </div>
        <div className='objective'>
          <h2 className="text-xl font-bold mb-4">
            BENEFITS FOR CLIENTS
          </h2>
          <ul>
            <li>
              • Access to discounted best in class accredited capacity building interventions
            </li>
            <li>
              • Development infrastructure capacity building geared towards the needs of our clients
            </li>
            <li>
              • Growth of Infrastructure Development and PPP professionals across the continent and potential new members
            </li>
            <li>
              • Increased PPP skills development
            </li>
            <li>
              • Access to highly qualified and well experience d Eco Infra Centre Facilitators in the implementation of PPP projects
            </li>
            <li>
              • Customisation of capacity building interventions to meet the requirements of clients
            </li>
             <li>
              • Access to diverse body of professionals
            </li>
            <li>
              • Objective reviews of inter nal client capacity leading to continual improvement
            </li>
            <li>
              • Improved capacity to deliver PPP projects
            </li>
            <li>
              • Improved PPP Maturity
            </li>
            <li>
              • Improved deal flow (increase in number PPP projects that reach financial closure and proceed to execution)
            </li>
             <li>
              • Provision of cost-effective and world-class PPP advisory and support services which lead to infrastructure and economic development
            </li>
            <li>
              • Implementation support including for large and complex PPP projects
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;