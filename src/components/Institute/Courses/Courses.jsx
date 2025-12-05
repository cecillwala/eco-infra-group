import React, { useEffect } from 'react';
import './Courses.css';

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
        <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4 uppercase">
          OUR CERTIFIED PUBLIC PRIVATE PARTNERSHIP PROFESSIONAL
          (CP3P) ACCREDITATION OFFERING
        </h2>
        <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
      </div>
      <div className='objectives'>
        <div className='objective'>
          <h2 className="text-xl font-bold text-amber-800 mb-4">
            INTRODUCTION
          </h2>
          <p>
            The APMG PPP Certification Program is an innovation of the World Bank Group (WBG), the European Bank for Reconstruction and Development
            (EBRD), the Inter-American Development Bank (IDB), the Islamic Development Bank (IsDB), the Multilateral Investment Fund (MIF) and the
            Asian Development Bank (ADB), and part funded by the Public-Private Infrastructure Advisory Facility (PPIAF) with a shared vision of enhancing
            PPP performance globally. The initiative is aimed at ensuring the adoption and implementation of PPP best practice. It also aims to increase skills and
            capacity for the delivery of PPPs.
          </p>
          <p>
            The World Bank has appointed APMG to accredit capacity building organisations, their Facilitators/Trainers and course materials so that they 
            can deliver one or more of the certification levels within the CP3P program.
          </p>
          </div>
          <div className='objective'>
            <h2 className="text-xl font-bold text-amber-800 mb-4">
              COURSE STRUCTURE
            </h2>
            <p>
              CP3P capacity building offerings are designed to equip course participants with complete competencies needed to deliver PPPs successfully. The certification
              is split into three levels as below:
            </p>
            <ul className='missions'>
                <li>• Foundation</li>
                <li>• Preparation</li>
                <li>• Execution</li>
              </ul>
            <p>
              Successful candidates for each exam will be awarded a certificate. The can take one or both Practitioner exams, in any order, however taking the
              Preparation exam before the Execution exam follows the life cycle of a PPP. Candidates who have passed all three exams will be entitled to use the CP3P
              credential. The diagram below explains the exam pathway to becoming a certified Public-Private Partnerships professional.
            </p>
          </div>
        </div>
    </section>
    // <section id="services" className="courses py-20">
    //   <div className="text-center mb-16">
    //       <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4 uppercase">
    //         OUR CERTIFIED PUBLIC PRIVATE PARTNERSHIP PROFESSIONAL
    //         (CP3P) ACCREDITATION OFFERING
    //       </h2>
    //       <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
    //     </div>
    //     <div className='objectives'>
    //       <div className='objective'>
    //         <h2 className="text-xl font-bold text-amber-800 mb-4">
    //           INTRODUCTION
    //         </h2>
    //         <p>
    //           The APMG PPP Certification Program is an innovation of the World Bank Group (WBG), the European Bank for Reconstruction and Development
    //           (EBRD), the Inter-American Development Bank (IDB), the Islamic Development Bank (IsDB), the Multilateral Investment Fund (MIF) and the
    //           Asian Development Bank (ADB), and part funded by the Public-Private Infrastructure Advisory Facility (PPIAF) with a shared vision of enhancing
    //           PPP performance globally. The initiative is aimed at ensuring the adoption and implementation of PPP best practice. It also aims to increase skills and
    //           capacity for the delivery of PPPs.
    //         </p>
    //         <p>
    //           The World Bank has appointed APMG to accredit capacity building organisations, their Facilitators/Trainers and course materials so that they 
    //           can deliver one or more of the certification levels within the CP3P program.
    //         </p>
    //       </div>
    //       <div>
    //         <h2 className="text-xl font-bold text-amber-800 mb-4">
    //           COURSE STRUCTURE
    //         </h2>
    //         <p>
    //           CP3P capacity building offerings are designed to equip course participants with complete competencies needed to deliver PPPs successfully. The certification
    //           is split into three levels as below:
    //           <ul>
    //             <li>Foundation</li>
    //             <li>Preparation</li>
    //             <li>Execution</li>
    //           </ul>
    //         </p>
    //         <p>
    //           Successful candidates for each exam will be awarded a certificate. The can take one or both Practitioner exams, in any order, however taking the
    //           Preparation exam before the Execution exam follows the life cycle of a PPP. Candidates who have passed all three exams will be entitled to use the CP3P
    //           credential. The diagram below explains the exam pathway to becoming a certified Public-Private Partnerships professional.</p>
    //       </div>
    //     </div>
    // </section>
  );
};

export default Courses;