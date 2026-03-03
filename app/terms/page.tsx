import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="font-serif text-4xl font-bold text-brand-charcoal">Terms of Service</h1>
      <p className="mt-2 text-sm text-text-secondary">Last updated: March 2026</p>

      <div className="prose prose-neutral mt-10 max-w-none">
        <h2>Use of this site</h2>
        <p>
          This site is a personal brand and publishing platform. All written content is the
          original work of Eitan Gorodetsky unless otherwise noted. You may share links to
          any page on this site. You may not reproduce articles in full without written
          permission.
        </p>

        <h2>Newsletter</h2>
        <p>
          By subscribing to the newsletter you agree to receive periodic emails. You can
          unsubscribe at any time. I will never send spam or sell your email address.
        </p>

        <h2>Consulting services</h2>
        <p>
          Inquiries submitted through the Work With Me page are not binding agreements.
          Engagements are subject to a separate consulting agreement signed by both parties
          before any work begins.
        </p>

        <h2>Disclaimer</h2>
        <p>
          All opinions expressed on this site are my own. Stories are drawn from professional
          experience and may be anonymised or composited. Nothing on this site constitutes
          legal, financial, or professional advice.
        </p>

        <h2>Contact</h2>
        <p>
          Questions?{" "}
          <a href="mailto:eitan@eitangorodetsky.com" className="text-brand-amber hover:underline">
            eitan@eitangorodetsky.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
