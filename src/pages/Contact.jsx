// src/pages/Contact.jsx
import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const API_BASE = import.meta.env.VITE_API_URL;

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); 
  // { type: 'success' | 'error', text: string }

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
        body: JSON.stringify({
          name,
          email,
          phone,
          comment,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setMessage({
          type: "error",
          text: (data && data.message) || `Server error (${res.status})`,
        });
      } else {
        setMessage({
          type: "success",
          text: (data && data.message) || "Enquiry sent successfully!",
        });
        setName("");
        setEmail("");
        setPhone("");
        setComment("");
      }
    } catch (err) {
      console.error("Submit failed:", err);
      setMessage({
        type: "error",
        text: "Network or server error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-12 bg-white">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">

        {/* LEFT: Addresses */}
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

        {/* RIGHT: Enquiry Form */}
        <div className="md:w-1/2">
          <h3 className="text-lg md:text-xl font-bold mb-4 tracking-wide">
            INQUIRY FORM
          </h3>

          <div className="bg-[#d7e6dc] rounded-md p-6 md:p-7 shadow-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 border border-gray-400 bg-white text-sm md:text-base"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-400 bg-white text-sm md:text-base"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-gray-400 bg-white text-sm md:text-base"
              />

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                placeholder="Your Query"
                className="w-full px-3 py-2 border border-gray-400 bg-white resize-none text-sm md:text-base"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-2 font-semibold bg-green-800 text-white hover:bg-green-900 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {message && (
                <div
                  className={`text-sm mt-2 ${
                    message.type === "success"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {message.text}
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero1 = () => {
  return (
    <div
      className="w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url('/assets/back.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <h1 className="relative text-black text-2xl md:text-4xl font-bold text-center">
        START YOUR CAREER WITH Tabnuvo
      </h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero bgImage="/assets/contact.png" overlayImage="/assets/get.png" />
      <ContactSection />
      <Hero1 />
    </div>
  );
};

export default Contact;
