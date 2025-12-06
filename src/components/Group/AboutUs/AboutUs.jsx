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
          <div className='w-fit'>
            <h2 className="text-xl font-semibold mb-0.5">
              OUR PURPOSE
            </h2>
            <div className="w-full h-1 bg-[#fff] mb-4"></div>
          </div>
          <p className="text-lg text-white-800 leading-relaxed tracking-wide">
            We aim to elevate the role of communication and engagement in infrastructure by fostering
            transparency, ownership and social value in every project we support by unlocking Africa’s
            infrastructure potential by delivering advisory solutions that are rooted in local realities, aligned 
            with global best practices and focused on impact.
          </p>
        </div>
        <div className='mission'>
          <div className='w-fit'>
            <h2 className="text-xl font-semibold mb-0.5">
              OUR APPROACH
            </h2>
            <div className="w-full h-1 bg-[#fff] mb-4"></div>
          </div>
          <p className="text-lg text-white-800 leading-relaxed tracking-wide">
            We combine strategy, systems, and stakeholder insight to design and implement integrated solutions throughout the infrastructure
             lifecycle—from concept development to post-implementation monitoring. Our approach is anchored in communication, collaboration, 
             and capacity-building, ensuring that every intervention empowers communities, aligns with policy, and delivers long-term value.
          </p>
        </div>
      </div>
      <div className='objectives'>
        <div className='why-us'>
          <div className='w-fit'>
            <h2 className="text-xl font-semibold mb-0.5">
              WHY CHOOSE ECOS INFRA GROUP
            </h2>
            <div className="w-full h-1 bg-[#fff] mb-4"></div>
          </div>
          <ol>
            <li className="text-lg text-white-800 leading-relaxed tracking-wide">
              <strong>African Expertise, Global Standards</strong> – We blend deep local understanding with international best practices, ensuring solutions that fit local realities while meeting global expectations.
            </li>
            <li className="text-lg text-white-800 leading-relaxed tracking-wide">
              <strong>Multidisciplinary Team</strong> – Our team combines legal, technical, financial, social, and environmental expertise, allowing us to approach every project from all critical angles.
            </li>
            <li className="text-lg text-white-800 leading-relaxed tracking-wide">
              <strong>Track Record</strong> – We have a history of delivering complex, multi-stakeholder projects through strong coordination, clear communication, and reliable execution.
            </li>
            <li className="text-lg text-white-800 leading-relaxed tracking-wide">
              <strong>Innovation Focus</strong> – We use modern digital tools and data-driven methods to improve project efficiency, transparency, and decision-making.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;