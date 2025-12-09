import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#e7f0ea] border-t border-black/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">

          {/* LOGO + TEXT */}
          <div>
            <img
              src="/assets/main.png"
              alt="logo"
              className="h-16 w-auto mb-4"
            />

             <p className="text-gray-800 text-[15px] leading-relaxed max-w-xs">
              Creating standout digital strategies to boost your brand and
              business success.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="Facebook">
                <img
                  src="/assets/icons/facebook.png"
                  alt="facebook"
                  className="h-6 w-6 hover:opacity-80 transition"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  src="/assets/icons/linkedin.png"
                  alt="linkedin"
                  className="h-6 w-6 hover:opacity-80 transition"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="/assets/icons/instagram.png"
                  alt="instagram"
                  className="h-6 w-6 hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[17px] font-semibold text-gray-900">
                Quick Links
              </h3>
              <img
                src="/assets/icons/target.png"
                alt=""
                className="h-8 w-8 mt-[1px]"
              />
            </div>

            <ul className="text-gray-800 text-[15px] space-y-1.5 list-disc list-inside">
              <li>
                <a href="/about" className="hover:underline hover:font-bold">
                  About Us
                </a>
              </li>
              <li>
                <a href="/work" className="hover:underline hover:font-bold">
                  Work
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline hover:font-bold">
                  Services
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:underline hover:font-bold">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline hover:font-bold">
                  Get in touch
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[17px] font-semibold text-gray-900">
                Contact
              </h3>
              <img
                src="/assets/icons/target.png"
                alt=""
                className="h-8 w-8 mt-[1px]"
              />
            </div>

            <ul className="text-gray-800 text-[15px] space-y-3">
              <li className="flex items-center gap-3">
                <img
                  src="/assets/icons/phone.png"
                  alt="phone"
                  className="h-5 w-5"
                />
                <span>+91 123456789</span>
              </li>

              <li className="flex items-center gap-3">
                <img
                  src="/assets/icons/mail.png"
                  alt="email"
                  className="h-5 w-5"
                />
                <span>info@tabnuvo.com</span>
              </li>

              <li className="flex gap-3">
                <img
                  src="/assets/icons/location.png"
                  alt="location"
                  className="h-5 w-5 mt-1"
                />
                <span>
                  419–424, 4th Floor, JMD Megapolis, Sector 48, Sohna Road,
                  Gurgaon, Haryana – 122018
                </span>
              </li>

              <li className="flex gap-3">
                <img
                  src="/assets/icons/location.png"
                  alt="location"
                  className="h-5 w-5 mt-1"
                />
                <span>
                  104/1E Mahaviran Lane, Prayagraj, Uttar Pradesh – 211003
                </span>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-[17px] font-semibold text-gray-900">
                Our Newsletter
              </h3>
              {/* target + quote mark like in ss */}
              <img
                src="/assets/icons/target.png"
                alt=""
                className="h-8 w-8 mt-[1px]"
              />
              <img
                src="/assets/icons/quote.png"
                alt=""
                className="h-8 w-8 mt-[1px] opacity-50"
              />
            </div>

            <p className="text-gray-800 text-[15px] mb-4 leading-relaxed">
              Sign up to Private’s weekly newsletter to get the latest updates.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] bg-white outline-none focus:border-gray-700"
              />

              <input
                type="text"
                placeholder="Query"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] bg-white outline-none focus:border-gray-700"
              />

              <button
                type="submit"
                className="w-full bg-[#0f4b27] text-white font-semibold py-2 rounded-md hover:bg-[#0b3a1e] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* COPYRIGHT ROW */}
        <div className="mt-10 text-center text-gray-600 text-[13px]">
          © {new Date().getFullYear()} Your Company • All rights reserved.
        </div>
      </div>
    </footer>
  );
}