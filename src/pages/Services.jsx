// Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FAQSection from "../components/Faq";

const serviceList = [
  {
    title: "Brand & Experience",
    desc: "We craft memorable brand identities and seamless experiences that connect with your audience at every touchpoint.",
    img: "/assets/main.png",
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
    img: "/assets/experience.jpg",
    links: [
      { label: "Website Development", path: "/website-development" },
      { label: "Software Development", path: "/software-development" },
    ],
  },
  {
    title: "E-Commerce & Content System",
    desc: "Scale your online store and streamline content workflows with systems that are easy to manage and grow.",
    img: "/assets/photography.jpg",
    links: [
      { label: "E-commerce Management", path: "/ecommerce-management" },
      { label: "Content Management", path: "/content-management" },
    ],
  },
  {
    title: "Digital Marketing",
    desc: "We drive traffic, leads, and growth through data-backed campaigns tailored to your brand and audience.",
    img: "/assets/ads.png",
    links: [
      { label: "Social Media Marketing", path: "/social-media-marketing" },
      { label: "Paid Ads", path: "/paid-ads" },
      { label: "Search Engine Optimisation", path: "/seo" },
    ],
  },
  {
    title: "Business Strategy",
    desc: "Align your brand, operations, and marketing with a clear strategy that supports long-term business growth.",
    img: "/assets/marketing.jpg",
    links: [{ label: "Business Consulting", path: "/business-consulting" }],
  },
];

const ServicesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 mb-10 space-y-12">
      {serviceList.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-gray-300"
        >
          {/* Image */}
          <div className="flex gap-4 md:col-span-2">
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-base text-gray-700 mt-2">{item.desc}</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col space-y-3 justify-start text-gray-900">
            {item.links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="font-bold hover:underline transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <Hero bgImage="/assets/contact.png" overlayImage="/assets/services.png" />
      <ServicesSection />
      <FAQSection />
    </div>
  );
};

export default Services;
