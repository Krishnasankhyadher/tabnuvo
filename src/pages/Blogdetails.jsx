import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  User 
} from "lucide-react";
import { motion } from "framer-motion";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API}/api/blogs/${id}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);
  
  // --- LOADING SKELETON (WIDER) ---
  if (loading) {
    return (
    

      <div className="min-h-screen bg-white">
        <Navbar />
        {/* Changed max-w-3xl to max-w-6xl here too */}
   
        <div className="max-w-6xl mx-auto px-6 py-12 animate-pulse">
          <div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>
          <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-8"></div>
          <div className="w-full h-80 sm:h-[500px] bg-gray-200 rounded-2xl mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  // --- ERROR STATE ---
  if (!blog || error) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Blog Post Not Found</h2>
            <Link to="/blogs" className="text-[#2f6c5f] underline">Back to Blogs</Link>
          </div>
        </div>
      </div>
    );
  }
  
  // --- DATA ---
  const { title, category, postedDate, content, mainImage } = blog;
  
  let imageUrl = null;
  if (mainImage) {
    if (typeof mainImage === 'object' && mainImage.url) imageUrl = mainImage.url;
    else if (typeof mainImage === 'string') {
      imageUrl = mainImage.startsWith('http') ? mainImage : `${API}/${mainImage}`;
    }
  }
  
  const wordCount = content ? content.replace(/<[^>]+>/g, '').split(" ").length : 0;
  const readTime = Math.ceil(wordCount / 200);
  
  const formattedDate = postedDate
  ? new Date(postedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
  : "Date unavailable";
  
  return (
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero bgImage="/assets/contact.png" overlayImage="/assets/blg.png" />

      {/* UPDATED: Changed max-w-4xl to max-w-6xl
        This makes the content area significantly wider.
      */}
      <article className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
        
       

        {/* HEADER */}
        <header className="mb-10">
          {category && (
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#2f6c5f] uppercase bg-[#2f6c5f]/10 rounded-full">
              {category}
            </span>
          )}
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                  <User size={14} />
               </div>
               <span className="font-medium text-gray-700">Admin</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Calendar size={16} /> {formattedDate}
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> {readTime} min read
            </div>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        {imageUrl && (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-sm mb-12 bg-gray-100">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* CONTENT BODY */}
        <div className="max-w-none mx-auto">
          <div
            className="
            prose prose-lg prose-slate max-w-none 
            text-lg leading-relaxed text-gray-800
            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-6
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4
              [&>p]:mb-6 [&>p]:leading-8
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#2f6c5f] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:text-gray-600 [&>blockquote]:my-8
              [&>img]:rounded-xl [&>img]:shadow-md [&>img]:my-8 [&>img]:w-full
              [&>a]:text-[#2f6c5f] [&>a]:underline hover:[&>a]:text-[#24544a]
              "
              dangerouslySetInnerHTML={{ __html: content }}
              />
        </div>

        {/* FOOTER */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-medium text-gray-900 italic">Thanks for reading!</p>
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title, url: window.location.href }).catch(console.error);
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Share2 size={16} /> Share article
            </button>
          </div>
        </div>
         {/* BACK LINK */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-lg font-medium text-gray-500 hover:text-[#2f6c5f] transition-colors mb-8 group"
          >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to all posts
        </Link>

      </article>
    </div>
                  </motion.div>
  );
};

export default BlogDetailPage;