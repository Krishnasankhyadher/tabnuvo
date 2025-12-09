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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnRoute = () => setOpen(false);
    window.addEventListener("popstate", closeOnRoute);
    return () => window.removeEventListener("popstate", closeOnRoute);
  }, []);

  return (
    <header
      className={`w-full bg-white z-40 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
      role="banner"
    >
      {/* Desktop + large container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Larger height */}
        <div className="flex items-center justify-between h-22">
          
          {/* Left Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/assets/main.png" 
              alt="Logo"
              className="h-16 w-auto" 
            />
          </a>

          {/* Center Menu */}
          <nav className="hidden md:flex flex-1 justify-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-semibold text-gray-800 hover:text-green-700 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <a
            href="/contact"
            className="hidden md:flex items-center text-xl text-orange-500 font-medium hover:text-orange-700 transition"
          >
            Get in touch
            <svg
              className="ml-2 w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 md:hidden"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 ${
            open ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        ></div>

        {/* Slide Panel */}
        <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-lg p-6 overflow-auto">
          <div className="flex items-center justify-between mb-8">
            <a href="/" className="flex items-center">
              <img src="/assets/main.png" alt="Logo" className="h-12 w-auto" />
            </a>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-5">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="block text-gray-800 font-medium text-lg py-2 border-b border-gray-100"
              >
                {it.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="/contact"
              className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold transition"
            >
              Get in touch
              <svg
                className="ml-2 w-4 h-4"
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
          </nav>
        </div>
      </div>
    </header>
  );
}
