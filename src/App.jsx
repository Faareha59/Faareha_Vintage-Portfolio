import { useState } from 'react';

import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import Draggable from 'react-draggable';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import TypingGame from './components/TypingGame';
import Calculator from './components/Calculator';
import Videos from './components/Videos';
import Resume from './components/Resume';
import RandomFactButton from './components/RandomFactButton';
import ErrorPopup from "./components/ErrorPopup";
import ClippyChatBot from "./components/ClippyChatBot";
import Skills from './components/Skills';
import LoginScreen from './components/LoginScreen';
import './App.css';

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [dragged, setDragged] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const shutdownAudioUrl = 'https://archive.org/download/windows-xp-system-sounds/WINDOWS%20XP%20SHUTDOWN.wav';
  const startupAudioUrl = 'https://archive.org/download/windows-xp-system-sounds/WINDOWS%20XP%20STARTUP.wav';
  const clickAudioUrl = 'https://archive.org/download/windows-xp-system-sounds/WINDOWS%20XP%20DING.wav';
  const startMenuAudioUrl = 'https://archive.org/download/windows-xp-system-sounds/WINDOWS%20XP%20START.wav';

  const playSound = (url, volume = 0.7) => {
    try {
      const audio = new Audio(url);
      audio.volume = volume;
      audio.play().catch(() => {});
    } catch (error) {
      // no-op
    }
  };

  const handleRedirect = (url) => {
    alert("Welcome to the modern web!");
    window.open(url, '_blank');
  };

  const handleIconClick = (icon) => {
    if (!dragged) {
      playSound(clickAudioUrl, 0.5);
      if (icon.onClick) {
        icon.onClick();
      } else {
        if (!openWindows.find(w => w.id === icon.id)) {
          setOpenWindows([...openWindows, icon]);
        }
        setActiveWindow(icon.id);
      }
    }
    setDragged(false); // Reset after click
  };

  const handleWindowClose = (id) => {
    setOpenWindows(openWindows.filter(window => window.id !== id));
    if (activeWindow === id) {
      setActiveWindow(openWindows.length > 1 ? openWindows[0].id : null);
    }
  };

  const handleWindowClick = (id) => {
    setActiveWindow(id);
  };

  const toggleStartMenu = () => {
    playSound(startMenuAudioUrl, 0.6);
    setShowStartMenu(!showStartMenu);
  };

  const handleStartMenuItemClick = (icon) => {
    handleIconClick(icon);
    setShowStartMenu(false);
  };

  const handleShutdown = () => {
    setShowStartMenu(false);

    const finalize = () => {
      setOpenWindows([]);
      setActiveWindow(null);
      setIsLoggedIn(false);
    };

    try {
      const audio = new Audio(shutdownAudioUrl);
      audio.volume = 0.8;
      audio.play()
        .then(() => {
          audio.addEventListener('ended', finalize, { once: true });
        })
        .catch(() => finalize());

      setTimeout(finalize, 6000);
    } catch (error) {
      finalize();
    }
  };

  const triggerError = () => {
    const messages = [
      "Oops! Something went wrong.",
      "This feature is not available yet.",
      "Error 404: Fun not found.",
      "You found a secret error!",
      "Motivation.exe has stopped working."
    ];
    setErrorMsg(messages[Math.floor(Math.random() * messages.length)]);
    setShowError(true);
  };

  const handleLogin = () => {
    playSound(startupAudioUrl, 0.7);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <LoginScreen onLogin={handleLogin} />
      </div>
    );
  }

  const systemIcons = [
    {
      id: 'about',
      title: 'About Me',
      icon: '/icons/About-me-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <div>
            <p className="mb-2">I'm a 8th Semester Computer Science student at Riphah International University.</p>
            <p>
              My latest projects include:
              <ul className="list-disc pl-5">
                <li>Fruit Fusion App – a modern fruit platform</li>
                <li>Prime Deals – an e-commerce web app</li>
                <li>Student Mental Health AI – an AI-powered platform supporting student mental health</li>
                <li>Windows XP-themed portfolio</li>
                <li>Game Arena</li>
                <li>Note-Taking App – built with DevOps practices</li>
              </ul>
            </p>
            <p>Always eager to learn and explore new technologies.</p>
          </div>
        </div>
      )
    },
    {
      id: 'my_computer',
      title: 'My Computer',
      icon: '/icons/Computer-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">System Properties</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">General</h3>
            <div className="bg-gray-100 p-3 rounded">
              <p className="mb-1"><strong>System:</strong> Microsoft Windows XP Professional</p>
              <p className="mb-1"><strong>Registered to:</strong> Faareha Raza</p>
              <p className="mb-1"><strong>Computer:</strong> FAAREHA-PC</p>
              <p><strong>Processor:</strong> Intel(R) Core(TM) i7-8th Gen CPU @ 2.20GHz</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Portfolio Information</h3>
            <div className="bg-gray-100 p-3 rounded">
              <p className="mb-1"><strong>Framework:</strong> React 18.2.0</p>
              <p className="mb-1"><strong>Build Tool:</strong> Vite 4.5.0</p>
              <p><strong>Status:</strong> <span className="text-green-600">✓ Running Optimally</span></p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Developer Environment</h3>
            <div className="bg-gray-100 p-3 rounded">
              <p className="mb-1"><strong>IDE:</strong> Visual Studio Code</p>
              <p className="mb-1"><strong>Node.js:</strong> v18.17.0</p>
              <p className="mb-1"><strong>Package Manager:</strong> npm 9.6.7</p>
              <p><strong>Git:</strong> version 2.41.0</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'network',
      title: 'My Network Places',
      icon: '/icons/Internet-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">My Network</h2>
          <p className="mb-2">Connect with me on various platforms:</p>
          <ul className="list-disc pl-5">
            <li><a href="https://github.com/Faareha59" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a></li>
          </ul>
        </div>
      )
    },
    {
      id: 'youtube',
      title: 'YouTube',
      icon: '/icons/youtube.png',
      onClick: () => handleRedirect('https://www.youtube.com')
    },
    {
      id: 'google',
      title: 'Google Chrome',
      icon: '/icons/google.png',
      onClick: () => handleRedirect('https://www.google.com')
    },
    {
      id: 'documents',
      title: 'My Documents',
      icon: '/icons/Documents-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">My Documents</h2>
          <p className="mb-2">Here are some of my documents:</p>
          <div className="flex space-x-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleIconClick({ id: 'resume', title: 'Resume', icon: '/icons/Resume-icon.png', content: <Resume /> });
              }}
              className="text-blue-500 underline"
            >
              <img src="/icons/resume icon.png" alt="Resume" className="w-8 h-8" />
              Resume.pdf
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleIconClick({
                  id: 'videos',
                  title: 'Videos',
                  icon: '/icons/Video-icon.png',
                  content: <Videos />,
                  width: 900,
                  height: 700,
                });
              }}
              className="text-blue-500 underline flex flex-col items-center"
            >
              <img
                src="/icons/Video-icon.png"
                alt="Videos"
                className="w-8 h-8"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://win98icons.alexmeub.com/icons/png/msn_media_video-0.png';
                }}
              />
              Videos
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'music',
      title: 'Music',
      icon: '/icons/Music-Library-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">My Music</h2>
          <p className="mb-2">Some of my favorite music to code to:</p>
          <ul className="list-disc pl-5">
            <li>
              <button
                onClick={() => {
                  const audio = document.getElementById('California Dreamin');
                  if (audio.paused) {
                    audio.play();
                  } else {
                    audio.pause();
                  }
                }}
                className="text-blue-500 underline"
              >
                California Dreamin
              </button>
              <audio id="California Dreamin" src="/music/The Mamas & The Papas - California Dreamin'.mp3"></audio>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'calculator',
      title: 'Calculator',
      icon: '/icons/Calculator-icon.png',
      content: <Calculator />
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: '/icons/Skills-icon.png',
      content: <Skills />
    },
    {
      id: 'resume',
      title: 'My Resume',
      icon: '/icons/resume%20icon.png',
      content: <Resume />
    },
    {
      id: 'user_account',
      title: 'Faareha',
      icon: '/icons/Windows-Messenger-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Faareha's Profile</h2>
          <p className="mb-2">Welcome to my profile!</p>
          <p className="mb-2">I'm a 8th Semester Computer Science student at Riphah International University.</p>
        </div>
      )
    }
  ];

  const desktopIconIds = ['about', 'my_computer', 'network', 'youtube', 'google', 'documents', 'user_account'];
  const desktopIcons = systemIcons.filter((icon) => desktopIconIds.includes(icon.id));

  const portfolioIcons = [
    {
      id: 'projects',
      title: 'My Projects',
      icon: '/icons/Projects-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">My Projects</h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold">1-Tic Tac Toe Game</h3>
            <p className="mt-2">Tech Stack: C++</p>
            <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/details/projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Linkedin Projects</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">2-Flight Reservation System</h3>
            <p className="mt-2">Tech Stack: Object-Oriented Programming (OOP), Java</p>
            <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/details/projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Linkedin Projects</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">3-Social Media Marketing</h3>
            <p className="mt-2">Tech Stack: Project Management</p>
            <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/details/projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Linkedin Projects</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">4-Student Management System</h3>
            <p className="mt-2">Tech Stack: Java, NetBeans</p>
            <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/details/projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Linkedin Projects</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">5-Art and Heaven</h3>
            <p className="mt-2">Tech Stack: HTML, CSS, JavaScript, PHP, XAMPP</p>
            <a href="https://github.com/Faareha59/Art_and_Heaven" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub Repo</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">6-Game Arena-Shell Scripting</h3>
            <p className="mt-2">Tech Stack: Shell Scripting, Git Bash</p>
            <a href="https://github.com/Faareha59/Game_Arena_OS" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub Repo</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">7-Hope AI-Student Mental Health Predictor</h3>
            <p className="mt-2">Tech Stack: Python,AI</p>
            <a href="https://github.com/Faareha59/Game_Arena_OS" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub Repo</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">8-Fruit Fusion</h3>
            <p className="mt-2">Tech Stack: React Native, Expo Go, Firebase</p>
            <a href="https://github.com/Faareha59/Fruit-Fusion" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub Repo</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">10-Prime Deals</h3>
            <p className="mt-2">Tech Stack: MongoDB, Express, React, Postman API, Tailwind CSS</p>
            <a href="https://github.com/Faareha59/Prime-Deals/tree/ProjectTemplate/PrimeDeals-App" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub Repo</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">11-Note-Taking App</h3>
            <p className="mt-2">Tech Stack: DevOps, Modern Web Technologies</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub Repo (Coming Soon)</a>
          </div>
        </div>
      )
    },
    {
      id: 'typing_game',
      title: 'Typing Game',
      icon: '/icons/Typing.png',
      content: <TypingGame />
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: '/icons/contacts-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <p className="mb-2">
            Email: <a href="mailto:faareharaza59@gmail.com" className="text-blue-500 underline">faareharaza59@gmail.com</a>
          </p>
          <p className="mb-2">
            LinkedIn: <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">www.linkedin.com/in/faareha-raza-08a0b1255</a>
          </p>
          <p className="mb-2">
            GitHub: <a href="https://github.com/Faareha59" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">github.com/Faareha59</a>
          </p>
        </div>
      )
    }
  ];

  const startMenuIcons = [...systemIcons, ...portfolioIcons];

  return (
    <div className="app-container">
      <div className="relative h-full w-full overflow-hidden">
        <div className="desktop h-full w-full p-4 overflow-hidden">
          <div className="flex flex-col items-start">
            {desktopIcons.map((icon) => (
              <Draggable
                key={icon.id}
                defaultPosition={{ x: 0, y: 0 }}
                onStart={() => setDragged(false)}
                onDrag={() => setDragged(true)}
                onStop={() => setTimeout(() => setDragged(false), 100)}
              >
                <div onClick={() => handleIconClick(icon)} style={{ cursor: 'pointer' }}>
                  <DesktopIcon icon={icon} />
                </div>
              </Draggable>
            ))}
          </div>

          {openWindows.map((window) => (
            <Window
              key={window.id}
              window={window}
              isActive={activeWindow === window.id}
              onClose={() => handleWindowClose(window.id)}
              onClick={() => handleWindowClick(window.id)}
            />
          ))}
        </div>

        <Taskbar
          onStartClick={toggleStartMenu}
          openWindows={openWindows}
          activeWindow={activeWindow}
          onWindowClick={handleWindowClick}
        />

        {showStartMenu && (
          <StartMenu
            icons={startMenuIcons}
            onItemClick={handleStartMenuItemClick}
            onShutdown={handleShutdown}
          />
        )}

        <div style={{ position: 'fixed', bottom: '120px', right: '32px', zIndex: 2100 }}>
          <ClippyChatBot />
        </div>

        <div className="screen-overlay"></div>
        <div className="crt-effect"></div>

        {showError && <ErrorPopup message={errorMsg} onClose={() => setShowError(false)} />}
      </div>
    </div>
  );
}

export default App;