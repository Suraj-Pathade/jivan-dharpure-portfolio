import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Users, ShieldCheck, Clock, MessageSquare, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function NssSection() {
  const { nss } = portfolioData;

  const corePillars = [
    { title: "Communication", icon: MessageSquare, desc: "Effective rural dialogue & public outreach" },
    { title: "Teamwork", icon: Users, desc: "Collaborative action in community initiatives" },
    { title: "Community Engagement", icon: HeartHandshake, desc: "Active participation in social welfare" },
    { title: "Responsibility", icon: ShieldCheck, desc: "Disciplined execution of field activities" }
  ];

  return (
    <section id="nss" className="py-24 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Social Responsibility & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            {nss.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {nss.description}
          </p>
        </div>

        {/* 4 Pillars Badge Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {corePillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/40 text-center space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-sm">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Experience Highlights List */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {nss.highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
