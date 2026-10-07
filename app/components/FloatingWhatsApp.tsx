
"use client";

import React, { useState } from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface FloatingWhatsAppProps {
  t: Dictionary["floatingContact"];
  onOpenQuoteModal: () => void;
}

export default function FloatingWhatsApp({
  t,
  onOpenQuoteModal,
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "+201000000000"; // Example phone or configured phone
  const whatsappUrl = `https://wa.me/${phone.replace(/\+/g, "")}?text=${encodeURIComponent("مرحباً مصنع أفاميا للأخشاب، أرغب بالحصول على استفسار حول طلب توريد B2B.")}`;

  return (
    <div className="fixed bottom-6 ltr:right-6 rtl:left-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="bg-surface p-4 shadow-2xl border border-outline-variant rounded-2xl flex flex-col gap-3 min-w-[220px] animate-scale-up">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 rounded-full transition-colors font-label-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
            <span>{t.whatsapp}</span>
          </a>

          <a
            href={`tel:${phone}`}
            className="flex items-center gap-3 p-3 bg-primary/10 text-primary hover:bg-primary/20 rounded-full transition-colors font-label-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">call</span>
            <span>{t.call}</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onOpenQuoteModal();
            }}
            className="flex items-center gap-3 p-3 bg-secondary/10 text-secondary hover:bg-secondary/20 rounded-full transition-colors font-label-md cursor-pointer text-start"
          >
            <span className="material-symbols-outlined text-[22px]">request_quote</span>
            <span>{t.quote}</span>
          </button>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Floating Button"
        className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer ring-4 ring-primary/20"
      >
        <span className="material-symbols-outlined text-[28px]">
          {isOpen ? "close" : "forum"}
        </span>
      </button>
    </div>
  );
}