import React from 'react';
import { Sprout, ArrowUp, Mail, Phone } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-emerald-900/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-900 flex items-center justify-center text-emerald-300 font-bold text-lg border border-emerald-500/30">
              <Sprout className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base font-sans">
                {profile.fullName}
              </h3>
              <p className="text-xs text-slate-400">
                {profile.designation} • {profile.company}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#field-experience" className="hover:text-emerald-400 transition-colors">Field Exposure</a>
            <a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 hover:bg-emerald-900 text-slate-300 hover:text-white transition-colors border border-slate-800 flex items-center gap-2 text-xs font-semibold"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-emerald-400" />
          </button>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
          <p>Designed for Modern Agriculture & Premium Corporate Personal Branding</p>
        </div>

      </div>
    </footer>
  );
}
