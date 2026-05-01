// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profil Paneli
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ProfilPaneliProps {}

export function ProfilPaneli(props: ProfilPaneliProps) {
  return (
    <>
      {/* Blurred Background Context (Simulating the underlying app) */}
      <div aria-hidden={true} className="absolute inset-0 bg-background flex p-xl">
      <div className="w-64 h-full bg-surface-container-low rounded-xl border border-surface-container-highest opacity-50 mr-lg"></div>
      <div className="flex-1 h-full bg-surface-container-low rounded-xl border border-surface-container-highest opacity-50"></div>
      </div>
      {/* Modal Overlay Backdrop */}
      <div className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-40 transition-opacity"></div>
      {/* Side Drawer Panel */}
      <aside aria-labelledby="profile-panel-title" aria-modal="true" className="absolute top-0 right-0 h-full w-full max-w-[420px] bg-surface border-l border-outline-variant z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out transform translate-x-0" role="dialog">
      {/* Header */}
      <header className="flex items-center justify-between p-lg border-b border-surface-container-highest">
      <h2 className="font-h3 text-h3 text-on-surface" id="profile-panel-title">Profil</h2>
      <button aria-label="Kapat" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
      <span className="material-symbols-outlined text-[24px]">close</span>
      </button>
      </header>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {/* User Identity Section */}
      <section className="p-lg flex flex-col items-center text-center pb-xl border-b border-surface-container-highest/50">
      <div className="relative group cursor-pointer mb-md">
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-surface-container-highest group-hover:border-primary transition-colors">
      <img alt="Kullanıcı Profil Fotoğrafı" className="w-full h-full object-cover" data-alt="A professional corporate headshot of a person in a modern office environment. The lighting is dramatic and moody, utilizing the dark mode aesthetic with deep navy blue and slate gray tones in the background. Subtle cool blue accent lights illuminate the subject's face, conveying a sense of technological efficiency and premium quality. The overall composition is clean, minimalist, and highly polished." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqt2KL16LYwiHV1uy0Pf7vLBO2sYMB0Vgns3e9KjyWNdTof3-ZdYmg-pOcmyF90MhO6Ij8WlpNTan3kokEpbAFi9tdZiUueHXsAqsyTmRzfclYG13eq_qh5vXjae9O4LBeAFAeO6BH8P_WB6_YUCryQaZLCb9jaE4SoCkjPqJd2DvJwkIlY1hUQy_n5Lr9G7zDm3qIHPRaK_2fiGxw7CDAZy_9bSTe9xhkqvNIAefgaeb2eJQYYGmJxuG-lOUyeBl6hilQvLsjlvg" />
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-surface-container-highest border border-outline-variant rounded-full flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors shadow-sm">
      <span className="material-symbols-outlined text-[16px]">edit</span>
      </div>
      </div>
      <h1 className="font-h2 text-h2 text-on-surface tracking-tight mb-xs">Ahmet Yılmaz</h1>
      <p className="font-label-md text-label-md text-primary bg-primary/10 px-sm py-xs rounded-full inline-block mb-sm">Sistem Yöneticisi</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px] opacity-70">mail</span>
                          ahmet.yilmaz@odarez.com
                      </p>
      </section>
      {/* Account Settings Bento Grid */}
      <section className="p-lg flex flex-col gap-md">
      <h3 className="font-label-sm text-label-sm text-outline uppercase tracking-wider pl-xs">Hesap Ayarları</h3>
      {/* Card 1: Personal Info */}
      <a className="group flex items-center gap-md p-md rounded-xl bg-surface-container-low border border-surface-container-highest hover:bg-surface-container hover:border-outline-variant transition-all cursor-pointer" href="#">
      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest group-hover:border-primary/30 transition-colors">
      <span className="material-symbols-outlined text-[20px]">person</span>
      </div>
      <div className="flex-1">
      <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Kişisel Bilgiler</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Ad, iletişim ve profil detayları</p>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
      </a>
      {/* Card 2: Security */}
      <a className="group flex items-center gap-md p-md rounded-xl bg-surface-container-low border border-surface-container-highest hover:bg-surface-container hover:border-outline-variant transition-all cursor-pointer" href="#">
      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest group-hover:border-primary/30 transition-colors">
      <span className="material-symbols-outlined text-[20px]">shield_lock</span>
      </div>
      <div className="flex-1">
      <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Güvenlik ve Şifre</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">2FA ve erişim kontrolleri</p>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
      </a>
      {/* Card 3: Notifications */}
      <a className="group flex items-center gap-md p-md rounded-xl bg-surface-container-low border border-surface-container-highest hover:bg-surface-container hover:border-outline-variant transition-all cursor-pointer" href="#">
      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest group-hover:border-primary/30 transition-colors">
      <span className="material-symbols-outlined text-[20px]">notifications_active</span>
      </div>
      <div className="flex-1">
      <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Bildirim Tercihleri</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">E-posta ve uygulama içi uyarılar</p>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
      </a>
      </section>
      {/* Preferences Section */}
      <section className="px-lg pb-lg flex flex-col gap-md">
      <h3 className="font-label-sm text-label-sm text-outline uppercase tracking-wider pl-xs">Sistem Tercihleri</h3>
      <a className="group flex items-center gap-md p-md rounded-xl bg-surface-container-low border border-surface-container-highest hover:bg-surface-container hover:border-outline-variant transition-all cursor-pointer" href="#">
      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-on-surface-variant border border-surface-container-highest group-hover:border-outline-variant transition-colors">
      <span className="material-symbols-outlined text-[20px]">dark_mode</span>
      </div>
      <div className="flex-1">
      <h4 className="font-label-md text-label-md text-on-surface">Görünüm</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Karanlık Mod (Aktif)</p>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:text-on-surface transition-colors">chevron_right</span>
      </a>
      </section>
      </div>
      {/* Footer Actions */}
      <footer className="p-lg border-t border-surface-container-highest bg-surface-container-lowest/50 mt-auto">
      <button className="w-full flex items-center justify-center gap-sm px-md py-md rounded-lg bg-surface-variant border border-surface-container-highest text-error hover:bg-error-container hover:border-error-container hover:text-on-error-container transition-all focus:outline-none focus:ring-2 focus:ring-error focus:ring-opacity-50 group">
      <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">logout</span>
      <span className="font-label-md text-label-md">Çıkış Yap</span>
      </button>
      <p className="font-body-sm text-body-sm text-center text-outline mt-md">OdaRez Pro v2.4.1</p>
      </footer>
      </aside>
    </>
  );
}
