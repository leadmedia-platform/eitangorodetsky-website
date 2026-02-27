import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export default function SocialProof() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
          Trusted by Operations Leaders
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Client testimonials and case studies coming soon.
        </p>
        <div className="mt-8">
          <Button href="/work-with-me" variant="outline">
            Work with me
          </Button>
        </div>
      </div>
    </Section>
  );
}
