import { NextRequest, NextResponse } from "next/server";
import { unsubscribeByToken } from "@/lib/supabase";
import { SITE_URL } from "@/lib/constants";

// Link click (from the email footer) → unsubscribe → confirmation page.
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (token) {
    try {
      await unsubscribeByToken(token);
    } catch (err) {
      console.error("Unsubscribe error:", err);
    }
  }
  return NextResponse.redirect(`${SITE_URL}/unsubscribed`);
}

// One-click unsubscribe (RFC 8058 List-Unsubscribe-Post) → Gmail/Apple Mail
// POST the unsubscribe URL directly; respond 200, no redirect.
export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (token) {
    try {
      await unsubscribeByToken(token);
    } catch (err) {
      console.error("Unsubscribe (one-click) error:", err);
    }
  }
  return NextResponse.json({ ok: true });
}
