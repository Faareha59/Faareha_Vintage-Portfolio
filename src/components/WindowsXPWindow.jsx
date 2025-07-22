import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaWindowMinimize, FaWindowMaximize, FaWindowRestore } from 'react-icons/fa';
import './WindowsXPWindow.css';

const WindowsXPWindow = ({ 
  title, 
  children, 
  onClose, 
  onMinimize, 
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 800, height: 600 },
  isMinimized = false,
  isMaximized: propIsMaximized = false,
  icon = '📺',
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(propIsMaximized);
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls, .window-button')) return;
    
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isMaximized) return;
    
    const newX = e.clientX - startPos.x;
    const newY = Math.max(0, e.clientY - startPos.y); // Prevent dragging above the viewport
    
    setPosition({
      x: newX,
      y: newY
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMaximize = () => {
    const newMaximized = !isMaximized;
    setIsMaximized(newMaximized);
    
    if (!newMaximized) {
      // Restore to previous size and position
      setSize(defaultSize);
      setPosition(defaultPosition);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startPos, isMaximized]);

  if (isMinimized) {
    return null;
  }

  const windowStyle = {
    left: isMaximized ? '20px' : `${position.x}px`,
    top: isMaximized ? '20px' : `${position.y}px`,
    width: isMaximized ? 'calc(100% - 40px)' : `${size.width}px`,
    height: isMaximized ? 'calc(100% - 80px)' : `${size.height}px`,
  };

  return (
    <div 
      ref={windowRef}
      className={`windows-xp-window ${isMaximized ? 'maximized' : ''} ${className}`}
      style={windowStyle}
      onMouseDown={handleMouseDown}
    >
      <div className="window-title-bar">
        <div className="window-title">
          <span className="window-icon" role="img" aria-hidden="true">{icon}</span>
          {title}
        </div>
        <div className="window-controls">
          <button 
            onClick={onMinimize} 
            className="window-button" 
            aria-label="Minimize"
          >
            <FaWindowMinimize size={10} />
          </button>
          <button 
            onClick={handleMaximize} 
            className="window-button" 
            aria-label={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? <FaWindowRestore size={10} /> : <FaWindowMaximize size={10} />}
          </button>
          <button 
            onClick={onClose} 
            className="window-button close-button" 
            aria-label="Close"
          >
            <FaTimes size={12} />
          </button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default WindowsXPWindow;
