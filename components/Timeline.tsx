import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="bg-charcoal py-24 text-cream relative overflow-hidden">
      {/* Background Texture/Grain */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block border border-gold/30 rounded-full px-4 py-1 mb-6">
            <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Milestones
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mb-6">
            The Journey
          </h2>
          <p className="text-white/60 font-light max-w-2xl mx-auto">
            From writing the first line of code to building complex full-stack applications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 transform md:-translate-x-1/2 opacity-30" />

          <div className="space-y-16">
            {TIMELINE_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Center Node */}
                <div className="absolute left-[20px] md:left-1/2 w-3 h-3 rounded-full bg-charcoal border border-gold shadow-[0_0_10px_rgba(169,142,98,0.4)] z-10 transform -translate-x-1/2 mt-2" />

                {/* Content Side */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className={`
                    group transition-all duration-300
                  `}>
                    <span className={`
                      inline-block text-xs font-bold tracking-widest text-gold mb-2
                    `}>
                      {item.year}
                    </span>
                    
                    <h3 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors duration-300 mb-1">
                      {item.title}
                    </h3>
                    
                    <h4 className="text-sm font-medium text-white/40 mb-4 uppercase tracking-wide">
                      {item.subtitle}
                    </h4>
                    
                    <ul className={`space-y-2 text-sm text-white/70 font-light leading-relaxed ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                      {item.description.map((desc, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                           <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Side for layout balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;