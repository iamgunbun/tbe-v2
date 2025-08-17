import React from 'react';
import { siteData } from '../data/siteData';

const Header = () => {
  return (
    <header 
      id="home"
      className="header-video"
    >
      <video className="header-video-background" autoPlay loop muted>
        <source src={siteData.header.videoUrl} type="video/mp4" />
      </video>
      <div className="header-overlay"></div>
      <div className="header-content">
        <img src={siteData.header.headerLogoUrl} alt="Through Blind Eyes Logo" className="header-logo" />
        <p className="header-logo-subtitle">
          Listen to 'Overdose' Streaming now!
        </p>
        <a 
          href={siteData.header.ctaLink} 
          className="cta-button"
        >
          {siteData.header.ctaText}
        </a>
      </div>
    </header>
  );
};

export default Header;
