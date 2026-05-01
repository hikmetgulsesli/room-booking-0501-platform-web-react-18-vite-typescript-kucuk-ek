// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Rezervasyon Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface RezervasyonEkleduzenleProps {}

export function RezervasyonEkleduzenle(props: RezervasyonEkleduzenleProps) {
  return (
    <>
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {/* Modal Container */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[921px] overflow-hidden focus-within:ring-2 focus-within:ring-primary/20">
      {/* Modal Header */}
      <div className="px-lg py-md border-b border-[#334155] flex justify-between items-center bg-[#1E293B] sticky top-0 z-10">
      <div>
      <h2 className="font-h2 text-h2 text-on-surface">Rezervasyon Oluştur</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Toplantı detaylarını eksiksiz doldurun.</p>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined text-[24px]">close</span>
      </button>
      </div>
      {/* Modal Body (Scrollable) */}
      <div className="p-lg overflow-y-auto flex-1 space-y-md">
      {/* Conflict Warning Banner */}
      <div className="bg-error-container/15 border border-error/20 rounded-lg p-md flex gap-sm items-start">
      <span className="material-symbols-outlined text-error mt-0.5">warning</span>
      <div>
      <h4 className="font-label-md text-label-md text-error">Saat Çakışması Tespit Edildi</h4>
      <p className="font-body-sm text-body-sm text-error/80 mt-xs">Seçtiğiniz tarih ve saat aralığında "Büyük Toplantı Odası" için başka bir rezervasyon bulunmaktadır. Lütfen saatleri güncelleyin veya farklı bir oda seçin.</p>
      </div>
      </div>
      <form className="space-y-lg">
      {/* Section: Oda & Tarih */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Oda Seçimi */}
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Oda Seçimi <span className="text-error">*</span></label>
      <div className="relative">
      <select className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all">
      <option disabled={true} selected={true} value="">Oda Seçin</option>
      <option value="room1">Büyük Toplantı Odası (12 Kişi)</option>
      <option value="room2">Mavi Oda (6 Kişi)</option>
      <option value="room3">Sessiz Kabin 1 (2 Kişi)</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
      </div>
      </div>
      {/* Tarih */}
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Tarih <span className="text-error">*</span></label>
      <div className="relative">
      <input className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all [color-scheme:dark]" type="date" />
      </div>
      </div>
      </div>
      {/* Section: Saatler */}
      <div className="grid grid-cols-2 gap-md p-md bg-[#0F172A]/50 rounded-lg border border-[#334155]/50">
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Başlangıç Saati <span className="text-error">*</span></label>
      <input className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all [color-scheme:dark]" type="time" value="09:00" />
      </div>
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Bitiş Saati <span className="text-error">*</span></label>
      <input className="w-full bg-[#1E293B] border border-error rounded-md px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-error focus:ring-[3px] focus:ring-error/20 transition-all [color-scheme:dark]" type="time" value="10:30" />
      </div>
      </div>
      {/* Section: Detaylar */}
      <div className="space-y-md">
      {/* Toplantı Adı */}
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Toplantı Adı <span className="text-error">*</span></label>
      <input className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all" placeholder="Örn: Q3 Pazarlama Planlaması" type="text" />
      </div>
      {/* Ekip Adı */}
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Ekip Adı</label>
      <input className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all" placeholder="Örn: Pazarlama Ekibi" type="text" />
      </div>
      </div>
      </form>
      </div>
      {/* Modal Footer */}
      <div className="px-lg py-md border-t border-[#334155] bg-[#1E293B] flex justify-end gap-md mt-auto">
      <button className="px-lg py-sm rounded-md border border-[#334155] font-label-md text-label-md text-on-surface hover:bg-[#334155]/50 transition-colors">
                          İptal
                      </button>
      <button className="px-lg py-sm rounded-md bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors shadow-sm opacity-50 cursor-not-allowed">
                          Kaydet
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
