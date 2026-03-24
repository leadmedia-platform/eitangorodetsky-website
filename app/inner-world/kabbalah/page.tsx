import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kabbalah — Eitan Gorodetsky",
  description: "How Kabbalistic thinking shapes operational intelligence and the search for what's hidden.",
};

export default function KabbalahPage() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #2a1a00 0%, #D4A853 100%)" }}>
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">Inner World</p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">Kabbalah</h1>
          <p className="mt-4 text-lg text-white/75 italic">The hidden structures</p>
        </div>
      </section>

      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[680px] px-6 space-y-6 text-lg leading-[1.85] text-brand-gray">
          <p>
            Kabbalah is a tradition of Jewish mysticism that deals with the hidden structures underlying reality. The Tree of Life, Ein Sof, the Sefirot — a framework for understanding how energy moves through systems, how the visible and invisible relate, and why the most important forces are often the ones you cannot see directly.
          </p>
          <p>
            I&apos;ve been studying Kabbalah for years, and the resonance with operational work is not coincidental. Both disciplines are fundamentally concerned with the same question: what&apos;s really going on beneath the surface?
          </p>
          <p>
            A Kabbalistic lens applied to an organisation reveals something interesting: the visible structure — the org chart, the processes, the metrics — is just the surface. The real dynamics happen at a different level. The informal power, the unspoken agreements, the cultural assumptions that nobody examines because they&apos;ve been there since before anyone can remember.
          </p>
          <blockquote className="border-l-4 border-brand-gold pl-6 not-italic text-brand-dark font-medium">
            &ldquo;Kabbalah teaches that the most important things are hidden. That&apos;s literally what I do professionally — I find what&apos;s hidden.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="bg-brand-card py-12">
        <div className="mx-auto max-w-[680px] px-6 flex gap-6">
          <Link href="/inner-world/sound-healing" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">← Sound Healing</Link>
          <Link href="/inner-world/freediving" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">Freediving →</Link>
        </div>
      </section>
    </div>
  );
}
