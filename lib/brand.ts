/**
 * Brand token source of truth — eitangorodetsky.com
 *
 * Canonical palette, per-persona modes, typography and the dark palette.
 * `app/globals.css` @theme MIRRORS the anchor values here for Tailwind utilities;
 * this file is the source for JS consumers (the brand book, OG image, inline needs).
 * Direction (18/06/2026): evolve the existing identity, editorial type, 3 persona modes.
 * Spec: ventures/eitan-gorodetsky/02-strategy/brand-identity-spec.md
 */

export type Scale = {
  50: string; 100: string; 200: string; 300: string; 400: string;
  500: string; 600: string; 700: string; 800: string; 900: string;
  DEFAULT: string;
};

/** Core palette — anchors kept from the current identity, extended to 50–900 scales. */
export const palette = {
  blue: {
    50: "#F0F6FA", 100: "#D9E8F2", 200: "#B3D1E5", 300: "#80B3D0", 400: "#4A8FB8",
    500: "#2A72A0", 600: "#1B5E8C", 700: "#154B70", 800: "#103A57", 900: "#0D2B3E",
    DEFAULT: "#1B5E8C", // authority primary
  } as Scale,
  teal: {
    50: "#EEF7F3", 100: "#D5ECE3", 200: "#ACD9C7", 300: "#7AC0A6", 400: "#4EA886",
    500: "#379478", 600: "#2D8B6F", 700: "#236E58", 800: "#1A5343", 900: "#123A2F",
    DEFAULT: "#2D8B6F", // growth / inner-world
  } as Scale,
  gold: {
    50: "#FBF6EA", 100: "#F6EBCB", 200: "#EDD79A", 300: "#E3C271", 400: "#D9B25F",
    500: "#D4A853", 600: "#BC8F3C", 700: "#97712F", 800: "#6F5323", 900: "#4A3717",
    DEFAULT: "#D4A853", // wisdom / accent
  } as Scale,
  neutral: {
    50: "#FAFAF8", 100: "#F5F3EF", 200: "#E7E5E0", 300: "#CFCDC7", 400: "#9CA3AF",
    500: "#6B7280", 600: "#4B5563", 700: "#374151", 800: "#262626", 900: "#1A1A1A",
    DEFAULT: "#1A1A1A", // ink
  } as Scale,
};

/** Semantic tokens (light). bg=warm paper, card=warm sand, ink=text. */
export const light = {
  bg: palette.neutral[50],
  card: palette.neutral[100],
  ink: palette.neutral[900],
  muted: palette.neutral[500],
  white: "#FFFFFF",
  slate: palette.blue[900], // authority depth (was inline #0d2b3e)
};

/** Dark palette — every token overridden (real dark mode, not just <body>). */
export const dark = {
  bg: "#111110",
  card: "#1C1C1A",
  ink: "#E8E5E0",
  muted: "#9CA3AF",
  white: "#FFFFFF",
  slate: "#0A1922",
  blue: "#5BA3D0", // accents lightened for contrast on dark
  teal: "#5FB89A",
  gold: "#E0BC6E",
};

/** Three persona "modes" — one brand, distinct accenting. */
export const personas = {
  authority: {
    label: "Authority",
    note: "Enterprise AI/MarTech authority — VP+ audience (primary).",
    accent: palette.blue.DEFAULT,
    depth: palette.blue[900],
    emphasis: palette.gold[500],
    headingFont: "serif",
    routes: ["/", "/thinking", "/work-with-me", "/writing", "/career", "/about"],
  },
  builder: {
    label: "Builder",
    note: "Build-in-public operator — founders/operators (proof layer).",
    accent: palette.neutral[900],
    signal: palette.blue[400],
    labelFont: "mono",
    headingFont: "serif",
    routes: ["/building"],
  },
  innerWorld: {
    label: "Inner World",
    note: "Sound healing · kabbalah · freediving · bodywork (differentiator).",
    accent: palette.teal.DEFAULT,
    warm: palette.gold[500],
    headingFont: "serif",
    routes: ["/inner-world"],
  },
} as const;

/** Typography — editorial: serif headings, grotesk body, mono accents. */
export const type = {
  serif: "var(--font-serif)", // Playfair Display (brand-book may trial Fraunces)
  sans: "var(--font-sans)", // Inter
  mono: "var(--font-mono)", // JetBrains Mono
  scale: {
    display: "clamp(2.5rem, 5vw, 4rem)",
    h1: "clamp(2rem, 4vw, 3rem)",
    h2: "clamp(1.5rem, 3vw, 2.25rem)",
    h3: "1.5rem",
    body: "1.0625rem",
    small: "0.875rem",
    caption: "0.75rem",
  },
};

/** Voice badge mapping (folded from lib/constants VOICE_COLORS). */
export const voiceColors = {
  storyteller: { bg: palette.gold.DEFAULT, fg: palette.neutral[900] },
  wit: { bg: palette.teal.DEFAULT, fg: "#FFFFFF" },
  confessional: { bg: palette.blue.DEFAULT, fg: "#FFFFFF" },
  witness: { bg: palette.neutral[500], fg: "#FFFFFF" },
};

export const brand = { palette, light, dark, personas, type, voiceColors };
export default brand;
