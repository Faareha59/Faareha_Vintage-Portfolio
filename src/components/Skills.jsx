import React from "react";

const skills = [
  { name: "MERN Stack", level: 78 },
  { name: "Mobile App Development", level: 80 },
  { name: "Python", level: 50 },
  { name: "Linux", level: 55 },
  { name: "JavaScript", level: 65 },
  { name: "Java", level: 70 },
  { name: "Html", level: 80 },
  { name: "CSS", level: 76 },

  // Add more skills as needed
];

const Skills = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">My Skills</h2>
    <div className="space-y-4">
      {skills.map(skill => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded h-4">
            <div
              className="bg-blue-600 h-4 rounded"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;