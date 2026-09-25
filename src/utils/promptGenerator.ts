import { WorksheetSettings, GeneratedMasterPrompt, GeneratedPageDetail } from '../types/worksheet';

/**
 * Knowledge base of thematic subjects for rich, non-generic page variations
 */
const THEME_SUBJECTS: Record<string, string[]> = {
  Dinosaurus: [
    'Tyrannosaurus Rex ramah yang sedang tersenyum ceria di samping batu purba',
    'Triceratops gagah namun imut dengan tiga tanduk bulat dan hiasan dedaunan pakis',
    'Stegosaurus manis dengan deretan pelat punggung melengkung dan ekor duri bulat',
    'Brachiosaurus leher panjang yang anggun melongok memetik daun pohon palem',
    'Velociraptor lincah yang sedang berlari santai mengejar kupu-kupu prasejarah',
    'Ankylosaurus tangguh berlapis pelindung bulat dengan ekor gada yang ramah',
    'Pterodactyl terbang membentangkan sayap dengan latar awan kapas',
    'Parasaurolophus bersuara merdu dengan jambul panjang ikonik di padang rumput',
    'Spinosaurus berlayar punggung unik sedang bermain di tepi danau jernih',
    'Iguanodon bersahabat melambaikan ibu jari di hutan tropis purba',
    'Diplodocus raksasa lembut yang menyapa anak burung di atas punggungnya',
    'Pachycephalosaurus kepala kubah bulat yang tersenyum di dekat bunga purba',
    'Carnotaurus tanduk kecil lucu yang membawa keranjang buah prasejarah',
    'Archaeopteryx burung purba bersayap bulu cantik hinggap di dahan',
    'Allosaurus mungil melompat gembira menyambut matahari terbit'
  ],
  Hewan: [
    'Gajah mungil menggemaskan sedang menyemprotkan air pelangi dengan belalainya',
    'Singa kecil bermahkota surai lembut sedang bersantai di bawah pohon akasia',
    'Jerapah ceria berleher tinggi tersenyum ramah di dekat bunga matahari raksasa',
    'Panda gemuk imut sedang menikmati sebatang bambu hijau di bukit tenang',
    'Koala manis yang sedang memeluk erat dahan pohon eukaliptus',
    'Kelinci lincah bertelinga panjang membawa wortel segar di kebun sayur',
    'Zebra belang bergaris rapi sedang menari di padang rumput terbuka',
    'Harimau belang mini yang bersahabat sedang bermain dengan bola benang',
    'Monyet cerdik bergelantungan santai dengan ekor lentur di pohon kelapa',
    'Beruang madu gembul memegang toples madu lezat di samping sarang lebah',
    'Kucing imut berdasi kupu-kupu sedang menyapa dari balik jendela kayu',
    'Anjing corgi lucu mengibaskan ekor pendeknya di taman bunga mekar'
  ],
  Laut: [
    'Lumba-lumba pintar melompat indah di antara buih ombak biru laut',
    'Penyu laut bijak berenang anggun di samping terumbu karang warna-warni',
    'Ikan badut ceria bersembunyi santai di sela-sela tentakel anemon lembut',
    'Gurita cilik bertangan delapan memegang bintang laut yang bersinar',
    'Kuda laut unik melilitkan ekornya pada rumput laut bergelombang',
    'Paus bungkuk raksasa ramah menyemburkan air mancur spektakuler ke udara',
    'Kepiting jenaka tersenyum membawa kerang mutiara di atas pasir putih',
    'Ikan pari anggun meluncur halus di dasar samudra berhias koral',
    'Bintang laut cerah tersenyum lebar di atas batu karang bercahaya',
    'Ubur-ubur transparan bercahaya lembut menari di arus laut tenang'
  ],
  'Luar Angkasa': [
    'Roket penjelajah antariksa futuristik meluncur kencang membelah nebula',
    'Astronot cilik memakai helm kaca bundar melambaikan tangan saat melayang bebas',
    'Planet Saturnus cantik dengan lingkaran cincin berkilauan dikelilingi asteroid ramah',
    'Alien mini ramah bertentakel lucu menyapa dari piring terbang UFO gemerlap',
    'Bintang jatuh berekor cahaya melintasi gugusan rasi bintang berkilau',
    'Stasiun luar angkasa modern dengan panel surya biru menghadap Bumi biru',
    'Bulan sabit tersenyum membawa bendera penjelajah di permukaan berkawah',
    'Matahari emas tersenyum hangat memancarkan semburat cahaya ke seluruh galaksi',
    'Rover penjelajah robotik berkamera lucu mengumpulkan batu kristal di Planet Mars',
    'Komet bercahaya komet es meluncur di samping komet mini warna-warni'
  ],
  Buah: [
    'Apel merah ranum dengan daun hijau segar dan senyum manis berkilau',
    'Pisang kuning manis sedang melengkung riang mengenakan kacamata santai',
    'Jeruk segar bundar berpori halus yang terbelah separuh menampilkan bulir sari',
    'Stroberi cerah bertepung bintik biji manis mengenakan topi daun hijau',
    'Semangka bergaris hijau merah merekah segar dengan biji tersenyum rapi',
    'Nanas tropis bermahkota daun runcing berduri lembut dengan kacamata renang',
    'Anggur ungu manis bergerombol lebat tergantung di sulur daun anggur',
    'Mangga harum manis kuning keemasan yang baru dipetik dari dahan',
    'Alpukat mentega berkulit hijau dengan biji bundar tersenyum di tengah',
    'Pepaya segar bertabur biji mutiara hitam di piring berhias bunga kamboja'
  ],
  Sayuran: [
    'Wortel jingga cerah berdaun lebat memakai sepatu lari kecil',
    'Brokoli hijau lebat berdaun rimbun mirip pohon mini bersahabat',
    'Tomat merah bulat berkilau segar dengan topi kelopak hijau',
    'Jagung manis berbiji kuning emas rapi dalam balutan kelopak daun terbuka',
    'Terong ungu mengkilap bertangkai hijau ceria menyapa dari kebun organik',
    'Labu kuning bundar berlekuk indah dengan tangkai kayu melingkar',
    'Bayam hijau segar berdaun lebar mengapung di keranjang sayur kayu',
    'Kentang cokelat manis bulat tersenyum dengan bintik alami yang imut'
  ],
  Transportasi: [
    'Mobil pemadam kebakaran merah berkilau dengan tangga lipat dan selang air',
    'Kereta api uap ulet dengan cerobong berasap awan putih di atas rel melengkung',
    'Pesawat terbang penumpang bermoncong bulat tersenyum melintasi awan biru',
    'Kapal feri penyeberang laut berbendera warna-warni di atas ombak tenang',
    'Mobil ambulans putih bergaris hijau ramah dengan sirine bulat ceria',
    'Helikopter baling-baling putar yang melayang stabil di dekat pegunungan',
    'Bus sekolah kuning cerah berpenumpang boneka hewan lucu di setiap jendela',
    'Truk derek oranye kokoh siap membantu kendaraan di jalan raya teratur'
  ],
  Kendaraan: [
    'Mobil balap futuristik beroda besar dan nomor balap keberuntungan di pintunya',
    'Traktor sawah hijau tangguh dengan roda gerigi besar di ladang gandum',
    'Sepeda motor scooter pastel bergaya klasik dengan keranjang depan rotan',
    'Mobil polisi ramah dengan lampu darurat biru-merah ceria',
    'Kapal selam kuning bundar dengan jendela bulat mengintip ikan laut',
    'Skuter anak beroda tiga dengan pegangan spons warna-warni',
    'Truk semen molen berputar lambat di area konstruksi tertata rapi'
  ],
  Hutan: [
    'Rusa bertanduk ramping anggun berdiri di samping air terjun hutan tropis',
    'Burung hantu bijak bertengger di ranting pohon oak tua bertabur bintang',
    'Tupai lincah memeluk buah kenari cokelat di tumpukan jamur payung',
    'Rubah bulu oranye melingkarkan ekor lebatnya di samping semak buah beri',
    'Landak mini berduri tumpul tersenyum di dekat lumut hijau beludru'
  ],
  Angka: [
    'Angka 1 berbentuk roket tinggi siap meluncur ke angkasa berhias 1 bintang',
    'Angka 2 meliuk anggun menyerupai angsa putih di danau berhias 2 teratai',
    'Angka 3 melengkung manis mirip dua kupu-kupu terbang di samping 3 bunga',
    'Angka 4 kokoh mirip perahu layar melintasi perairan berhias 4 ikan',
    'Angka 5 dinamis dengan topi melengkung ceria ditemani 5 apel merah'
  ],
  Huruf: [
    'Huruf A besar dan tebal berkarakter Astronot ceria di samping Apel merah',
    'Huruf B berlekuk dua diiringi Beruang madu dan Burung bernyanyi',
    'Huruf C melengkung mirip Bulan Sabit diiringi Ceri manis berkilau',
    'Huruf D tegak bersahabat ditemani Dinosaurus imut dan Donat warna-warni',
    'Huruf E terstruktur rapi ditemani Elang mini dan Es krim pelangi'
  ]
};

/**
 * Fallback subject generator for themes without direct hardcoded arrays
 */
function getSubjectsForTheme(theme: string, count: number): string[] {
  const normalized = theme.trim();
  if (THEME_SUBJECTS[normalized]) {
    const list = THEME_SUBJECTS[normalized];
    return Array.from({ length: count }, (_, i) => list[i % list.length]);
  }

  // Generic creative thematic generator
  const elements = [
    `Karakter utama ${theme} dalam pose menyapa gembira dengan elemen pendukung khas ${theme}`,
    `Objek ikonik ${theme} yang ramah dan interaktif dengan latar elemen dekoratif selaras`,
    `Adegan aktivitas ceria bertema ${theme} dengan komposisi seimbang dan terpusat`,
    `Karakter ${theme} sedang menjelajahi lingkungan alaminya dengan rasa ingin tahu`,
    `Kombinasi objek pendukung bertema ${theme} yang disusun rapi dan menarik perhatian`,
    `Variasi figur unik dari konsep ${theme} dengan sudut pandang dinamis dan ekspresi senang`,
    `Komposisi tematik ${theme} berfokus pada detail yang mudah dipahami dan mendidik`,
    `Simbol atau elemen khas ${theme} yang dianimasikan menjadi karakter hidup bersahabat`
  ];

  return Array.from({ length: count }, (_, i) => elements[i % elements.length]);
}

/**
 * Returns age-specific instructional constraints
 */
function getAgeGuidelines(age: string): {
  complexity: string;
  lineWeight: string;
  instructionsLength: string;
  uiSpacing: string;
  cognitiveChallenge: string;
} {
  switch (age) {
    case '2–3 Tahun':
      return {
        complexity: 'Sangat Sederhana (Level Toddler). 1 objek tunggal ekstra besar per halaman, tanpa detail rumit, tanpa background ramai.',
        lineWeight: 'Extra Bold & Thick Outline (garis luar sangat tegas 5-7pt), sudut tumpul/rounded, sangat mudah diwarnai tangan kecil.',
        instructionsLength: 'Maksimal 1 kalimat sangat pendek dengan ikon visual besar (contoh: "Warnai dinosaurus ini!").',
        uiSpacing: 'Area aktivitas mencakup 80% halaman dengan margin luas aman dari tepi kertas.',
        cognitiveChallenge: 'Pengenalan visual dasar, koordinasi motorik kasar, eksplorasi warna bebas.'
      };
    case '3–4 Tahun':
    case '4–5 Tahun':
      return {
        complexity: 'Sederhana & Bersahabat (Level Preschool / PAUD). Objek utama terpusat, bentuk proporsional, sedikit dekorasi pendukung berukuran besar.',
        lineWeight: 'Bold Outline (garis tegas 4-5pt), batas area jelas mencegah coretan keluar jalur.',
        instructionsLength: '1 kalimat instruksi ramah dan jelas disertai icon visual petunjuk.',
        uiSpacing: 'Area aktivitas 75% halaman, tata letak seimbang dan tidak membingungkan.',
        cognitiveChallenge: 'Mengenal bentuk, melatih genggaman krayon/pensil warna, stimulasi fokus.'
      };
    case '5–6 Tahun':
    case '6–7 Tahun':
      return {
        complexity: 'Moderat Edukatif (Level TK B & SD Kelas 1). Detail proporsional, memiliki ekspresi ceria, elemen pendukung lingkungan teratur.',
        lineWeight: 'Medium Bold Outline (garis jelas 3-4pt), rapi dan presisi.',
        instructionsLength: '1–2 kalimat instruksi jelas dengan kata kerja aksi (contoh: "Warnai Dino T-Rex dengan warna favoritmu!").',
        uiSpacing: 'Area aktivitas terstruktur rapi, ada ruang nama, tanggal, dan judul tematik.',
        cognitiveChallenge: 'Melatih motorik halus, pemilihan kombinasi warna mandiri, ketelitian.'
      };
    case '7–8 Tahun':
    case '8–10 Tahun':
      return {
        complexity: 'Interaktif & Lebih Detail (Level SD Kelas 2-4). Komposisi lebih kaya, memiliki tekstur pola halus dan elemen lingkungan interaktif.',
        lineWeight: 'Clean Defined Outline (garis presisi 2-3pt) dengan variasi ketebalan artistik.',
        instructionsLength: 'Instruksi edukatif berbobot dengan panduan aktivitas atau pertanyaan pemantik.',
        uiSpacing: 'Grid layout modern dan rapi, proporsi seimbang antara visual dan area interaksi.',
        cognitiveChallenge: 'Kreativitas tinggi, pemecahan masalah bertahap, gradasi warna, ketelitian tinggi.'
      };
    default:
      return {
        complexity: 'Lanjutan & Eksploratif (Level SD Atas / Remaja). Detail ilustratif kaya, pola estetis, komposisi dinamis.',
        lineWeight: 'Fine Detailed Outline (garis 1.5-2.5pt) artistik dan tajam.',
        instructionsLength: 'Instruksi komprehensif atau panduan projek mini.',
        uiSpacing: 'Desain layout canggih menyerupai activity book / sketchbook profesional.',
        cognitiveChallenge: 'Fokus mendalam, teknik blending warna, penyelesaian logika bertingkat.'
      };
  }
}

/**
 * Builds activity specific rules and expectations
 */
function getActivityRules(activity: string, isColoring: boolean): {
  rulesHeading: string;
  rulesBody: string[];
  pageTemplateRule: string;
} {
  if (isColoring) {
    return {
      rulesHeading: 'ATURAN MUTLAK DAN KHUSUS AKTIVITAS COLORING / MEWARNAI (STRICT MANDATORY)',
      rulesBody: [
        'SATU HALAMAN HANYA BOLEH MEMILIKI TEPAT 1 (SATU) GAMBAR UTAMA UNTUK DIWARNAI. DILARANG KERAS membuat 2 atau lebih gambar utama untuk diwarnai dalam satu lembar kerja.',
        'FORMAT GAMBAR UTAMA: Wajib berupa OUTLINE HITAM-PUTIH (black & white line art), garis outline tebal dan tegas, TANPA WARNA ISI (pure white fill inside), tanpa grayscale/shading rumit, bersih dan sangat mudah diwarnai anak.',
        'WAJIB MENYERTAKAN GAMBAR REFERENSI KECIL: Setiap halaman WAJIB menampilkan 1 (satu) gambar miniatur berwarna di sudut (misal sudut kanan atas / kiri atas) sebagai contoh warna (Color Palette Reference).',
        'KONSISTENSI GAMBAR REFERENSI: Objek pada gambar referensi miniatur WAJIB MERUPAKAN OBJEK/KARAKTER YANG SAMA PERSIS dengan gambar utama outline (bentuk, pose, dan ciri khas identik, hanya versi berwarna dan berukuran mini 15–20% dari gambar utama).',
        'ATURAN WARNA HALAMAN: HANYA GAMBAR UTAMA yang dibuat outline hitam-putih. SEMUA ELEMEN LAINNYA PADA HALAMAN HARUS TETAP FULL COLOR BERWARNA (termasuk background ilustratif, header judul, border pembatas, dekorasi ornamen, icon instruksi, dan gambar referensi kecil). DILARANG membuat seluruh halaman hitam-putih!',
        'VARIASI ANTAR HALAMAN: Setiap halaman harus menampilkan subjek/karakter/spesies yang berbeda dalam tema yang sama, sehingga 1 paket worksheet terasa kaya variasi dan tidak membosankan.'
      ],
      pageTemplateRule: '1 Gambar Utama Outline Hitam-Putih (Fokus Utama) + 1 Miniatur Referensi Warna (Objek yang Sama) + Frame Border Berwarna + Header Judul Berwarna'
    };
  }

  // Non-coloring activities
  const specificMap: Record<string, string[]> = {
    'Mencocokkan': [
      'Gunakan format 2 Kolom (Kolom Kiri dan Kolom Kanan) yang sejajar dengan titik konektor jelas untuk ditarik garis lurus.',
      'Sediakan 3 sampai 5 pasang objek per halaman yang relevan dengan tema dan usia anak.',
      'SEMUA GAMBAR DAN ELEMEN HARUS FULL COLOR (penuh warna cerah, kontras, dan ramah anak).',
      'Acak urutan pasangan di kolom kanan agar anak mencari dan menganalisis kecocokan.',
      'Pastikan ada jarak yang cukup luas antar baris agar garis penghubung anak tidak saling bertabrakan.'
    ],
    'Berhitung': [
      'Tampilkan kelompok objek konkret berwarna cerah yang mudah dihitung satu per satu oleh anak.',
      'Sediakan kotak jawaban angka (Number Box) atau lingkaran pilihan angka di bawah/samping setiap kelompok objek.',
      'Jumlah objek disesuaikan dengan rentang usia (contoh: 2–4 tahun angka 1–5; 5–6 tahun angka 1–10; 7+ tahun angka 1–20).',
      'SEMUA OBJEK HARUS BERWARNA MENARIK dengan penataan rapi (grid teratur, tidak bertumpuk).',
      'Gunakan variasi objek tematik berbeda di setiap nomor soal.'
    ],
    'Menulis': [
      'Sediakan garis bantu menulis 3 atau 4 garis (primary handwriting guidelines / garis putus-putus tengah) yang sesuai standar edukasi.',
      'Tampilkan huruf/kata target dengan font panduan bergaris titik-titik (dotted tracing font) beserta nomor panah arah guratan (stroke order).',
      'Sertakan ilustrasi berwarna di samping kata sebagai representasi visual makna kata.',
      'Sediakan baris pertama untuk menebalkan (tracing) dan baris berikutnya untuk menulis mandiri.'
    ],
    'Menebalkan Garis': [
      'Sediakan jalur garis putus-putus (dotted lines) dengan berbagai pola variatif (garis lurus, zigzag, lengkung gelombang, spiral, dan melingkar).',
      'Hubungkan dari karakter lucu berwarna di sisi kiri/atas menuju objek tujuan berwarna di sisi kanan/bawah.',
      'Garis putus-putus harus jelas dengan titik pangkal "Mulai / Start" dan titik ujung "Selesai / Finish".',
      'Semua elemen latar dan karakter pelengkap harus berwarna ceria dan menarik.'
    ],
    'Menghubungkan Titik': [
      'Buat pola titik bernomor urut (Dot-to-Dot) yang membentuk siluet karakter tematik ketika semua titik terhubung.',
      'Jumlah titik disesuaikan usia (usia muda: 1–10, usia TK: 1–20, usia SD: 1–50+).',
      'Tampilkan titik awal (nomor 1) dengan simbol bintang bercahaya warna-warni.',
      'Latar belakang dan dekorasi sekeliling titik harus berwarna cerah.'
    ],
    'Labirin': [
      'Desain satu jalur labirin (Maze) yang proporsional di tengah halaman dengan dinding labirin berwarna tegas dan ramah anak.',
      'Tentukan titik masuk (Start) dengan karakter pembuka berwarna dan titik keluar (Goal) dengan hadiah/tujuan berwarna.',
      'Hindari jalur buntu yang terlalu rumit untuk usia muda; pastikan ada jalan keluar yang logis dan jelas.',
      'Hiasi area sekitar labirin dengan ornamen bertema yang penuh warna.'
    ],
    'Puzzle': [
      'Sediakan puzzle visual edukatif (misal: potongan gambar, pola bayangan / shadow match, atau tangram sederhana).',
      'Setiap keping puzzle memiliki batas potong yang tegas dengan icon gunting kecil jika untuk digunting.',
      'Seluruh ilustrasi kepingan puzzle dan kotak papan puzzle harus berwarna penuh dan estetis.'
    ],
    'Mencari Perbedaan': [
      'Tampilkan 2 panel gambar berdampingan (Gambar A dan Gambar B) yang identik dengan jumlah perbedaan terukur (misal: 3 perbedaan untuk usia dini, 5-7 perbedaan untuk usia sekolah).',
      'Kedua panel gambar harus FULL COLOR dengan kualitas grafis tinggi.',
      'Sediakan lingkaran centang checklist di bagian bawah untuk menandai perbedaan yang ditemukan.'
    ],
    'Aktivitas Gunting dan Tempel': [
      'Bagi halaman menjadi dua area: Area Papan Tempel (Target Scene) dan Area Keping Potong (Cutout Area) dengan garis putus-putus berikon gunting.',
      'Bentuk kepingan potong disesuaikan usia (bentuk geometris sederhana untuk usia dini).',
      'Semua bagian dan ilustrasi latar harus full color dan ceria.'
    ]
  };

  const genericRules = [
    `Susun struktur lembar kerja yang interaktif dan sesuai dengan aktivitas "${activity}".`,
    'SEMUA ILUSTRASI, BACKGROUND, DEKORASI, DAN ELEMEN VISUAL HARUS FULL COLOR BERWARNA.',
    'Jangan gunakan gambar monokrom atau hitam-putih untuk aktivitas non-coloring.',
    'Sediakan ruang yang jelas untuk instruksi, nama anak, tanggal, dan area pengerjaan tugas.'
  ];

  return {
    rulesHeading: `ATURAN KHUSUS AKTIVITAS NON-COLORING: ${activity.toUpperCase()}`,
    rulesBody: specificMap[activity] || genericRules,
    pageTemplateRule: 'Ilustrasi Full Color + Elemen Interaktif Tematik Sesuai Aktivitas + Frame Border Menarik + Header Lengkap'
  };
}

/**
 * Main prompt compiler engine
 */
export function generateMasterPrompt(settings: WorksheetSettings): GeneratedMasterPrompt {
  const actualTheme = settings.theme === 'Lainnya' ? (settings.customTheme?.trim() || 'Dunia Petualangan Ceria') : settings.theme;
  const actualCharacter = settings.characterType === 'Custom' ? (settings.customCharacterType?.trim() || 'Karakter Ramah') : settings.characterType;
  
  let pageCountNumber = 5;
  if (settings.pageCount === 'Custom') {
    pageCountNumber = Math.max(1, Math.min(30, settings.customPageCount || 5));
  } else {
    const match = settings.pageCount.match(/\d+/);
    if (match) pageCountNumber = parseInt(match[0], 10);
  }

  const isColoring = settings.activityType === 'Coloring / Mewarnai';
  const ageRules = getAgeGuidelines(settings.targetAge);
  const activityRules = getActivityRules(settings.activityType, isColoring);

  // Generate dynamic, inspiring page breakdown
  const themeSubjects = getSubjectsForTheme(actualTheme, pageCountNumber);
  const pages: GeneratedPageDetail[] = [];

  for (let i = 1; i <= pageCountNumber; i++) {
    const subject = themeSubjects[i - 1];
    const pageTitle = isColoring
      ? `Halaman ${i}: ${subject.split(' yang ')[0] || subject.split(' di ')[0] || subject}`
      : `Halaman ${i}: Latihan ${settings.activityType} - ${subject.split(' yang ')[0] || subject.split(' di ')[0] || subject}`;

    let mainFocus = '';
    let coloringOutline = '';
    let coloredReference = '';
    let composition = '';
    let prompt = '';
    let decorations = '';

    if (isColoring) {
      mainFocus = `1 (SATU) Objek Utama untuk diwarnai: ${subject}.`;
      coloringOutline = `Outline hitam-putih garis tebal tegas (3-5pt), tanpa warna isi (pure white interior), kontur mulus, mudah diwarnai anak usia ${settings.targetAge}.`;
      coloredReference = `Miniatur berukuran kecil (15% dari lembar kerja) di sudut atas yang menampilkan ${subject} dalam versi WARNA LENGKAP dengan palet warna ceria dan harmonis sebagai panduan visual anak.`;
      composition = `Objek utama diletakkan di tengah (center-focused) berukuran besar dan dominan, bebas dari gangguan garis silang.`;
      prompt = `Buat 1 gambar outline hitam-putih untuk diwarnai: ${subject}, ditambah 1 gambar kecil berwarna dari objek yang sama persis di sudut halaman sebagai referensi. Frame dan background halaman tetap berwarna cerah bergaya ${settings.visualStyle}.`;
      decorations = `Frame border bertema ${actualTheme} dengan warna-warni ceria, dedaunan/awan/bintang kecil berwarna di luar area gambar utama.`;
    } else {
      mainFocus = `Aktivitas ${settings.activityType} interaktif bertema ${actualTheme}: ${subject}.`;
      composition = `Tata letak terstruktur dengan header judul, instruksi singkat, area kerja interaktif utama, dan ruang skor/apresiasi bintang di bagian bawah.`;
      prompt = `Buat halaman lembar kerja ${settings.activityType} full color bertema ${actualTheme} untuk anak usia ${settings.targetAge} dengan fokus pada: ${subject}. Gunakan gaya ${settings.visualStyle}.`;
      decorations = `Ornamen tematik ${actualTheme} penuh warna, garis panduan jelas, dan palet warna ramah anak.`;
    }

    pages.push({
      pageNumber: i,
      title: pageTitle,
      mainFocus,
      coloringOutlineObject: coloringOutline,
      coloredReferenceObject: coloredReference,
      compositionAndPose: composition,
      educationalPrompt: prompt,
      decorations
    });
  }

  // Construct the Master Prompt text with 20 distinct structured sections
  const fullPromptLines: string[] = [
    `# ==============================================================================`,
    `# MASTER PROMPT: WORKSHEET BLUEPRINT GENERATOR`,
    `# PRODUK DIGITAL EDUKATIF PROFESIONAL`,
    `# ==============================================================================`,
    ``,
    `1. ROLE AI:`,
    `Bertindaklah sebagai Senior Educational Worksheet Designer, Child Development Specialist, dan Profesional Digital Illustrator untuk produk cetak anak berkualitas tinggi (high-end printable SaaS/KDP/Etsy standards).`,
    ``,
    `2. TUJUAN UTAMA:`,
    `Ciptakan paket worksheet digital edukatif lengkap sebanyak ${pageCountNumber} halaman bertema "${actualTheme}" yang dirancang khusus untuk target usia ${settings.targetAge}. Setiap halaman harus variatif, kreatif, memiliki nilai edukasi tinggi, secara visual konsisten sebagai satu kesatuan bundle produk digital premium, dan siap langsung di-render atau diproduksi tanpa perlu koreksi manual.`,
    ``,
    `3. SPESIFIKASI WORKSHEET:`,
    `- Format & Ukuran Kertas : ${settings.paperSize}`,
    `- Resolusi Standar Cetak : 300 DPI (Ultra Sharp, Print-Ready Vector/Raster)`,
    `- Bahasa Konten          : ${settings.language} (Gunakan tata bahasa yang konsisten, ramah anak, dan baku)`,
    `- Ruang Margin           : Minimal 15mm di seluruh sisi untuk keamanan pemotongan dan penjilidan (safe printing margin)`,
    `- Elemen Header Wajib    : Judul Lembar Kerja, Kolom Nama Anak, Kolom Tanggal, dan Baris Instruksi Singkat`,
    `- Elemen Footer Wajib    : Nomor Halaman ("Halaman X dari ${pageCountNumber}") dan 3 Bintang Apresiasi untuk diberi warna/dinilai guru & orang tua`,
    ``,
    `4. TARGET USIA (${settings.targetAge}):`,
    `- Tingkat Kompleksitas   : ${ageRules.complexity}`,
    `- Ketebalan Garis        : ${ageRules.lineWeight}`,
    `- Format Instruksi       : ${ageRules.instructionsLength}`,
    `- Tata Letak Ruang       : ${ageRules.uiSpacing}`,
    `- Manfaat Perkembangan   : ${ageRules.cognitiveChallenge}`,
    ``,
    `5. TEMA UTAMA:`,
    `"${actualTheme}" - Terapkan tema ini secara mendalam pada pemilihan objek, dekorasi border, ikon pendukung, latar belakang, dan analogi materi.`,
    ``,
    `6. TIPE AKTIVITAS:`,
    `"${settings.activityType}"`,
    ``,
    `7. JUMLAH HALAMAN:`,
    `${pageCountNumber} Halaman unik dengan variasi subjek berbeda di setiap lembarnya (tidak boleh ada halaman duplikat).`,
    ``,
    `8. UKURAN KERTAS & ORIENTASI:`,
    `${settings.paperSize}. Sesuaikan proporsi elemen visual dan grid aktivitas agar pas sempurna dengan kanvas ${settings.paperSize}.`,
    ``,
    `9. BAHASA KONTEN:`,
    `Seluruh judul, petunjuk pengerjaan, label nama/tanggal, dan teks interaktif WAJIB menggunakan "${settings.language}". Gunakan kalimat yang komunikatif, positif, dan memotivasi anak.`,
    ``,
    `10. TIPE KARAKTER:`,
    settings.characterType === 'Tanpa Karakter'
      ? `Tanpa karakter figur khusus. Fokus visual murni pada objek edukatif tematik dan elemen dekoratif estetis.`
      : `Gunakan karakter dengan tipe "${actualCharacter}". Karakter ini harus dipertahankan identitas desainnya (bentuk mata, proporsi tubuh, ciri khas ekspresi) secara KONSISTEN di seluruh lembar kerja agar membentuk maskot identitas produk yang kuat.`,
    ``,
    `11. STYLE DESAIN VISUAL:`,
    `"${settings.visualStyle}".`,
    `Karakteristik visual yang harus dipatuhi:`,
    `- Bentuk sudut lembut (rounded corners), ramah anak, tidak kaku`,
    `- Palet warna harmonis, cerah, tidak menyilaukan mata (child-friendly vibrant palette)`,
    `- Tipografi jelas (clean sans-serif / rounded educational font) yang mudah dibaca anak`,
    `- Komposisi visual seimbang dengan focal point yang tidak membingungkan`,
    ``,
    `12. ATURAN LAYOUT DAN KOMPOSISI:`,
    `- Bagian Atas  : Header rapi berisi Nama, Tanggal, dan Judul Halaman tematik`,
    `- Bagian Tengah: Area aktivitas utama (70-75% dari total bidang kertas) dengan jarak napas (white space) yang cukup`,
    `- Bagian Bawah : Ruang apresiasi bintang atau catatan guru/orang tua`,
    `- Pembatas     : Border dekoratif tematik ${actualTheme} yang membingkai lembar kerja dengan rapi`,
    ``,
    `13. ATURAN KREATIVITAS:`,
    `- Setiap halaman harus menghadirkan komposisi sudut pandang yang segar dan tidak monoton`,
    `- Gunakan ekspresi karakter yang bervariasi (ceria, tersenyum, penasaran, bangga)`,
    `- Sertakan elemen kejutan kecil (micro-details) seperti jejak kaki kecil, daun melayang, atau bintang kecil yang memperkaya visual tanpa mengganggu fokus utama`,
    ``,
    `14. ATURAN VARIASI ANTAR HALAMAN (ANTI-DUPLIKASI):`,
    `- Setiap halaman dari halaman 1 hingga halaman ${pageCountNumber} HARUS memiliki subjek dan fokus pembelajaran yang BERBEDA`,
    `- Tingkat kesulitan harus berjenjang secara bertahap (gradual progression) dari halaman awal hingga halaman akhir`,
    `- Tidak boleh menduplikasi susunan atau objek yang identik antar halaman`,
    ``,
    `15. ATURAN KONSISTENSI BUNDLE PRODUK:`,
    `- Palet warna dasar (primary & accent colors) harus konsisten di seluruh ${pageCountNumber} halaman`,
    `- Gaya ilustrasi (ketebalan outline, teknik rendering, gaya arsiran/shading jika ada) harus 100% seragam`,
    `- Jenis font (huruf judul, huruf petunjuk, dan huruf nomor) tidak boleh berganti-ganti antar halaman`,
    `- Ukuran dan posisi border luar harus presisi seragam di semua halaman agar terlihat profesional saat dicetak atau dijadikan buku/e-book`,
    ``,
    `16. ATURAN KONTEN & KELAYAKAN PEDAGOGIS:`,
    `- Konten harus 100% bebas dari elemen kekerasan, gambar menakutkan, atau sudut tajam berbahaya`,
    `- Semua objek yang ditampilkan harus relevan dengan dunia nyata atau imajinasi positif anak`,
    `- Petunjuk harus mudah dipahami secara mandiri oleh anak atau dengan bimbingan minimal dari orang tua/guru`,
    ``,
    `17. ${activityRules.rulesHeading}:`,
    ...activityRules.rulesBody.map((rule, idx) => `[17.${idx + 1}] ${rule}`),
    ``,
    ...(settings.additionalNotes.trim()
      ? [
          `18. CATATAN TAMBAHAN KHUSUS PENGGUNA:`,
          `"${settings.additionalNotes.trim()}"`,
          `Catatan di atas wajib diakomodasi dan diprioritaskan dalam penyusunan setiap elemen visual dan tekstual.`,
          ``
        ]
      : [
          `18. CATATAN TAMBAHAN KHUSUS PENGGUNA:`,
          `- (Tidak ada instruksi tambahan khusus, ikuti seluruh spesifikasi di atas secara maksimal).`,
          ``
        ]),
    `19. RINCIAN STRUKTUR DETAIL SETIAP HALAMAN (HALAMAN 1 S/D ${pageCountNumber}):`,
    ...pages.flatMap((p) => {
      const lines = [
        `--------------------------------------------------------------------------------`,
        `>>> [HALAMAN ${p.pageNumber} DARI ${pageCountNumber}] : ${p.title}`,
        `- Fokus Utama Halaman     : ${p.mainFocus}`,
        `- Komposisi & Tata Letak  : ${p.compositionAndPose}`,
        `- Elemen Dekorasi & Frame : ${p.decorations}`
      ];
      if (isColoring) {
        lines.push(`- Gambar Utama Coloring   : ${p.coloringOutlineObject}`);
        lines.push(`- Gambar Referensi Warna  : ${p.coloredReferenceObject}`);
        lines.push(`- Aturan Warna Halaman    : Gambar utama outline hitam-putih; background, border, judul, dan referensi kecil FULL COLOR.`);
      } else {
        lines.push(`- Aturan Warna Halaman    : FULL COLOR BERWARNA di seluruh objek, ilustrasi, background, dan teks.`);
      }
      lines.push(`- Formula Prompt AI Siap Pakai:`);
      lines.push(`  "${p.educationalPrompt}"`);
      return lines;
    }),
    `--------------------------------------------------------------------------------`,
    ``,
    `20. QUALITY CONTROL & VERIFIKASI SEBELUM GENERATE:`,
    `Pastikan AI atau desainer melakukan self-audit terhadap checklist berikut sebelum finalisasi:`,
    `[✓] Jumlah total halaman persis ${pageCountNumber} lembar.`,
    `[✓] Ukuran kertas ${settings.paperSize} dengan orientasi yang benar dan margin aman tercetak.`,
    `[✓] Bahasa konten sepenuhnya "${settings.language}" tanpa ada teks acak/lorem ipsum.`,
    `[✓] Tingkat kesulitan dan ketebalan garis sesuai untuk target usia "${settings.targetAge}".`,
    `[✓] Gaya visual "${settings.visualStyle}" konsisten di setiap lembar.`,
    isColoring
      ? `[✓] ATURAN COLORING: Setiap halaman TEPAT MEMILIKI 1 gambar utama outline hitam-putih untuk diwarnai. Tidak ada 2 gambar utama!`
      : `[✓] ATURAN NON-COLORING: Seluruh ilustrasi dan elemen pendukung full color menarik.`,
    isColoring
      ? `[✓] ATURAN REFERENSI: Setiap halaman memiliki 1 miniatur berwarna dari objek yang sama persis sebagai panduan visual anak.`
      : `[✓] Interaktivitas aktivitas "${settings.activityType}" jelas dan dapat diselesaikan anak.`,
    isColoring
      ? `[✓] Background, border dekoratif, judul, dan ornamen tetap full color (hanya gambar utama yang outline hitam-putih).`
      : `[✓] Jarak antar elemen proporsional dan tidak membingungkan anak.`,
    `[✓] Setiap halaman memiliki variasi subjek yang berbeda dan anti-duplikasi.`,
    ``,
    `# ==============================================================================`,
    `# AKHIR MASTER PROMPT - SIAP DIJALANKAN DI MIDJOURNEY / CHATGPT / DALL-E / CANVA`,
    `# ==============================================================================`
  ];

  return {
    fullPromptText: fullPromptLines.join('\n'),
    summary: {
      paperSize: settings.paperSize,
      language: settings.language,
      theme: actualTheme,
      targetAge: settings.targetAge,
      activityType: settings.activityType,
      pageCount: pageCountNumber,
      characterType: actualCharacter,
      visualStyle: settings.visualStyle,
      isColoring
    },
    pages
  };
}
