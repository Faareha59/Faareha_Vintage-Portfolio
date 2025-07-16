import React, { useState } from 'react';

function StartMenu({ icons, onItemClick }) {
  const [showShutdownMessage, setShowShutdownMessage] = useState(false);

  const handleShutdownClick = () => {
    setShowShutdownMessage(true);
  };

  return (
    <div className="start-menu z-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 font-bold">
        My Portfolio
      </div>
      
      {icons.map(icon => (
        <div 
          key={icon.id}
          className="start-menu-item"
          onClick={() => onItemClick(icon)}
        >
          <img src={icon.icon} alt={icon.title} />
          <span>{icon.title}</span>
        </div>
      ))}
      
      <div className="border-t border-gray-400 mt-2">
        <div className="start-menu-item" onClick={handleShutdownClick}>
          <img src="/icons/shutdown-icon.png" alt="Shutdown" />
          <span>Shutdown</span>
        </div>
      </div>

      {showShutdownMessage && (
        <div className="shutdown-message fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Error 404: Shutdown button is just for decoration.</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowShutdownMessage(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StartMenu;