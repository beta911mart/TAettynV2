import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/academicData';

export const GallerySection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeri" className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-[11px] font-bold uppercase text-[#944437] tracking-widest px-3.5 py-1 rounded-full bg-[#ffdadc]/50 border border-[#eeb9bd]/60">
            Bukti Hasil Nyata
          </span>
          <h2 className="font-headline-xl text-[#382D26] mt-2">
            Galeri Standar Kerapian Dokumen
          </h2>
        </div>
        <p className="text-[13px] leading-[20px] text-[#8E7D75] max-w-sm mt-3 md:mt-0">
          Cuplikan layout naskah, slide persidangan, dan sertifikasi similarity score hasil kurasi
          tim editorial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="flex flex-col rounded-2xl bg-white/85 hover:bg-white shadow-md hover:shadow-xl overflow-hidden group border border-[#dac1bd]/40 transition-all cursor-pointer"
          >
            <div className="relative h-60 bg-[#ebe8e2] overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span
                className={`absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 text-[11px] font-bold uppercase backdrop-blur-md shadow-sm border border-white/80 ${item.badgeColor}`}
              >
                {item.badge}
              </span>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-white/90 text-[#382D26] text-[12px] font-semibold flex items-center gap-1 shadow-lg">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  Lihat Rincian
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-[17px] font-bold text-[#382D26] group-hover:text-[#944437] transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[22px] text-[#63534B] mt-1.5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Preview Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#fdf9f3] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#dac1bd]/50 p-6 md:p-8 relative">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#ebe8e2] hover:bg-[#944437] hover:text-white flex items-center justify-center text-[#382D26] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-white border border-[#dac1bd]/60 ${activeModalItem.badgeColor}`}
              >
                {activeModalItem.badge}
              </span>
              <span className="text-[12px] text-[#8E7D75]">Portofolio Terverifikasi</span>
            </div>

            <h3 className="text-[22px] font-bold text-[#382D26] mb-3">{activeModalItem.title}</h3>

            <div className="rounded-2xl overflow-hidden bg-[#ebe8e2] mb-5 shadow-sm max-h-[360px]">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[14px] leading-[24px] text-[#63534B] mb-6">
              {activeModalItem.details || activeModalItem.description}
            </p>

            {activeModalItem.beforeAfter && (
              <div className="rounded-xl bg-white p-4 border border-[#dac1bd]/40 space-y-3 mb-6">
                <h4 className="text-[13px] font-bold text-[#382D26] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#944437] text-[18px]">
                    compare_arrows
                  </span>
                  Studi Kasus Dokumen
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px]">
                  <div className="p-3 rounded-lg bg-[#f7f3ed]">
                    <span className="font-bold text-[#ba1a1a] block mb-1">Kondisi Awal (Sebelum):</span>
                    <p className="text-[#63534B]">{activeModalItem.beforeAfter.before}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#3D7A5A]/10">
                    <span className="font-bold text-[#3D7A5A] block mb-1">Hasil Akhir (Sesudah):</span>
                    <p className="text-[#63534B]">{activeModalItem.beforeAfter.after}</p>
                  </div>
                </div>
                <p className="text-[11px] text-[#8E7D75] italic pt-1">
                  *Catatan: {activeModalItem.beforeAfter.note}
                </p>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2.5 rounded-xl bg-[#ebe8e2] text-[#382D26] text-[13px] font-semibold hover:bg-[#dac1bd] transition-colors"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
