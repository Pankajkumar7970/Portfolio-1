import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Selected Work</span>
          <h2 className="font-serif text-5xl text-charcoal mt-4">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gold/10 group flex flex-col h-full"
            >
              {/* Card Header (Placeholder Image or Pattern) */}
              <div className="h-48 bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-4xl italic text-white/10 group-hover:text-gold/20 transition-colors duration-500">
                    {project.title.substring(0, 2)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-500">
                        <CheckCircle size={12} className="mt-0.5 text-gold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-cream border border-gold/20 rounded-full text-xs font-medium text-charcoal/70">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-charcoal hover:text-gold mt-4 transition-colors"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
