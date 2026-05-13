import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Animation Library
import Hero from "../components/Hero";
import { Plus } from 'lucide-react';
import Contact from "../components/Contact";
import BlogsSection from "../components/Blogsection";
import Navbar from "../components/Navbar";


// --- ASSETS & DATA ---
const aboutImages = [
  "/assets1/Compressed images/About us big image1.jpg",
  "/assets1/Compressed images/About us big image2.jpg",
  "/assets1/Compressed images/about us3.jpg",
];



const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    icon: "/assets1/Icons/Services Page/web-ads.png",
    description: "Tired of hopping on trends and failing to trend? Let's create your cult. Finding what your audience wants and delivering it will get you clients."
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    icon: "/assets1/Icons/Services Page/strategy.png",
    description: "Not every 1st spot is the same. Getting you at the right position, on the right search page, with the right people."
  },
  {
    id: 3,
    title: "Website Design & Development",
    icon: "/assets1/Icons/Services Page/website.png",
    description: "Your digital shop needs to stand out. We build websites that are clear, fast, and built to perform."
  },
  {
    id: 4,
    title: "Google Ads",
    icon: "/assets1/Icons/Services Page/online-store.png",
    description: "Make your ad budget an investment, not spend! Ad accounts are like children—tell them what to do with the money, and they'll do the right thing."
  }
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } }
};

// =================== ABOUT SECTION ===================

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

      <section id="about" className="w-full px-6 md:px-12 lg:px-20 py-16 lg:py-24 overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-12">

          {/* BIG IMAGE SIDE */}
          <div className="lg:col-span-7">
            {/* BIG image block */}
            <div className="mt-6 max-w-xl">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[320px] md:h-[360px]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={aboutImages[0]}
                  alt="about image 1"
                  className="col-span-1 row-span-2 w-full h-full object-cover rounded-lg shadow-sm"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={aboutImages[1]}
                  alt="about image 2"
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={aboutImages[2]}
                  alt="about image 3"
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="lg:col-span-5 flex lg:items-center">
            <motion.div
              className="text-gray-800 space-y-4 text-sm sm:text-base"
              variants={fadeInUp}
            >
              <p className="text-lg sm:text-3xl font-bold text-[#2f6c5f] mb-2">
                About us
              </p>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                <span className="block">DIGITAL</span>
                MAVERICKS
              </h2>

              <p>
                Born with a vision to innovate and simplify design, we do not create design to get an &quot;Awe&quot; on the first look. We design to get an &quot;Awesome&quot; on every use.
              </p>

              <p>
                Every curve is meaningful, every line creates an impact and every button placement is meant to be clicked on the first look.
              </p>

              <p className="font-semibold text-[#2f6c5f]">
                We are not designers, We are Design Innovators.
              </p>

              <a href="/about" className="inline-block group">
                <h1 className="mt-4 text-xl font-bold relative inline-block">
                  About us
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#2f6c5f] transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

// =================== WORK SECTION ===================

function WorkCard({ item, align }) {
  const heightMap = {
    tall: "h-80 md:h-96",
    small: "h-64 md:h-72",
    medium: "h-72 md:h-80",
    wide: "h-56 md:h-64",
  };

  const isWide = item.variant === "wide";
  const justifyClass = isWide
    ? "justify-center"
    : (align === "right" ? "justify-end" : "justify-start");

  const handleClick = () => {
    window.location.href = `/work/${item.slug}`;
  };

  return (
    <div className={`flex w-full ${justifyClass}`}>
      <motion.article
        initial="rest"
        whileHover="hover"
        variants={scaleOnHover}
        onClick={handleClick}
        className={`relative overflow-hidden rounded-xl bg-white flex-1 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer ${isWide ? "max-w-full" : "max-w-sm md:max-w-md"} w-full`}
      >
        <div className={`${heightMap[item.variant]} w-full overflow-hidden`}>
          <motion.img
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.6 }}
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* ANIMATED ARROW BUTTON - NOW ON ALL CARDS */}
          <motion.button
            variants={{
              rest: { backgroundColor: "rgba(255, 255, 255, 0.9)", rotate: 0 },
              hover: { backgroundColor: "#2f6c5f", color: "#fff", rotate: 45 }
            }}
            className="absolute right-4 top-4 h-12 w-12 rounded-full flex items-center justify-center shadow-md z-10 transition-colors"
          >
            <span className="text-xl">↗</span>
          </motion.button>
        </div>

        {/* TEXT BAR */}
        <div className="flex items-center justify-between text-[10px] md:text-xs px-4 py-3 bg-white z-20 relative">
          <span className="font-bold tracking-wide uppercase">{item.title}</span>
          <span className="font-medium text-gray-500">{item.year}</span>
        </div>
      </motion.article>
    </div>
  );
}

function WorkSection() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${API}/api/works`)
      .then(res => res.json())
      .then(data => {
        // limit to first 4 for the homepage layout
        const sequence = ["tall", "small", "medium", "wide"];

        const mappedData = data.slice(0, 4).map((proj, idx) => {
          let imageUrl = "/assets/ai.jpg";
          if (proj.mainImage) {
            if (typeof proj.mainImage === 'object' && proj.mainImage.url) {
              imageUrl = proj.mainImage.url;
            } else if (typeof proj.mainImage === 'string') {
              imageUrl = proj.mainImage.startsWith('http')
                ? proj.mainImage
                : `${API}/${proj.mainImage}`;
            }
          }
          return {
            id: proj._id,
            title: proj.title,
            year: proj.year || new Date(proj.createdAt).getFullYear(),
            img: imageUrl,
            slug: proj.slug,
            variant: sequence[idx % sequence.length]
          };
        });

        setWorks(mappedData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="work" className="bg-[#CCE0DB] py-20">
      <div className="w-full px-6 md:px-12 lg:px-20">

        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <p className="text-lg sm:text-3xl font-bold text-[#2f6c5f] mb-2">Our Canvases</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            <span className="block">OUR</span>
            WORK
          </h2>
        </motion.div>

        {/* STAGGERED CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-col space-y-6 md:space-y-10"
        >
          {works.map((item, index) => (
            <motion.div key={item.id} variants={fadeInUp}>
              <WorkCard item={item} align={index % 2 === 0 ? "right" : "left"} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-left"
        >
          <button onClick={() => window.location.href = '/work'} className="text-lg md:text-xl font-semibold relative group">
            View all
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// =================== SERVICES SECTION ===================

function ServiceItem({ service, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 group hover:bg-gray-50 transition-colors px-2 cursor-pointer outline-none"
      >
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shrink-0"
          >
            <img src={service.icon} alt="" className="w-6 h-6 object-contain" />
          </motion.div>

          <span className={`text-sm md:text-lg lg:text-xl font-bold text-[#1a1a1a] text-left transition-colors duration-300 ${isOpen ? "text-[#2f6c5f]" : ""}`}>
            {service.title}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`text-[#2f6c5f]`}
        >
          <Plus strokeWidth={3} size={22} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-[4.5rem] pr-4 pb-6">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ServicesSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-10 text-left"
        >
          <p className="text-lg sm:text-3xl font-bold text-[#2f6c5f] mb-2">Services</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            <span className="block">WHAT ARE YOU</span>
            LOOKING FOR?
          </h2>
        </motion.div>

        <div className="border-t border-gray-200">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              toggle={() => handleToggle(service.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-left">
          <a href="/services" className="inline-block group">
            <button className="text-lg md:text-xl font-semibold relative">
              View all
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

// =================== HOME ===================

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <main>
          <Navbar />
          <Hero
            bgImage="/assets1/Compressed Banner/Home 1.png"
            overlayImage="/assets1/Overlay/home.png"
          />
          <AboutSection />
          <WorkSection />
          <ServicesSection />
          <Contact />
          <BlogsSection />
        </main>
      </div>
    </motion.div>
  );
}