
import React from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface CTAStripProps {
  t: Dictionary["cta"];
  onOpenQuoteModal?: () => void;
}

export default function CTAStrip({ t, onOpenQuoteModal }: CTAStripProps) {
  const handleQuoteClick = (e: React.MouseEvent) => {
    if (onOpenQuoteModal) {
      e.preventDefault();
      onOpenQuoteModal();
    }
  };

  return (
    <section className="w-full bg-inverse-surface text-surface-bright py-gutter-3xl relative overflow-hidden">
      {/* Subtle architectural pattern line background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#e5b877_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
        <div className="bg-primary-container/20 p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="max-w-2xl text-start">
            <span className="font-spec-code text-spec-code uppercase tracking-widest text-primary-fixed-dim block mb-3">
              {t.tag}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface-bright mb-4 leading-snug">
              {t.title}
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
              {t.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer rounded-full"
              href="#contact-inquiry"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>{t.contactBtn}</span>
            </a>
            <a
              className="w-full sm:w-auto h-12 px-8 bg-surface-bright hover:bg-primary-fixed text-on-surface font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-full"
              href="#contact-inquiry"
              onClick={handleQuoteClick}
            >
              <span className="material-symbols-outlined text-[18px]">
                request_quote
              </span>
              <span>{t.quoteBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}