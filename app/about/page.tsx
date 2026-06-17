import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/global/SchemaOrg";
import { getProfilePageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Born in Israel. Shaped by Malta. Now building on the Central Coast of Australia. The full story of 15 years finding what's hidden.",
};

const timeline = [
  {
    year: "2010",
    title: "First steps in digital",
    description:
      "Started in Israeli digital marketing agencies. Learned how the internet actually works — not the theory, the practice.",
  },
  {
    year: "2014",
    title: "888 Holdings",
    description:
      "Joined one of the best companies in Israel to work for. Discovered iGaming and never looked back. SEO went from a skill to a craft.",
  },
  {
    year: "2016",
    title: "Malta chapter begins",
    description:
      "Moved to Malta for Catena Media. The iGaming capital of the world. Learned what scale looks like — hundreds of sites, millions of visitors.",
  },
  {
    year: "2018",
    title: "Betsson Group",
    description:
      "Director of Acquisition across 20+ regulated markets. €100M+ budgets. 40+ person team. This is where the pattern became clear: the biggest opportunities are hiding in plain sight.",
  },
  {
    year: "2022",
    title: "CPO at Speed Media Group",
    description:
      "Became Chief Product Officer. Ran multiple M&A deals from the inside — due diligence, integration, portfolio strategy. Saw companies in a completely new way.",
  },
  {
    year: "2023",
    title: "TonyBet and new markets",
    description:
      "Director of Performance Marketing across 6 markets: Ireland, Canada, Netherlands, Spain, Latvia, Estonia. TV, sponsorships, the full spectrum.",
  },
  {
    year: "2025",
    title: "The intentional year",
    description:
      "Travelled. Went deep on AI. Built an AI-agent product from scratch to understand the architecture from the inside. Surfed. Read. Thought. This is how I do transitions.",
  },
  {
    year: "2026",
    title: "Australia and what's next",
    description:
      "Central Coast. Ocean. Clarity. Building and running an AI-native operation — agency work, owned ventures, products — and writing about what it takes, in the open.",
  },
];

const values = [
  {
    title: "Honest",
    body: "The truth about operations is rarely comfortable. I say what needs to be said.",
  },
  {
    title: "Warm",
    body: "Behind every broken process is a team doing their best. I lead with empathy.",
  },
  {
    title: "Deep",
    body: "Surface-level analysis creates surface-level fixes. I go deep.",
  },
  {
    title: "Curious",
    body: "I never stop learning. From AI architecture to Kabbalah to freediving.",
  },
  {
    title: "Present",
    body: "The best insights come from paying attention. To data, to people, to silence.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SchemaOrg data={getProfilePageSchema()} />
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            About
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            The full story
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Born in Israel. Built in Malta. Now on the Central Coast of Australia.
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[680px] px-6">
          <div className="space-y-6 text-lg leading-[1.85] text-brand-dark">
            <p>
              I grew up in Israel and stumbled into digital marketing the way most people do — curiosity, necessity, and a job posting at the right moment. That was 2010. I didn&apos;t know then that I&apos;d spend the next 15 years inside some of the most complex, fast-moving, and fascinating businesses in the world.
            </p>
            <p>
              888 Holdings was where it clicked. One of the best companies in Israel to work for — rigorous, global, genuinely interesting. SEO stopped being a job and became a lens. I started seeing patterns: in traffic, in conversion, in the gap between what the numbers showed and what was actually happening.
            </p>
            <p>
              Then Malta. The move that changed everything. Catena Media, then Betsson Group. I went from managing SEO to leading digital acquisition across 20+ regulated markets, with €100M+ budgets and a team that grew to 120 people. Somewhere in there, a job title became irrelevant. What mattered was the work: finding what was hidden, fixing what was broken, building what would last.
            </p>
            <p>
              As CPO at Speed Media Group, I sat in on M&A deals from the inside — seeing companies through an acquisitor&apos;s eyes. The pattern showed up again. The biggest risks were always the things nobody was looking at. The quiet dependencies. The processes running on institutional memory. The costs hiding in plain sight.
            </p>
            <p>
              TonyBet gave me six new markets in two years: Ireland, Canada, Netherlands, Spain, Latvia, Estonia. TV campaigns. Sponsorships. Performance marketing at full tilt. By this point I&apos;d built enough of a framework that launching a market felt like something I could do in my sleep. Which meant it was time to learn something new.
            </p>
            <p>
              2025 was intentional. I travelled. I went deep on AI — not reading about it, building with it. I built an AI product from scratch, just to understand the architecture from the inside. I surfed. I read. I thought about what the next chapter should look like.
            </p>
            <p>
              The answer was Australia. Central Coast. Ocean. Clarity. Now I build and run an AI-native marketing operation — agency work, owned ventures, products — largely on my own, on the AI layer. And I write about what it actually takes, in the open. Fifteen years of finding what&apos;s hidden, pointed at the thing I think matters most now: building businesses that actually run on AI, not just use it.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-brand-card py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "€100M+", label: "Annual budgets managed" },
              { value: "120",    label: "Largest team led" },
              { value: "20+",    label: "Regulated markets" },
              { value: "15+",    label: "Years of experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-brand-blue">{stat.value}</p>
                <p className="mt-2 text-sm text-brand-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            The Journey
          </p>
          <h2 className="mb-16 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            How I got here
          </h2>

          <div className="relative max-w-[680px]">
            <div className="absolute left-[44px] top-0 bottom-0 w-px bg-brand-gold/30 hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="md:flex md:gap-8">
                  <div className="mb-2 md:mb-0 md:w-[36px] md:flex-shrink-0">
                    <span className="font-mono text-sm font-bold text-brand-gold">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative md:pl-10">
                    <div className="absolute left-[-5px] top-1 hidden h-2.5 w-2.5 rounded-full bg-brand-gold md:block" />
                    <h3 className="font-serif text-lg font-bold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-card py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            What I Believe
          </p>
          <h2 className="mb-16 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Five values. Non-negotiable.
          </h2>
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-serif text-xl font-bold text-brand-blue">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-bg py-20">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            Want to have an interesting conversation?
          </h2>
          <p className="mt-4 text-base text-brand-gray">
            Whether you want to talk about building an AI-native operation, compare notes, or just say hello — I&apos;m easy to reach.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
