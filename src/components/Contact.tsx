import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-neutral-50" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-8 mb-12">
            <a
              href="mailto:contact@example.com"
              className="flex flex-col items-center text-neutral-700 hover:text-blue-500 transition-colors"
            >
              <Mail size={24} className="mb-2" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com"
              className="flex flex-col items-center text-neutral-700 hover:text-blue-500 transition-colors"
            >
              <Github size={24} className="mb-2" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex flex-col items-center text-neutral-700 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} className="mb-2" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-neutral-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white border border-neutral-200 text-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-neutral-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white border border-neutral-200 text-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-neutral-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white border border-neutral-200 text-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}