import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20">
      
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            x: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block border border-gold/50 rounded-full px-4 py-1 mb-8"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Portfolio • 2024
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl text-charcoal mb-6 leading-tight"
        >
          Pankaj <span className="italic text-gold">Kumar</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-2xl md:text-3xl text-charcoal/60 italic mb-8"
        >
          {PERSONAL_INFO.role}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-charcoal/80 leading-relaxed mb-12"
        >
          <p className="text-lg">
            {PERSONAL_INFO.tagline} A passionate problem solver specializing in React ecosystem.
            From responsive web interfaces to complex mobile applications, I craft code that matters.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-xs tracking-widest uppercase text-charcoal/40">Discover</span>
          <a 
            href="#simulation" 
            className="w-10 h-10 border border-charcoal/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors animate-bounce"
          >
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>

      {/* Decorative Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] border border-gold/10 rounded-[45%] pointer-events-none rotate-12" />
    </section>
  );
};

export default Hero;
