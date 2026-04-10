import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';



const BussinessFaqs = [
  {
    "question": "What does business consulting involve?",
    "answer": "It includes strategic planning, process improvement, market analysis, and growth strategies."
  },
  {
    "question": "How can consulting help my business grow?",
    "answer": "It provides expert insights, identifies opportunities, and helps you make informed decisions for sustainable growth."
  },
  {
    "question": "Do you work with startups or established businesses?",
    "answer": "We work with both—helping startups build foundations and established businesses scale further."
  },
  {
    "question": "What makes your consulting approach unique?",
    "answer": "We focus on practical, results-driven strategies tailored to your specific business challenges and goals."
  }
];

const items = [
  {
    icon: "/assets1/Tabnuvo Icons (2)/Without caring there can be no quality(business consulting).png",
    title: "Understanding How the Business Really Runs",
    description:
      "Consulting without understanding day-to-day operations is like giving fitness advice without seeing how someone moves. We start by getting a clear view of how the business actually functions."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Streamlining Processes & Workflows.png",
    title: "Streamlining Processes & Workflows",
    description:
      "Messy operations slow businesses down quietly. Like traffic caused by a poorly planned junction, small inefficiencies add up over time. We identify gaps, bottlenecks, and unnecessary steps."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Aligning Teams & Responsibilities.png",
    title: "Aligning Teams & Responsibilities",
    description:
      "When roles are not clear, work overlaps or gets missed. We help define responsibilities, improve handovers, and align teams so everyone knows what they own."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Improving Systems & Decision-Making(business cosluting).png",
    title: "Improving Systems & Decision-Making",
    description:
      "Running a business without the right systems is like tracking finances in your head. We help structure tools, reports, and processes that support better decisions."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Planning for Scale & Long-Term Stability.png",
    title: "Planning for Scale & Long-Term Stability",
    description:
      "Growth without preparation can strain operations. We help businesses plan operations for the next 6 months, 1 year, and 2 years, ensuring systems can support long-term growth."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Understanding How the Business Really Runs.png",
    title: "Without caring there can be no quality",
    description:
      "When roles, processes, and goals are not clear, quality breaks down quietly. Business consulting begins with clarity. Once everyone knows what needs to be done, quality becomes consistent."
  }
];

const Bussiness = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

      <div>
        <Navbar />
        <Hero
                        bgImage="/assets1/background.png"
                        overlayImage="/assets1/Overlay/Business consulting.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/BUSINESS CONSULTING1.jpg",
            "/assets1/IMAGES1/BUSINESS CONSULTING2.jpg",
            "/assets1/IMAGES1/BUSINESS CONSULTING3.jpg",
            "/assets1/IMAGES1/Business Strategy.jpg",
          ]}
          heading="WITHOUT CARING THERE CAN BE NO QUALITY"
          text="In today's digitally driven world, where Google registers over 8.5 billion searches daily, the shift towards online commerce is undeniable. Whether it's groceries or automobiles, consumers can now conveniently order anything from the comfort of their homes. As a business owner, it's natural to wonder how to thrive in this digital landscape.
At The Ad-ults, we offer a team of seasoned industry professionals who specialize in guiding our clients towards the top spot strategically. From devising content strategies to building high-quality backlinks, our SEO experts demonstrate unparalleled proficiency in both On-page and Off-page SEO techniques."/>
        <SocialMediaMagic
          sectionTitle="Business Consulting Services"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="Business"
          titleSecondLine="Consulting FAQs"
          faqs={BussinessFaqs}
        />
      </div>
    </motion.div>
  )
}

export default Bussiness
