import React from 'react';
import { SlidersHorizontal, Cpu, FileEdit, Wand2, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Pilih Pengaturan Worksheet',
      desc: 'Tentukan ukuran kertas, usia anak, tema, tipe aktivitas, gaya visual, dan karakter melalui 9 dropdown ringkas dan hemat tempat.',
      icon: SlidersHorizontal,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      step: '02',
      title: 'Blueprint Engine Menerapkan Aturan',
      desc: 'Sistem otomatis memasukkan aturan pedagogis, anti-duplikasi, serta aturan coloring (1 outline hitam-putih + 1 referensi warna).',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600',
    },
    {
      step: '03',
      title: 'Review & Sesuaikan Prompt',
      desc: 'Periksa Master Prompt yang tersusun rapi dalam 20 poin terstruktur. Anda bisa langsung mengedit teksnya sebelum disalin.',
      icon: FileEdit,
      color: 'from-pink-500 to-rose-600',
    },
    {
      step: '04',
      title: 'Salin & Jalankan di AI Favorit',
      desc: 'Salin Master Prompt ke ChatGPT, Midjourney, Canva Magic, atau Leonardo AI untuk menghasilkan lembar kerja berkualitas tinggi.',
      icon: Wand2,
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const aiTools = [
    { name: 'ChatGPT 4o / Canvas', desc: 'Sangat cocok untuk tata letak & ide konten teks edukasi' },
    { name: 'Midjourney v6', desc: 'Terbaik untuk ilustrasi line art coloring & karakter konsisten' },
    { name: 'Canva Magic Studio', desc: 'Bagus untuk pembuatan worksheet interaktif cepat' },
    { name: 'Leonardo AI', desc: 'Presisi tinggi untuk buku mewarnai anak & printable' },
    { name: 'Ideogram 2.0', desc: 'Sangat andal dalam rendering teks alfabet dan angka' },
    { name: 'Claude 3.5 Sonnet', desc: 'Pembuatan silabus worksheet dan instruksi belajar komprehensif' },
  ];

  return (
    <section id="cara-kerja" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Alur Kerja Sederhana
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Bagaimana WORKSHEET PRODUCT DIGITAL Bekerja?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Dari ide kasar menjadi Master Prompt AI berstandar industri produk digital dalam 4 langkah mudah.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-100">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* AI Compatibility Panel */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>🤖 Kompatibilitas AI Generator</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Master Prompt yang dihasilkan dirancang fleksibel dan kompatibel dengan berbagai AI terkemuka:
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <CheckCircle className="w-3.5 h-3.5" />
              Siap Copy-Paste
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {aiTools.map((ai, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors"
              >
                <div className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center justify-between">
                  <span>{ai.name}</span>
                  <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-1.5 py-0.5 rounded">
                    Kompatibel
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                  {ai.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
