import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freediving — Eitan Gorodetsky",
  description: "How freediving and breath practice shapes presence, performance under pressure, and operational clarity.",
};

export default function FreedivingPage() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #0a1a2a 0%, #1B5E8C 100%)" }}>
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">Inner World</p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">Freediving</h1>
          <p className="mt-4 text-lg text-white/75 italic">Depth and presence</p>
        </div>
      </section>

      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[680px] px-6 space-y-6 text-lg leading-[1.85] text-brand-gray">
          <p>
            Freediving is the practice of diving underwater on a single breath. No tank, no apparatus, no safety net except your own physiology, your training, and your ability to stay calm when your body is telling you to panic.
          </p>
          <p>
            The ocean has always been a place where I find clarity. Something about the scale — the depth, the silence, the light filtering through — resets the noise that accumulates in operational work. On the surface, there&apos;s always more to do. Underwater, there&apos;s only this breath, this descent, this moment.
          </p>
          <p>
            Freediving teaches you to perform under pressure without force. The paradox of breath-hold is that trying harder uses more oxygen. The right approach is surrender — staying relaxed, trusting your body, not fighting. This is also the right approach to most operational problems, which get worse when you force them and better when you step back and listen.
          </p>
          <blockquote className="border-l-4 border-brand-blue pl-6 not-italic text-brand-dark font-medium">
            &ldquo;At 20 metres underwater on a single breath, there&apos;s no room for noise. That&apos;s the clarity I bring to operations.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="bg-brand-card py-12">
        <div className="mx-auto max-w-[680px] px-6 flex gap-6">
          <Link href="/inner-world/kabbalah" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">← Kabbalah</Link>
          <Link href="/inner-world/bodywork" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">Bodywork →</Link>
        </div>
      </section>
    </div>
  );
}
