// Server-only helper for the owned newsletter list.
//
// Talks to Supabase PostgREST with the SERVICE ROLE key — no SDK dependency,
// matching the repo's fetch-the-API idiom (see app/api/contact/route.ts).
// NEVER import this into a client component: it reads the service-role key.
//
// Table: public.newsletter_subscribers (db/migrations/0001_newsletter_subscribers.sql).
// RLS denies anon/authenticated; the service role bypasses RLS.

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const TABLE = "newsletter_subscribers";

interface SubscriberRow {
  id: string;
  email: string;
  source: string | null;
  confirmed: boolean;
  confirm_token: string;
  created_at: string;
  confirmed_at: string | null;
}

async function rest(path: string, init: RequestInit): Promise<Response> {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    throw new Error("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not configured");
  }
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
}

/**
 * Insert a pending (unconfirmed) subscriber, or return the existing token for
 * an email that is still unconfirmed so the opt-in can be re-sent. Returns
 * `alreadyConfirmed: true` (token null) when the email is already on the list —
 * the caller should respond with a silent success and send nothing.
 */
export async function upsertPendingSubscriber(
  email: string,
  source: string
): Promise<{ token: string | null; alreadyConfirmed: boolean }> {
  const lookup = await rest(
    `${TABLE}?email=eq.${encodeURIComponent(email)}&select=confirmed,confirm_token`,
    { method: "GET" }
  );
  if (lookup.ok) {
    const rows = (await lookup.json()) as Pick<
      SubscriberRow,
      "confirmed" | "confirm_token"
    >[];
    if (rows.length > 0) {
      if (rows[0].confirmed) return { token: null, alreadyConfirmed: true };
      return { token: rows[0].confirm_token, alreadyConfirmed: false };
    }
  }

  const insert = await rest(TABLE, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ email, source }),
  });
  if (!insert.ok) {
    throw new Error(
      `subscriber insert failed: ${insert.status} ${await insert.text()}`
    );
  }
  const [row] = (await insert.json()) as SubscriberRow[];
  return { token: row.confirm_token, alreadyConfirmed: false };
}

/**
 * Confirm a subscriber by token. Returns `{ confirmed, email }` — `confirmed`
 * is true only when a still-pending row flipped this call (so the welcome +
 * lead-magnet email sends exactly once, not on repeat clicks). `email` is the
 * confirmed address (or null) so the caller can deliver the magnet.
 */
export async function confirmSubscriber(
  token: string
): Promise<{ confirmed: boolean; email: string | null }> {
  const res = await rest(
    `${TABLE}?confirm_token=eq.${encodeURIComponent(token)}&confirmed=eq.false`,
    {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({
        confirmed: true,
        confirmed_at: new Date().toISOString(),
      }),
    }
  );
  if (!res.ok) return { confirmed: false, email: null };
  const rows = (await res.json()) as SubscriberRow[];
  if (rows.length === 0) return { confirmed: false, email: null };
  return { confirmed: true, email: rows[0].email };
}

/** Confirmed, not-unsubscribed subscribers — the live send list. */
export async function getConfirmedSubscribers(): Promise<
  { email: string; confirm_token: string }[]
> {
  const res = await rest(
    `${TABLE}?confirmed=eq.true&unsubscribed_at=is.null&select=email,confirm_token`,
    { method: "GET" }
  );
  if (!res.ok) throw new Error(`subscriber list failed: ${res.status}`);
  return (await res.json()) as { email: string; confirm_token: string }[];
}

/** One-click unsubscribe by token (the per-row confirm_token doubles as it). */
export async function unsubscribeByToken(token: string): Promise<boolean> {
  const res = await rest(
    `${TABLE}?confirm_token=eq.${encodeURIComponent(token)}&unsubscribed_at=is.null`,
    {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ unsubscribed_at: new Date().toISOString() }),
    }
  );
  if (!res.ok) return false;
  const rows = (await res.json()) as SubscriberRow[];
  return rows.length > 0;
}
