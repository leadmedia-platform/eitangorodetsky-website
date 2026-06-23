import { NextRequest, NextResponse } from "next/server";
import { confirmSubscriber } from "@/lib/supabase";
import { SITE_URL } from "@/lib/constants";

const MAGNET_PATH = "/the-ai-native-operation";

// Double opt-in confirm link target. On a fresh confirm, deliver the lead
// magnet (the teardown) by email. Always redirects to /confirmed — we never
// reveal whether the token was valid (avoids leaking list membership).
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (token) {
    try {
      const { confirmed, email } = await confirmSubscriber(token);
      if (confirmed && email) {
        await sendWelcomeWithMagnet(email);
      }
    } catch (err) {
      console.error("Confirm error:", err);
    }
  }
  return NextResponse.redirect(`${SITE_URL}/confirmed`);
}

// Welcome email carrying the lead magnet. Best-effort: a send failure must not
// break the confirm redirect (the magnet is also linked on /confirmed).
async function sendWelcomeWithMagnet(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const magnetUrl = `${SITE_URL}${MAGNET_PATH}`;
  const html = `
    <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; color: #1a2733;">
      <h2 style="color: #1B5E8C; margin-bottom: 6px;">You're in — here's the teardown</h2>
      <p style="line-height: 1.7; color: #444;">
        Thanks for confirming. As promised, here's the one-read teardown of an
        AI-native marketing operation — the four layers, the maturity ladder,
        and the 10 questions to place your own function:
      </p>
      <p style="margin: 28px 0;">
        <a href="${magnetUrl}"
           style="background: #1B5E8C; color: #fff; text-decoration: none; padding: 12px 22px; border-radius: 999px; font-weight: 600; font-size: 14px;">
          Read the teardown
        </a>
      </p>
      <p style="line-height: 1.7; color: #666; font-size: 13px;">
        If the button doesn't work, paste this into your browser:<br />
        <a href="${magnetUrl}" style="color: #1B5E8C; word-break: break-all;">${magnetUrl}</a>
      </p>
      <p style="line-height: 1.7; color: #444;">
        From here you'll get one essay a month — what it actually takes to
        operate on AI, written from inside a live operation. Reply any time;
        I read everything.
      </p>
      <p style="line-height: 1.7; color: #444;">— Eitan</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Eitan Gorodetsky <noreply@eitangorodetsky.com>",
      to: [email],
      subject: "You're in — here's the teardown",
      html,
    }),
  });
  if (!res.ok) {
    console.error("Welcome/magnet send error:", await res.text());
  }
}
