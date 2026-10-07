
import React from "react";
import Image from "next/image";
import { Dictionary } from "../[lang]/dictionaries";

interface FooterProps {
  t: Dictionary["footer"];
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-gutter-3xl pb-gutter-xl">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-xl mb-gutter-2xl">
          {/* Column 1: Brand info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-gutter-md">
              <Image
                src="/logo.png"
                alt="Afamia Plywood"
                width={240}
                height={96}
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
              />
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-highest max-w-sm mb-gutter-lg leading-relaxed">
              {t.description}
            </p>
            <div className="flex items-center gap-gutter-sm">
              <a
                aria-label="Corporate LinkedIn Registry"
                className="w-10 h-10 bg-surface-container-highest/10 hover:bg-primary text-surface-bright hover:text-on-primary flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a
                aria-label="Corporate Specification Portal"
                className="w-10 h-10 bg-surface-container-highest/10 hover:bg-primary text-surface-bright hover:text-on-primary flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  corporate_fare
                </span>
              </a>
              <a
                aria-label="Direct Inquiries Mailbox"
                className="w-10 h-10 bg-surface-container-highest/10 hover:bg-primary text-surface-bright hover:text-on-primary flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
            </div>
          </div>

          {/* Column 2: Engineered Products */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-spec-code text-spec-code uppercase tracking-widest text-primary-fixed-dim mb-gutter-md">
              {t.col1Title}
            </span>
            <ul className="space-y-3 font-body-sm text-body-sm text-surface-container-highest">
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="products" href="#products-showcase">
                  {t.p1}
                </a>
              </li>
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="products" href="#products-showcase">
                  {t.p2}
                </a>
              </li>
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="products" href="#products-showcase">
                  {t.p3}
                </a>
              </li>
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="products" href="#products-showcase">
                  {t.p4}
                </a>
              </li>
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="products" href="#products-showcase">
                  {t.p5}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-spec-code text-spec-code uppercase tracking-widest text-primary-fixed-dim mb-gutter-md">
              {t.col2Title}
            </span>
            <ul className="space-y-3 font-body-sm text-body-sm text-surface-container-highest">
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="about-us" href="#about-us">
                  {t.c1}
                </a>
              </li>
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="services" href="#services">
                  {t.c2}
                </a>
              </li>
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="quote-request" href="#contact-inquiry">
                  {t.c4}
                </a>
              </li>
              <li className="hover:text-primary-fixed transition-colors">
                <a data-path="contact-us" href="#contact-inquiry">
                  {t.c5}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: HQ & Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-spec-code text-spec-code uppercase tracking-widest text-primary-fixed-dim mb-gutter-md">
              {t.col3Title}
            </span>
            <div className="space-y-3 font-body-sm text-body-sm text-surface-container-highest">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{t.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim shrink-0">
                  call
                </span>
                <span dir="ltr">+20 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim shrink-0">
                  mail
                </span>
                <span>info@example.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim shrink-0">
                  schedule
                </span>
                <span>Sun - Thu: 08:00 - 17:00 (GMT+2)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-gutter-lg flex flex-col sm:flex-row items-center justify-between gap-gutter-md font-spec-code text-spec-code text-surface-variant border-t border-surface-container-highest/10">
          <div className="text-center sm:text-start">
            {t.copyright}
          </div>
          <div className="flex items-center gap-gutter-lg">
            <a className="hover:text-primary-fixed transition-colors" href="#">
              {t.terms}
            </a>
            <a className="hover:text-primary-fixed transition-colors" href="#">
              {t.standards}
            </a>
            <a className="hover:text-primary-fixed transition-colors" href="#">
              {t.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}