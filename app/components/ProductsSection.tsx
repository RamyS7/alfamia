
import React from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface ProductsSectionProps {
  t: Dictionary["products"];
  onOpenQuoteModal?: (product: string, message: string) => void;
}

export default function ProductsSection({ t, onOpenQuoteModal }: ProductsSectionProps) {
  const handleProductQuote = (e: React.MouseEvent, productId: string) => {
    if (onOpenQuoteModal) {
      e.preventDefault();
      onOpenQuoteModal(productId, "");
    }
  };
  return (
    <section className="w-full bg-surface-container-low py-gutter-3xl" id="products-showcase">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header with Technical Metric Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-gutter-2xl pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-primary" />
              <span className="font-spec-code text-spec-code uppercase tracking-widest text-primary font-bold">
                {t.tag}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              {t.title}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Core Products Grid: Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-md">
          {/* PRODUCT 1: Plywood (Hero Product - Large 7 Cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-spec-code text-spec-code px-2.5 py-1 bg-primary text-on-primary font-bold">
                  {t.flagship}
                </span>
                <span className="font-spec-code text-spec-code text-secondary">
                  CAT: 01-PLY
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[16/9] mb-6 bg-surface-container rounded-sm shadow-inner group-hover:shadow-md transition-all">
                <img
                  alt={t.plywood.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/g2.jpg"
                />
                <div className="absolute top-3 right-3 bg-inverse-surface/90 text-surface-bright px-3 py-1 font-spec-code text-spec-code border border-white/10 backdrop-blur-sm">
                  EN 636-3 / MARINE &amp; STRUCTURAL
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                {t.plywood.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t.plywood.description}
              </p>
              {/* Technical Attributes Table */}
              <div className="grid grid-cols-3 gap-2 py-3 bg-surface-container-low px-4 mb-6 text-center font-spec-code text-spec-code border border-outline-variant/30">
                <div>
                  <span className="text-secondary block">{t.plywood.thicknessLabel}</span>
                  <span className="text-on-surface font-bold">{t.plywood.thicknessValue}</span>
                </div>
                <div>
                  <span className="text-secondary block">{t.plywood.glueLabel}</span>
                  <span className="text-on-surface font-bold">{t.plywood.glueValue}</span>
                </div>
                <div>
                  <span className="text-secondary block">{t.plywood.dimLabel}</span>
                  <span className="text-on-surface font-bold">{t.plywood.dimValue}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
              <span className="font-label-md text-label-md text-primary font-bold flex items-center gap-1">
                {t.readyForDispatch}{" "}
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </span>
              <a
                className="h-10 px-5 bg-inverse-surface hover:bg-primary text-surface-bright font-label-md text-label-md uppercase tracking-wider flex items-center justify-center transition-all cursor-pointer shadow-md hover:shadow-lg rounded-full"
                href="#contact-inquiry"
                onClick={(e) => handleProductQuote(e, "plywood")}
              >
                {t.plywood.cta}
              </a>
            </div>
          </div>

          {/* PRODUCT 2: Red Pine Lumber (5 Cols) */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30 hover:border-primary/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-spec-code text-spec-code px-2.5 py-1 bg-surface-container text-on-surface-variant font-bold rounded-full">
                  {t.lumberTag}
                </span>
                <span className="font-spec-code text-spec-code text-secondary">
                  CAT: 02-PIN
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[16/10] mb-6 bg-surface-container rounded-sm">
                <img
                  alt={t.redPine.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/redpine.jpg"
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                {t.redPine.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t.redPine.description}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between py-2 text-body-sm font-spec-code text-secondary mb-4 border-t border-b border-outline-variant/30">
                <span>{t.redPine.moisture}</span>
                <span>{t.redPine.grades}</span>
              </div>
              <a
                className="w-full h-10 bg-surface-container hover:bg-inverse-surface hover:text-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-md rounded-full"
                href="#contact-inquiry"
                onClick={(e) => handleProductQuote(e, "red-pine")}
              >
                {t.redPine.cta}
              </a>
            </div>
          </div>

          {/* PRODUCT 3: Spruce Lumber (4 Cols) */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30 hover:border-primary/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-spec-code text-spec-code px-2.5 py-1 bg-surface-container text-on-surface-variant font-bold rounded-full">
                  {t.whitewoodTag}
                </span>
                <span className="font-spec-code text-spec-code text-secondary">
                  CAT: 03-SPR
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-surface-container rounded-sm">
                <img
                  alt={t.spruce.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/spruce.jpg"
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                {t.spruce.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t.spruce.description}
              </p>
            </div>
            <a
              className="w-full h-10 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md uppercase tracking-wider flex items-center justify-center transition-all cursor-pointer rounded-full"
              href="#contact-inquiry"
              onClick={(e) => handleProductQuote(e, "spruce")}
            >
              {t.spruce.cta}
            </a>
          </div>

          {/* PRODUCT 4: Birch Logs (4 Cols) */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30 hover:border-primary/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-spec-code text-spec-code px-2.5 py-1 bg-surface-container text-on-surface-variant font-bold rounded-full">
                  {t.logsTag}
                </span>
                <span className="font-spec-code text-spec-code text-secondary">
                  CAT: 04-LOG-B
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-surface-container rounded-sm">
                <img
                  alt={t.birchLogs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/birch.jpg"
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                {t.birchLogs.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t.birchLogs.description}
              </p>
            </div>
            <a
              className="w-full h-10 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md uppercase tracking-wider flex items-center justify-center transition-all cursor-pointer rounded-full"
              href="#contact-inquiry"
              onClick={(e) => handleProductQuote(e, "birch-logs")}
            >
              {t.birchLogs.cta}
            </a>
          </div>

          {/* PRODUCT 5: Aspen Logs (4 Cols) */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30 hover:border-primary/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-spec-code text-spec-code px-2.5 py-1 bg-surface-container text-on-surface-variant font-bold rounded-full">
                  {t.industrialLogsTag}
                </span>
                <span className="font-spec-code text-spec-code text-secondary">
                  CAT: 05-LOG-A
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-surface-container rounded-sm">
                <img
                  alt={t.aspenLogs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/aspen.jpg"
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                {t.aspenLogs.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t.aspenLogs.description}
              </p>
            </div>
            <a
              className="w-full h-10 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md uppercase tracking-wider flex items-center justify-center transition-colors cursor-pointer rounded-full"
              href="#contact-inquiry"
              onClick={(e) => handleProductQuote(e, "aspen-logs")}
            >
              {t.aspenLogs.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}