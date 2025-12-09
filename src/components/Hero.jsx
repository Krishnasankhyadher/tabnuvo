import React from "react";

export default function Hero({ bgImage, overlayImage }) {
  return (
    <section
      className="
        relative w-full
        h-[550px]           /* bigger mobile height */
        sm:h-[650px]
        md:h-[780px]
        bg-center bg-cover
        flex items-center justify-center
      "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Foreground Overlay / Text Image */}
      {overlayImage && (
        <img
          src={overlayImage}
          alt="hero overlay"
          className="
            relative z-10
            max-w-[330px]      /* increased mobile size */
            sm:max-w-[450px]   /* tablet size */
            md:max-w-[820px]   /* desktop size */
            w-full
            opacity-100
            pointer-events-none
          "
        />
      )}
    </section>
  );
}
