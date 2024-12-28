import React from 'react';
import { Github, Linkedin, Mail, GamepadIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-800 to-neutral-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="relative container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">
        <div className="animate-fadeIn">
          <div className="w-48 h-48 rounded-full border-4 border-blue-400 overflow-hidden mb-8 mx-auto shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Mukarram Bambot"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4 text-center animate-slideUp">
            Mukarram Bambot
          </h1>
          <p className="text-xl text-blue-100 mb-8 text-center animate-slideUp animation-delay-200">
            Software Developer | Marvel Enthusiast | Gamer
          </p>
          
          <div className="flex gap-6 justify-center mb-12 animate-slideUp animation-delay-400">
            <a href="https://github.com" className="text-white hover:text-blue-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-white hover:text-blue-300 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#gaming" className="text-white hover:text-blue-300 transition-colors">
              <GamepadIcon size={24} />
            </a>
          </div>
          
          <div className="animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white mx-auto">
              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-2 animate-scrollDown" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}