import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
const SeoFaqs = [
  {
    "question": "Why is SEO important for my business?",
    "answer": "SEO, or Search Engine Optimization, is crucial for enhancing your online visibility and ranking higher on search engine results pages (SERPs). It helps potential customers find your website organically, boosting traffic and ultimately increasing conversions."
  },
  {
    "question": "How long does it take to see results from SEO efforts?",
    "answer": "While some improvements may be noticed within a few weeks, significant results typically manifest over several months. SEO is a long-term strategy that requires consistent effort and patience for optimal outcomes."
  },
  {
    "question": "Can I manage SEO on my own, or do I need professional assistance?",
    "answer": "While basic SEO practices can be implemented independently, achieving substantial results often requires expertise and dedicated resources. Our team of seasoned professionals specializes in navigating the complexities of SEO to help your business thrive online."
  },
  {
    "question": "What sets Tabnuvo apart from other digital marketing agencies?",
    "answer": "At Tabnuvo, we pride ourselves on our team of seasoned industry professionals who possess unparalleled proficiency in both On-page and Off-page SEO techniques. We prioritize strategic guidance tailored to your business needs, ensuring sustainable growth in the competitive digital landscape."
  }
];

const items = [
  {
    icon: "/assets1/Tabnuvo Icons (2)/Meta Ads(social media).png",
    title: "On Page SEO",
    description:
      "We enhance website performance for search engines by crafting targeted, keyword-driven content tailored to meet the unique needs and objectives of our clients."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Meme Marketing(social media marketing).png",
    title: "Off Page SEO",
    description:
      "Utilizing the expertise of our top-tier SEO professionals, we deliver premium backlinks and off-page strategies to our clients. Our carefully crafted articles for off-page submissions are tailored to align with the tone, audience, ."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Meta Ads(social media).png",
    title: "Technical SEO",
    description:
      "When you’re building a brand, the most important component you’ll be needing is storytelling and philosophy. Content planning works as the vessel that helps brands portray their story and what they stand for in a fun and captivating way."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Strategic pathway with Analytics.png",
    title: "Strategic pathway with Analytics",
    description:
      "Social media campaigns is all about targeting that emotion and building on it. We craft campaigns that stand apart from the crowd, are catchy and are sure to give life to your brand. Our 12+ years of content experience helps us in having a strong understanding of people’s emotions."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/On Page SEO.png",
    title: "Technical SEO",
    description:
      "Our team of Meta Ads specialists can help you reach your target audience with precise targeting, captivating ad formats, and detailed analytics. Whether you aim to enhance brand visibility, boost website traffic, or generate leads, we craft impactful Facebook ad campaigns that deliver results."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Off-Page SEO.png",
    title: "Non AI blogs",
    description:
      "This one is fun! See the rhyming there? Standing beyond the regular marketing techniques, this form of marketing can be utilised to sneak in your brand so quietly that people won’t even know what hit them! It's one of the most successful ways of marketing because of one simple reason - everyone loves memes!"
  }
];


const Seo = () => {
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
                        bgImage="/assets1/Compressed Banner/SEO.png"
                        overlayImage="/assets1/Overlay/search engine optimization.png"
                    />
        <PostingSection
          images={[
            "/assets1/Compressed images/SEO1.jpg",
            "/assets1/Compressed images/SEO2.jpg",
            "/assets1/Compressed images/SEO3.jpg",
            "/assets1/Compressed images/SEO3.jpg",
          ]}
          heading="GETTING YOU AT THE RIGHT POSITION"
          text="Imagine you want to buy the new iPhone on the first day and you reach the store before everyone else, BUT, you are in front of the Samsung store. This can be your website in Google ranking, Ranking 1st, but on the wrong search page. Reach the right search page with us. With the right people!" />
        <SocialMediaMagic
          sectionTitle="SOCIAL MEDIA MAGIC"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="SEO"
          titleSecondLine="FAQs"
          faqs={SeoFaqs}
        />
      </div>
    </motion.div>
  )
}

export default Seo
