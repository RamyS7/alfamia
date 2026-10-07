
import React from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface HeroSectionProps {
  t: Dictionary["hero"];
  onOpenQuoteModal?: () => void;
}

const HERO_BG_IMAGE = "/hero.jpg";

export default function HeroSection({ t, onOpenQuoteModal }: HeroSectionProps) {
  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-inverse-surface min-h-[88vh] flex items-center justify-center">
      {/* Full-bleed background from industrial warehouse image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transform duration-1000 transition-all"
        style={{ backgroundImage: `url("${HERO_BG_IMAGE}")` }}
      />
      {/* Editorial Architectural Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-inverse-surface/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 via-transparent to-inverse-surface/90" />

      {/* Content Slot Cleared Below App Shell Navigation */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-32 pb-20">
        <div className="max-w-4xl flex flex-col items-start text-start">

          {/* Headline with high typographic contrast */}
          <h1 className="font-headline-lg md:font-display-xl text-headline-lg md:text-display-xl text-surface-bright mb-6 leading-tight">
            {t.titleLine1} <br className="hidden sm:inline" />
            <span className="text-primary-fixed-dim">{t.titleLine2}</span>
          </h1>

          {/* Bilingual Subtitle */}
          <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl mb-10 leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              className="h-12 px-8 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all duration-200 rounded-full"
              href="#products-showcase"
            >
              <span>{t.productsButton}</span>
              <span className="material-symbols-outlined text-[18px] rtl:rotate-180">
                arrow_forward
              </span>
            </a>
            <a
              className="h-12 px-8 bg-surface-container-highest/20 hover:bg-surface-bright hover:text-on-surface text-surface-bright font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-sm transition-all duration-200 rounded-full"
              href="#contact-inquiry"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>{t.contactButton}</span>
            </a>
          </div>

          {/* Metric Anchors Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 w-full bg-surface-container-lowest/5 backdrop-blur-md p-6">
            <div>
              <div className="font-spec-code text-spec-code text-primary-fixed-dim uppercase tracking-wider">
                {t.metrics.metric1Title}
              </div>
              <div className="font-headline-sm text-headline-sm text-surface-bright mt-1">
                {t.metrics.metric1Sub}
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-highest mt-0.5">
                {t.metrics.metric1Desc}
              </p>
            </div>
            <div>
              <div className="font-spec-code text-spec-code text-primary-fixed-dim uppercase tracking-wider">
                {t.metrics.metric2Title}
              </div>
              <div className="font-headline-sm text-headline-sm text-surface-bright mt-1">
                {t.metrics.metric2Sub}
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-highest mt-0.5">
                {t.metrics.metric2Desc}
              </p>
            </div>
            <div>
              <div className="font-spec-code text-spec-code text-primary-fixed-dim uppercase tracking-wider">
                {t.metrics.metric3Title}
              </div>
              <div className="font-headline-sm text-headline-sm text-surface-bright mt-1">
                {t.metrics.metric3Sub}
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-highest mt-0.5">
                {t.metrics.metric3Desc}
              </p>
            </div>
            <div>
              <div className="font-spec-code text-spec-code text-primary-fixed-dim uppercase tracking-wider">
                {t.metrics.metric4Title}
              </div>
              <div className="font-headline-sm text-headline-sm text-surface-bright mt-1">
                {t.metrics.metric4Sub}
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-highest mt-0.5">
                {t.metrics.metric4Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}