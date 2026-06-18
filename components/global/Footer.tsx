import Link from "next/link";
import { SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";
import Monogram from "@/components/global/Monogram";
import SocialLink from "@/components/global/SocialLink";

const navigate = [
  { label: "Home",         href: "/" },
  { label: "Writing",      href: "/writing" },
  { label: "Career",       href: "/career" },
  { label: "Thinking",     href: "/thinking" },
  { label: "Inner World",  href: "/inner-world" },
  { label: "About",        href: "/about" },
  { label: "Contact",      href: "/contact" },
  { label: "Work With Me", href: "/work-with-me" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-dark/10 bg-brand-card">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-brand-dark"
            aria-label="Eitan Gorodetsky — home"
          >
            <Monogram size={28} />
            <span className="font-serif text-base font-bold tracking-widest uppercase">
              {SITE_NAME}
            </span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-brand-gray">
            AI-native marketing operator.
            <br />
            Central Coast, Australia.
          </p>
          <p className="mt-4 text-xs italic text-brand-gray">
            &ldquo;Built with curiosity and too much coffee.&rdquo;
          </p>
          <p className="mt-3 text-xs text-brand-gray">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navigate.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-gray transition-colors hover:text-brand-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
            Connect
          </h3>
          <ul className="mt-4 space-y-2.5">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <SocialLink
                  href={link.href}
                  platform={link.label}
                  className="text-sm text-brand-gray transition-colors hover:text-brand-blue"
                >
                  {link.label}
                </SocialLink>
              </li>
            ))}
            <li>
              <a
                href="mailto:eitangorodetsky@gmail.com"
                className="text-sm text-brand-gray transition-colors hover:text-brand-blue"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
            Legal
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-brand-gray transition-colors hover:text-brand-blue"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-brand-gray transition-colors hover:text-brand-blue"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-dark/8 px-6 py-4">
        <p className="mx-auto max-w-[1280px] text-center font-mono text-xs text-brand-gray">
          AI-native marketing operator — building businesses that run on AI, and writing about what it takes.
        </p>
      </div>
    </footer>
  );
}
