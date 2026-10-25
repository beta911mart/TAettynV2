import React, { useState } from 'react';
import {
  GeneratorType,
  GeneratorResult,
  generateAcademicDraft
} from '../utils/academicGenerators';

interface AiGeneratorModalProps {
  isOpen: boolean;
  initialType: GeneratorType;
  onClose: () => void;
  onSendToWhatsApp: (text: string) => void;
}

export const AiGeneratorModal: React.FC<AiGeneratorModalProps> = ({
  isOpen,
  initialType,
  onClose,
  onSendToWhatsApp
}) => {
  const [activeType, setActiveType] = useState<GeneratorType>(initialType);
  const [topic, setTopic] = useState('');
  const [subject, setSubject] = useState('Pendidikan & Sosial Humaniora');
  const [level, setLevel] = useState('Strata 1 (S-1)');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeneratorResult | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsGenerating(true);
    setCopied(false);

    setTimeout(() => {
      const generated = generateAcademicDraft(activeType, topic, level, subject);
      setResult(generated);
      setIsGenerating(false);
    }, 450);
  };

  const handleCopy = () => {
    if (!result) return;
    const textToCopy = `=== ${result.title} ===\nJenjang: ${result.academicLevel}\n\n` +
      result.outline.map((o) => `${o.heading}\n${o.subsections.map((s) => `  - ${s}`).join('\n')}\n\nUraian Inti:\n${o.contentSnippet}\n`).join('\n') +
      `\nDaftar Referensi Acuan:\n` +
      result.references.map((r) => `- ${r}`).join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    if (!result) return;
    const content = `JUDUL DOKUMEN: ${result.title}\nJENJANG: ${result.academicLevel}\nDISUSUN DENGAN: Teman Akademik Ettyn AI Assistant\n=======================================================\n\n` +
      result.outline.map((o) => `${o.heading}\n${o.subsections.map((s) => `  * ${s}`).join('\n')}\n\nUraian Substansi:\n${o.contentSnippet}\n-------------------------------------------------------\n`).join('\n') +
      `\nDAFTAR RUJUKAN ACUAN:\n` +
      result.references.map((r, i) => `[${i + 1}] ${r}`).join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${result.title.substring(0, 30).replace(/\s+/g, '_')}_Draft_Ettyn.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleConsultWA = () => {
    if (!result) return;
    const msg = `Halo Kak Ettyn, saya telah membuat draf kerangka otomatis untuk topik:\n"${result.title}"\nSaya ingin dibantu pendampingan penulisan lengkap dan pengecekan kerapian naskah.`;
    onSendToWhatsApp(msg);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#fdf9f3] rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#dac1bd]/50 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#dac1bd]/40 flex items-center justify-between bg-white/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#944437] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[22px]">smart_toy</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#382D26]">Generator Dokumen Akademik ✨</h3>
              <p className="text-[12px] text-[#8E7D75]">
                Akselerasi ide &amp; kerangka penulisan naskah awal bersama Ettyn Academic Partner
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ebe8e2] hover:bg-[#944437] hover:text-white flex items-center justify-center text-[#382D26] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Tool Type Selector Tabs */}
        <div className="px-6 py-2.5 bg-[#f7f3ed] border-b border-[#ebe8e2] flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'makalah', label: 'Makalah AI', icon: 'description' },
            { id: 'bahan-ajar', label: 'Bahan Ajar / Modul', icon: 'school' },
            { id: 'ptk', label: 'Artikel PTK', icon: 'article' },
            { id: 'skenario', label: 'Skenario Berdiferensiasi', icon: 'alt_route' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveType(t.id as GeneratorType);
                setResult(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeType === t.id
                  ? 'bg-white text-[#944437] shadow-sm border border-[#dac1bd]/50'
                  : 'text-[#63534B] hover:text-[#382D26]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Input Form */}
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1">
                Topik atau Judul Rencana Tugas
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Misal: Penerapan Model Pembelajaran Berbasis Masalah pada Hasil Belajar Siswa..."
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437] shadow-xs"
              />
              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                <span className="text-[11px] text-[#8E7D75]">Contoh cepat:</span>
                {[
                  'Pengaruh AI terhadap Etika Riset Mahasiswa',
                  'Strategi Diferensiasi Konten Kurikulum Merdeka',
                  'Analisis Yuridis Perlindungan Konsumen Digital'
                ].map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTopic(sample)}
                    className="text-[11px] bg-white hover:bg-[#f1ede7] text-[#944437] px-2 py-0.5 rounded border border-[#dac1bd]/40 transition-colors"
                  >
                    + {sample}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1">
                  Bidang / Rumpun Ilmu
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Misal: FKIP, Manajemen, Hukum, Teknik"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1">
                  Jenjang Pendidikan
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437]"
                >
                  <option value="SMP / MTs">SMP / MTs</option>
                  <option value="SMA / SMK / MA">SMA / SMK / MA</option>
                  <option value="Strata 1 (S-1)">Sarjana S-1 (Skripsi / Makalah)</option>
                  <option value="Magister (S-2)">Magister S-2 (Tesis)</option>
                  <option value="Guru / Mahasiswa PPG">Guru / Peserta PPG</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3 px-4 rounded-xl bg-[#944437] hover:bg-[#b25c4e] disabled:bg-[#dac1bd] text-white font-semibold text-[14px] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isGenerating ? 'hourglass_top' : 'auto_fix_high'}
              </span>
              <span>
                {isGenerating
                  ? 'Merumuskan Kerangka Akademik...'
                  : 'Hasilkan Kerangka Dokumen Sekarang'}
              </span>
            </button>
          </form>

          {/* Generated Result Container */}
          {result && (
            <div className="mt-6 rounded-2xl bg-white border border-[#dac1bd]/50 p-6 shadow-sm space-y-5 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#f1ede7]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#ffdadc] text-[#944437]">
                    Hasil Generator Siap Pakai
                  </span>
                  <h4 className="text-[17px] font-bold text-[#382D26] mt-1.5">{result.title}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f1ede7] hover:bg-[#ebe8e2] text-[#382D26] text-[12px] font-semibold transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                    <span>{copied ? 'Tersalin!' : 'Salin Semua'}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#382D26] hover:bg-black text-white text-[12px] font-semibold transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Unduh TXT</span>
                  </button>
                </div>
              </div>

              {/* Outline Sections */}
              <div className="space-y-4">
                {result.outline.map((sec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF6F0] border border-[#ebe8e2]">
                    <h5 className="font-bold text-[14px] text-[#944437] mb-2">{sec.heading}</h5>
                    <ul className="list-disc list-inside text-[12px] text-[#63534B] space-y-1 mb-2 font-medium">
                      {sec.subsections.map((sub, sIdx) => (
                        <li key={sIdx}>{sub}</li>
                      ))}
                    </ul>
                    <div className="p-3 rounded-lg bg-white text-[12px] leading-relaxed text-[#382D26] border border-[#f1ede7]">
                      <span className="text-[10px] uppercase font-bold text-[#8E7D75] block mb-1">
                        Draf Narasi Awal:
                      </span>
                      {sec.contentSnippet}
                    </div>
                  </div>
                ))}
              </div>

              {/* References */}
              <div className="p-4 rounded-xl bg-[#f7f3ed] border border-[#ebe8e2]">
                <h5 className="font-bold text-[13px] text-[#382D26] mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#944437] text-[16px]">
                    menu_book
                  </span>
                  Rekomendasi Rujukan Pustaka Terkait
                </h5>
                <ul className="space-y-1.5 text-[11px] text-[#63534B]">
                  {result.references.map((ref, rIdx) => (
                    <li key={rIdx} className="pl-3 border-l-2 border-[#944437]">
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Callout */}
              <div className="p-4 rounded-xl bg-[#944437]/5 border border-[#944437]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-[12px] text-[#63534B]">
                  <span className="font-bold text-[#944437] block">
                    Ingin naskah ini dikembangkan lengkap &amp; rapi?
                  </span>
                  Ettyn Muda siap mendampingi penulisan penuh bab demi bab hingga lolos uji Turnitin.
                </div>
                <button
                  onClick={handleConsultWA}
                  className="px-4 py-2 rounded-lg bg-[#944437] hover:bg-[#b25c4e] text-white text-[12px] font-semibold whitespace-nowrap transition-all shadow-sm"
                >
                  Lanjut Bimbingan WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
