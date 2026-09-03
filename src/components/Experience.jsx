import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const currentExp = experience[0]; // Zydex Industries Pvt. Ltd.

  return (
    <section id="experience" className="py-24 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            Current Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Verified corporate role in agricultural field development and agribusiness extension
          </p>
        </div>

        {/* Experience Card Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-teal-500 to-green-700" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-lg text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Current Role</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans">
                  {currentExp.role}
                </h3>
                <div className="flex items-center gap-2 text-base font-bold text-emerald-800 dark:text-emerald-400">
                  <Building className="w-4 h-4" />
                  <span>{currentExp.company}</span>
                </div>
              </div>

              <div className="space-y-2 shrink-0 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2 font-medium bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>{currentExp.period}</span>
                </div>
                <div className="flex items-center gap-2 font-medium bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>{currentExp.location}</span>
                </div>
              </div>

            </div>

            {/* Core Responsibilities Grid */}
            <div className="pt-6 space-y-4">
              <h4 className="text-sm uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                Key Responsibilities & Field Scope:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentExp.responsibilities.map((resp, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {resp}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Note Badge */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Focus Area: Agribusiness Input Products & Channel Management</span>
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">Rajura • Chandrapur Circle</span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
