import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ZoomIn, Sprout, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Gallery() {
  const { galleryCategories, galleryItems } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleNext = (e) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            Field & Professional Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Field operations, college experiences, RAWE demonstrations & extension work
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Styled Placeholder Container */}
                <div className={`w-full ${item.aspectRatio} bg-gradient-to-br ${item.placeholderBg} p-6 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  
                  {/* Subtle Sprout Pattern */}
                  <Sprout className="w-32 h-32 text-white/10 absolute -bottom-6 -right-6 pointer-events-none" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10 pt-12">
                    <h4 className="font-bold text-base font-sans drop-shadow-md">
                      {item.title}
                    </h4>
                    <p className="text-xs text-emerald-200 font-medium line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-xl bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                    Click to View Details
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Notice for User/Jivan */}
        <div className="mt-12 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl max-w-2xl mx-auto text-center space-y-1">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            <Info className="w-4 h-4" />
            <span>Photo Placeholder System</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Real field, RAWE, NSS, and nursery photos can be dropped into <code>src/assets/gallery/</code> to instantly update these cards with Jivan's actual field photographs.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md">
            
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setSelectedItem(null)} />

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {selectedItem.tag}
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className={`w-full aspect-video bg-gradient-to-br ${selectedItem.placeholderBg} p-8 flex flex-col justify-end text-white relative`}>
                <Sprout className="w-40 h-40 text-white/10 absolute top-4 right-4 pointer-events-none" />
                
                <h3 className="text-2xl font-bold font-sans">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-emerald-200 mt-1">
                  {selectedItem.subtitle}
                </p>
              </div>

              {/* Footer */}
              <div className="p-5 text-xs text-slate-400 bg-slate-950 flex items-center justify-between">
                <span>Category: {selectedItem.category.toUpperCase()}</span>
                <span>Click outside or ESC to close</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
