import { NextRequest, NextResponse } from "next/server";
import { confirmSubscriber } from "@/lib/supabase";
import { SITE_URL } from "@/lib/constants";

// Double opt-in confirm link target. Always redirects to /confirmed — we never
// reveal whether the token was valid (avoids leaking list membership).
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (token) {
    try {
      await confirmSubscriber(token);
    } catch (err) {
      console.error("Confirm error:", err);
    }
  }
  return NextResponse.redirect(`${SITE_URL}/confirmed`);
}
