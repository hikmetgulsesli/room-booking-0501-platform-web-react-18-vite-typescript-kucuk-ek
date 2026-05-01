// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Rezervasyon Detay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, type ChangeEvent } from "react";
import type { Room, Reservation, AppActions } from "../types/domain";

interface RezervasyonDetayProps {
  reservation: Reservation;
  room: Room;
  actions: AppActions;
  searchQuery: string;
}

export function RezervasyonDetay(props: RezervasyonDetayProps) {
  const [localSearch, setLocalSearch] = useState(props.searchQuery);
  const r = props.reservation;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    props.actions.setSearch(e.target.value);
  };

  const dateStr = new Date(r.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' });

  const handleDelete = () => {
    if (confirm('Rezervasyon iptal edilecek. Emin misiniz?')) {
      props.actions.deleteReservation(r.id);
    }
  };

  return (
    <>
      {/* SideNavBar */}
      <aside className="bg-slate-900 dark:bg-[#0F172A] text-blue-600 dark:text-blue-500 text-sm font-medium Inter fixed left-0 top-0 h-screen w-64 z-50 border-r border-slate-800 no-shadow flex flex-col h-full py-6 hidden md:flex">
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white">
      <span className="material-symbols-outlined fill text-[20px]">meeting_room</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-white leading-tight">OdaRez Pro</h1>
      <p className="text-xs text-slate-400">Kurumsal Yönetim</p>
      </div>
      </div>
      <nav className="flex-1 px-2 space-y-1">
      {/* Panel */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('dashboard'); }}>
      <span className="material-symbols-outlined mr-3">dashboard</span>
                      Panel
                  </a>
      {/* Odalar */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('rooms'); }}>
      <span className="material-symbols-outlined mr-3">meeting_room</span>
                      Odalar
                  </a>
      {/* Takvim (ACTIVE) */}
      <a className="bg-blue-600/10 text-blue-500 border-r-2 border-blue-500 flex items-center px-4 py-3 ml-2 rounded-l-lg cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); }}>
      <span className="material-symbols-outlined mr-3 fill">calendar_month</span>
                      Takvim
                  </a>
      {/* Analiz */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('analytics'); }}>
      <span className="material-symbols-outlined mr-3">insert_chart</span>
                      Analiz
                  </a>
      </nav>
      <div className="px-4 mt-auto mb-4">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-semibold" onClick={() => props.actions.navigate('analytics')}>
      <span className="material-symbols-outlined text-[18px]">bolt</span>
                      Hızlı Rapor
                  </button>
      </div>
      <div className="px-2 border-t border-slate-800 pt-4 space-y-1">
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('settings'); }}>
      <span className="material-symbols-outlined mr-3">settings</span>
                      Ayarlar
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#" onClick={(e) => { e.preventDefault(); props.actions.navigate('help'); }}>
      <span className="material-symbols-outlined mr-3">help_outline</span>
                      Yardım
                  </a>
      </div>
      </aside>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-64 w-full">
      {/* TopNavBar */}
      <header className="bg-slate-900/95 backdrop-blur-sm text-blue-600 dark:text-blue-500 font-sans antialiased tracking-tight docked full-width top-0 z-50 border-b border-slate-800 shadow-sm flex justify-between items-center w-full px-6 h-16 sticky">
      <div className="flex items-center w-full max-w-md">
      <div className="relative w-full">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-1.5 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500" placeholder="Oda, toplantı veya kişi ara..." type="text" value={localSearch} onChange={handleSearch} />
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all active:scale-95 duration-150 p-2 rounded-full flex items-center justify-center" aria-label="Bildirimler">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all active:scale-95 duration-150 p-2 rounded-full flex items-center justify-center" aria-label="Uygulamalar">
      <span className="material-symbols-outlined">apps</span>
      </button>
      <button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors active:scale-95 duration-150 flex-center gap-2" onClick={() => props.actions.navigate('add-reservation')}>
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Rezervasyon Ekle
                      </button>
      <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 overflow-hidden cursor-pointer" onClick={() => props.actions.navigate('profile')}>
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A professional corporate headshot of a person in a dark suit, set against a neutral dark gray background with subtle studio lighting, conveying a modern and trustworthy professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI0T-xMfSFzhsdD69WJCzxv6hVcUURTF-Z8RgmQzcUAN7LNkFky4CiNEWEqsxBEyUpDQygiG86qba9RZ05Gs_f66rFaXWAYv4VofEshaZJHn9eygpamdT1145_SHTfHiO9bdnUgNWWKNIm9eS0Z6gkeIArGvNqxcQ6Gab3WLCi6965-YdkiKh9mmRwjZLi2RH9D7e8eSljmHonEyFh24bAjK5pR6Ql8WtNEkwtuYk6IYKmsFDKw6mp0nOUkvOzsBUejUN11FSCeEQ" />
      </div>
      </div>
      </header>
      {/* Page Content */}
      <main className="flex-1 p-lg md:p-xl w-full max-w-[1400px] mx-auto overflow-y-auto">
      {/* Breadcrumb & Header */}
      <div className="mb-lg">
      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-sm">
      <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => props.actions.navigate('calendar')}>Takvim</a>
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      <span className="text-on-surface">Rezervasyon Detayı</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-md">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-xs">{r.title}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">{r.description || 'Toplantı detayları.'}</p>
      </div>
      <div className="flex items-center gap-3">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                  Onaylandı
                              </span>
      </div>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
      {/* Left Column (Main Details & Attendees) */}
      <div className="col-span-1 lg:col-span-8 space-y-md">
      {/* Core Details Card */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg shadow-sm">
      <h2 className="font-h3 text-h3 text-on-surface mb-md">Toplantı Bilgileri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-lg gap-x-md">
      {/* Date & Time */}
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined">schedule</span>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">ZAMAN</p>
      <p className="font-body-md text-body-md text-on-surface font-medium">{dateStr}</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{r.startTime} - {r.endTime}</p>
      </div>
      </div>
      {/* Room */}
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined">meeting_room</span>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">LOKASYON</p>
      <p className="font-body-md text-body-md text-on-surface font-medium">{props.room?.name || r.roomId}</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{props.room?.floor || ''}, Kapasite: {props.room?.capacity || '-'} Kişi</p>
      </div>
      </div>
      {/* Organizer */}
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined">person</span>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">ORGANİZATÖR</p>
      <div className="flex items-center gap-2 mt-1">
      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">{r.organizer.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
      <p className="font-body-md text-body-md text-on-surface">{r.organizer}</p>
      </div>
      </div>
      </div>
      {/* Team */}
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined">group</span>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">DEPARTMAN / TAKIM</p>
      <p className="font-body-md text-body-md text-on-surface font-medium">{r.team}</p>
      </div>
      </div>
      </div>
      <div className="mt-lg pt-lg border-t border-outline-variant/30">
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-2">AÇIKLAMA NOTLARI</p>
      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                                      {r.description || 'Açıklama bulunmuyor.'}
                                  </p>
      </div>
      </div>
      {/* Attendees Card */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg shadow-sm">
      <div className="flex items-center justify-between mb-md">
      <h2 className="font-h3 text-h3 text-on-surface">Katılımcılar <span className="text-on-surface-variant font-normal">({r.attendees.length})</span></h2>
      <button className="text-primary hover:text-primary-fixed transition-colors font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">mail</span>
                                      Tümüne E-posta Gönder
                                  </button>
      </div>
      <div className="space-y-4">
      {r.attendees.map((att, idx) => (
      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors" key={att.id}>
      <div className="flex items-center gap-3">
      {att.avatar ? (
      <img alt={att.name} className="w-10 h-10 rounded-full" src={att.avatar} />
      ) : (
      <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-md text-label-md">{att.initials || att.name.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
      )}
      <div>
      <p className="font-label-md text-label-md text-on-surface">{att.name} {idx === 0 && r.organizer === att.name ? <span className="text-xs text-primary ml-2 bg-primary/10 px-2 py-0.5 rounded">Organizatör</span> : null}</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{att.role}</p>
      </div>
      </div>
      <span className={`material-symbols-outlined ${att.status === 'accepted' ? 'text-primary' : 'text-outline'}`} title={att.status === 'accepted' ? 'Kabul Etti' : 'Bekliyor'}>{att.status === 'accepted' ? 'check_circle' : 'help'}</span>
      </div>
      ))}
      </div>
      </div>
      </div>
      {/* Right Column (Actions & History) */}
      <div className="col-span-1 lg:col-span-4 space-y-md">
      {/* Quick Actions Card */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg shadow-sm">
      <h3 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Hızlı İşlemler</h3>
      <div className="space-y-3">
      <button className="w-full flex items-center justify-center gap-2 px-md py-sm rounded-lg border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md text-label-md bg-surface hover:bg-surface-container-highest" onClick={() => { props.actions.selectReservation(r.id); props.actions.navigate('edit-reservation'); }}>
      <span className="material-symbols-outlined text-[20px]">edit</span>
                                      Düzenle
                                  </button>
      <button className="w-full flex items-center justify-center gap-2 px-md py-sm rounded-lg bg-surface border border-error/50 text-error hover:bg-error hover:text-on-error transition-all font-label-md text-label-md" onClick={handleDelete}>
      <span className="material-symbols-outlined text-[20px]">cancel</span>
                                      İptal Et
                                  </button>
      </div>
      </div>
      {/* History / Status Track */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg shadow-sm">
      <h3 className="font-label-md text-label-md text-on-surface-variant mb-6 uppercase tracking-wider">İşlem Geçmişi</h3>
      <div className="relative border-l border-outline-variant/30 ml-3 space-y-6">
      {/* Log Item 1 */}
      <div className="relative pl-6">
      <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container"></span>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Bugün, 09:15</p>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Toplantı Onaylandı</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Sistem tarafından otomatik onaylandı.</p>
      </div>
      {/* Log Item 2 */}
      <div className="relative pl-6">
      <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-outline-variant ring-4 ring-surface-container"></span>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Dün, 16:42</p>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Davetiyeler Gönderildi</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">5 katılımcıya e-posta iletildi.</p>
      </div>
      {/* Log Item 3 */}
      <div className="relative pl-6">
      <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-outline-variant ring-4 ring-surface-container"></span>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Dün, 16:40</p>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Rezervasyon Oluşturuldu</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{r.organizer} tarafından oluşturuldu.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
