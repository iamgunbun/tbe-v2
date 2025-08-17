import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export const siteData = {
  bandName: "Through Blind Eyes",
  navItems: [
    { name: "Home", page: "home" },
    { name: "Dates", page: "dates" },
    { name: "All Merch", page: "allMerch" },
    { name: "Videos", page: "videos" },
    { name: "Socials", href: "#socials" },
  ],
  header: {
    title: "", 
    subtitle: "", 
    ctaText: "Listen Now",
    ctaLink: "https://www.youtube.com/watch?v=aQTAaa6dyXY&list=RDaQTAaa6dyXY&start_radio=1",
    videoUrl: "/Videos/tbeheader.mp4",
    headerLogoUrl: "/static/overdose.png"
  },
  tourDates: [
    { city: "New York, NY", date: "Oct 25, 2025", venue: "Terminal 5", tickets: "#" },
    { city: "Chicago, IL", date: "Oct 27, 2025", venue: "House of Blues", tickets: "#" },
    { city: "Los Angeles, CA", date: "Nov 1, 2025", venue: "The Wiltern", tickets: "#" },
    { city: "Dallas, TX", date: "Nov 5, 2025", venue: "The Factory", tickets: "#" },
    { city: "London, UK", date: "Dec 10, 2025", venue: "The O2", tickets: "#" },
  ],
  merch: [], // Merch items will now be fetched from the backend API
  videos: {
    mainVideo: {
      title: "Through Blind Eyes - Overdose",
      youtubeUrl: "https://www.youtube.com/watch?v=aQTAaa6dyXY",
      embedUrl: "https://www.youtube.com/embed/aQTAaa6dyXY",
      description: "This music video titled 'Overdose' by 'Through Blind Eyes' shows the band performing the song in a dark venue with flashing lights while people dance to the music. There are also close-up shots of band members and a group photo of the band in a forest."
    },
    otherVideos: [
      { title: "Another Video Title", youtubeUrl: "#", thumbnailUrl: "https://placehold.co/320x180/18181b/a1a1aa?text=Video+1" },
      { title: "Third Video", youtubeUrl: "#", thumbnailUrl: "https://placehold.co/320x180/18181b/a1a1aa?text=Video+2" },
      { title: "Fourth Video", youtubeUrl: "#", thumbnailUrl: "https://placehold.co/320x180/18181b/a1a1aa?text=Video+3" },
    ]
  },
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/throughblindeyes16" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "YouTube", url: "#" },
  ]
};