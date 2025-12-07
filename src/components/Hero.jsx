import React from "react";

export default function Hero({ bgImage, overlayImage }) {
  return (
    <section
      className="relative w-full h-[350px] sm:h-[450px] md:h-[520px] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Foreground Overlay Image (scaled down) */}
      {overlayImage && (
        <img
          src={overlayImage}
          alt="hero overlay"
          className="
            relative z-10
            max-w-[220px] sm:max-w-[400px] md:max-w-[700px]
            w-full
            opacity-100
            pointer-events-none
          "
        />
      )}
    </section>
  );
}
