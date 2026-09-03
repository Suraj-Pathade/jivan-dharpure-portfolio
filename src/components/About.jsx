import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, Sprout, HeartHandshake, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { profile } = portfolioData;

  const highlightCards = [
    {
      title: "B.Sc. Agriculture (Hons.)",
      subtitle: "7.80 CGPA — April 2026",
      desc: "Bajaj College of Agriculture, Pipri-Wardha",
      icon: GraduationCap,
      color: "emerald"
    },
    {
      title: "Field Development Officer",
      subtitle: "Zydex Industries Pvt. Ltd.",
      desc: "Joining: 1 July 2026 • Rajura, Chandrapur",
      icon: Briefcase,
      color: "green"
    },
    {
      title: "Farmer & Retailer Interaction",
      subtitle: "Ground Field Relations",
      desc: "Field visits, input product advice & channel support",
      icon: Users,
      color: "teal"
    },
    {
      title: "RAWE Experience",
      subtitle: "Rural Agriculture Exposure",
      desc: "Practical village demonstrations & problem solving",
      icon: Sprout,
      color: "amber"
    },
    {
      title: "NSS & Nursery Experience",
      subtitle: "Community & Agronomy",
      desc: "Veterinary camps, health demos & nursery management",
      icon: HeartHandshake,
      color: "emerald"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            About Jivan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Detailed Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              <p className="font-semibold text-lg text-slate-800 dark:text-slate-100">
                {profile.aboutBio[0]}
              </p>
              <p>
                {profile.aboutBio[1]}
              </p>
              <p className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-600 rounded-r-xl font-medium text-slate-800 dark:text-slate-200">
                {profile.aboutBio[2]}
              </p>
            </div>

            {/* Quick Personal Attributes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Date of Birth</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{profile.dob}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Academic Grade</span>
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">7.80 CGPA (B.Sc. Ag)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center col-span-2 sm:col-span-1">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Job Base Location</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Rajura, Chandrapur</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Key Academic & Professional Highlights
            </h3>

            <div className="space-y-3">
              {highlightCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{ x: 6 }}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 shrink-0 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                        {card.title}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        {card.subtitle}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
