-- One-click unsubscribe support (GDPR / CAN-SPAM) for the owned newsletter list.
-- A confirmed subscriber with unsubscribed_at set is excluded from all sends.
-- The existing confirm_token doubles as the unsubscribe token (per-row UUID).

alter table public.newsletter_subscribers
  add column if not exists unsubscribed_at timestamptz;
