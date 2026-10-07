
import React from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface WhyChooseSectionProps {
  t: Dictionary["whyChoose"];
}

export default function WhyChooseSection({ t }: WhyChooseSectionProps) {
  const items = [
    { number: "01", icon: "verified", ...t.item1 },
    { number: "02", icon: "local_shipping", ...t.item2 },
    { number: "03", icon: "support_agent", ...t.item3 },
    { number: "04", icon: "category", ...t.item4 },
    { number: "05", icon: "handshake", ...t.item5 },
  ];

  return (
    <section className="w-full bg-surface py-gutter-3xl">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-gutter-2xl">
          <span className="font-spec-code text-spec-code uppercase tracking-widest text-primary font-bold block mb-2">
            {t.tag}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            {t.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Structured Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((adv) => (
            <div
              key={adv.number}
              className="p-6 bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div>
                <div className="font-headline-lg text-headline-lg text-primary/30 mb-4 font-mono">
                  {adv.number}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                  {adv.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {adv.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center gap-1 text-primary font-spec-code text-spec-code">
                <span className="material-symbols-outlined text-[16px]">
                  {adv.icon}
                </span>
                <span>{adv.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}