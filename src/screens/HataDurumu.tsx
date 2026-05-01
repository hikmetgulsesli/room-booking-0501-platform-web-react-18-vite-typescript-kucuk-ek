// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataDurumuProps {
  error?: string | null;
  onRetry?: () => void;
  onHelp?: () => void;
}

export function HataDurumu(props: HataDurumuProps) {
  return (
    <div className="min-h-screen bg-[#11131b] flex items-center justify-center p-4">
      {/* Asymmetric Error Card */}
      <main className="w-full max-w-[900px] bg-surface-container rounded-xl border border-outline-variant overflow-hidden shadow-2xl flex flex-col md:flex-row">
      {/* Left Column: Graphic Area */}
      <div className="hidden md:block md:w-5/12 relative bg-surface-container-highest border-r border-outline-variant">
      <img alt="Error state background" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" data-alt="A dramatic, moody photograph of a dark server room with glowing red error lights indicating a critical failure. The scene is shot with a shallow depth of field, highlighting a complex network of disconnected cables in the foreground emitting a faint, fading crimson glow. The overall color palette is dominated by deep blacks, dark slate grays (#0F172A), and stark, high-contrast red accents. The aesthetic is modern, corporate, and highly technological, emphasizing a sense of sudden disruption in an otherwise pristine, sophisticated digital environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBslkk0YAh1CBoKwz2jdmR9zJk-Mo0gKnT3O8iZrTqHSJlPOPyN0tttTgjFaTvm48G2t7CqbMUeMwqzLTh_y-Zn2iabq7t46xFoLKScxYefiA-U2-YjpSzj0bSVUb9b96rjCO7-SYAL2zcdGXPy4WhY1FdrCFBnkpOB-Klz8OXPPTgzjnqqi4I0n6n6vZ-U1IAT9lUdUeHCQ3H4ZJngSZyk9J9MgGDXqa9kyqxQZdJaSVAQrD1PIB-6wVpHkdWGXdk-cVP3wfRSWQ" />
      {/* Graphic Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-surface-container via-transparent to-transparent">
      <div className="w-32 h-32 rounded-full bg-error-container/20 border border-error/30 flex items-center justify-center backdrop-blur-sm">
      <span className="material-symbols-outlined text-[72px] text-error" style={{fontVariationSettings: "'FILL' 1"}}>
                              wifi_off
                          </span>
      </div>
      </div>
      </div>
      {/* Right Column: Content Area */}
      <div className="w-full md:w-7/12 p-xl md:p-2xl flex flex-col justify-center">
      {/* Mobile Graphic (Visible only on small screens) */}
      <div className="md:hidden w-16 h-16 rounded-full bg-error-container/20 border border-error/30 flex items-center justify-center mb-lg">
      <span className="material-symbols-outlined text-[32px] text-error" style={{fontVariationSettings: "'FILL' 1"}}>
                          wifi_off
                      </span>
      </div>
      {/* Error Messaging */}
      <div className="mb-2xl">
      <div className="inline-flex items-center gap-sm px-sm py-xs rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm mb-lg border border-error/20">
      <span className="material-symbols-outlined text-[14px]">error</span>
                          Sistem Uyarısı
                      </div>
      <h1 className="font-h1 text-h1 text-on-surface mb-md">
                          Bağlantı Sorunu
                      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                          {props.error || 'Sunucu ile iletişim kurarken beklenmeyen bir hata oluştu. Veriler şu anda yüklenemiyor. Lütfen internet bağlantınızı kontrol edip kısa bir süre sonra tekrar deneyin.'}
                      </p>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-md">
      <button className="w-full sm:w-auto px-xl py-md bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm hover:bg-primary-container/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" onClick={() => props.onRetry?.()}>
      <span className="material-symbols-outlined text-[20px]">refresh</span>
                          Tekrar Dene
                      </button>
      <a className="w-full sm:w-auto px-lg py-md text-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm hover:bg-surface-container-highest transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); props.onHelp?.(); }}>
      <span className="material-symbols-outlined text-[20px]">help</span>
                          Yardım Al
                      </a>
      </div>
      {/* Technical Detail (Optional collapsable/small text for corporate feel) */}
      <div className="mt-2xl pt-lg border-t border-outline-variant">
      <p className="font-body-sm text-body-sm text-outline">
                          Hata Kodu: <span className="font-mono text-on-surface-variant">ERR_CONNECTION_TIMED_OUT</span>
      </p>
      </div>
      </div>
      </main>
    </div>
  );
}
