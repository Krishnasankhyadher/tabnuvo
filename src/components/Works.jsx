// GallerySection.jsx
import React from "react";

const cards = [
  {
    type: "title",
    label: "DIVINE BITE",
    year: "2022",
  },
  {
    type: "image",
    img: "/assets/ai.jpg",
    alt: "AI chip",
    label: "DIVINE BITE",
    year: "2022",
  },
  {
    type: "image",
    img: "/assets/robot.jpg",
    alt: "Robot",
    label: "DIVINE BITE",
    year: "2022",
  },
  {
    type: "image",
    img: "/assets/waterfall.jpg",
    alt: "Waterfall",
    label: "DIVINE BITE",
    year: "2022",
  },
  {
    type: "image",
    img: "/assets/space-nebula.jpg",
    alt: "Nebula",
    label: "DIVINE BITE",
    year: "2022",
  },
  {
    type: "image",
    img: "/assets/Astronaut.jpg",
    alt: "Astronaut",
    label: "DIVINE BITE",
    year: "2022",
  },
];

const GallerySection = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-10">
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col gap-1">
            {/* Top: image / title card */}
            {card.type === "title" ? (
              <div className="rounded-2xl overflow-hidden bg-emerald-900  flex items-center justify-center h-40 md:h-62">
                <div className="text-center text-white">
                  <p className="text-xl md:text-2xl font-bold tracking-wide">
                    IPSUM
                  </p>
                  <p className="text-xl md:text-2xl font-bold tracking-wide">
                    GENERATORS
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden bg-gray-200 h-40 md:h-62">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Bottom: text strip */}
            <div className="flex justify-between text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] mt-1">
              <span>{card.label}</span>
              <span>{card.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
