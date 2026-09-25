import React from 'react';
import {
  FileText,
  Languages,
  Palette,
  Users,
  CheckCircle2,
  FileSpreadsheet,
  Smile,
  Sparkles,
  RotateCcw,
  AlertCircle,
  HelpCircle,
  Paintbrush
} from 'lucide-react';
import { WorksheetSettings, PaperSize, Language, TargetAge, ActivityType, VisualStyle } from '../types/worksheet';

interface GeneratorFormProps {
  settings: WorksheetSettings;
  onChange: (settings: WorksheetSettings) => void;
  onSubmit: () => void;
  onReset: () => void;
  isGenerating?: boolean;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({
  settings,
  onChange,
  onSubmit,
  onReset,
  isGenerating = false,
}) => {
  const handleChange = <K extends keyof WorksheetSettings>(key: K, value: WorksheetSettings[K]) => {
    onChange({
      ...settings,
      [key]: value,
    });
  };

  const isColoring = settings.activityType === 'Coloring / Mewarnai';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-7 relative overflow-hidden">
      {/* Decorative accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Header Form */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>⚙️ Pengaturan Blueprint Worksheet</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Pilih opsi melalui dropdown untuk menyusun Master Prompt otomatis.
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          title="Reset ke pengaturan awal"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="space-y-4 sm:space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* 1. Ukuran Kertas */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-indigo-500" />
              <span>1. Ukuran Kertas</span>
            </label>
            <div className="relative">
              <select
                value={settings.paperSize}
                onChange={(e) => handleChange('paperSize', e.target.value as PaperSize)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all cursor-pointer appearance-none pr-9"
              >
                <option value="A4 Portrait">A4 Portrait (210 × 297 mm)</option>
                <option value="A4 Landscape">A4 Landscape (297 × 210 mm)</option>
                <option value="A5 Portrait">A5 Portrait (148 × 210 mm)</option>
                <option value="A5 Landscape">A5 Landscape (210 × 148 mm)</option>
                <option value="Letter Portrait">Letter Portrait (8.5 × 11 in)</option>
                <option value="Letter Landscape">Letter Landscape (11 × 8.5 in)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                ▼
              </div>
            </div>
          </div>

          {/* 2. Bahasa Konten */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-blue-500" />
              <span>2. Bahasa Konten</span>
            </label>
            <div className="relative">
              <select
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value as Language)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all cursor-pointer appearance-none pr-9"
              >
                <option value="Bahasa Indonesia">Bahasa Indonesia (Utama)</option>
                <option value="English">English</option>
                <option value="Bahasa Melayu">Bahasa Melayu</option>
                <option value="Español">Español</option>
                <option value="Français">Français</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                ▼
              </div>
            </div>
          </div>

          {/* 3. Tema */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-purple-500" />
              <span>3. Tema Worksheet</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="relative">
                <select
                  value={settings.theme}
                  onChange={(e) => handleChange('theme', e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all cursor-pointer appearance-none pr-9"
                >
                  <option value="Dinosaurus">🦖 Dinosaurus (T-Rex, Triceratops, dll)</option>
                  <option value="Hewan">🦁 Hewan (Darat, Safari, Hutan)</option>
                  <option value="Laut">🐬 Laut (Biota Samudra, Koral, Ikan)</option>
                  <option value="Hutan">🌲 Hutan (Flora, Fauna Tropis)</option>
                  <option value="Serangga">🐞 Serangga (Kupu-kupu, Lebah, dll)</option>
                  <option value="Transportasi">🚒 Transportasi (Kendaraan Umum)</option>
                  <option value="Kendaraan">🏎️ Kendaraan (Mobil, Truk, Motor)</option>
                  <option value="Luar Angkasa">🚀 Luar Angkasa (Planet, Roket, Bintang)</option>
                  <option value="Alam">🌈 Alam (Pelangi, Gunung, Cuaca)</option>
                  <option value="Buah">🍎 Buah-Buahan Segar</option>
                  <option value="Sayuran">🥕 Sayuran Sehat</option>
                  <option value="Angka">🔢 Angka & Berhitung Ceria</option>
                  <option value="Huruf">🔤 Huruf Alfabet & Fonik</option>
                  <option value="Warna">🎨 Mengenal Warna Dasar</option>
                  <option value="Bentuk">🔷 Bentuk Geometris Dasar</option>
                  <option value="Profesi">👨‍⚕️ Profesi (Dokter, Guru, Pilot)</option>
                  <option value="Sekolah">🎒 Sekolah & Perlengkapan Belajar</option>
                  <option value="Musik">🎵 Musik & Alat Musik</option>
                  <option value="Olahraga">⚽ Olahraga & Kesehatan</option>
                  <option value="Fantasi">🦄 Fantasi (Unicorn, Peri, Naga)</option>
                  <option value="Musim">⛅ Musim (Hujan, Kemarau, Salju)</option>
                  <option value="Hari Raya">🎉 Hari Raya & Perayaan</option>
                  <option value="Lainnya">✨ Lainnya (Tema Custom)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  ▼
                </div>
              </div>

              {settings.theme === 'Lainnya' && (
                <div>
                  <input
                    type="text"
                    placeholder="Masukkan tema custom..."
                    value={settings.customTheme || ''}
                    onChange={(e) => handleChange('customTheme', e.target.value)}
                    className="w-full bg-white border border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm transition-all shadow-xs"
                    autoFocus
                  />
                </div>
              )}
            </div>
          </div>

          {/* 4. Usia Target */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-500" />
              <span>4. Usia Target</span>
            </label>
            <div className="relative">
              <select
                value={settings.targetAge}
                onChange={(e) => handleChange('targetAge', e.target.value as TargetAge)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all cursor-pointer appearance-none pr-9"
              >
                <option value="2–3 Tahun">2–3 Tahun (Toddler / Batita)</option>
                <option value="3–4 Tahun">3–4 Tahun (PAUD Awal)</option>
                <option value="4–5 Tahun">4–5 Tahun (TK A)</option>
                <option value="5–6 Tahun">5–6 Tahun (TK B / Prasekolah)</option>
                <option value="6–7 Tahun">6–7 Tahun (SD Kelas 1)</option>
                <option value="7–8 Tahun">7–8 Tahun (SD Kelas 2)</option>
                <option value="8–10 Tahun">8–10 Tahun (SD Kelas 3–4)</option>
                <option value="10–12 Tahun">10–12 Tahun (SD Kelas 5–6)</option>
                <option value="12+ Tahun">12+ Tahun (Remaja / Menengah)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                ▼
              </div>
            </div>
          </div>

          {/* 5. Tipe Aktivitas */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Paintbrush className="w-4 h-4 text-pink-500" />
              <span>5. Tipe Aktivitas</span>
            </label>
            <div className="relative">
              <select
                value={settings.activityType}
                onChange={(e) => handleChange('activityType', e.target.value as ActivityType)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all cursor-pointer appearance-none pr-9 font-semibold text-indigo-700"
              >
                <option value="Coloring / Mewarnai">🎨 Coloring / Mewarnai (Aturan Khusus)</option>
                <option value="Mencocokkan">🔄 Mencocokkan (Matching Pairs)</option>
                <option value="Berhitung">🔢 Berhitung (Counting Numbers)</option>
                <option value="Menulis">✍️ Menulis (Handwriting Tracing)</option>
                <option value="Menebalkan Garis">〰️ Menebalkan Garis (Line Tracing)</option>
                <option value="Menghubungkan Titik">⭐ Menghubungkan Titik (Dot-to-Dot)</option>
                <option value="Labirin">🌀 Labirin (Mazes)</option>
                <option value="Puzzle">🧩 Puzzle (Potongan & Bayangan)</option>
                <option value="Mencari Perbedaan">🔍 Mencari Perbedaan (Spot Differences)</option>
                <option value="Pilihan Ganda">🔘 Pilihan Ganda (Multiple Choice)</option>
                <option value="Mengurutkan">📊 Mengurutkan (Sequencing / Sorting)</option>
                <option value="Mengenal Huruf">🔤 Mengenal Huruf (Letter Recognition)</option>
                <option value="Mengenal Angka">🔟 Mengenal Angka (Number Recognition)</option>
                <option value="Mengenal Bentuk">🔷 Mengenal Bentuk (Shape Tracing)</option>
                <option value="Aktivitas Gunting dan Tempel">✂️ Aktivitas Gunting & Tempel</option>
                <option value="Aktivitas Campuran">🤹 Aktivitas Campuran (Activity Pack)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                ▼
              </div>
            </div>
          </div>

          {/* 6. Jumlah Halaman */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-amber-500" />
              <span>6. Jumlah Halaman</span>
            </label>
            <div className="grid grid-cols-1 gap-2">
              <div className="relative">
                <select
                  value={settings.pageCount}
                  onChange={(e) => handleChange('pageCount', e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all cursor-pointer appearance-none pr-9"
                >
                  <option value="1 Halaman">1 Halaman (Single Sheet)</option>
                  <option value="2 Halaman">2 Halaman</option>
                  <option value="3 Halaman">3 Halaman</option>
                  <option value="5 Halaman">5 Halaman (Bundle Populer)</option>
                  <option value="10 Halaman">10 Halaman (Mini Workbook)</option>
                  <option value="15 Halaman">15 Halaman (Full Workbook)</option>
                  <option value="20 Halaman">20 Halaman (Mega Bundle)</option>
                  <option value="Custom">Custom (Ketik Manual)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  ▼
                </div>
              </div>

              {settings.pageCount === 'Custom' && (
                <div>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    placeholder="Jumlah halaman (1-30)..."
                    value={settings.customPageCount || ''}
                    onChange={(e) => handleChange('customPageCount', parseInt(e.target.value, 10) || 1)}
                    className="w-full bg-white border border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 text-slate-900 rounded-xl px-3.5 py-2 text-sm shadow-xs"
                  />
                </div>
              )}
            </div>
          </div>

          {/* 7. Tipe Karakter */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Smile className="w-4 h-4 text-cyan-500" />
              <span>7. Tipe Karakter</span>
            </label>
            <div className="grid grid-cols-1 gap-2">
              <div className="relative">
                <select
                  value={settings.characterType}
                  onChange={(e) => handleChange('characterType', e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all cursor-pointer appearance-none pr-9"
                >
                  <option value="Hewan Lucu">🐾 Hewan Lucu (Cute Animals)</option>
                  <option value="Dinosaurus">🦖 Dinosaurus</option>
                  <option value="Karakter Anak">👦 Karakter Anak Ceria</option>
                  <option value="Karakter Kartun">🧸 Karakter Kartun Ramah</option>
                  <option value="Monster Lucu">👾 Monster Lucu & Bersahabat</option>
                  <option value="Robot">🤖 Robot Ramah</option>
                  <option value="Kendaraan Berkarakter">🚗 Kendaraan Berkarakter (Living Cars)</option>
                  <option value="Hewan Realistis">🦅 Hewan Realistis</option>
                  <option value="Fantasi">🦄 Karakter Fantasi / Fairy</option>
                  <option value="Tanpa Karakter">🚫 Tanpa Karakter (Fokus Objek)</option>
                  <option value="Custom">✨ Custom Karakter...</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  ▼
                </div>
              </div>

              {settings.characterType === 'Custom' && (
                <div>
                  <input
                    type="text"
                    placeholder="Contoh: Kucing luar angkasa berbaju astronot..."
                    value={settings.customCharacterType || ''}
                    onChange={(e) => handleChange('customCharacterType', e.target.value)}
                    className="w-full bg-white border border-cyan-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-slate-900 rounded-xl px-3.5 py-2 text-sm shadow-xs"
                  />
                </div>
              )}
            </div>
          </div>

          {/* 8. Style Desain Visual */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-violet-500" />
              <span>8. Style Desain Visual</span>
            </label>
            <div className="relative">
              <select
                value={settings.visualStyle}
                onChange={(e) => handleChange('visualStyle', e.target.value as VisualStyle)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all cursor-pointer appearance-none pr-9"
              >
                <option value="Cute Colorful">🌈 Cute Colorful (Ceria, Terang, Sangat Disukai Anak)</option>
                <option value="Fun Educational">🎓 Fun Educational (Desain Belajar Standar Internasional)</option>
                <option value="Kawaii">🌸 Kawaii (Gaya Jepang Imut & Menggemaskan)</option>
                <option value="Storybook">📖 Storybook (Gaya Buku Cerita Klasik Hangat)</option>
                <option value="Pastel">🧁 Pastel (Warna Lembut & Elegan)</option>
                <option value="Clean Printable">📄 Clean Printable (Bersih, Rapi, Hemat Tinta)</option>
                <option value="Bold Colorful">🖍️ Bold Colorful (Garis Tebal & Warna Kontras Tinggi)</option>
                <option value="Montessori Inspired">🌿 Montessori Inspired (Natural, Sederhana & Terstruktur)</option>
                <option value="Cartoon">🎨 Cartoon (Gaya Animasi Anak Modern)</option>
                <option value="Minimalis">⚪ Minimalis (Fokus Esensi Belajar)</option>
                <option value="Modern">✨ Modern (Desain Grafis SaaS Terkini)</option>
                <option value="Hand Drawn">✏️ Hand Drawn (Sentuhan Sketsa Pensil Hangat)</option>
                <option value="Premium Kids">👑 Premium Kids (Etsy / TeachersPayTeachers Best Seller Style)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                ▼
              </div>
            </div>
          </div>

          {/* 9. Catatan Tambahan */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-slate-500" />
                <span>9. Catatan Tambahan (Opsional)</span>
              </span>
              <span className="text-[11px] font-normal text-slate-400">Instruksi spesifik produk Anda</span>
            </label>
            <textarea
              rows={3}
              value={settings.additionalNotes}
              onChange={(e) => handleChange('additionalNotes', e.target.value)}
              placeholder="Contoh: Buat dinosaurus lucu dan ramah anak. Gunakan instruksi sederhana. Jangan membuat halaman terlalu ramai..."
              className="w-full bg-slate-50 hover:bg-slate-100/60 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 text-slate-900 rounded-xl px-3.5 py-2.5 text-sm transition-all placeholder:text-slate-400 resize-y"
            />
          </div>
        </div>

        {/* Special Coloring Rule Notification */}
        {isColoring ? (
          <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">
                Aturan Khusus Coloring / Mewarnai Aktif:
              </p>
              <p className="text-amber-800 text-xs mt-0.5 leading-relaxed">
                Setiap halaman hanya memuat <strong>1 gambar utama outline hitam-putih</strong> + <strong>1 miniatur referensi warna</strong> di sudut (objek sama). Latar belakang dan border tetap berwarna!
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-3 flex items-center gap-2.5 text-xs text-emerald-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Mode <strong>Full Color</strong> aktif untuk aktivitas {settings.activityType}. Seluruh elemen, ilustrasi, dan background berwarna cerah.
            </span>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/30 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group"
          >
            <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform animate-pulse" />
            <span>✨ BUAT MASTER PROMPT</span>
          </button>
        </div>
      </form>
    </div>
  );
};
