import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

/* ================= ANIMATION VARIANTS ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

/* ================= BLOG ROW CARD ================= */
const BlogRowCard = ({ blog }) => {
  if (!blog) return null;

  const navigate = useNavigate();
  const { title, mainImage,slug } = blog;

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      onClick={() => navigate(`/blog/${slug}`)}
      className="w-full rounded-lg border border-gray-200 overflow-hidden bg-white cursor-pointer shadow-sm relative"
    >
      <motion.div 
        className="flex flex-col md:flex-row items-stretch"
        variants={{
          rest: { y: 0 },
          hover: { y: -4 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >

        {/* IMAGE */}
        <div className="w-full md:w-78 lg:w-100 h-40 sm:h-44 md:h-40 lg:h-48 overflow-hidden order-1 md:order-2 relative">
          {mainImage?.url && (
            <>
              <motion.img
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={mainImage.url}
                alt={title}
                className="w-full h-full object-cover"
              />
              {/* Overlay on hover */}
              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 0.1 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-[#2f6c5f]"
              />
            </>
          )}
          
          {/* Arrow button appears on hover */}
          <motion.div
            variants={{
              rest: { opacity: 0, scale: 0.8, rotate: 0 },
              hover: { opacity: 1, scale: 1, rotate: 45 }
            }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 top-4 h-10 w-10 rounded-full bg-[#2f6c5f] flex items-center justify-center shadow-lg z-10"
          >
            <span className="text-white text-lg">↗</span>
          </motion.div>
        </div>

        {/* TEXT */}
        <div className="flex-1 px-4 py-3 md:px-6 md:py-6 flex items-center order-2 md:order-1">
          <motion.h3 
            variants={{
              rest: { color: "#111827" },
              hover: { color: "#2f6c5f" }
            }}
            transition={{ duration: 0.3 }}
            className="text-base sm:text-lg md:text-xl font-semibold leading-snug"
          >
            {title}
          </motion.h3>
        </div>

      </motion.div>

      {/* Enhanced shadow on hover */}
      <motion.div
        variants={{
          rest: { boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)" },
          hover: { boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-lg pointer-events-none"
      />
    </motion.div>
  );
};

/* ================= BLOGS SECTION ================= */
const BlogsSection = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("📡 Fetching blogs...");

    fetch(`${API}/api/blogs`)
      .then(res => res.json())
      .then(data => {
        console.log("✅ Blog API data:", data);
        setBlogs(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error("❌ Blog fetch failed:", err);
        setBlogs([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center text-gray-500">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading blogs...
        </motion.div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className="py-16 text-center text-gray-500">
        No blogs found
      </section>
    );
  }

  const topBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-white py-16">
      <div className="w-full px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-6"
        >
          <p className="text-lg sm:text-3xl font-bold text-[#2f6c5f] mb-2">
            Blogs
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block">Stay updated</span>
            with us!
          </h2>
        </motion.div>

        {/* Blog list with stagger animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {topBlogs.map((blog, idx) => (
            <BlogRowCard key={blog.slug || blog._id || idx} blog={blog} />
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-left"
        >
          <button
            onClick={() => navigate("/blogs")}
            className="text-lg md:text-xl font-semibold relative group"
          >
            View all
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogsSection;