import React, { useState } from 'react';
import { SHOP_PRODUCTS, ShopItem } from '../data/academicData';

interface EttynShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderViaWhatsApp: (productName: string, price: string) => void;
}

export const EttynShopModal: React.FC<EttynShopModalProps> = ({
  isOpen,
  onClose,
  onOrderViaWhatsApp
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredProducts = SHOP_PRODUCTS.filter((prod) => {
    return selectedCategory === 'all' || prod.category === selectedCategory;
  });

  const handleSimulateDownload = (item: ShopItem) => {
    setDownloadSuccessItem(item.id);
    setTimeout(() => {
      // Create sample file download
      const content = `TERIMA KASIH TELAH MENGGUNAKAN PRODUK ETTYN SHOP!\n=======================================================\nProduk: ${item.title}\nKategori: ${item.category}\nFormat Berkas: ${item.fileFormat}\nHarga Promo: ${item.price}\n\nFITUR UTAMA:\n${item.highlights.map((h) => `- ${h}`).join('\n')}\n\nUntuk lisensi penuh, panduan video tutorial dan update gratis seumur hidup, hubungi Admin WhatsApp Ettyn Academic Partner (+62 812-3456-7890).\n=======================================================`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `EttynShop_${item.id}_Preview.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }, 400);

    setTimeout(() => setDownloadSuccessItem(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#fdf9f3] rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#dac1bd]/50 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#dac1bd]/40 flex items-center justify-between bg-gradient-to-r from-[#ffdbcd]/40 via-white to-[#ffdadc]/40">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#C85A54] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[24px]">storefront</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[20px] font-bold text-[#382D26]">Ettyn Shop — Toko Digital</h3>
                <span className="px-2 py-0.5 rounded-full bg-[#C85A54] text-white text-[10px] font-bold uppercase">
                  Instant Download
                </span>
              </div>
              <p className="text-[12px] text-[#8E7D75]">
                Koleksi master template skripsi, spreadsheet analisis data, dan toolkit publikasi jurnal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ebe8e2] hover:bg-[#944437] hover:text-white flex items-center justify-center text-[#382D26] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Categories Bar */}
        <div className="px-6 py-3 bg-[#f7f3ed] border-b border-[#ebe8e2] flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'all', label: 'Semua Produk' },
            { id: 'template', label: 'Template Skripsi (Word & LaTeX)' },
            { id: 'spreadsheet', label: 'Spreadsheet SPSS & Excel' },
            { id: 'jurnal', label: 'Kit Jurnal Sinta/Scopus' },
            { id: 'panduan', label: 'Panduan Sitasi' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-[#944437] shadow-xs border border-[#dac1bd]/50'
                  : 'text-[#63534B] hover:text-[#382D26]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Catalog Grid */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {downloadSuccessItem && (
            <div className="p-3.5 rounded-xl bg-[#3D7A5A]/10 border border-[#3D7A5A]/30 text-[#3D7A5A] text-[13px] flex items-center gap-2.5 animate-in fade-in">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span>
                Pratinjau berkas berhasil diunduh! Untuk mendapatkan berkas master lengkap (.docx / .xlsx), silakan pesan melalui WhatsApp.
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="p-5 rounded-2xl bg-white border border-[#dac1bd]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[#8E7D75] bg-[#f7f3ed] px-2 py-0.5 rounded">
                      {prod.fileFormat}
                    </span>
                    <div className="flex items-center text-[#D97706] text-[12px] font-bold">
                      <span
                        className="material-symbols-outlined text-[15px] mr-1"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span>{prod.rating}</span>
                      <span className="text-[#8E7D75] font-normal text-[11px] ml-1">
                        ({prod.downloads}+ unduh)
                      </span>
                    </div>
                  </div>

                  <h4 className="text-[16px] font-bold text-[#382D26] mb-1.5">{prod.title}</h4>
                  <p className="text-[13px] leading-relaxed text-[#63534B] mb-3">
                    {prod.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    {prod.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#63534B]">
                        <span className="material-symbols-outlined text-[14px] text-[#3D7A5A]">
                          check
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#f1ede7] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-[#8E7D75] block uppercase font-bold tracking-wider">
                      Investasi Digital
                    </span>
                    <span className="text-[17px] font-bold text-[#944437]">{prod.price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSimulateDownload(prod)}
                      title="Unduh Pratinjau Gratis"
                      className="p-2 rounded-lg bg-[#f1ede7] hover:bg-[#ebe8e2] text-[#382D26] transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                    <button
                      onClick={() => onOrderViaWhatsApp(prod.title, prod.price)}
                      className="px-3.5 py-2 rounded-lg bg-[#944437] hover:bg-[#b25c4e] text-white text-[12px] font-semibold transition-all shadow-xs cursor-pointer"
                    >
                      Beli via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#f7f3ed] border-t border-[#ebe8e2] flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#8E7D75] gap-2">
          <span>🛡️ Pembayaran instan via QRIS, BCA, Mandiri, ShopeePay &amp; GoPay</span>
          <span>⚡ Berkas langsung dikirim via WhatsApp &amp; Google Drive dalam 2 menit</span>
        </div>
      </div>
    </div>
  );
};
