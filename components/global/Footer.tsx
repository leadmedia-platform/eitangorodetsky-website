import Link from "next/link";
import { FOOTER_NAV_LINKS, SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-brand-amber bg-brand-cream">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="font-serif text-lg font-bold text-brand-charcoal"
          >
            {SITE_NAME}
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Operations Intelligence Architect
          </p>
          <p className="mt-1 text-xs text-text-secondary">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-charcoal">
            Navigate
          </h3>
          <ul className="mt-3 space-y-2">
            {FOOTER_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-primary transition-colors hover:text-brand-amber"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-charcoal">
            Connect
          </h3>
          <ul className="mt-3 space-y-2">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-primary transition-colors hover:text-brand-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-charcoal">
            Legal
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-text-primary transition-colors hover:text-brand-amber"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-text-primary transition-colors hover:text-brand-amber"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-charcoal/10 px-6 py-4">
        <p className="mx-auto max-w-[1200px] text-center font-mono text-xs text-text-secondary">
          Operations Intelligence Architect — Finding what dashboards hide.
        </p>
      </div>
    </footer>
  );
}
