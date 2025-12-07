// ServicesSection.jsx
import React from "react";

const services = [
  {
    title: "Skills",
    text: "Picture us as a well-oiled machine, experts at propelling brands to new heights through digital marketing.",
    icon: "/assets/skills-icon.png",
  },
  {
    title: "Innovation",
    text: "Picture us as a well-oiled machine, experts at propelling brands to new heights through digital marketing.",
    icon: "/assets/innovation-icon.png",
  },
  {
    title: "Custom solutions",
    text: "Picture us as a well-oiled machine, experts at propelling brands to new heights through digital marketing.",
    icon: "/assets/custom-icon.png",
  },
  {
    title: "Results Driven",
    text: "Picture us as a well-oiled machine, experts at propelling brands to new heights through digital marketing. With a blend of skills, experience, and expertise, we’ve got what it takes to make it happen.",
    icon: "/assets/results-icon.png",
  },
  {
    title: "Customer centricity",
    text: "Picture us as a well-oiled machine, experts at propelling brands to new heights through digital marketing.",
    icon: "/assets/customer-icon.png",
  },
  {
    title: "Collaborative Approach",
    text: "Picture us as a well-oiled machine, experts at propelling brands to new heights through digital marketing. With a blend of skills, experience, and expertise, we’ve got what it takes to make it happen.",
    icon: "/assets/collab-icon.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32"> 
      {services.map((item, index) => (
        <div
          key={item.title}
          className={`flex gap-6 pb-6 items-start ${
            index !== services.length - 1
              ? "mb-6 border-b border-gray-300"
              : ""
          }`}
        >
          {/* Circle Image */}
          <div className="flex-shrink-0">
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 rounded-full object-contain"
            />
          </div>

          {/* Text Section */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-2 text-left">
              {item.title}
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 text-left">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
