import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  ExternalLink,
  Cpu,
  Zap,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

const WorkDetailPage = () => {
  
  // --- SINGLE SOURCE OF TRUTH (Hardcoded Data) ---
  const project = {
    title: "Divine Bite AI Chip",
    subtitle: "Redefining edge computing with biomimetic architecture and neural processing.",
    category: "Hardware Engineering",
    client: "TechNova Inc.",
    year: "2023",
    role: "Lead Architect",
    techStack: ["Verilog", "Python", "TensorFlow", "C++"],
    mainImage: "/assets/ai.jpg", 
    // You can add more images here for the gallery
    gallery: [
      "/assets/robot.jpg",
      "/assets/waterfall.jpg" 
    ],
  };

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
      {/* Full width immersive header */}
      <div className="relative w-full h-[75vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
        <img 
          src={project.mainImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
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
           
           <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed">
             {project.subtitle}
           </p>
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
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Client</h3>
                  <p className="text-xl font-medium text-gray-900">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Year</h3>
                  <p className="text-xl font-medium text-gray-900">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">My Role</h3>
                  <p className="text-xl font-medium text-gray-900">{project.role}</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                 <button className="flex items-center justify-center w-full gap-3 bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-800 transition-all duration-300">
                    Visit Live Project <ExternalLink size={18} />
                 </button>
                 <button 
                   onClick={() => alert("Link copied!")}
                   className="flex items-center justify-center w-full gap-3 bg-white border-2 border-gray-100 text-gray-600 py-4 px-6 rounded-xl font-semibold hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
                 >
                    Share <Share2 size={18} />
                 </button>
              </div>

            </div>
          </aside>

          {/* RIGHT MAIN: The Case Study Story */}
          <main className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-p:text-gray-600 prose-p:leading-8 prose-p:font-light
              prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:italic
            ">
              
              <h2 className="text-3xl md:text-4xl mt-0">The Challenge</h2>
              <p className="text-xl text-gray-800 leading-relaxed">
                In the rapidly evolving landscape of artificial intelligence, processing speed and energy efficiency are paramount. TechNova approached us with a significant bottleneck: their existing hardware could not keep up with the demands of their latest neural network models without significant thermal throttling.
              </p>
<div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="p-6 bg-green-50 rounded-2xl border border-green-100 transition-colors hover:bg-green-100/50">
    <Zap className="text-green-600 mb-4" size={32} />
    <h4 className="font-bold text-lg mb-2 text-green-900">Energy Efficient</h4>
    <p className="text-sm text-green-800/80 leading-relaxed">Reduced power consumption by 25% compared to market standards.</p>
  </div>

  {/* Card 2 */}
  <div className="p-6 bg-green-50 rounded-2xl border border-green-100 transition-colors hover:bg-green-100/50">
    <Cpu className="text-green-600 mb-4" size={32} />
    <h4 className="font-bold text-lg mb-2 text-green-900">40% Faster</h4>
    <p className="text-sm text-green-800/80 leading-relaxed">Optimized tensor cores for specific matrix multiplication.</p>
  </div>

  {/* Card 3 */}
  <div className="p-6 bg-green-50 rounded-2xl border border-green-100 transition-colors hover:bg-green-100/50">
    <Layers className="text-green-600 mb-4" size={32} />
    <h4 className="font-bold text-lg mb-2 text-green-900">3nm Process</h4>
    <p className="text-sm text-green-800/80 leading-relaxed">Utilizing the latest fabrication nodes for density.</p>
  </div>
</div>

              <h2>Our Solution</h2>
              <p>
                We developed the "Divine Bite" architecture—a revolutionary approach to silicon design. By shifting focus from raw clock speed to intelligent data flow, we minimized latency. We implemented a <strong>biomimetic heat dissipation structure</strong> that allows the chip to sustain peak performance for 3x longer than competitors.
              </p>
              <blockquote>
                "The Divine Bite chip isn't just an upgrade; it's a paradigm shift in how we approach edge computing in remote environments."
              </blockquote>
              <p>
                The final delivery included a scalable modular design allowing for easy integration into server farms or mobile devices, solving the client's bottleneck and opening new revenue streams.
              </p>
            </div>

            {/* Gallery Section */}
            <div className="mt-20">
               <h3 className="text-2xl font-bold mb-8">Visual Gallery</h3>
               <div className="grid grid-cols-1 gap-8">
                  {project.gallery.map((img, index) => (
                     <div key={index} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <img 
                          src={img} 
                          alt={`Project view ${index + 1}`} 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                  ))}
               </div>
            </div>
          </main>

        </div>
      </div>

      {/* --- FOOTER NAV --- */}
      <div className="bg-gray-50 border-t border-gray-200 py-24 px-6">
         <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
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