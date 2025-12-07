import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#e7f0ea] w-full py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + LEFT TEXT */}
        <div className="">
          {/* Replace logo path */}
          <img
            src="/assets/main.png"
            alt="logo"
            className="h-12 w-auto mb-4"
          />

          <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
            Creating standout digital strategies to boost your brand and
            business success.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="text-blue-700 text-xl hover:opacity-80">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-500 text-xl hover:opacity-80">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-pink-600 text-xl hover:opacity-80">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-xl">•</span> About Us
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">•</span> Work
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">•</span> Services
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">•</span> Blogs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">•</span> Get in touch
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>

          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex gap-3">
              <span className="text-xl">📞</span>
              +91 123456789
            </li>

            <li className="flex gap-3">
              <span className="text-xl">📧</span>
              info@tabnuvo.com
            </li>

            <li className="flex gap-3">
              <span className="text-xl">📍</span>
              419–424, 4th Floor, JMD Megapolis, Sector 48, Sohna Road,<br />
              Gurgaon, Haryana – 122018
            </li>

            <li className="flex gap-3">
              <span className="text-xl">📍</span>
              104/1E Mahaviran Lane, Prayagraj, Uttar Pradesh – 211003
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Our Newsletter
          </h3>

          <p className="text-gray-700 text-sm mb-4">
            Sign up to Private’s weekly newsletter to get the latest updates.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm"
            />

            <input
              type="text"
              placeholder="Query"
              className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm"
            />

            <button
              type="submit"
              className="w-full bg-green-900 text-white font-semibold py-2 rounded-md hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom small border or copyright (optional) */}
      <div className="mt-10 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Your Company • All rights reserved.
      </div>
    </footer>
  );
}
