import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, Calendar, Home, Copy, Check } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onOpenCv }) {
  const { profile } = portfolioData;
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/${profile.phoneRaw.replace('+', '')}?text=${profile.whatsappMessage}`;

  return (
    <section id="contact" className="py-24 relative bg-slate-100/70 dark:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            For professional opportunities, agribusiness collaborations, and agriculture-related discussions, feel free to reach out.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Action Buttons & Contact Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Connect Action Buttons */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">
                Instant Professional Communication
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Call Me */}
                <a
                  href={`tel:${profile.phoneRaw}`}
                  className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-800 transition-all group flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-700 text-white group-hover:bg-white group-hover:text-emerald-800 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-emerald-200">
                      Direct Phone
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-white">
                      Call Me
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/40 hover:bg-green-700 hover:text-white transition-all group flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-green-600 text-white group-hover:bg-white group-hover:text-green-700 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-green-100">
                      WhatsApp Chat
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-white">
                      WhatsApp Me
                    </span>
                  </div>
                </a>

                {/* Email Me */}
                <a
                  href={`mailto:${profile.email}`}
                  className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/40 hover:bg-teal-700 hover:text-white transition-all group flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-teal-600 text-white group-hover:bg-white group-hover:text-teal-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-teal-100">
                      Official Email
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-white">
                      Email Me
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/40 hover:bg-sky-700 hover:text-white transition-all group flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-sky-600 text-white group-hover:bg-white group-hover:text-sky-700 transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-sky-100">
                      LinkedIn Network
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-white">
                      LinkedIn Profile
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Address & Verified Profile Info */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Current Job Base & Location
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium pl-8">
                {profile.location}
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <Home className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                    Permanent Address
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {profile.permanentAddress}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Card & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                Candidate Contact Summary
              </h3>

              <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                  <span className="font-medium">Full Name:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{profile.fullName}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                  <span className="font-medium">Phone:</span>
                  <a href={`tel:${profile.phoneRaw}`} className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                    {profile.phone}
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                  <span className="font-medium">Email:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">{profile.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                  <span className="font-medium">Current Role:</span>
                  <span className="font-bold text-slate-900 dark:text-white">Field Development Officer</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                  <span className="font-medium">Current Company:</span>
                  <span className="font-bold text-slate-900 dark:text-white">Zydex Industries Pvt. Ltd.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenCv}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-800 to-green-900 hover:from-emerald-900 hover:to-slate-900 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Download Curriculum Vitae (PDF)
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
