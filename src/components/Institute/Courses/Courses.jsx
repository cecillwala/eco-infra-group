import React, { useEffect } from 'react';
import './Courses.css';

const img = 'https://res.cloudinary.com/drkmm8xka/image/upload/v1770180210/courses_1_y03nl8.png';

const Courses = () => {
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

  return (
    <section id="courses" className="about-us py-10 bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-3xl font-bold text-[#C79336] mb-4 uppercase">
          OUR CERTIFIED PUBLIC PRIVATE PARTNERSHIP PROFESSIONAL
          (CP3P) ACCREDITATION OFFERING
        </h2>
        <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
      </div>
      <div className='objectives'>
        <div className='course-sections'>
          <h2 className="text-xl font-bold text-amber-800 mb-4">
            INTRODUCTION
          </h2>
          <p className="text-lg tracking-normal mb-4">
            The APMG PPP Certification Program is an innovation of the World Bank Group (WBG), the European Bank for Reconstruction and Development
            (EBRD), the Inter-American Development Bank (IDB), the Islamic Development Bank (IsDB), the Multilateral Investment Fund (MIF) and the
            Asian Development Bank (ADB), and part funded by the Public-Private Infrastructure Advisory Facility (PPIAF) with a shared vision of enhancing
            PPP performance globally. The initiative is aimed at ensuring the adoption and implementation of PPP best practice. It also aims to increase skills and
            capacity for the delivery of PPPs.
          </p>
          <p className="text-lg tracking-wide">
            The World Bank has appointed APMG to accredit capacity building organisations, their Facilitators/Trainers and course materials so that they 
            can deliver one or more of the certification levels within the CP3P program.
          </p>
          </div>
          <img 
            src={img} 
            alt="Background" 
            className="rounded-4xl w-3/4 course-img"
          />
          <div className='course-sections'>
            <h2 className="text-xl font-bold text-amber-800 mb-4">
              COURSE STRUCTURE
            </h2>
            <p className="text-lg tracking-normal mb-4">
              CP3P capacity building offerings are designed to equip course participants with complete competencies needed to deliver PPPs successfully. The certification
              is split into three levels; <strong>Foundation, </strong><strong>Preparation</strong> <strong>and Execution.</strong>
            </p>
            <p className="text-lg tracking-normal mb-4">
              Successful candidates for each exam will be awarded a certificate. The can take one or both Practitioner exams, in any order, however taking the
              Preparation exam before the Execution exam follows the life cycle of a PPP. Candidates who have passed all three exams will be entitled to use the CP3P
              credential. The diagram below explains the exam pathway to becoming a certified Public-Private Partnerships professional.
            </p>
            <p className="text-lg tracking-normal mb-4">The core facets of the capacity building are as below:
              <ul className="text-lg tracking-normal">
                <li>• PPP Introduction and Overview</li>
                <li>• Establishing a PPP Framework</li>
                <li>• Project Identification and PPP Screening</li>
                <li>• Appraising PPP Projects</li>
                <li>• Structuring and Drafting the Tender and Contract</li>
                <li>• Tendering and Awarding the Contract</li>
                <li>• Strategy Delivery and Commissioning</li>
                <li>• Operations and Handback</li>
              </ul>
            </p>
          </div>
        </div>
    </section>
  );
};

export default Courses;