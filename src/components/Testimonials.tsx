import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Testimony } from '../types';

const TESTIMONIALS: Testimony[] = [
  {
    id: 't_1',
    name: 'Andira Syahputra',
    role: 'Wedding Organizer Lead',
    event: 'The Majesty Ballroom - Wedding (800 Pax)',
    rating: 5,
    message: 'Sudah langganan berkali-kali untuk event pernikahan klien kami. Suaranya jernih banget, tidak ada kendala dengung/noise sama sekali. Pemasangan selalu rapi dan manajemen kabelnya sangat estetis, tidak merusak dekorasi pelaminan.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 't_2',
    name: 'Riana Indahwati',
    role: 'HR Manager PT Nusantara Corp',
    event: 'Grand Sahid Jaya - Annual Gathering (350 Pax)',
    rating: 5,
    message: 'Sangat puas dengan sewa sound system di sini! Tim operator sangat kooperatif, datang tepat waktu H-1 untuk setting dan soundcheck dengan direksi kami. Mic wireless-nya jernih bahkan saat direksi berbicara di bagian paling belakang ruangan.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 't_3',
    name: 'Kevin Wijaya',
    role: 'Vokalis & Band Leader',
    event: 'Gandaria City - Acoustic Live Music Festival',
    rating: 5,
    message: 'Sebagai pemusik, kami sangat rewel soal kualitas panggung dan sound monitor. Crew di sini mengerti betul tuning frekuensi vokal dan gitar akustik agar seimbang di telinga kami dan audiens. Luar biasa profesional!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120'
  }
];

export default function Testimonials() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 border border-emerald-500/20">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Klien Puas & Sukses
        </span>
        <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Apa Kata Mereka Tentang Kami?
        </h3>
        <p className="text-slate-400 font-sans text-sm max-w-lg mx-auto">
          Kepercayaan ratusan event organizer, korporasi, dan individu yang telah mempercayakan kualitas suaranya pada kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-brand-gray rounded-2xl border-2 border-slate-800 p-6 flex flex-col justify-between relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)]"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-white/[0.04] -z-0 pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              {/* Star Ratings */}
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>

              {/* Message */}
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed italic">
                "{t.message}"
              </p>
            </div>

            {/* User details */}
            <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-slate-800 relative z-10">
              <img
                src={t.avatar}
                alt={t.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full border-2 border-slate-800 object-cover"
              />
              <div>
                <h4 className="font-display font-bold text-white text-sm leading-tight">{t.name}</h4>
                <p className="text-[11px] text-slate-450 font-sans">{t.role}</p>
                <p className="text-[10px] text-amber-400 font-mono font-medium mt-0.5">{t.event}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
