
import React from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface TopTickerProps {
  t: Dictionary["topTicker"];
}

export default function TopTicker({ t }: TopTickerProps) {
  return (
    <div className="relative w-full overflow-hidden bg-inverse-surface text-surface-bright py-2 px-margin-mobile md:px-margin-desktop">
      {/* Background image from /hero.jpg - Direct full color without gradient mask */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url("/hero.jpg")` }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 font-spec-code text-spec-code drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] font-bold">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-primary-fixed drop-shadow">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim inline-block animate-pulse"></span>
            {t.badge}
          </span>
        </div>
        <div className="flex items-center gap-6 text-surface-container-highest">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-primary-fixed">
              verified
            </span>
            {" "}{t.verified}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-primary-fixed">
              local_shipping
            </span>
            {" "}{t.shipping}
          </span>
        </div>
      </div>
    </div>
  );
}