import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Languages as LanguagesIcon, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Strengths() {
  const { strengths, languages } = portfolioData;

  return (
    <section id="strengths" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5" />
            <span>Personal Brand Attributes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            Professional Strengths & Languages
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Strengths Grid */}
        <div className="mb-16">
          <h3 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-6 text-center">
            Core Professional Strengths:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {strengths.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-2 hover:border-emerald-500/40 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-sans">
                  {item}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-center gap-2 mb-6">
            <LanguagesIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">
              Languages Known
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-1"
              >
                <h4 className="font-bold text-lg text-slate-900 dark:text-white font-sans">
                  {lang.name}
                </h4>
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {lang.fluency}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
