import React, { useState } from "react";
import Draggable from "react-draggable";

const defaultIcons = [
  { id: 1, name: "My Projects", icon: "🗂️" },
  { id: 2, name: "Videos", icon: "🎬" },
  { id: 3, name: "Contact", icon: "📧" },
];

const wallpapers = [
  { name: "XP Default", url: "/wallpapers/xp.jpg" },
  { name: "Sunset", url: "/wallpapers/sunset.jpg" },
  { name: "Mountains", url: "/wallpapers/mountains.jpg" },
];

const DraggableDesktop = () => {
  const [icons, setIcons] = useState(defaultIcons);
  const [wallpaper, setWallpaper] = useState(wallpapers[0].url);

  // Add a new shortcut
  const addShortcut = () => {
    const name = prompt("Enter shortcut name:");
    if (name) {
      setIcons([...icons, { id: Date.now(), name, icon: "⭐" }]);
    }
  };

  // Remove a shortcut
  const removeShortcut = (id) => {
    setIcons(icons.filter((icon) => icon.id !== id));
  };

  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s",
      }}
    >
      {/* Wallpaper changer */}
      <div className="absolute top-4 right-4 bg-white/80 rounded p-2 shadow z-10">
        <span className="mr-2">Wallpaper:</span>
        <select
          value={wallpaper}
          onChange={(e) => setWallpaper(e.target.value)}
        >
          {wallpapers.map((wp) => (
            <option key={wp.url} value={wp.url}>
              {wp.name}
            </option>
          ))}
        </select>
      </div>

      {/* Add shortcut button */}
      <button
        className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded shadow z-10"
        onClick={addShortcut}
      >
        + Add Shortcut
      </button>

      {/* Draggable icons */}
      {icons.map((icon, idx) => (
        <Draggable key={icon.id} defaultPosition={{ x: 40, y: 40 + idx * 80 }}>
          <div className="absolute flex flex-col items-center cursor-pointer select-none">
            <span className="text-4xl">{icon.icon}</span>
            <span className="text-xs bg-white/80 rounded px-1 mt-1">{icon.name}</span>
            <button
              className="text-red-500 text-xs mt-1"
              onClick={() => removeShortcut(icon.id)}
            >
              Remove
            </button>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default DraggableDesktop;