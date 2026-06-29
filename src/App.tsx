/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Volume2, 
  Mic2, 
  Check, 
  Sliders, 
  Music, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Heart, 
  PhoneCall, 
  Calendar, 
  Users, 
  Award,
  ChevronRight,
  HelpCircle,
  TrendingDown,
  Activity,
  AlertTriangle,
  Flame
} from 'lucide-react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll helper
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Set up intersection observer to highlight current navigation item
  useEffect(() => {
    const sections = ['hero', 'benefits', 'packages', 'calculator', 'portfolio', 'faq'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { 
          rootMargin: '-40% 0px -50% 0px' // triggers when section occupies center screen
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const openWhatsAppGeneral = () => {
    const text = encodeURIComponent("Halo Admin Kreasi Audio, saya mau konsultasi seputar jasa sewa sound system.");
    window.open(`https://api.whatsapp.com/send?phone=6281234567890&text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* Dynamic Header & Floating Components */}
      <Header onNavClick={handleNavClick} activeSection={activeSection} />

      {/* HERO SECTION - Designed block-by-block from reference layout */}
      <section 
        id="hero" 
        className="relative pt-12 pb-24 md:py-32 bg-brand-dark overflow-hidden border-b border-slate-800"
      >
        {/* Crisp grid lines mimicking elegant paper/technical draft layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Custom Floating Promo Pill */}
          <div className="inline-flex items-center gap-2 bg-brand-gray text-white font-sans text-xs font-semibold py-1.5 px-4 rounded-full border border-slate-800 shadow-[2px_2px_0px_0px_rgba(245,158,11,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Garansi On-Time Setup & Operator Profesional Standby</span>
          </div>

          {/* Majestic Hero Headline (matches reference bold typography) */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Solusi Terpercaya Sound System Megah untuk <span className="text-amber-500 underline decoration-amber-500 decoration-wavy underline-offset-8">Event Terbaik Anda.</span>
          </h1>

          {/* Sub-paragraph */}
          <p className="font-sans font-medium text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Menyediakan jasa sewa sound system premium berstandar studio untuk pernikahan, corporate gathering, konser, seminar, dan reuni. Kami berikan sistem audio jernih, bebas feedback, lengkap dengan kru berpengalaman.
          </p>

          {/* Primary Call to Action Button, identically styled to "Gunakan Layanan Sekarang" in reference */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleNavClick('calculator')}
              className="w-full sm:w-auto font-display font-extrabold text-lg bg-amber-500 hover:bg-amber-400 text-slate-950 px-10 py-5 rounded-2xl border-3 border-slate-950 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-150 cursor-pointer flex items-center justify-center gap-3"
            >
              Cek Estimasi Harga Sekarang
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={openWhatsAppGeneral}
              className="w-full sm:w-auto font-display font-bold text-base bg-brand-gray hover:bg-slate-800 text-white px-8 py-5 rounded-2xl border-2 border-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-slate-400" />
              Konsultasi WhatsApp Gratis
            </button>
          </div>

          {/* Visual Showcase Block: Generated Image frame, resembling lower section of reference image */}
          <div className="pt-12 max-w-5xl mx-auto">
            <div className="relative rounded-3xl border-3 border-slate-800 bg-brand-gray p-4 sm:p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="absolute top-0 left-0 bg-amber-500 text-slate-950 font-mono text-[10px] font-bold py-1 px-4 border-r-2 border-b-2 border-slate-950 uppercase">
                Studio Gear Highlight
              </div>
              
              <img
                src="/src/assets/images/hero_sound_system_1782724140150.jpg"
                alt="Professional Sound System Rental Equipment"
                referrerPolicy="no-referrer"
                className="w-full rounded-2xl border-2 border-slate-800 object-cover aspect-[16/9] shadow-inner"
              />

              {/* Float specs overlay card */}
              <div className="absolute bottom-10 right-10 bg-brand-dark/95 text-white rounded-xl border-2 border-slate-850 p-4 shadow-2xl hidden md:block max-w-xs text-left">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Premium Acoustic Tuning</span>
                </div>
                <p className="font-display font-bold text-sm">Line-Array Active Speaker System</p>
                <p className="text-[11px] text-slate-400 font-sans mt-1">Kami menggunakan merk legendaris dunia (JBL, Yamaha, Shure) untuk kejernihan vokal maksimal.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROBLEM STATEMENT SECTION */}
      <section className="py-20 bg-brand-dark/80 text-white relative border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="bg-rose-500/10 text-rose-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-rose-500/20">
              <AlertTriangle className="w-3.5 h-3.5" />
              Masalah Umum Sound Rental Murah
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight max-w-3xl mx-auto">
              Apakah Anda Sering Mengalami Kendala Ini Saat Sewa Sound?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            {/* Problem 1 */}
            <div className="bg-brand-gray border-2 border-slate-800/80 rounded-2xl p-6 space-y-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="bg-rose-500/10 text-rose-400 p-3 rounded-xl inline-block border border-rose-500/15">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Suara Cempreng & Feedback Berisik</h3>
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                Mic mati-nyala mendadak atau timbul suara berdengung (feedback) kencang di tengah pidato sakral yang merusak kesakralan acara penting Anda.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="bg-brand-gray border-2 border-slate-800/80 rounded-2xl p-6 space-y-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="bg-rose-500/10 text-rose-400 p-3 rounded-xl inline-block border border-rose-500/15">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Kru Terlambat & Pemasangan Berantakan</h3>
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                Tim sound datang terlambat atau tidak siap pakai saat tamu penting sudah hadir. Kabel malang melintang mengganggu pemandangan panggung dekorasi.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="bg-brand-gray border-2 border-slate-800/80 rounded-2xl p-6 space-y-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="bg-rose-500/10 text-rose-400 p-3 rounded-xl inline-block border border-rose-500/15">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Operator Cuek & Alat Rusak</h3>
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                Teknisi tidak siaga di mixer saat ada perubahan acara, atau alat mati mendadak karena unit yang disewakan sudah usang dan jarang diservis.
              </p>
            </div>

          </div>

          {/* Solution Highlight banner */}
          <div className="bg-amber-500 text-slate-950 rounded-2xl border-2 border-slate-950 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)]">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight">Kami Hadirkan Standar Baru Sound Rental Profesional</h3>
              <p className="text-slate-900 font-sans text-sm font-medium">Bebas khawatir. Peralatan prima, terawat, and kru siaga penuh mengawal suksesnya acara Anda.</p>
            </div>
            <button 
              onClick={() => handleNavClick('benefits')}
              className="bg-slate-950 hover:bg-slate-800 text-white font-display font-bold text-sm py-3.5 px-6 rounded-xl border border-slate-950 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)] shrink-0 cursor-pointer"
            >
              Lihat Solusi Kami
            </button>
          </div>

        </div>
      </section>

      {/* WHY US / BENEFITS SECTION */}
      <section id="benefits" className="py-24 bg-brand-dark relative border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: big typography statement */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 border border-amber-500/20">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Standar Kualitas Premium
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Mengapa Harus Mempercayakan Audio Anda Pada Kami?
              </h2>
              <p className="text-slate-350 font-sans text-sm sm:text-base leading-relaxed">
                Kami memahami bahwa tata suara adalah jantung dari emosi sebuah acara. Baik itu janji suci pernikahan, instruksi penting seminar direksi, hingga entakan drum konser musik, kami berikan jaminan kualitas terbaik tanpa kompromi.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={openWhatsAppGeneral}
                  className="font-display font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-lg border-2 border-slate-950 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] transition-transform duration-150 cursor-pointer inline-flex items-center gap-2"
                >
                  Hubungi Tim Ahli Kami
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side: bento grid benefits */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Benefit 1 */}
              <div className="bg-brand-gray p-6 rounded-2xl border-2 border-slate-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] space-y-3">
                <div className="bg-amber-500/10 text-amber-400 w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/15">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Alat Original Berkualitas</h4>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Semua speaker, mixer, dan mikrofon berasal dari merk global berlisensi resmi. Suara dijamin bulat, empuk, dan tebal.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-brand-gray p-6 rounded-2xl border-2 border-slate-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] space-y-3">
                <div className="bg-amber-500/10 text-amber-400 w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/15">
                  <Sliders className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Professional Sound Engineer</h4>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Bukan sekadar operator biasa. Kru kami terlatih melakukan pemetaan frekuensi agar vokal terdengar artikulatif.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-brand-gray p-6 rounded-2xl border-2 border-slate-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] space-y-3">
                <div className="bg-amber-500/10 text-amber-400 w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/15">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Instalasi H-1 Tepat Waktu</h4>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Kami mengutamakan kedisplinan. Setup alat dilakukan berjam-jam sebelum acara dimulai demi kelancaran soundcheck.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-brand-gray p-6 rounded-2xl border-2 border-slate-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] space-y-3">
                <div className="bg-amber-500/10 text-amber-400 w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/15">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Manajemen Kabel Estetis</h4>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Kabel-kabel audio ditata dengan rapi, dilakban rapi, dan dilindungi agar tidak mengganggu keindahan dekorasi acara Anda.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* STANDARD TIERED PACKAGES SECTION */}
      <section id="packages" className="py-24 bg-brand-dark border-t border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 border border-amber-500/20">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              Paket Layanan Favorit
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
              Pilihan Paket Sewa Populer
            </h2>
            <p className="text-slate-400 font-sans text-sm max-w-lg mx-auto">
              Tersedia paket lengkap yang telah disesuaikan dengan standar kebutuhan daya dan skala event Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Package 1: Lite */}
            <div className="bg-brand-gray rounded-2xl border-2 border-slate-800 p-6 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] relative">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest">Kapasitas Kecil</span>
                  <h3 className="font-display font-extrabold text-2xl text-white mt-1">Paket Lite 1.000W</h3>
                  <p className="text-slate-400 font-sans text-xs mt-1.5 leading-relaxed">Pilihan tepat untuk lamaran, arisan, syukuran, akustik indoor cafe, atau mini gathering.</p>
                </div>

                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-xs font-bold font-sans">Rp</span>
                  <span className="text-3xl sm:text-4xl font-display font-extrabold font-mono tracking-tight">1.500.000</span>
                  <span className="text-xs font-sans text-slate-500 font-medium ml-1">/ Event (6 Jam)</span>
                </div>

                <div className="border-t border-slate-800 pt-6">
                  <p className="text-xs font-bold text-slate-350 uppercase tracking-wider mb-3">Spesifikasi Alat:</p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>2 Unit Speaker Active 15" Premium</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>1 Unit Digital/Analog Mixer Board</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>2 Unit Mic Wireless UHF Handheld</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>1 Operator / Sound Engineer Standby</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleNavClick('calculator')}
                  className="w-full text-center font-display font-bold text-xs bg-brand-dark hover:bg-brand-gray text-amber-400 py-3 rounded-lg border-2 border-slate-700 shadow-[2px_2px_0px_0px_rgba(245,158,11,0.2)] cursor-pointer"
                >
                  Pilih Paket Lite
                </button>
              </div>
            </div>

            {/* Package 2: Standard (POPULAR - Yellow highlights) */}
            <div className="bg-[#131316] text-white rounded-2xl border-2 border-amber-500 p-6 flex flex-col justify-between shadow-[12px_12px_0px_0px_rgba(245,158,11,0.15)] relative ring-4 ring-amber-500/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-display font-extrabold text-[10px] tracking-wider py-1 px-4 rounded-full uppercase border-2 border-slate-950">
                ⭐ Paling Banyak Dipilih
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold font-mono text-amber-400 uppercase tracking-widest">Kapasitas Sedang</span>
                  <h3 className="font-display font-extrabold text-2xl text-white mt-1">Paket Standard 3.000W</h3>
                  <p className="text-slate-300 font-sans text-xs mt-1.5 leading-relaxed">Rekomendasi terbaik untuk seminar, pernikahan indoor, corporate gathering, atau mini concert.</p>
                </div>

                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-xs font-bold font-sans text-amber-400">Rp</span>
                  <span className="text-3xl sm:text-4xl font-display font-extrabold font-mono tracking-tight text-amber-400">3.500.000</span>
                  <span className="text-xs font-sans text-slate-450 font-medium ml-1">/ Event (6 Jam)</span>
                </div>

                <div className="border-t border-slate-800 pt-6">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Spesifikasi Alat:</p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-xs text-slate-200 font-sans">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>4 Unit Speaker Active / Line Array 12"</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-200 font-sans">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>2 Unit Subwoofer 18" Ground Stack</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-200 font-sans">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>1 Unit Pro Digital Mixer 16-Channel</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-200 font-sans">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>4 Unit Mic Wireless UHF High-End</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-200 font-sans">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>2 Operator & Sound Engineer Standby</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleNavClick('calculator')}
                  className="w-full text-center font-display font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 py-3 rounded-lg border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] cursor-pointer"
                >
                  Pilih Paket Standard
                </button>
              </div>
            </div>

            {/* Package 3: Premium */}
            <div className="bg-brand-gray rounded-2xl border-2 border-slate-800 p-6 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] relative">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest">Kapasitas Besar</span>
                  <h3 className="font-display font-extrabold text-2xl text-white mt-1">Paket Premium 5.000W</h3>
                  <p className="text-slate-400 font-sans text-xs mt-1.5 leading-relaxed">Sangat ideal untuk pernikahan outdoor luas, corporate gala dinner, atau pentas seni sekolah.</p>
                </div>

                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-xs font-bold font-sans">Rp</span>
                  <span className="text-3xl sm:text-4xl font-display font-extrabold font-mono tracking-tight">5.500.000</span>
                  <span className="text-xs font-sans text-slate-500 font-medium ml-1">/ Event (6 Jam)</span>
                </div>

                <div className="border-t border-slate-800 pt-6">
                  <p className="text-xs font-bold text-slate-355 uppercase tracking-wider mb-3">Spesifikasi Alat:</p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>6 Unit Speaker Line Array System</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>4 Unit Subwoofer Active 18"</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>1 Unit Pro Digital Mixer 32-Channel</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>6 Unit Mic Wireless UHF Premium</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>3 Operator & Crew Standby</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleNavClick('calculator')}
                  className="w-full text-center font-display font-bold text-xs bg-brand-dark hover:bg-brand-gray text-amber-400 py-3 rounded-lg border-2 border-slate-700 shadow-[2px_2px_0px_0px_rgba(245,158,11,0.2)] cursor-pointer"
                >
                  Pilih Paket Premium
                </button>
              </div>
            </div>

          </div>

          {/* Quick notice about custom specs */}
          <p className="text-center text-xs text-slate-550 font-sans">
            *Memiliki kebutuhan di atas 10.000 Watt atau butuh kustomisasi rider band khusus? Silakan gunakan kalkulator kustomisasi di bawah ini.
          </p>

        </div>
      </section>

      {/* DYNAMIC CALCULATOR SECTION */}
      <section id="calculator" className="py-24 bg-brand-dark/50 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Calculator />
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-brand-dark border-t border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Portfolio />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-brand-dark/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-brand-dark border-b border-slate-800 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-[#0D0D10] text-white relative border-t border-slate-850">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase border border-amber-500/20">
            <Volume2 className="w-3.5 h-3.5" />
            Amankan Jadwal Anda Hari Ini
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight leading-tight max-w-3xl mx-auto text-white">
            Siap Menjadikan Suara Event Anda Spektakuler?
          </h2>

          <p className="text-slate-350 font-sans text-sm sm:text-lg max-w-2xl mx-auto">
            Tanggal-tanggal favorit akhir pekan (Sabtu & Minggu) biasanya penuh ter-booking berbulan-bulan sebelumnya. Hubungi admin kami sekarang untuk keep jadwal acara Anda!
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={openWhatsAppGeneral}
              className="w-full font-display font-extrabold text-base bg-amber-500 hover:bg-amber-400 text-slate-950 py-4 px-8 rounded-xl border-2 border-slate-950 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 fill-slate-950 text-slate-950" />
              Chat Admin via WhatsApp
            </button>
            <button
              onClick={() => handleNavClick('calculator')}
              className="w-full font-display font-bold text-sm bg-brand-gray hover:bg-brand-dark text-white py-4 px-6 rounded-xl border-2 border-slate-750 transition-colors cursor-pointer"
            >
              Ulik Estimasi Harga
            </button>
          </div>

          {/* Quick trust notes */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-slate-500 text-xs font-sans">
            <span className="flex items-center gap-1.5">✓ DP Ringan 30%</span>
            <span className="flex items-center gap-1.5">✓ Free Transport Jabodetabek</span>
            <span className="flex items-center gap-1.5">✓ Alat Back-up Selalu Siaga</span>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark text-white border-t border-slate-850 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 text-slate-950 p-2.5 font-display font-extrabold text-sm tracking-tighter rounded">
                SOUND
              </div>
              <span className="font-display font-extrabold text-lg text-white">KREASI AUDIO</span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              Jasa sewa sound system professional tepercaya untuk berbagai skala event. Memberikan jaminan audio jernih dan pelayanan ramah sejak tahun 2018.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4">Navigasi Link</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
              <li><button onClick={() => handleNavClick('hero')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Beranda Utama</button></li>
              <li><button onClick={() => handleNavClick('benefits')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Keunggulan Layanan</button></li>
              <li><button onClick={() => handleNavClick('packages')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Paket Jasa Favorit</button></li>
              <li><button onClick={() => handleNavClick('calculator')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Kalkulator Harga</button></li>
              <li><button onClick={() => handleNavClick('portfolio')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Galeri Dokumentasi</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4">Kontak Utama</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">WA:</span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">Email:</span>
                <span>halo@kreasiaudio.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">Jam:</span>
                <span>Setiap Hari (08:00 - 21:00 WIB)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white mb-4">Lokasi & Workshop</h4>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              Jl. Sultan Iskandar Muda No. 45, Kebayoran Lama, Jakarta Selatan, DKI Jakarta 12240
            </p>
            <div className="bg-brand-gray border border-slate-850 rounded-lg p-2 text-[10px] text-slate-400 font-mono flex items-center justify-between">
              <span>🗺️ Terjangkau Jabodetabek</span>
              <span className="text-amber-400 font-bold">LIVE MAP</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-850 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-sans">
            © {new Date().getFullYear()} Kreasi Audio (Rental Sound System). All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500 font-sans">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
