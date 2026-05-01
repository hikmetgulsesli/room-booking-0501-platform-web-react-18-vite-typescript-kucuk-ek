// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Rezervasyon Detay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface RezervasyonDetayProps {}

export function RezervasyonDetay(props: RezervasyonDetayProps) {
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
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#">
      <span className="material-symbols-outlined mr-3">dashboard</span>
                      Panel
                  </a>
      {/* Odalar */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#">
      <span className="material-symbols-outlined mr-3">meeting_room</span>
                      Odalar
                  </a>
      {/* Takvim (ACTIVE) */}
      <a className="bg-blue-600/10 text-blue-500 border-r-2 border-blue-500 flex items-center px-4 py-3 ml-2 rounded-l-lg cursor-pointer" href="#">
      <span className="material-symbols-outlined mr-3 fill">calendar_month</span>
                      Takvim
                  </a>
      {/* Analiz */}
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#">
      <span className="material-symbols-outlined mr-3">insert_chart</span>
                      Analiz
                  </a>
      </nav>
      <div className="px-4 mt-auto mb-4">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
      <span className="material-symbols-outlined text-[18px]">bolt</span>
                      Hızlı Rapor
                  </button>
      </div>
      <div className="px-2 border-t border-slate-800 pt-4 space-y-1">
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#">
      <span className="material-symbols-outlined mr-3">settings</span>
                      Ayarlar
                  </a>
      <a className="text-slate-400 flex items-center px-4 py-3 hover:bg-slate-800/40 hover:bg-slate-800 transition-colors duration-200 cursor-pointer rounded-lg" href="#">
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
      <input className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-1.5 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500" placeholder="Oda, toplantı veya kişi ara..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all active:scale-95 duration-150 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all active:scale-95 duration-150 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">apps</span>
      </button>
      <button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors active:scale-95 duration-150 flex-center gap-2">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Rezervasyon Ekle
                      </button>
      <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 overflow-hidden cursor-pointer">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A professional corporate headshot of a person in a dark suit, set against a neutral dark gray background with subtle studio lighting, conveying a modern and trustworthy professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI0T-xMfSFzhsdD69WJCzxv6hVcUURTF-Z8RgmQzcUAN7LNkFky4CiNEWEqsxBEyUpDQygiG86qba9RZ05Gs_f66rFaXWAYv4VofEshaZJHn9eygpamdT1145_SHTfHiO9bdnUgNWWKNIm9eS0Z6gkeIArGvNqxcQ6Gab3WLCi6965-YdkiKh9mmRwjZLi2RH9D7e8eSljmHonEyFh24bAjK5pR6Ql8WtNEkwtuYk6IYKmsFDKw6mp0nOUkvOzsBUejUN11FSCeEQ" />
      </div>
      </div>
      </header>
      {/* Page Content */}
      <main className="flex-1 p-lg md:p-xl w-full max-w-[1400px] mx-auto overflow-y-auto">
      {/* Breadcrumb & Header */}
      <div className="mb-lg">
      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-sm">
      <a className="hover:text-primary transition-colors" href="#">Takvim</a>
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      <span className="text-on-surface">Rezervasyon Detayı</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-md">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-xs">Q3 Ürün Stratejisi Değerlendirmesi</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Düzenli çeyreklik değerlendirme ve planlama toplantısı.</p>
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
      <p className="font-body-md text-body-md text-on-surface font-medium">24 Ekim 2023, Perşembe</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">14:00 - 16:30 (2s 30dk)</p>
      </div>
      </div>
      {/* Room */}
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined">meeting_room</span>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">LOKASYON</p>
      <p className="font-body-md text-body-md text-on-surface font-medium">Bosphorus Toplantı Odası</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Kat 4, Kapasite: 12 Kişi</p>
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
      <img alt="Organizatör" className="w-6 h-6 rounded-full" data-alt="A small circular portrait profile picture of a young professional woman with glasses, smiling softly against a dark minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDex3drM3xoWeh7Bl-gK6JjdgqUcpBFjahcgTjlGNReFx072hoMS3zZQnlT_4mU8rW3NrTVkmiqOf6snxFor7FY4kutDqeNoPtwtRG9WMuj1tN959bNyXH7ApfuyeJMiXpxyz5b27kbwgd7wQ_bwjFI64SD8mkkhRX93wR4XNvMeo4qo-fwYX28UlfQvcEnDGZAywzUDvJfpCKuRpHnmGLQVVX96Gja_h6ZsaJQbLqWdkw5NY6pcusmK7cw6XXUU8nT0GXkLGlogRk" />
      <p className="font-body-md text-body-md text-on-surface">Ayşe Yılmaz</p>
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
      <p className="font-body-md text-body-md text-on-surface font-medium">Ürün Yönetimi</p>
      </div>
      </div>
      </div>
      <div className="mt-lg pt-lg border-t border-outline-variant/30">
      <p className="font-label-sm text-label-sm text-on-surface-variant mb-2">AÇIKLAMA NOTLARI</p>
      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                                      Q3 hedeflerinin gözden geçirilmesi, yeni özellik lansman tarihlerinin netleştirilmesi ve pazarlama bütçe dağılımının onaylanması. Lütfen toplantı öncesinde ilgili raporları Confluence üzerinden inceleyiniz. Sunum cihazı ve beyaz tahta kullanılacaktır.
                                  </p>
      </div>
      </div>
      {/* Attendees Card */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg shadow-sm">
      <div className="flex items-center justify-between mb-md">
      <h2 className="font-h3 text-h3 text-on-surface">Katılımcılar <span className="text-on-surface-variant font-normal">(5)</span></h2>
      <button className="text-primary hover:text-primary-fixed transition-colors font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">mail</span>
                                      Tümüne E-posta Gönder
                                  </button>
      </div>
      <div className="space-y-4">
      {/* Attendee 1 */}
      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors">
      <div className="flex items-center gap-3">
      <img alt="Ayşe Yılmaz" className="w-10 h-10 rounded-full" data-alt="A portrait of a female professional with dark hair, wearing a business casual outfit, against a dark gray corporate background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOck8F-DVgrLZPDLudIc9kWd0_3eWD6Q9vlcIi_clbVvvOlU0GsWm6mOCB3z5IYZk_UtcBNJ-Ocic2_GY7sh8O4KwKYLf_KY4PBkyrLKeGkuQW-y04W9-CrHjMVRhzs7Rg1dgkAablBQyyxffjn-S5K4xBaMoUormXN-zTS82bNNcVwutZPYwJPQ1WhwvuBpfnJJzmT1D86gaM22Bt5S05VpLrr5lxYhhUppnzZRDm49p5BzxsgXUGmdmlH-e2UYPhK9LElGfAM8g" />
      <div>
      <p className="font-label-md text-label-md text-on-surface">Ayşe Yılmaz <span className="text-xs text-primary ml-2 bg-primary/10 px-2 py-0.5 rounded">Organizatör</span></p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Ürün Müdürü</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-primary" title="Kabul Etti">check_circle</span>
      </div>
      {/* Attendee 2 */}
      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors">
      <div className="flex items-center gap-3">
      <img alt="Mehmet Demir" className="w-10 h-10 rounded-full" data-alt="A professional headshot of a man with short hair and a beard, wearing a dark shirt, lit with dramatic modern lighting on a dark background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0PNQ8palLE-xeO7kjF4AMRBlyXtRWYrE9LUMp1ttPJEeEuCs9mWKTm2_u2tSyJsSlDVEBdok0uYymKCWbBD1rd47Q8B6Gx3ADr3jAovthmWQbUJW-vDljn5eORrqHewZF1qLAxUQ7voaUjHDX0T5nQVUe8a5ed_vT5WXVCXLbaRodJhn1vlVdAZe87SjI6kiCA4KdOko1cGlR79_fVrRDA6qMAlCw9ormccpt0COmBjQbukKbAoecU4bZ4MN0JtaPuYZ48hC6fTI" />
      <div>
      <p className="font-label-md text-label-md text-on-surface">Mehmet Demir</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Pazarlama Direktörü</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-primary" title="Kabul Etti">check_circle</span>
      </div>
      {/* Attendee 3 */}
      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-md text-label-md">CK</div>
      <div>
      <p className="font-label-md text-label-md text-on-surface">Can Kaya</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Kıdemli Tasarımcı</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-outline" title="Bekliyor">help</span>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column (Actions & History) */}
      <div className="col-span-1 lg:col-span-4 space-y-md">
      {/* Quick Actions Card */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg shadow-sm">
      <h3 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Hızlı İşlemler</h3>
      <div className="space-y-3">
      <button className="w-full flex items-center justify-center gap-2 px-md py-sm rounded-lg border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md text-label-md bg-surface hover:bg-surface-container-highest">
      <span className="material-symbols-outlined text-[20px]">edit</span>
                                      Düzenle
                                  </button>
      <button className="w-full flex items-center justify-center gap-2 px-md py-sm rounded-lg bg-surface border border-error/50 text-error hover:bg-error hover:text-on-error transition-all font-label-md text-label-md">
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
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ayşe Yılmaz tarafından oluşturuldu.</p>
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
