import React, { useState } from 'react';
import { useTheme } from './utils/theme';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import RaweSection from './components/RaweSection';
import NssSection from './components/NssSection';
import NurserySection from './components/NurserySection';
import Education from './components/Education';
import Skills from './components/Skills';
import FieldExperience from './components/FieldExperience';
import CareerVision from './components/CareerVision';
import Strengths from './components/Strengths';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeafCursor from './components/LeafCursor';
import CvModal from './components/CvModal';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleOpenCv = () => setIsCvModalOpen(true);
  const handleCloseCv = () => setIsCvModalOpen(false);

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 relative">
      
      {/* Desktop Agriculture Leaf Mouse Effect */}
      <LeafCursor />

      {/* Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} onOpenCv={handleOpenCv} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenCv={handleOpenCv} />
        <About />
        <Experience />
        <RaweSection />
        <NssSection />
        <NurserySection />
        <Education />
        <Skills />
        <FieldExperience />
        <CareerVision />
        <Strengths />
        <Gallery />
        <Contact onOpenCv={handleOpenCv} />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Download / Preview Modal */}
      <CvModal isOpen={isCvModalOpen} onClose={handleCloseCv} />

    </div>
  );
}
