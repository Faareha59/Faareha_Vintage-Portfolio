import React, { useEffect, useState } from 'react';

const WindowsUpdateNotification = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 15000); // Increased to 15 seconds for better readability

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-20 right-4 w-80 bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg shadow-2xl text-white z-50 border-2 border-blue-800 animate-slide-up"
      style={{
        animation: 'slideUp 0.3s ease-out'
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(400px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      {/* Header */}
      <div className="bg-blue-800 px-4 py-2 rounded-t-md flex justify-between items-center border-b border-blue-700">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔔</span>
          <span className="font-bold text-sm">Windows Update</span>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="text-white hover:bg-blue-700 p-1 rounded w-6 h-6 flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-4">
          <p className="font-bold text-base leading-tight mb-3">🔔 Windows Update: Faareha is Open to Work</p>
          <p className="text-sm leading-relaxed font-normal mb-2">
            ✨ <span className="font-bold text-green-300">CLICK TO HIRE!</span> Actively seeking Full Stack & AI development roles.
          </p>
          <p className="text-sm leading-relaxed font-normal mb-3">
            💼 <span className="font-bold">Skills:</span> React • Node.js • MongoDB • TypeScript • Python • AI/ML
          </p>
          <p className="text-sm leading-relaxed font-normal">
            Ready to make an impact! 📧 faareharaza59@gmail.com
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-blue-500 rounded-b-md overflow-hidden">
        <div
          className="h-full bg-green-400 rounded-b-md"
          style={{
            animation: 'progress 15s linear forwards'
          }}
        />
        <style>{`
          @keyframes progress {
            from { width: 100%; }
            to { width: 0%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default WindowsUpdateNotification;
