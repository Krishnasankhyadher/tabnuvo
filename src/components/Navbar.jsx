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
      className={`w-full bg-white z-40 transition-shadow relative top-0 left-0 ${
        scrolled ? "shadow-md" : ""
      }`}
      role="banner"
    >
      {/* Container: Wide layout to spread content */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between h-24">
          
          {/* Left Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img 
              src="/assets/main.png" 
              alt="Logo"
              className="h-13 w-auto object-contain " 
            />
          </a>

          {/* Center Menu: Spaced out */}
          <nav className="hidden md:flex flex-1 justify-center space-x-16">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xl  font-bold text-gray-700 hover:text-green-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA - CUSTOM STYLING */}
          {/* 1. border-transparent: Invisible border initially (prevents layout jump on hover)
             2. bg-transparent: No background initially
             3. hover:bg-orange-500: Becomes a button on hover
             4. hover:scale-110: Increases size on hover
          */}
          <a
            href="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-lg font-semibold text-orange-500 border-2 border-transparent transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:scale-110"
          >
            Get in touch
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
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
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        className={`md:hidden relative inset-0 z-50 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300`}
        ></div>

        <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-10">
            <a href="/" className="flex items-center">
              <img src="/assets/main.png" alt="Logo" className="h-12 w-auto" />
            </a>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-6">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="block text-xl font-medium text-gray-800 hover:text-orange-500 transition-colors"
              >
                {it.label}
              </a>
            ))}

            <div className="pt-6 border-t border-gray-100">
              <a
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-3 rounded-lg border-2 border-orange-500 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300"
              >
                Get in touch
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}