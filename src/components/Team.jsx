import React from "react";

const team = [
  { 
    name: "Alex Morgan", 
    role: "Founder & CEO", 
    img: "/assets/team-1.jpg", 
    alt: "Founder" 
  },
  { 
    name: "Sarah Jenkins", 
    role: "Creative Director", 
    img: "/assets/team-2.jpg", 
    alt: "Team member 1" 
  },
  { 
    name: "Michael Chen", 
    role: "Lead Developer", 
    img: "/assets/team-3.jpg", 
    alt: "Team member 2" 
  },
  { 
    name: "Jessica Wu", 
    role: "Marketing Head", 
    img: "/assets/team-4.jpg", 
    alt: "Team member 3" 
  },
  { 
    name: "David Miller", 
    role: "UI/UX Designer", 
    img: "/assets/team-5.jpg", 
    alt: "Team member 4" 
  },
  { 
    name: "Emily Ross", 
    role: "Project Manager", 
    img: "/assets/team-5.jpg", 
    alt: "Team member 5" 
  },
];

const TeamSection = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-16">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-xl sm:text-2xl font-bold text-[#2f6c5f] mb-2">Our team</p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
          MEET THE <br /> CREATORS
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {team.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] md:aspect-square cursor-pointer shadow-sm md:hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
            />

            {/* OVERLAY WRAPPER 
                Mobile: Always visible (opacity-100), dark gradient at bottom.
                Desktop: Hidden initially (md:opacity-0), green full overlay, reveals on hover.
            */}
            <div className="absolute inset-0 flex flex-col transition-all duration-300
                            justify-end p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100
                            md:justify-center md:items-center md:bg-[#2f6c5f]/95 md:from-transparent md:to-transparent md:opacity-0 md:group-hover:opacity-100">
              
              {/* Text Container */}
              <div className="transform transition-transform duration-300 
                              translate-y-0 text-left
                              md:translate-y-4 md:group-hover:translate-y-0 md:text-center">
                
                <h3 className="text-white text-lg md:text-2xl font-bold tracking-wide leading-tight">
                  {item.name}
                </h3>
                
                <p className="text-gray-200 md:text-white/90 text-xs md:text-sm font-medium mt-1 uppercase tracking-wider">
                  {item.role}
                </p>
              </div>

              {/* Decorative Line (Desktop Only) */}
              <div className="hidden md:block w-0 group-hover:w-12 h-1 bg-white mt-4 transition-all duration-500 delay-100 rounded-full"></div>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;