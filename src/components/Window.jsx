import React from 'react';
import Draggable from 'react-draggable';

const Window = ({ window, isActive, onClose, onClick, style }) => {
  const windowStyle = {
    ...style,
    zIndex: isActive ? 1000 : 1,
    width: window.width ? `${window.width}px` : '400px',
    height: window.height ? `${window.height}px` : '430px'
  };

  return (
    <Draggable handle=".window-header">
      <div
        className={`window ${isActive ? 'active' : ''}`}
        onClick={onClick}
        style={windowStyle}
      >
        <div className="window-header">
          <span>{window.title}</span>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        <div className="window-content">
          {window.content}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;