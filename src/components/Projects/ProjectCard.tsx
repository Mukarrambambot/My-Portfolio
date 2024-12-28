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
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(item => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={links.github}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          {links.live && (
            <a
              href={links.live}
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
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