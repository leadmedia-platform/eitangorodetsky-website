import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}.`,
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="font-serif text-4xl font-bold text-brand-charcoal">Privacy Policy</h1>
      <p className="mt-2 text-sm text-text-secondary">Last updated: March 2026</p>

      <div className="prose prose-neutral mt-10 max-w-none">
        <h2>What I collect</h2>
        <p>
          When you subscribe to the newsletter, I collect your email address. That&apos;s it. I don&apos;t
          use tracking pixels, sell data, or share your information with third parties beyond
          the email service provider used to send the newsletter.
        </p>

        <h2>How I use it</h2>
        <p>
          Your email is used solely to send the newsletter and occasional updates about new
          stories or consulting availability. You can unsubscribe at any time using the link
          at the bottom of any email.
        </p>

        <h2>Analytics</h2>
        <p>
          This site uses Google Analytics to understand aggregate traffic patterns (which pages
          are visited, how long people read). No personally identifiable information is collected
          through analytics.
        </p>

        <h2>Cookies</h2>
        <p>
          This site uses minimal cookies — only those set by Google Analytics (analytics) and
          sessionStorage for the newsletter popup dismiss state. No advertising or tracking
          cookies are used.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy? Email{" "}
          <a href="mailto:eitan@eitangorodetsky.com" className="text-brand-amber hover:underline">
            eitan@eitangorodetsky.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
