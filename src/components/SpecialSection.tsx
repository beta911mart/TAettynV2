import React from 'react';

interface SpecialSectionProps {
  onOpenWhatsApp: (serviceName: string) => void;
}

export const SpecialSection: React.FC<SpecialSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="spesial" className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full py-12">
      <div className="mb-10">
        <span className="text-[11px] font-bold uppercase text-[#944437] tracking-widest px-3.5 py-1 rounded-full bg-[#ffdadc]/50 border border-[#eeb9bd]/60">
          Inovasi Khusus
        </span>
        <h2 className="font-headline-xl text-[#382D26] mt-2">Layanan Spesial Ettyn</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Special 1: Les Online Belajar Microsoft Dasar */}
        <div className="relative rounded-2xl bg-gradient-to-br from-white/90 via-[#f7f3ed] to-[#ffdadc]/20 p-8 shadow-md border border-[#dac1bd]/40 flex flex-col justify-between overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#4A6E82]/10 text-[#4A6E82] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">laptop_mac</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#4A6E82] text-white">
                Kelas Privat 1-on-1
              </span>
            </div>

            <h3 className="text-[24px] font-bold text-[#382D26]">
              Les Online Belajar Microsoft Dasar
            </h3>

            <p className="text-[15px] leading-[24px] text-[#63534B]">
              Kuasai trik praktis Microsoft Word, Excel, dan PowerPoint esensial untuk mempermudah tugas
              kuliah harian Anda. Belajar santai, ramah, dan disesuaikan dengan tingkat pemahaman pemula
              hingga mahir.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="p-3 rounded-lg bg-white/80 border border-[#ebe8e2] text-center shadow-xs">
                <span className="text-[13px] text-[#382D26] font-bold block">MS Word</span>
                <span className="text-[11px] text-[#8E7D75]">Format Skripsi</span>
              </div>
              <div className="p-3 rounded-lg bg-white/80 border border-[#ebe8e2] text-center shadow-xs">
                <span className="text-[13px] text-[#382D26] font-bold block">MS Excel</span>
                <span className="text-[11px] text-[#8E7D75]">Rumus &amp; Grafik</span>
              </div>
              <div className="p-3 rounded-lg bg-white/80 border border-[#ebe8e2] text-center shadow-xs">
                <span className="text-[13px] text-[#382D26] font-bold block">MS PPT</span>
                <span className="text-[11px] text-[#8E7D75]">Slide Presentasi</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-auto">
            <button
              onClick={() => onOpenWhatsApp('Halo Kak Ettyn, saya tertarik mendaftar Les Online Belajar Microsoft Dasar')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#382D26] hover:bg-black text-white font-semibold text-[14px] transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Daftar Sesi Privat Santai</span>
            </button>
          </div>
        </div>

        {/* Special 2: Jasa Pembuatan Website Kilat */}
        <div className="relative rounded-2xl bg-gradient-to-br from-white/90 via-[#f7f3ed] to-[#ffdad4]/30 p-8 shadow-md border border-[#dac1bd]/40 flex flex-col justify-between overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#944437]/10 text-[#944437] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C85A54] text-white">
                Promo Terbatas
              </span>
            </div>

            <div>
              <h3 className="text-[24px] font-bold text-[#382D26]">Jasa Pembuatan Website Kilat</h3>
              <span className="text-[18px] font-bold text-[#944437] block mt-1">
                Mulai Rp300.000 (1 Hari Jadi)
              </span>
            </div>

            <p className="text-[15px] leading-[24px] text-[#63534B]">
              Hadirkan profil usaha, website organisasi mahasiswa, portfolio akademik profesional,
              atau landing page kegiatan kampus Anda hanya dalam 24 jam dengan tampilan elegan &amp;
              responsif.
            </p>

            <ul className="space-y-2 text-[13px] text-[#63534B] pt-1">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3D7A5A] text-[16px]">check</span>
                <span>Desain Mobile Friendly &amp; Clean Modern</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3D7A5A] text-[16px]">check</span>
                <span>Gratis Domain .biz.id / .my.id &amp; Hosting Siap Pakai</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3D7A5A] text-[16px]">check</span>
                <span>Tombol WhatsApp langsung ke chat Anda</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 mt-auto">
            <button
              onClick={() => onOpenWhatsApp('Halo Kak Ettyn, saya tertarik pembuatan Website Kilat 1 Hari Jadi')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#944437] hover:bg-[#b25c4e] text-white font-semibold text-[14px] shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              <span>Konsultasi Web 1 Hari Online</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
