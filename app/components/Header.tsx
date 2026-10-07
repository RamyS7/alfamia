
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dictionary } from "../[lang]/dictionaries";

interface HeaderProps {
  currentLang: "ar" | "en";
  t: Dictionary["nav"];
}

export default function Header({ currentLang, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [switchingTo, setSwitchingTo] = useState<"ar" | "en" | null>(null);
  const savedScrollRef = useRef(0);
  const guardRafRef = useRef(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => () => cancelAnimationFrame(guardRafRef.current), []);

  useEffect(() => {
    setSwitchingTo(null);
  }, [currentLang]);

  const switchLanguage = (targetLang: "ar" | "en") => {
    if (targetLang === currentLang || switchingTo) return;
    setSwitchingTo(targetLang);
    const newPath = pathname ? pathname.replace(`/${currentLang}`, `/${targetLang}`) : `/${targetLang}`;
    // تبديل اللغة يقلب اتجاه الصفحة ويعيد بناءها، فيُصفَّر التمرير حتى مع scroll:false —
    // نحفظ الموضع ونعيده خلال نافذة قصيرة حتى يستقر التخطيط الجديد، ونترك المستخدم يلغيها بلمسه
    const savedY = window.scrollY;
    if (savedY > 0) {
      savedScrollRef.current = savedY;
      const cancelGuard = () => {
        savedScrollRef.current = 0;
        cancelAnimationFrame(guardRafRef.current);
        window.removeEventListener("wheel", cancelGuard);
        window.removeEventListener("touchstart", cancelGuard);
      };
      window.addEventListener("wheel", cancelGuard, { once: true, passive: true });
      window.addEventListener("touchstart", cancelGuard, { once: true, passive: true });
      const start = performance.now();
      const guard = () => {
        if (savedScrollRef.current === 0) {
          window.removeEventListener("wheel", cancelGuard);
          window.removeEventListener("touchstart", cancelGuard);
          return;
        }
        if (Math.abs(window.scrollY - savedScrollRef.current) > 1) {
          window.scrollTo(0, savedScrollRef.current);
        }
        if (performance.now() - start < 1200) {
          guardRafRef.current = requestAnimationFrame(guard);
        } else {
          cancelGuard();
        }
      };
      guardRafRef.current = requestAnimationFrame(guard);
    }
    router.push(newPath, { scroll: false });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* تقسيم الهدر: الشعار — القائمة في المنتصف — اللغة والتواصل، بمناطق جانبية متساوية لتوسيط القائمة */}
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center gap-gutter-md">
        {/* Brand Logo */}
        <div className="flex-1 flex items-center">
          <Link
            className="flex items-center gap-3 group"
            data-path="home"
            href={`/${currentLang}`}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/${currentLang}`;
            }}
          >
            <Image
              src="/logo.png"
              alt={`${t.brandName} - ${t.brandSub}`}
              width={220}
              height={88}
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105 duration-300 drop-shadow-sm"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-gutter-lg" data-active-classes="text-primary font-bold">
          <a
            className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-2"
            data-path="home"
            href="#top"
            // preventDefault حتى يعمل التمرير لأعلى في كل ضغطة — anchor عادي لا يفعل شيئًا إذا لم يتغير الـ hash
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {t.home}
          </a>
          <a
            className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-2"
            data-path="about-us"
            href="#about-us"
          >
            {t.about}
          </a>
          <a
            className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-2"
            data-path="products"
            href="#products-showcase"
          >
            {t.products}
          </a>
          <a
            className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-2"
            data-path="services"
            href="#services"
          >
            {t.services}
          </a>
          <a
            className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-2"
            data-path="contact-us"
            href="#contact-inquiry"
          >
            {t.contact}
          </a>
        </nav>

        {/* Language switcher & CTA */}
        <div className="flex-1 flex items-center justify-end gap-gutter-sm sm:gap-gutter-md">
          {/* AR / EN Toggle — segmented pill with sliding indicator */}
          <div
            role="group"
            aria-label="Language switcher"
            className={`relative flex items-center rounded-full bg-surface-container-low border border-outline-variant p-1 ${
              switchingTo ? "pointer-events-none" : ""
            }`}
          >
            {/* Sliding active indicator: only "en" shifts it one slot; that state always runs in LTR, so the physical transform is direction-safe */}
            <span
              aria-hidden="true"
              className={`absolute inset-y-1 start-1 w-12 rounded-full bg-primary shadow-sm transition-transform duration-300 ease-out ${
                currentLang === "en" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              aria-label="التبديل إلى العربية"
              aria-pressed={currentLang === "ar"}
              aria-busy={switchingTo === "ar"}
              onClick={() => switchLanguage("ar")}
              className={`relative z-10 w-12 py-1 text-center font-label-md text-label-md font-semibold transition-colors duration-300 cursor-pointer ${
                currentLang === "ar"
                  ? "text-on-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {switchingTo === "ar" ? (
                <span className="material-symbols-outlined inline-block text-base animate-spin align-middle">
                  progress_activity
                </span>
              ) : (
                "عربي"
              )}
            </button>
            <button
              type="button"
              aria-label="Switch to English"
              aria-pressed={currentLang === "en"}
              aria-busy={switchingTo === "en"}
              onClick={() => switchLanguage("en")}
              className={`relative z-10 w-12 py-1 text-center font-label-md text-label-md font-semibold transition-colors duration-300 cursor-pointer ${
                currentLang === "en"
                  ? "text-on-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {switchingTo === "en" ? (
                <span className="material-symbols-outlined inline-block text-base animate-spin align-middle">
                  progress_activity
                </span>
              ) : (
                "EN"
              )}
            </button>
          </div>

          {/* Contact Button */}
          <a
            className="hidden sm:inline-flex items-center justify-center bg-inverse-surface hover:bg-primary-container text-surface-bright hover:text-on-primary-container px-gutter-md h-12 font-label-md text-label-md uppercase tracking-wider transition-colors cursor-pointer rounded-full shadow-sm hover:shadow-md"
            data-path="contact-us"
            href="#contact-inquiry"
          >
            {t.contact}
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="xl:hidden p-2 text-on-surface hover:text-primary transition-colors rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface border-t border-surface-container-high px-margin-mobile py-4 space-y-3 shadow-lg">
          <a
            className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary py-2"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {t.home}
          </a>
          <a
            className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary py-2"
            href="#about-us"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.about}
          </a>
          <a
            className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary py-2"
            href="#products-showcase"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.products}
          </a>
          <a
            className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary py-2"
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.services}
          </a>
          <a
            className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary py-2"
            href="#contact-inquiry"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.contact}
          </a>
          <a
            className="inline-flex w-full items-center justify-center bg-inverse-surface hover:bg-primary-container text-surface-bright hover:text-on-primary-container px-gutter-md h-12 font-label-md text-label-md uppercase tracking-wider transition-colors mt-2 cursor-pointer rounded-full"
            href="#contact-inquiry"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.contact}
          </a>
        </div>
      )}
    </header>
  );
}