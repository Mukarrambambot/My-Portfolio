import React from 'react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'SQL', level: 80 },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg text-white font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}