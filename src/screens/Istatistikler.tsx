// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: İstatistikler
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo, type ChangeEvent } from "react";
import type { Room, Reservation, AppActions } from "../types/domain";
import { exportData } from "../utils/storage";

interface IstatistiklerProps {
  rooms: Room[];
  reservations: Reservation[];
  searchQuery: string;
  actions: AppActions;
}

export function Istatistikler(props: IstatistiklerProps) {
  const [localSearch, setLocalSearch] = useState(props.searchQuery);
  const [days, setDays] = useState(30);
  const [showRoomOptions, setShowRoomOptions] = useState(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    props.actions.setSearch(e.target.value);
  };

  const stats = useMemo(() => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    const recent = props.reservations.filter(r => new Date(r.date) >= cutoff && r.status !== 'cancelled');
    const totalRes = recent.length;
    const totalHours = recent.reduce((sum, r) => {
      const [sh, sm] = r.startTime.split(':').map(Number);
      const [eh, em] = r.endTime.split(':').map(Number);
      return sum + (eh * 60 + em - sh * 60 - sm) / 60;
    }, 0);
    const cancelled = props.reservations.filter(r => r.status === 'cancelled').length;
    const cancelRate = props.reservations.length > 0 ? ((cancelled / props.reservations.length) * 100).toFixed(1) : '0.0';
    return { totalRes, totalHours: Math.round(totalHours), cancelRate };
  }, [props.reservations, days]);

  const roomUsage = useMemo(() => {
    const map = new Map<string, { count: number; hours: number }>();
    props.rooms.forEach(r => map.set(r.id, { count: 0, hours: 0 }));
    props.reservations.filter(r => r.status !== 'cancelled').forEach(r => {
      const existing = map.get(r.roomId) || { count: 0, hours: 0 };
      const [sh, sm] = r.startTime.split(':').map(Number);
      const [eh, em] = r.endTime.split(':').map(Number);
      const h = (eh * 60 + em - sh * 60 - sm) / 60;
      map.set(r.roomId, { count: existing.count + 1, hours: existing.hours + h });
    });
    const arr = Array.from(map.entries())
      .map(([id, v]) => ({ id, name: props.rooms.find(r => r.id === id)?.name || id, ...v }))
      .sort((a, b) => b.count - a.count);
    const max = Math.max(...arr.map(a => a.count), 1);
    return arr.map(a => ({ ...a, pct: Math.round((a.count / max) * 100) }));
  }, [props.reservations, props.rooms]);

  const teamDist = useMemo(() => {
    const map = new Map<string, number>();
    props.reservations.filter(r => r.status !== 'cancelled').forEach(r => {
      map.set(r.team, (map.get(r.team) || 0) + 1);
    });
    const total = Array.from(map.values()).reduce((a, b) => a + b, 0) || 1;
    return Array.from(map.entries()).map(([team, count]) => ({ team, pct: Math.round((count / total) * 100) }));
  }, [props.reservations]);

  const handleExport = () => {
    const data = exportData({
      view: 'analytics',
      previousView: null,
      rooms: props.rooms,
      reservations: props.reservations,
      user: { id: '', name: '', email: '', role: '', department: '' },
      settings: { language: 'tr', darkMode: true },
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
    a.download = `odarez-analytics-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* SideNavBar Component (Generated from JSON) */}
      {/* Applying structural, dimensional, and aesthetic tokens from JSON exact match */}
      <aside className="fixed left-0 top-0 h-screen w-64 z-50 bg-slate-900 dark:bg-[#0F172A] border-r border-slate-800 no-shadow flex flex-col h-full py-6">
      {/* Header / Brand */}
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/30 overflow-hidden">
      <img alt="Şirket Logosu" className="w-full h-full object-cover mix-blend-overlay opacity-80" data-alt="A macro, abstract shot of a modern corporate building's glass facade reflecting a deep blue twilight sky. The image features sharp, angular geometric lines and a sleek, polished aesthetic. The lighting is cool, moody, and highly professional, fitting perfectly as a sophisticated placeholder logo for a premium SaaS application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxEfNbwHH3xSi-DUufLk0JZYrS-mbbFTy5aVvJlvDh60GNqacLqpSPlwwnhgYnq7SP7erI2R31R8fx0W5VI1NehixmG1wG8Qt1vQR9I0R8I14dIUIr6vF2f-XJqqGxa4Hom3haHdjpGhPoXGHY3v0DDOyDz7xAbPRuEcbpZHodmsjSbxv1th1X6XjlI0gLWGkZKOmgzaglNg9AzUP20Xw627xXy9wqUTsQSzmFyzL0DS4hOfuw60EOE-gVA66DmiPQhq1Y5D_w_z4" />
      </div>
      <div>
      <h1 className="text-lg font-bold text-white tracking-tight">OdaRez Pro</h1>
      <p className="text-xs font-medium text-slate-400">Kurumsal Yönetim</p>
      </div>
      </div>
      {/* Primary Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 space-y-1">
      {/* Inactive Tab 1 */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg text-sm font-medium Inter group" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('dashboard'); }}>
      <span className="material-symbols-outlined mr-3 group-hover:text-blue-500 transition-colors">dashboard</span>
                      Panel
                  </a>
      {/* Inactive Tab 2 */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg text-sm font-medium Inter group" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('rooms'); }}>
      <span className="material-symbols-outlined mr-3 group-hover:text-blue-500 transition-colors">meeting_room</span>
                      Odalar
                  </a>
      {/* Inactive Tab 3 */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg text-sm font-medium Inter group" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('calendar'); }}>
      <span className="material-symbols-outlined mr-3 group-hover:text-blue-500 transition-colors">calendar_month</span>
                      Takvim
                  </a>
      {/* Active Tab 4: Analiz (Intent maps perfectly to Statistics/Insights Dashboard) */}
      {/* Applying style_active_navigation strictly */}
      <a className="bg-blue-600/10 text-blue-500 border-r-2 border-blue-500 flex items-center px-4 py-3 ml-2 rounded-l-lg cursor-pointer text-sm font-medium Inter" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('analytics'); }}>
      <span className="material-symbols-outlined mr-3 icon-fill">insert_chart</span>
                      Analiz
                  </a>
      </nav>
      {/* Footer / Secondary Navigation */}
      <div className="px-4 mt-auto space-y-4">
      <button className="w-full flex justify-center items-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors duration-200 shadow-md" onClick={() => props.actions.navigate('analytics')}>
      <span className="material-symbols-outlined mr-2 text-sm">bolt</span>
                      Hızlı Rapor
                  </button>
      <div className="space-y-1 pt-4 border-t border-slate-800">
      <a className="text-slate-400 flex items-center px-4 py-2.5 hover:bg-slate-800/40 transition-colors duration-200 cursor-pointer rounded-lg text-sm font-medium Inter group" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('settings'); }}>
      <span className="material-symbols-outlined mr-3 text-[20px]">settings</span>
                          Ayarlar
                      </a>
      <a className="text-slate-400 flex items-center px-4 py-2.5 hover:bg-slate-800/40 transition-colors duration-200 cursor-pointer rounded-lg text-sm font-medium Inter group" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('help'); }}>
      <span className="material-symbols-outlined mr-3 text-[20px]">help_outline</span>
                          Yardım
                      </a>
      </div>
      </div>
      </aside>
      {/* Main Content Wrapper to accommodate Sidebar */}
      <div className="flex-1 flex flex-col ml-64 min-w-0 bg-background h-screen">
      {/* TopNavBar Component (Generated from JSON) */}
      {/* Applying all layout and style keys exactly */}
      <header className="docked full-width top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-sm flex justify-between items-center w-full px-6 h-16">
      {/* Left Area: Brand & Search */}
      <div className="flex items-center gap-6">
      <div className="text-xl font-black text-slate-50 tracking-tighter font-sans antialiased tracking-tight">OdaRez</div>
      {/* Search Bar (on_left as per JSON) */}
      <div className="relative hidden md:flex items-center">
      <span className="material-symbols-outlined absolute left-3 text-slate-400 text-[18px]">search</span>
      <input className="pl-10 pr-4 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-64 transition-all" placeholder="Oda, ekip veya rezervasyon ara..." type="text" value={localSearch} onChange={handleSearch} />
      </div>
      </div>
      {/* Right Area: Actions */}
      <div className="flex items-center gap-4">
      {/* Trailing Primary Action */}
      <button className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 text-blue-600 dark:text-blue-500 hover:bg-blue-600/20 rounded-full font-sans antialiased font-semibold text-sm active:scale-95 duration-150 transition-all" onClick={() => props.actions.navigate('add-reservation')}>
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Rezervasyon Ekle
                      </button>
      {/* Trailing Icon Actions */}
      <div className="flex items-center gap-1 border-l border-slate-800 pl-4 ml-2">
      <button className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all active:scale-95 duration-150 rounded-full relative" aria-label="Bildirimler">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
      </button>
      <button className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all active:scale-95 duration-150 rounded-full" aria-label="Uygulamalar">
      <span className="material-symbols-outlined">apps</span>
      </button>
      </div>
      {/* Profile Image */}
      <div className="ml-2" onClick={() => props.actions.navigate('profile')}>
      <img alt="Kullanıcı Profili" className="w-8 h-8 rounded-full border border-slate-700 cursor-pointer hover:border-slate-500 transition-colors" data-alt="A highly professional portrait photo of a man in his late 30s with a neat beard, wearing a dark navy corporate suit. The lighting is studio quality, soft and illuminating, casting subtle shadows that highlight a confident expression. The background is a muted, abstract dark slate color, complementing a dark-mode UI aesthetic perfectly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo8S6Y3h02bgvjsMEgXfxadjyfcn8SXQmPLuhw_zNPq90o_n6P4Vz9pGcWmQBF1SGTdW9KHSqrY_Fp0TSeN2Z0M3ImFpykFLE_LgusX_p0kCJAu0VjdD_uMdMdrJszoPiJeFWlM08senpVOvep0Ieg6bJhzxwb7iKMwjY_v6bkYberLJ8EA1uKYkIo4n4aKeGk_YvVLdD3TLvsc5FAeZ5M5zDlQfbt2FdBp_iD0Wf2pSMmKJ5SSkqC0jCQq5vRRmFahLALAayq6Jo" />
      </div>
      </div>
      </header>
      {/* Canvas Content: Statistics & Insights */}
      <main className="flex-1 overflow-y-auto p-lg flex flex-col gap-lg">
      {/* Page Header & Global Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md">
      <div>
      <h2 className="font-h2 text-h2 text-on-background">Analiz ve İstatistikler</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Kurumsal oda kullanım metrikleri ve ekip eğilimleri.</p>
      </div>
      {/* Date Range Picker Component */}
      <div className="flex items-center bg-surface-container rounded-lg p-1 border border-outline-variant/50 shadow-sm">
      <button className="px-md py-sm rounded-md bg-surface text-on-surface font-label-sm text-label-sm flex items-center gap-2 shadow-sm border border-outline-variant/30">
      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_today</span>
                              Son {days} Gün
                              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
      </button>
      <div className="w-px h-4 bg-outline-variant/50 mx-2"></div>
      <button className="px-sm py-sm rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors group" title="Dışa Aktar" onClick={handleExport}>
      <span className="material-symbols-outlined text-[20px]">download</span>
      </button>
      </div>
      </div>
      {/* Key Metrics Grid (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* KPI 1 */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant/30 flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex items-center justify-between z-10">
      <span className="font-label-md text-label-md text-on-surface-variant">Toplam Rezervasyon</span>
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[18px]">done_all</span>
      </div>
      </div>
      <div className="flex items-baseline gap-2 z-10 mt-1">
      <span className="font-h1 text-h1 text-on-background">{stats.totalRes}</span>
      <span className="font-label-sm text-label-sm text-emerald-400 flex items-center bg-emerald-400/10 px-1.5 py-0.5 rounded">
      <span className="material-symbols-outlined text-[14px]">trending_up</span> 12%
                              </span>
      </div>
      </div>
      {/* KPI 2 */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant/30 flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex items-center justify-between z-10">
      <span className="font-label-md text-label-md text-on-surface-variant">Toplam Kullanım Süresi</span>
      <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
      <span className="material-symbols-outlined text-[18px]">schedule</span>
      </div>
      </div>
      <div className="flex items-baseline gap-2 z-10 mt-1">
      <span className="font-h1 text-h1 text-on-background">{stats.totalHours}</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Saat</span>
      </div>
      </div>
      {/* KPI 3 */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant/30 flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-error/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex items-center justify-between z-10">
      <span className="font-label-md text-label-md text-on-surface-variant">İptal Oranı</span>
      <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center text-error">
      <span className="material-symbols-outlined text-[18px]">cancel</span>
      </div>
      </div>
      <div className="flex items-baseline gap-2 z-10 mt-1">
      <span className="font-h1 text-h1 text-on-background">%{stats.cancelRate}</span>
      <span className="font-label-sm text-label-sm text-error flex items-center bg-error/10 px-1.5 py-0.5 rounded">
      <span className="material-symbols-outlined text-[14px]">trending_up</span> 1.1%
                              </span>
      </div>
      </div>
      </div>
      {/* Bento Grid Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md h-full pb-lg">
      {/* Chart 1: En Çok Kullanılan Odalar (Spans 2 columns) */}
      <div className="lg:col-span-2 bg-surface-container rounded-xl border border-outline-variant/30 p-lg flex flex-col gap-md shadow-sm">
      <div className="flex justify-between items-center">
      <h3 className="font-h3 text-h3 text-on-surface">En Çok Kullanılan Odalar</h3>
      <div className="relative">
      <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Daha fazla" onClick={() => setShowRoomOptions(!showRoomOptions)}>
      <span className="material-symbols-outlined">more_horiz</span>
      </button>
      {showRoomOptions && (
        <div className="absolute right-0 top-8 bg-surface-container border border-outline-variant rounded-lg shadow-lg z-10 min-w-[180px] py-1">
          <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => { setShowRoomOptions(false); props.actions.navigate('rooms'); }}>
            Oda Listesine Git
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => { setShowRoomOptions(false); handleExport(); }}>
            Raporu İndir
          </button>
        </div>
      )}
      </div>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-6 mt-4">
      {roomUsage.map(room => (
      <div key={room.id}>
      <div className="flex justify-between font-label-md text-label-md mb-2">
      <span className="text-on-background">{room.name}</span>
      <span className="text-on-surface-variant">{room.count} Rez. ({Math.round(room.hours)}s)</span>
      </div>
      <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full relative" style={{width: `${room.pct}%`}}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
      </div>
      </div>
      </div>
      ))}
      {roomUsage.length === 0 && <p className="text-sm text-slate-400">Henüz veri bulunmuyor.</p>}
      </div>
      </div>
      {/* Right Column: Ortalama Süre & Ekip Dağılımı */}
      <div className="flex flex-col gap-md">
      {/* Chart 2: Ortalama Rezervasyon Süresi (Glassmorphism Card) */}
      <div className="bg-gradient-to-br from-surface-container-high to-surface-container border border-outline-variant/40 rounded-xl p-lg flex flex-col justify-between relative overflow-hidden shadow-sm">
      {/* Abstract Background element */}
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div>
      <h3 className="font-h3 text-h3 text-on-surface mb-1 z-10 relative">Ortalama Süre</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant z-10 relative">Rezervasyon başına</p>
      </div>
      <div className="mt-6 z-10 relative">
      <div className="flex items-end gap-2">
      <span className="text-[48px] font-bold leading-none tracking-tight text-on-background">{stats.totalRes > 0 ? (stats.totalHours / stats.totalRes).toFixed(1) : '0.0'}</span>
      <span className="font-label-md text-label-md text-on-surface-variant mb-2">Saat</span>
      </div>
      {/* Fake Sparkline using flex elements for minimalism */}
      <div className="flex items-end gap-1 mt-6 h-12">
      <div className="w-full bg-primary/20 rounded-t-sm h-[30%] hover:bg-primary transition-colors cursor-crosshair"></div>
      <div className="w-full bg-primary/30 rounded-t-sm h-[45%] hover:bg-primary transition-colors cursor-crosshair"></div>
      <div className="w-full bg-primary/20 rounded-t-sm h-[40%] hover:bg-primary transition-colors cursor-crosshair"></div>
      <div className="w-full bg-primary/50 rounded-t-sm h-[60%] hover:bg-primary transition-colors cursor-crosshair"></div>
      <div className="w-full bg-primary/40 rounded-t-sm h-[50%] hover:bg-primary transition-colors cursor-crosshair"></div>
      <div className="w-full bg-primary/80 rounded-t-sm h-[85%] hover:bg-primary transition-colors cursor-crosshair"></div>
      <div className="w-full bg-primary rounded-t-sm h-[100%] hover:bg-primary transition-colors cursor-crosshair relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface border border-outline-variant text-on-surface text-[10px] px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap hidden group-hover:block">Bugün</div>
      </div>
      </div>
      </div>
      </div>
      {/* Chart 3: Ekip Bazlı Dağılım */}
      <div className="bg-surface-container rounded-xl border border-outline-variant/30 p-lg flex-1 flex flex-col shadow-sm">
      <div className="flex justify-between items-center mb-6">
      <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Ekip Bazlı Dağılım</h3>
      <span className="material-symbols-outlined text-on-surface-variant text-[18px]">pie_chart</span>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-4">
      {teamDist.map((t, i) => (
      <div className="flex items-center gap-3" key={t.team}>
      <div className="w-3 h-3 rounded-full" style={{background: ['bg-primary', 'bg-tertiary', 'bg-secondary', 'bg-outline-variant'][i] || '#8d90a0'}}></div>
      <span className="font-body-md text-body-md text-on-background flex-1">{t.team}</span>
      <span className="font-label-md text-label-md text-on-surface">%{t.pct}</span>
      </div>
      ))}
      {teamDist.length === 0 && <p className="text-sm text-slate-400">Henüz veri bulunmuyor.</p>}
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
