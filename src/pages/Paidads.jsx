import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
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
    icon: "/assets/is1.jpg",
    title: "On Page SEO",
    description:
      "We enhance website performance for search engines by crafting targeted, keyword-driven content tailored to meet the unique needs and objectives of our clients. Our content, penned by experienced writers with extensive industry experience, is authentic and designed to optimise all pages with elements such as meta descriptions, H1 titles, and meta titles."
  },
  {
    icon: "/assets/is2.jpg",
    title: "Off Page SEO",
    description:
      "Utilizing the expertise of our top-tier SEO professionals, we deliver premium backlinks and off-page strategies to our clients. Our carefully crafted articles for off-page submissions are tailored to align with the tone, audience, ."
  },
  {
    icon: "/assets/is3.jpg",
    title: "Technical SEO",
    description:
      "When you’re building a brand, the most important component you’ll be needing is storytelling and philosophy. Content planning works as the vessel that helps brands portray their story and what they stand for in a fun and captivating way."
  },
  {
    icon: "/assets/is4.jpg",
    title: "Social Media Campaigns",
    description:
      "Social media campaigns is all about targeting that emotion and building on it. We craft campaigns that stand apart from the crowd, are catchy and are sure to give life to your brand. Our 12+ years of content experience helps us in having a strong understanding of people’s emotions."
  },
  {
    icon: "/assets/is5.jpg",
    title: "Meta Ads",
    description:
      "Our team of Meta Ads specialists can help you reach your target audience with precise targeting, captivating ad formats, and detailed analytics. Whether you aim to enhance brand visibility, boost website traffic, or generate leads, we craft impactful Facebook ad campaigns that deliver results."
  },
  {
    icon :"/assets/is6.jpg",
    title: "Meme Marketing",
    description:
      "This one is fun! See the rhyming there? Standing beyond the regular marketing techniques, this form of marketing can be utilised to sneak in your brand so quietly that people won’t even know what hit them! It's one of the most successful ways of marketing because of one simple reason - everyone loves memes!"
  }
];

const Paidads = () => {
  return (
    <div>
      <Navbar/>
         <Hero
        bgImage="/assets/contact.png"
        overlayImage="/assets/seo.png"
      />
      <PostingSection
      images={[
        "/assets/ise1.jpg",
        "/assets/ise2.jpg",
        "/assets/ise3.jpg",
        "/assets/ise4.jpg",
      ]}
      heading="Search Engine
Optimization  Services"
      text="In today's digitally driven world, where Google registers over 8.5 billion searches daily, the shift towards online commerce is undeniable. Whether it's groceries or automobiles, consumers can now conveniently order anything from the comfort of their homes. As a business owner, it's natural to wonder how to thrive in this digital landscape.
At The Ad-ults, we offer a team of seasoned industry professionals who specialize in guiding our clients towards the top spot strategically. From devising content strategies to building high-quality backlinks, our SEO experts demonstrate unparalleled proficiency in both On-page and Off-page SEO techniques."/>
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
  )
}

export default Paidads
