import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  ExternalLink,
  Cpu,
  Zap,
  Layers,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const WorkDetailPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/works/slug/${slug}`)
      .then(res => res.json())
      .then(data => {
        setProject(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching work details:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Navbar />
        <Loader2 size={40} className="animate-spin text-green-600 mt-20" />
      </div>
    );
  }

  if (!project || project.msg) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-32">
          <h2 className="text-3xl font-bold">Project Not Found</h2>
          <Link to="/work" className="mt-4 text-green-600 hover:underline">
            Back to Works
          </Link>
        </div>
      </div>
    );
  }

  let imageUrl = "";
  if (project.mainImage) {
    if (typeof project.mainImage === 'object' && project.mainImage.url) {
      imageUrl = project.mainImage.url;
    } else if (typeof project.mainImage === 'string') {
      imageUrl = project.mainImage.startsWith('http')
        ? project.mainImage
        : `${API_BASE}/${project.mainImage}`;
    }
  }

  return (
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[75vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-16 pb-20 max-w-screen-2xl mx-auto">
           <Link 
             to="/work" 
             className="text-white/70 hover:text-white flex items-center gap-2 mb-8 transition-colors w-fit text-sm font-medium tracking-wide"
           >
              <ArrowLeft size={18} /> BACK TO ALL WORKS
           </Link>
           
           <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
             {project.category}
           </span>
           
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
             {project.title}
           </h1>
           
           {project.subtitle && (
             <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed">
               {project.subtitle}
             </p>
           )}
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT SIDEBAR: Project Details (Sticky) */}
          <aside className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32 space-y-12">
              
              {/* Metadata Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 border-b border-gray-100 pb-8 lg:border-none lg:pb-0">
                {project.client && (
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Client</h3>
                    <p className="text-xl font-medium text-gray-900">{project.client}</p>
                  </div>
                )}
                {project.year && (
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Year</h3>
                    <p className="text-xl font-medium text-gray-900">{project.year}</p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Project Type</h3>
                    <p className="text-xl font-medium text-gray-900">{project.role}</p>
                  </div>
                )}
              </div>

              {/* Technologies */}
              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}



            </div>
          </aside>

          {/* RIGHT MAIN: The Case Study Story */}
          <main className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-p:text-gray-600 prose-p:leading-8 prose-p:font-light
              prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:italic
            ">
              
              {project.challengeText && (
                <>
                  <h2 className="text-3xl md:text-4xl mt-0">The Challenge</h2>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    {project.challengeText}
                  </p>
                </>
              )}

              {project.cards && project.cards.length > 0 && (
                <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.cards.map((card, idx) => {
                    if (!card.title) return null;
                    const icons = [
                      <Zap key="zap" className="text-green-600 mb-4" size={32} />, 
                      <Cpu key="cpu" className="text-green-600 mb-4" size={32} />, 
                      <Layers key="layers" className="text-green-600 mb-4" size={32} />
                    ];
                    return (
                      <div key={idx} className="p-6 bg-green-50 rounded-2xl border border-green-100 transition-colors hover:bg-green-100/50">
                        {icons[idx % 3]}
                        <h4 className="font-bold text-lg mb-2 text-green-900">{card.title}</h4>
                        <p className="text-sm text-green-800/80 leading-relaxed">{card.description}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {project.solutionText && (
                <>
                  <h2>Our Solution</h2>
                  <p>
                    {project.solutionText}
                  </p>
                </>
              )}
              
              {project.solutionQuote && (
                <blockquote>
                  {project.solutionQuote}
                </blockquote>
              )}
            </div>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-20">
                 <h3 className="text-2xl font-bold mb-8">Visual Gallery</h3>
                 <div className="grid grid-cols-1 gap-8">
                    {project.gallery.map((img, index) => {
                       let gImg = typeof img === 'string' ? img : img.url;
                       if (gImg && !gImg.startsWith("http")) gImg = `${API_BASE}/${gImg}`;
                       return (
                         <div key={index} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <img 
                              src={gImg} 
                              alt={`Project view ${index + 1}`} 
                              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                         </div>
                       )
                    })}
                 </div>
              </div>
            )}
          </main>

        </div>
      </div>

      {/* --- FOOTER NAV --- */}
      <div className="bg-gray-50 border-t border-gray-200 py-24 px-6">
         <div className="max-w-screen-xl mx-auto flex flex-col items-start text-left">
            <p className="text-gray-400 uppercase tracking-[0.2em] text-sm mb-6">Explore More</p>
            <Link to="/work" className="group text-xl md:text-3xl font-bold text-gray-900 inline-flex items-center gap-6 hover:text-green-800 transition-colors">
               View All Projects 
               <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform duration-300" />
            </Link>
         </div>
      </div>

    </div>
       </motion.div>
  );
};

export default WorkDetailPage;