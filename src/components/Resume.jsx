import React from 'react';
import { FaDownload, FaExpand } from 'react-icons/fa';

const Resume = () => {
  console.log('Rendering Resume component');
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">My Resume</h2>
        <div className="flex space-x-4">
          <a 
            href="Faareha Raza(CV).pdf" 
            download
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            <FaDownload className="mr-2" /> Download
          </a>
          <a 
            href="Faareha Raza(CV).pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
          >
            <FaExpand className="mr-2" /> Open in New Tab
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="Faareha Raza(CV).pdf#toolbar=0&view=FitH"
          width="100%"
          height="800px"
          title="Faareha's Resume"
          className="border-0"
          style={{ minHeight: '70vh' }}
        >
          <p>Your browser does not support PDFs. 
            <a href="Faareha Raza(CV).pdf" className="text-blue-500 hover:underline">
              Download the resume
            </a>
          </p>
        </iframe>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>If the resume doesn't load properly, you can <a href="Faareha Raza(CV).pdf" className="text-blue-500 hover:underline">download it here</a>.</p>
      </div>
    </div>
  );
};

export default Resume;