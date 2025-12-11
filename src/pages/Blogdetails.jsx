import React from "react";
import { useParams, Link } from "react-router-dom";
import { blog_data } from "../../public/as1";
import Navbar from '../components/Navbar.jsx';

const BlogDetailPage = () => {
  const { id } = useParams();

  const blog = blog_data.find((b) => String(b._id) === String(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Blog not found</p>
          <Link
            to="/blogs"
            className="text-sm font-semibold text-[#2f6c5f] underline"
          >
            Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  const {
    title,
    subTitle,
    image,
    category,
    createdAt,
    description,
    bottomImage,
  } = blog;

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;

  return  (
    
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* FULL WIDTH TOP IMAGE */}
      <div className="w-full h-60 sm:h-72 md:h-96 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* FULL WIDTH ARTICLE BODY */}
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">

        {/* META */}
        <div className="text-xs sm:text-sm text-gray-500 mb-3 flex gap-2 flex-wrap">
          {category && (
            <span className="font-semibold uppercase tracking-wide text-[#2f6c5f]">
              {category}
            </span>
          )}
          {formattedDate && <span>• {formattedDate}</span>}
        </div>

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        {/* SUBTITLE */}
        {subTitle && (
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            {subTitle}
          </p>
        )}

        {/* DESCRIPTION (FULL WIDTH) */}
        <div
          className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* BOTTOM IMAGE FULL WIDTH */}
        <div className="mt-10 w-full h-56 sm:h-64 md:h-80 overflow-hidden">
          <img
            src={bottomImage || image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
