import React from 'react';
import { siteData } from '../data/siteData';

const Videos = () => {
  const mainVideo = siteData.videos.mainVideo;
  const otherVideos = siteData.videos.otherVideos;

  return (
    <section id="videos" className="videos-section">
      <h2 className="section-title">Videos</h2>
      <div className="main-video-container">
        <iframe
          className="main-video-iframe"
          src={mainVideo.embedUrl}
          title={mainVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="main-video-details">
          <h3 className="main-video-title">{mainVideo.title}</h3>
          <p className="main-video-description">{mainVideo.description}</p>
          <a 
            href={mainVideo.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
      <div className="other-videos-grid">
        {otherVideos.map((video, index) => (
          <div key={index} className="other-video-card">
            <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnailUrl} alt={video.title} className="other-video-thumbnail" />
              <h4 className="other-video-title">{video.title}</h4>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;