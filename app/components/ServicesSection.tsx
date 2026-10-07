
import React from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface ServicesSectionProps {
  t: Dictionary["services"];
}

export default function ServicesSection({ t }: ServicesSectionProps) {
  return (
    <section className="w-full bg-surface-container-low py-gutter-3xl" id="services">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-2xl mb-gutter-xl">
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

        {/* Minimalist Industrial Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-surface-container-lowest p-8 flex flex-col justify-between shadow-sm group hover:bg-inverse-surface hover:text-surface-bright transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-fixed mb-4">
                precision_manufacturing
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-surface-bright mb-2">
                {t.s1.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-surface-container-highest leading-relaxed">
                {t.s1.desc}
              </p>
            </div>
            <div className="mt-8 font-spec-code text-spec-code text-primary group-hover:text-primary-fixed flex items-center gap-1">
              <span>{t.s1.badge}</span>
              <span className="material-symbols-outlined text-[16px] rtl:rotate-180">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-surface-container-lowest p-8 flex flex-col justify-between shadow-sm group hover:bg-inverse-surface hover:text-surface-bright transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-fixed mb-4">
                warehouse
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-surface-bright mb-2">
                {t.s2.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-surface-container-highest leading-relaxed">
                {t.s2.desc}
              </p>
            </div>
            <div className="mt-8 font-spec-code text-spec-code text-primary group-hover:text-primary-fixed flex items-center gap-1">
              <span>{t.s2.badge}</span>
              <span className="material-symbols-outlined text-[16px] rtl:rotate-180">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-surface-container-lowest p-8 flex flex-col justify-between shadow-sm group hover:bg-inverse-surface hover:text-surface-bright transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-fixed mb-4">
                forest
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-surface-bright mb-2">
                {t.s3.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-surface-container-highest leading-relaxed">
                {t.s3.desc}
              </p>
            </div>
            <div className="mt-8 font-spec-code text-spec-code text-primary group-hover:text-primary-fixed flex items-center gap-1">
              <span>{t.s3.badge}</span>
              <span className="material-symbols-outlined text-[16px] rtl:rotate-180">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-surface-container-lowest p-8 flex flex-col justify-between shadow-sm group hover:bg-inverse-surface hover:text-surface-bright transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-fixed mb-4">
                local_shipping
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-surface-bright mb-2">
                {t.s4.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-surface-container-highest leading-relaxed">
                {t.s4.desc}
              </p>
            </div>
            <div className="mt-8 font-spec-code text-spec-code text-primary group-hover:text-primary-fixed flex items-center gap-1">
              <span>{t.s4.badge}</span>
              <span className="material-symbols-outlined text-[16px] rtl:rotate-180">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Service 5 (lg:col-span-2) */}
          <div className="bg-surface-container-lowest p-8 flex flex-col justify-between shadow-sm group hover:bg-inverse-surface hover:text-surface-bright transition-all duration-300 lg:col-span-2">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-fixed mb-4">
                design_services
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-surface-bright mb-2">
                {t.s5.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-surface-container-highest leading-relaxed">
                {t.s5.desc}
              </p>
            </div>
            <div className="mt-8 font-spec-code text-spec-code text-primary group-hover:text-primary-fixed flex items-center gap-1">
              <span>{t.s5.badge}</span>
              <span className="material-symbols-outlined text-[16px] rtl:rotate-180">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}