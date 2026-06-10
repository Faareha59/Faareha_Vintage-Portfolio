import React from 'react';

const AboutMe = () => {
  const skills = [
    'React',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'AI/ML',
    'Full Stack',
    'Python',
    'Express'
  ];

  return (
    <div className="p-4 bg-gradient-to-br from-blue-50 to-white h-full overflow-y-auto" style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
      <div className="max-w-md mx-auto">
        {/* Avatar and Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* FR Avatar */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 border-2 border-blue-800 shadow-md">
            <span className="text-white text-xl font-bold">FR</span>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800">Faareha Raza</h1>
            <p className="text-sm text-gray-600 mt-0.5">Full Stack & AI Developer</p>
            <p className="text-xs text-gray-500 mt-0.5">Islamabad, Pakistan</p>
            {/* Open to Work Badge */}
            <div className="flex items-center bg-green-100 px-2 py-1 rounded-full border border-green-500 mt-2 w-fit">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
              <span className="font-semibold text-green-700 text-xs">OPEN TO WORK</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-3 bg-white p-3 rounded border border-gray-300 shadow-sm">
          <p className="text-gray-700 text-xs leading-relaxed">
            Full-stack developer with expertise in MERN stack, AI/ML, and modern web technologies. CS student at Riphah University with 2 internships and shipped AI products.
          </p>
        </div>

        {/* Skills Tags */}
        <div className="mb-3 bg-white p-3 rounded border border-gray-300 shadow-sm">
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mb-3 bg-white p-3 rounded border border-gray-300 shadow-sm">
          <p className="text-gray-700 text-xs leading-relaxed">
            🔨 Building AI-powered applications<br/>
            📚 Learning advanced ML techniques<br/>
            🚀 Open for full-time opportunities
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center text-xs text-gray-600 pt-2 border-t border-gray-300">
          <p className="mt-2">📧 faareharaza59@gmail.com</p>
          <p>🔗 github.com/Faareha59</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
