import React from 'react';
import { WORKSHEET_PRESETS, PresetItem } from '../data/presets';
import { Sparkles, ArrowRight } from 'lucide-react';
import { WorksheetSettings } from '../types/worksheet';

interface PresetsSectionProps {
  onSelectPreset: (presetSettings: WorksheetSettings) => void;
}

export const PresetsSection: React.FC<PresetsSectionProps> = ({ onSelectPreset }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3.5">
        <div>
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Preset Blueprint Cepat (1-Klik Siap Pakai)</span>
          </h3>
          <p className="text-xs text-slate-500">
            Pilih salah satu contoh populer untuk langsung mengisi dropdown & mencoba sistem:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {WORKSHEET_PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelectPreset(preset.settings)}
            className="text-left bg-white hover:bg-indigo-50/40 border border-slate-200 hover:border-indigo-300 rounded-xl p-3.5 transition-all group shadow-2xs hover:shadow-xs flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                  {preset.badge}
                </span>
                <span className="text-[10px] text-slate-400">
                  {preset.settings.targetAge}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                {preset.name}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {preset.description}
              </p>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-indigo-600">
              <span>Gunakan Preset</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
