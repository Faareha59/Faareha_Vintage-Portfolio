import React from 'react';
import './LoginScreen.css';

function LoginScreen({ onLogin }) {
  return (
    <div className="login-screen">
      <div className="login-overlay" role="dialog" aria-label="Windows XP Welcome">
        <div className="login-panel">
          <div className="panel-left">
            <img
              src="./icons/Windows-icon xp.png"
              alt="Windows XP logo"
              className="xp-logo-img"
              onError={(e) => {
                e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2002.svg/320px-Windows_logo_-_2002.svg.png';
              }}
            />
            <p className="login-instruction">To begin, click user name</p>
          </div>

          <span className="login-divider" aria-hidden="true" />

          <div className="panel-right">
            <button className="user-tile" onClick={() => onLogin({ username: 'Faareha' })}>
          <div className="user-tile-frame">
                <div
                  className="user-tile-avatar"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#4A90E2',
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    margin: 'auto'
                  }}
                >
                  FR
                </div>
              </div>
              <span className="user-tile-name">Faareha</span>
            </button>
          </div>
        </div>

        <div className="login-bottom">
          <p className="login-helper">To see my profile, click the Faareha user name to log in.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
