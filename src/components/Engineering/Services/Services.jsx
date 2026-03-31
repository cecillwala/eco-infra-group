import React, { useEffect } from 'react';
import './Services.css';

const differentiators = [
  {
    title: "REGIONAL INTELLIGENCE",
    desc: "Deep understanding of Sub-Saharan Africa's institutional frameworks, regulatory environments, and operational realities.",
  },
  {
    title: "INDEPENDENT AND TRUSTED EXPERTISE",
    desc: "Objective advisory services free from conflicts of interest, ensuring credibility with financiers and public authorities.",
  },
  {
    title: "INTEGRATED TECHNICAL AND COMMERCIAL INSIGHT",
    desc: "Engineering solutions aligned with financial viability, procurement strategy, and long-term asset sustainability.",
  },
  {
    title: "CLIMATE-RESPONSIVE DESIGN",
    desc: "Infrastructure designed for water scarcity, climate variability, and long-term resilience.",
  },
  {
    title: "MULTIDISCIPLINARY DELIVERY",
    desc: "Engineers, hydrologists, economists, environmental specialists, and infrastructure advisors working as one team.",
  },
];

const Services = () => {
  useEffect(() => {
    const shouldScrollToServices = sessionStorage.getItem('scrollToServices');
    if (shouldScrollToServices) {
      sessionStorage.removeItem('scrollToServices');
      setTimeout(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <section id="services" className="py-10 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C79336] mb-4 uppercase">
            Our Differentiators
          </h2>
          <div className="w-20 h-1 bg-[#C79336] mx-auto"></div>
        </div>

        {differentiators.map((item, index) => (
          <div key={index} className="mb-10 space-y-4">
            <div
              className="service-bubble group"
              style={{
                borderLeft: '4px solid #C79336',
                borderRadius: '12px',
                padding: '28px 36px',
                background: '#ffffff',
                maxWidth: '1200px',
                margin: '0 auto',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(199,147,54,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h4 style={{
                fontSize: '16px',
                fontWeight: '800',
                color: '#C79336',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {item.title}
              </h4>
              <p style={{
                color: '#4b5563',
                fontSize: '16px',
                lineHeight: '1.75',
                margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;