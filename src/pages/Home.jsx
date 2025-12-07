import React,{useState} from "react";
import Hero from "../components/Hero"; // existing component
import {  Plus, X } from 'lucide-react';
import Contact from "../components/Contact";
// if these are in public/assets -> keep as is
const aboutImages = [
  "/assets/about-1.jpg",
  "/assets/about-2.jpg",
  "/assets/about-3.jpg",
];

const workItems = [
  { id: 1, title: "DIVINE SITE", year: 2022, img: "/assets/work-1.jpg", variant: "tall" },
  { id: 2, title: "DIVINE SITE", year: 2022, img: "/assets/work-2.jpg", variant: "small" },
  { id: 3, title: "DIVINE SITE", year: 2023, img: "/assets/work-3.jpg", variant: "medium" },
  { id: 4, title: "DIVINE SITE", year: 2022, img: "/assets/work-4.jpg", variant: "wide" },
];
// ==================== SERVICES DATA ====================
const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    icon: "/assets/services-1.jpg", // Placeholder icon
    description: "We build your brand voice and engage with your audience across all major social platforms to drive growth."
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    icon: "/assets/services-2.jpg",
    description: "Improve your visibility on Google with our data-driven SEO strategies that target the right keywords."
  },
  {
    id: 3,
    title: "Website Design & Development",
    icon: "/assets/services-3.jpg",
    description: "Custom, responsive, and high-converting websites designed to tell your brand story effectively."
  },
  {
    id: 4,
    title: "Google Ads",
    icon: "/assets/services-4.jpg",
    description: "Maximize your ROI with targeted PPC campaigns that put your business in front of ready-to-buy customers."
  }
];
// =================== ABOUT ===================

function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12">
        {/* BIG IMAGE + HEADING SIDE */}
        <div className="lg:col-span-7">
          <p className="text-lg sm:text-3xl font-bold text-[#2f6c5f] mb-2">
            About us
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            <span className="block">IPSUM</span>
            
              GENERATORS
          
          </h2>

          {/* BIG image block */}
          <div className="mt-6 max-w-xl">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h: 320px md:h-[360px]">
              {/* tall image */}
              <img
                src={aboutImages[0]}
                alt="about image 1"
                className="col-span-1 row-span-2 w-full h-full object-cover rounded-lg shadow-sm"
              />
              {/* top-right small */}
              <img
                src={aboutImages[1]}
                alt="about image 2"
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
              {/* bottom-right small */}
              <img
                src={aboutImages[2]}
                alt="about image 3"
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* TEXT SIDE – pushed to LOWER side */}
        <div className="lg:col-span-5 flex lg:items-end">
          <div className="text-gray-800 space-y-4 text-sm sm:text-base">
            <p>
              Let&apos;s get acquainted! We&apos;re not your average digital
              marketing agency — we&apos;re a team of passionate individuals who
              eat, sleep, and breathe creativity, innovation, and all things
              digital. At Zynex Solutions, we&apos;re on a mission to make your
              online dreams come true, one pixel at a time.
            </p>

            <p>
              We&apos;re a bunch of tech-savvy wizards, design enthusiasts, and
              social media mavens who believe that digital marketing should be
              fun, exciting, and downright awesome. We take a strategic
              approach, focusing on measurable outcomes — traffic, conversions,
              and growth.
            </p>
            <a
              href="/about"
             
            >


            <h1 className="mt-4 inline-block text-2xl font-semibold underline">
              About us
            </h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// =================== WORK ===================

function WorkCard({ item, align }) {
  const base = "relative overflow-hidden rounded-xl bg-white flex-1 transition-shadow hover:shadow-lg";
  
  // FIXED: Updated to valid Tailwind classes (h-62/h-63 don't exist by default)
  const heightMap = {
    tall: "h-80 md:h-96",    // Taller portrait
    small: "h-64 md:h-72",   // Standard landscape
    medium: "h-72 md:h-80",  // Medium portrait
    wide: "h-56 md:h-64",    // Wide banner
  };
  
  const isWide = item.variant === "wide";

  // Logic: If wide, center it. If not, align left or right.
  const justifyClass = isWide 
    ? "justify-center" 
    : (align === "right" ? "justify-end" : "justify-start");

  return (
    <div className={`flex w-full ${justifyClass}`}>
      <article
        className={`${base} ${isWide ? "max-w-full" : "max-w-sm md:max-w-md"} w-full`}
      >
        <div className={`${heightMap[item.variant]} w-full`}>
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          
          {/* arrow button only on first card */}
          {item.id === 1 && (
            <button className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/90 flex items-center justify-center shadow-md z-10">
              <span className="text-lg">↗</span>
            </button>
          )}
        </div>

        {/* bottom text bar tight to image */}
        <div className="flex items-center justify-between text-[10px] md:text-xs px-4 py-3 bg-white">
          <span className="font-bold tracking-wide uppercase">{item.title}</span>
          <span className="font-medium text-gray-500">{item.year}</span>
        </div>
      </article>
    </div>
  );
}

function WorkSection() {
  return (
    <section id="work" className="bg-[#CCE0DB] py-20">
      {/* FIXED: Removed horizontal padding on desktop (md:px-0) as requested */}
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        
        {/* heading */}
        <div className="mb-12">
          <p className="text-sm font-bold text-[#2f6c5f] uppercase tracking-wide mb-1">Work</p>
          {/* Added <br/> to match design layout */}
          <h3 className="text-4xl font-extrabold text-[#1a1a1a] leading-tight">
            IPSUM <br /> GENERATORS
          </h3>
        </div>

        {/* cards closer together, like in design */}
        <div className="flex flex-col space-y-6 md:space-y-10">
          <WorkCard item={workItems[0]} align="right" />
          <WorkCard item={workItems[1]} align="left" />
          <WorkCard item={workItems[2]} align="right" />
          <WorkCard item={workItems[3]} align="left" />
        </div>

        <div className="mt-12 text-center">
          <button className="text-sm font-bold border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ service, isOpen, toggle }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 group hover:bg-gray-50 transition-colors px-2"
      >
        <div className="flex items-center gap-4">
          {/* Icon Circle */}
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
            <img src={service.icon} alt="" className="w-6 h-6 object-contain" />
          </div>
          {/* Title – bigger on desktop */}
          <span
            className={`text-sm md:text-lg lg:text-xl font-bold text-[#1a1a1a] text-left ${
              isOpen ? "text-[#2f6c5f]" : ""
            }`}
          >
            {service.title}
          </span>
        </div>

        {/* Plus Icon */}
        <div
          className={`text-[#2f6c5f] transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus strokeWidth={3} size={22} />
        </div>
      </button>

      {/* Slide Down Content */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden min-h-0 pl-[4.5rem] pr-4">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-20">
      {/* wider container + left-aligned on desktop */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10 text-left">
          <p className="text-sm md:text-base font-bold text-[#2f6c5f] uppercase tracking-wide mb-1">
            Services
          </p>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight">
            IPSUM <br /> GENERATORS
          </h3>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-200">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              toggle={() => handleToggle(service.id)}
            />
          ))}
        </div>

        {/* View all – aligned left on desktop */}
        <div className="mt-12 text-left">
          <a href="/services">

          <button className="text-sm md:text-base font-bold border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity">
            View all
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}


// =================== HOME ===================

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <Hero
         bgImage="/assets/contact.png"
         overlayImage="/assets/text-1.png"
        />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <Contact />
      </main>
    </div>
  );
}
