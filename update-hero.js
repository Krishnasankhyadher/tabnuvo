import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'src', 'pages');

const files = [
  'WebsiteDesign.jsx', 'UIux.jsx', 'Softwaredevlopment.jsx', 'SocialMedia.jsx', 
  'Services.jsx', 'Servicedesign.jsx', 'Seo.jsx', 'Productdesign.jsx', 'Paidads.jsx', 
  'Home.jsx', 'Ecommerce.jsx', 'Content.jsx', 'Bussiness.jsx', 
  'Branding.jsx', 'About.jsx'
];

const map = {
  'Bussiness.jsx': 'Business consulting.png',
  'Ecommerce.jsx': 'E commerce.png',
  'About.jsx': 'about us.png',
  'Branding.jsx': 'branding.png',
  'Content.jsx': 'content_managmnet.png',
  'Home.jsx': 'home.png',
  'Paidads.jsx': 'paid ads.png',
  'Productdesign.jsx': 'product design.png',
  'Seo.jsx': 'search engine optimization.png',
  'Servicedesign.jsx': 'service design.png',
  'Services.jsx': 'services.png',
  'SocialMedia.jsx': 'social media marketing.png',
  'Softwaredevlopment.jsx': 'software devlopment.png',
  'UIux.jsx': 'ui ux design.png',
  'WebsiteDesign.jsx': 'website design and devlopment.png'
};

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (map[file]) {
      const regex = /<Hero[\s\S]*?bgImage={?['"][^'"]*['"]}?[\s\S]*?overlayImage={?['"][^'"]*['"]}?[\s\S]*?\/>/g;
      
      const newHero = \`<Hero
                        bgImage="/assets1/background.png"
                        overlayImage="/assets1/Overlay/\${map[file]}"
                    />\`;
          
      if (regex.test(content)) {
        content = content.replace(regex, newHero);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + file);
      } else {
        console.log('No hero found in ' + file);
      }
    }
  }
});
