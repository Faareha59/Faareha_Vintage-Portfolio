import React from "react";

const videos = [
  {
    src: "./Videos/PrimeDeals - Real Estate Marketplace and 1 more page - Personal - Microsoft​ Edge 2025-06-15 01-53-16.mp4",
    title: "Prime Deals - Real Estate Project",
  },
  {
    src: "./Videos/Fruit Fusion APP video.mp4",
    title: "Food Fusion - Mobile App",
  },
  {
    src: "./Videos/Student Wellness Predictor - Google Chrome 2025-06-20 01-05-50.mp4",
    title: "Student Mental Health",
  },
  {
    src: "./Videos/Art And Heaven Project.mp4",
    title: "Art and Heaven",
  },
];

const Videos = () => (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">Videos</h2>
    <p className="mb-6">Here are some of my project videos:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <video
            controls
            className="w-[350px] h-[200px] rounded shadow"
            style={{ background: "#000" }}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-2 font-semibold text-center">{video.title}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Videos;