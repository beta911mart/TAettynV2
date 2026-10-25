import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenWhatsApp
}) => {
  return (
    <footer className="w-full bg-[#f7f3ed] pt-16 pb-12 mt-16 shadow-[0_-1px_12px_rgba(56,45,38,0.03)] border-t border-[#dac1bd]/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Top 3 Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#dac1bd]/30">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-md shadow-xs border border-[#dac1bd]/30">
            <div className="w-11 h-11 rounded-full bg-[#ffdadc]/40 flex items-center justify-center text-[#944437] flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">lock</span>
            </div>
            <div>
              <h4 className="text-[17px] font-bold text-[#382D26]">100% Rahasia Terjamin</h4>
              <p className="text-[13px] text-[#8E7D75] mt-0.5">
                Identitas, data riset, dan naskah dilindungi protokol privasi ketat.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-md shadow-xs border border-[#dac1bd]/30">
            <div className="w-11 h-11 rounded-full bg-[#ffdadc]/40 flex items-center justify-center text-[#944437] flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">schedule</span>
            </div>
            <div>
              <h4 className="text-[17px] font-bold text-[#382D26]">Tepat Waktu</h4>
              <p className="text-[13px] text-[#8E7D75] mt-0.5">
                Jadwal pengerjaan terukur dengan garansi penyerahan sebelum tenggat.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-md shadow-xs border border-[#dac1bd]/30">
            <div className="w-11 h-11 rounded-full bg-[#ffdadc]/40 flex items-center justify-center text-[#944437] flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">verified</span>
            </div>
            <div>
              <h4 className="text-[17px] font-bold text-[#382D26]">Bebas Plagiasi</h4>
              <p className="text-[13px] text-[#8E7D75] mt-0.5">
                Lolos uji Turnitin dengan laporan similarity komprehensif.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Columns Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Teman Akademik Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W8ie-3J_fg4obSQVh4zjWQw-rR9Wk9TFPoV2n0yTeUROMEXvwfQu6mGgTXLj3TPyFtVP0vvaZ4OGnkVVyrKZaApFoIQ5DIURnnxEvKCpf9GJI0p7SBqLigAV-iIWisYMelc9ruYMfwPkoJITRY1sGjO9TGUlpSdJquawRlfTpVSftrAS8v3JZpFRJyLPPM5CMP5jC_9jPQx5nxGbIhPZekeFU-HffrpfnLw_J25iZRYWghxrZiyuiIr8Ee"
              />
              <span className="text-[20px] font-bold text-[#382D26]">Teman Akademik Ettyn</span>
            </div>

            <p className="text-[14px] leading-relaxed text-[#63534B] max-w-md">
              Layanan pendampingan akademik editorial dan riset terpercaya untuk sarjana,
              pascasarjana, dan peneliti independen. Mengedepankan ketelitian metodologis dan
              integritas intelektual.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#382D26] hover:bg-[#944437] hover:text-white transition-all shadow-[0_2px_8px_rgba(56,45,38,0.06)]"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#382D26] hover:bg-[#944437] hover:text-white transition-all shadow-[0_2px_8px_rgba(56,45,38,0.06)]"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <button
                onClick={onOpenWhatsApp}
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#382D26] hover:bg-[#944437] hover:text-white transition-all shadow-[0_2px_8px_rgba(56,45,38,0.06)] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase text-[#8E7D75] tracking-widest mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <button
                  onClick={() => onNavigate('beranda')}
                  className="text-[#554340] hover:text-[#944437] transition-colors cursor-pointer text-left"
                >
                  Beranda Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('layanan')}
                  className="text-[#554340] hover:text-[#944437] transition-colors cursor-pointer text-left"
                >
                  Layanan Bimbingan &amp; Riset
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tarif-dan-paket')}
                  className="text-[#554340] hover:text-[#944437] transition-colors cursor-pointer text-left"
                >
                  Tarif &amp; Skema Paket
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('spesial')}
                  className="text-[#554340] hover:text-[#944437] transition-colors cursor-pointer text-left"
                >
                  Program Spesial Fast-Track
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeri')}
                  className="text-[#554340] hover:text-[#944437] transition-colors cursor-pointer text-left"
                >
                  Galeri Portofolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimoni')}
                  className="text-[#554340] hover:text-[#944437] transition-colors cursor-pointer text-left"
                >
                  Testimoni Klien
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase text-[#8E7D75] tracking-widest mb-4">
              Kontak &amp; Dukungan
            </h4>
            <ul className="space-y-3 text-[13px] text-[#63534B]">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#944437] flex-shrink-0 mt-0.5">
                  mail
                </span>
                <span>admin@temanakademik.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#944437] flex-shrink-0 mt-0.5">
                  call
                </span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#944437] flex-shrink-0 mt-0.5">
                  schedule
                </span>
                <span>Senin - Sabtu: 08.00 - 21.00 WIB</span>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenPrivacy}
                  className="text-[#944437] hover:underline text-[12px] font-semibold text-left cursor-pointer"
                >
                  Kebijakan Privasi &amp; Etika Akademik
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 mt-4 border-t border-[#dac1bd]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#8E7D75]">
          <p>© 2025 Teman Akademik Ettyn. Hak Cipta Dilindungi Undang-Undang.</p>
          <p>Designed for High Academic Distinction.</p>
        </div>
      </div>
    </footer>
  );
};
