import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Calendar, ArrowRight, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blogs", err);
        setBlogs([]);
        setLoading(false);
      });
  }, []);

  return (
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <Hero bgImage="/assets/contact.png" overlayImage="/assets/blg.png" />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        
        {/* --- LOADING SKELETON --- */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-8 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- BLOG GRID (2x2 Style) --- */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogs.map((blog) => {
              // Robust Image Handling
              let imageUrl = null;
              if (blog.mainImage) {
                if (typeof blog.mainImage === 'object' && blog.mainImage.url) {
                  imageUrl = blog.mainImage.url;
                } else if (typeof blog.mainImage === 'string') {
                  imageUrl = blog.mainImage.startsWith('http') ? blog.mainImage : `${API}/${blog.mainImage}`;
                }
              }

              const formattedDate = blog.postedDate 
                ? new Date(blog.postedDate).toLocaleDateString("en-IN", { month: 'short', day: 'numeric', year: 'numeric' })
                : null;
                
              return (
                <Link
                key={blog._id}
                to={`/blog/${blog.url || blog._id}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image Container - Taller for 2-col layout */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                    {imageUrl ? (
                      <img
                      src={imageUrl}
                      alt={blog.title}
                        className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon size={48} className="opacity-20 mb-2" />
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    {blog.category && (
                      <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#2f6c5f] shadow-sm">
                        {blog.category}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
                      <Calendar size={14} />
                      <span>{formattedDate || "Recent"}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#2f6c5f] transition-colors">
                      {blog.title}
                    </h2>

                    {/* Optional: Snippet preview if you have it, otherwise just spacing */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2f6c5f] group-hover:gap-3 transition-all">
                        Read Full Story <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
              </motion.div>
  );
};

export default Blogs;