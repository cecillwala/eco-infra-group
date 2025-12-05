/*
EcosInfraLanding.jsx
React functional component (default export) - Landing page for Ecos Infra Institute
Tailwind CSS classes used (requires Tailwind configured in your project)
Usage: place this file in your React app (e.g. src/components/) and import where needed.
This component is self-contained and uses placeholder images and icons via inline SVG.
Replace image URLs, links, and text as needed.
*/

import React from 'react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">{children}</span>
);

export default function EcosInfraLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
      {/* NAV */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-900 rounded-md flex items-center justify-center text-white font-bold">EII</div>
          <div>
            <h1 className="text-lg font-semibold">Ecos Infra Institute</h1>
            <p className="text-xs text-slate-500">Capacity building & PPP expertise</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
          <a href="#services" className="hover:text-blue-900">Services</a>
          <a href="#courses" className="hover:text-blue-900">Courses</a>
          <a href="#why" className="hover:text-blue-900">Why Us</a>
          <a href="#clients" className="hover:text-blue-900">Clients</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-blue-900 text-white">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-md border border-slate-200">Menu</button>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Badge>APMG Accredited</Badge>
          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">Building capacity for successful PPP projects across Africa & beyond</h2>
          <p className="mt-4 text-slate-600 max-w-xl">We offer world-class capacity building, advisory and implementation support for Public-Private Partnership (PPP) projects, backed by APMG accreditation and hands-on practitioner experience across Africa and the Middle East.</p>

          <div className="mt-6 flex gap-4">
            <a href="#courses" className="inline-block px-6 py-3 rounded-md bg-blue-900 text-white font-medium shadow-md">Explore Courses</a>
            <a href="#contact" className="inline-block px-6 py-3 rounded-md border border-blue-900 text-blue-900 font-medium">Get In Touch</a>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
            <li>• Accredited CP3P Certification Program</li>
            <li>• Consultancy & Advisory Services</li>
            <li>• PPP Maturity Assessments</li>
            <li>• Tailored capacity-building workshops</li>
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="infrastructure" className="w-full h-80 object-cover" />
          </div>
          <div className="mt-4 text-xs text-slate-500">Ecos Infra Institute — capacity building, advisory and PPP implementation support.</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <p className="mt-2 text-slate-600 max-w-2xl">We support stakeholders at every stage of the PPP lifecycle — from project identification and appraisal to contract management and operations.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Capacity Building" desc="Interactive CP3P courses, knowledge cafes and tailored workshops with post-course support." icon={bookIcon} />
            <ServiceCard title="PPPs Advisory" desc="End-to-end advisory from project set-up through financial close and implementation." icon={briefcaseIcon} />
            <ServiceCard title="Maturity Assessments" desc="PPPs maturity assessments that strengthen institutional capacity and governance." icon={chartIcon} />
            <ServiceCard title="Contract & Construction Management" desc="Practical support on contract drafting, tendering, supervision and handback." icon={toolsIcon} />
          </div>
        </div>
      </section>

      {/* MISSION & VALUE PROPOSITION */}
      <section id="why" className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold">Mission & Value Proposition</h3>
          <p className="mt-4 text-slate-600">Our mission is to improve the success rate of African PPP projects through quality capacity building, practical know-how and advisory services. We provide measurable, sustainable and client-centred solutions that deliver value for money and increase project delivery maturity.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard title="Mission" content="To improve the success rate of African Public Private Partnership projects through offering quality capacity building and advisory services." />
            <InfoCard title="Vision" content="To become the paramount agent of PPP project implementation capacity growth in Africa and the developing world." />
            <InfoCard title="Values" content="Service excellence, integrity, innovation, continual improvement, and collaboration." />
            <InfoCard title="Benefits" content="Improved PPP maturity, access to accredited courses, expert facilitators and post-course support." />
          </div>
        </div>

        <aside className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h4 className="font-semibold">Why Clients Choose Us</h4>
          <ul className="mt-4 text-slate-600 space-y-2 text-sm">
            <li>• Accredited, practical and tailored training</li>
            <li>• Twelve months post-course support</li>
            <li>• Experienced facilitators with regional expertise</li>
            <li>• Objective reviews and measurable impact</li>
          </ul>
        </aside>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold">CP3P Accreditation & Courses</h3>
          <p className="mt-2 text-slate-600">Our flagship CP3P certification covers Foundation, Preparation and Execution levels — designed to equip participants with competencies needed to deliver PPPs successfully.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard level="Foundation" bullets={["PPP Introduction & Overview","Establishing a PPP Framework","Project Identification"]} />
            <CourseCard level="Preparation" bullets={["Appraising PPP Projects","Structuring Tender and Contract","Tendering & Awarding"]} />
            <CourseCard level="Execution" bullets={["Strategy Delivery","Operations & Handback","Commissioning"]} />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Our Clients & Partners</h3>
        <p className="mt-2 text-slate-600">We have collaborated with public and private sector organisations to raise PPP capacity across the region.</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          <ClientLogo name="Kenya Industrial Research" />
          <ClientLogo name="Government Agencies" />
          <ClientLogo name="Development Partners" />
          <ClientLogo name="Private Corporates" />
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold">Ecos Infra Institute</h4>
            <p className="mt-2 text-sm text-blue-100">Block D, South C, Popo Road, P.O Box 18941-00100 Nairobi - Kenya</p>
            <p className="mt-2 text-sm text-blue-100">institute@ecosinfragroup.com</p>
            <p className="mt-2 text-sm text-blue-100">www.ecosinfragroup.com</p>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm text-blue-100">
              <li>• Courses</li>
              <li>• Services</li>
              <li>• Assessments</li>
              <li>• Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Contact Us</h5>
            <form className="mt-3 grid gap-3">
              <input className="px-3 py-2 rounded-md text-slate-900" placeholder="Name" />
              <input className="px-3 py-2 rounded-md text-slate-900" placeholder="Email" />
              <textarea className="px-3 py-2 rounded-md text-slate-900" placeholder="Message" rows={3}></textarea>
              <button className="mt-2 px-4 py-2 rounded-md bg-white text-blue-900 font-medium">Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-blue-200 text-sm">© {new Date().getFullYear()} Ecos Infra Institute — All rights reserved.</div>
      </footer>
    </div>
  );
}

/* ---------- Helper components and icons ---------- */

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="p-5 border rounded-lg bg-white shadow-sm">
      <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-md bg-blue-50 text-blue-700">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function InfoCard({ title, content }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h5 className="font-semibold">{title}</h5>
      <p className="mt-2 text-sm text-slate-600">{content}</p>
    </div>
  );
}

function CourseCard({ level, bullets = [] }) {
  return (
    <div className="p-5 border rounded-lg bg-white shadow-sm">
      <h4 className="font-semibold">{level}</h4>
      <ul className="mt-3 text-sm text-slate-600 space-y-2">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <div className="mt-4">
        <a className="inline-block px-4 py-2 rounded-md border border-blue-900 text-blue-900 text-sm">Learn more</a>
      </div>
    </div>
  );
}

function ClientLogo({ name }) {
  return (
    <div className="p-4 border rounded-lg flex items-center justify-center bg-white text-sm">{name}</div>
  );
}

/* Simple SVG icons (kept minimal so no external dependencies needed) */
const bookIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6.5A2.5 2.5 0 015.5 4h11A2.5 2.5 0 0119 6.5V19a.5.5 0 01-.5.5H5A2.5 2.5 0 013 17V6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const briefcaseIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const chartIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 14v-4M12 16v-8M17 10v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const toolsIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
