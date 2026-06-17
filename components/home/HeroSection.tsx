"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-end justify-start overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 40%, #2D8B6F 100%)",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #D4A853 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2D8B6F 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-20 pt-40 md:pb-28">
        <div className="max-w-[720px]">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            AI-native marketing operator
          </p>

          <h1 className="font-serif text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl">
            EITAN
            <br />
            GORODETSKY
          </h1>

          <p className="mt-6 text-xl font-light leading-relaxed text-white/85 md:text-2xl">
            I run an AI-native marketing operation — and I write about what it actually takes to build one.
          </p>

          <p className="mt-3 text-base text-white/60 md:text-lg">
            15 years inside iGaming, tech and digital — €100M+ budgets, 20+ markets, teams of 120. Now building in the open.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/writing"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold hover:text-brand-dark"
            >
              Read the essays
            </Link>
            <Link
              href="#newsletter"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-bg to-transparent" />
    </section>
  );
}
