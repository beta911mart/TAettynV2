import React from 'react';

interface HeroSectionProps {
  onOpenWhatsApp: (message?: string) => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWhatsApp,
  onExploreServices
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[780px] h-[480px] bg-[rgba(200,109,94,0.18)] rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-8 pb-16 md:pt-14 md:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Trust Signals */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdadc]/50 text-[#301216] border border-[#eeb9bd]/60">
              <span className="material-symbols-outlined text-[#944437] text-[18px]">
                verified
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#382D26]">
                Partner Akademik Terpercaya #1
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-display-hero text-[#382D26] leading-tight tracking-tight">
              Solusi Tugas &amp; Karya Ilmiah{' '}
              <span className="italic text-[#944437] font-normal">Terpercaya</span>{' '}
              Anda.
            </h1>

            {/* Subtitle */}
            <p className="text-[17px] sm:text-[18px] leading-[28px] text-[#63534B] max-w-xl">
              Bimbingan dan penyelesaian tugas akademik cepat, rapi, dan terpercaya bersama{' '}
              <span className="font-semibold text-[#382D26]">Ettyn Muda</span>. Pendekatan riset
              metodologis, layout presisi, serta integritas ilmiah tanpa kompromi.
            </p>

            {/* Social Proof Micro-Bar */}
            <div className="flex flex-wrap items-center gap-3 py-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ebe8e2] shadow-sm">
                <div className="flex text-[#D97706]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-[13px] text-[#382D26] font-bold">4.9/5</span>
                <span className="text-[12px] text-[#8E7D75]">(500+ Mahasiswa)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f1ede7] text-[#3D7A5A] text-[13px] font-semibold">
                <span className="material-symbols-outlined text-[18px]">security</span>
                <span>100% Bebas Plagiasi</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f1ede7] text-[#4A6E82] text-[13px] font-semibold">
                <span className="material-symbols-outlined text-[18px]">
                  published_with_changes
                </span>
                <span>Garansi Revisi Rapi</span>
              </div>
            </div>

            {/* CTAs & Channels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onOpenWhatsApp('Halo Kak Ettyn, saya ingin konsultasi terkait bimbingan tugas/skripsi')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#944437] hover:bg-[#b25c4e] text-white font-semibold text-[14px] shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Konsultasi Sekarang via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <span className="text-[11px] font-bold uppercase text-[#8E7D75] mr-1 tracking-wider">
                  Ikuti:
                </span>
                <a
                  aria-label="Instagram Ettyn"
                  className="w-9 h-9 rounded-full bg-[#ebe8e2] flex items-center justify-center text-[#382D26] hover:bg-[#944437] hover:text-white transition-all shadow-sm"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </a>
                <a
                  aria-label="Facebook Ettyn"
                  className="w-9 h-9 rounded-full bg-[#ebe8e2] flex items-center justify-center text-[#382D26] hover:bg-[#944437] hover:text-white transition-all shadow-sm"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">public</span>
                </a>
                <button
                  onClick={() => onOpenWhatsApp()}
                  aria-label="WhatsApp Channel"
                  className="w-9 h-9 rounded-full bg-[#ebe8e2] flex items-center justify-center text-[#382D26] hover:bg-[#944437] hover:text-white transition-all shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">forum</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Image with Glassmorphism Float Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Soft Aura */}
            <div className="absolute inset-0 bg-[#944437]/15 rounded-full blur-3xl transform scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden bg-white/85 p-3 shadow-xl backdrop-blur-md border border-white/60">
              <img
                alt="Ettyn Muda - Konsultan Akademik Profesional"
                className="w-full h-full object-cover rounded-2xl shadow-inner"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL8-Rz8e5jTCWYAjQVy-zUqQ7ETcI76hWtx9wvf7wrHHZbKZNMw-LUm0wpHrKoML30HrQg8y9fDX_P11NzdK00nIpK4txvkHYg-Wtend6CxS5VRCHYv4qy62SxCctJQxhC140fIDqsRokUNk05Xdzm0bwJM53NFjnJCXRjqmMKEB1YPdaCEkc_IFK8Ck42hJ1I2Nrg-JDYnOSl5qXCXnRL-DLVjQbB8_I3gjDm5R7FyBQXwy8sXvYxrA"
              />

              {/* Floating Pill 1: Greeting */}
              <div className="absolute top-6 left-6 px-4 py-2.5 rounded-xl bg-[#fdf9f3]/95 backdrop-blur-md shadow-lg flex items-center gap-2.5 border border-white/80 animate-in fade-in duration-500">
                <span className="text-xl">👋</span>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase text-[#944437] tracking-wider">
                    Konsultan Utama
                  </span>
                  <span className="text-[13px] text-[#382D26] font-semibold">
                    Hai, Saya Ettyn!
                  </span>
                </div>
              </div>

              {/* Floating Pill 2: Milestone */}
              <div className="absolute bottom-6 left-6 px-4 py-2.5 rounded-xl bg-[#fdf9f3]/95 backdrop-blur-md shadow-lg flex items-center gap-3 border border-white/80">
                <div className="w-8 h-8 rounded-full bg-[#3D7A5A]/20 flex items-center justify-center text-[#3D7A5A]">
                  <span className="material-symbols-outlined text-[18px]">task_alt</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-[18px] text-[#382D26] leading-none">
                    500+
                  </span>
                  <span className="text-[11px] text-[#8E7D75] mt-0.5">Tugas Tuntas</span>
                </div>
              </div>

              {/* Floating Pill 3: Fast Track */}
              <div className="absolute -bottom-1 -right-1 px-3.5 py-2 rounded-xl bg-[#944437] text-white shadow-lg flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                <span className="text-[12px] font-semibold tracking-wide">
                  Kecepatan Kilat ⚡
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
