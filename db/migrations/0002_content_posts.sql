-- Content distribution post-log for eitangorodetsky.com
-- One row per atomised post pushed to the scheduler (LinkedIn / X / newsletter).
-- This is the registry that joins post → GA4 traffic (via UTM) → newsletter
-- signups, so performance is attributable per post/platform.
--
-- Lives in the shared Lead Media Supabase project (mbxdzqqnmreutaxacucg).
-- Service-role only; RLS denies anon/authenticated (read by the dashboard
-- service key, written by the distribution pipeline).

create table if not exists public.content_posts (
  id                 uuid        primary key default gen_random_uuid(),
  essay_slug         text        not null,                 -- = utm_campaign
  channel            text        not null,                 -- 'linkedin' | 'x' | 'newsletter'
  variant            text        not null,                 -- 'li-1' | 'x-3' | 'newsletter' = utm_content
  scheduler          text,                                 -- 'typefully' | 'buffer' | 'manual'
  scheduler_draft_id text,                                 -- id returned by the scheduler API
  permalink          text,                                 -- live post URL once published
  scheduled_at       timestamptz,
  posted_at          timestamptz,
  created_at         timestamptz not null default now(),
  unique (essay_slug, channel, variant)
);

alter table public.content_posts enable row level security;
revoke all on public.content_posts from anon, authenticated;
