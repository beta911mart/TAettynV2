export type GeneratorType = 'makalah' | 'bahan-ajar' | 'ptk' | 'skenario';

export interface GeneratorResult {
  title: string;
  type: GeneratorType;
  academicLevel: string;
  outline: {
    heading: string;
    subsections: string[];
    contentSnippet: string;
  }[];
  references: string[];
  keyRecommendations: string[];
}

export function generateAcademicDraft(
  type: GeneratorType,
  topic: string,
  level: string,
  subject: string
): GeneratorResult {
  const cleanTopic = topic.trim() || 'Transformasi Digital dalam Pendidikan Indonesia';
  const cleanSubject = subject.trim() || 'Pendidikan & Sosial';

  if (type === 'makalah') {
    return {
      title: `Analisis Komprehensif: ${cleanTopic} dalam Perspektif ${cleanSubject}`,
      type: 'makalah',
      academicLevel: level,
      outline: [
        {
          heading: 'BAB I. PENDAHULUAN',
          subsections: [
            '1.1 Latar Belakang Masalah (Urgensi teoretis & empiris)',
            '1.2 Rumusan Masalah Riset',
            '1.3 Tujuan Penulisan & Manfaat Praktis'
          ],
          contentSnippet: `Di era disrupsi saat ini, isu mengenai "${cleanTopic}" menjadi fokus perdebatan penting dalam kajian ${cleanSubject}. Permasalahan muncul ketika implementasi di lapangan masih dihadapkan pada ketimpangan akses, kesiapan sumber daya manusia, serta disparitas kebijakan kelembagaan. Penulisan ini bertujuan mengelaborasi akar permasalahan serta merumuskan kerangka strategi adaptif yang berbasis bukti (evidence-based).`
        },
        {
          heading: 'BAB II. TINJAUAN PUSTAKA & KERANGKA TEORI',
          subsections: [
            '2.1 Landasan Teoretis Mutakhir (5 Tahun Terakhir)',
            '2.2 Tinjauan Penelitian Terdahulu yang Relevan',
            '2.3 Sintesis Kerangka Pemikiran Kritis'
          ],
          contentSnippet: `Kajian pustaka berakar pada teori interaksionisme struktural dan model adaptasi institusional. Berdasarkan telaah meta-analisis mutakhir, efektivitas penanganan "${cleanTopic}" memerlukan sinergi multisektoral serta standarisasi indikator keberhasilan yang terukur.`
        },
        {
          heading: 'BAB III. PEMBAHASAN & ANALISIS KRITIS',
          subsections: [
            '3.1 Identifikasi Faktor Pendorong dan Penghambat',
            '3.2 Analisis Komparatif Studi Kasus di Lapangan',
            '3.3 Solusi Strategis & Roadmap Rekomendasi Aksi'
          ],
          contentSnippet: `Dari hasil analisis data kualitatif dan komparasi literatur, ditemukan tiga pilar fundamental penentu keberhasilan: (1) standardisasi regulasi tata kelola, (2) penguatan kapasitas kompetensi aktor utama, dan (3) keberlanjutan pemantauan berbasis indikator performa utama (KPI).`
        },
        {
          heading: 'BAB IV. KESIMPULAN & REKOMENDASI',
          subsections: [
            '4.1 Kesimpulan Substantif',
            '4.2 Rekomendasi Kebijakan dan Praktik Akademik'
          ],
          contentSnippet: `Dapat disimpulkan bahwa keberhasilan implementasi ${cleanTopic} menuntut pergeseran paradigma dari pendekatan reaktif ke model antisipatif. Rekomendasi ditujukan kepada akademisi, pembuat kebijakan, dan praktisi di lapangan.`
        }
      ],
      references: [
        `Sudirman, A., & Kurniawan, B. (2024). Dinamika Kontemporer dalam ${cleanSubject}: Kajian Kritis. Jurnal Kajian Ilmu dan Transformasi, 12(2), 145-160.`,
        `Pratiwi, N. H., & Raharjo, S. (2023). Pendekatan Metodologis dalam Analisis ${cleanTopic}. Buletin Akademika Nasional, 8(1), 89-104.`,
        `Lestari, M., dkk. (2024). Evaluasi Kebijakan dan Implementasi Berkelanjutan. Jakarta: Penerbit Aksara Cendekia.`
      ],
      keyRecommendations: [
        'Pastikan kutipan merujuk pada pedoman sitasi APA 7th Edition',
        'Lakukan pengecekan Turnitin No-Repo sebelum diserahkan ke dosen pengampu',
        'Gunakan margin standar 4-4-3-3 cm dengan font Times New Roman 12 pt spasi 1.5'
      ]
    };
  }

  if (type === 'bahan-ajar') {
    return {
      title: `Modul Ajar Kontekstual: ${cleanTopic}`,
      type: 'bahan-ajar',
      academicLevel: level,
      outline: [
        {
          heading: 'BAGIAN I. INFORMASI UMUM & IDENTITAS MODUL',
          subsections: [
            '1. Identitas Penyusun & Jenjang Satuan Pendidikan',
            '2. Capaian Pembelajaran (CP) & Alur Tujuan Pembelajaran (ATP)',
            '3. Profil Pelajar / Kompetensi Lulusan Sasaran'
          ],
          contentSnippet: `Modul ajar ini dirancang untuk memfasilitasi pembelajaran aktif, kolaboratif, dan bermakna pada materi "${cleanTopic}". Mengembangkan nalar kritis, kreativitas pemecahan masalah, serta kemandirian belajar peserta didik.`
        },
        {
          heading: 'BAGIAN II. KOMPONEN INTI & KEGIATAN PEMBELAJARAN',
          subsections: [
            '1. Pertanyaan Pemantik (Inquiry Starter)',
            '2. Pemahaman Bermakna (Essential Meaning)',
            '3. Langkah Pembelajaran (Pendahuluan, Inti, Penutup)'
          ],
          contentSnippet: `Pertanyaan Pemantik: "Bagaimana fenomena ${cleanTopic} memengaruhi kehidupan sosial dan akademis kita sehari-hari, dan inovasi apa yang dapat Anda tawarkan?" Kegiatan inti memadukan diskusi kelompok terarah, eksplorasi lembar kerja (LKPD), dan presentasi mini produk belajar.`
        },
        {
          heading: 'BAGIAN III. ASESMEN & LEMBAR KERJA PESERTA DIDIK (LKPD)',
          subsections: [
            '1. Asesmen Diagnostik (Awal Pembelajaran)',
            '2. Asesmen Formatif (Observasi & Diskusi)',
            '3. Asesmen Sumatif (Portofolio / Tes Kinerja)'
          ],
          contentSnippet: `Disertai rubrik penilaian analitik 4 skala (Mahir, Cakap, Layak, Berkembang) untuk mengukur kompetensi pemahaman konseptual dan aplikasi praktis siswa.`
        }
      ],
      references: [
        `Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. (2024). Panduan Pembelajaran dan Asesmen Kurikulum Merdeka.`,
        `Suparman, A. (2023). Desain Instruksional Modern dalam Pengembangan Perangkat Ajar. Bandung: Remaja Rosdakarya.`
      ],
      keyRecommendations: [
        'Sesuaikan tingkat kedalaman materi dengan karakteristik peserta didik di kelas',
        'Gunakan media visual grafis dan studi kasus nyata agar siswa lebih antusias',
        'Dapat dipaketkan dengan pembuatan Slide Presentasi PPT interaktif'
      ]
    };
  }

  if (type === 'ptk') {
    return {
      title: `Proposal Penelitian Tindakan Kelas (PTK): Upaya Meningkatkan Kualitas Belajar Materi ${cleanTopic}`,
      type: 'ptk',
      academicLevel: level,
      outline: [
        {
          heading: 'BAB I. LATAR BELAKANG & IDENTIFIKASI MASALAH PTK',
          subsections: [
            '1.1 Realitas Kondisi Awal di Ruang Kelas (Fakta Reflektif)',
            '1.2 Identifikasi Kesenjangan Hasil Belajar',
            '1.3 Solusi Tindakan yang Dipilih (Metode / Media Inovatif)'
          ],
          contentSnippet: `Berdasarkan refleksi pembelajaran di kelas, ditemukan bahwa pada materi "${cleanTopic}", sebagian besar siswa menunjukkan rendahnya partisipasi aktif dan hasil evaluasi masih di bawah kriteria ketercapaian. Oleh sebab itu, diperlukan intervensi tindakan terencana melalui siklus berulang.`
        },
        {
          heading: 'BAB II. KAJIAN PUSTAKA & HIPOTESIS TINDAKAN',
          subsections: [
            '2.1 Kajian Teori Tindakan Intervensi',
            '2.2 Sintesis Karakteristik Materi Pelajaran',
            '2.3 Perumusan Hipotesis Tindakan'
          ],
          contentSnippet: `Hipotesis Tindakan: Penerapan metode pembelajaran interaktif berbasis proyek terbukti secara signifikan dapat meningkatkan keaktifan dan pemahaman konseptual siswa pada materi ${cleanTopic}.`
        },
        {
          heading: 'BAB III. METODOLOGI PENELITIAN TINDAKAN KELAS',
          subsections: [
            '3.1 Setting Penelitian & Subjek Siswa',
            '3.2 Prosedur Siklus Tindakan (Perencanaan, Tindakan, Observasi, Refleksi)',
            '3.3 Kriteria Keberhasilan Tindakan & Indikator Kuantitatif'
          ],
          contentSnippet: `Penelitian dirancang dalam dua siklus, mengadopsi model spiral Kemmis & McTaggart. Keberhasilan tindakan ditetapkan bila minimal 80% siswa mencapai batas ketuntasan dengan skor keaktifan kategori tinggi.`
        }
      ],
      references: [
        `Arikunto, S., Suhardjono, & Supardi. (2023). Penelitian Tindakan Kelas (Edisi Revisi). Jakarta: Bumi Aksara.`,
        `Hopkins, D. (2022). A Teacher's Guide to Classroom Research. Open University Press.`
      ],
      keyRecommendations: [
        'Siapkan lembar observasi aktivitas guru dan lembar aktivitas siswa per siklus',
        'Pastikan refleksi siklus 1 menjadi dasar perbaikan perencanaan siklus 2'
      ]
    };
  }

  // Skenario Berdiferensiasi
  return {
    title: `Skenario Pembelajaran Berdiferensiasi: ${cleanTopic}`,
    type: 'skenario',
    academicLevel: level,
    outline: [
      {
        heading: '1. PEMETAAN KEBUTUHAN BELAJAR SISWA',
        subsections: [
          'Kesiapan Belajar (Readiness) - Kategori Lambat, Sedang, Cepat',
          'Minat Belajar Siswa (Interest profiling)',
          'Profil Belajar Siswa (Visual, Auditori, Kinestetik)'
        ],
        contentSnippet: `Sebelum memulai unit materi "${cleanTopic}", guru melakukan tes diagnostik kognitif singkat 5 butir soal dan angket preferensi gaya belajar untuk membagi kelompok secara proporsional.`
      },
      {
        heading: '2. DIFERENSIASI KONTEN (Pilihan Sumber Belajar)',
        subsections: [
          'Kelompok Visual: Infografis alur & artikel teks berdiagram',
          'Kelompok Auditori: Penjelasan lisan guru, rekaman audio podcast',
          'Kelompok Kinestetik: Simulasi peran, kartu interaktif / kartu susun'
        ],
        contentSnippet: `Semua murid mempelajari konsep esensial yang sama tentang ${cleanTopic}, namun mengakses informasi melalui media representasi yang bervariasi sesuai modalitas belajar mereka.`
      },
      {
        heading: '3. DIFERENSIASI PROSES & PRODUK (Pilihan Output Tugas)',
        subsections: [
          'Diferensiasi Proses: Scaffolding bergradasi (bimbingan penuh vs mandiri)',
          'Diferensiasi Produk: Laporan naskah esai, slide presentasi canva, atau video simulasi mini',
          'Kriteria Penilaian: Rubrik asesmen autentik seragam'
        ],
        contentSnippet: `Siswa diberi kebebasan memilih bentuk akhir bukti pemahaman, asalkan memuat 3 indikator esensial: penjelasan fenomena, analisis dampak, dan usulan pemecahan masalah.`
      }
    ],
    references: [
      `Tomlinson, C. A. (2021). The Differentiated Classroom: Responding to the Needs of All Learners. ASCD.`,
      `Direktorat Jenderal Guru dan Tenaga Kependidikan. (2023). Modul Pembelajaran Berdiferensiasi.`
    ],
    keyRecommendations: [
      'Gunakan rubrik holistik yang menilai kualitas gagasan, bukan sekadar format medianya',
      'Lakukan ice-breaking reflektif di akhir kegiatan untuk mengonsolidasikan wawasan bersama'
    ]
  };
}
