import React from 'react';

const Certificates = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Certificates</h2>
      <iframe
        src="/public/Certificates.zip"
        width="100%"
        height="600px"
        title="Certificates"
      ></iframe>
    </div>
  );
};

export default Certificates;