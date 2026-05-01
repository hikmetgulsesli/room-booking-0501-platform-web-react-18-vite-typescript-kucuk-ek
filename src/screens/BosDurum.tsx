// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppActions } from "../types/domain";

interface BosDurumProps {
  actions: AppActions;
  searchQuery: string;
}

export function BosDurum(props: BosDurumProps) {
  const [localSearch, setLocalSearch] = useState(props.searchQuery);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    props.actions.setSearch(e.target.value);
  };

  return (
    <>
      {/* SideNavBar Component */}
      <nav className="fixed left-0 top-0 h-screen w-64 z-50 bg-slate-900 dark:bg-[#0F172A] border-r border-slate-800 flex flex-col py-6">
      {/* Header */}
      <div className="px-6 mb-8 flex items-center gap-md">
      <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container fill-icon">domain</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-white leading-tight">OdaRez Pro</h1>
      <p className="font-label-sm text-label-sm text-slate-400">Kurumsal Yönetim</p>
      </div>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto space-y-sm text-sm font-medium Inter">
      <a className="bg-blue-600/10 text-blue-500 border-r-2 border-blue-500 flex items-center px-4 py-3 ml-2 rounded-l-lg cursor-pointer transition-colors duration-200" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('dashboard'); }}>
      <span className="material-symbols-outlined mr-3">dashboard</span>
                      Panel
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 ml-2 hover:bg-slate-800/40 rounded-l-lg cursor-pointer hover:bg-slate-800 transition-colors duration-200" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('rooms'); }}>
      <span className="material-symbols-outlined mr-3">meeting_room</span>
                      Odalar
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 ml-2 hover:bg-slate-800/40 rounded-l-lg cursor-pointer hover:bg-slate-800 transition-colors duration-200" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('calendar'); }}>
      <span className="material-symbols-outlined mr-3">calendar_month</span>
                      Takvim
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 ml-2 hover:bg-slate-800/40 rounded-l-lg cursor-pointer hover:bg-slate-800 transition-colors duration-200" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('analytics'); }}>
      <span className="material-symbols-outlined mr-3">insert_chart</span>
                      Analiz
                  </a>
      </div>
      {/* Footer Actions */}
      <div className="px-4 mt-auto space-y-2 text-sm font-medium Inter">
      <button className="w-full flex items-center justify-center gap-2 bg-surface-container-highest text-on-surface hover:bg-slate-800 transition-colors duration-200 py-2 rounded-lg border border-outline-variant mb-4" onClick={() => props.actions.navigate('analytics')}>
      <span className="material-symbols-outlined text-[18px]">bolt</span>
                      Hızlı Rapor
                  </button>
      <div className="border-t border-slate-800 pt-4 space-y-sm">
      <a className="text-slate-400 flex items-center px-2 py-2 hover:bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors duration-200" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('settings'); }}>
      <span className="material-symbols-outlined mr-3">settings</span>
                          Ayarlar
                      </a>
      <a className="text-slate-400 flex items-center px-2 py-2 hover:bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors duration-200" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('help'); }}>
      <span className="material-symbols-outlined mr-3">help_outline</span>
                          Yardım
                      </a>
      </div>
      </div>
      </nav>
      {/* Main Wrapper */}
      <div className="flex-1 flex flex-col ml-64 max-w-[calc(100%-16rem)] h-screen relative">
      {/* TopNavBar Component */}
      <header className="docked full-width top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-sm flex justify-between items-center w-full px-6 h-16 absolute left-0 right-0">
      {/* Search Bar (on_left) */}
      <div className="flex items-center">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
      <input className="w-full bg-surface-container border border-outline-variant rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface focus:border-primary-container focus:ring focus:ring-primary-container/20 transition-all outline-none placeholder:text-slate-500" placeholder="Rezervasyon veya oda ara..." type="text" value={localSearch} onChange={handleSearch} />
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-md font-sans antialiased tracking-tight">
      <button className="text-slate-400 hover:text-white transition-all w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-800/50 active:scale-95 duration-150" aria-label="Bildirimler">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-white transition-all w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-800/50 active:scale-95 duration-150" aria-label="Uygulamalar">
      <span className="material-symbols-outlined">apps</span>
      </button>
      <div className="w-px h-6 bg-slate-800 mx-2"></div>
      <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 duration-150 transition-all shadow-sm" onClick={() => props.actions.navigate('add-reservation')}>
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Rezervasyon Ekle
                      </button>
      <div className="ml-2 w-9 h-9 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden cursor-pointer" onClick={() => props.actions.navigate('profile')}>
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArJIpKzBSfU0iaPga7oABGiNjAAEekrq2bHBT5F0PqIWuxMbO4XQwehxXghc1fGz4nAnolq8JXb3HhmWHLZkQ5OTzwaColQttVHmxgqz9r7MIBpLP8A5iM3JVPun27UALPGXa2KHFCxkLgpOFHEVEBD5uibgRKcqZBNAmsiXi0yTeQ8MdgLeeQ4PBQcqkdlxgxzFNQ5I5O2zWLhRLtDlMq0t-uVv21Mc9PtZOrAv4iETA0_WMW6l1MVw6tShRzOZLto7UOuLH2xEg" />
      </div>
      </div>
      </header>
      {/* Main Content Canvas (Empty State) */}
      <main className="flex-1 mt-16 p-margin overflow-y-auto flex items-center justify-center">
      <div className="max-w-md w-full flex flex-col items-center text-center">
      {/* Clean Illustration */}
      <div className="w-64 h-64 mb-8 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-3xl"></div>
      <img alt="Boş Durum Görseli" className="w-full h-full object-contain drop-shadow-2xl opacity-90 relative z-10" data-alt="A highly detailed, modern 3D isometric illustration representing an empty, minimalist meeting room in a sleek corporate setting. The graphic features floating geometric shapes like a pristine dark table and abstract chairs set against a deep navy and slate backdrop. Subtle, glowing soft blue neon accents provide sophisticated illumination, emphasizing a perfectly clean, clutter-free environment. The overall mood is professional, serene, and technologically advanced, perfectly aligning with a premium dark mode UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0v2Gp0fm7R8Exv6167aItYt3FxE6ClxCGGicMvOZi6Ckq3aFJlgO2G8WZm_aldP-L0IyMX9yVoUFMgOWHWUrRGjArWX1YEW22cktM9glyB_JOU1z_SxMKrY-EhaVxpbaMaqV4-brkmXN0_Aq0PwcOC9s_1ufojCaHuNly6i5KKnaWIXr4w8kz11uRVUlyWBhpHNmbRpvveQd46Em95r3kHZGBjqiv3PZEVqC20bqC2WHHAaxAoJA-DhcKdwL8RbH3h4dQ_BuNm-A" style={{mixBlendMode: "screen", filter: "grayscale(50%) sepia(20%) hue-rotate(180deg)"}} />
      </div>
      {/* Messaging */}
      <h2 className="font-h2 text-h2 text-on-surface mb-xs tracking-tight">
                          Henüz bir rezervasyon bulunmuyor.
                      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-sm">
                          Hemen ilk oda rezervasyonunuzu yaparak başlayın. Kurumsal toplantılarınızı ve alan kullanımınızı buradan kolayca yönetebilirsiniz.
                      </p>
      {/* Large CTA Button */}
      <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-xl py-4 rounded-lg flex items-center gap-sm hover:brightness-110 active:scale-95 duration-150 transition-all shadow-lg shadow-primary-container/20 group" onClick={() => props.actions.navigate('add-reservation')}>
      <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-300">add_circle</span>
                          Yeni Rezervasyon Ekle
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
