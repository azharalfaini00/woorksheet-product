import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { GeneratorForm } from './components/GeneratorForm';
import { PromptOutput } from './components/PromptOutput';
import { PresetsSection } from './components/PresetsSection';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { WorksheetSettings, GeneratedMasterPrompt } from './types/worksheet';
import { DEFAULT_SETTINGS } from './data/presets';
import { generateMasterPrompt } from './utils/promptGenerator';
import { Sparkles, CheckCircle2, Wand2, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [settings, setSettings] = useState<WorksheetSettings>(DEFAULT_SETTINGS);
  const [masterPrompt, setMasterPrompt] = useState<GeneratedMasterPrompt | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const generatorRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  // Generate initial prompt on mount with default settings
  useEffect(() => {
    const initial = generateMasterPrompt(DEFAULT_SETTINGS);
    setMasterPrompt(initial);
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Slight simulated processing delay for satisfying UX
    setTimeout(() => {
      const generated = generateMasterPrompt(settings);
      setMasterPrompt(generated);
      setIsGenerating(false);

      // On mobile devices, smoothly scroll down slightly toward output
      if (window.innerWidth < 1024) {
        const outputEl = document.getElementById('output-section');
        if (outputEl) {
          outputEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 250);
  };

  const handleReset = () => {
    setSettings(DEFAULT_SETTINGS);
    const resetPrompt = generateMasterPrompt(DEFAULT_SETTINGS);
    setMasterPrompt(resetPrompt);
  };

  const handleSelectPreset = (presetSettings: WorksheetSettings) => {
    setSettings(presetSettings);
    const generated = generateMasterPrompt(presetSettings);
    setMasterPrompt(generated);
    if (generatorRef.current) {
      generatorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'generator') {
      if (generatorRef.current) {
        generatorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (sectionId === 'cara-kerja') {
      if (howItWorksRef.current) {
        howItWorksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-purple-50/30 to-slate-50 pt-10 pb-8 sm:pt-14 sm:pb-12 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-200/80 shadow-xs mb-5 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                Worksheet Blueprint Generator
              </span>
            </div>

            {/* Main Title & Tagline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight">
              Ubah Ide Worksheet Anda Menjadi{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Master Prompt AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Worksheet Blueprint Generator untuk membuat prompt worksheet yang kreatif, variatif, terstruktur, dan siap digunakan langsung di AI pilihan Anda.
            </p>

            {/* Feature Highlights Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>9 Tools Dropdown Ringkas</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span>Aturan Khusus Coloring 1:1</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                <span>Anti-Duplikasi Halaman</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-pink-500" />
                <span>100% Siap Cetak (300 DPI)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Main Workspace */}
        <section ref={generatorRef} id="generator" className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick 1-Click Presets */}
            <PresetsSection onSelectPreset={handleSelectPreset} />

            {/* 2-Column Responsive Layout: Left = Form Dropdowns, Right = Output */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Form Settings (5 cols on lg) */}
              <div className="lg:col-span-5">
                <GeneratorForm
                  settings={settings}
                  onChange={setSettings}
                  onSubmit={handleGenerate}
                  onReset={handleReset}
                  isGenerating={isGenerating}
                />
              </div>

              {/* Right Column: Output Master Prompt (7 cols on lg) */}
              <div id="output-section" className="lg:col-span-7">
                <PromptOutput
                  masterPrompt={masterPrompt}
                  onRegenerate={handleGenerate}
                  isGenerating={isGenerating}
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <div ref={howItWorksRef}>
          <HowItWorks />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
