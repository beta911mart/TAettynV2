export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  category: 'skripsi' | 'makalah' | 'editing' | 'turnitin';
  detailedDescription?: string;
  features: string[];
  priceEstimate: string;
  turnaroundTime: string;
}

export interface PricingBundle {
  id: string;
  name: string;
  target: string;
  subtitle: string;
  price: string;
  unit: string;
  popular?: boolean;
  tagColor: string;
  icon: string;
  features: string[];
}

export interface RateItem {
  name: string;
  specs: string;
  time: string;
  price: string;
  promo?: boolean;
  highlight?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  university: string;
  avatarLetter: string;
  rating: number;
  content: string;
  date: string;
  serviceUsed: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  image: string;
  alt: string;
  details?: string;
  beforeAfter?: {
    before: string;
    after: string;
    note: string;
  };
}

export interface ShopItem {
  id: string;
  title: string;
  category: 'template' | 'spreadsheet' | 'jurnal' | 'panduan';
  price: string;
  rating: number;
  downloads: number;
  fileFormat: string;
  description: string;
  highlights: string[];
}

export const ACADEMIC_SERVICES: ServiceItem[] = [
  {
    id: 'proposal-skripsi',
    title: 'Proposal Skripsi & Tesis',
    description: 'Pengetikan komprehensif, penyusunan latar belakang masalah, penataan margin baku kampus, serta pendampingan struktur metodologi kualitatif maupun kuantitatif.',
    tag: 'Full Support • Bab 1-3',
    icon: 'menu_book',
    category: 'skripsi',
    detailedDescription: 'Layanan bimbingan intensif dan penataan format proposal tugas akhir dari perumusan masalah, tinjauan pustaka terkini (5-10 tahun terakhir), hingga rancangan instrumen penelitian sesuai template kampus masing-masing.',
    features: [
      'Penyesuaian Buku Pedoman Penulisan Skripsi kampus',
      'Pencarian referensi jurnal terindeks Sinta / Scopus',
      'Format sitasi otomatis (Mendeley / Zotero / Word)',
      'Bimbingan logika keterkaitan antar variabel'
    ],
    priceEstimate: 'Mulai Rp600.000',
    turnaroundTime: '4 - 7 Hari'
  },
  {
    id: 'makalah-ppt',
    title: 'Makalah & Slide PPT Estetik',
    description: 'Penyusunan naskah makalah ilmiah disertai slide presentasi interaktif dengan tipografi modern, infografis data rapi, dan skema warna memikat penguji.',
    tag: 'Desain Eksklusif • Mulai 20rb',
    icon: 'slideshow',
    category: 'makalah',
    detailedDescription: 'Transformasi materi kuliah yang padat menjadi slide presentasi visual berstandar eksekutif, menggunakan diagram interaktif, palet warna elegan, dan poin-poin inti yang mudah dipahami dewan penguji.',
    features: [
      'Slide master PowerPoint (.pptx) & PDF',
      'Visualisasi data riset & infografis kustom',
      'Catatan presenter (speaker notes) untuk latihan sidang',
      'Animasi transisi halus tanpa berlebihan'
    ],
    priceEstimate: 'Mulai Rp20.000 (Slide) / Rp50.000 (Makalah)',
    turnaroundTime: '24 Jam - 2 Hari'
  },
  {
    id: 'jasa-ketik',
    title: 'Jasa Ketik & Formatting Kilat',
    description: 'Transkrip rekaman audio wawancara, alih format foto buku/scan tulisan tangan ke dokumen Word, pengaturan page break, penomoran romawi, dan daftar isi otomatis.',
    tag: 'Ketelitian 99.9% • Kilat',
    icon: 'keyboard',
    category: 'editing',
    detailedDescription: 'Penyelamatan dokumen yang berantakan: penomoran halaman gabungan (romawi untuk kata pengantar, angka latin untuk bab), layout tabel lebar landscape, dan caption otomatis gambar/tabel.',
    features: [
      'Daftar isi, tabel, & gambar otomatis (1-klik)',
      'Heading styles berjenjang (Bab, Sub-bab, Anak sub-bab)',
      'Transkrip audio wawancara verbatim atau clean',
      'Alih bahasa dan pembersihan ketikan OCR'
    ],
    priceEstimate: 'Mulai Rp2.500 / halaman',
    turnaroundTime: 'Beberapa Jam - 1 Hari'
  },
  {
    id: 'format-jurnal',
    title: 'Jurnal Sinta & Scopus Template',
    description: 'Penyesuaian naskah pada author guideline jurnal target (APA, IEEE, Harvard), sinkronisasi sitasi Mendeley/Zotero, penataan abstrak dwibahasa, dan proofreading.',
    tag: 'Standar Akreditasi Nasional',
    icon: 'workspace_premium',
    category: 'skripsi',
    detailedDescription: 'Mempersiapkan manuskrip Anda agar memenuhi syarat awal editorial board jurnal Sinta (1 s.d. 6) dan Scopus tanpa ditolak di tahap technical check.',
    features: [
      'Penyesuaian 2 kolom / 1 kolom persis template target',
      'Format sitasi dan daftar pustaka presisi',
      'Abstrak dwibahasa (Bahasa Indonesia & Bahasa Inggris)',
      'Resolusi gambar dan grafik min. 300 DPI'
    ],
    priceEstimate: 'Mulai Rp250.000',
    turnaroundTime: '2 - 4 Hari'
  },
  {
    id: 'tugas-harian',
    title: 'Tugas Harian Kuliah & Sekolah',
    description: 'Pengerjaan resume jurnal, studi kasus manajerial, komputasi data Excel/SPSS, review buku ajar, serta tugas penulisan esai kritis dengan argumentasi berbobot.',
    tag: 'Tepat Waktu • Rahasia',
    icon: 'assignment',
    category: 'makalah',
    detailedDescription: 'Solusi pendampingan tugas mingguan dari jenjang sekolah menengah hingga sarjana untuk membantu meringankan beban akademik padat dengan hasil yang orisinal dan akademis.',
    features: [
      'Analisis kasus & pembahasan mendalam',
      'Komputasi rumus Excel dan grafik olah data',
      'Format penulisan baku akademis',
      'Kerahasiaan nama dan institusi terjamin 100%'
    ],
    priceEstimate: 'Mulai Rp25.000',
    turnaroundTime: '12 Jam - 24 Jam'
  },
  {
    id: 'rangkuman-materi',
    title: 'Rangkuman Materi & Mind Map',
    description: 'Ekstraksi poin esensial silabus persiapan ujian UTS/UAS, pembuatan bagan alir visual materi konsep rumit, dan flashcard belajar terstruktur.',
    tag: 'Format PDF Siap Cetak',
    icon: 'hub',
    category: 'editing',
    detailedDescription: 'Intisari materi dari puluhan bab buku teks disaring menjadi peta konsep komprehensif, sangat efektif untuk belajar cepat menjelang ujian komprehensif atau UTS/UAS.',
    features: [
      'Visual Mind Map dengan struktur hierarki jelas',
      'Ringkasan bab dengan poin kunci & rumus esensial',
      'Format PDF siap cetak ukuran A4',
      'Glosarium istilah penting per modul'
    ],
    priceEstimate: 'Mulai Rp35.000',
    turnaroundTime: '24 Jam'
  },
  {
    id: 'modul-ajar',
    title: 'Modul Ajar & LKPD Merdeka',
    description: 'Penyusunan modul pembelajaran interaktif, lembar kerja peserta didik kontekstual (LKPD), rubrik asesmen diagnostik, formatif, dan sumatif kurikulum teranyar.',
    tag: 'Spesial Guru & Mahasiswa PPG',
    icon: 'auto_stories',
    category: 'makalah',
    detailedDescription: 'Bantuan profesional untuk guru penggerak, guru honorer, maupun mahasiswa PPG dalam menyusun perangkat ajar berdiferensiasi dan instrumen asesmen yang valid.',
    features: [
      'Sesuai Capaian Pembelajaran (CP) dan Alur Tujuan (ATP)',
      'LKPD tematik interaktif siap digunakan di kelas',
      'Rubrik penilaian kognitif, afektif, dan psikomotorik',
      'Glosarium dan bahan bacaan guru serta murid'
    ],
    priceEstimate: 'Mulai Rp100.000',
    turnaroundTime: '2 - 3 Hari'
  },
  {
    id: 'cek-turnitin',
    title: 'Cek Turnitin (No-Repository)',
    description: 'Pengecekan kemiripan resmi dengan filter standar universitas. Akun non-repository menjamin naskah Anda tidak tersimpan di database publik global.',
    tag: 'Laporan PDF Lengkap • 10 Menit',
    icon: 'fact_check',
    category: 'turnitin',
    detailedDescription: 'Pengecekan similarity naskah ilmiah dengan akun Turnitin Instructor No-Repo. Dokumen Anda dijamin aman 100% dan tidak akan naik similarity-nya saat dicek ulang di kampus.',
    features: [
      'Laporan PDF resmi berwarna dari Turnitin',
      'Exclude Bibliography & Exclude Quotes sesuai aturan kampus',
      'Daftar rincian sumber kesamaan kata',
      'Pengerjaan super kilat 10-20 menit'
    ],
    priceEstimate: 'Rp15.000 / file',
    turnaroundTime: '10 - 20 Menit'
  },
  {
    id: 'parafrase-manual',
    title: 'Parafrase Manual Akademik',
    description: 'Rekonstruksi kalimat secara manual oleh editor berpengalaman. Menurunkan similarity index naskah di bawah 20% tanpa merusak substansi ide orisinal.',
    tag: 'Garansi Lolos Uji Kampus',
    icon: 'spellcheck',
    category: 'turnitin',
    detailedDescription: 'Tim editor merevisi redaksional setiap kalimat terindikasi plagiarisme secara manual kata demi kata. Bukan menggunakan bot spinning yang merusak tata bahasa Indonesia.',
    features: [
      'Dikerjakan manual oleh lulusan berprestasi',
      'Garansi persentase Turnitin turun di bawah batas kampus (15%-20%)',
      'Termasuk gratis cek Turnitin ulang sebelum & sesudah',
      'Revisi bebas biaya jika similarity belum lolos batas'
    ],
    priceEstimate: 'Mulai Rp55.000',
    turnaroundTime: '1 - 3 Hari'
  }
];

export const PRICING_BUNDLES: PricingBundle[] = [
  {
    id: 'paket-siswa',
    name: 'Paket Siswa Ceria',
    target: 'Pelajar • SMP / SMA',
    subtitle: 'Solusi tugas sekolah tepat waktu tanpa pusing.',
    price: 'Rp25.000',
    unit: '/ paket',
    popular: false,
    tagColor: 'bg-emerald-500/10 text-[#3D7A5A]',
    icon: 'backpack',
    features: [
      'Tugas sekolah maksimal 5 halaman',
      'Pengetikan rapi standar font & spasi',
      'Pengerjaan cepat (1 × 24 jam)',
      '1x Revisi minor format'
    ]
  },
  {
    id: 'paket-kuliah',
    name: 'Paket Akrab Kuliah',
    target: 'Terpopuler Mahasiswa',
    subtitle: 'Paket duet komplit: naskah makalah plus materi presentasi.',
    price: 'Rp75.000',
    unit: '/ paket',
    popular: true,
    tagColor: 'bg-[#C85A54] text-white',
    icon: 'local_fire_department',
    features: [
      'Makalah ilmiah rapi max 10 halaman',
      'Slide Presentasi PPT interaktif 5 slide',
      'Daftar pustaka otomatis & terpercaya',
      '2x Revisi garansi kepuasan',
      'File mentah Word (.docx) & PowerPoint (.pptx)'
    ]
  },
  {
    id: 'paket-skripsi',
    name: 'Paket Dokumen Skripsi',
    target: 'Skripsi & Tugas Akhir',
    subtitle: 'Penataan naskah final siap uji dan siap cetak perpustakaan.',
    price: 'Rp150.000',
    unit: '/ dokumen',
    popular: false,
    tagColor: 'bg-[#4A6E82]/10 text-[#4A6E82]',
    icon: 'workspace_premium',
    features: [
      'Penataan format naskah s.d. 30 halaman',
      'Daftar isi, gambar, & tabel otomatis',
      'Penyesuaian pedoman spesifik universitas',
      'Bonus cek Turnitin 1 file non-repo'
    ]
  }
];

export const RATES_TABLE: RateItem[] = [
  {
    name: 'Pendampingan Skripsi Full',
    specs: 'Bab 1 s.d. Bab 5, instrumen, olah data, & bimbingan sidang',
    time: '1 - 3 Minggu',
    price: 'Mulai Rp2.500.000',
    promo: true,
    highlight: true
  },
  {
    name: 'Proposal & Seminar Hasil',
    specs: 'Penyusunan Bab 1-3 atau Bab 4-5 + PPT Presentasi siap uji',
    time: '4 - 7 Hari',
    price: 'Rp600.000 - Rp1.000.000'
  },
  {
    name: 'Pembuatan Makalah Mandiri',
    specs: 'Struktur lengkap, referensi jurnal 5 tahun terakhir, format Word',
    time: '1 - 2 Hari',
    price: 'Mulai Rp50.000'
  },
  {
    name: 'Desain Slide PPT Sidang / Kuliah',
    specs: 'Layout visual estetik, animatif ringkas, master template rapi',
    time: '24 Jam',
    price: 'Mulai Rp20.000'
  },
  {
    name: 'Cek Plagiasi Turnitin No-Repo',
    specs: 'Hasil PDF resmi dengan sorotan kesamaan & daftar sumber acuan',
    time: '10 - 20 Menit',
    price: 'Rp15.000 / file',
    highlight: true
  },
  {
    name: 'Parafrase Sistematis Naskah',
    specs: 'Penyusunan ulang kalimat akademis, garansi lolos ambang batas',
    time: '1 - 3 Hari',
    price: 'Rp55.000 / 80 halaman'
  }
];

export const TERMS_AND_CONDITIONS = [
  {
    id: 1,
    title: 'Prosedur Pemesanan',
    desc: 'Klien wajib mengirimkan pedoman tugas lengkap, instruksi dosen, batas waktu (deadline), dan materi pendukung via WhatsApp sebelum penetapan tarif resmi.'
  },
  {
    id: 2,
    title: 'Pembayaran Bertahap (DP)',
    desc: 'Pengerjaan dimulai setelah klien membayar uang muka (DP) minimal 50%. Pelunasan diselesaikan saat pratinjau tugas telah dikonfirmasi sesuai harapan.'
  },
  {
    id: 3,
    title: 'Ketepatan Waktu Kerja',
    desc: 'Kami menjamin penyerahan naskah sebelum batas waktu yang disepakati untuk memberikan ruang pengecekan mandiri kepada mahasiswa.'
  },
  {
    id: 4,
    title: 'Garansi Revisi Rapi',
    desc: 'Revisi minor mencakup perbaikan format, penataan rujukan, dan penulisan gratis selama 7 hari kalender setelah file pertama kali dikirimkan.'
  },
  {
    id: 5,
    title: 'Batasan Tanggung Jawab',
    desc: 'Perubahan instruksi di luar kesepakatan awal (misal penggantian judul total atau metode riset) akan dikenakan biaya penyesuaian wajar.'
  },
  {
    id: 6,
    title: 'Etika & Bimbingan Mandiri',
    desc: 'Layanan kami berperan sebagai pendampingan asistensi edukatif, penyuntingan format naskah, dan stimulus referensi ilmiah bagi mahasiswa.'
  },
  {
    id: 7,
    title: 'Kerahasiaan Data 100%',
    desc: 'Nama, NIM, instansi kampus, dan naskah riset tidak akan pernah dipublikasikan, dibagikan, atau dijual kepada pihak ketiga mana pun.'
  },
  {
    id: 8,
    title: 'Kebijakan Pembatalan',
    desc: 'Pembatalan sepihak setelah proses riset dimulai akan diperhitungkan secara proporsional sesuai progres dokumen yang telah diselesaikan.'
  },
  {
    id: 9,
    title: 'Persetujuan Bersama',
    desc: 'Dengan mentransfer pembayaran uang muka, klien dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan layanan di atas.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'galeri-1',
    title: 'Layout Proposal & Daftar Isi Otomatis',
    description: 'Penataan hierarki heading Word 100% presisi sesuai pedoman akademik Universitas Indonesia.',
    badge: 'Skripsi S-1',
    badgeColor: 'text-[#944437]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1nfpaA22d0LBhy03Jt1OdrDTYrdS9WhaGf_VhukIL3eVfMc26nzSHqz1KTthghBE9PZEXTbd57-EazcOLXzo1eFBlsTHAqNFln0TIQ3Ss3MsrC14HkHjDBbIB98197voQywot-YYUaNwQzYPIstQb9B-vT-LY6dMbDhAiZuAyh75cz7uZI5A1Chv6nAMOmIiPVUcoYTEhhLpf7oLaZQ42hzBbS_nwm3RQ1MCK5IWYeqR3qOF4UOJkqw',
    alt: 'High resolution mockup photograph of a neatly bound hardcover university undergraduate thesis proposal with elegant golden typography',
    details: 'Penataan bab 1-3 lengkap dengan format font Times New Roman 12 pt, spasi 1.5, margin 4-4-3-3 cm, penomoran romawi di kata pengantar dan angka latin di bab isi. Dilengkapi daftar gambar dan tabel otomatis.',
    beforeAfter: {
      before: 'File naskah mentah berantakan dengan spasi ganda tak beraturan dan daftar isi manual bertitik-titik.',
      after: 'Dokumen Word rapi berstandar baku universitas dengan Heading Styles 1-klik update nomor halaman.',
      note: 'Diterima oleh dewan dosen pembimbing UI tanpa revisi margin.'
    }
  },
  {
    id: 'galeri-2',
    title: 'Slide PPT Sidang Skripsi & Tesis',
    description: 'Penyajian ringkas data riset dengan visual modern yang memukau dewan penguji seminar hasil.',
    badge: 'Slide Presentasi',
    badgeColor: 'text-[#4A6E82]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo2kQUJ3ezvSbw1rDe5gIBxiyaJ7YrJy_UN3kLP2INloJyQEN1JIb0JUj9nvM4NxXqodwGvZlz2WfHSjPEba5PF_sVZPX0phJWRlDI5hhdCBkkeDGetCc-94NdTiZgKEypuiZsNret3WepxCkFc3XPIvYEtxMXjVey3qlEMB0bBBIyJiPRYLDrEpo2qqGq93UxjX1Vt2Pb0BbADqGH7Sh54yEcyZWDfnQqzX0nK-drZ3SUrp1Rid8Ykw',
    alt: 'Clean and professional presentation slides displayed on a modern laptop screen sitting on a desk with notebooks and warm espresso cup',
    details: '15 slide eksekutif terstruktur: Judul, Latar Belakang Masalah, Rumusan & Tujuan, Tinjauan Teori Inti, Metodologi, Pembahasan Grafik Hasil, serta Kesimpulan & Saran.',
    beforeAfter: {
      before: 'Teks panjang berparagraf-paragraf ditempel di slide dengan layout standar putih polos.',
      after: 'Infografis kustom dengan bagan alir hipotesis terkonfirmasi dan highlight temuan penting.',
      note: 'Penguji memuji kejelasan visual dan presentasi selesai tepat 12 menit.'
    }
  },
  {
    id: 'galeri-3',
    title: 'Sertifikat Similarity Score < 15%',
    description: 'Hasil rekonstruksi parafrase sistematis membuktikan naskah bebas dari potensi plagiarisme.',
    badge: 'Uji Turnitin',
    badgeColor: 'text-[#3D7A5A]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJWPAW4gOt6XMVp8vtIwktG8vs6iUM4aI4m-CAptLRWJVEv7peEvFCl-ZaFD_Z7eYHKhqVv7LcQ3rbSLjiMVCGk0NL0AzPq8KAcXVFADom0rjy7JCSvJ_UB7vtvvYIiWlo9gHh5JaR_q0422QZP62-an8Auc9CAFVDoCVHjxy9I720RL7AMgHNlSGT8NwLF-Ig95694xFzlDuFSqw6HNhIEF8lDRV9PJA3XzzpECAb11jnB61mDjPkzw',
    alt: 'Close up photograph of an official digital similarity verification report showing a 9 percent similarity index badge with green verification checkmark on a tablet computer',
    details: 'Turnitin resmi Instructor No-Repository. Laporan similarity index komprehensif menampilkan warna-warni kesamaan teks sebelum dan sesudah diparafrase manual.',
    beforeAfter: {
      before: 'Similarity awal 43% akibat pengutipan teori panjang di Bab 2.',
      after: 'Similarity akhir 8% setelah diparafrase manual dengan mempertahankan sitasi ilmiah.',
      note: 'Lolos uji Turnitin kampus pada kesempatan pertama.'
    }
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Maria Fatima',
    role: 'Mahasiswi FKIP',
    university: 'Universitas Nusa Cendana (Undana)',
    avatarLetter: 'M',
    rating: 5,
    content: '“Kak Ettyn sabar banget bantuin rapikan bab 4 sama buatkan daftar isi otomatis. Waktu dosen periksa langsung di-acc tanpa revisi format lagi!”',
    date: '3 hari yang lalu',
    serviceUsed: 'Format Dokumen Skripsi'
  },
  {
    id: 'testi-2',
    name: 'Reza Pratama',
    role: 'Magister Manajemen',
    university: 'Universitas Indonesia (UI)',
    avatarLetter: 'R',
    rating: 5,
    content: '“Turnitin naskah tesis saya awalnya 38%, setelah diparafrase manual sama tim Kak Ettyn turun drastis ke 11%. Aman banget no-repo!”',
    date: '1 minggu yang lalu',
    serviceUsed: 'Parafrase Turnitin No-Repo'
  },
  {
    id: 'testi-3',
    name: 'Annisa Larasati',
    role: 'Ilmu Komunikasi',
    university: 'Universitas Gadjah Mada (UGM)',
    avatarLetter: 'A',
    rating: 5,
    content: '“Slide PPT-nya estetik parah, infografisnya ringkas bikin dosen penguji gampang paham inti hipotesis riset saya. Terima kasih banyak Kak!”',
    date: '2 minggu yang lalu',
    serviceUsed: 'Desain Slide PPT Sidang'
  },
  {
    id: 'testi-4',
    name: 'Fahmi Halim',
    role: 'Fakultas Hukum',
    university: 'Universitas Hasanuddin (Unhas)',
    avatarLetter: 'F',
    rating: 5,
    content: '“Sangat rekomendasi untuk yang kerja sambil kuliah. Fast response, naskah makalah selesai sebelum deadline dan sitasinya akurat.”',
    date: '3 minggu yang lalu',
    serviceUsed: 'Paket Akrab Kuliah'
  },
  {
    id: 'testi-5',
    name: 'Putri Wulandari',
    role: 'Pendidikan Biologi',
    university: 'Universitas Pendidikan Indonesia (UPI)',
    avatarLetter: 'P',
    rating: 5,
    content: '“Bantuan modul ajar kurikulum merdeka dan LKPD-nya detail sekali, sangat membantu saat masa PPL dan ujian PPG. Nilai saya A!”',
    date: '1 bulan yang lalu',
    serviceUsed: 'Modul Ajar & LKPD Merdeka'
  },
  {
    id: 'testi-6',
    name: 'Dimas Satria',
    role: 'Teknik Informatika',
    university: 'Institut Teknologi Sepuluh Nopember (ITS)',
    avatarLetter: 'D',
    rating: 5,
    content: '“Template jurnal IEEE dan Scopus penataannya presisi banget, gambar grafik diatur 300 DPI dan langsung lolos tahap screening editor jurnal.”',
    date: '1 bulan yang lalu',
    serviceUsed: 'Jurnal Sinta & Scopus Template'
  }
];

export const SHOP_PRODUCTS: ShopItem[] = [
  {
    id: 'shop-skripsi-word',
    title: 'Template Skripsi Otomatis Word (.docx)',
    category: 'template',
    price: 'Rp39.000',
    rating: 4.9,
    downloads: 840,
    fileFormat: 'DOCX (Word 2016-365)',
    description: 'Master template penulisan skripsi siap pakai dengan konfigurasi Styles otomatis: Bab 1-5, penomoran Romawi & Latin otomatis, Daftar Isi, Gambar, dan Tabel sekali klik.',
    highlights: ['Margin 4-4-3-3 otomatis', 'Daftar isi otomatis', 'Format tabel landscape siap pakai', 'Panduan video tutorial']
  },
  {
    id: 'shop-skripsi-latex',
    title: 'Boilerplate LaTeX Skripsi & Tesis Modern',
    category: 'template',
    price: 'Rp49.000',
    rating: 5.0,
    downloads: 320,
    fileFormat: 'ZIP (Overleaf / TeX)',
    description: 'Template LaTeX standar perguruan tinggi di Indonesia dengan package BibTeX otomatis, tata letak bab modular, dan kompiler instan di Overleaf.',
    highlights: ['Kompatibel Overleaf 100%', 'Format sitasi IEEE & APA 7th', 'Modular Bab 1 s.d. 5', 'Dukungan rumus matematika kompleks']
  },
  {
    id: 'shop-spss-processor',
    title: 'Spreadsheet Template Olah Data SPSS & Excel',
    category: 'spreadsheet',
    price: 'Rp45.000',
    rating: 4.8,
    downloads: 610,
    fileFormat: 'XLSX (Excel)',
    description: 'Sheet otomasi uji validitas, reliabilitas cronbach alpha, regresi linier berganda, uji T, dan uji F dengan grafik output yang otomatis tergenerate.',
    highlights: ['Rumus otomatis siap pakai', 'Uji normalitas & homogenitas', 'Output tabel sesuai bab 4 skripsi', 'Contoh interpretasi data naratif']
  },
  {
    id: 'shop-jurnal-bundle',
    title: 'Kit Penulisan Jurnal Sinta 2-4 & Scopus',
    category: 'jurnal',
    price: 'Rp59.000',
    rating: 4.9,
    downloads: 490,
    fileFormat: 'DOCX + PDF Guides',
    description: 'Paket template 2 kolom, panduan menulis cover letter untuk editor jurnal, checklist bebas plagiasi, dan trik menulis introduction yang memikat reviewer.',
    highlights: ['Template 2-Kolom Sinta & IEEE', 'Draft Cover Letter resmi', 'Panduan respon reviewer', 'Format abstrak dwibahasa']
  },
  {
    id: 'shop-citation-master',
    title: 'Panduan Sitasi Mendeley & Zotero Praktis',
    category: 'panduan',
    price: 'Rp25.000',
    rating: 4.9,
    downloads: 950,
    fileFormat: 'E-Book PDF + CSL Styles',
    description: 'Buku panduan bergambar langkah demi langkah mengelola ratusan referensi, sinkronisasi file PDF, dan mengatasi error sitasi di Microsoft Word.',
    highlights: ['Panduan bergambar 45 halaman', 'Koleksi style sitasi kampus', 'Tips integrasi Google Scholar', 'Cara rapikan metadata korup']
  }
];

export const SPECIAL_SERVICES_DATA = [
  {
    id: 'les-microsoft',
    title: 'Les Online Belajar Microsoft Dasar',
    subtitle: 'Kuasai trik praktis Microsoft Word, Excel, dan PowerPoint esensial untuk mempermudah tugas kuliah harian Anda.',
    badge: 'Kelas Privat 1-on-1',
    badgeColor: 'bg-[#4A6E82] text-white',
    icon: 'laptop_mac',
    colorClass: 'from-[#FAF6F0] via-[#f7f3ed] to-[#ffdadc]/30',
    modules: [
      { name: 'MS Word', detail: 'Format Skripsi & Heading Otomatis' },
      { name: 'MS Excel', detail: 'Rumus IF, VLOOKUP, & Grafik Riset' },
      { name: 'MS PPT', detail: 'Slide Presentasi Interaktif & Estetik' }
    ],
    duration: '3 Sesi x 90 Menit (Fleksibel)',
    price: 'Rp199.000 / paket 3 modul',
    features: [
      'Bimbingan langsung via Google Meet / Zoom santai',
      'Praktik langsung menggunakan file tugas Anda sendiri',
      'Mendapatkan rekaman sesi video & file latihan',
      'Konsultasi tanya-jawab gratis selamanya'
    ]
  },
  {
    id: 'web-kilat',
    title: 'Jasa Pembuatan Website Kilat',
    subtitle: 'Hadirkan profil usaha, website organisasi mahasiswa, portfolio akademik profesional, atau landing page kegiatan kampus Anda hanya dalam 24 jam dengan tampilan elegan & responsif.',
    badge: 'Promo Terbatas',
    badgeColor: 'bg-[#C85A54] text-white',
    priceTag: 'Mulai Rp300.000 (1 Hari Jadi)',
    icon: 'rocket_launch',
    colorClass: 'from-[#FAF6F0] via-[#f7f3ed] to-[#ffdad4]/40',
    featuresList: [
      'Desain Mobile Friendly & Clean Modern berkelas',
      'Gratis Domain .biz.id / .my.id & Hosting Siap Pakai',
      'Tombol WhatsApp langsung terhubung ke chat Anda',
      'Terintegrasi Google Maps & Galeri Portofolio Foto',
      'Garansi revisi tampilan hingga puas'
    ],
    portfolioDemoTypes: [
      'Portfolio Akademik Dosen / Mahasiswa',
      'Profil Organisasi Himpunan & BEM',
      'Landing Page UMKM & Jasa Mahasiswa'
    ]
  }
];
