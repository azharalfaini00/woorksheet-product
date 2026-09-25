import React, { useState } from 'react';
import {
  Copy,
  Check,
  Edit3,
  Download,
  RotateCw,
  Eye,
  FileCheck,
  Layers,
  Sparkles,
  Info,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GeneratedMasterPrompt } from '../types/worksheet';

interface PromptOutputProps {
  masterPrompt: GeneratedMasterPrompt | null;
  onRegenerate: () => void;
  isGenerating?: boolean;
}

export const PromptOutput: React.FC<PromptOutputProps> = ({
  masterPrompt,
  onRegenerate,
  isGenerating = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPromptText, setEditedPromptText] = useState('');
  const [activeTab, setActiveTab] = useState<'blueprint' | 'pages'>('blueprint');
  const [showNotification, setShowNotification] = useState(false);

  // Sync edited text when masterPrompt updates or when switching into edit mode
  React.useEffect(() => {
    if (masterPrompt) {
      setEditedPromptText(masterPrompt.fullPromptText);
    }
  }, [masterPrompt]);

  if (!masterPrompt) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[460px] shadow-xs">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 animate-bounce">
          <Sparkles className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-800">
          Master Prompt Belum Dibuat
        </h3>
        <p className="text-sm text-slate-500 max-w-sm mt-1 mb-5">
          Pilih pengaturan worksheet di kolom kiri, lalu klik tombol{' '}
          <strong className="text-indigo-600">"✨ BUAT MASTER PROMPT"</strong> untuk menghasilkan blueprint lengkap.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
          <span className="px-2.5 py-1 bg-slate-100 rounded-full">✓ 20 Struktur Prompt</span>
          <span className="px-2.5 py-1 bg-slate-100 rounded-full">✓ Aturan Khusus Coloring</span>
          <span className="px-2.5 py-1 bg-slate-100 rounded-full">✓ Anti-Duplikasi Halaman</span>
        </div>
      </div>
    );
  }

  const currentTextToCopy = isEditing ? editedPromptText : (editedPromptText || masterPrompt.fullPromptText);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentTextToCopy);
      setCopied(true);
      setShowNotification(true);
      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowNotification(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = currentTextToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setShowNotification(true);
      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([currentTextToCopy], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `worksheet-blueprint-${masterPrompt.summary.theme.toLowerCase().replace(/\s+/g, '-')}-${masterPrompt.summary.pageCount}hal.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-full relative">
      {/* Toast Notification */}
      {showNotification && (
        <div className="absolute top-4 right-4 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs sm:text-sm font-semibold animate-in fade-in slide-in-from-top duration-300">
          <Check className="w-4 h-4 text-emerald-200" />
          <span>Master Prompt berhasil disalin.</span>
        </div>
      )}

      {/* Header bar */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            MP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-base leading-tight">
                Master Prompt Siap Digunakan
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-700 rounded-md uppercase">
                {masterPrompt.summary.pageCount} Halaman
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {masterPrompt.summary.theme} • {masterPrompt.summary.targetAge} • {masterPrompt.summary.visualStyle}
            </p>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('blueprint')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'blueprint'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Blueprint Lengkap
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pages')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'pages'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Rincian Per Halaman ({masterPrompt.pages.length})</span>
          </button>
        </div>
      </div>

      {/* Quick Summary Chips */}
      <div className="px-4 py-2.5 bg-slate-100/50 border-b border-slate-200/50 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600">
        <span className="bg-white border border-slate-200 px-2 py-0.5 rounded-md font-medium">
          📐 {masterPrompt.summary.paperSize}
        </span>
        <span className="bg-white border border-slate-200 px-2 py-0.5 rounded-md font-medium">
          🌐 {masterPrompt.summary.language}
        </span>
        <span className="bg-white border border-slate-200 px-2 py-0.5 rounded-md font-medium">
          🎯 {masterPrompt.summary.activityType}
        </span>
        {masterPrompt.summary.isColoring && (
          <span className="bg-amber-100 border border-amber-200 text-amber-800 px-2 py-0.5 rounded-md font-bold">
            🎨 1 Outline + 1 Referensi Warna
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto max-h-[580px] bg-slate-950 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed selection:bg-indigo-600 selection:text-white">
        {activeTab === 'blueprint' ? (
          isEditing ? (
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between text-xs text-amber-400 font-sans pb-2 border-b border-slate-800 mb-2">
                <span>✏️ Mode Edit Aktif - Anda dapat menyesuaikan teks prompt ini</span>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Selesai Edit
                </button>
              </div>
              <textarea
                value={editedPromptText}
                onChange={(e) => setEditedPromptText(e.target.value)}
                className="w-full h-[450px] bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm p-4 rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
                placeholder="Edit prompt Anda di sini..."
              />
            </div>
          ) : (
            <pre className="whitespace-pre-wrap break-words font-mono text-slate-200 selection:bg-indigo-600 selection:text-white">
              {currentTextToCopy}
            </pre>
          )
        ) : (
          <div className="font-sans space-y-4">
            <div className="text-xs text-slate-400 bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2">
              <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>
                Berikut adalah ringkasan blueprint breakdown untuk masing-masing halaman. AI desainer Anda akan mengikuti variasi ini secara konsisten.
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {masterPrompt.pages.map((page) => (
                <div
                  key={page.pageNumber}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-slate-200"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                    <span className="text-xs font-bold text-indigo-400">
                      HALAMAN #{page.pageNumber}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 bg-indigo-950 text-indigo-300 rounded border border-indigo-800">
                      {page.title.split(': ')[1] || page.title}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <p>
                      <strong className="text-white">Fokus Utama:</strong> {page.mainFocus}
                    </p>
                    {masterPrompt.summary.isColoring && (
                      <>
                        <p className="text-amber-300">
                          <strong>Outline Hitam Putih:</strong> {page.coloringOutlineObject}
                        </p>
                        <p className="text-emerald-300">
                          <strong>Referensi Warna:</strong> {page.coloredReferenceObject}
                        </p>
                      </>
                    )}
                    <div className="mt-2 pt-2 border-t border-slate-800/80 bg-slate-950/60 p-2.5 rounded-lg text-slate-400 font-mono text-[11px]">
                      <span className="text-indigo-400 font-bold block mb-1">
                        Prompt AI Langsung:
                      </span>
                      {page.educationalPrompt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Action Buttons */}
      <div className="p-3.5 sm:p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          {/* Salin Button */}
          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Tersalin ke Clipboard!' : '📋 Salin Master Prompt'}</span>
          </button>

          {/* Edit Button */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('blueprint');
              setIsEditing(!isEditing);
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm border transition-colors cursor-pointer ${
              isEditing
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <Edit3 className="w-4 h-4 text-slate-600" />
            <span>{isEditing ? 'Selesai Edit' : '✏️ Edit Prompt'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Buat Ulang */}
          <button
            type="button"
            onClick={onRegenerate}
            disabled={isGenerating}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            title="Buat ulang variasi prompt"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>🔄 Buat Ulang</span>
          </button>

          {/* Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            title="Download sebagai file .txt"
          >
            <Download className="w-3.5 h-3.5" />
            <span>⬇️ Download Prompt</span>
          </button>
        </div>
      </div>
    </div>
  );
};
