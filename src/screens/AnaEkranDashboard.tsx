// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Ekran (Dashboard)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaEkranDashboardProps {}

export function AnaEkranDashboard(props: AnaEkranDashboardProps) {
  return (
    <>
      {/* SideNavBar (Shared Component JSON logic) */}
      <aside className="bg-slate-900 dark:bg-[#0F172A] text-blue-600 dark:text-blue-500 text-sm font-medium Inter fixed left-0 top-0 h-screen w-64 z-50 border-r border-slate-800 no-shadow flex flex-col h-full py-6">
      {/* Header */}
      <div className="px-6 mb-8 flex items-center gap-3">
      <img alt="Şirket Logosu" className="w-8 h-8 rounded-md object-cover" data-alt="A highly detailed corporate logo featuring a sleek, minimalist geometric design in neon blue and dark slate tones. The logo represents a modern technology company specializing in operational software. The image is rendered with a high-key contrast, suitable for a dark mode interface, emphasizing professionalism and efficiency." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAg3uz9RgzQLoqbt227T621a4T_Z_ckokBdwWT--osqMlpd61nLpDc-oxVR2XVCKsAHuzSunQSscpzf6TRXWeybE1UTkVkVgQe7NcdcEjrZDwqvkclhCOmbdtGJD_DXM0cYmUsSq7exL2FvGy3O3ZGBT6RbBi4xD4DDqRKVaEv0OQ4DXLtIKYwiMjDvCjZlwi9SuGAhNF3P4rZp4OhltRze_wzVNfFfeNaEmHTGoEsJ4QzPlD_uP4pNGh8yF1T5-U-ga1kh4zkFAQ" />
      <div>
      <h2 className="text-lg font-bold text-white leading-tight">OdaRez Pro</h2>
      <span className="text-slate-400 text-xs">Kurumsal Yönetim</span>
      </div>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 space-y-1">
      {/* Active Tab: Panel */}
      <a className="bg-blue-600/10 text-blue-500 border-r-2 border-blue-500 flex items-center px-4 py-3 ml-2 rounded-l-lg cursor-pointer" href="#">
      <span className="material-symbols-outlined mr-3">dashboard</span>
                      Panel
                  </a>
      {/* Inactive Tabs */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer" href="#">
      <span className="material-symbols-outlined mr-3">meeting_room</span>
                      Odalar
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer" href="#">
      <span className="material-symbols-outlined mr-3">calendar_month</span>
                      Takvim
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer" href="#">
      <span className="material-symbols-outlined mr-3">insert_chart</span>
                      Analiz
                  </a>
      </nav>
      {/* CTA */}
      <div className="px-4 mb-4">
      <button className="w-full bg-primary-container text-on-primary-container py-2 rounded-lg font-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined text-[18px]">bolt</span>
                      Hızlı Rapor
                  </button>
      </div>
      {/* Footer Tabs */}
      <div className="mt-auto border-t border-slate-800 pt-4 space-y-1">
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer" href="#">
      <span className="material-symbols-outlined mr-3">settings</span>
                      Ayarlar
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer" href="#">
      <span className="material-symbols-outlined mr-3">help_outline</span>
                      Yardım
                  </a>
      </div>
      </aside>
      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col ml-64 min-h-screen">
      {/* TopNavBar (Shared Component JSON logic) */}
      <header className="bg-slate-900/95 backdrop-blur-sm text-blue-600 dark:text-blue-500 font-sans antialiased tracking-tight docked full-width top-0 z-50 border-b border-slate-800 shadow-sm flex justify-between items-center w-full px-6 h-16 sticky top-0">
      {/* Search on Left (Intent) */}
      <div className="flex-1 max-w-md">
      <div className="relative group">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">search</span>
      <input className="w-full bg-[#1E293B] border border-slate-700 text-on-surface rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-500 text-sm transition-all duration-200" placeholder="Oda veya rezervasyon ara..." type="text" />
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all active:scale-95 duration-150 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all active:scale-95 duration-150 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">apps</span>
      </button>
      <div className="w-px h-6 bg-slate-700 mx-2"></div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors active:scale-95 duration-150 flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Rezervasyon Ekle
                      </button>
      <img alt="Kullanıcı Profili" className="w-8 h-8 rounded-full border-2 border-slate-800 cursor-pointer hover:border-slate-600 transition-colors" data-alt="A highly detailed close-up portrait of a professional individual serving as a user profile avatar. The subject is well-lit with soft, natural lighting against a neutral dark background, fitting a modern dark mode application interface. The style is crisp, clear, and corporate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXCcTeSViwK-sKkFgn1GWhiZzCSeIfjlN-02Fb1cfhqXIBnWqAKZqhN8Ob9pDRUf_uW9dThyaIcLUbRv7IQRsYJ1Ee1AXVBI9UVyofJDwyfRmrx8JaHUrF1iVgxq8P0Nl7z_gZW0bptc8clVVd0YzC1Mi8Mdto7aWCJxSFVHZkNze-ThGNyunpxqk0OYVLK6lLvrMjCFIMQRyVQgAbjMc7CUbOqzoueI8Bax-Dfe36_BGTNQEZgafC3yrpT9mOjd9blEZifpgmiOE" />
      </div>
      </header>
      {/* Page Canvas */}
      <div className="p-margin flex-1 overflow-auto">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-lg">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-1">Bugün</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">12 Ekim Perşembe, aktif oda durumu</p>
      </div>
      <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-[#1E293B] border border-[#334155] rounded-lg p-1">
      <button className="px-3 py-1.5 text-sm font-medium rounded bg-surface-variant text-on-surface shadow-sm">Tümü</button>
      <button className="px-3 py-1.5 text-sm font-medium rounded text-slate-400 hover:text-on-surface transition-colors">Boş</button>
      <button className="px-3 py-1.5 text-sm font-medium rounded text-slate-400 hover:text-on-surface transition-colors">Dolu</button>
      </div>
      <button className="flex items-center gap-2 px-3 py-2 bg-[#1E293B] border border-[#334155] rounded-lg text-sm font-medium text-on-surface-variant hover:border-slate-500 hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined text-[18px]">group</span>
                              Kapasite
                              <span className="material-symbols-outlined text-[16px]">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-3 py-2 bg-[#1E293B] border border-[#334155] rounded-lg text-sm font-medium text-on-surface-variant hover:border-slate-500 hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined text-[18px]">domain</span>
                              Ekip
                              <span className="material-symbols-outlined text-[16px]">expand_more</span>
      </button>
      </div>
      </div>
      {/* Bento Grid Layout for Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
      {/* Quick Stats (Top Row) */}
      <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-4 gap-md">
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-md flex items-center justify-between">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Toplam Oda</p>
      <p className="font-h2 text-h2 text-on-surface">24</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
      <span className="material-symbols-outlined">meeting_room</span>
      </div>
      </div>
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-md flex items-center justify-between">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Kullanımda</p>
      <p className="font-h2 text-h2 text-on-surface">8</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
      <span className="material-symbols-outlined">group</span>
      </div>
      </div>
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-md flex items-center justify-between">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Müsait</p>
      <p className="font-h2 text-h2 text-on-surface">14</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
      <span className="material-symbols-outlined">check_circle</span>
      </div>
      </div>
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-md flex items-center justify-between">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Bakımda</p>
      <p className="font-h2 text-h2 text-on-surface">2</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
      <span className="material-symbols-outlined">build</span>
      </div>
      </div>
      </div>
      {/* Active Bookings Grid */}
      <div className="lg:col-span-8 bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden flex flex-col">
      <div className="p-md border-b border-[#334155] flex justify-between items-center bg-surface-container-low">
      <h3 className="font-h3 text-h3 text-on-surface">Aktif Rezervasyonlar</h3>
      <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">Tümünü Gör</button>
      </div>
      <div className="p-md grid grid-cols-1 md:grid-cols-2 gap-sm flex-1">
      {/* Room Card 1 */}
      <div className="border border-[#334155] rounded-lg p-sm bg-surface-container hover:border-slate-500 transition-colors group cursor-pointer relative overflow-hidden">
      {/* Status Indicator Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Bosphorus Toplantı Odası</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
      <span className="material-symbols-outlined text-[14px]">group</span> 12 Kişilik
                                          </p>
      </div>
      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/15 text-rose-400 uppercase tracking-wide">Dolu</span>
      </div>
      <div className="bg-surface p-2 rounded border border-[#334155] mt-3 pl-2">
      <div className="flex justify-between items-center mb-1">
      <p className="font-label-sm text-label-sm text-on-surface">Yönetim Kurulu Toplantısı</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">09:00 - 11:30</p>
      </div>
      <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full bg-slate-600 border border-surface flex items-center justify-center text-[10px] font-bold text-white">AA</div>
      <div className="w-6 h-6 rounded-full bg-blue-600 border border-surface flex items-center justify-center text-[10px] font-bold text-white">BK</div>
      </div>
      <p className="text-xs text-on-surface-variant">Ahmet A. tarafından rezerve edildi</p>
      </div>
      </div>
      </div>
      {/* Room Card 2 */}
      <div className="border border-[#334155] rounded-lg p-sm bg-surface-container hover:border-slate-500 transition-colors group cursor-pointer relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Galata Odası</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
      <span className="material-symbols-outlined text-[14px]">group</span> 6 Kişilik
                                          </p>
      </div>
      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 uppercase tracking-wide">Müsait</span>
      </div>
      <div className="bg-surface p-2 rounded border border-[#334155] mt-3 pl-2 flex items-center justify-center h-[60px] border-dashed">
      <button className="text-blue-400 font-label-sm text-label-sm flex items-center gap-1 hover:text-blue-300">
      <span className="material-symbols-outlined text-[16px]">add_circle</span> Hızlı Rezerve Et
                                      </button>
      </div>
      </div>
      {/* Room Card 3 */}
      <div className="border border-[#334155] rounded-lg p-sm bg-surface-container hover:border-slate-500 transition-colors group cursor-pointer relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Kız Kulesi Odası</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
      <span className="material-symbols-outlined text-[14px]">group</span> 4 Kişilik
                                          </p>
      </div>
      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/15 text-amber-400 uppercase tracking-wide">15dk Sonra</span>
      </div>
      <div className="bg-surface p-2 rounded border border-[#334155] mt-3 pl-2">
      <div className="flex justify-between items-center mb-1">
      <p className="font-label-sm text-label-sm text-on-surface opacity-50">1-1 Mülakat</p>
      <p className="font-label-sm text-label-sm text-amber-400">11:00 - 12:00</p>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-purple-600 border border-surface flex items-center justify-center text-[10px] font-bold text-white">IK</div>
      <p className="text-xs text-on-surface-variant">İnsan Kaynakları</p>
      </div>
      </div>
      </div>
      {/* Room Card 4 */}
      <div className="border border-[#334155] rounded-lg p-sm bg-surface-container hover:border-slate-500 transition-colors group cursor-pointer relative overflow-hidden opacity-50">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-500"></div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <div>
      <h4 className="font-label-md text-label-md text-on-surface line-through">Efes Odası</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
      <span className="material-symbols-outlined text-[14px]">build</span> Bakım
                                          </p>
      </div>
      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-500/15 text-slate-400 uppercase tracking-wide">Kapalı</span>
      </div>
      <div className="bg-surface p-2 rounded border border-[#334155] mt-3 pl-2 flex items-center justify-center h-[60px]">
      <p className="text-xs text-slate-400">Projeksiyon onarımı (14:00'e kadar)</p>
      </div>
      </div>
      </div>
      </div>
      {/* Timeline / Upcoming (Right Column) */}
      <div className="lg:col-span-4 bg-[#1E293B] border border-[#334155] rounded-xl flex flex-col">
      <div className="p-md border-b border-[#334155] bg-surface-container-low rounded-t-xl">
      <h3 className="font-h3 text-h3 text-on-surface mb-1">Yaklaşan Rezervasyonlarım</h3>
      <p className="text-xs text-on-surface-variant">Bugün için programınız</p>
      </div>
      <div className="p-md flex-1 overflow-y-auto">
      <div className="relative pl-4 border-l border-slate-700 space-y-6">
      {/* Timeline Item 1 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#1E293B]"></div>
      <div className="bg-surface border border-slate-700 rounded-lg p-3">
      <p className="text-xs text-blue-400 font-bold mb-1">14:00 - 15:30</p>
      <h4 className="font-label-md text-label-md text-on-surface">Ürün Geliştirme Toplantısı</h4>
      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">location_on</span> Bosphorus Odası
                                          </p>
      </div>
      </div>
      {/* Timeline Item 2 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-[#1E293B]"></div>
      <div className="bg-surface border border-slate-700 rounded-lg p-3 opacity-70 hover:opacity-100 transition-opacity">
      <p className="text-xs text-slate-400 font-bold mb-1">16:00 - 16:45</p>
      <h4 className="font-label-md text-label-md text-on-surface">Tasarım Senkronizasyonu</h4>
      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">location_on</span> Galata Odası
                                          </p>
      </div>
      </div>
      </div>
      <div className="mt-6 flex justify-center">
      <button className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
      <span className="material-symbols-outlined text-[16px]">calendar_today</span> Takvime Git
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
