// TeamSection.jsx
import React from "react";

const team = [
  { img: "/assets/team-1.jpg", alt: "Founder" },
  { img: "/assets/team-2.jpg", alt: "Team member 1" },
  { img: "/assets/team-3.jpg", alt: "Team member 2" },
  { img: "/assets/team-4.jpg", alt: "Team member 3" },
  { img: "/assets/team-5.jpg", alt: "Team member 4" },
  { img: "/assets/team-5.jpg", alt: "Team member 5" },
];

const TeamSection = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-10">
      {/* Heading */}
      <div className="mb-6">
        <p className="text-3xl font-semibold text-[#2f6c5f]">Our team</p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          IPSUM
          <br />
          GENERATORS
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {team.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl bg-gray-200 aspect-square"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
