import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bodywork",
  description: "Thai yoga massage, couples treatments, and how working with bodies informs working with teams.",
};

export default function BodyworkPage() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)" }}>
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">Inner World</p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">Bodywork</h1>
          <p className="mt-4 text-lg text-white/75 italic">Thai yoga massage &amp; couples treatments</p>
        </div>
      </section>

      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[680px] px-6 space-y-6 text-lg leading-[1.85] text-brand-gray">
          <p>
            I&apos;ve trained in Thai yoga massage — a tradition that works with the body through compression, stretching, and meridian work. It&apos;s an active practice for both giver and receiver, requiring presence, attentiveness, and the ability to read what someone needs before they can articulate it.
          </p>
          <p>
            I also offer couples treatments — sessions where two people receive bodywork simultaneously, which creates a shared experience of relaxation and presence that most couples rarely find time for.
          </p>
          <p>
            The connection to professional work isn&apos;t metaphorical. When you spend time working with people&apos;s bodies, you learn to see tension patterns — where they hold stress, how their energy moves, what they&apos;re not saying. Those same skills transfer directly to reading teams and organisations.
          </p>
          <blockquote className="border-l-4 border-brand-gray pl-6 not-italic text-brand-dark font-medium">
            &ldquo;I&apos;ve spent years learning where the body holds tension. Organisations do the same thing — they hold tension in processes, in handoffs, in the silence after meetings.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="bg-brand-card py-12">
        <div className="mx-auto max-w-[680px] px-6 flex gap-6">
          <Link href="/inner-world/freediving" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">← Freediving</Link>
          <Link href="/inner-world" className="text-sm font-medium text-brand-blue hover:underline underline-offset-4">Back to Inner World →</Link>
        </div>
      </section>
    </div>
  );
}
