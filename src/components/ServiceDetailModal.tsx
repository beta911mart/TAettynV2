import React from 'react';
import { ServiceItem } from '../data/academicData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookWhatsApp: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookWhatsApp
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#fdf9f3] rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#dac1bd]/50 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#dac1bd]/40 flex items-center justify-between bg-white/70">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#ffdadc] text-[#944437] flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#944437] text-white">
                {service.tag}
              </span>
              <h3 className="text-[18px] font-bold text-[#382D26] mt-1">{service.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ebe8e2] hover:bg-[#944437] hover:text-white flex items-center justify-center text-[#382D26] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <h4 className="text-[12px] font-bold text-[#8E7D75] uppercase tracking-wider mb-2">
              Deskripsi Lengkap Layanan
            </h4>
            <p className="text-[14px] leading-relaxed text-[#63534B]">
              {service.detailedDescription || service.description}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-[#dac1bd]/40 space-y-2.5">
            <h4 className="text-[12px] font-bold text-[#382D26] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#3D7A5A] text-[18px]">
                verified
              </span>
              Keunggulan &amp; Cakupan Pengerjaan
            </h4>
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-[13px] text-[#63534B]">
                <span className="material-symbols-outlined text-[16px] text-[#3D7A5A] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 rounded-xl bg-[#f7f3ed] border border-[#ebe8e2]">
              <span className="text-[11px] text-[#8E7D75] uppercase font-bold block">
                Estimasi Waktu
              </span>
              <span className="text-[14px] font-bold text-[#382D26] mt-0.5 block">
                {service.turnaroundTime}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#f7f3ed] border border-[#ebe8e2]">
              <span className="text-[11px] text-[#8E7D75] uppercase font-bold block">
                Tarif Investasi
              </span>
              <span className="text-[14px] font-bold text-[#944437] mt-0.5 block">
                {service.priceEstimate}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#ffdad4]/30 border border-[#ffb4a7] text-[12px] text-[#382D26] flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#944437] text-[20px]">security</span>
            <span>
              Garansi revisi gratis selama 7 hari kalender. Kerahasiaan data naskah terlindungi 100%.
            </span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white/70 border-t border-[#dac1bd]/40 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#ebe8e2] text-[#382D26] text-[13px] font-semibold hover:bg-[#dac1bd] transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onBookWhatsApp(service.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#944437] hover:bg-[#b25c4e] text-white text-[13px] font-semibold shadow-md transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Konsultasikan via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
