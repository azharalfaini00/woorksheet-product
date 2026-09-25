import React from 'react';
import { Sparkles, Layers, BookOpen } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Name */}
          <div 
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 block leading-tight">
                WORKSHEET PRODUCT DIGITAL
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-indigo-600 tracking-wide block">
                Worksheet Blueprint Generator
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onNavigate('beranda')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'beranda'
                  ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigate('generator')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'generator'
                  ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Generator
            </button>
            <button
              onClick={() => onNavigate('cara-kerja')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'cara-kerja'
                  ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Cara Kerja
            </button>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('generator')}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/25 hover:from-indigo-500 hover:to-purple-500 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Mulai Membuat</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
