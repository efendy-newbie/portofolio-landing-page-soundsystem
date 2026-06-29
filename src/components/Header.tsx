import React, { useState, useEffect } from 'react';
import { Volume2, Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', id: 'hero' },
    { label: 'Mengapa Kami', id: 'benefits' },
    { label: 'Paket Jasa', id: 'packages' },
    { label: 'Kalkulator', id: 'calculator' },
    { label: 'Galeri Event', id: 'portfolio' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    
    // Simulate feedback submission
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackText('');
      setFeedbackSent(false);
      setShowFeedbackModal(false);
    }, 2500);
  };

  const directWhatsApp = () => {
    const message = encodeURIComponent("Halo Admin Sewa Sound, saya ingin tanya-tanya mengenai paket sewa sound system untuk acara saya.");
    window.open(`https://api.whatsapp.com/send?phone=6281234567890&text=${message}`, '_blank');
  };

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-brand-dark/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo, adapted from the black box in reference */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavClick('hero')}
            >
              <div className="bg-amber-500 text-slate-950 p-3 font-display font-extrabold tracking-tighter text-lg leading-tight transition-all duration-300 group-hover:bg-amber-400">
                SOUND
                <div className="text-[10px] tracking-widest text-slate-900">RENTAL</div>
              </div>
              <div>
                <span className="font-display font-bold text-white text-xl tracking-tight block">KREASI AUDIO</span>
                <span className="text-xs text-slate-400 font-medium block -mt-1">Sewa Sound System Professional</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`font-sans font-semibold text-sm transition-colors duration-200 cursor-pointer py-2 border-b-2 ${
                    activeSection === item.id
                      ? 'text-amber-400 border-amber-500'
                      : 'text-slate-300 border-transparent hover:text-white hover:border-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button (matches "Daftar Menu" styled button) */}
            <div className="hidden md:block">
              <button
                onClick={directWhatsApp}
                className="font-display font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-2.5 rounded-lg border-2 border-slate-950 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-150 flex items-center gap-2 cursor-pointer"
              >
                Tanya Paket
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isOpen && (
          <div className="md:hidden bg-brand-dark border-t border-slate-800 px-4 py-6 space-y-3 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left font-sans font-semibold text-base py-3 px-4 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-amber-500/10 text-amber-400 font-bold'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => {
                  directWhatsApp();
                  setIsOpen(false);
                }}
                className="w-full text-center font-display font-bold bg-amber-500 text-slate-950 py-3 rounded-lg border-2 border-slate-950 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                Hubungi WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Vertical Interactive Feedback tab, exactly matching the red "Umpan balik" button on the right edge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden sm:block">
        <button
          onClick={() => setShowFeedbackModal(true)}
          className="bg-rose-600 hover:bg-rose-700 text-white font-sans font-medium text-xs tracking-wider py-3.5 px-2.5 rounded-l-md shadow-lg transform rotate-180 select-none flex items-center gap-2 cursor-pointer [writing-mode:vertical-lr] border-l border-y border-white/20"
        >
          <MessageSquare className="w-3.5 h-3.5 transform -rotate-90 fill-white" />
          Kirim Masukan
        </button>
      </div>

      {/* Floating Interactive WhatsApp Speech Bubble / Contact Trigger at the bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Helper speech bubble tooltip */}
        <div className="bg-brand-gray text-white text-xs py-2 px-3 rounded-xl shadow-xl border border-white/10 font-sans max-w-[200px] animate-bounce text-right hidden sm:block">
          Ada pertanyaan? Chat operator kami langsung! 👋
        </div>
        <button
          onClick={directWhatsApp}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 cursor-pointer flex items-center justify-center border-2 border-white group"
          title="Tanya Operator via WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white group-hover:scale-105 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
        </button>
      </div>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-brand-gray rounded-2xl border-2 border-slate-800 p-6 sm:p-8 max-w-md w-full shadow-[8px_8px_0px_0px_rgba(245,158,11,0.2)] relative animate-in fade-in zoom-in-95 duration-200 text-white">
            <button
              onClick={() => setShowFeedbackModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-rose-500/10 text-rose-400 p-2 rounded-lg border border-rose-500/20">
                <MessageSquare className="w-5 h-5 fill-rose-500/10" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Kirim Masukan</h3>
            </div>
            
            {feedbackSent ? (
              <div className="py-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-3 border border-emerald-500/20">
                  ✓
                </div>
                <p className="font-sans font-semibold text-slate-100">Terima kasih banyak!</p>
                <p className="text-sm text-slate-400 mt-1">Masukan Anda sangat berarti bagi peningkatan kualitas layanan kami.</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <p className="text-sm text-slate-300">
                  Apakah Anda memiliki saran, keluhan, atau ide untuk website sewa sound system kami? Sampaikan di bawah:
                </p>
                <div>
                  <textarea
                    rows={4}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    required
                    placeholder="Tulis pesan atau masukan Anda di sini..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-brand-dark border-2 border-slate-800 focus:border-amber-500 focus:outline-none font-sans text-slate-100 placeholder:text-slate-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-display font-bold text-sm bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg border-2 border-slate-850 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-150 cursor-pointer"
                >
                  Kirim Sekarang
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
