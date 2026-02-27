import Button from "@/components/shared/Button";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-brand-cream px-6">
      <div className="mx-auto max-w-[680px] pt-20 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight text-brand-charcoal md:text-5xl lg:text-[56px]">
          I&apos;ve spent 15 years inside the machine. I tell the stories
          nobody tells in meetings.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
          Operations Intelligence Architect — helping companies find
          what&apos;s hidden and fix what&apos;s broken.
        </p>
        <div className="mt-10">
          <Button href="/stories">Read the stories</Button>
        </div>
      </div>
    </section>
  );
}
