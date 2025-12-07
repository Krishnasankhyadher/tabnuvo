
import React from "react";
import Hero from '../components/Hero';

const ContactSection = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-12 bg-white">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* LEFT: Contact addresses */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg md:text-xl font-bold mb-4 tracking-wide">
            CONTACT US IN
          </h3>

          <div className="mb-6">
            <p className="font-semibold text-sm md:text-base mb-1">Address</p>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              419–424, 4th Floor, JMD Megapolis, Sector 48, Sohna Road,
              Gurgaon, Haryana – 122018
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm md:text-base mb-1">Address</p>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              104/1E Mahavirn Lane, Prayagraj, Uttar Pradesh – 211003
            </p>
          </div>
        </div>

        {/* RIGHT: Inquiry Form */}
        <div className="md:w-1/2">
          <h3 className="text-lg md:text-xl font-bold mb-4 tracking-wide">
            INQUIRY FORM
          </h3>

          <div className="bg-[#d7e6dc] rounded-md p-6 md:p-7 shadow-sm">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full text-sm md:text-base px-3 py-2 border border-gray-400 rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full text-sm md:text-base px-3 py-2 border border-gray-400 rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <textarea
                rows="4"
                placeholder="Comment"
                className="w-full text-sm md:text-base px-3 py-2 border border-gray-400 rounded-sm bg-white resize-none focus:outline-none focus:ring-1 focus:ring-gray-500"
              />

              <button
                type="submit"
                className="w-full mt-2 py-2 md:py-2.5 text-sm md:text-base font-semibold bg-green-800 text-white rounded-sm hover:bg-green-900 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
const Hero1 = ({ bgImage, text }) => {
  return (
    <div
      className="w-full h-[300px] md:h-[400px] flex justify-center items-center bg-cover bg-center relative mb-15 "
      style={{ backgroundImage: `url(${'/assets/back.jpg'})` }}
    >
      {/* Overlay (optional if you want slight dim) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text */}
      <h1 className="relative text-black text-2xl md:text-4xl font-bold text-center">
        {"START YOUR CAREER WITH Tabnuvo"}
      </h1>
    </div>
  );
};




const Contact = () => {
  return (
    <div>
        <Hero
         bgImage="/assets/contact.png"
         overlayImage="/assets/get.png"/>
        <ContactSection/>
        <Hero1/>
        
      
    </div>
  )
}

export default Contact
