-- DEMO CRAZY 2K26 — separate Contact Us module
-- This migration is already applied to the connected Supabase project.
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  name text not null,
  phone text not null,
  photo text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

grant select on table public.contacts to anon;
grant select, insert, update, delete on table public.contacts to authenticated;
grant select, insert, update, delete on table public.contacts to service_role;

drop policy if exists "Public contacts are viewable by everyone" on public.contacts;
create policy "Public contacts are viewable by everyone"
on public.contacts for select
to anon, authenticated
using (true);

drop policy if exists "Admins can manage contacts" on public.contacts;
create policy "Admins can manage contacts"
on public.contacts for all
to authenticated
using ((select is_admin()))
with check ((select is_admin()));

alter publication supabase_realtime add table public.contacts;
