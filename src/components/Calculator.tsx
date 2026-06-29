import { useState } from 'react';
import { Volume2, Sparkles, Plus, Minus, Check, Calendar, Users, Music, AlertCircle, MessageCircle } from 'lucide-react';
import { SoundPackage, AddOnItem } from '../types';

const INITIAL_PACKAGES: SoundPackage[] = [
  {
    id: 'lite',
    name: 'Paket Lite',
    power: '1.000 Watt',
    basePrice: 1500000,
    description: 'Cocok untuk arisan, lamaran, syukuran, akustik indoor, atau gathering kecil.',
    capacity: 'Up to 100 Tamu',
    includes: [
      '2 Unit Speaker Active 15" Premium',
      '1 Unit Digital/Analog Mixer Board',
      '2 Unit Mic Wireless UHF Handheld',
      '1 Operator / Sound Engineer Standby',
      'Instalasi, Setting, & Kabel Set',
      'Bebas Biaya Transport (Jabodetabek)'
    ]
  },
  {
    id: 'standard',
    name: 'Paket Standard',
    power: '3.000 Watt',
    basePrice: 3500000,
    description: 'Rekomendasi terbaik untuk seminar nasional, pernikahan indoor, corporate gathering, atau mini concert.',
    capacity: '100 - 300 Tamu',
    includes: [
      '4 Unit Speaker Active / Line Array 12"',
      '2 Unit Subwoofer 18" Ground Stack',
      '1 Unit Pro Digital Mixer 16-Channel',
      '4 Unit Mic Wireless UHF High-End',
      '2 Operator & Sound Engineer Standby',
      '2 Unit Speaker Monitor Stage',
      'Manajemen Kabel Rapi (Estetis)',
      'Bebas Biaya Transport (Jabodetabek)'
    ]
  },
  {
    id: 'premium',
    name: 'Paket Premium',
    power: '5.000 Watt',
    basePrice: 5500000,
    description: 'Sangat ideal untuk pernikahan outdoor besar, corporate gala dinner, pentas seni sekolah, atau gig semi-outdoor.',
    capacity: '300 - 600 Tamu',
    includes: [
      '6 Unit Speaker Line Array System',
      '4 Unit Subwoofer Active 18"',
      '1 Unit Pro Digital Mixer 32-Channel',
      '6 Unit Mic Wireless UHF Premium',
      '3 Operator & Crew Standby',
      '4 Unit Speaker Monitor Stage Wedge',
      'Backline Audio Dasar (DI Box, Stands)',
      'Bebas Biaya Transport (Jabodetabek)'
    ]
  },
  {
    id: 'concert',
    name: 'Paket Concert Stage',
    power: '10.000 Watt',
    basePrice: 9500000,
    description: 'Pilihan utama untuk festival musik, konser outdoor, akbar corporate gathering, atau pameran besar.',
    capacity: '600 - 1.500 Tamu',
    includes: [
      'Full Concert Line Array Rigging System',
      '6-8 Unit High-Power Subwoofers 18"',
      'Professional Digital FOH Mixer Console',
      'Full Wireless In-Ear & Handheld Mics (Shure/Sennheiser)',
      '4-5 Pro Audio Engineers & Stage Crew',
      '6 Unit Monitor Stage Wedges & Sidefills',
      'Complete Instrument Microphone Kit',
      'Bebas Biaya Transport (Jabodetabek)'
    ]
  }
];

const ADDONS: AddOnItem[] = [
  { id: 'extra_mic', name: 'Tambahan Mic Wireless UHF', price: 150000, unit: 'Unit', iconName: 'mic' },
  { id: 'lighting', name: 'Paket Lampu Panggung (4 Par LED + Controller)', price: 1000000, unit: 'Paket', iconName: 'light' },
  { id: 'projector', name: 'Proyektor 5000 Lumens + Screen 3x4m', price: 1200000, unit: 'Paket', iconName: 'tv' },
  { id: 'stage', name: 'Stage Platform / Panggung Rendah (3x4m)', price: 1500000, unit: 'Set', iconName: 'layout' },
  { id: 'smoke', name: 'Smoke Machine / Mesin Kabut Efek', price: 400000, unit: 'Unit', iconName: 'wind' },
  { id: 'singer', name: 'Pemain Keyboard + Penyanyi Profesional', price: 2500000, unit: 'Sesi', iconName: 'music' }
];

export default function Calculator() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('standard');
  const [guestCount, setGuestCount] = useState<number>(200);
  const [eventType, setEventType] = useState<string>('Pernikahan');
  const [eventDate, setEventDate] = useState<string>('');
  const [durationHours, setDurationHours] = useState<number>(6);
  const [selectedAddons, setSelectedAddons] = useState<Record<string, number>>({});

  const activePackage = INITIAL_PACKAGES.find(p => p.id === selectedPackageId) || INITIAL_PACKAGES[1];

  // Auto recommend package based on guest size
  const handleGuestChange = (count: number) => {
    setGuestCount(count);
    if (count <= 100 && selectedPackageId !== 'lite') {
      setSelectedPackageId('lite');
    } else if (count > 100 && count <= 300 && selectedPackageId !== 'standard') {
      setSelectedPackageId('standard');
    } else if (count > 300 && count <= 600 && selectedPackageId !== 'premium') {
      setSelectedPackageId('premium');
    } else if (count > 600 && selectedPackageId !== 'concert') {
      setSelectedPackageId('concert');
    }
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => {
      const current = prev[addonId] || 0;
      if (current > 0) {
        const copy = { ...prev };
        delete copy[addonId];
        return copy;
      } else {
        return { ...prev, [addonId]: 1 };
      }
    });
  };

  const adjustAddonQty = (addonId: string, delta: number) => {
    setSelectedAddons(prev => {
      const current = prev[addonId] || 0;
      const newVal = Math.max(0, current + delta);
      if (newVal === 0) {
        const copy = { ...prev };
        delete copy[addonId];
        return copy;
      }
      return { ...prev, [addonId]: newVal };
    });
  };

  // Base price + overtime (if duration > 6 hours, Rp 250,000 per hour) + addons
  const basePrice = activePackage.basePrice as number;
  const overtimeHours = Math.max(0, durationHours - 6) as number;
  const overtimeCost = (overtimeHours * 250000) as number;
  
  const addonsCost = Object.entries(selectedAddons).reduce<number>((acc, [id, qty]) => {
    const addon = ADDONS.find(a => a.id === id);
    const itemQty = qty as number;
    return acc + (addon ? (addon.price as number) * itemQty : 0);
  }, 0);

  const totalPrice = basePrice + overtimeCost + addonsCost;

  // Format currency
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  // WhatsApp Order formulation
  const handleBookingClick = () => {
    const addonDetails = Object.entries(selectedAddons)
      .map(([id, qty]) => {
        const addon = ADDONS.find(a => a.id === id);
        const itemQty = qty as number;
        return addon ? `- ${addon.name} (${itemQty} ${addon.unit}): ${formatRupiah((addon.price as number) * itemQty)}` : '';
      })
      .filter(Boolean)
      .join('\n');

    const messageTemplate = `Halo Admin Kreasi Audio, saya ingin memesan/booking sewa sound system dengan rincian berikut:

📌 *INFORMASI EVENT*
- Jenis Acara: ${eventType}
- Perkiraan Tamu: ${guestCount} Pax
- Tanggal Acara: ${eventDate || 'Belum Ditentukan'}
- Durasi Acara: ${durationHours} Jam

🔊 *PILIHAN PAKET*
- Paket Utama: ${activePackage.name} (${activePackage.power})
- Harga Dasar Paket: ${formatRupiah(activePackage.basePrice)}

➕ *TAMBAHAN / ADD-ONS*
${addonDetails || '- Tidak ada tambahan -'}
${overtimeHours > 0 ? `- Overtime (${overtimeHours} Jam): ${formatRupiah(overtimeCost)}` : ''}

💰 *ESTIMASI TOTAL INVESTASI*
*${formatRupiah(totalPrice)}*

Mohon informasi ketersediaan jadwal dan kelanjutan proses ordernya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    window.open(`https://api.whatsapp.com/send?phone=6281234567890&text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-brand-gray rounded-3xl border-2 border-slate-800 p-6 lg:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Selections */}
        <div className="lg:col-span-7 space-y-8 text-white">
          
          {/* Section Heading */}
          <div>
            <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-2 border border-amber-500/20 animate-pulse">
              <Sparkles className="w-3 h-3 fill-amber-500/10" />
              Kalkulator Estimasi Instan
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Rancang Kebutuhan Audio Event Anda
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Sesuaikan kapasitas, jam tayang, dan alat ekstra untuk melihat biaya transparan seketika.
            </p>
          </div>

          {/* Quick Info Parameter Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-400" />
                Jumlah Estimasi Tamu: <span className="text-amber-400 font-mono text-sm">{guestCount} Pax</span>
              </label>
              <input
                type="range"
                min="30"
                max="1500"
                step="10"
                value={guestCount}
                onChange={(e) => handleGuestChange(parseInt(e.target.value))}
                className="w-full h-2 bg-brand-dark rounded-lg appearance-none cursor-pointer accent-amber-500 border border-slate-800"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>30 Pax</span>
                <span>Lite</span>
                <span>Standard</span>
                <span>Premium</span>
                <span>1500 Pax</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Music className="w-4 h-4 text-slate-400" />
                Jenis Acara / Event
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-brand-dark border-2 border-slate-800 focus:border-amber-500 focus:outline-none font-sans text-sm text-slate-200 font-medium cursor-pointer"
              >
                <option value="Pernikahan" className="bg-brand-gray">Wedding / Pernikahan</option>
                <option value="Corporate Gathering" className="bg-brand-gray">Corporate Gathering</option>
                <option value="Seminar / Webinar" className="bg-brand-gray">Seminar / Workshop</option>
                <option value="Konser Musik / Gig" className="bg-brand-gray">Konser Musik / Pensi</option>
                <option value="Ulang Tahun" className="bg-brand-gray">Ulang Tahun / Party</option>
                <option value="Arisan / Syukuran" className="bg-brand-gray">Arisan / Lamaran / Syukuran</option>
              </select>
            </div>
          </div>

          {/* Event Specific Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                Tanggal Rencana Acara
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-brand-dark border-2 border-slate-800 focus:border-amber-500 focus:outline-none font-sans text-sm text-slate-200 font-medium [color-scheme:dark]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Durasi Penggunaan Standby:</span>
                <span className="text-amber-400 font-mono text-sm">{durationHours} Jam</span>
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDurationHours(prev => Math.max(2, prev - 1))}
                  className="p-2 border-2 border-slate-700 rounded-lg hover:bg-brand-dark text-white cursor-pointer transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 text-center font-mono font-bold text-slate-300 bg-brand-dark/50 border-2 border-dashed border-slate-800 py-1.5 rounded-lg text-sm">
                  {durationHours} Jam {durationHours > 6 ? `(+${durationHours - 6} Jam Overtime)` : '(Normal)'}
                </div>
                <button
                  type="button"
                  onClick={() => setDurationHours(prev => Math.min(24, prev + 1))}
                  className="p-2 border-2 border-slate-700 rounded-lg hover:bg-brand-dark text-white cursor-pointer transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Core Package selection cards */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Pilih Paket Utama (Rekomendasi Berdasarkan Jumlah Tamu):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INITIAL_PACKAGES.map((pkg) => {
                const isSelected = pkg.id === selectedPackageId;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-150 cursor-pointer text-left relative ${
                      isSelected
                        ? 'bg-brand-dark text-white border-amber-500 shadow-[4px_4px_0px_0px_rgba(245,158,11,0.2)]'
                        : 'bg-brand-dark/40 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-brand-dark/60'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 p-1 rounded-full text-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                    <p className={`font-mono text-[10px] font-semibold uppercase ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                      Power {pkg.power}
                    </p>
                    <h4 className="font-display font-bold text-base mt-0.5">{pkg.name}</h4>
                    <p className={`text-xs mt-1.5 ${isSelected ? 'text-slate-300' : 'text-slate-450'} line-clamp-2`}>
                      {pkg.description}
                    </p>
                    <div className="flex items-baseline justify-between mt-4">
                      <span className="text-xs font-semibold font-mono opacity-80">{pkg.capacity}</span>
                      <span className={`text-sm font-bold font-mono ${isSelected ? 'text-amber-400' : 'text-white'}`}>
                        {formatRupiah(pkg.basePrice)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add-on selection list */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Pilihan Add-On Ekstra (Lampu, Panggung, Alat):
            </label>
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
              {ADDONS.map((addon) => {
                const qty = selectedAddons[addon.id] || 0;
                const isSelected = qty > 0;
                return (
                  <div
                    key={addon.id}
                    className={`flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                      isSelected
                        ? 'border-amber-500/50 bg-amber-500/5'
                        : 'border-slate-800/60 bg-brand-dark/20 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
                          isSelected ? 'bg-amber-500 border-slate-950' : 'border-slate-700 bg-brand-dark'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3] text-slate-950" />}
                      </button>
                      <div>
                        <p className="font-sans font-semibold text-xs text-slate-200">{addon.name}</p>
                        <p className="text-[10px] text-slate-500 font-mono">{formatRupiah(addon.price)} / {addon.unit}</p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="flex items-center gap-2 bg-brand-dark border-2 border-slate-800 rounded-lg px-1.5 py-0.5 text-white">
                        <button
                          type="button"
                          onClick={() => adjustAddonQty(addon.id, -1)}
                          className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono font-bold text-xs text-white min-w-[16px] text-center">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => adjustAddonQty(addon.id, 1)}
                          className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Live Bill Receipt */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-[#0A0A0C] text-white rounded-2xl border-2 border-slate-850 p-6 flex-1 flex flex-col justify-between relative overflow-hidden shadow-[4px_4px_24px_0px_rgba(0,0,0,0.4)]">
            {/* Ambient decorative grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Receipt Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-amber-400 tracking-tight">Kwitansi Estimasi</h4>
                  <p className="text-[10px] text-slate-550 font-mono uppercase mt-0.5">ID Order: AUDIO-{Math.floor(100000 + Math.random() * 900000)}</p>
                </div>
                <Volume2 className="w-8 h-8 text-amber-500 animate-pulse" />
              </div>

              {/* Event Meta Badges */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="bg-brand-gray/60 rounded-lg p-2.5 border border-slate-800">
                  <p className="text-[10px] text-slate-400 font-sans uppercase">Jenis Event</p>
                  <p className="text-xs font-bold text-white font-sans mt-0.5">{eventType}</p>
                </div>
                <div className="bg-brand-gray/60 rounded-lg p-2.5 border border-slate-800">
                  <p className="text-[10px] text-slate-400 font-sans uppercase">Kapasitas</p>
                  <p className="text-xs font-bold text-white font-sans mt-0.5">{guestCount} Pax Recommended</p>
                </div>
              </div>

              {/* Bill Details */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-sans border-b border-slate-850 pb-1.5">
                  Itemized Rincian Biaya:
                </p>

                {/* Package Base price */}
                <div className="flex justify-between text-xs sm:text-sm">
                  <div className="text-slate-300">
                    <span className="font-bold text-white">{activePackage.name}</span>
                    <span className="text-xs text-slate-500 block font-mono">Daya {activePackage.power}</span>
                  </div>
                  <span className="font-mono font-bold text-white">{formatRupiah(activePackage.basePrice)}</span>
                </div>

                {/* Overtime fee */}
                {durationHours > 6 && (
                  <div className="flex justify-between text-xs sm:text-sm">
                    <div className="text-slate-300">
                      <span>Overtime Penggunaan</span>
                      <span className="text-xs text-slate-500 block font-mono">+{durationHours - 6} Jam @Rp250k/jam</span>
                    </div>
                    <span className="font-mono font-bold text-amber-400">{formatRupiah(overtimeCost)}</span>
                  </div>
                )}

                {/* Add-ons List */}
                {Object.entries(selectedAddons).map(([id, qty]) => {
                  const addon = ADDONS.find(a => a.id === id);
                  if (!addon) return null;
                  const itemQty = qty as number;
                  return (
                    <div key={id} className="flex justify-between text-xs sm:text-sm">
                      <div className="text-slate-300">
                        <span>{addon.name}</span>
                        <span className="text-xs text-slate-500 block font-mono">{itemQty} {addon.unit} x {formatRupiah(addon.price)}</span>
                      </div>
                      <span className="font-mono font-bold text-white">{formatRupiah((addon.price as number) * itemQty)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total calculation & Booking Button */}
            <div className="relative z-10 mt-10 border-t border-slate-800 pt-5">
              <div className="flex items-baseline justify-between mb-5">
                <p className="text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">Estimasi Total Investasi:</p>
                <p className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 tracking-tight font-mono">
                  {formatRupiah(totalPrice)}
                </p>
              </div>

              {/* Terms Warning */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 flex gap-2.5 mb-5 items-start">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-[10.5px] text-slate-300 leading-relaxed font-sans">
                  Harga sudah termasuk transport Jabodetabek, instalasi rapi, bongkar-muat, dan stand-by kru professional selama acara. Tidak ada biaya siluman tambahan!
                </p>
              </div>

              {/* Dynamic WhatsApp Action */}
              <button
                type="button"
                onClick={handleBookingClick}
                className="w-full font-display font-bold text-base bg-amber-500 hover:bg-amber-400 text-slate-950 py-3.5 px-4 rounded-xl border-2 border-slate-950 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                Pesan & Hubungi via WhatsApp
              </button>
              <p className="text-[10px] text-center text-slate-500 mt-2 font-sans font-medium">
                Satu klik langsung terhubung ke Chat Operator dengan template order lengkap.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
