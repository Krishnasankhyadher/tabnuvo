import React from 'react'
import Hero from '../components/Hero.jsx'
import ServicesSection from '../components/Services.jsx';
import TeamSection from '../components/Team.jsx';
const aboutImages = [
    "/assets/about-1.jpg",
    "/assets/about-2.jpg",
    "/assets/about-3.jpg",
];
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
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 h: 320px md:h-[360px]">
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
                           Let’s get acquainted! We’re not your average digital marketing agency – we’re a team of passionate individuals who eat, sleep, and breathe creativity, innovation, and all things digital. At Zynex Solutions, we’re on a mission to make your online dreams come true, one pixel at a time! We’re a bunch of tech-savvy wizards, design enthusiasts, and social media mavens who believe that digital marketing should be fun exciting, and downright awesome.
                        </p>

                        
                    </div>
                </div>
            </div>
           <div className="w-full bg-[#cfe7df] rounded-md py-6 px-4 mt-14">
  <div className="max-w-6xl mx-auto grid grid-cols-4 divide-x divide-black text-center gap-x-2">
    
    {/* Item 1 */}
    <div className="py-4">
      <p className="text-lg md:text-2xl font-extrabold text-[#1a1a1a]">10+</p>
      <span className="text-[10px] md:text-xs text-gray-900 block mt-1">
        Years in business
      </span>
    </div>

    {/* Item 2 */}
    <div className="py-4">
      <p className="text-lg md:text-2xl font-extrabold text-[#1a1a1a]">200+</p>
      <span className="text-[10px] md:text-xs text-gray-700 block mt-1">
        Successful Projects
      </span>
    </div>

    {/* Item 3 */}
    <div className="py-4">
      <p className="text-lg md:text-2xl font-extrabold text-[#1a1a1a]">99%</p>
      <span className="text-[10px] md:text-xs text-gray-700 block mt-1">
        Happy Clients
      </span>
    </div>

    {/* Item 4 */}
    <div className="py-4">
      <p className="text-lg md:text-2xl font-extrabold text-[#1a1a1a]">20+</p>
      <span className="text-[10px] md:text-xs text-gray-700 block mt-1">
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
                <Hero
                    bgImage="/assets/contact.png"
                    overlayImage="/assets/about.png"
                />
                <AboutSection />
                <ServicesSection/>
                <TeamSection/>
            </main>
        </div>
    )
}

export default About
