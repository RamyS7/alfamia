
import React from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface AboutSectionProps {
  t: Dictionary["about"];
}

const ABOUT_IMG = "/g4.jpg";

export default function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="w-full bg-surface py-gutter-3xl" id="about-us">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          {/* Imagery Panel */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-surface-container shadow-2xl overflow-hidden aspect-[4/3] group">
              <img
                alt={t.specTitle}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                src={ABOUT_IMG}
              />
              {/* Inset Floating Spec Plate */}
              <div className="absolute bottom-4 right-4 left-4 bg-inverse-surface/95 text-surface-bright p-5 backdrop-blur-md flex items-center justify-between shadow-xl">
                <div>
                  <span className="font-spec-code text-spec-code text-primary-fixed block uppercase">
                    {t.specBadge}
                  </span>
                  <span className="font-headline-sm text-headline-sm block mt-1">
                    {t.specTitle}
                  </span>
                  <span className="font-body-sm text-body-sm text-surface-container-highest">
                    {t.specDesc}
                  </span>
                </div>
                <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">
                  verified
                </span>
              </div>
            </div>
            {/* Monolith Background accent plate */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 -z-10 hidden md:block" />
          </div>

          {/* Deep Corporate Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col items-start text-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-1 bg-primary" />
              <span className="font-spec-code text-spec-code uppercase tracking-widest text-primary font-bold">
                {t.tag}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 leading-tight">
              {t.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-4 leading-relaxed">
              <strong className="text-on-surface font-semibold">{t.p1Bold}</strong>{" "}
              {t.p1Text}
            </p>
            <p className="font-body-md text-body-md text-secondary mb-8 leading-relaxed">
              {t.p2}
            </p>

            {/* 4 Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-5 bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 bg-primary/15 text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[22px]">
                    inventory_2
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  {t.values.v1Title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {t.values.v1Desc}
                </p>
              </div>

              <div className="p-5 bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 bg-primary/15 text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[22px]">
                    cached
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  {t.values.v2Title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {t.values.v2Desc}
                </p>
              </div>

              <div className="p-5 bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 bg-primary/15 text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[22px]">
                    handshake
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  {t.values.v3Title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {t.values.v3Desc}
                </p>
              </div>

              <div className="p-5 bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 bg-primary/15 text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[22px]">
                    hub
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  {t.values.v4Title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {t.values.v4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}