import React, { useEffect } from 'react';
import './Services.css';

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
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">PROJECT COMMUNICATION</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                We design and implement tailored communication strategies for infrastructure projects, ensuring key
                messages are clear, consistent, and aligned with project milestones. Whether introducing a new
                project to stakeholders or managing complex transitions during implementation, we guide clients
                on how to communicate with credibility, transparency, and confidence.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                Our expertise spans public relations, strategic messaging, media engagement, stakeholder
                alignment, and risk communication—ensuring that projects are not only technically sound but socially
                understood. From setting the tone of the conversation to shaping public perception, we enable
                our clients to lead with purpose and clarity.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
               <strong>Examples of our work include:</strong>
               <ul>
                <li>• Designing national infrastructure brand campaigns to promote visibility and transparency.</li>
                <li>• Developing communication protocols for energy and transport PPPs.</li>
                <li>• Supporting Ministries of Infrastructure with communication materials for stakeholder reporting and investor outreach.</li>
                <li>• Producing visual and narrative content for development partners in urban upgrading and smart city projects.</li>
               </ul>
              </p>

            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/project-communication.png"
              alt="Project Finance Services"
              className="w-m-fit h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 2: PPP Maturity Assessments */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">PUBLIC AND STAKEHOLDER ENGAGEMENT</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                We design and manage inclusive public and stakeholder engagement processes that are responsive, transparent,
                and grounded in local context. Recognizing that infrastructure projects often involve multiple interest
                groups and can create both opportunities and disruptions, we work to build trust, promote collaboration, and ensure
                shared ownership.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                Our services help clients understand their stakeholders, foster early and sustained engagement, and document inputs that 
                shape better project outcomes. We support inclusive participation aligned with national legislation and global standards.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                <strong>We've delivered:</strong>
                <ul>
                  <li>• Stakeholder mapping, influence analysis, and segmentation strategies.</li>
                  <li>• Public participation and consultation planning aligned with regulatory and donor requirements.</li>
                  <li>• Community liaison services to maintain active communication with project-affected persons.</li>
                  <li>• Dialogue facilitation, focus group discussions, and town hall events.</li>
                  <li>• Design and implementation of grievance redress mechanisms.</li>
                  <li>• Documentation and reporting of stakeholder feedback to inform project revisions.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/stakeholders-management.png"
              alt="PPP Advisory Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 3: Consultancy & Advisory Support Services */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">TRAINING ON COMMUNICATION</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                We offer practical, impact-oriented training programs to build capacity in communication and engagement. Our training is 
                designed for real-world implementation—focusing on tools, techniques, and frameworks that professionals can apply to their projects immediately.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                Participants learn to navigate communication risks, lead public dialogues, respond to crises, and use
                digital tools for public engagement. These programs are customized for different institutional contexts and
                delivered through workshops, webinars, toolkits, and post-training support.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                <strong>We've delivered:</strong>
                <ul>
                  <li>• National and county-level training sessions on public participation legislation and practice.</li>
                  <li>• Private sector communication coaching for infrastructure contractors and consultants.</li>
                  <li>• Masterclasses on media engagement and crisis communication.</li>
                  <li>• Digital communication skills development for public officers managing social infrastructure delivery.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/training-on-communication.png"
              alt="Training On Communication"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 2: PPP Maturity Assessments */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">ECOS INFRA X (SPECIALIZED SERVICES)</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                Our innovation lab—designed to push boundaries in how infrastructure is communicated, visualized, and
                understood. We embed smart technologies, predictive tools, and data visualization techniques to complement
                our core services and deliver projects that are smarter and more resilient.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                By combining technology with storytelling, Ecos Infra X makes engagement deeper, reporting more insightful,
                and project communication more adaptive to changing contexts.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                <strong>We have supported:</strong>
                <ul>
                  <li>• Integration of GIS mapping tools for regional development monitoring.</li>
                  <li>• Piloting of AI-assisted grievance redress platforms for community feedback collection.</li>
                  <li>• Sustainability and ESG communication audits for large-scale renewable energy developers.</li>
                  <li>• Development of infrastructure knowledge products, including digital toolkits, mobile survey dashboards, and insight reports.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/ecoinfrax.png"
              alt="Ecos Infra X (Specialized Services)"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service 3: Consultancy & Advisory Support Services */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">PROJECT PUBLIC RELATIONS</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                Eco Infra provides comprehensive PR support across the project lifecycle — defining vision, engaging media, 
                managing messaging, and positioning your project for public confidence.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                We act as partners, becoming a bridge between groups, interests and expertise, to strengthen the delivery of any project or programme.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                We work with clients’ project teams to assess the PR profile of a scheme, helping the community to
                understand the project’s benefits, as well as identifying likely risks and threats based on the local context and
                nature of the scheme. Our goal is to ensure a thoughtful and prepared approach to communications
                across a wide range of possible issues that might affect the project, the location and the community.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed tracking-normal">
                We also develop project and place branding through strategic storytelling, based on a deep understanding
                of a scheme’s qualities and benefits, as well as the values of relevant stakeholders.</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/public-relations.png"
              alt="Project Public Relations"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;