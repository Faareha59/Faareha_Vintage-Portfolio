import React from "react";

const videos = [
  {
    src: "public/videos/PrimeDeals - Real Estate Marketplace and 1 more page - Personal - Microsoft​ Edge 2025-06-15 01-53-16.mp4",
    title: "Prime Deals - Real Estate Project",
    description: "A real estate marketplace web application.",
    poster: "/videos/prime-deals-poster.jpg"
  },
  {
    src: "/videos/Fruit Fusion APP video.mp4",
    title: "Food Fusion - Mobile App",
    description: "A food delivery mobile application.",
    poster: "/videos/food-fusion-poster.jpg"
  },
  {
    src: "/videos/Student Wellness Predictor - Google Chrome 2025-06-20 01-05-50.mp4",
    title: "Student Mental Health",
    description: "AI-powered platform supporting student mental health.",
    poster: "/videos/student-wellness-poster.jpg"
  },
  {
    src: "/videos/Art And Heaven.mp4",
    title: "Art and Heaven",
    description: "An online art gallery and marketplace.",
    poster: "/videos/art-heaven-poster.jpg"
  },
];

const Videos = () => (
  <div className="p-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">Project Videos</h2>
    <p className="mb-10 text-gray-700 text-center text-lg">Here are some of my project demonstrations. Click play to watch the videos.</p>
    
    <div className="grid grid-cols-1 gap-12">
      {videos.map((video, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative bg-black">
            <video
              className="w-full h-auto max-h-[70vh] mx-auto"
              controls
              controlsList="nodownload"
              poster={video.poster}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3">{video.title}</h3>
            <p className="text-gray-600 text-lg">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
    
  </div>
);

export default Videos;