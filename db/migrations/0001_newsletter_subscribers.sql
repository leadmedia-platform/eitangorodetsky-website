-- Owned newsletter list for eitangorodetsky.com
-- Lives in the shared Lead Media Supabase project (mbxdzqqnmreutaxacucg, Sydney).
-- Written/read SERVER-SIDE ONLY via the service role (app/api/subscribe + confirm).
-- RLS is enabled with NO policies, so anon + authenticated get zero access;
-- the service role bypasses RLS and is the sole reader/writer.
--
-- Apply via the operator-gated psql/pooler path:
--   psql "postgresql://postgres.mbxdzqqnmreutaxacucg:<pw>@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres"
--   (password from ~/.config/leadmedia/supabase-db-password, never echoed)

create table if not exists public.newsletter_subscribers (
  id            uuid        primary key default gen_random_uuid(),
  email         text        not null unique,
  source        text,                                   -- 'home' | 'essay:<slug>' | …
  confirmed     boolean     not null default false,     -- double opt-in gate
  confirm_token uuid        not null default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  confirmed_at  timestamptz
);

alter table public.newsletter_subscribers enable row level security;

-- Belt-and-braces: strip any default grants to the public-facing roles.
revoke all on public.newsletter_subscribers from anon, authenticated;
