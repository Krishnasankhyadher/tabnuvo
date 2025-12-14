import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { ArrowRight, Calendar } from "lucide-react";

// Static Data for your Work/Projects
const projects = [
  {
    id: "divine-bite-ai",
    title: "Divine Bite AI Chip",
    category: "Technology",
    year: "2022",
    img: "/assets/ai.jpg",
    description: "An advanced AI chip architecture designed for next-gen processing.",
  },
  {
    id: "divine-bite-robot",
    title: "Autonomous Robot",
    category: "Robotics",
    year: "2022",
    img: "/assets/robot.jpg",
    description: "Self-learning robotics system for automated manufacturing.",
  },
  {
    id: "nature-waterfall",
    title: "Fluid Dynamics",
    category: "Simulation",
    year: "2023",
    img: "/assets/waterfall.jpg",
    description: "Real-time water physics simulation using particle systems.",
  },
  {
    id: "space-nebula",
    title: "Nebula Explorer",
    category: "VR Experience",
    year: "2023",
    img: "/assets/space-nebula.jpg",
    description: "Virtual reality journey through deep space nebulas.",
  },
  {
    id: "astronaut-suit",
    title: "Mars Suit Design",
    category: "Design",
    year: "2024",
    img: "/assets/Astronaut.jpg",
    description: "Ergonomic and life-support integrated suit design for Mars colonization.",
  },
];

const GallerySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Grid Layout - Matches Blog Page (1 col mobile, 2 col desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/work/${project.id}`} // Navigates to detail page
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Category Badge (Optional, matches Blog style) */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#2f6c5f] shadow-sm">
                {project.category}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex-1 flex flex-col">
              {/* Year / Metadata */}
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
                <Calendar size={14} />
                <span>{project.year}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#2f6c5f] transition-colors">
                {project.title}
              </h2>

              {/* Description (Optional - remove if you only want title) */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>

              {/* Footer / CTA */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2f6c5f] group-hover:gap-3 transition-all">
                  View Project <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
    </section>
  );
};

export default GallerySection;