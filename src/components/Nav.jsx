import React from 'react';
import { siteData } from '../data/siteData';

const Nav = ({ theme, toggleTheme, setPage }) => {
  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Empty div for spacing on larger screens */}
        <div className="nav-left"></div> 
        <div className="nav-logo">
          <img 
            src="/static/tbelogo.png" 
            alt={`${siteData.bandName} Logo`} 
            className="nav-logo-image"
          />
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            {siteData.navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  onClick={() => setPage(item.page)}
                  className="nav-link-item"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="theme-toggle-button">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;