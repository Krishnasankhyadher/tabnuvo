import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

/* ================= BLOG ROW CARD ================= */
const BlogRowCard = ({ blog }) => {
  if (!blog) return null;

  const navigate = useNavigate();
  const { _id, title, mainImage } = blog;

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg border border-gray-200 overflow-hidden bg-white cursor-pointer
                 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex flex-col md:flex-row items-stretch">

        {/* IMAGE */}
        <div className="w-full md:w-78 lg:w-100 h-40 sm:h-44 md:h-40 lg:h-48 overflow-hidden order-1 md:order-2">
          {mainImage?.url && (
            <img
              src={mainImage.url}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* TEXT */}
        <div className="flex-1 px-4 py-3 md:px-6 md:py-6 flex items-center order-2 md:order-1">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-snug">
            {title}
          </h3>
        </div>

      </div>
    </div>
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
        Loading blogs...
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-6">
          <p className="text-xs sm:text-sm font-semibold text-[#2f6c5f]">
            Blogs
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#111827]">
            IPSUM <br /> GENERATORS
          </h2>
        </div>

        {/* Blog list */}
        <div className="space-y-4">
          {topBlogs.map(blog => (
            <BlogRowCard key={blog._id} blog={blog} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/blogs")}
            className="text-sm sm:text-base font-semibold hover:underline"
          >
            View all
          </button>
        </div>

      </div>
    </section>
  );
};

export default BlogsSection;
