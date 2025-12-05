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
                    OUR PURPOSE
                  </h2>
          <p>
            We aim to elevate the role of communication and engagement in infrastructure by fostering
            transparency, ownership and social value in every project we support by unlocking Africa’s
            infrastructure potential by delivering advisory solutions that are rooted in local realities, aligned 
            with global best practices and focused on impact.
          </p>
        </div>
        <div className='mission'>
          <h3 className="text-xl font-semibold  mb-4">
                    OUR APPROACH
                  </h3>
          <p>
            We combine strategy, systems, and stakeholder insight to design and implement integrated solutions throughout the infrastructure
             lifecycle—from concept development to post-implementation monitoring. Our approach is anchored in communication, collaboration, 
             and capacity-building, ensuring that every intervention empowers communities, aligns with policy, and delivers long-term value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;