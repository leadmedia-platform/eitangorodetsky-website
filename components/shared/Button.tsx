import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-brand-amber text-brand-charcoal hover:bg-brand-terracotta hover:text-brand-cream",
  secondary:
    "bg-brand-charcoal text-brand-cream hover:bg-brand-navy",
  outline:
    "border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-8 py-3 text-base font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
