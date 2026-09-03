import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ArrowRight, Users, MessageSquare, CheckCircle, Presentation } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function RaweSection() {
  const { rawe } = portfolioData;

  return (
    <section id="rawe" className="py-24 relative bg-slate-100/70 dark:bg-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5" />
            <span>Practical Field Immersion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            {rawe.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
          <p className="text-base text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {rawe.description}
          </p>
        </div>

        {/* Visual Concept Flow: Classroom -> Field -> Farmer -> Practical Learning */}
        <div className="mb-16">
          <h3 className="text-center text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 mb-8">
            Learning Progression Matrix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {rawe.flowSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md group hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                    {step.step}
                  </span>
                  {idx < rawe.flowSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-5 h-5 text-slate-400 dark:text-slate-600 group-hover:text-emerald-500 transition-colors" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {rawe.highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                  {highlight}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Hands-on field extension & rural engagement
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
