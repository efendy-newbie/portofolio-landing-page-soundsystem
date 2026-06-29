import { useState } from 'react';
import { Image, Layers, Sparkles, Sliders } from 'lucide-react';
import { PortfolioItem } from '../types';

const eventSoundSetup = 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=800&h=600';
const heroSoundSystem = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800&h=600';

// Let's import the specific images generated in our turn
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p_1',
    title: 'Gala Corporate Gathering PT Astra',
    category: 'Corporate',
    scale: '3.000 Watt System',
    image: eventSoundSetup, // Imported locally!
    description: 'Penyediaan sound system prima untuk seminar nasional & makan malam direksi di Ballroom bintang lima, lengkap dengan wireless monitor.'
  },
  {
    id: 'p_2',
    title: 'Concert Gear Setup & Tuning',
    category: 'Konser',
    scale: '10.000 Watt Line Array',
    image: heroSoundSystem, // Imported locally!
    description: 'Penyediaan line array gantung kelas dunia, subwoofer ground stack, dan digital mixer FOH untuk konser musik outdoor band lokal.'
  },
  {
    id: 'p_3',
    title: 'Pernikahan Tradisional Megah',
    category: 'Wedding',
    scale: '5.000 Watt System',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600&h=450',
    description: 'Tata audio komprehensif mencakup area akad nikah hingga pelaminan gedung utama, menjamin suara sambutan dan instrumen terdengar merata.'
  },
  {
    id: 'p_4',
    title: 'Festival Musik Kampus (Pensi)',
    category: 'Konser',
    scale: '10.000 Watt System',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600&h=450',
    description: 'Penyediaan audio panggung full backline musik (amplifier gitar, bass, drum kit akustik) untuk festival musik panggung terbuka.'
  },
  {
    id: 'p_5',
    title: 'Seminar Akademik & Launching Produk',
    category: 'Corporate',
    scale: '2.000 Watt System',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600&h=450',
    description: 'Sistem tata suara presisi tinggi untuk presentasi multi-slide yang mengutamakan artikulasi vokal yang tajam dan nyaman didengar.'
  },
  {
    id: 'p_6',
    title: 'Acara Akustik & Reuni Alumni',
    category: 'Lainnya',
    scale: '1.000 Watt System',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600&h=450',
    description: 'Setting minimalis untuk panggung akustik santai di cafe semi-outdoor, menyuguhkan vokal hangat dan iringan gitar seimbang.'
  }
];

const CATEGORIES = ['Semua', 'Wedding', 'Corporate', 'Konser', 'Lainnya'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-12 text-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 border border-amber-500/20">
            <Image className="w-3.5 h-3.5 text-amber-400" />
            Galeri Dokumentasi
          </span>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Kualitas Suara di Berbagai Event
          </h3>
          <p className="text-slate-400 font-sans text-sm max-w-lg">
            Intip portofolio asli pengerjaan tata suara kami di lapangan. Kami pastikan setiap setup rapi dan siap pakai.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-sans font-bold rounded-lg border-2 cursor-pointer transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]'
                  : 'bg-brand-dark/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-brand-gray rounded-2xl border-2 border-slate-800 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] hover:translate-y-[-2px] hover:border-slate-700 transition-all duration-200 flex flex-col h-full"
          >
            {/* Image Wrap */}
            <div className="aspect-[4/3] bg-brand-dark overflow-hidden relative border-b-2 border-slate-800 shrink-0">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-700 uppercase">
                {item.scale}
              </span>
              <span className="absolute bottom-3 right-3 bg-amber-500 text-slate-950 font-display text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-950 shadow-[1px_1px_0px_0px_rgba(255,255,255,0.1)] uppercase">
                {item.category}
              </span>
            </div>

            {/* Content Wrap */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-extrabold text-base text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 font-sans text-xs mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800/80">
                <Sliders className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-wider">
                  Profesional Sound Tuned
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
