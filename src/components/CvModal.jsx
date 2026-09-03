import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle, ExternalLink, UserCheck, Phone, BookOpen } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import { portfolioData } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { profile, reference } = portfolioData;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-emerald-500/20 z-10 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <div className="flex items-center gap-3">
              <img
                src={profile.photoUrl}
                alt={profile.fullName}
                className="w-12 h-12 rounded-xl object-cover border border-emerald-500/30 shadow-sm"
              />
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-sans">
                  Curriculum Vitae — {profile.fullName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Field Development Officer | B.Sc. Agriculture (Hons.)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 flex-1">
            {/* Objective */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 italic">
              <span className="font-bold not-italic text-emerald-800 dark:text-emerald-400 block mb-1">Career Objective:</span>
              "{profile.objective}"
            </div>

            {/* Quick Profile Summary Box */}
            <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800/40 text-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold">
                <UserCheck className="w-4 h-4" />
                Candidate Resume Summary
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Designation:</strong> {profile.designation}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Company:</strong> {profile.company}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>B.Sc. Ag (Hons):</strong> 7.80 CGPA (April 2026)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Diploma Ag:</strong> 74.14% (2022)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>RAWE:</strong> 28 May 2025 – 31 Aug 2025</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Nursery Intern:</strong> 1 Sept 2025 – 30 Sept 2025</span>
                </li>
              </ul>
            </div>

            {/* Academic Reference Box */}
            {reference && (
              <div className="p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  Academic Reference
                </div>
                <p className="font-semibold text-emerald-800 dark:text-emerald-400">
                  {reference.name} — {reference.designation}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {reference.institution}
                </p>
                <p className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium pt-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{reference.phone}</span>
                </p>
              </div>
            )}

            {/* Document Preview Box */}
            <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center bg-slate-50/50 dark:bg-slate-900/30 space-y-4">
              <FileText className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                  {profile.fullName} — Official Curriculum Vitae
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
                  Ready for direct download or recruitment review.
                </p>
              </div>

              <div className="inline-flex flex-wrap items-center justify-center gap-3 pt-1">
                <a
                  href="/resume-placeholder.pdf"
                  download="Jivan_Dharpure_CV.pdf"
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Complete CV (PDF)
                </a>
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium rounded-xl transition-all flex items-center gap-2"
                >
                  <LinkedInIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  View LinkedIn Profile
                </a>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
