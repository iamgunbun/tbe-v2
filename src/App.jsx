import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import UpcomingDates from './components/UpcomingDates';
import MerchPreview from './components/MerchPreview';
import AllMerch from './components/AllMerch';
import Videos from './components/Videos';
import Footer from './components/Footer';

import './styles/base.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [page, setPage] = useState('home');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Renders the correct component based on the current page state
  const renderPage = () => {
    switch (page) {
      case 'dates':
        return <UpcomingDates fullPage={true} />;
      case 'allMerch':
        return <AllMerch />;
      case 'videos':
        return <Videos />;
      case 'home':
      default:
        return (
          <>
            <Header />
            <UpcomingDates fullPage={false} />
            <MerchPreview />
          </>
        );
    }
  };

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <Nav theme={theme} toggleTheme={toggleTheme} setPage={setPage} />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}