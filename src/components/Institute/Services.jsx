import React, { useEffect } from 'react';

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

  return (
    <section id="services" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4 uppercase">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
        </div>

        {/* Service 1: Capacity Building and Skills transfer */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Capacity Building and Skills transfer</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Ecos Infra Institute specialises in the provision of world class capacity building and skills transfer interventions. We also offer accreditation for some of these
                initiatives with the Certified Public Private Partnership Professional being our flagship accredited programmes. We recognise the need to promote
                the growth and number of PPP professionals globally. Eco Infra Institute also facilitates and provides relevant technical webinars from time to time.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our courses are designed to be participatory ‘knowledge cafes’ where we tap into real life situations of our course participants. We focus on case
                studies in order to ensure participants are able to relate to the discussion and benefit through application of the knowledge in work situations after the course.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">We also develop and provide customized and specialist capacity building
              offerings as required by our different clients with special emphasis on
              infrastructure delivery, project management and PPP projects.</p>
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

        {/* Service 2: PPP Maturity Assessments */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">PPP Maturity Assessments</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                Ecos Infra Institute would like to assist its clients by offering end to end support in the implementation of PPP projects. One of the enablers of
                successful delivery of PPP projects is the prevalence of a mature PPP environment. Eco Infra Institute provides PPP maturity assessments to public.
                sector organisations and private corporates involved in the implementation of PPP projects.
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

        {/* Service 3: Consultancy & Advisory Support Services */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Consultancy & Advisory Support Services</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                We provide consultancy services for the different stakeholders involved in PPP projects from project set-up to project closure in line with our end goal of being
                the go-to service best in class service provider for PPP projects implementation across Africa, the Middle East and the world at large.
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
      </div>
    </section>
  );
};

export default Services;