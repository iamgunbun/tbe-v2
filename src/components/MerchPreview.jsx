import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';

const MerchPreview = () => {
  const [merch, setMerch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMerch = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setMerch(data);
      } catch (error) {
        console.error("Failed to fetch merch:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMerch();
  }, []);

  const previewItems = merch.slice(0, 4); // Display only the first 4 items

  if (loading) {
    return <p className="section-title">Loading Merchandise...</p>;
  }

  return (
    <section id="merch" className="merch-section">
      <h2 className="section-title">Merchandise</h2>
      <div className="merch-grid">
        {previewItems.map((item, index) => (
          <div 
            key={index} 
            className="merch-item"
          >
            <img 
              src={item.images[0]} 
              alt={item.name} 
              className="merch-item-image" 
            />
            <h3 className="merch-item-name">{item.name}</h3>
            <p className="merch-item-price">{item.price}</p>
            <a 
              href={item.purchaseUrl}
              className="merch-add-to-cart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Cart
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchPreview;