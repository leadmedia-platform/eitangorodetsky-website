import SubscribeForm from "@/components/SubscribeForm";

interface NewsletterCTAProps {
  source?: string;
  /** Tighter card for the end of an essay. */
  compact?: boolean;
  /** Slim inline strip placed early in an essay — catches readers who never reach the end. */
  inline?: boolean;
}

export default function NewsletterCTA({
  source = "site",
  compact = false,
  inline = false,
}: NewsletterCTAProps) {
  if (inline) {
    return (
      <aside className="my-10 rounded-xl border border-brand-blue/25 bg-brand-blue/[0.04] p-5">
        <p className="font-serif text-base font-bold text-brand-dark">
          Don&apos;t want to rely on the feed to surface the next one?
        </p>
        <p className="mt-1 text-sm text-brand-gray">
          Get each essay by email — one a month, from inside a live AI-native
          operation. No spam, unsubscribe any time.
        </p>
        <div className="mt-4 max-w-xl">
          <SubscribeForm source={source} />
        </div>
      </aside>
    );
  }

  return (
    <section
      className={`rounded-2xl bg-brand-card ${compact ? "mt-12 p-6" : "p-8 md:p-10"}`}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
        The newsletter
      </p>
      <h2
        className={`mt-2 font-serif font-bold text-brand-dark ${
          compact ? "text-xl" : "text-2xl md:text-3xl"
        }`}
      >
        Get the next essay in your inbox
      </h2>
      <p className="mt-3 max-w-xl text-brand-gray">
        What it actually takes to operate on AI — one essay a month, written from
        inside the operation. No fluff, no middle platform, unsubscribe any time.
      </p>
      <div className="mt-6 max-w-xl">
        <SubscribeForm source={source} />
      </div>
    </section>
  );
}
