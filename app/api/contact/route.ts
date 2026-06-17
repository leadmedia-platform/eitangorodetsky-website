import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, reason, message } = await req.json();

    if (!name || !email || !reason || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const reasonLabels: Record<string, string> = {
      advisory: "Advisory / Consulting",
      speaking: "Speaking / Podcast",
      collaborate: "Collaboration",
      hello: "Just saying hello",
    };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a2733;">
        <h2 style="color: #1B5E8C; margin-bottom: 4px;">New message from eitangorodetsky.com</h2>
        <p style="color: #666; margin-top: 0; font-size: 14px;">Via the contact form</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 120px; color: #444;">Name</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #444;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1B5E8C;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #444;">Reason</td>
            <td style="padding: 8px 0;">${reasonLabels[reason] ?? reason}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <h3 style="margin-bottom: 8px; color: #444;">Message</h3>
        <p style="line-height: 1.7; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999;">Sent from eitangorodetsky.com contact form · Reply directly to this email to respond to ${name}.</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <noreply@eitangorodetsky.com>",
        to: ["eitangorodetsky@gmail.com"],
        reply_to: email,
        subject: `[eitangorodetsky.com] ${reasonLabels[reason] ?? reason} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
