const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/Users/Lenovo/OneDrive/Desktop/website/frontend/src/pages';
const iconsDir = 'c:/Users/Lenovo/OneDrive/Desktop/website/frontend/public/assets1/Tabnuvo Icons (2)';

const icons = fs.readdirSync(iconsDir);

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles(pagesDir);
for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Custom replacements
  const regex = /icon:\s*"([^"]+)",\s*title:\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
      let iconPath = match[1];
      let title = match[2];
      
      console.log(`Matched title: "${title}" in ${path.basename(file)}`);
      
      // Let's find the matching new icon
      let matchingIcon = null;
      let cleanTitle = title.toLowerCase().replace(/['"&,!-]/g, '').trim();
      
      for (let icon of icons) {
          let cleanIcon = icon.toLowerCase().replace(/['"&,!-]/g, '').trim();
          if (cleanIcon.includes(cleanTitle) || cleanTitle.includes(cleanIcon.split('(')[0].trim())) {
              matchingIcon = icon;
              break;
          }
      }
      
      // Additional simple manual mappings:
      if (!matchingIcon) {
          if (title === 'CRM Web Softwares do this') {
             // For WebsiteDesign.jsx
             if (file.includes('WebsiteDesign')) matchingIcon = "Make your website worthy of your business!(website development).png";
             if (file.includes('UIux')) matchingIcon = "Make your website worthy of your business!icon (UIUX Design).png";
          }
          if (title === 'Non AI blogs') {
             matchingIcon = "Meme Marketing(social media marketing).png";
          }
          if (title === 'Technical SEO') {
             matchingIcon = "Meta Ads(social media).png";
          }
          if (title === "Strategic pathway with Analytics") {
             // Social Media campaigns. Wait, did they upload an icon for social media campaigns?
             // Maybe no upload for that.
          }
      }
      
      if (matchingIcon) {
          console.log(`  -> Repl ${iconPath} with /assets1/Tabnuvo Icons (2)/${matchingIcon}`);
          content = content.replace(`icon: "${iconPath}"`, `icon: "/assets1/Tabnuvo Icons (2)/${matchingIcon}"`);
          changed = true;
      } else {
          console.log(`  -> NO MATCH FOUND for ${title}`);
      }
  }
  
  if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Saved ${file}`);
  }
}
