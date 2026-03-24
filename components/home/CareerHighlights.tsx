import { CAREER_HIGHLIGHTS } from "@/lib/constants";

export default function CareerHighlights() {
  return (
    <section className="bg-white border-y border-brand-dark/8">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {CAREER_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="text-center">
              <div className="stat-number">{item.value}</div>
              <p className="mt-2 text-sm font-medium text-brand-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
