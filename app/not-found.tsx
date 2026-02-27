import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <span className="font-mono text-sm text-text-secondary">404</span>
        <h1 className="mt-2 font-serif text-4xl font-bold text-brand-charcoal md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </div>
  );
}
