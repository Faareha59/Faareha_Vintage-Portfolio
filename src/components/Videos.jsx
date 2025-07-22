import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const videos = [
  {
    id: 1,
    title: 'Prime Deals',
    description: 'Developed a dynamic MERN stack web application enabling admins to manage property listings and agents; features real-time updates, secure backend operations, and a seamless user experience.',
    thumbnail: 'https://via.placeholder.com/800x450?text=Project+Thumbnail',
    videoUrl: 'https://drive.google.com/file/d/1JjH-sEuPl76N88_xMPiLAjgWfeAzLWQC/view?usp=drive_link'
  },
  {
    id: 2,
    title: 'Fruit Fusion',
    description: 'Developed a React Native (Expo) mobile app with role-based login, real-time Firebase backend, product management, and order tracking; gained hands-on experience in full-stack mobile development and UI/UX design.',
    thumbnail: 'https://via.placeholder.com/800x450?text=Mobile+App+Demo',
    videoUrl: 'https://drive.google.com/file/d/14MfnirFsvXao3kpAMQcpvaX24qKj0ji3/view?usp=sharing'
  },
  {
    id: 3,
    title: 'Hope AI',
    description: 'Analyzed student survey data using Python (Pandas, Seaborn, Matplotlib) to identify trends in stress, anxiety, and depression; currently integrating machine learning for deeper insights.',
    thumbnail: 'https://via.placeholder.com/800x450?text=Mobile+App+Demo',
    videoUrl: 'https://drive.google.com/file/d/1UYtKplMhLhK0L62n4L11OgiXCuQODQSb/view?usp=sharing'
  }
  ,
  {
    id: 4,
    title: 'Art and Heaven',
    description: 'Developed a web-based platform using HTML, CSS, JavaScript, and PHP (hosted on XAMPP) to showcase art through a sleek, user-friendly interface.',
    thumbnail: 'https://via.placeholder.com/800x450?text=Mobile+App+Demo',
    videoUrl: 'https://drive.google.com/file/d/10VkLtbvs6yzSNrAJ8EaQtI7OsKYnMIa-/view?usp=sharing'
  }
];

const VideoPlayer = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const iframeRef = useRef(null);

  // Convert Google Drive share link to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/\/file\/d\/([^\/]+)/) || url.match(/[-\w]{25,}/);
    if (!match) return url;
    
    const fileId = match[1] || match[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  const togglePlay = () => {
    if (!iframeRef.current) return;
    
    const iframe = iframeRef.current;
    const message = isPlaying ? 
      JSON.stringify({ event: 'command', func: 'pauseVideo' }) :
      JSON.stringify({ event: 'command', func: 'playVideo' });
    
    iframe.contentWindow.postMessage(message, '*');
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative group bg-black rounded-xl overflow-hidden shadow-2xl w-full max-w-3xl mx-auto"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <iframe
        ref={iframeRef}
        src={getEmbedUrl(video.videoUrl)}
        className="w-full aspect-video"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      
      {showControls && (
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={togglePlay}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

const VideoDescription = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isExpanded}
      >
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="text-gray-500 transform transition-transform duration-300">
          {isExpanded ? '−' : '+'}
        </span>
      </button>
      {isExpanded && (
        <div className="p-6 pt-0">
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};

const Videos = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Showcase</h2>
      <p className="text-gray-700 mb-6">
        Explore my latest projects through these video demonstrations. Click play to see them in action!
      </p>
      
      <div className="space-y-12">
        {videos.map((video) => (
          <div key={video.id} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
            <div className="w-full">
              <VideoPlayer video={video} />
            </div>
            <VideoDescription title={video.title} description={video.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;