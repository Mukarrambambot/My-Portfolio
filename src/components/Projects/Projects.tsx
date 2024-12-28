import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from './projectsData';

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/mukarram"
            className="inline-flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Github size={20} />
            <span>More projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}