export const SITE_NAME = "Eitan Gorodetsky";
export const SITE_TITLE = "Eitan Gorodetsky — Operations Intelligence Architect";
export const SITE_DESCRIPTION =
  "I've spent 15 years inside the machine. I tell the stories nobody tells in meetings. Discover operational insights and fixes.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eitangorodetsky.com";

export const NAV_LINKS = [
  { label: "Stories", href: "/stories" },
  { label: "OIA", href: "/oia" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "About", href: "/about" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/eitangorodetsky", icon: "linkedin" },
  { label: "Twitter/X", href: "https://twitter.com/eitangorodetsky", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com/eitangorodetsky", icon: "instagram" },
  { label: "Substack", href: "https://eitangorodetsky.substack.com", icon: "substack" },
] as const;

export const FOOTER_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Stories", href: "/stories" },
  { label: "OIA", href: "/oia" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "About", href: "/about" },
  { label: "Tools", href: "/tools" },
] as const;

export const VOICE_COLORS: Record<string, string> = {
  storyteller: "bg-brand-amber text-brand-cream",
  wit: "bg-brand-sage text-brand-cream",
  confessional: "bg-brand-terracotta text-brand-cream",
  witness: "bg-brand-navy text-brand-cream",
};
