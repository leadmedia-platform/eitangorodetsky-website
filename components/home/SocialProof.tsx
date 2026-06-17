import Link from "next/link";

export default function SocialProof() {
  return (
    <section className="bg-brand-bg py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <p className="text-base text-brand-gray">
          I&apos;m building an AI-native operation in the open — and writing about what it takes. New essays, roughly monthly.
        </p>
        <Link
          href="/writing"
          className="mt-6 inline-block text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
        >
          Read the writing →
        </Link>
      </div>
    </section>
  );
}
