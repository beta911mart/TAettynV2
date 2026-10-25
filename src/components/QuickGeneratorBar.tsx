import React from 'react';
import { GeneratorType } from '../utils/academicGenerators';

interface QuickGeneratorBarProps {
  onOpenGenerator: (type: GeneratorType) => void;
}

export const QuickGeneratorBar: React.FC<QuickGeneratorBarProps> = ({ onOpenGenerator }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full pt-12 pb-6">
      <div className="rounded-2xl bg-[#f7f3ed] p-6 md:p-8 shadow-sm border border-[#ebe8e2] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#944437] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[24px]">smart_toy</span>
          </div>
          <div>
            <h3 className="text-[18px] font-bold text-[#382D26]">Generator Otomatis ✨</h3>
            <p className="text-[13px] text-[#8E7D75]">
              Akselerasi kerangka dokumen akademik awal dengan asisten pintar kami
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
          <button
            onClick={() => onOpenGenerator('makalah')}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#fdf9f3] hover:bg-white text-[#382D26] shadow-sm hover:shadow transition-all text-left cursor-pointer border border-[#ebe8e2] hover:border-[#944437]/30 group"
            type="button"
          >
            <span className="material-symbols-outlined text-[#944437] text-[18px] group-hover:scale-110 transition-transform">
              description
            </span>
            <span className="text-[13px] font-semibold">Makalah AI</span>
          </button>

          <button
            onClick={() => onOpenGenerator('bahan-ajar')}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#fdf9f3] hover:bg-white text-[#382D26] shadow-sm hover:shadow transition-all text-left cursor-pointer border border-[#ebe8e2] hover:border-[#3D7A5A]/30 group"
            type="button"
          >
            <span className="material-symbols-outlined text-[#3D7A5A] text-[18px] group-hover:scale-110 transition-transform">
              school
            </span>
            <span className="text-[13px] font-semibold">Bahan Ajar</span>
          </button>

          <button
            onClick={() => onOpenGenerator('ptk')}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#fdf9f3] hover:bg-white text-[#382D26] shadow-sm hover:shadow transition-all text-left cursor-pointer border border-[#ebe8e2] hover:border-[#4A6E82]/30 group"
            type="button"
          >
            <span className="material-symbols-outlined text-[#4A6E82] text-[18px] group-hover:scale-110 transition-transform">
              article
            </span>
            <span className="text-[13px] font-semibold">Artikel PTK</span>
          </button>

          <button
            onClick={() => onOpenGenerator('skenario')}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#fdf9f3] hover:bg-white text-[#382D26] shadow-sm hover:shadow transition-all text-left cursor-pointer border border-[#ebe8e2] hover:border-[#814f3b]/30 group"
            type="button"
          >
            <span className="material-symbols-outlined text-[#814f3b] text-[18px] group-hover:scale-110 transition-transform">
              alt_route
            </span>
            <span className="text-[13px] font-semibold">Skenario Dif.</span>
          </button>
        </div>
      </div>
    </section>
  );
};
