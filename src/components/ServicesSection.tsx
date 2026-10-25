import React, { useState } from 'react';
import { ACADEMIC_SERVICES, ServiceItem } from '../data/academicData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  showFilters?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  showFilters = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = ACADEMIC_SERVICES.filter((svc) => {
    const matchesCategory = selectedCategory === 'all' || svc.category === selectedCategory;
    const matchesSearch =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="layanan" className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full py-16">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] font-bold uppercase text-[#944437] tracking-widest px-3.5 py-1 rounded-full bg-[#ffdadc]/50 mb-3 border border-[#eeb9bd]/60">
          Layanan Komprehensif
        </span>
        <h2 className="font-headline-xl text-[#382D26]">Solusi Pendampingan Akademik Terpadu</h2>
        <p className="text-[15px] leading-[24px] text-[#63534B] mt-3">
          Dari riset awal hingga finalisasi naskah siap sidang atau terbit jurnal, kami mengawal
          setiap detail metodologi dan kerapian visual karya Anda.
        </p>

        {showFilters && (
          <div className="w-full mt-8 flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:flex-1">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E7D75] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari layanan (misal: Skripsi, PPT, Turnitin, LKPD)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-[#382D26] text-[14px] border border-[#dac1bd]/60 focus:outline-none focus:ring-2 focus:ring-[#944437] shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8E7D75] hover:text-[#382D26]"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-[#ebe8e2] rounded-xl overflow-x-auto w-full sm:w-auto">
              {[
                { id: 'all', label: 'Semua Layanan' },
                { id: 'skripsi', label: 'Skripsi & Jurnal' },
                { id: 'makalah', label: 'Makalah & PPT' },
                { id: 'editing', label: 'Format & Ketik' },
                { id: 'turnitin', label: 'Turnitin & Parafrase' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-[12px] font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-white text-[#944437] shadow-sm'
                      : 'text-[#63534B] hover:text-[#382D26]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectService(service)}
            className="flex flex-col justify-between p-7 rounded-2xl bg-white/85 hover:bg-white shadow-md hover:shadow-xl transition-all duration-200 group border border-[#dac1bd]/40 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ffdadc]/40 text-[#944437] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
              </div>
              <h3 className="text-[18px] font-bold text-[#382D26] mb-2">{service.title}</h3>
              <p className="text-[15px] leading-[24px] text-[#63534B]">{service.description}</p>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-[#f1ede7] mt-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#944437]">
                {service.tag}
              </span>
              <span className="material-symbols-outlined text-[#944437] text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
