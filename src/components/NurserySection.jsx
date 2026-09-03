import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, CheckCircle2, ShieldAlert, Droplets, SunMedium, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function NurserySection() {
  const { nursery } = portfolioData;

  return (
    <section id="nursery" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5" />
            <span>Practical Agronomy Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            Nursery Internship
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
          <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400">
            {nursery.company} — {nursery.role}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Nursery Visual Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-900 to-slate-900 p-8 text-white shadow-xl overflow-hidden border border-emerald-500/20">
              <Sprout className="w-48 h-48 text-emerald-500/10 absolute -bottom-10 -right-10 pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold rounded-full">
                  Nursery & Seedling Management
                </span>
                <h3 className="text-2xl font-bold font-sans">
                  {nursery.company}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {nursery.description}
                </p>

                <div className="pt-4 border-t border-emerald-800/60 grid grid-cols-2 gap-3 text-xs text-emerald-200 font-medium">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-emerald-400" />
                    <span>Micro-Irrigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SunMedium className="w-4 h-4 text-amber-400" />
                    <span>Hardening Control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-teal-400" />
                    <span>Tray Preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                    <span>Pest Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Responsibilities List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Core Technical Operations Learned:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nursery.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
