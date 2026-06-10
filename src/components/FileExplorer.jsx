import React, { useState } from 'react';

const FileExplorer = () => {
  const [path, setPath] = useState('C:\\Faareha\\Projects');

  const projects = [
    {
      name: 'LUMO AI',
      description: 'AI-powered learning tutor for CS students',
      tags: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      icon: '🤖'
    },
    {
      name: 'Prime Deals',
      description: 'Real estate platform with appointments & listings',
      tags: ['MERN', 'Express', 'MongoDB', 'React'],
      icon: '🏠'
    },
    {
      name: 'Hope AI',
      description: 'Mental health chatbot using ML',
      tags: ['Python', 'ML', 'Scikit-Learn', 'Flask'],
      icon: '💭'
    },
    {
      name: 'Vintage Portfolio',
      description: 'Windows XP-themed interactive portfolio',
      tags: ['React', 'Vite', 'Tailwind', 'Draggable'],
      icon: '🖥️'
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Toolbar */}
      <div className="bg-gray-200 border-b border-gray-300 p-2 flex items-center gap-1">
        <button className="px-2 py-1 bg-gray-300 hover:bg-gray-400 border border-gray-400 text-sm">
          ← Back
        </button>
        <button className="px-2 py-1 bg-gray-300 hover:bg-gray-400 border border-gray-400 text-sm">
          Forward
        </button>
        <button className="px-2 py-1 bg-gray-300 hover:bg-gray-400 border border-gray-400 text-sm">
          Up
        </button>
      </div>

      {/* Address Bar */}
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex items-center gap-2">
        <label className="text-xs font-semibold text-gray-700">Address</label>
        <input
          type="text"
          value={path}
          readOnly
          className="flex-1 px-2 py-1 border border-gray-400 bg-white text-sm"
        />
        <button className="px-3 py-1 bg-gray-300 hover:bg-gray-400 border border-gray-400 text-sm font-semibold">
          Go
        </button>
      </div>

      {/* File View */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        <div className="space-y-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 hover:bg-blue-100 cursor-pointer rounded border border-transparent hover:border-blue-300 transition-all"
            >
              <span className="text-2xl flex-shrink-0">{project.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-800 flex items-center gap-2">
                  {project.name}
                  <span className="text-lg">→</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-200 border-t border-gray-300 px-3 py-1 text-xs text-gray-700 flex justify-between">
        <span>{projects.length} objects</span>
        <span>GitHub links inside each folder</span>
      </div>
    </div>
  );
};

export default FileExplorer;
