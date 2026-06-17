import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Eitan Gorodetsky — for a margin audit or advisory, a talk, collaboration, or just an interesting conversation about building AI-native.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Talk
          </h1>
          <p className="mt-4 max-w-[500px] text-lg text-white/75">
            Whether you want to talk about building an AI-native operation, an audit or advisory engagement, or just to compare notes — I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-dark">
                Send a message
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-dark">
                  Or reach me directly
                </h2>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">Email</p>
                    <a
                      href="mailto:eitangorodetsky@gmail.com"
                      className="mt-1 block text-brand-blue hover:underline underline-offset-4"
                    >
                      eitangorodetsky@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/socialeitan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-brand-blue hover:underline underline-offset-4"
                    >
                      linkedin.com/in/socialeitan
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">Location</p>
                    <p className="mt-1 text-brand-dark">Central Coast, Australia</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-brand-card p-8">
                <h3 className="font-serif text-lg font-bold text-brand-dark">
                  Work together
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  I take on a small number of margin audits, fractional operational engagements, and talks. Here&apos;s how that works — and what I&apos;m building in the open.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/work-with-me"
                    className="inline-block rounded-full bg-brand-blue px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
                  >
                    Work with me
                  </a>
                  <a
                    href="/writing"
                    className="inline-block rounded-full border border-brand-dark/20 px-6 py-2.5 text-center text-sm font-semibold text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
                  >
                    Read the writing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
