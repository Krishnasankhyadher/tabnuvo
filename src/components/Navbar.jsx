import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // optional, remove if not using react-router

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: "About us", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
  ];

  // small effect to optionally add shadow/border when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change (if using react-router, otherwise ignore)
  useEffect(() => {
    const closeOnRoute = () => setOpen(false);
    window.addEventListener("popstate", closeOnRoute);
    return () => window.removeEventListener("popstate", closeOnRoute);
  }, []);

  return (
    <header
      className={`w-full bg-white z-40 ${scrolled ? "shadow-sm" : ""}`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            {/* Replace src with your logo file or inline svg */}
            <a href="/" aria-label="Homepage" className="inline-flex items-center">
              <img
                src="/assets/main.png"
                alt="Logo"
                className="h-8 w-auto sm:h-10"
              />
            </a>
          </div>

          {/* Center: nav links (hidden on small screens) */}
          <nav
            className="hidden md:flex md:space-x-8 md:items-center md:justify-center flex-1"
            aria-label="Primary"
          >
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-800 hover:text-gray-900 relative px-1 py-2"
                >
                  <span>{item.label}</span>
                  {/* blue underline on hover */}
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-blue-500 scale-x-0 transform transition-transform duration-200 origin-left group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </nav>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* CTA Button (hidden on xs, shows on sm+) */}
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-transparent bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            >
              <span>Get in touch</span>
              {/* arrow */}
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Mobile hamburger (visible on md-) */}
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
      </div>

     

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 ${open ? "opacity-100" : "opacity-0"} transition-opacity`}
        ></div>

        {/* panel */}
        <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-lg p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <a href="/" className="inline-flex items-center">
              <img src="/assets/main.png" alt="logo" className="h-8 w-auto" />
            </a>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-4" aria-label="Mobile primary">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="block text-gray-800 font-medium text-lg py-3 border-b border-gray-100"
              >
                {it.label}
              </a>
            ))}

            <a
              href="/contact"
              className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600"
            >
              Get in touch
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}