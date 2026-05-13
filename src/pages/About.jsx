import React, { useEffect, useRef } from 'react';
import { animate, useInView } from "framer-motion";
import Hero from '../components/Hero.jsx';
import ServicesSection from '../components/Services.jsx';
import TeamSection from '../components/Team.jsx';
import Navbar from '../components/Navbar.jsx';
import { motion } from 'framer-motion';

const aboutImages = [
    "/assets1/Compressed images/About us big image1.jpg",
    "/assets1/Compressed images/About us big image2.jpg",
    "/assets1/Compressed images/about us3.jpg",
];

// --- COUNTER COMPONENT ---
const Counter = ({ from = 0, to, duration = 1.5 }) => {
    const nodeRef = useRef(null);
    // Trigger as soon as the element touches the viewport
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        const node = nodeRef.current;

        if (isInView && node) {
            const controls = animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (value) => {
                    node.textContent = value.toFixed(0);
                },
            });

            return () => controls.stop();
        }
    }, [from, to, duration, isInView]);

    // Initial render shows 'from' value to prevent empty flash
    return <span ref={nodeRef}>{from}</span>;
};

function AboutSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >

            <section id="about" className="w-full px-6 md:px-12 lg:px-20 py-16 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-12">
                    {/* BIG IMAGE SIDE */}
                    <div className="lg:col-span-7">
                        {/* BIG image block */}
                        <div className="mt-6 max-w-xl">
                            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[320px] md:h-[360px]">
                                {/* tall image */}
                                <img
                                    src={aboutImages[0]}
                                    alt="about image 1"
                                    className="col-span-1 row-span-2 w-full h-full object-cover rounded-lg shadow-sm"
                                />
                                {/* top-right small */}
                                <img
                                    src={aboutImages[1]}
                                    alt="about image 2"
                                    className="w-full h-full object-cover rounded-lg shadow-sm"
                                />
                                {/* bottom-right small */}
                                <img
                                    src={aboutImages[2]}
                                    alt="about image 3"
                                    className="w-full h-full object-cover rounded-lg shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TEXT SIDE */}
                    <div className="lg:col-span-5 flex lg:items-center">
                        <div className="text-gray-800 space-y-4 text-sm sm:text-base">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                                <span className="block">DESIGN</span>
                                INNOVATORS
                            </h2>
                            <p>
                                In the era of &quot;AI can create anything&quot;, we focus on the human touch of imperfectly perfect. We are design innovators.
                            </p>
                            <p>
                                We make people turn their heads on the streets for a banner! We make people scroll up again! We make them click the button we want! We make their stay a little longer!
                            </p>
                            <p className="font-semibold text-[#2f6c5f]">
                                We are the artists, We are the OGs. We are the New Tab for your business.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- STATS BAR (FIXED) --- */}
                <div className="w-full bg-[#cfe7df] rounded-md py-8 px-4 mt-14">
                    {/* Changed to grid-cols-2 on mobile so text fits better */}
                    <div className="w-full px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-black text-left">

                        {/* Item 1 */}
                        <div className="py-2">
                            <p className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                                <Counter from={0} to={3} duration={1} />+
                            </p>
                            <span className="text-xs md:text-sm text-gray-900 block mt-2 font-medium">
                                Years in business
                            </span>
                        </div>

                        {/* Item 2 */}
                        <div className="py-2">
                            <p className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                                <Counter from={0} to={70} duration={2} />+
                            </p>
                            <span className="text-xs md:text-sm text-gray-700 block mt-2 font-medium">
                                Projects
                            </span>
                        </div>

                        {/* Item 3 */}
                        <div className="py-2">
                            <p className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                                <Counter from={0} to={98} duration={2} />%
                            </p>
                            <span className="text-xs md:text-sm text-gray-700 block mt-2 font-medium">
                                Happy Clients
                            </span>
                        </div>

                    </div>
                </div>
            </section>
        </motion.div>
    );
}

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >

            <div className="min-h-screen bg-white text-gray-900">
                <main>
                    <Navbar />
                    <Hero
                        bgImage="/assets1/Compressed Banner/About Us.png"
                        overlayImage="/assets1/Overlay/about us.png"
                    />
                    <AboutSection />
                    <ServicesSection />
                    <TeamSection />
                </main>
            </div>
        </motion.div>
    )
}

export default About;