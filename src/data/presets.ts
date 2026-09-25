import { WorksheetSettings } from '../types/worksheet';

export interface PresetItem {
  id: string;
  name: string;
  badge: string;
  iconName: string;
  description: string;
  settings: WorksheetSettings;
}

export const WORKSHEET_PRESETS: PresetItem[] = [
  {
    id: 'dino-coloring-5',
    name: 'Coloring Dinosaurus Ramah',
    badge: 'Paling Populer',
    iconName: 'Sparkles',
    description: '1 Gambar outline utama + miniatur referensi warna tiap halaman, 5 dinosaurus berbeda.',
    settings: {
      paperSize: 'A4 Portrait',
      language: 'Bahasa Indonesia',
      theme: 'Dinosaurus',
      targetAge: '5–6 Tahun',
      activityType: 'Coloring / Mewarnai',
      pageCount: '5 Halaman',
      characterType: 'Dinosaurus',
      visualStyle: 'Cute Colorful',
      additionalNotes: 'Buat ekspresi dinosaurus ramah dan ceria. Pastikan satu halaman tepat satu objek utama untuk diwarnai dan ada miniatur berwarna di sudut kanan atas.'
    }
  },
  {
    id: 'fruit-counting-3',
    name: 'Berhitung Buah-Buahan Ceria',
    badge: 'PAUD / TK A',
    iconName: 'Apple',
    description: 'Aktivitas berhitung 1-10 full color dengan kotak angka dan ilustrasi buah manis.',
    settings: {
      paperSize: 'A4 Portrait',
      language: 'Bahasa Indonesia',
      theme: 'Buah',
      targetAge: '4–5 Tahun',
      activityType: 'Berhitung',
      pageCount: '3 Halaman',
      characterType: 'Hewan Lucu',
      visualStyle: 'Fun Educational',
      additionalNotes: 'Gunakan buah-buahan yang mudah dikenali anak seperti apel, pisang, jeruk, dan semangka dengan susunan yang rapi dan mudah dihitung.'
    }
  },
  {
    id: 'tracing-space-5',
    name: 'Menebalkan Garis Antariksa',
    badge: 'Motorik Halus',
    iconName: 'Rocket',
    description: 'Melatih motorik halus anak dengan rute meliuk roket dan bintang berkilau.',
    settings: {
      paperSize: 'A4 Landscape',
      language: 'Bahasa Indonesia',
      theme: 'Luar Angkasa',
      targetAge: '3–4 Tahun',
      activityType: 'Menebalkan Garis',
      pageCount: '5 Halaman',
      characterType: 'Karakter Anak',
      visualStyle: 'Cute Colorful',
      additionalNotes: 'Garis putus-putus tebal dengan variasi gelombang, zigzag, dan spiral menuju planet tujuan.'
    }
  },
  {
    id: 'ocean-maze-5',
    name: 'Petualangan Labirin Bawah Laut',
    badge: 'Problem Solving',
    iconName: 'Compass',
    description: 'Labirin ramah anak membantu ikan badut menemukan terumbu karang rumahnya.',
    settings: {
      paperSize: 'A4 Portrait',
      language: 'Bahasa Indonesia',
      theme: 'Laut',
      targetAge: '6–7 Tahun',
      activityType: 'Labirin',
      pageCount: '5 Halaman',
      characterType: 'Hewan Lucu',
      visualStyle: 'Storybook',
      additionalNotes: 'Desain jalur labirin yang jelas dengan jalan keluar yang logis, dihiasi koral dan biota laut cerah.'
    }
  }
];

export const DEFAULT_SETTINGS: WorksheetSettings = {
  paperSize: 'A4 Portrait',
  language: 'Bahasa Indonesia',
  theme: 'Dinosaurus',
  customTheme: '',
  targetAge: '5–6 Tahun',
  activityType: 'Coloring / Mewarnai',
  pageCount: '5 Halaman',
  customPageCount: 5,
  characterType: 'Dinosaurus',
  customCharacterType: '',
  visualStyle: 'Cute Colorful',
  additionalNotes: ''
};
