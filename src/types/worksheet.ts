export type PaperSize =
  | 'A4 Portrait'
  | 'A4 Landscape'
  | 'A5 Portrait'
  | 'A5 Landscape'
  | 'Letter Portrait'
  | 'Letter Landscape';

export type Language =
  | 'Bahasa Indonesia'
  | 'English'
  | 'Bahasa Melayu'
  | 'Español'
  | 'Français';

export type TargetAge =
  | '2–3 Tahun'
  | '3–4 Tahun'
  | '4–5 Tahun'
  | '5–6 Tahun'
  | '6–7 Tahun'
  | '7–8 Tahun'
  | '8–10 Tahun'
  | '10–12 Tahun'
  | '12+ Tahun';

export type ActivityType =
  | 'Coloring / Mewarnai'
  | 'Mencocokkan'
  | 'Berhitung'
  | 'Menulis'
  | 'Menebalkan Garis'
  | 'Menghubungkan Titik'
  | 'Labirin'
  | 'Puzzle'
  | 'Mencari Perbedaan'
  | 'Pilihan Ganda'
  | 'Mengurutkan'
  | 'Mengenal Huruf'
  | 'Mengenal Angka'
  | 'Mengenal Bentuk'
  | 'Aktivitas Gunting dan Tempel'
  | 'Aktivitas Campuran';

export type VisualStyle =
  | 'Cute Colorful'
  | 'Cartoon'
  | 'Minimalis'
  | 'Modern'
  | 'Pastel'
  | 'Fun Educational'
  | 'Kawaii'
  | 'Storybook'
  | 'Clean Printable'
  | 'Bold Colorful'
  | 'Hand Drawn'
  | 'Premium Kids'
  | 'Montessori Inspired';

export interface WorksheetSettings {
  paperSize: PaperSize;
  language: Language;
  theme: string;
  customTheme?: string;
  targetAge: TargetAge;
  activityType: ActivityType;
  pageCount: string;
  customPageCount?: number;
  characterType: string;
  customCharacterType?: string;
  visualStyle: VisualStyle;
  additionalNotes: string;
}

export interface GeneratedPageDetail {
  pageNumber: number;
  title: string;
  mainFocus: string;
  coloringOutlineObject?: string;
  coloredReferenceObject?: string;
  compositionAndPose: string;
  educationalPrompt: string;
  decorations: string;
}

export interface GeneratedMasterPrompt {
  fullPromptText: string;
  summary: {
    paperSize: string;
    language: string;
    theme: string;
    targetAge: string;
    activityType: string;
    pageCount: number;
    characterType: string;
    visualStyle: string;
    isColoring: boolean;
  };
  pages: GeneratedPageDetail[];
}
