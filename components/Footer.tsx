import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Let's Connect</h2>
            <p className="text-gray-400 text-lg max-w-md mb-8">
              Open to React Development opportunities and exciting collaborations.
            </p>

            <div className="flex flex-col gap-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-gold hover:text-white transition-colors">
                <Mail size={20} />
                {PERSONAL_INFO.email}
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={20} />
                {PERSONAL_INFO.phone}
              </div>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
                Github Profile
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 border border-white/5 rounded-full scale-110 animate-pulse"></div>
              <div className="text-center">
                <p className="font-serif italic text-2xl text-gold">Based in</p>
                <p className="font-bold text-3xl mt-2">{PERSONAL_INFO.location.split(',')[0]}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pankaj Kumar. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
