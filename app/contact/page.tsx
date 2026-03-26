import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Eitan Gorodetsky. Available for Director, VP, CMO, and COO roles — plus operational consulting, collaboration, and interesting conversations.",
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
            Whether you&apos;re hiring for a leadership role, need operational consulting, or just want to have an interesting conversation — I&apos;d love to hear from you.
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
                  Looking to hire?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  I&apos;m open to Director / VP / CMO / COO roles — remote, hybrid, or on-site in Australia. Valid Australian working visa. Download my CV or view my full career history.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/Eitan_Gorodetsky_CV.pdf"
                    className="inline-block rounded-full border border-brand-dark/20 px-6 py-2.5 text-center text-sm font-semibold text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
                  >
                    Download CV
                  </a>
                  <a
                    href="/career"
                    className="inline-block rounded-full bg-brand-blue px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
                  >
                    View Career
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
