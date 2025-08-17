import React from 'react';
import { siteData } from '../data/siteData';

const UpcomingDates = ({ fullPage }) => {
  // Display only a limited number of dates on the homepage
  const datesToDisplay = fullPage ? siteData.tourDates : siteData.tourDates.slice(0, 3);
  const title = fullPage ? "Concert Dates" : "Upcoming Dates";

  return (
    <section id="tour" className="tour-section">
      <h2 className="section-title">{title}</h2>
      <div className="tour-list-container">
        {datesToDisplay.map((date, index) => (
          <div 
            key={index} 
            className="tour-item"
          >
            <div className="tour-item-details">
              <span className="tour-item-date">{date.date}</span>
              <span className="tour-item-city">{date.city}</span>
              <span className="tour-item-venue">{date.venue}</span>
            </div>
            <a 
              href={date.tickets} 
              className="tour-tickets-button"
            >
              Tickets
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingDates;