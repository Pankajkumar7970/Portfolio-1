import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";

const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-cream border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-charcoal mb-16 text-center">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Icon size={100} />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
