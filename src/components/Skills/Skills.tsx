import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from './skillsData';

export default function Skills() {
  return (
    <section className="py-20 bg-neutral-50" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}