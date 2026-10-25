import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EttynShopBanner } from './components/EttynShopBanner';
import { QuickGeneratorBar } from './components/QuickGeneratorBar';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { SpecialSection } from './components/SpecialSection';
import { TermsSection } from './components/TermsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { AiGeneratorModal } from './components/AiGeneratorModal';
import { EttynShopModal } from './components/EttynShopModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { GeneratorType } from './utils/academicGenerators';
import { ServiceItem } from './data/academicData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');

  // Modals state
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [generatorType, setGeneratorType] = useState<GeneratorType>('makalah');

  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [initialWhatsAppService, setInitialWhatsAppService] = useState<string>('');

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleOpenGenerator = (type: GeneratorType) => {
    setGeneratorType(type);
    setIsGeneratorOpen(true);
  };

  const handleOpenWhatsApp = (serviceName?: string) => {
    setInitialWhatsAppService(serviceName || 'Pendampingan Akademik');
    setIsWhatsAppOpen(true);
  };

  const handleOrderShopItem = (productName: string, price: string) => {
    setIsShopOpen(false);
    setInitialWhatsAppService(`Beli Produk Ettyn Shop: ${productName} (${price})`);
    setIsWhatsAppOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fdf9f3] text-[#1c1c18] flex flex-col font-sans selection:bg-[#ffdad4] selection:text-[#3e0502]">
      {/* Primary Fixed Navbar */}
      <Navbar
        activeTab={activeTab}
        onNavigate={(tab) => setActiveTab(tab)}
        onOpenShop={() => setIsShopOpen(true)}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        {/* Breadcrumb if not on beranda */}
        {activeTab !== 'beranda' && (
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-6">
            <div className="flex items-center gap-2 text-[12px] text-[#8E7D75]">
              <button
                onClick={() => setActiveTab('beranda')}
                className="hover:text-[#944437] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">home</span>
                Beranda
              </button>
              <span>/</span>
              <span className="text-[#382D26] font-semibold capitalize">
                {activeTab.replace(/-/g, ' ')}
              </span>
            </div>
          </div>
        )}

        {/* View Routing */}
        {activeTab === 'beranda' && (
          <>
            <HeroSection
              onOpenWhatsApp={handleOpenWhatsApp}
              onExploreServices={() => setActiveTab('layanan')}
            />

            <EttynShopBanner onOpenShop={() => setIsShopOpen(true)} />

            <QuickGeneratorBar onOpenGenerator={handleOpenGenerator} />

            <ServicesSection onSelectService={(svc) => setSelectedService(svc)} />

            <PricingSection onOpenWhatsApp={handleOpenWhatsApp} />

            <SpecialSection onOpenWhatsApp={handleOpenWhatsApp} />

            <TermsSection />

            <GallerySection />

            <TestimonialsSection />

            {/* Final CTA Bar */}
            <section className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full pt-6 pb-20">
              <div className="relative rounded-3xl bg-[#382D26] text-white p-10 md:p-16 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
                {/* Decorative Backdrop Glow */}
                <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#944437]/30 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-xl space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffdad4]">
                    Tenggat Waktu Semakin Dekat?
                  </span>
                  <h2 className="font-display-hero text-white text-[28px] sm:text-[36px] md:text-[40px] leading-tight">
                    Bebaskan Beban Skripsi Anda Hari Ini.
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[#ebe8e2]/90">
                    Konsultasikan kesulitan naskah Anda tanpa ragu. Dapatkan estimasi waktu dan
                    solusi rapi langsung bersama Ettyn Muda.
                  </p>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <button
                    onClick={() => handleOpenWhatsApp('Konsultasi Cepat Penyelesaian Skripsi')}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#944437] hover:bg-[#b25c4e] text-white font-bold text-[16px] shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                    <span>Hubungi via WhatsApp</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'layanan' && (
          <div className="pt-4">
            <ServicesSection
              onSelectService={(svc) => setSelectedService(svc)}
              showFilters={true}
            />
            <SpecialSection onOpenWhatsApp={handleOpenWhatsApp} />
          </div>
        )}

        {activeTab === 'tarif-dan-paket' && (
          <div className="pt-4">
            <PricingSection onOpenWhatsApp={handleOpenWhatsApp} />
            <TermsSection />
          </div>
        )}

        {activeTab === 'spesial' && (
          <div className="pt-4">
            <SpecialSection onOpenWhatsApp={handleOpenWhatsApp} />
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-16">
              <div className="p-8 rounded-3xl bg-white border border-[#dac1bd]/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#944437] tracking-wider px-3 py-1 rounded-full bg-[#ffdadc]/50">
                    Konsultasi Privat Fast-Track
                  </span>
                  <h3 className="text-[22px] font-bold text-[#382D26] mt-2">
                    Bimbingan Khusus 1-on-1 dengan Ettyn Muda
                  </h3>
                  <p className="text-[14px] text-[#63534B] mt-1">
                    Bahas langsung kelemahan Bab 1 s.d Bab 5 Anda, uji statistik skripsi, atau
                    simulasi tanya jawab sidang tertutup bersama praktisi akademik berpengalaman.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenWhatsApp('Booking Sesi Bimbingan Khusus 1-on-1')}
                  className="px-6 py-3.5 rounded-xl bg-[#944437] hover:bg-[#b25c4e] text-white text-[14px] font-semibold whitespace-nowrap shadow-md transition-all cursor-pointer"
                >
                  Booking Jadwal Sesi
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'galeri' && (
          <div className="pt-4">
            <GallerySection />
          </div>
        )}

        {activeTab === 'testimoni' && (
          <div className="pt-4">
            <TestimonialsSection />
          </div>
        )}
      </main>

      {/* Persistent Floating WhatsApp Quick Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={() => handleOpenWhatsApp()}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#3D7A5A] hover:bg-[#326449] text-white font-semibold text-[13px] shadow-[0_4px_20px_rgba(61,122,90,0.35)] hover:-translate-y-1 transition-all cursor-pointer"
          title="Tanya Sekarang via WhatsApp"
        >
          <span className="material-symbols-outlined text-[22px]">chat</span>
          <span className="hidden sm:inline">Tanya Kak Ettyn</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ffdad4]"></span>
          </span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Modals */}
      <AiGeneratorModal
        isOpen={isGeneratorOpen}
        initialType={generatorType}
        onClose={() => setIsGeneratorOpen(false)}
        onSendToWhatsApp={(msg) => {
          setIsGeneratorOpen(false);
          handleOpenWhatsApp(msg);
        }}
      />

      <EttynShopModal
        isOpen={isShopOpen}
        onClose={() => setIsShopOpen(false)}
        onOrderViaWhatsApp={handleOrderShopItem}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        initialService={initialWhatsAppService}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookWhatsApp={(title) => handleOpenWhatsApp(title)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
