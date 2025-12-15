import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_URL;

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const validate = () => {
    if (!name.trim() || !email.trim() || !comment.trim()) {
      setMessage({ type: "error", text: "Name, email and query are required." });
      return false;
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, comment }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setMessage({
          type: "error",
          text: data?.message || `Server error (${res.status})`,
        });
      } else {
        setMessage({
          type: "success",
          text: data?.message || "Enquiry sent successfully!",
        });
        setName("");
        setEmail("");
        setPhone("");
        setComment("");
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: "Network or server error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <section className="w-full px-4 sm:px-6 md:px-16 lg:px-32 py-12 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">

          {/* ENQUIRY FORM */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h3 className="text-lg md:text-xl font-bold mb-4 tracking-wide">
              INQUIRY FORM
            </h3>

            <div className="bg-[#d7e6dc] rounded-xl p-5 sm:p-6 md:p-7 shadow-sm w-full">
              <form className="space-y-4" onSubmit={handleSubmit}>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border border-gray-400 bg-white rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-700/30"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-400 bg-white rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-700/30"
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border border-gray-400 bg-white rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-700/30"
                />

                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows="4"
                  placeholder="Your Query"
                  className="w-full px-3 py-2 border border-gray-400 bg-white rounded-md resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-700/30"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 font-semibold bg-green-800 text-white rounded-md hover:bg-green-900 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send"}
                </button>

                {message && (
                  <p
                    className={`text-sm mt-2 ${
                      message.type === "success"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {message.text}
                  </p>
                )}

              </form>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-lg md:text-xl font-bold mb-6 tracking-wide">
              CONTACT US IN
            </h3>

            <div className="mb-8 border-l-2 border-black pl-4">
              <p className="font-semibold text-sm md:text-base mb-1">Address</p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                419–424, 4th Floor, JMD Megapolis, Sector 48, Sohna Road,
                Gurgaon, Haryana – 122018
              </p>
            </div>

            <div className="border-l-2 border-black pl-4">
              <p className="font-semibold text-sm md:text-base mb-1">Address</p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                104/1E Mahavirn Lane, Prayagraj, Uttar Pradesh – 211003
              </p>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

const HeroBottom = () => {
  return (
    <div
      className="w-full h-[260px] md:h-[380px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url('/assets/back.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <h1 className="relative text-black text-2xl md:text-4xl font-bold text-center px-4">
        START YOUR CAREER WITH Tabnuvo
      </h1>
    </div>
  );
};

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <Hero bgImage="/assets/contact.png" overlayImage="/assets/get.png" />
        <ContactSection />
        <HeroBottom />
      </div>
    </motion.div>
  );
};

export default Contact;
