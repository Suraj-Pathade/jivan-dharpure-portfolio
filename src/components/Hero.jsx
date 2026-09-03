import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Sprout, MapPin, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenCv }) {
  const { profile } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Natural Background Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Organic Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-green-600/10 dark:bg-green-600/5 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl" />

        {/* Subtle Agricultural Grid / Field Pattern Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" width="100%" height="100%">
          <pattern id="field-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-900 dark:text-emerald-400" />
            <circle cx="20" cy="20" r="1" className="fill-emerald-800 dark:fill-emerald-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#field-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Profile Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wide">
              <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Agribusiness & Field Development Officer</span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans">
                {profile.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-emerald-800 dark:text-emerald-400 font-sans">
                {profile.designation} <span className="text-slate-400 dark:text-slate-600 font-normal">|</span> {profile.company}
              </p>
            </div>

            {/* Short Tagline Statement */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-semibold max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              "{profile.heroSubtext}"
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profile.supportingStatement}
            </p>

            {/* Verified Details Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-600 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zydex Industries Pvt. Ltd.</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Rajura, Chandrapur</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Joining: 1 July 2026</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Download CV */}
              <button
                onClick={onOpenCv}
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-800 via-emerald-900 to-green-950 hover:from-emerald-900 hover:to-slate-900 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 border border-emerald-500/30"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              {/* Let's Connect */}
              <a
                href="#contact"
                className="px-6 py-3.5 bg-emerald-100/90 dark:bg-slate-800 hover:bg-emerald-200 dark:hover:bg-slate-700 text-emerald-900 dark:text-emerald-200 font-bold text-sm rounded-xl transition-all flex items-center gap-2.5 border border-emerald-300 dark:border-slate-700 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>

              {/* View LinkedIn */}
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 border border-slate-300 dark:border-slate-800 shadow-sm"
                aria-label="View LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Real Professional Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glow & Decorative Accents */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl blur-md opacity-30 dark:opacity-40 animate-pulse" />
              
              {/* Main Photo Card Container */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-3 border border-emerald-500/20 shadow-2xl overflow-hidden">
                
                {/* Real Candidate Portrait Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-emerald-800/40 bg-slate-900 group">
                  <img
                    src={profile.photoUrl}
                    alt={profile.fullName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <h3 className="text-xl font-bold font-sans drop-shadow-md">
                      {profile.fullName}
                    </h3>
                    <p className="text-xs text-emerald-300 font-semibold">
                      B.Sc. Agriculture (Hons.) — 7.80 CGPA
                    </p>
                    <p className="text-[11px] text-slate-300">
                      Field Development Officer • Zydex Industries
                    </p>
                  </div>
                </div>

                {/* Corner Decorative Accent */}
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Photo
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Maharashtra, India</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
