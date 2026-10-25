import React, { useState } from 'react';
import { PRICING_BUNDLES, RATES_TABLE } from '../data/academicData';

interface PricingSectionProps {
  onOpenWhatsApp: (serviceOrBundle?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenWhatsApp }) => {
  // Interactive Calculator State
  const [calcLevel, setCalcLevel] = useState<'siswa' | 's1' | 's2'>('s1');
  const [calcService, setCalcService] = useState<string>('skripsi');
  const [calcPages, setCalcPages] = useState<number>(20);
  const [calcUrgency, setCalcUrgency] = useState<'normal' | 'express'>('normal');

  const calculateEstimate = () => {
    let baseRate = 0;
    if (calcService === 'skripsi') {
      // Skripsi formatting
      baseRate = calcLevel === 's2' ? 7000 : 5000;
    } else if (calcService === 'makalah') {
      baseRate = calcLevel === 'siswa' ? 4000 : calcLevel === 's2' ? 8000 : 6000;
    } else if (calcService === 'parafrase') {
      baseRate = 2500;
    } else if (calcService === 'ketik') {
      baseRate = 2500;
    } else if (calcService === 'turnitin') {
      return 15000; // Flat
    }

    let total = baseRate * calcPages;
    if (calcUrgency === 'express') {
      total = Math.round(total * 1.35); // +35% for express
    }
    return Math.max(total, 25000);
  };

  const estimatedTotal = calculateEstimate();

  const handleSendCalcToWA = () => {
    const levelLabel =
      calcLevel === 'siswa' ? 'Pelajar SMP/SMA' : calcLevel === 's1' ? 'Mahasiswa S1' : 'Magister S2/S3';
    const urgencyLabel = calcUrgency === 'express' ? 'Kilat Express (24 Jam)' : 'Standar (3-5 Hari)';
    const text = `Halo Kak Ettyn, saya ingin konsultasi order berdasarkan estimasi kalkulator:\n- Jenjang: ${levelLabel}\n- Layanan: ${calcService}\n- Perkiraan Halaman: ${calcPages} hal\n- Estimasi Waktu: ${urgencyLabel}\n- Estimasi Tarif: Rp${estimatedTotal.toLocaleString('id-ID')}`;
    onOpenWhatsApp(text);
  };

  return (
    <section id="tarif-dan-paket" className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full py-16">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] font-bold uppercase text-[#944437] tracking-widest px-3.5 py-1 rounded-full bg-[#ffdadc]/50 mb-3 border border-[#eeb9bd]/60">
          Transparan &amp; Terjangkau
        </span>
        <h2 className="font-headline-xl text-[#382D26]">Skema Tarif &amp; Paket Teman AKRAB</h2>
        <p className="text-[15px] leading-[24px] text-[#63534B] mt-3">
          Pilih paket hemat all-in-one atau sesuaikan pemesanan berdasarkan kebutuhan per modul karya
          ilmiah Anda.
        </p>
      </div>

      {/* 3 Elevated Bundle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
        {PRICING_BUNDLES.map((bundle) => {
          const isPopular = bundle.popular;
          return (
            <div
              key={bundle.id}
              className={`relative flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 border ${
                isPopular
                  ? 'bg-white shadow-2xl md:-translate-y-3 border-[#944437]/40 ring-1 ring-[#944437]/20'
                  : 'bg-white/85 shadow-md hover:shadow-xl border-[#dac1bd]/40'
              }`}
            >
              {/* Accent Top Bar for Popular Card */}
              {isPopular && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#944437] rounded-t-2xl" />
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${bundle.tagColor}`}
                  >
                    {bundle.target}
                  </span>
                  <span
                    className={`material-symbols-outlined ${
                      isPopular ? 'text-[#944437]' : 'text-[#8E7D75]'
                    }`}
                  >
                    {bundle.icon}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-[#382D26]">{bundle.name}</h3>
                <p className="text-[13px] text-[#8E7D75] mt-1">{bundle.subtitle}</p>

                <div className="my-6">
                  <span
                    className={`font-serif text-[36px] font-bold ${
                      isPopular ? 'text-[#944437]' : 'text-[#382D26]'
                    }`}
                  >
                    {bundle.price}
                  </span>
                  <span className="text-[13px] text-[#8E7D75] ml-1">{bundle.unit}</span>
                </div>

                <ul className="space-y-3.5 text-[13px] text-[#63534B]">
                  {bundle.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className={`material-symbols-outlined text-[18px] flex-shrink-0 mt-0.5 ${
                          isPopular ? 'text-[#944437]' : 'text-[#3D7A5A]'
                        }`}
                      >
                        check_circle
                      </span>
                      <span className={isPopular && idx < 2 ? 'font-semibold text-[#382D26]' : ''}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-auto">
                <button
                  onClick={() => onOpenWhatsApp(`Pemesanan ${bundle.name} (${bundle.price})`)}
                  className={`w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl font-semibold text-[14px] transition-all cursor-pointer ${
                    isPopular
                      ? 'bg-[#944437] hover:bg-[#b25c4e] text-white shadow-lg hover:-translate-y-0.5'
                      : 'bg-[#f1ede7] hover:bg-[#ebe8e2] text-[#382D26]'
                  }`}
                >
                  {isPopular ? 'Ambil Promo Mahasiswa' : `Pesan ${bundle.name}`}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Live Price Calculator */}
      <div className="rounded-2xl bg-[#FAF6F0] border border-[#dac1bd]/50 p-6 md:p-8 mb-16 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#dac1bd]/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#944437]/10 text-[#944437] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">calculate</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#382D26]">Kalkulator Estimasi Biaya Instan</h3>
              <p className="text-[13px] text-[#8E7D75]">
                Sesuaikan jenjang, jumlah halaman, dan deadline tugas Anda untuk simulasi anggaran
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold uppercase text-[#3D7A5A] bg-[#3D7A5A]/10 px-3 py-1 rounded-full self-start md:self-auto">
            100% Transparan
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
          {/* Level */}
          <div>
            <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-2">
              Jenjang Pendidikan
            </label>
            <div className="flex flex-col gap-1.5">
              {[
                { id: 'siswa', label: 'SMP / SMA' },
                { id: 's1', label: 'Sarjana (S-1)' },
                { id: 's2', label: 'Magister (S-2 / S-3)' }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setCalcLevel(lvl.id as any)}
                  className={`px-3 py-2 rounded-lg text-[13px] text-left font-medium transition-all cursor-pointer ${
                    calcLevel === lvl.id
                      ? 'bg-[#944437] text-white font-semibold shadow-sm'
                      : 'bg-white text-[#554340] hover:bg-[#f1ede7]'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-2">
              Kebutuhan Dokumen
            </label>
            <select
              value={calcService}
              onChange={(e) => setCalcService(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#dac1bd]/60 text-[#382D26] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#944437]"
            >
              <option value="skripsi">Format & Penataan Skripsi</option>
              <option value="makalah">Penyusunan Makalah Lengkap</option>
              <option value="parafrase">Parafrase Lolos Turnitin</option>
              <option value="ketik">Ketik Cepat & Transkrip</option>
              <option value="turnitin">Cek Turnitin Resmi No-Repo</option>
            </select>

            <div className="mt-4">
              <label className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-2">
                Kecepatan Pengerjaan
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setCalcUrgency('normal')}
                  className={`flex-1 py-2 text-[12px] rounded-lg font-medium cursor-pointer ${
                    calcUrgency === 'normal'
                      ? 'bg-[#382D26] text-white font-semibold'
                      : 'bg-white text-[#554340]'
                  }`}
                >
                  Standar (3-5 Hari)
                </button>
                <button
                  onClick={() => setCalcUrgency('express')}
                  className={`flex-1 py-2 text-[12px] rounded-lg font-medium cursor-pointer ${
                    calcUrgency === 'express'
                      ? 'bg-[#C85A54] text-white font-semibold'
                      : 'bg-white text-[#554340]'
                  }`}
                >
                  Kilat ⚡ (24 Jam)
                </button>
              </div>
            </div>
          </div>

          {/* Pages Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[12px] font-bold text-[#63534B] uppercase tracking-wider">
                Jumlah Halaman
              </label>
              <span className="text-[14px] font-bold text-[#944437] font-mono">
                {calcPages} Halaman
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="120"
              step="5"
              value={calcPages}
              onChange={(e) => setCalcPages(Number(e.target.value))}
              className="w-full accent-[#944437] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#8E7D75] mt-1 font-mono">
              <span>5 Hal</span>
              <span>60 Hal</span>
              <span>120 Hal</span>
            </div>
            <p className="text-[11px] text-[#8E7D75] mt-3">
              *Halaman cover, kata pengantar, dan daftar pustaka sudah termasuk dalam paket format.
            </p>
          </div>

          {/* Result Card */}
          <div className="rounded-xl bg-white p-5 shadow-sm border border-[#dac1bd]/40 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E7D75] block">
                Estimasi Investasi
              </span>
              <div className="mt-2">
                <span className="font-serif text-[28px] font-bold text-[#944437]">
                  Rp{estimatedTotal.toLocaleString('id-ID')}
                </span>
                <span className="text-[11px] text-[#8E7D75] block mt-0.5">
                  Garansi revisi minor gratis 7 hari
                </span>
              </div>
            </div>

            <button
              onClick={handleSendCalcToWA}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#944437] hover:bg-[#b25c4e] text-white font-semibold text-[13px] shadow transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Pesan Estimasi Ini</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="w-full rounded-2xl bg-white p-6 md:p-8 shadow-md border border-[#dac1bd]/40 overflow-x-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-[18px] font-bold text-[#382D26]">Daftar Tarif Satuan Layanan</h3>
            <p className="text-[13px] text-[#8E7D75]">Rincian harga transparan tanpa biaya tersembunyi.</p>
          </div>
          <span className="text-[11px] font-bold uppercase text-[#C85A54] tracking-wider bg-[#ffdadc]/60 px-3 py-1 rounded-full">
            Harga Promo Berlaku
          </span>
        </div>

        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="text-[#8E7D75] text-[11px] uppercase tracking-wider border-b border-[#f1ede7]">
              <th className="pb-4 font-bold">Jenis Layanan</th>
              <th className="pb-4 font-bold">Spesifikasi Kerja</th>
              <th className="pb-4 font-bold">Estimasi Waktu</th>
              <th className="pb-4 font-bold">Tarif Investasi</th>
              <th className="pb-4 text-right font-bold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1ede7]">
            {RATES_TABLE.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#f7f3ed]/60 transition-colors">
                <td className="py-4 font-bold text-[#382D26] text-[15px]">{row.name}</td>
                <td className="py-4 text-[#63534B] max-w-xs">{row.specs}</td>
                <td className="py-4 text-[#63534B]">{row.time}</td>
                <td className="py-4">
                  <div className="flex flex-col">
                    <span
                      className={`font-bold text-[14px] ${
                        row.promo ? 'text-[#944437]' : 'text-[#382D26]'
                      }`}
                    >
                      {row.price}
                    </span>
                    {row.promo && (
                      <span className="text-[10px] font-bold uppercase text-[#C85A54] tracking-wider">
                        Special Promo
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 text-right">
                  <button
                    onClick={() => onOpenWhatsApp(`Tanya Layanan: ${row.name} (${row.price})`)}
                    className="inline-flex px-3 py-1.5 rounded-lg bg-[#944437]/10 hover:bg-[#944437] text-[#944437] hover:text-white text-[12px] font-semibold transition-colors cursor-pointer"
                  >
                    Chat WA
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
