import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inner World",
  description:
    "Sound healing, Kabbalah, freediving, bodywork. The practices that shape the professional. The best leaders are built from the inside out.",
};

const practices = [
  {
    title: "Sound Healing",
    subtitle: "Resonance as a practice",
    body: "Creating resonance, reading the room, understanding frequency and energy. Not separate from the work — this IS the work.",
    href: "/inner-world/sound-healing",
    accent: "#2D8B6F",
  },
  {
    title: "Kabbalah",
    subtitle: "The hidden structures",
    body: "Kabbalah teaches that the most important things are hidden. That's literally what I do professionally — I find what's hidden.",
    href: "/inner-world/kabbalah",
    accent: "#D4A853",
  },
  {
    title: "Freediving",
    subtitle: "Depth and presence",
    body: "At 20 metres underwater on a single breath, there's no room for noise. That's the clarity I bring to operations.",
    href: "/inner-world/freediving",
    accent: "#1B5E8C",
  },
  {
    title: "Bodywork",
    subtitle: "Thai yoga & couples treatments",
    body: "I've spent years learning where the body holds tension. Organisations do the same thing.",
    href: "/inner-world/bodywork",
    accent: "#6B7280",
  },
];

export default function InnerWorldPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background: "linear-gradient(135deg, #1a3a2e 0%, #2D8B6F 100%)",
        }}
      >
        {/* warm gold glow — Inner World mode */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 75% at 82% 18%, rgba(212,168,83,0.24), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <span aria-hidden className="mb-4 block h-px w-10 bg-brand-gold/70" />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Inner World
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            The whole human
          </h1>
          <p className="mt-6 max-w-[600px] text-lg leading-relaxed text-white/80">
            I believe the best leaders are built from the inside out. My professional life is shaped by practices I&apos;ve cultivated over years — sound healing, Kabbalah, freediving, bodywork, and a relentless curiosity about what makes humans tick. These aren&apos;t separate from my work. They ARE my work.
          </p>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {practices.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block overflow-hidden rounded-3xl bg-brand-card p-8 transition-shadow hover:shadow-lg"
              >
                <div
                  className="h-1.5 w-16 rounded-full mb-6"
                  style={{ backgroundColor: p.accent }}
                />
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">
                  {p.subtitle}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                  {p.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-gray">
                  {p.body}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-brand-teal underline-offset-4 group-hover:underline">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
