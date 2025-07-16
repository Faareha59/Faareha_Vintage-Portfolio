import React from 'react';
import './Taskbar.css'; // Import the CSS for styling

const Taskbar = ({ onStartClick, openWindows, activeWindow, onWindowClick }) => {
  return (
    <div className="taskbar fixed bottom-0 left-0 w-full h-10 flex items-center px-2 z-50 bg-gray-800 text-white">
      <button 
        className="start-button mr-2 flex items-center"
        onClick={onStartClick}
      >
        <img src="/icons/windows-xp-start-icon.png" alt="Start" className="w-5 h-5 mr-2" />
        Start
      </button>
  
      
      <div className="flex-1 flex">
        {openWindows.map(window => (
          <button 
            key={window.id}
            className={`px-3 py-1 mx-1 border-2 flex items-center ${activeWindow === window.id ? 'border-inset bg-gray-300' : 'border-outset'}`}
            onClick={() => onWindowClick(window.id)}
          >
            <img src={window.icon} alt={window.title} className="w-4 h-4 mr-2" />
            <span className="truncate max-w-[100px]">{window.title}</span>
          </button>
        ))}
      </div>
      
      <div className="flex items-center px-2 border-2 border-outset">
        <span className="mr-4">No Internet</span>
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default Taskbar;