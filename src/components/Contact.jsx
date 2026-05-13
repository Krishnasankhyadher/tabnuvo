import React from "react";

export default function Contactsection() {
  return (
    <section
      className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/contact.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 text-white h-full flex flex-col justify-between py-8">
        {/* Top: big heading */}
        <div className="flex-1 flex items-center justify-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-left">
            CONTACT US
          </h2>
        </div>

        {/* Bottom: line + text row + line */}
        <div className="mt-4">
          {/* top line */}
          <div className="border-t border-white/60" />

          {/* text row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3 text-sm sm:text-base">
            <p className="font-medium text-left">
              Let’s make big things happen
            </p>

            <a
              href="/contact"
              className="font-semibold tracking-wide flex flex-col items-center sm:items-end"
            >
              <span>Get in touch</span>
              <span className="mt-1 w-12 h-[2px] bg-white" />
            </a>
          </div>

          {/* bottom line */}
          <div className="border-b border-white/60" />
        </div>
      </div>
    </section>
  );
}
