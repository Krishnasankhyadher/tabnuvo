import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
const smmFaqs = [
  {
    question: "Does social media marketing work?",
    answer:
      "Yes. When done strategically, social media marketing helps build brand awareness, drive traffic, and generate leads by engaging the right audience consistently.",
  },
  {
    question: "Can you guarantee results?",
    answer:
      "No one can guarantee exact numbers, but we use data-driven strategies, A/B testing, and constant optimization to maximize performance.",
  },
  {
    question: "How long before I see results?",
    answer:
      "You usually start seeing early signals within a few weeks, while strong, consistent results typically come in 3–6 months.",
  },
  {
    question: "Do I need to be on every platform?",
    answer:
      "Not at all. We identify where your audience actually spends time and focus your efforts there for better ROI.",
  },
  {
    question: "Can you handle content creation too?",
    answer:
      "Yes, we can handle creatives, copy, calendars, and publishing so your brand stays consistent and active.",
  },
];

const items = [
  {
    icon: "/assets1/Icons/TABNUVO ICONS/On Page SEO.png",
    title: "On Page SEO",
    description:
      "We enhance website performance for search engines by crafting targeted, keyword-driven content tailored to meet the unique needs and objectives of our clients."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Off-Page SEO.png",
    title: "Off Page SEO",
    description:
      "Utilizing the expertise of our top-tier SEO professionals, we deliver premium backlinks and off-page strategies to our clients. Our carefully crafted articles for off-page submissions are tailored to align with the tone, audience, ."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Technical SEO.png",
    title: "Technical SEO",
    description:
      "When you’re building a brand, the most important component you’ll be needing is storytelling and philosophy. Content planning works as the vessel that helps brands portray their story and what they stand for in a fun and captivating way."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Strategic pathway with Analytics.png",
    title: "Social Media Campaigns",
    description:
      "Social media campaigns is all about targeting that emotion and building on it. We craft campaigns that stand apart from the crowd, are catchy and are sure to give life to your brand. Our 12+ years of content experience helps us in having a strong understanding of people’s emotions."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/On Page SEO.png",
    title: "Meta Ads",
    description:
      "Our team of Meta Ads specialists can help you reach your target audience with precise targeting, captivating ad formats, and detailed analytics. Whether you aim to enhance brand visibility, boost website traffic, or generate leads, we craft impactful Facebook ad campaigns that deliver results."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Off-Page SEO.png",
    title: "Meme Marketing",
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
                        bgImage="/assets1/background.png"
                        overlayImage="/assets1/Overlay/search engine optimization.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/SEO1.jpg",
            "/assets1/IMAGES1/SEO2.jpg",
            "/assets1/IMAGES1/SEO3.jpg",
            "/assets1/IMAGES1/SEO4.jpg",
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
          title="Social Media"
          titleSecondLine="Marketing FAQs"
          faqs={smmFaqs}
        />
      </div>
    </motion.div>
  )
}

export default Seo
