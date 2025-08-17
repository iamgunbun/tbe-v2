import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { siteData } from '../data/siteData';

// This map links the string name from siteData to the actual component
const iconMap = { Instagram, Facebook, Twitter, Youtube };

const Footer = () => {
  return (
    <footer id="socials" className="footer">
      <div className="social-links-container">
        {siteData.socials.map((social, index) => {
          // Dynamically get the Icon component from the map
          const Icon = iconMap[social.name];
          return (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-item"
            >
              {/* Only render the icon if it exists */}
              {Icon && <Icon size={32} />}
            </a>
          );
        })}
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} {siteData.bandName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
