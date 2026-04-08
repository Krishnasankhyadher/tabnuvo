import os
import re

dir_path = r"c:\Users\Lenovo\OneDrive\Desktop\website\frontend\src\pages"

mapping = {
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
}

for file, png in mapping.items():
    file_path = os.path.join(dir_path, file)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_hero = f'<Hero\n                        bgImage="/assets1/background.png"\n                        overlayImage="/assets1/Overlay/{png}"\n                    />'
        
        # Regex to match <Hero
        updated_content = re.sub(
            r'<Hero[\s\S]*?bgImage=\{?[\'"][^\'"]*[\'"]\}?[\s\S]*?overlayImage=\{?[\'"][^\'"]*[\'"]\}?[\s\S]*?\/>',
            new_hero,
            content
        )
        
        if updated_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            print(f"Updated {file}")
        else:
            print(f"No match to replace in {file}")
