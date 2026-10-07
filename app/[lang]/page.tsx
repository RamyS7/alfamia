
"use client";

import React, { useState, use } from "react";
import Header from "../components/Header";
import TopTicker from "../components/TopTicker";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import WhyChooseSection from "../components/WhyChooseSection";
import ServicesSection from "../components/ServicesSection";
import CTAStrip from "../components/CTAStrip";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import QuickQuoteModal from "../components/QuickQuoteModal";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { getDictionary, Dictionary } from "./dictionaries";

export default function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  const validLang = lang === "en" ? "en" : "ar";
  const [t, setT] = useState<Dictionary | null>(null);

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState("");
  const [quoteInitialMessage, setQuoteInitialMessage] = useState("");

  React.useEffect(() => {
    getDictionary(validLang).then((res) => setT(res));
  }, [validLang]);

  if (!t) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="flex items-center gap-3 text-primary">
          <span className="material-symbols-outlined text-[32px] animate-spin">refresh</span>
          <span className="font-headline-sm text-headline-sm">AFAMIA...</span>
        </div>
      </div>
    );
  }

  const handleOpenQuote = (product = "", message = "") => {
    setQuoteInitialProduct(product);
    setQuoteInitialMessage(message);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Fixed Header */}
      <Header currentLang={validLang} t={t.nav} />

      {/* Main Container */}
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full" id="root-portal">
          <TopTicker t={t.topTicker} />

          {/* 2. Hero Section */}
          <HeroSection t={t.hero} onOpenQuoteModal={() => handleOpenQuote()} />

          {/* 3. Corporate Overview (About Us) */}
          <AboutSection t={t.about} />

          {/* 4. Product Showcase Bento Grid */}
          <ProductsSection t={t.products} onOpenQuoteModal={handleOpenQuote} />

          {/* 5. Why Choose Afamia */}
          <WhyChooseSection t={t.whyChoose} />

          {/* 6. Industrial Services */}
          <ServicesSection t={t.services} />

          {/* 8. High-Impact CTA Strip */}
          <CTAStrip t={t.cta} onOpenQuoteModal={() => handleOpenQuote()} />

          {/* 10. Contact & Inquiry Section */}
          <ContactSection t={t.contact} />
        </div>
      </main>

      {/* 11. Footer */}
      <Footer t={t.footer} />

      {/* Floating Action Button */}
      <FloatingWhatsApp
        t={t.floatingContact}
        onOpenQuoteModal={() => handleOpenQuote()}
      />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        t={t.quickQuoteModal}
        contactFormT={t.contact.form}
        initialProduct={quoteInitialProduct}
        initialMessage={quoteInitialMessage}
      />
    </div>
  );
}