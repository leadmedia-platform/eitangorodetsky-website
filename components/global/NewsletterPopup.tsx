"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NewsletterForm from "@/components/shared/NewsletterForm";

const STORAGE_KEY = "newsletter_popup_dismissed";
const TRIGGER_DELAY_MS = 30000; // 30 seconds
const SCROLL_TRIGGER = 0.5; // 50%

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);

  const show = useCallback(() => {
    if (triggered.current) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    triggered.current = true;
    setVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }, []);

  // Timer trigger
  useEffect(() => {
    const timer = setTimeout(show, TRIGGER_DELAY_MS);
    return () => clearTimeout(timer);
  }, [show]);

  // Scroll trigger
  useEffect(() => {
    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled >= SCROLL_TRIGGER) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [show]);

  // Escape key
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  // Focus trap
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!visible || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter signup"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-charcoal/40"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[400px] animate-[slideUp_0.3s_ease-out] rounded-xl bg-brand-cream p-8 shadow-xl"
      >
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 text-text-secondary transition-colors hover:text-brand-charcoal"
          aria-label="Close newsletter popup"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>

        <h2 className="font-serif text-2xl font-bold text-brand-charcoal">
          The stories nobody tells in meetings
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          Join 2,000+ operations leaders. Weekly insight, honest truth, no spam.
        </p>
        <div className="mt-6">
          <NewsletterForm source="popup" onSuccess={dismiss} />
        </div>
      </div>
    </div>
  );
}
