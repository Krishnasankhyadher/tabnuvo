import React from "react";
import { useNavigate } from "react-router-dom";

const BlogRowCard = ({ blog }) => {
  const navigate = useNavigate();
  const { _id, title, image } = blog;

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg border border-gray-200 overflow-hidden bg-white cursor-pointer
                 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Mobile: column (image top, text bottom)
          Desktop (md+): row (text left, image right) */}
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Image */}
        <div className="w-full md:w-78 lg:w-100 h-40 sm:h-44 md:h-40 lg:h-48 overflow-hidden order-1 md:order-2">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 px-4 py-3 md:px-6 md:py-6 flex items-center order-2 md:order-1">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const BlogsSection = ({ blogs = [] }) => {
  const navigate = useNavigate();
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
          {topBlogs.map((blog) => (
            <BlogRowCard key={blog._id} blog={blog} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/blogs")}
            className="text-sm sm:text-base font-semibold text-gray-900 
                       hover:opacity-100 hover:font-bold hover:text-lg  hover:underline transition-opacity"
          >
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
