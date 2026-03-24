import { COMPANY_LOGOS } from "@/lib/constants";

export default function ProofBar() {
  return (
    <section className="border-y border-brand-dark/8 bg-white py-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-gray">
          Experience across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {COMPANY_LOGOS.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-brand-dark/40 transition-colors hover:text-brand-dark/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
