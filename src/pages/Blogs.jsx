// src/pages/BlogsPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { blog_data } from "../../public/as1";
import Navbar from "../components/Navbar";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { _id, title, image } = blog;

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm
                 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      {/* Image */}
      <div className="w-full h-40 sm:h-44 md:h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="px-3 sm:px-4 py-3">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Optional heading – remove if you don't want it */}
       

        {/* Grid of blogs */}
        <section className="grid gap-6 sm:gap-8 sm:grid-cols-2">
          {blog_data.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default BlogsPage;
