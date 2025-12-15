import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About us", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
  ];

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
      role="banner"
    >
      {/* MAIN NAV */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/assets/main.png"
              alt="Logo"
              className="h-11 w-auto object-contain ml-3.5"
            />
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex flex-1 justify-center space-x-14">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-semibold text-gray-700 hover:text-green-700 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-orange-500 border-2 border-transparent hover:bg-orange-500 hover:border-orange-500 hover:text-white transition"
          >
            Get in touch
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">

          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* DRAWER */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 overflow-y-auto">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-10">
              <img src="/assets/main.png" alt="Logo" className="h-12 w-auto" />

              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* LINKS */}
            <nav className="space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-xl font-medium text-gray-800 hover:text-orange-500 transition"
                >
                  {item.label}
                </a>
              ))}

              {/* CTA */}
              <div className="pt-6 border-t border-gray-100">
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                >
                  Get in touch
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
