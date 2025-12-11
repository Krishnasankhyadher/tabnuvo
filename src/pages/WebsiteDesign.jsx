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
    icon: "/assets/iwd1.jpg",
    title: "Static Website",
    description:
      "We enhance website performance for search engines by crafting targeted, keyword-driven content tailored to meet the unique needs and objectives of our clients. Our content, penned by experienced writers with extensive industry experience, is authentic and designed to optimise all pages with elements such as meta descriptions, H1 titles, and meta titles."
  },
  {
    icon: "/assets/iwd2.jpg",
    title: "Dynamic Website",
    description:
      "Utilizing the expertise of our top-tier SEO professionals, we deliver premium backlinks and off-page strategies to our clients. Our carefully crafted articles for off-page submissions are tailored to align with the tone, audience, ."
  },
  {
    icon: "/assets/iwd3.jpg",
    title: "E-commerce Website",
    description:
      "We offer technical solutions aimed at enhancing your website’s visibility on search engines. Our team conducts thorough analyses of websites to identify and rectify technical errors and irregularities that may affect performance, speed, or functionality."
  },
  {
    icon: "/assets/iwd4.jpg",
    title: "Website Maintance",
    description:
      "Understanding the impact of your digital marketing efforts is crucial. Analytics helps guide your SEO strategy and allows for informed decisions. At The Ad-ults, we deeply study analytical performance of your marketing efforts to gain insights, improve campaigns, and achieve better results."
  },
  {
    icon: "/assets/iwd5.jpg",
    title: "CRM Web Softwares",
    description:
      "In this era where AI reigns supreme, we help brands in community building by offering humanised blog content sure to get a great amount of hits. We research quality keywords that are sure to get maximum results and help you create a business that stands out."
  },
  {
    icon :"/assets/iwd6.jpg",
    title: "Website Redesign",
    description:
      "We strategise content in a manner that’s in line with your brand, is trending, gains traction from Google, social media etc. Our content strategy helps you gain new users while the existing users stay hooked to “What’s next?”"
  }
];


const WebsiteDesign = () => {
  return (
    <div>
      <Navbar/>
         <Hero
                bgImage="/assets/contact.png"
                overlayImage="/assets/wst.png"
              />
              <PostingSection
      images={[
        "/assets/iw1.jpg",
        "/assets/iw2.jpg",
        "/assets/iw3.jpg",
        "/assets/iw4.jpg",
      ]}
      heading="Best Web Designing and
Development Services"
      text="In the Modern era of Digitalisation, your web address is more important for your business than your physical address. Your business is analyzed, judged, and valued by your clients as well as your potential investors based on your website. Whether you work in B2B, B2C, or D2C. Your website can make or break your impression.
Every website/app is judged on 2 parameters, how it looks and how it works. At The Ad-ults we believe in just 1 philosophy, “Your visitors should get what they are looking for within 2 minutes of pressing enter on your web address”. With 15+ years of experience in UI/UX and Development, our team is capable of making eye-."/>
<SocialMediaMagic
      sectionTitle="Web Designing Services at TABNUVO PVT. LTD."
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

export default WebsiteDesign
