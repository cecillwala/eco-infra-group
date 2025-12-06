import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section id="aboutus" className="about-us py-10 bg-gray-100">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-[#C79336] mb-4 uppercase">
            About Us
          </h2>
          <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
        </div>
        
      <p className="text-gray-700 text-lg space-y-3 leading-relaxed tracking-normal">
        Ecos Infra Institute is a Kenyan based company which is accredited by APMG to 
        provide the Certified Public Private Partnership Professional (CP3P) Certification course.</p>

      <p className="text-gray-700 text-lg space-y-3 leading-relaxed tracking-normal">
        Its Course Facilitators have extensive CP3P facilitation experience across Africa and the Middle East. All APMG accredited Facilitators/Trainers and companies undergo a rigorous assessment process in order to ensure they
        have the requisite quality, systems and capability to provide a quality capacity building offering. Ecos Infra Institute
        has therefore been benchmarked against quality standards in order for it to acquire this Accredited. Quality, innovation and service excellence are at the core of how.
      </p>
      <br></br>
      <div className='missions'>
        <div className='mission'>
          <div className='w-fit'>
            <h2 className="text-xl font-semibold mb-0.5">
              MISSION
            </h2>
            <div className="w-full h-1 bg-[#fff] mb-4"></div>
          </div>
          <p className='text-white-700 text-lg space-y-3 leading-relaxed tracking-normal'>
            To improve the success rate of African Public Private Partnership projects through offering quality capacity building and knowledge transfer interventions, consultancy
            interventions and advisory services</p>
        </div>
        <div className='mission'>
          <div className='w-fit'>
            <h2 className="text-xl font-semibold mb-0.5">
              VISION
            </h2>
            <div className="w-full h-1 bg-[#fff] mb-4"></div>
          </div>
          <p className='text-white-700 text-lg space-y-3 leading-relaxed tracking-normal'>
            To become the paramount agent of Public Private Partnership projects implementation capacity growth in Africa and the developing world</p>
        </div>
      </div>

      {/* Objectives & Values */}
      <div className="objectives mx-auto grid md:grid-cols-2 gap-8 mt-16">
        {/* Objectives */}
        <div className="objective-1 bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#C79336] mb-4 text-left">
            Company Objectives
          </h3>
          <ul className="text-gray-700 text-lg space-y-3 leading-relaxed tracking-normal">
            <li>• Provide impactful and sustainable clients solutions</li>
            <li>
              • Provide pragmatic and practical capacity building solutions enhancing business performance
            </li>
            <li>
              • Form collaborative long-term mutually beneficial relationships with our clients and service providers
            </li>
            <li>• Offer best in class solutions through research and staying abreast of the latest practices in project delivery and PPP implementation</li>
            <li>
              • Ensure organisation continual improvement offering best practice solutions and independent objective reviews
            </li>
            <li>
              • Ensure client satisfaction through constant client interaction and feedback in our quest for excellence
            </li>
          </ul>
        </div>

      
        {/* Values */}
        <div className="objective-1 bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#C79336] mb-4 text-left">
            Values
          </h3>
          <ul className="text-gray-700 text-lg space-y-3 leading-relaxed tracking-normal">
            <li>• We are committed to service excellence</li>
            <li>• We are driven by passion for quality, innovation and best practice</li>
            <li>• We act with integrity and commitment in everything we do</li>
            <li>• We aim to continual improve and cultivate growth</li>
            <li>• We are results and impact oriented</li>
            <li>• We will act selflessly and collaboratively as well as cultivate growth targeted mutually beneficial partnerships</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;