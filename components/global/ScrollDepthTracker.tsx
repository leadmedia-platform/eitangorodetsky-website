"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

/** Fires GA4 scroll_depth events at 25/50/75/100% once each, per page. */
export default function ScrollDepthTracker({ slug }: { slug: string }) {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) return;
      const pct = Math.round((el.scrollTop / max) * 100);
      for (const m of milestones) {
        if (pct >= m && !fired.current.has(m)) {
          fired.current.add(m);
          trackScrollDepth(slug, m);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  return null;
}
