import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're in — Eitan Gorodetsky",
  description: "Your subscription to eitangorodetsky.com is confirmed.",
  robots: { index: false, follow: false },
};

export default function ConfirmedPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-md text-center">
        <p className="font-serif text-3xl font-bold text-brand-dark">You&apos;re in. ✓</p>
        <p className="mt-4 text-brand-gray">
          Your subscription is confirmed. New essays on building and operating an
          AI-native business will land in your inbox, roughly monthly.
        </p>
        <Link
          href="/writing"
          className="mt-8 inline-block rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-teal"
        >
          Read the latest essays →
        </Link>
      </div>
    </div>
  );
}
