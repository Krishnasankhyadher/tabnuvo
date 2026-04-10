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
    icon: "/assets1/Tabnuvo Icons (2)/Meta Ads(social media).png",
    title: "Platform analysis and prioritizing",
    description:
      "Consider someone having lunch while sitting in a bathtub – not exactly a flattering sight, is it? Similarly, prioritizing specific social media platforms for your business and tailoring your content accordingly can capture the attention of your audience, generate engagement and helps you generate business."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Meme Marketing(social media marketing).png",
    title: "Strategic Content Creation",
    description:
      "Beyond mere icons, images, and text, we adopt a comprehensive approach to content creation. By utilizing the influence of shape, typography, and color psychology, we breathe vitality into our designs, ensuring they authentically reflect the brand's vision."
  },
  {
    icon: "/assets1/Icons/Social Media Marketing/Content planning.png",
    title: "Content planning",
    description:
      "When you’re building a brand, the most important component you’ll be needing is storytelling and philosophy. Content planning works as the vessel that helps brands portray their story and what they stand for in a fun and captivating way."
  },
  {
    icon: "/assets1/Icons/Social Media Marketing/Social Media Campaigns.png",
    title: "Strategic pathway with Analytics",
    description:
      "Social media campaigns is all about targeting that emotion and building on it. We craft campaigns that stand apart from the crowd, are catchy and are sure to give life to your brand. Our 12+ years of content experience helps us in having a strong understanding of people’s emotions."
  },
  {
    icon: "/assets1/Icons/Social Media Marketing/Platform analysis and prioritizing.png",
    title: "Technical SEO",
    description:
      "Our team of Meta Ads specialists can help you reach your target audience with precise targeting, captivating ad formats, and detailed analytics. Whether you aim to enhance brand visibility, boost website traffic, or generate leads, we craft impactful Facebook ad campaigns that deliver results."
  },
  {
    icon: "/assets1/Icons/Social Media Marketing/Strategic Content Creation.png",
    title: "Non AI blogs",
    description:
      "This one is fun! See the rhyming there? Standing beyond the regular marketing techniques, this form of marketing can be utilised to sneak in your brand so quietly that people won’t even know what hit them! It's one of the most successful ways of marketing because of one simple reason - everyone loves memes!"
  }
];

const SocialMedia = () => {
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
                        overlayImage="/assets1/Overlay/social media marketing.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/SOCIAL MEDIA 1.jpg",
            "/assets1/IMAGES1/SOCIAL MEDIA2.jpg",
            "/assets1/IMAGES1/SOCIAL MEDIA3.jpg",
            "/assets1/IMAGES1/SOCIAL MEDIA4.jpg",
          ]}
          heading="LET'S CREATE YOUR CULT"
          text="Another day, another trend, and still no views? You are not alone! But you are doing it wrong along with everyone else. Hopping on every trend will not get you clients. Finding what your audience wants and delivering it will. Want to know how?" />
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

export default SocialMedia
