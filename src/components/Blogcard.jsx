import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blogcard = ({ blog }) => {
  const navigate = useNavigate();
  const { title, image, _id, slug } = blog;   // object destructuring

  return (
    <div
      onClick={() => navigate(`/blog/${slug}`)}  // use navigate, not useNavigate
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <img src={image} alt={title || "no image"} className="aspect-video" />
      <div className="p-5">
        <h1 className="mb-2 font-lg text-gray-900">{title}</h1>
      </div>
    </div>
  );
};

export default Blogcard;
