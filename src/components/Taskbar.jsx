import React, { useEffect, useMemo, useState } from 'react';
import './Taskbar.css';

const Taskbar = ({ onStartClick, openWindows, activeWindow, onWindowClick }) => {
  const [now, setNow] = useState(() => new Date());
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = useMemo(
    () => now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    [now]
  );

  const formattedDate = useMemo(
    () => now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    [now]
  );

  const networkLabel = isConnected ? 'Connected - Local Area Connection' : 'Network cable unplugged';

  return (
    <div className="taskbar" role="navigation" aria-label="Taskbar">
      <button 
        className="start-button"
        onClick={onStartClick}
        type="button"
      >
        <span className="start-button-glow" aria-hidden="true" />
        <img src="./icons/Windows-icon xp.png" alt="Windows logo" className="start-button-logo" />
        <span className="start-button-text">Start</span>
      </button>

      <div className="task-buttons" role="list">
        {openWindows.map((window) => (
          <button 
            key={window.id}
            className={`task-button ${activeWindow === window.id ? 'task-button--active' : ''}`}
            onClick={() => onWindowClick(window.id)}
            type="button"
          >
            {window.icon && <img src={window.icon} alt="" aria-hidden="true" />}
            <span>{window.title}</span>
          </button>
        ))}
      </div>

      <div className="system-tray" aria-label="System tray">
        <button
          type="button"
          className={`tray-icon tray-icon--network ${isConnected ? 'connected' : 'disconnected'}`}
          onClick={() => setIsConnected((prev) => !prev)}
        />
        <span className="tray-clock" title={now.toLocaleString()}>
          <div>{formattedTime}</div>
          <div>{formattedDate}</div>
        </span>
      </div>
    </div>
  );
};

export default Taskbar;