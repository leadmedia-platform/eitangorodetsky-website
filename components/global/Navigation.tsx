"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Monogram from "@/components/global/Monogram";
import ThemeToggle from "@/components/global/ThemeToggle";
import { trackCTAClick } from "@/lib/analytics";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-dark/8 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-brand-dark"
          aria-label="Eitan Gorodetsky — home"
        >
          <Monogram size={30} />
          <span className="font-serif text-base font-bold tracking-widest uppercase">
            Eitan Gorodetsky
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-[14px] font-medium transition-colors hover:text-brand-blue ${
                  isActive(link.href)
                    ? "text-brand-blue border-b-2 border-brand-gold pb-0.5"
                    : "text-brand-dark"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            onClick={() => trackCTAClick("Let's Talk", pathname, "/contact")}
            className="rounded-full bg-brand-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-teal"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-[5px] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-[2px] w-6 bg-brand-dark transition-transform duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-brand-dark transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-brand-dark transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-start overflow-y-auto overscroll-contain bg-brand-bg px-6 pb-12 pt-24 lg:hidden">
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`font-serif text-2xl font-bold transition-colors hover:text-brand-blue ${
                    isActive(link.href) ? "text-brand-blue" : "text-brand-dark"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-full bg-brand-blue px-8 py-3 text-base font-medium text-white transition-colors hover:bg-brand-teal"
                onClick={() => {
                  trackCTAClick("Let's Talk", pathname, "/contact");
                  setMobileOpen(false);
                }}
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
