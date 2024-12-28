import React from 'react';
import { Code2, Gamepad2, Film, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideRight">
            <p className="text-lg text-gray-300">
              Hi! I'm Mukarram, a passionate software developer with a love for creating
              innovative solutions. When I'm not coding, you'll find me immersed in the
              Marvel universe, playing games, or exploring new technologies.
            </p>
            <p className="text-lg text-gray-300">
              My journey in tech is driven by curiosity and creativity, much like the
              superheroes I admire. I believe in using technology to make a positive
              impact, one project at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-slideLeft">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <Code2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-400">Passionate about clean, efficient code</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <Gamepad2 className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Gaming</h3>
              <p className="text-gray-400">Avid gamer and tech enthusiast</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <Film className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Marvel & DC</h3>
              <p className="text-gray-400">Superhero universe enthusiast</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Learning</h3>
              <p className="text-gray-400">Always exploring new technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}