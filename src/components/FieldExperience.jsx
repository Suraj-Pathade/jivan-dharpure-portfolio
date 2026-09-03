import React from 'react';
import { motion } from 'framer-motion';
import { Users, Store, TrendingUp, Presentation, Eye, Sprout, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FieldExperience() {
  const { fieldExperienceCards } = portfolioData;

  const iconMap = {
    Users: Users,
    Store: Store,
    TrendingUp: TrendingUp,
    Presentation: Presentation,
    Eye: Eye
  };

  return (
    <section id="field-experience" className="py-24 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5" />
            <span>Practical Application</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            From Knowledge to Field
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Translating agricultural science into real-world farmer engagement and agribusiness growth
          </p>
        </div>

        {/* Interactive Field Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fieldExperienceCards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Sprout;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle Leaf Accent Watermark */}
                <Sprout className="w-24 h-24 text-emerald-600/5 dark:text-emerald-400/5 absolute bottom-2 right-2 group-hover:scale-110 transition-transform pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shadow-sm group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-800 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Field Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
