// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Rezervasyon Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import type { Room, Reservation, AppActions } from "../types/domain";

interface RezervasyonEkleduzenleProps {
  mode: 'add' | 'edit';
  reservation: Reservation | null;
  rooms: Room[];
  reservations: Reservation[];
  actions: AppActions;
}

export function RezervasyonEkleduzenle(props: RezervasyonEkleduzenleProps) {
  const isEdit = props.mode === 'edit' && props.reservation;
  const [roomId, setRoomId] = useState(props.reservation?.roomId || '');
  const [date, setDate] = useState(props.reservation?.date || new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState(props.reservation?.startTime || '09:00');
  const [endTime, setEndTime] = useState(props.reservation?.endTime || '10:30');
  const [title, setTitle] = useState(props.reservation?.title || '');
  const [team, setTeam] = useState(props.reservation?.team || '');

  const conflicts = useMemo(() => {
    if (!roomId || !date || !startTime || !endTime) return [];
    return props.reservations.filter(r => {
      if (isEdit && r.id === props.reservation!.id) return false;
      if (r.roomId !== roomId) return false;
      if (r.date !== date) return false;
      if (r.status === 'cancelled') return false;
      return (startTime < r.endTime && endTime > r.startTime);
    });
  }, [roomId, date, startTime, endTime, props.reservations, isEdit, props.reservation]);

  const hasConflict = conflicts.length > 0;
  const isValid = roomId && date && startTime && endTime && title && !hasConflict;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const payload: Reservation = {
      id: isEdit ? props.reservation!.id : `res-${Date.now()}`,
      roomId,
      title,
      team: team || 'Genel',
      date,
      startTime,
      endTime,
      organizer: isEdit ? props.reservation!.organizer : 'Ahmet Yılmaz',
      attendees: isEdit ? props.reservation!.attendees : [],
      description: title,
      status: 'approved',
      createdAt: isEdit ? props.reservation!.createdAt : new Date().toISOString(),
    };
    if (isEdit) {
      props.actions.updateReservation(payload);
    } else {
      props.actions.addReservation(payload);
    }
  };

  const handleCancel = () => {
    props.actions.goBack();
  };

  return (
    <>
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {/* Modal Container */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[921px] overflow-hidden focus-within:ring-2 focus-within:ring-primary/20">
      {/* Modal Header */}
      <div className="px-lg py-md border-b border-[#334155] flex justify-between items-center bg-[#1E293B] sticky top-0 z-10">
      <div>
      <h2 className="font-h2 text-h2 text-on-surface">{isEdit ? 'Rezervasyon Düzenle' : 'Rezervasyon Oluştur'}</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Toplantı detaylarını eksiksiz doldurun.</p>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors" onClick={handleCancel} aria-label="Kapat">
      <span className="material-symbols-outlined text-[24px]">close</span>
      </button>
      </div>
      {/* Modal Body (Scrollable) */}
      <div className="p-lg overflow-y-auto flex-1 space-y-md">
      {/* Conflict Warning Banner */}
      {hasConflict && (
      <div className="bg-error-container/15 border border-error/20 rounded-lg p-md flex gap-sm items-start">
      <span className="material-symbols-outlined text-error mt-0.5">warning</span>
      <div>
      <h4 className="font-label-md text-label-md text-error">Saat Çakışması Tespit Edildi</h4>
      <p className="font-body-sm text-body-sm text-error/80 mt-xs">Seçtiğiniz tarih ve saat aralığında "{props.rooms.find(r => r.id === roomId)?.name || roomId}" için başka bir rezervasyon bulunmaktadır. Lütfen saatleri güncelleyin veya farklı bir oda seçin.</p>
      </div>
      </div>
      )}
      <form className="space-y-lg" onSubmit={handleSave}>
      {/* Section: Oda & Tarih */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Oda Seçimi */}
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Oda Seçimi <span className="text-error">*</span></label>
      <div className="relative">
      <select className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all" value={roomId} onChange={(e) => setRoomId(e.target.value)} required>
      <option disabled={true} value="">Oda Seçin</option>
      {props.rooms.map(r => (
        <option key={r.id} value={r.id}>{r.name} ({r.capacity} Kişi)</option>
      ))}
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
      </div>
      </div>
      {/* Tarih */}
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Tarih <span className="text-error">*</span></label>
      <div className="relative">
      <input className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all [color-scheme:dark]" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      </div>
      </div>
      {/* Section: Saatler */}
      <div className="grid grid-cols-2 gap-md p-md bg-[#0F172A]/50 rounded-lg border border-[#334155]/50">
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Başlangıç Saati <span className="text-error">*</span></label>
      <input className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all [color-scheme:dark]" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      </div>
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Bitiş Saati <span className="text-error">*</span></label>
      <input className={`w-full bg-[#1E293B] border rounded-md px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:ring-[3px] transition-all [color-scheme:dark] ${hasConflict ? 'border-error focus:border-error focus:ring-error/20' : 'border-[#334155] focus:border-primary focus:ring-primary/20'}`} type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
      </div>
      </div>
      {/* Section: Detaylar */}
      <div className="space-y-md">
      {/* Toplantı Adı */}
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Toplantı Adı <span className="text-error">*</span></label>
      <input className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all" placeholder="Örn: Q3 Pazarlama Planlaması" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      {/* Ekip Adı */}
      <div className="space-y-xs">
      <label className="font-label-md text-label-md text-on-surface block">Ekip Adı</label>
      <input className="w-full bg-[#1E293B] border border-[#334155] rounded-md px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all" placeholder="Örn: Pazarlama Ekibi" type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
      </div>
      </div>
      </form>
      </div>
      {/* Modal Footer */}
      <div className="px-lg py-md border-t border-[#334155] bg-[#1E293B] flex justify-end gap-md mt-auto">
      <button className="px-lg py-sm rounded-md border border-[#334155] font-label-md text-label-md text-on-surface hover:bg-[#334155]/50 transition-colors" onClick={handleCancel}>
                          İptal
                      </button>
      <button className={`px-lg py-sm rounded-md font-label-md text-label-md transition-colors shadow-sm ${isValid ? 'bg-primary text-on-primary hover:bg-primary/90' : 'bg-primary/50 text-on-primary/70 cursor-not-allowed'}`} onClick={handleSave} disabled={!isValid}>
                          {isEdit ? 'Güncelle' : 'Kaydet'}
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
