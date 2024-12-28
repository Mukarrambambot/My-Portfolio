import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Hall Booking System',
    description: 'A modern hall booking system with real-time availability tracking and automated scheduling.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'MongoDB'],
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'LitterCam Enhanced',
    description: 'AI-powered litter detection system using computer vision and machine learning.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    links: {
      github: '#',
      live: '#'
    }
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}