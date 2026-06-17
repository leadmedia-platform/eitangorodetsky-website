import SubscribeForm from "@/components/SubscribeForm";

interface NewsletterCTAProps {
  source?: string;
  /** Tighter variant for the end of an essay. */
  compact?: boolean;
}

export default function NewsletterCTA({
  source = "site",
  compact = false,
}: NewsletterCTAProps) {
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
        Essays on operating an AI-native business
      </h2>
      <p className="mt-3 max-w-xl text-brand-gray">
        What it actually takes to run on this stack — written from inside the
        operation, roughly monthly. Straight to your inbox, no middle platform.
      </p>
      <div className="mt-6 max-w-xl">
        <SubscribeForm source={source} />
      </div>
    </section>
  );
}
