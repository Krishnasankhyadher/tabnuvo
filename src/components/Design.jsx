import React from "react";

const PostingSection = ({ images, heading, text }) => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE COLLAGE */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden h-44 md:h-56">
                <img
                  src={images[0]}
                  alt="collage-1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden h-28 md:h-32">
                <img
                  src={images[2]}
                  alt="collage-3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden h-28 md:h-32">
                <img
                  src={images[1]}
                  alt="collage-2"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden h-44 md:h-56">
                <img
                  src={images[3]}
                  alt="collage-4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="w-full">
          <h2 className="text-3xl font-extrabold tracking-wide mb-6">
            {heading}
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 max-w-[full]">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostingSection;
