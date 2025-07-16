import React from 'react';

const Resume = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Resume</h2>
      <iframe
        src="/public/Final Faareha Resume.pdf"
        width="100%"
        height="600px"
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;