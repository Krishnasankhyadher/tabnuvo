// Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FAQSection from "../components/Faq";
import Navbar from '../components/Navbar.jsx';
import { motion } from "framer-motion";
const serviceList = [
  {
    title: "Brand & Experience",
    desc: "We craft memorable brand identities and seamless experiences that connect with your audience at every touchpoint.",
    img: "/assets1/Icons/Services Page/brand-image.png",
    links: [
      { label: "Branding", path: "/branding" },
      { label: "Service Design", path: "/service-design" },
      { label: "Product Design", path: "/product-design" },
      { label: "UI/UX Design", path: "/ui-ux-design" },
    ],
  },
  {
    title: "Web & Software Development",
    desc: "From clean websites to robust software, we turn ideas into reliable digital products built for performance.",
    img: "/assets1/Icons/Services Page/website.png",
    links: [
      { label: "Website Development", path: "/website-development" },
      { label: "Software Development", path: "/software-development" },
    ],
  },
  {
    title: "E-Commerce & Content System",
    desc: "Scale your online store and streamline content workflows with systems that are easy to manage and grow.",
    img: "/assets1/Icons/Services Page/online-store.png",
    links: [
      { label: "E-commerce Management", path: "/ecommerce-management" },
      { label: "Content Management", path: "/content-management" },
    ],
  },
  {
    title: "Digital Marketing",
    desc: "We drive traffic, leads, and growth through data-backed campaigns tailored to your brand and audience.",
    img: "/assets1/Icons/Services Page/web-ads.png",
    links: [
      { label: "Social Media Marketing", path: "/social-media-marketing" },
      { label: "Paid Ads", path: "/paid-ads" },
      { label: "Search Engine Optimisation", path: "/seo" },
    ],
  },
  {
    title: "Business Strategy",
    desc: "Align your brand, operations, and marketing with a clear strategy that supports long-term business growth.",
    img: "/assets1/Icons/Services Page/strategy.png",
    links: [{ label: "Business Consulting", path: "/business-consulting" }],
  },
];

const ServicesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

      <div className="max-w-6xl mx-auto px-4 mt-10 mb-10">
        {/* MOBILE LAYOUT (like your screenshot) */}
        <div className="space-y-6 md:hidden">
          {serviceList.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-gray-300 pb-5 last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-1 text-xs text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-3 space-y-1">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.path}
                        className="block text-xs font-semibold text-gray-900"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP / TABLET LAYOUT (your original style) */}
        <div className="hidden md:block space-y-10">
          {serviceList.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pb-8 border-b border-gray-300 last:border-b-0"
            >
              {/* Left: image + text */}
              <div className="flex flex-col sm:flex-row gap-4 md:col-span-2 items-start">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-lg sm:text-lg text-gray-700 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Right: links */}
              <div className="mt-4 md:mt-0 flex flex-col space-y-2 justify-start text-gray-900 text-left">
                {item.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="font-bold hover:underline hover:tracking-wide transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

      <div>
        <Navbar />
        <Hero
                        bgImage="/assets1/background.png"
                        overlayImage="/assets1/Overlay/services.png"
                    />
        <ServicesSection />
        <FAQSection />
      </div>
    </motion.div>
  );
};

export default Services;
