import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Loader2 } from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const GallerySection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/works`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch works", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-[#2f6c5f]">
        <Loader2 size={40} className="animate-spin mb-4" />
        <p className="text-gray-600 font-medium">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {projects.length === 0 ? (
          <div className="col-span-1 md:col-span-2 text-left py-20 text-gray-500">
            No projects available yet.
          </div>
        ) : (
          projects.map((project) => {
            let imageUrl = "/assets/ai.jpg"; // fallback
            if (project.mainImage) {
              if (typeof project.mainImage === 'object' && project.mainImage.url) {
                imageUrl = project.mainImage.url;
              } else if (typeof project.mainImage === 'string') {
                imageUrl = project.mainImage.startsWith('http')
                  ? project.mainImage
                  : `${API}/${project.mainImage}`;
              }
            }

            return (
              <Link
                key={project._id}
                to={`/work/${project.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                  <img
                    src={imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#2f6c5f] shadow-sm">
                    {project.category || "General"}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
                    <Calendar size={14} />
                    <span>{project.year || new Date(project.createdAt).getFullYear()}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#2f6c5f] transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {project.subtitle}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2f6c5f] group-hover:gap-3 transition-all">
                      View Project <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })
        )}
      </div>
    </section>
  );
};

export default GallerySection;