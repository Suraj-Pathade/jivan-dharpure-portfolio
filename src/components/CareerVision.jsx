import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sprout, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CareerVision() {
  const { careerVision } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-green-950 text-white">
      {/* Background Animated SVG Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <Sprout className="w-96 h-96 text-emerald-400 absolute -bottom-20 -left-20 animate-pulse" />
        <Sprout className="w-80 h-80 text-teal-400 absolute -top-20 -right-20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Professional Ambition</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans text-white tracking-tight">
          Career Vision
        </h2>

        <div className="relative max-w-3xl mx-auto pt-4">
          <Quote className="w-12 h-12 text-emerald-500/30 mx-auto mb-4" />
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-2xl font-serif italic text-emerald-100 leading-relaxed"
          >
            "{careerVision.quote}"
          </motion.blockquote>
        </div>

        <div className="pt-6 flex justify-center">
          <div className="px-6 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-xs text-emerald-300 font-semibold tracking-wide">
            Jivan Shankarrao Dharpure • Field Development Officer
          </div>
        </div>

      </div>
    </section>
  );
}
