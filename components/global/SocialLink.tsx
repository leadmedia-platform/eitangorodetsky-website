"use client";

import { trackSocialClick } from "@/lib/analytics";

/** External link that fires a GA4 social_click event. */
export default function SocialLink({
  href,
  platform,
  className,
  children,
}: {
  href: string;
  platform: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackSocialClick(platform)}
    >
      {children}
    </a>
  );
}
