import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section id="aboutus" className="about-us py-10 bg-gray-100">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4 uppercase">
            About Us
          </h2>
          <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
        </div>
      <div className='missions'>
        <div className='mission'>
          <h2 className="text-xl font-semibold mb-4">
                    MISSION
                  </h2>
          <p>To improve the success rate of African Public Private Partnership projects through offering quality capacity building and knowledge transfer interventions, consultancy
            interventions and advisory services</p>
        </div>
        <div className='mission'>
          <h3 className="text-xl font-semibold  mb-4">
                    VISION
                  </h3>
          <p>To become the paramount agent of Public Private Partnership projects implementation capacity growth in Africa and the developing world</p>
        </div>
      </div>
      <div className='objectives'>
        <div className='objective'>
          <h2 className="text-xl font-semibold text-amber-800 mb-4">
            COMPANY OBJECTIVES
          </h2>
          <ul>
            <li>
              • Provide impactful and sustainable clients solutions
            </li>
            <li>
              • Provide pragmatic and practical capacity building solutions enhancing business
            performance
            </li>
            <li>
              • Form collaborative long-term mutually beneficial relationships with our clients and
            service providers
            </li>
            <li>
              • Improve the standard of projects delivery and maturity for our clients
            </li>
            <li>
              • Offer best in class solutions through research and staying abreast of the latest
            practices in project delivery and PPP implementation
            </li>
            <li>
              • Ensure organisation continual improvement offering best practice solutions and
            independent objective reviews
            </li>
            <li>
              • Ensure client satisfaction through constant client interaction and feedback in our
            quest for excellence
            </li>
          </ul>
        </div>
        <div className='objective'>
          <h2 className="text-xl font-semibold text-amber-800 mb-4">
            VALUES
          </h2>
          <ul>
            <li>
              • We are committed to service excellence
            </li>
            <li>
              • We are driven by passion for quality, innovation and best practice
            </li>
            <li>
              • We act with integrity and commitment in everything we do
            </li>
            <li>
              • We aim to continual improve and cultivate growth
            </li>
            <li>
              • We are results and impact oriented
            </li>
            <li>
              • We will act selflessly and collaboratively as well as cultivate growth
            targeted mutually beneficial partnerships
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;