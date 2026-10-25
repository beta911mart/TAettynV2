import React, { useState, useEffect } from 'react';
import { INITIAL_TESTIMONIALS, TestimonialItem } from '../data/academicData';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem('temanakademik_reviews');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_TESTIMONIALS;
  });

  const [name, setName] = useState('');
  const [instansi, setInstansi] = useState('');
  const [rating, setRating] = useState('5');
  const [message, setMessage] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('temanakademik_reviews', JSON.stringify(testimonials));
    } catch {
      // ignore
    }
  }, [testimonials]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !instansi.trim() || !message.trim()) return;

    const newReview: TestimonialItem = {
      id: `testi-${Date.now()}`,
      name: name.trim(),
      role: 'Klien Terverifikasi',
      university: instansi.trim(),
      avatarLetter: name.trim().charAt(0).toUpperCase() || 'K',
      rating: Number(rating) || 5,
      content: `“${message.trim()}”`,
      date: 'Baru saja',
      serviceUsed: 'Pendampingan Akademik'
    };

    setTestimonials([newReview, ...testimonials]);
    setName('');
    setInstansi('');
    setMessage('');
    setRating('5');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 6000);
  };

  return (
    <section id="testimoni" className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full py-16">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] font-bold uppercase text-[#944437] tracking-widest px-3.5 py-1 rounded-full bg-[#ffdadc]/50 mb-3 border border-[#eeb9bd]/60">
          Kisah Sukses Klien
        </span>
        <h2 className="font-headline-xl text-[#382D26]">Kata Mereka Tentang Teman Akademik</h2>
        <p className="text-[15px] leading-[24px] text-[#63534B] mt-3">
          Ratusan mahasiswa telah membuktikan kemudahan meraih kelulusan tepat waktu dengan naskah
          berkualitas tinggi.
        </p>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {testimonials.slice(0, 8).map((testi) => (
          <div
            key={testi.id}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white/85 shadow-md border border-[#dac1bd]/40 hover:bg-white hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-[#D97706]">
                  {[...Array(testi.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                {testi.date === 'Baru saja' && (
                  <span className="text-[10px] uppercase font-bold text-[#3D7A5A] bg-[#3D7A5A]/15 px-2 py-0.5 rounded-full">
                    Terbaru
                  </span>
                )}
              </div>

              <p className="text-[13px] leading-[22px] text-[#63534B] italic">{testi.content}</p>
            </div>

            <div className="pt-6 flex items-center gap-3 border-t border-[#f1ede7] mt-5">
              <div className="w-10 h-10 rounded-full bg-[#ffdadc] flex items-center justify-center font-bold text-[#944437] text-[16px] flex-shrink-0">
                {testi.avatarLetter}
              </div>
              <div className="min-w-0">
                <h4 className="text-[13px] font-bold text-[#382D26] truncate">{testi.name}</h4>
                <p className="text-[11px] text-[#8E7D75] truncate">
                  {testi.role} • {testi.university}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive 'Tinggalkan Ulasan Anda' Form */}
      <div className="rounded-3xl bg-[#f7f3ed] p-8 md:p-12 shadow-sm border border-[#ebe8e2] max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-11 h-11 rounded-xl bg-[#944437] text-white flex items-center justify-center mb-3 shadow-sm">
            <span className="material-symbols-outlined text-[22px]">rate_review</span>
          </div>
          <h3 className="text-[22px] font-bold text-[#382D26]">Tinggalkan Ulasan Anda</h3>
          <p className="text-[13px] text-[#8E7D75] mt-1">
            Pengalaman berharga Anda membantu rekan mahasiswa lain memilih solusi yang tepat.
          </p>
        </div>

        {submittedSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-[#3D7A5A]/10 border border-[#3D7A5A]/30 text-[#3D7A5A] flex items-center gap-3 animate-in fade-in">
            <span className="material-symbols-outlined text-[24px]">check_circle</span>
            <div className="text-[13px]">
              <span className="font-bold block">Terima kasih atas ulasan Anda!</span>
              Ulasan Anda telah tersimpan dan langsung ditampilkan pada galeri ulasan di atas.
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" id="review-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1.5"
                htmlFor="review-name"
              >
                Nama Lengkap
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-white text-[#382D26] text-[13px] border border-[#dac1bd]/60 focus:outline-none focus:ring-2 focus:ring-[#944437] shadow-sm"
                id="review-name"
                placeholder="Misal: Dini Anggraini"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1.5"
                htmlFor="review-instansi"
              >
                Instansi Kampus / Sekolah
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-white text-[#382D26] text-[13px] border border-[#dac1bd]/60 focus:outline-none focus:ring-2 focus:ring-[#944437] shadow-sm"
                id="review-instansi"
                placeholder="Misal: Universitas Indonesia"
                required
                type="text"
                value={instansi}
                onChange={(e) => setInstansi(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1.5"
              htmlFor="review-rating"
            >
              Rating Kepuasan
            </label>
            <select
              className="w-full px-4 py-3 rounded-xl bg-white text-[#382D26] text-[13px] border border-[#dac1bd]/60 focus:outline-none focus:ring-2 focus:ring-[#944437] shadow-sm"
              id="review-rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="5">⭐⭐⭐⭐⭐ 5/5 - Sangat Memuaskan &amp; Tepat Waktu</option>
              <option value="4">⭐⭐⭐⭐ 4/5 - Bagus dan Rapi</option>
              <option value="3">⭐⭐⭐ 3/5 - Cukup Baik</option>
            </select>
          </div>

          <div>
            <label
              className="block text-[12px] font-bold text-[#63534B] uppercase tracking-wider mb-1.5"
              htmlFor="review-message"
            >
              Cerita Pengalaman Anda
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-xl bg-white text-[#382D26] text-[13px] border border-[#dac1bd]/60 focus:outline-none focus:ring-2 focus:ring-[#944437] shadow-sm"
              id="review-message"
              placeholder="Tuliskan pengalaman Anda menggunakan layanan Teman Akademik Ettyn..."
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="pt-2">
            <button
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#944437] hover:bg-[#b25c4e] text-white font-semibold text-[14px] shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
              type="submit"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Kirim Ulasan Sekarang</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
