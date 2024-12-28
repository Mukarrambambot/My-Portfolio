import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github: string;
    live?: string;
  };
}

export default function ProjectCard({ title, description, image, tech, links }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(item => (
            <span
              key={item}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={links.github}
            className="flex items-center gap-2 text-neutral-700 hover:text-blue-600 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          {links.live && (
            <a
              href={links.live}
              className="flex items-center gap-2 text-neutral-700 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}