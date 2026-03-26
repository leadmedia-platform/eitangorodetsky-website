import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career",
  description:
    "15 years of building what matters. From SEO specialist to C-level operator, leading €100M+ budgets across 20+ regulated markets.",
};

const timeline = [
  {
    years: "2026",
    role: "Fractional COO",
    company: "iGaming Managed Services (IGMS)",
    location: "Central Coast, Australia",
    description:
      "Setting up and running operations for Sweepstakes Casino and Crypto Casino ventures. Built full operational systems in Jira/Confluence from scratch. CS workflows, compliance tracking, escalation procedures, performance reporting.",
  },
  {
    years: "2025",
    role: "Travel & Deep Learning",
    company: "Global",
    location: "Worldwide",
    description:
      "Intentional year for travel, personal development, and going deep on AI. Built AgentReady.site to learn AI agent architecture hands-on. Explored applied AI in operations and marketing contexts.",
  },
  {
    years: "2023–2024",
    role: "Director of Performance Marketing",
    company: "TonyBet",
    location: "Multi-Market (Remote)",
    description:
      "Launched marketing operations and 360° campaigns across 6 markets: Ireland, Canada, Netherlands, Spain, Latvia, Estonia. TV, sponsorships, SEO, performance marketing — the full spectrum.",
  },
  {
    years: "2022–2023",
    role: "Chief Product Officer",
    company: "Speed Media Group",
    location: "Malta",
    description:
      "CPO of a high-growth iGaming affiliate managing hundreds of sites. Central role in multiple M&A deals — due diligence, integration, portfolio strategy.",
  },
  {
    years: "2018–2022",
    role: "Director of Acquisition / Digital Performance",
    company: "Betsson Group (BETSB:SS)",
    location: "Malta (Global)",
    description:
      "Led digital acquisition across 20+ regulated markets. €100M+ annual budgets. 40+ person team. 180% organic growth. 90% conversion lift. 35% bounce rate reduction. Speaker at SIGMA and MARE BALTICUM Gaming Summit.",
  },
  {
    years: "2016–2018",
    role: "Head of SEO",
    company: "Catena Media (STO: CTM)",
    location: "Malta",
    description:
      "Led SEO operations for a publicly listed iGaming affiliate at a period of significant growth.",
  },
  {
    years: "2014–2016",
    role: "SEO Specialist / Senior SEO",
    company: "888 Holdings (LON: 888)",
    location: "Israel",
    description:
      "Grew within one of Israel's best tech employers. Built the SEO foundation that shaped my approach to organic growth.",
  },
  {
    years: "2010–2014",
    role: "Digital Marketing Manager / SEO Consultant",
    company: "Various (Agency & In-house)",
    location: "Israel",
    description:
      "Started in the trenches. Agency work, in-house consulting, and learning how digital marketing actually works.",
  },
];

const results = [
  { value: "€100M+",  label: "Annual acquisition budgets managed" },
  { value: "180%",    label: "Organic traffic growth in 6 months" },
  { value: "90%",     label: "Increase in lead conversions" },
  { value: "6",       label: "New markets launched at TonyBet" },
  { value: "120",     label: "Largest team led (Marketing, Creative, MarTech, CS, Ops)" },
  { value: "20+",     label: "Regulated markets operated across" },
];

export default function CareerPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Professional Experience
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            15 Years of Building What Matters
          </h1>
          <p className="mt-6 max-w-[600px] text-lg text-white/75">
            From SEO specialist to C-level operator. From 10-person teams to 120. From single markets to 20+.
          </p>
        </div>
      </section>

      {/* Key Results */}
      <section className="bg-white border-b border-brand-dark/8 py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            Key Results
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {results.map((r) => (
              <div key={r.label}>
                <div className="stat-number">{r.value}</div>
                <p className="mt-2 text-xs leading-snug text-brand-gray">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            Career Timeline
          </p>
          <h2 className="mb-16 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            The journey
          </h2>

          <div className="relative max-w-[800px]">
            <div className="absolute left-[84px] top-0 bottom-0 w-px bg-brand-gold/30 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item) => (
                <div key={item.years} className="md:flex md:gap-8">
                  <div className="mb-2 md:mb-0 md:w-[76px] md:flex-shrink-0 md:text-right">
                    <span className="font-mono text-sm font-bold text-brand-gold">
                      {item.years}
                    </span>
                  </div>
                  <div className="relative md:pl-12">
                    <div className="absolute left-[-5px] top-1 hidden h-3 w-3 rounded-full bg-brand-gold md:block" />
                    <h3 className="font-serif text-xl font-bold text-brand-dark">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-brand-blue">
                      {item.company} · {item.location}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="bg-brand-card py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="md:flex md:items-start md:justify-between md:gap-12">
            <div className="max-w-[500px]">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                Availability
              </p>
              <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
                Currently open to new opportunities
              </h2>
              <div className="mt-6 space-y-3 text-sm text-brand-gray">
                <p><span className="font-semibold text-brand-dark">Roles:</span> Director / VP / CMO / COO</p>
                <p><span className="font-semibold text-brand-dark">Location:</span> Remote, hybrid, or on-site (Central Coast / Sydney / anywhere in Australia)</p>
                <p><span className="font-semibold text-brand-dark">Work rights:</span> Valid Australian working visa</p>
                <p><span className="font-semibold text-brand-dark">Also available for:</span> Fractional leadership and consulting engagements</p>
              </div>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-brand-blue px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
              >
                Get in touch
              </Link>
              <a
                href="/Eitan_Gorodetsky_CV.pdf"
                className="inline-block rounded-full border border-brand-dark/20 px-8 py-3.5 text-center text-sm font-semibold text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker */}
      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="text-sm text-brand-gray">
            <span className="font-semibold text-brand-dark">Speaking:</span>{" "}
            SIGMA Gaming Summit · MARE BALTICUM Gaming Summit · Industry panels on digital acquisition and operational intelligence
          </p>
        </div>
      </section>
    </div>
  );
}
