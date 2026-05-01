// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, type ChangeEvent } from "react";
import type { AppSettings, AppActions } from "../types/domain";
import { exportData, clearStorage } from "../utils/storage";

interface AyarlarProps {
  settings: AppSettings;
  actions: AppActions;
  searchQuery: string;
}

export function Ayarlar(props: AyarlarProps) {
  const [localSearch, setLocalSearch] = useState(props.searchQuery);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    props.actions.setSearch(e.target.value);
  };

  const handleExport = () => {
    const data = exportData({
      view: 'settings',
      previousView: null,
      rooms: [],
      reservations: [],
      user: { id: '', name: '', email: '', role: '', department: '' },
      settings: props.settings,
      searchQuery: '',
      selectedReservationId: null,
      selectedRoomId: null,
      filterStatus: 'all',
      filterCapacity: null,
      filterTeam: null,
      error: null,
    });
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `odarez-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    if (confirm('Tüm veriler kalıcı olarak silinecek. Emin misiniz?')) {
      clearStorage();
      props.actions.resetData();
    }
  };

  return (
    <>
      {/* Shared Component: SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 z-50 border-r border-slate-800 flex flex-col py-6 bg-slate-900 dark:bg-[#0F172A] text-sm font-medium Inter">
      {/* Header */}
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
      <span className="material-symbols-outlined text-primary text-xl" data-weight="fill">domain</span>
      </div>
      <div>
      <h2 className="text-lg font-bold text-white tracking-tight leading-tight">OdaRez Pro</h2>
      <p className="text-slate-400 text-xs">Kurumsal Yönetim</p>
      </div>
      </div>
      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col gap-1 px-2">
      {/* Inactive Tabs */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 rounded-lg transition-colors duration-200 cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('dashboard'); }}>
      <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="dashboard">dashboard</span>
                      Panel
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 rounded-lg transition-colors duration-200 cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('rooms'); }}>
      <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="meeting_room">meeting_room</span>
                      Odalar
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 rounded-lg transition-colors duration-200 cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('calendar'); }}>
      <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="calendar_month">calendar_month</span>
                      Takvim
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 rounded-lg transition-colors duration-200 cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('analytics'); }}>
      <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="insert_chart">insert_chart</span>
                      Analiz
                  </a>
      </nav>
      {/* CTA Action */}
      <div className="px-4 mb-6">
      <button className="w-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center py-2.5 rounded-lg border border-slate-700 transition-colors duration-200 cursor-pointer text-sm font-semibold" onClick={() => props.actions.navigate('analytics')}>
      <span className="material-symbols-outlined mr-2 text-[18px]">bolt</span>
                      Hızlı Rapor
                  </button>
      </div>
      {/* Footer Navigation */}
      <div className="flex flex-col gap-1 px-2">
      {/* ACTIVE TAB: Ayarlar */}
      <a className="bg-blue-600/10 text-blue-500 border-r-2 border-blue-500 flex items-center px-4 py-3 ml-2 rounded-l-lg cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('settings'); }}>
      <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="settings" data-weight="fill">settings</span>
                      Ayarlar
                  </a>
      {/* Inactive Tab */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 rounded-lg transition-colors duration-200 cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('help'); }}>
      <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="help_outline">help_outline</span>
                      Yardım
                  </a>
      </div>
      </aside>
      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col ml-64 min-h-screen">
      {/* Shared Component: TopNavBar */}
      <header className="fixed top-0 z-40 border-b border-slate-800 shadow-sm flex justify-between items-center px-6 h-16 w-full max-w-[calc(100%-16rem)] bg-slate-900/95 backdrop-blur-sm text-blue-600 dark:text-blue-500 font-sans antialiased tracking-tight">
      {/* Left: Search Bar Area */}
      <div className="flex items-center w-96">
      <div className="relative w-full">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
      <input className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 rounded-lg pl-10 pr-4 py-1.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all placeholder:text-slate-500" placeholder="Oda veya misafir ara..." type="text" value={localSearch} onChange={handleSearch} />
      </div>
      </div>
      {/* Center: Brand Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
      <span className="text-xl font-black text-slate-50 tracking-tighter">OdaRez</span>
      </div>
      {/* Right: Actions */}
      <div className="flex items-center gap-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-1.5 px-4 rounded-lg shadow-sm transition-colors duration-150 active:scale-95 flex items-center" onClick={() => props.actions.navigate('add-reservation')}>
      <span className="material-symbols-outlined mr-1.5 text-[18px]">add</span>
                          Rezervasyon Ekle
                      </button>
      <div className="flex items-center gap-1 border-l border-slate-700 pl-4 ml-2">
      <button className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white rounded-full transition-all duration-150 active:scale-95 flex items-center justify-center" aria-label="Bildirimler">
      <span className="material-symbols-outlined text-[22px]" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white rounded-full transition-all duration-150 active:scale-95 flex items-center justify-center" aria-label="Uygulamalar">
      <span className="material-symbols-outlined text-[22px]" data-icon="apps">apps</span>
      </button>
      <div className="ml-2 w-8 h-8 rounded-full bg-slate-700 border border-slate-600 overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all" onClick={() => props.actions.navigate('profile')}>
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate manager, dramatic studio lighting, dark modern background, hyper-realistic, 8k resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfeE_NWEfA9TE4DvB97fI373O6c0HjBVG4nCjDR2Nmz0k4LWCxZ88rtTDaL-nFcC3MS-VLE7zhFpQBAXCOohVYi3i1c3igO7cQItrkG3Jpy9elnBMeYj_Up_-2spIC4rf5uTaFZW7TNq2WMRxyepnlOllylhQ4QoWvufHkEUZdGjCuwVGo3uXUU3OBfnzZ5-yBC-e-IMgNtuDm3vTrptu77Urky-7BnV4_KqIYW0KezyUBHpFKQcKCMfEWummYpmtahxuXBGsbWwc" />
      </div>
      </div>
      </div>
      </header>
      {/* Canvas / Settings Content */}
      <main className="flex-1 mt-16 p-xl max-w-5xl mx-auto w-full">
      <div className="mb-xl">
      <h1 className="font-h1 text-h1 text-on-background tracking-tight">Sistem Ayarları</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Uygulama tercihlerini ve veri dışa aktarım süreçlerini yönetin.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
      {/* Section 1: Genel */}
      <section className="bg-surface-container-high border border-outline-variant rounded-xl p-lg flex flex-col shadow-sm relative overflow-hidden group">
      {/* Subtle top highlight for depth */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-surface-tint/20 to-transparent"></div>
      <div className="flex items-center gap-md mb-margin border-b border-surface-variant pb-md">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface">tune</span>
      </div>
      <div>
      <h2 className="font-h3 text-h3 text-on-surface">Genel Seçenekler</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Arayüz ve dil yapılandırması</p>
      </div>
      </div>
      <div className="flex flex-col gap-margin flex-1">
      {/* Option: Dil */}
      <div className="flex items-center justify-between">
      <div>
      <label className="font-label-md text-label-md text-on-surface block mb-1">Arayüz Dili</label>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Sistemin ana dilini belirler.</span>
      </div>
      <div className="flex p-1 bg-surface-container-lowest border border-outline-variant rounded-lg">
      <button className={`px-4 py-1.5 font-label-sm text-label-sm rounded-md shadow-sm transition-all ${props.settings.language === 'tr' ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:text-on-surface'}`} onClick={() => props.actions.updateSettings({ language: 'tr' })}>Türkçe</button>
      <button className={`px-4 py-1.5 font-label-sm text-label-sm rounded-md transition-all ${props.settings.language === 'en' ? 'bg-secondary-container text-on-secondary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} onClick={() => props.actions.updateSettings({ language: 'en' })}>English</button>
      </div>
      </div>
      {/* Option: Dark Mode Toggle */}
      <div className="flex items-center justify-between">
      <div>
      <label className="font-label-md text-label-md text-on-surface block mb-1">Karanlık Mod (Dark Mode)</label>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Göz yorgunluğunu azaltan karanlık tema.</span>
      </div>
      {/* Toggle Switch UI */}
      <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${props.settings.darkMode ? 'bg-primary' : 'bg-slate-600'}`} onClick={() => props.actions.updateSettings({ darkMode: !props.settings.darkMode })}>
      <span className={`inline-block h-4 w-4 rounded-full bg-on-primary transition-transform ${props.settings.darkMode ? 'translate-x-6' : 'translate-x-1'}`}></span>
      </button>
      </div>
      </div>
      </section>
      {/* Section 2: Veri Yönetimi */}
      <section className="bg-surface-container-high border border-outline-variant rounded-xl p-lg flex flex-col shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-surface-tint/20 to-transparent"></div>
      <div className="flex items-center gap-md mb-margin border-b border-surface-variant pb-md">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface">database</span>
      </div>
      <div>
      <h2 className="font-h3 text-h3 text-on-surface">Veri Yönetimi</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Dışa aktarım ve tehlikeli işlemler</p>
      </div>
      </div>
      <div className="flex flex-col gap-margin flex-1">
      {/* Option: Export */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md p-md bg-surface-container-highest rounded-lg border border-outline-variant/50">
      <div>
      <label className="font-label-md text-label-md text-on-surface block mb-1">Yedekleme &amp; Aktarım</label>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Tüm rezervasyon ve ayar verilerini .json olarak indirin.</span>
      </div>
      <button className="shrink-0 bg-surface text-primary border border-outline-variant hover:bg-surface-variant hover:border-outline transition-colors font-label-md text-label-md py-2 px-4 rounded-lg flex items-center gap-2 shadow-sm" onClick={handleExport}>
      <span className="material-symbols-outlined text-[18px]">download</span>
                                      Verileri Dışa Aktar (Export JSON)
                                  </button>
      </div>
      {/* Option: Clear Data (Destructive) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md p-md bg-error-container/10 rounded-lg border border-error-container/30 mt-auto">
      <div>
      <label className="font-label-md text-label-md text-error block mb-1">Tehlikeli Bölge</label>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Sistemdeki tüm kayıtları kalıcı olarak siler. Bu işlem geri alınamaz.</span>
      </div>
      <button className="shrink-0 bg-error text-on-error hover:bg-error/90 transition-colors font-label-md text-label-md py-2 px-4 rounded-lg flex items-center gap-2 shadow-sm border border-error/50" onClick={handleClear}>
      <span className="material-symbols-outlined text-[18px]">delete_forever</span>
                                      Tüm Verileri Temizle
                                  </button>
      </div>
      </div>
      </section>
      </div>
      {/* Informational Footer */}
      <div className="mt-xl flex items-center justify-center gap-2 text-on-surface-variant opacity-70">
      <span className="material-symbols-outlined text-[16px]">info</span>
      <span className="font-body-sm text-body-sm">OdaRez Sistem Sürümü: v2.4.1-stable</span>
      </div>
      </main>
      </div>
    </>
  );
}
