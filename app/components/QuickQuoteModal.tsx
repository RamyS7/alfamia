
"use client";

import React, { useState } from "react";
import { Dictionary } from "../[lang]/dictionaries";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Dictionary["quickQuoteModal"];
  contactFormT: Dictionary["contact"]["form"];
  initialProduct?: string;
  initialMessage?: string;
}

export default function QuickQuoteModal({
  isOpen,
  onClose,
  t,
  contactFormT,
  initialProduct = "",
  initialMessage = "",
}: QuickQuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: initialProduct || "plywood",
    message: initialMessage || "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface max-w-xl w-full p-6 md:p-8 shadow-2xl relative border border-outline-variant text-start max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-2 rounded-full cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="mb-6">
          <span className="font-spec-code text-spec-code text-primary uppercase font-bold tracking-widest block mb-1">
            AFAMIA B2B
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {t.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {t.subtitle}
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                  {contactFormT.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={contactFormT.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-sm outline-none"
                />
              </div>
              <div>
                <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                  {contactFormT.companyLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={contactFormT.companyPlaceholder}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full h-11 px-3 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-sm outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                  {contactFormT.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  placeholder={contactFormT.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-sm outline-none"
                />
              </div>
              <div>
                <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                  {contactFormT.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  dir="ltr"
                  placeholder={contactFormT.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                {contactFormT.productLabel}
              </label>
              <select
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full h-11 px-3 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-sm outline-none cursor-pointer"
              >
                <option value="plywood">{contactFormT.optPlywood}</option>
                <option value="red-pine">{contactFormT.optRedPine}</option>
                <option value="spruce">{contactFormT.optSpruce}</option>
                <option value="birch-logs">{contactFormT.optBirchLogs}</option>
                <option value="aspen-logs">{contactFormT.optAspenLogs}</option>
                <option value="custom-solution">{contactFormT.optCustom}</option>
              </select>
            </div>

            <div>
              <label className="block font-spec-code text-spec-code uppercase text-on-surface-variant mb-1">
                {contactFormT.messageLabel}
              </label>
              <textarea
                rows={3}
                required
                placeholder={contactFormT.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 bg-surface-container-low focus:bg-surface-container text-on-surface font-body-sm outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-primary hover:bg-primary-container text-on-primary font-label-md uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer rounded-full"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    <span>{t.sending}</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>{t.send}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <p className="font-body-md text-on-surface">{t.success}</p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md uppercase cursor-pointer rounded-full"
            >
              {t.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}