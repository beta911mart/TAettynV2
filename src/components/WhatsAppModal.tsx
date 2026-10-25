import React, { useState } from 'react';

interface WhatsAppModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  initialService = '',
  onClose
}) => {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [service, setService] = useState(initialService || 'Pendampingan Proposal Skripsi');
  const [topic, setTopic] = useState('');
  const [deadline, setDeadline] = useState('3-5 Hari Mendatang');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateMessage = () => {
    return `Halo Kak Ettyn & Tim Teman Akademik,\n\nSaya ingin berkonsultasi mengenai pendampingan karya ilmiah:\n- Nama: ${name || '[Nama Anda]'}\n- Kampus/Sekolah: ${university || '[Nama Kampus]'}\n- Layanan: ${service}\n- Topik/Judul Tugas: ${topic || '[Jelaskan topik Anda]'}\n- Target Deadline: ${deadline}\n\nMohon info estimasi biaya dan ketersediaan slot pengerjaan. Terima kasih!`;
  };

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const rawMsg = generateMessage();
    const encoded = encodeURIComponent(rawMsg);
    // Real phone number configured for Teman Akademik Ettyn
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#fdf9f3] rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#dac1bd]/50 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#dac1bd]/40 flex items-center justify-between bg-white/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3D7A5A] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[22px]">chat</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#382D26]">Konsultasi WhatsApp Resmi</h3>
              <p className="text-[12px] text-[#8E7D75]">
                Terhubung langsung dengan Ettyn Muda (+62 812-3456-7890)
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

        {/* Form Body */}
        <form onSubmit={handleOpenWhatsApp} className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Misal: Dini Anggraini"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437]"
                required
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1">
                Kampus / Sekolah
              </label>
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="Misal: UI / UGM / Undana"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1">
              Kebutuhan Layanan
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437]"
            >
              <option value="Proposal Skripsi & Tesis">Proposal Skripsi &amp; Tesis (Bab 1-3)</option>
              <option value="Skripsi Full (Bab 1-5)">Skripsi Full Lengkap (Bab 1-5 &amp; Olah Data)</option>
              <option value="Makalah & Slide PPT Estetik">Makalah &amp; Slide PPT Estetik Sidang</option>
              <option value="Jasa Ketik & Formatting Kilat">Jasa Ketik Cepat &amp; Formatting Word</option>
              <option value="Jurnal Sinta & Scopus Template">Format Jurnal Sinta / Scopus Template</option>
              <option value="Cek Turnitin Resmi No-Repo">Cek Turnitin No-Repository (Rp15.000)</option>
              <option value="Parafrase Manual Turnitin">Parafrase Manual Lolos Turnitin</option>
              <option value="Les Online Microsoft Dasar">Les Online Belajar Microsoft Dasar</option>
              <option value="Jasa Pembuatan Website Kilat">Jasa Pembuatan Website Kilat 1 Hari</option>
              <option value="Paket Akrab Kuliah (Makalah + PPT)">Paket Akrab Kuliah (Rp75.000)</option>
            </select>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1">
              Topik Tugas / Catatan Tambahan
            </label>
            <textarea
              rows={2}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Jelaskan judul skripsi/tugas, instruksi dosen, atau jumlah halaman..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437]"
            />
          </div>

          <div>
            <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1">
              Target Tenggat Waktu (Deadline)
            </label>
            <select
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437]"
            >
              <option value="Kilat Express (24 Jam)">⚡ Kilat Express (24 Jam)</option>
              <option value="2 - 3 Hari Mendatang">2 - 3 Hari Mendatang</option>
              <option value="3 - 5 Hari Mendatang">3 - 5 Hari Mendatang</option>
              <option value="1 - 2 Minggu (Santai)">1 - 2 Minggu (Santai)</option>
            </select>
          </div>

          {/* Message Preview Box */}
          <div className="p-3.5 rounded-xl bg-[#ebe8e2]/60 border border-[#dac1bd]/40 text-[12px] text-[#63534B]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-[#382D26] uppercase text-[10px] tracking-wider">
                Pratinjau Pesan yang Akan Dikirim:
              </span>
              <button
                type="button"
                onClick={handleCopyText}
                className="text-[#944437] hover:underline font-semibold text-[11px] flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Tersalin' : 'Salin Teks'}
              </button>
            </div>
            <p className="whitespace-pre-line text-[#382D26] font-mono text-[11px] bg-white p-2.5 rounded-lg border border-[#dac1bd]/30">
              {generateMessage()}
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-[#3D7A5A] hover:bg-[#326449] text-white font-semibold text-[14px] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Buka Chat WhatsApp Sekarang</span>
          </button>
        </form>
      </div>
    </div>
  );
};
