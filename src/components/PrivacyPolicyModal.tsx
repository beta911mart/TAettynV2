import React from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#fdf9f3] rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#dac1bd]/50 overflow-hidden">
        <div className="p-6 border-b border-[#dac1bd]/40 flex items-center justify-between bg-white/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#944437] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[22px]">policy</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#382D26]">Kebijakan Privasi &amp; Etika Akademik</h3>
              <p className="text-[12px] text-[#8E7D75]">Teman Akademik Ettyn Academic Partner</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ebe8e2] hover:bg-[#944437] hover:text-white flex items-center justify-center text-[#382D26] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-[13px] leading-relaxed text-[#63534B] flex-1">
          <div className="p-4 rounded-xl bg-white border border-[#dac1bd]/40">
            <h4 className="font-bold text-[#382D26] text-[14px] mb-1">1. Prinsip Integritas &amp; Pendampingan Edukatif</h4>
            <p>
              Teman Akademik Ettyn berkomitmen mendukung proses pembelajaran mandiri mahasiswa. Layanan kami berfokus pada bimbingan metodologi, penataan format baku naskah (heading, margin, sitasi Mendeley), konsultasi struktur argumentasi, dan proofreading tata bahasa baku Bahasa Indonesia &amp; Inggris.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#dac1bd]/40">
            <h4 className="font-bold text-[#382D26] text-[14px] mb-1">2. Protokol Turnitin Resmi No-Repository</h4>
            <p>
              Kami hanya menggunakan akun resmi Turnitin Instructor dengan pengaturan ketat <em>No Repository</em>. Artinya, berkas naskah yang diperiksa tidak akan pernah disimpan di server pusat Turnitin, sehingga tidak akan memicu kenaikan similarity index saat mahasiswa menyerahkan dokumen ke program studi kampus.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#dac1bd]/40">
            <h4 className="font-bold text-[#382D26] text-[14px] mb-1">3. Kerahasiaan Data &amp; Hak Cipta Klien 100%</h4>
            <p>
              Semua dokumen, topik penelitian, data kuisioner, serta identitas pribadi (Nama, NIM, Fakultas, Universitas) klien dijamin kerahasiaannya. Berkas tidak akan pernah diperjualbelikan, dijadikan bahan pameran tanpa izin, atau disebarluaskan ke pihak mana pun.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#dac1bd]/40">
            <h4 className="font-bold text-[#382D26] text-[14px] mb-1">4. Garansi Kualitas &amp; Revisi</h4>
            <p>
              Setiap pemesanan paket dilengkapi masa garansi revisi minor gratis selama 7 hari kalender. Kami senantiasa siap melayani penyesuaian catatan pembimbing sesuai ruang lingkup kesepakatan awal.
            </p>
          </div>
        </div>

        <div className="p-4 bg-white/70 border-t border-[#dac1bd]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#382D26] hover:bg-black text-white text-[13px] font-semibold transition-colors cursor-pointer"
          >
            Saya Memahami &amp; Setuju
          </button>
        </div>
      </div>
    </div>
  );
};
