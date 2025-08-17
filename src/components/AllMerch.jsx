import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';

const AllMerch = () => {
  const [merch, setMerch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchMerch = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        // Defensive check to ensure data is an array
        if (Array.isArray(data)) {
          setMerch(data);
        } else {
          console.error("API did not return an array:", data);
          setMerch([]); // Set to an empty array to prevent errors
        }
      } catch (error) {
        console.error("Failed to fetch merch:", error);
        setMerch([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMerch();
  }, []);

  const categories = ['All', 'Shirts', 'Hoodies', 'Tank tops', 'Vinyls', 'Hats/Beanies', 'Flags'];
  
  const filteredMerch = selectedCategory === 'All'
    ? merch
    : merch.filter(item => item.category === selectedCategory);

  if (loading) {
    return <p className="section-title">Loading Merch...</p>;
  }

  return (
    <section className="all-merch-section">
      <h2 className="section-title">All Merch</h2>
      <div className="merch-page-container">
        <aside className="merch-sidebar">
          <h3 className="sidebar-title">Categories</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="merch-grid-full">
          {filteredMerch.length > 0 ? (
            filteredMerch.map((item, index) => {
              const totalImages = item.images.length;

              return (
                <div key={index} className="merch-item-full">
                  <div className="merch-image-container">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="merch-item-image" 
                    />
                    {totalImages > 1 && (
                      <>
                        <button className="merch-nav-button left">&#10094;</button>
                        <button className="merch-nav-button right">&#10095;</button>
                      </>
                    )}
                  </div>
                  <h4 className="merch-item-name">{item.name}</h4>
                  <p className="merch-item-price">{item.price}</p>
                  <p className="merch-placeholder">Sizes: S, M, L, XL</p>
                  <p className="merch-placeholder">Quantity: 0</p>
                  <a
                    href={item.purchaseUrl}
                    className="merch-add-to-cart-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Cart
                  </a>
                </div>
              );
            })
          ) : (
            <p className="no-items-message">No items found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllMerch;