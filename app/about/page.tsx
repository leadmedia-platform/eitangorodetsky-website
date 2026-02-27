import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "About Eitan Gorodetsky — Operations Intelligence Architect",
  description:
    "15 years inside the machine. The story of why I tell the stories nobody tells in meetings.",
};

const timeline = [
  { year: "2010", title: "Entered Operations", description: "Started in the trenches of operational management, learning what dashboards don't show." },
  { year: "2014", title: "First Major Discovery", description: "Found $1.2M in hidden costs at a mid-size operator. Realized this was a pattern, not an exception." },
  { year: "2017", title: "iGaming Deep Dive", description: "Moved into the iGaming industry. Discovered an entire sector running on workarounds and duct tape." },
  { year: "2020", title: "Built the Framework", description: "Developed the Operations Intelligence Architecture methodology after seeing the same problems everywhere." },
  { year: "2023", title: "Fractional COO", description: "Began advising companies as a fractional operations leader, applying OIA across industries." },
  { year: "2026", title: "Telling the Stories", description: "Launched this platform to share the stories nobody tells in meetings — and help others find what's hidden." },
];

const values = [
  {
    title: "Honest",
    body: "The truth about operations is rarely comfortable. I believe in saying what needs to be said, even when the room goes quiet. Honesty isn't just a value — it's the foundation of every insight worth sharing. If a process is broken, I'll say so. If a number is hiding something, I'll find it.",
  },
  {
    title: "Warm",
    body: "Operations work is fundamentally about people. Behind every broken process is a team doing their best with imperfect tools. I approach every engagement with empathy, knowing that the humans in the system are not the problem — they're the solution waiting to be empowered.",
  },
  {
    title: "Deep",
    body: "Surface-level analysis creates surface-level fixes. I go deep — into the data, into the processes, into the conversations that happen after the meetings. The insights that matter most are always buried beneath layers of assumption, workaround, and inherited practice.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Narrative Section */}
      <Section>
        <div className="mx-auto max-w-[680px]">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal md:text-5xl">
            About Eitan
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-[1.8] text-brand-charcoal">
            <p>
              Fifteen years ago, I walked into my first operations role and discovered something that would define my career: the most important things in any organization are the things nobody talks about.
            </p>
            <p>
              Not the KPIs on the dashboard. Not the metrics in the board deck. The other things. The spreadsheet that three people maintain and nobody questions. The process that costs more to manage than the spending it&apos;s designed to prevent. The vendor dependency that grew so slowly nobody noticed until it became the company&apos;s single point of failure.
            </p>
            <p>
              I&apos;ve spent my career finding those things. In early-stage startups and mid-size operators. In iGaming companies running on inherited processes and growing companies building operational infrastructure from scratch. Across industries, the pattern is always the same: the biggest opportunities are hiding in plain sight.
            </p>
            <p>
              I call this work Operations Intelligence Architecture — the discipline of seeing what dashboards hide, saying what meetings avoid, and fixing what everyone has learned to work around.
            </p>
            <p>
              Today, I do this work as an advisor, consultant, and fractional COO. I also tell the stories. Because every hidden cost, every broken process, every uncomfortable truth is also a story worth sharing. And sharing those stories is how we build better organizations.
            </p>
          </div>
        </div>
      </Section>

      {/* Photo Gallery Placeholder */}
      <Section className="bg-bg-secondary">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex aspect-[4/3] items-center justify-center rounded-lg bg-brand-charcoal/5"
            >
              <span className="text-sm text-text-secondary">Photo {i}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
          The Journey
        </h2>
        <div className="mx-auto max-w-[600px]">
          <div className="relative border-l-2 border-brand-amber pl-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full bg-brand-amber" />
                <span className="font-serif text-xl font-bold text-brand-amber">
                  {item.year}
                </span>
                <h3 className="mt-1 font-serif text-lg font-bold text-brand-charcoal">
                  {item.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-bg-secondary">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
          What I Believe
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                {value.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
            Want the deeper story?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Join 2,000+ operations leaders on the newsletter.
          </p>
          <div className="mt-8">
            <Button href="#newsletter">Subscribe to the newsletter</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
