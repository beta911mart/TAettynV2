import React from 'react';
import { TERMS_AND_CONDITIONS } from '../data/academicData';

export const TermsSection: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full py-16">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] font-bold uppercase text-[#944437] tracking-widest px-3.5 py-1 rounded-full bg-[#ffdadc]/50 mb-3 border border-[#eeb9bd]/60">
          Transparansi Layanan
        </span>
        <h2 className="font-headline-xl text-[#382D26]">Syarat, Ketentuan &amp; Etika Akademik</h2>
        <p className="text-[15px] leading-[24px] text-[#63534B] mt-3">
          Mekanisme kerja terstruktur untuk menjaga kenyamanan, keamanan data, dan integritas proses
          pembelajaran bersama.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TERMS_AND_CONDITIONS.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-white/85 hover:bg-white shadow-sm hover:shadow-md transition-all border border-[#dac1bd]/40"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#ffdadc]/60 flex items-center justify-center font-bold text-[#944437] text-[15px] border border-[#eeb9bd]/60">
                {item.id}
              </div>
              <h3 className="text-[17px] font-bold text-[#382D26]">{item.title}</h3>
            </div>
            <p className="text-[13px] leading-[22px] text-[#63534B]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
