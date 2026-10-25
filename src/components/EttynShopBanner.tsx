import React from 'react';

interface EttynShopBannerProps {
  onOpenShop: () => void;
}

export const EttynShopBanner: React.FC<EttynShopBannerProps> = ({ onOpenShop }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full py-4">
      <div className="relative rounded-2xl bg-gradient-to-r from-[#ffdbcd] via-[#ffdadc]/70 to-[#ebe8e2] p-8 md:p-10 shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-[#dac1bd]/40">
        {/* Decorative Backdrop Element */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#944437]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col items-start gap-2.5 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#C85A54] text-white">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">Baru! Toko Digital</span>
          </div>

          <h2 className="font-headline-xl text-[#382D26]">
            Ettyn Shop — Template &amp; Tools Akademik Siap Pakai
          </h2>

          <p className="text-[15px] leading-[24px] text-[#63534B]">
            Dapatkan template skripsi otomatis (Word &amp; LaTeX), spreadsheet olah data instan, format
            jurnal siap submit Sinta/Scopus, dan panduan sitasi terpadu hanya dalam hitungan menit.
          </p>
        </div>

        <div className="flex-shrink-0 relative z-10">
          <button
            onClick={onOpenShop}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#382D26] hover:bg-black text-white font-semibold text-[14px] shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">storefront</span>
            <span>Kunjungi Toko Ettyn Shop</span>
          </button>
        </div>
      </div>
    </section>
  );
};
