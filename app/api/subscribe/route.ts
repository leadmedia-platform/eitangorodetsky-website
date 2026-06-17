import { NextRequest, NextResponse } from "next/server";
import { upsertPendingSubscriber } from "@/lib/supabase";
import { SITE_URL } from "@/lib/constants";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const source =
      typeof body.source === "string" ? body.source.slice(0, 120) : "unknown";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const { token, alreadyConfirmed } = await upsertPendingSubscriber(
      email,
      source
    );

    // Already on the list → silent success (don't leak membership, don't re-email).
    if (alreadyConfirmed || !token) {
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Newsletter not yet wired (Resend pending). The subscriber row is already
      // stored (confirmed=false) as early-interest and will get a confirmation
      // email once the newsletter opens. Degrade gracefully — never 500 the form.
      return NextResponse.json({ success: true, pending: true });
    }

    const confirmUrl = `${SITE_URL}/api/confirm?token=${token}`;
    const html = `
      <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; color: #1a2733;">
        <h2 style="color: #1B5E8C; margin-bottom: 6px;">One click to confirm</h2>
        <p style="line-height: 1.7; color: #444;">
          Thanks for subscribing to my writing on building and operating an
          AI-native business. Confirm your email and you're in:
        </p>
        <p style="margin: 28px 0;">
          <a href="${confirmUrl}"
             style="background: #1B5E8C; color: #fff; text-decoration: none; padding: 12px 22px; border-radius: 999px; font-weight: 600; font-size: 14px;">
            Confirm subscription
          </a>
        </p>
        <p style="line-height: 1.7; color: #666; font-size: 13px;">
          If the button doesn't work, paste this link into your browser:<br />
          <a href="${confirmUrl}" style="color: #1B5E8C; word-break: break-all;">${confirmUrl}</a>
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="font-size: 12px; color: #999; line-height: 1.6;">
          You're receiving this because someone entered this address at
          eitangorodetsky.com. If that wasn't you, ignore this email and you
          won't be added — nothing happens until you confirm.
        </p>
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
        subject: "Confirm your subscription",
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend API error:", await res.text());
      return NextResponse.json(
        { error: "Failed to send confirmation email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
