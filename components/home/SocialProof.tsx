import Link from "next/link";

export default function SocialProof() {
  return (
    <section className="bg-brand-bg py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <p className="text-base text-brand-gray">
          Open to Director / VP / CMO / COO roles — remote, hybrid, or on-site (Central Coast / Sydney / anywhere in Australia).
        </p>
        <p className="mt-2 text-sm text-brand-gray/70">
          Also available for fractional leadership and consulting engagements.
        </p>
        <Link
          href="/career"
          className="mt-6 inline-block text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
        >
          View my career →
        </Link>
      </div>
    </section>
  );
}
