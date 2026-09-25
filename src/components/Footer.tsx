import React from 'react';
import { Layers, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-100">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                WORKSHEET PRODUCT DIGITAL
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
              Worksheet Blueprint Generator untuk membantu kreator produk digital, guru, dan orang tua menyusun Master Prompt AI yang terstruktur, variatif, konsisten, dan siap cetak.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-500">
              <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Ramah Etsy & KDP
              </span>
              <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Sesuai Standar PAUD/TK/SD
              </span>
              <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Strict Coloring Rules
              </span>
            </div>
          </div>

          {/* Fitur Utama */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Fitur Blueprint
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>9 Pengaturan Dropdown Ringkas</li>
              <li>Aturan Khusus Coloring 1:1</li>
              <li>Generator Anti-Duplikasi Halaman</li>
              <li>Variasi Subjek & Pose Otomatis</li>
              <li>Quality Control Checklist Lengkap</li>
            </ul>
          </div>

          {/* Cocok Untuk */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Cocok Untuk Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>Etsy Kids Printables</li>
              <li>Amazon KDP Activity Books</li>
              <li>TeachersPayTeachers (TpT)</li>
              <li>Shopee / Tokopedia Digital</li>
              <li>Bahan Ajar Homeschooling & PAUD</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} WORKSHEET PRODUCT DIGITAL. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat untuk para kreator produk digital edukatif</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
