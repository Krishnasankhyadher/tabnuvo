import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';



const ContentFaqs = [
  {
    "question": "What is content management?",
    "answer": "It involves creating, organizing, updating, and optimizing content across your digital platforms."
  },
  {
    "question": "Why is content important for my business?",
    "answer": "Effective communication is the key to efficient business. With good content management you can communicate your vision and mission as well as details about your products and services effectively."
  },
  {
    "question": "What type of content do you manage?",
    "answer": "We handle website content, blogs, social media, product descriptions, and marketing materials."
  },
  {
    "question": "Do you provide content strategy as well?",
    "answer": "Yes, we create data-driven content strategies aligned with your brand goals."
  }
];

const items = [
  {
    icon: "/assets1/Tabnuvo Icons (2)/Content with purpose(content managment).png",
    title: "Knowing What to Say & When",
    description:
      "Posting content without a plan is like speaking in a meeting without knowing the agenda. We start by defining what needs to be said, when it should be said, and why it matters."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Planning for Consistency.png",
    title: "Planning for Consistency",
    description:
      "Random posting leads to random results. Like a TV show with no schedule, audiences lose interest. We plan content in advance to ensure consistency across platforms."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Managing Content with Brand Clarity.png",
    title: "Managing Content with Brand Clarity",
    description:
      "Every brand has a personality, and content should reflect that consistently. We manage content by strictly following brand guidelines and carefully choosing which trends to adopt."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Balancing Creativity & Relevance.png",
    title: "Balancing Creativity & Relevance",
    description:
      "Creative content is great, but only when it is relevant. Chasing every trend can dilute the message, while ignoring trends can make content feel dated. We strike a balance."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Reviewing, Refining & Improving(content management).png",
    title: "Reviewing, Refining & Improving",
    description:
      "Content is not a one-time task, it is an ongoing process. Like pruning a plant, regular reviews help content grow better. We track performance, refine what works, and improve what doesn't."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Knowing What to Say & When.png",
    title: "Content with purpose",
    description:
      "Content without structure runs like a headless chicken. We plan, organise, and manage content so it follows a clear flow, stays aligned with brand guidelines."
  }
];

const Content = () => {
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
                        bgImage="/assets1/Compressed Banner/Content Marketing.png"
                        overlayImage="/assets1/Overlay/content_managmnet.png"
                    />
        <PostingSection
          images={[
            "/assets1/Compressed images/CONTENT MARKETING1.jpg",
            "/assets1/Compressed images/CONTENT MARKETING2.jpg",
            "/assets1/Compressed images/CONTENT MARKETING3.jpg",
            "/assets1/Compressed images/CONTENT MARKETING4.jpg",
          ]}
          heading="CONTENT WITHOUT STRUCTURE RUNS LIKE A HEADLESS CHICKEN"
          text="In today's digitally driven world, where Google registers over 8.5 billion searches daily, the shift towards online commerce is undeniable. Whether it's groceries or automobiles, consumers can now conveniently order anything from the comfort of their homes. As a business owner, it's natural to wonder how to thrive in this digital landscape.
At The Ad-ults, we offer a team of seasoned industry professionals who specialize in guiding our clients towards the top spot strategically. From devising content strategies to building high-quality backlinks, our SEO experts demonstrate unparalleled proficiency in both On-page and Off-page SEO techniques."/>
        <SocialMediaMagic
          sectionTitle="Content Management Services"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="Content"
          titleSecondLine="Management FAQs"
          faqs={ContentFaqs}
        />
      </div>
    </motion.div>
  )
}

export default Content
