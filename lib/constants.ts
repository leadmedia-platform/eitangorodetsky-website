export const SITE_NAME = "Eitan Gorodetsky";
export const SITE_TITLE = "Eitan Gorodetsky — AI-native marketing operator";
export const SITE_DESCRIPTION =
  "I run an AI-native marketing operation and write about what it takes to build one — memory, integration, codified workflows, and governance. 15 years in iGaming, tech and digital.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.eitangorodetsky.com";

export const NAV_LINKS = [
  { label: "Writing",     href: "/writing" },
  { label: "Building",    href: "/building" },
  { label: "Services",    href: "/work-with-me" },
  { label: "Thinking",    href: "/thinking" },
  { label: "Inner World", href: "/inner-world" },
  { label: "Career",      href: "/career" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn",  href: "https://linkedin.com/in/socialeitan",              icon: "linkedin" },
  { label: "Twitter/X", href: "https://twitter.com/eitangorodetsky",              icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com/eitangorodetsky",            icon: "instagram" },
  { label: "Substack",  href: "https://eitangorodetsky.substack.com",             icon: "substack" },
] as const;

export const FOOTER_NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "Career",      href: "/career" },
  { label: "Writing",     href: "/writing" },
  { label: "Thinking",    href: "/thinking" },
  { label: "Inner World", href: "/inner-world" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
  { label: "Work With Me",href: "/work-with-me" },
] as const;

export const VOICE_COLORS: Record<string, string> = {
  storyteller: "voice-storyteller",
  wit:         "voice-wit",
  confessional:"voice-confessional",
  witness:     "voice-witness",
};

export const CAREER_HIGHLIGHTS = [
  { value: "€100M+",  label: "Annual Budgets" },
  { value: "120",     label: "Largest Team" },
  { value: "20+",     label: "Regulated Markets" },
  { value: "180%",    label: "Organic Growth" },
] as const;

export const COMPANY_LOGOS = [
  "888 Holdings",
  "Catena Media",
  "Betsson Group",
  "TonyBet",
  "Speed Media Group",
  "IGMS",
] as const;
