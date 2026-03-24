import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sound Healing — Eitan Gorodetsky",
  description: "How sound healing practice shapes operational leadership and human awareness.",
};

export default function SoundHealingPage() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #1a3a2e 0%, #2D8B6F 100%)" }}>
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">Inner World</p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">Sound Healing</h1>
          <p className="mt-4 text-lg text-white/75 italic">Resonance as a practice</p>
        </div>
      </section>

      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[680px] px-6 space-y-6 text-lg leading-[1.85] text-brand-gray">
          <p>
            Sound healing is the practice of using sound — bowls, gongs, voice, instruments — to create states of resonance in the body and mind. It sounds abstract. The experience is anything but.
          </p>
          <p>
            I&apos;ve been drawn to sound work for years, and the deeper I go, the more I see its relationship to everything else I do. Leadership is fundamentally about resonance: the ability to create an environment where people feel safe, heard, and aligned. Sound practice makes you acutely aware of when resonance is present — and when it&apos;s not.
          </p>
          <p>
            The skill of reading the room, which every good leader needs, starts with the ability to be quiet enough to hear what the room is actually saying. Sound healing teaches you to listen at a level most people never access in professional settings.
          </p>
          <blockquote className="border-l-4 border-brand-teal pl-6 not-italic text-brand-dark font-medium">
            &ldquo;This isn&apos;t woo. It&apos;s awareness. And awareness is the foundation of every operational insight I&apos;ve ever had.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="bg-brand-card py-12">
        <div className="mx-auto max-w-[680px] px-6 flex gap-6">
          <Link href="/inner-world" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">← Back to Inner World</Link>
          <Link href="/inner-world/kabbalah" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">Kabbalah →</Link>
        </div>
      </section>
    </div>
  );
}
