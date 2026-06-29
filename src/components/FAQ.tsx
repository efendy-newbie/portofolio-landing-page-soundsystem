import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq_1',
    question: 'Apakah harga sewa sudah termasuk biaya pengiriman dan instalasi?',
    answer: 'Ya, benar! Semua paket sewa sound system kami sudah merupakan harga all-in (sudah termasuk biaya pengiriman wilayah Jabodetabek, pemasangan rapi, instalasi kabel aman, operator professional yang standby sepanjang acara, hingga pembongkaran).'
  },
  {
    id: 'faq_2',
    question: 'Berapa lama waktu yang dibutuhkan untuk pemasangan (setup) alat?',
    answer: 'Untuk Paket Lite (1.000W) dan Paket Standard (3.000W), proses bongkar muat dan setup memakan waktu sekitar 1 hingga 2 jam sebelum acara dimulai. Sedangkan untuk Paket Premium (5.000W) dan Concert (10.000W), tim kami biasanya menginstal H-1 acara atau minimal 4-5 jam sebelum acara dimulai untuk melakukan soundcheck menyeluruh.'
  },
  {
    id: 'faq_3',
    question: 'Bagaimana jika acara saya berlangsung di luar ruangan (outdoor) dan tiba-tiba hujan?',
    answer: 'Keamanan peralatan listrik dan keselamatan hadirin adalah prioritas utama. Untuk acara outdoor, panggung sound system wajib memiliki penutup/atap pelindung (tenda atau canopy). Jika terjadi hujan deras tanpa pelindung, tim kami akan mematikan daya kelistrikan sementara demi keselamatan bersama, dan menyalakannya kembali setelah area panggung dipastikan aman dan kering.'
  },
  {
    id: 'faq_4',
    question: 'Berapa daya listrik (listrik genset/PLN) minimum yang harus saya siapkan?',
    answer: 'Sebagai patokan aman, siapkan daya listrik konvensional atau genset sebesar minimal 1.5 kali dari daya watt sound system yang disewa. Contoh: Sewa sound 3.000 Watt membutuhkan kapasitas listrik standby minimal 4.500 Watt hingga 5.000 Watt khusus dialokasikan untuk audio saja (tidak dicampur AC/Lighting berat).'
  },
  {
    id: 'faq_5',
    question: 'Bagaimana sistem pembayaran dan pemesanan?',
    answer: 'Pemesanan dapat diawali dengan mencocokkan jadwal acara via WhatsApp. Setelah tanggal terkonfirmasi kosong, Anda melakukan pembayaran Down Payment (DP) sebesar 30% untuk mengunci jadwal (booking fee). Sisa pelunasan 70% dibayarkan langsung di lokasi acara (Cash/Transfer) setelah instalasi sound selesai terpasang dan lolos uji soundcheck sebelum acara dimulai.'
  },
  {
    id: 'faq_6',
    question: 'Apakah bisa menyewa harian untuk acara multi-hari (pameran/festival)?',
    answer: 'Sangat bisa! Untuk penyewaan berturut-turut (multi-day) seperti pameran 3 hari atau festival mingguan, kami memberikan diskon khusus hingga 30-50% untuk tarif hari kedua dan seterusnya. Silakan konsultasikan langsung rencana durasi acara Anda kepada admin kami.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq_1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const askCustomQuestion = () => {
    const text = encodeURIComponent("Halo Admin Kreasi Audio, saya mau konsultasi seputar kebutuhan sewa sound system di luar list FAQ.");
    window.open(`https://api.whatsapp.com/send?phone=6281234567890&text=${text}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 text-white">
      <div className="text-center space-y-2 mb-10">
        <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Pertanyaan yang Sering Diajukan
        </h3>
        <p className="text-slate-400 font-sans text-sm max-w-lg mx-auto">
          Temukan jawaban cepat mengenai prosedur teknis, pembayaran, dan operasional sewa sound system kami.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_LIST.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-brand-gray rounded-2xl border-2 border-slate-800 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-brand-dark/40 cursor-pointer"
              >
                <span className="font-display font-bold text-white text-sm sm:text-base flex items-center gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 border-t-2 border-slate-800 bg-brand-dark/40">
                  <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Helper custom question CTA */}
      <div className="bg-brand-gray rounded-2xl border-2 border-slate-850 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)]">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-white text-base">Pertanyaan Anda tidak terdaftar di atas?</p>
          <p className="text-xs text-slate-400 mt-0.5">Diskusikan kebutuhan teknis acara Anda secara detail dengan ahli audio kami gratis!</p>
        </div>
        <button
          onClick={askCustomQuestion}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-display font-bold text-xs py-3 px-5 rounded-lg border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] flex items-center gap-2 cursor-pointer transition-all duration-150 shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
          Konsultasi Khusus via WA
        </button>
      </div>
    </div>
  );
}
