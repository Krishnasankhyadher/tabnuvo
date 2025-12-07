import React from "react";

const SocialMediaCard = ({ icon, title, description }) => {
  return (
    <div className="relative bg-[#CCE0DB] rounded-[24px] px-10 pt-14 pb-10 shadow-sm">
      {/* circular icon overlapping top edge */}
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-18 h-18 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-center font-semibold text-lg md:text-xl mb-3">
        {title}
      </h3>
      <p className="text-center text-sm md:text-[15px] leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
};

const SocialMediaMagic = ({ sectionTitle, items }) => {
  // items: array of 6 objects -> { icon, title, description }
  const [first, second, third, fourth, fifth, sixth] = items;

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* main heading */}
        <h2 className="text-xl md:text-2xl font-bold mb-12 uppercase tracking-wider text-gray-800">
          {sectionTitle}
        </h2>

        {/* ROW 1: single wide card */}
        <div className="w-full mb-8">
          <SocialMediaCard
            icon={first.icon}
            title={first.title}
            description={first.description}
          />
        </div>

        {/* ROW 2: two cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <SocialMediaCard
            icon={second.icon}
            title={second.title}
            description={second.description}
          />
          <SocialMediaCard
            icon={third.icon}
            title={third.title}
            description={third.description}
          />
        </div>

        {/* ROW 3: three cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <SocialMediaCard
            icon={fourth.icon}
            title={fourth.title}
            description={fourth.description}
          />
          <SocialMediaCard
            icon={fifth.icon}
            title={fifth.title}
            description={fifth.description}
          />
          <SocialMediaCard
            icon={sixth.icon}
            title={sixth.title}
            description={sixth.description}
          />
        </div>
      </div>
    </section>
  );
};
export default SocialMediaMagic;
