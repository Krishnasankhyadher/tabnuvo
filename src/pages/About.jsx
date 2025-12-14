import React, { useEffect, useRef } from 'react';
import { animate, useInView } from "framer-motion";
import Hero from '../components/Hero.jsx';
import ServicesSection from '../components/Services.jsx';
import TeamSection from '../components/Team.jsx';
import Navbar from '../components/Navbar.jsx';

const aboutImages = [
    "/assets/about-1.jpg",
    "/assets/about-2.jpg",
    "/assets/about-3.jpg",
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
        <section id="about" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-12">
                {/* BIG IMAGE + HEADING SIDE */}
                <div className="lg:col-span-7">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                        <span className="block">IPSUM</span>
                        GENERATORS
                    </h2>

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

                {/* TEXT SIDE – pushed to LOWER side */}
                <div className="lg:col-span-5 flex lg:items-end">
                    <div className="text-gray-800 space-y-4 text-sm sm:text-base">
                        <p>
                            Let’s get acquainted! We’re not your average digital marketing agency – we’re a team of passionate individuals who eat, sleep, and breathe creativity, innovation, and all things digital. At Zynex Solutions, we’re on a mission to make your online dreams come true, one pixel at a time! We’re a bunch of tech-savvy wizards, design enthusiasts, and social media mavens who believe that digital marketing should be fun exciting, and downright awesome.
                        </p>
                        <p>
                            We take a strategic approach, focusing on measurable outcomes. Our team is dedicated to providing top-notch services that help your business grow and thrive in the digital landscape.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- STATS BAR (FIXED) --- */}
            <div className="w-full bg-[#cfe7df] rounded-md py-8 px-4 mt-14">
                {/* Changed to grid-cols-2 on mobile so text fits better */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-black text-center">

                    {/* Item 1 */}
                    <div className="py-2">
                        <p className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                            {/* Faster duration (1s) for small numbers so it feels snappy */}
                            <Counter from={0} to={10} duration={1} />+
                        </p>
                        <span className="text-xs md:text-sm text-gray-900 block mt-2 font-medium">
                            Years in business
                        </span>
                    </div>

                    {/* Item 2 */}
                    <div className="py-2">
                        <p className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                            <Counter from={0} to={200} duration={2} />+
                        </p>
                        <span className="text-xs md:text-sm text-gray-700 block mt-2 font-medium">
                            Successful Projects
                        </span>
                    </div>

                    {/* Item 3 */}
                    <div className="py-2">
                        <p className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                            <Counter from={0} to={99} duration={2} />%
                        </p>
                        <span className="text-xs md:text-sm text-gray-700 block mt-2 font-medium">
                            Happy Clients
                        </span>
                    </div>

                    {/* Item 4 */}
                    <div className="py-2">
                        <p className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                            <Counter from={0} to={20} duration={1.2} />+
                        </p>
                        <span className="text-xs md:text-sm text-gray-700 block mt-2 font-medium">
                            Award Winning
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}

const About = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main>
                <Navbar />
                <Hero
                    bgImage="/assets/contact.png"
                    overlayImage="/assets/about.png"
                />
                <AboutSection />
                <ServicesSection />
                <TeamSection />
            </main>
        </div>
    )
}

export default About;