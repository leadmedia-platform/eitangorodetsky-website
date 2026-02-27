import Button from "@/components/shared/Button";

interface ServiceCardProps {
  title: string;
  duration: string;
  investment: string;
  description: string;
  idealFor: string;
  flagship?: boolean;
}

export default function ServiceCard({
  title,
  duration,
  investment,
  description,
  idealFor,
  flagship,
}: ServiceCardProps) {
  return (
    <div
      className={`rounded-lg border-2 bg-brand-cream p-8 ${
        flagship ? "border-brand-amber" : "border-brand-charcoal/10"
      }`}
    >
      {flagship && (
        <span className="mb-4 inline-block rounded-full bg-brand-amber px-3 py-1 text-xs font-medium text-brand-cream">
          Flagship
        </span>
      )}
      <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-text-secondary">
        <span>{duration}</span>
        <span aria-hidden="true">|</span>
        <span>{investment}</span>
      </div>
      <p className="mt-4 text-base leading-relaxed text-text-secondary">
        {description}
      </p>
      <p className="mt-3 text-sm text-text-secondary">
        <span className="font-medium text-brand-charcoal">Ideal for:</span>{" "}
        {idealFor}
      </p>
      <div className="mt-6">
        <Button href="#schedule" variant={flagship ? "primary" : "outline"}>
          Schedule Discovery Call
        </Button>
      </div>
    </div>
  );
}
