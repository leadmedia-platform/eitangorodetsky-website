declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

export function trackNewsletterSignup(source: string) {
  gtag("event", "newsletter_signup", { source });
}

export function trackStoryRead(
  slug: string,
  voice: string,
  arc: string | undefined,
  layer: string
) {
  gtag("event", "story_read", {
    story_slug: slug,
    voice_type: voice,
    arc_type: arc || "none",
    layer,
  });
}

export function trackScrollDepth(slug: string, depth: number) {
  gtag("event", "scroll_depth", {
    page_slug: slug,
    depth_percentage: depth,
  });
}

export function trackCTAClick(
  buttonText: string,
  page: string,
  destination: string
) {
  gtag("event", "cta_click", {
    button_text: buttonText,
    page,
    destination,
  });
}

export function trackSocialClick(platform: string) {
  gtag("event", "social_click", { platform });
}
