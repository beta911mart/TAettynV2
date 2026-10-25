import React, { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenShop: () => void;
  onOpenWhatsApp: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenShop,
  onOpenWhatsApp
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'tarif-dan-paket', label: 'Tarif & Paket' },
    { id: 'spesial', label: 'Spesial' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'testimoni', label: 'Testimoni' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf9f3]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(56,45,38,0.06)] border-b border-[#dac1bd]/30 transition-all">
      <div className="h-20 max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <button
          onClick={() => handleLinkClick('beranda')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <img
            alt="Teman Akademik Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1W8ie-3J_fg4obSQVh4zjWQw-rR9Wk9TFPoV2n0yTeUROMEXvwfQu6mGgTXLj3TPyFtVP0vvaZ4OGnkVVyrKZaApFoIQ5DIURnnxEvKCpf9GJI0p7SBqLigAV-iIWisYMelc9ruYMfwPkoJITRY1sGjO9TGUlpSdJquawRlfTpVSftrAS8v3JZpFRJyLPPM5CMP5jC_9jPQx5nxGbIhPZekeFU-HffrpfnLw_J25iZRYWghxrZiyuiIr8Ee"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-[18px] text-[#382D26] tracking-tight group-hover:text-[#944437] transition-colors">
              Teman Akademik
            </span>
            <span className="text-[11px] font-bold uppercase text-[#944437] tracking-widest">
              Ettyn Academic Partner
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[14px] font-semibold transition-colors cursor-pointer py-1 ${
                  isActive
                    ? 'text-[#944437] border-b-2 border-[#944437]'
                    : 'text-[#554340] hover:text-[#944437]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Ettyn Shop Button */}
          <button
            onClick={onOpenShop}
            className="relative inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#ffdadc]/60 hover:bg-[#ffdadc] text-[#301216] font-semibold text-[13px] sm:text-[14px] transition-all shadow-[0_2px_8px_rgba(124,83,87,0.12)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#C85A54] text-[18px]">
              auto_awesome
            </span>
            <span className="hidden sm:inline">Ettyn Shop</span>
            <span className="sm:hidden">Shop</span>
            <span className="ml-0.5 px-1.5 py-0.5 rounded-full bg-[#C85A54] text-white text-[10px] uppercase font-bold tracking-wider">
              New
            </span>
          </button>

          {/* Consultation WA Button */}
          <button
            onClick={() => onOpenWhatsApp()}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#944437] hover:bg-[#b25c4e] text-white font-semibold text-[13px] sm:text-[14px] shadow-[0_4px_12px_rgba(148,68,55,0.22)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden md:inline">Konsultasi WhatsApp</span>
            <span className="md:hidden">WA Chat</span>
          </button>

          {/* Ettyn Profile Thumbnail */}
          <button
            onClick={() => onOpenWhatsApp('Konsultasi Langsung dengan Kak Ettyn')}
            title="Ettyn Muda - Konsultan Utama"
            className="hidden sm:block relative group focus:outline-none"
          >
            <img
              alt="Profile Ettyn Muda"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#ffdad4] group-hover:ring-[#944437] transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL8-Rz8e5jTCWYAjQVy-zUqQ7ETcI76hWtx9wvf7wrHHZbKZNMw-LUm0wpHrKoML30HrQg8y9fDX_P11NzdK00nIpK4txvkHYg-Wtend6CxS5VRCHYv4qy62SxCctJQxhC140fIDqsRokUNk05Xdzm0bwJM53NFjnJCXRjqmMKEB1YPdaCEkc_IFK8Ck42hJ1I2Nrg-JDYnOSl5qXCXnRL-DLVjQbB8_I3gjDm5R7FyBQXwy8sXvYxrA"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#fdf9f3]"></span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#f1ede7] text-[#382D26] hover:bg-[#ebe8e2] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fdf9f3] border-b border-[#dac1bd]/40 px-6 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#ffdad4]/60 text-[#944437] font-semibold'
                    : 'text-[#554340] hover:bg-[#f1ede7]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#dac1bd]/30 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShop();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#ffdadc]/40 text-[#301216] font-semibold text-[14px]"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C85A54] text-[18px]">
                  auto_awesome
                </span>
                Ettyn Shop (Template Skripsi & Excel)
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#C85A54] text-white text-[10px] uppercase font-bold">
                New
              </span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#944437] text-white font-semibold text-[14px]"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Hubungi via WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
