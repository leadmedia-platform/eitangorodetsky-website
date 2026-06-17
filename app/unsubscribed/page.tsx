import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unsubscribed — Eitan Gorodetsky",
  description: "You've been unsubscribed from the newsletter.",
  robots: { index: false, follow: false },
};

export default function UnsubscribedPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-md text-center">
        <p className="font-serif text-3xl font-bold text-brand-dark">Unsubscribed.</p>
        <p className="mt-4 text-brand-gray">
          You&apos;re off the list — no more emails. No hard feelings. The essays
          stay free to read any time.
        </p>
        <Link
          href="/writing"
          className="mt-8 inline-block rounded-full border border-brand-dark/20 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
          Read the essays →
        </Link>
      </div>
    </div>
  );
}
