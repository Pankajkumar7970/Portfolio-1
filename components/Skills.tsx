import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-charcoal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block border border-gold/50 rounded-full px-4 py-1 mb-6"
           >
             <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
               Expertise
             </span>
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="font-serif text-5xl md:text-6xl text-charcoal mb-6"
           >
             Technical Arsenal
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-charcoal/60 max-w-2xl mx-auto text-lg leading-relaxed"
           >
             A curated stack of modern technologies I use to build robust, scalable applications.
           </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-8 border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Hover Background Fill Effect */}
                <div className="absolute inset-0 bg-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-cream border border-gold/20 flex items-center justify-center mb-6 text-charcoal group-hover:text-gold group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-serif text-xl text-charcoal font-medium mb-2 group-hover:text-gold transition-colors">
                    {skill.name}
                  </h3>
                  
                  <div className="h-px w-8 bg-charcoal/10 my-3 group-hover:w-12 group-hover:bg-gold/30 transition-all duration-300" />
                  
                  <span className="text-xs font-bold tracking-widest text-charcoal/40 uppercase group-hover:text-charcoal/60 transition-colors">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;