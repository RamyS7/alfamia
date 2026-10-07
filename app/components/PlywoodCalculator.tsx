
"use client";

import React, { useState } from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface PlywoodCalculatorProps {
  t: Dictionary["calculator"];
  onQuoteRequest?: (info: string) => void;
}

export default function PlywoodCalculator({
  t,
  onQuoteRequest,
}: PlywoodCalculatorProps) {
  const [productType, setProductType] = useState<"plywood" | "redPine" | "spruce" | "birchLogs">("plywood");
  const [thickness, setThickness] = useState<number>(18);
  const [length, setLength] = useState<number>(2440);
  const [width, setWidth] = useState<number>(1220);
  const [quantity, setQuantity] = useState<number>(100);

  // Volume in cubic meters = (l * w * t / 10^9) * qty
  const volumeM3 = ((length * width * thickness) / 1_000_000_000) * quantity;
  
  // Density approximate: Plywood ~ 680kg/m3, RedPine ~ 550kg/m3, Spruce ~ 470kg/m3, Logs ~ 750kg/m3
  const densityMap = {
    plywood: 680,
    redPine: 550,
    spruce: 470,
    birchLogs: 750,
  };
  
  const estWeightKg = volumeM3 * densityMap[productType];
  const estPallets = Math.ceil(quantity / 50); // approx 50 sheets per pallet

  const handleRequestQuote = () => {
    const infoText = `طلب بناءً على الحاسبة: ${t[productType]} | المقاس: ${thickness}mm x ${width}mm x ${length}mm | الكمية: ${quantity} قطعة | الحجم: ${volumeM3.toFixed(2)} م³`;
    if (onQuoteRequest) {
      onQuoteRequest(infoText);
    } else {
      const contactSection = document.getElementById("contact-inquiry");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        const messageInput = document.getElementById("contact-message") as HTMLTextAreaElement;
        if (messageInput) {
          messageInput.value = infoText;
        }
      }
    }
  };

  return (
    <section className="w-full bg-surface-container-low py-16 border-y border-outline-variant/30" id="calculator">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-spec-code text-spec-code text-primary uppercase font-bold tracking-widest block mb-2">
            {t.tag}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            {t.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Controls */}
          <div className="lg:col-span-7 bg-surface p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-2 font-semibold">
                  {t.productType}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setProductType("plywood");
                      setThickness(18);
                      setLength(2440);
                      setWidth(1220);
                    }}
                    className={`py-3 px-3 text-xs font-label-md transition-colors text-center cursor-pointer ${
                      productType === "plywood"
                        ? "bg-primary text-on-primary font-bold shadow-sm"
                        : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {t.plywood}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProductType("redPine");
                      setThickness(50);
                      setLength(4000);
                      setWidth(150);
                    }}
                    className={`py-3 px-3 text-xs font-label-md transition-colors text-center cursor-pointer ${
                      productType === "redPine"
                        ? "bg-primary text-on-primary font-bold shadow-sm"
                        : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {t.redPine}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProductType("spruce");
                      setThickness(25);
                      setLength(3000);
                      setWidth(100);
                    }}
                    className={`py-3 px-3 text-xs font-label-md transition-colors text-center cursor-pointer ${
                      productType === "spruce"
                        ? "bg-primary text-on-primary font-bold shadow-sm"
                        : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {t.spruce}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProductType("birchLogs");
                      setThickness(300);
                      setLength(2700);
                      setWidth(300);
                    }}
                    className={`py-3 px-3 text-xs font-label-md transition-colors text-center cursor-pointer ${
                      productType === "birchLogs"
                        ? "bg-primary text-on-primary font-bold shadow-sm"
                        : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {t.birchLogs}
                  </button>
                </div>
              </div>

              {/* Dimensions Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                    {t.thickness}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={thickness}
                    onChange={(e) => setThickness(Number(e.target.value) || 1)}
                    className="w-full h-12 px-4 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-md outline-none"
                  />
                </div>
                <div>
                  <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                    {t.width}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value) || 1)}
                    className="w-full h-12 px-4 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-md outline-none"
                  />
                </div>
                <div>
                  <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                    {t.length}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value) || 1)}
                    className="w-full h-12 px-4 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-md outline-none"
                  />
                </div>
              </div>

              {/* Quantity Input Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-spec-code text-spec-code uppercase text-on-surface-variant">
                    {t.quantity}
                  </label>
                  <span className="font-headline-sm text-primary font-bold">
                    {quantity}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="5000"
                  step="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-surface-container-high rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-primary text-on-primary p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="font-spec-code text-spec-code uppercase tracking-widest text-secondary-fixed block mb-4 font-bold">
                {t.calcResult}
              </span>

              <div className="space-y-6">
                <div className="border-b border-on-primary/20 pb-4">
                  <span className="font-body-sm text-on-primary/80 block uppercase text-xs">
                    {t.volumeM3}
                  </span>
                  <span className="font-headline-lg text-3xl font-black text-white mt-1 block">
                    {volumeM3.toFixed(3)} <span className="text-lg font-normal">m³</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 border-b border-on-primary/20 pb-4">
                  <div>
                    <span className="font-body-sm text-on-primary/80 block uppercase text-xs">
                      {t.estWeight}
                    </span>
                    <span className="font-headline-md text-xl font-bold text-white mt-1 block">
                      {estWeightKg >= 1000 ? `${(estWeightKg / 1000).toFixed(2)} Ton` : `${Math.round(estWeightKg)} kg`}
                    </span>
                  </div>
                  <div>
                    <span className="font-body-sm text-on-primary/80 block uppercase text-xs">
                      {t.estPallets}
                    </span>
                    <span className="font-headline-md text-xl font-bold text-white mt-1 block">
                      ~ {estPallets}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button
                type="button"
                onClick={handleRequestQuote}
                className="w-full py-4 bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-md uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.98] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">calculate</span>
                <span>{t.requestQuoteBtn}</span>
              </button>
              <p className="text-[11px] text-on-primary/70 leading-relaxed italic">
                {t.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}