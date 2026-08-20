-- LogicLayer operational data. Marketing content remains in Sanity.

create extension if not exists pgcrypto;
create extension if not exists btree_gist;

create table if not exists public.meeting_types (
  id text primary key,
  name text not null,
  description text not null,
  duration_minutes integer not null check (duration_minutes between 15 and 240),
  category text not null check (category in ('consultation', 'discovery', 'support')),
  display_order integer not null default 100,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.availability_rules (
  id uuid primary key default gen_random_uuid(),
  day_of_week smallint not null check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  timezone text not null default 'America/New_York',
  is_active boolean not null default true,
  check (end_time > start_time)
);

create table if not exists public.blocked_schedule_dates (
  date date primary key,
  reason text,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (length(trim(name)) between 2 and 160),
  email text not null check (length(trim(email)) between 3 and 320),
  company text,
  phone text,
  subject text,
  message text not null check (length(trim(message)) between 10 and 5000),
  status text not null default 'new' check (status in ('new', 'in_progress', 'closed', 'spam')),
  source text not null default 'contact'
);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  meeting_type_id text not null references public.meeting_types(id),
  appointment_date date not null,
  start_time time not null,
  end_time time not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  timezone text not null,
  first_name text not null check (length(trim(first_name)) between 1 and 100),
  last_name text not null check (length(trim(last_name)) between 1 and 100),
  email text not null check (length(trim(email)) between 3 and 320),
  company text,
  phone text,
  website text,
  job_title text,
  service_slug text,
  project_description text,
  budget text,
  timeline text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled', 'completed', 'rescheduled')),
  calendar_event_id text,
  notes text,
  check (end_time > start_time),
  check (ends_at > starts_at)
);

alter table public.appointments
  add constraint appointments_no_overlap
  exclude using gist (
    tstzrange(starts_at, ends_at, '[)') with &&
  ) where (status in ('pending', 'confirmed', 'rescheduled'));

create table if not exists public.job_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  job_title text not null,
  name text not null check (length(trim(name)) between 2 and 160),
  email text not null check (length(trim(email)) between 3 and 320),
  phone text,
  resume_path text,
  linkedin_url text,
  message text,
  status text not null default 'new' check (status in ('new', 'reviewing', 'interview', 'rejected', 'hired'))
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text unique not null check (length(trim(email)) between 3 and 320),
  status text not null default 'subscribed' check (status in ('subscribed', 'unsubscribed'))
);

create index if not exists appointments_date_idx on public.appointments (appointment_date, start_time);
create index if not exists appointments_email_idx on public.appointments (lower(email));
create index if not exists contact_submissions_status_idx on public.contact_submissions (status, created_at desc);
create index if not exists job_applications_status_idx on public.job_applications (status, created_at desc);

insert into public.meeting_types (id, name, description, duration_minutes, category, display_order)
values
  ('technology-consultation', 'Technology Consultation', 'Discuss technology challenges, roadmap, architecture, or modernization plans.', 30, 'consultation', 1),
  ('software-development-consultation', 'Software Development Consultation', 'Discuss a new application, SaaS product, website, portal, API, or software platform.', 30, 'consultation', 2),
  ('ai-automation-consultation', 'AI & Automation Consultation', 'Explore opportunities to use AI and automation to improve business processes.', 30, 'consultation', 3),
  ('qa-test-automation-consultation', 'QA & Test Automation Consultation', 'Discuss software quality, testing strategy, automation, and release confidence.', 30, 'consultation', 4),
  ('cloud-devops-consultation', 'Cloud & DevOps Consultation', 'Discuss cloud migration, DevOps, CI/CD, infrastructure, or application modernization.', 30, 'consultation', 5),
  ('managed-technology-services-consultation', 'Managed Technology Services', 'Discuss ongoing application maintenance, enhancements, QA, and technology support.', 30, 'support', 6)
on conflict (id) do update set
  name = excluded.name,
  description = excluded.description,
  duration_minutes = excluded.duration_minutes,
  category = excluded.category,
  display_order = excluded.display_order,
  updated_at = now();

insert into public.availability_rules (day_of_week, start_time, end_time, timezone)
select day_of_week, start_time::time, end_time::time, 'America/New_York'
from (values
  (1, '09:00', '12:00'), (1, '13:00', '17:00'),
  (2, '09:00', '12:00'), (2, '13:00', '17:00'),
  (3, '09:00', '12:00'), (3, '13:00', '17:00'),
  (4, '09:00', '12:00'), (4, '13:00', '17:00'),
  (5, '09:00', '12:00'), (5, '13:00', '17:00')
) as defaults(day_of_week, start_time, end_time)
where not exists (
  select 1
  from public.availability_rules existing
  where existing.day_of_week = defaults.day_of_week
    and existing.start_time = defaults.start_time::time
    and existing.end_time = defaults.end_time::time
    and existing.timezone = 'America/New_York'
);

alter table public.meeting_types enable row level security;
alter table public.availability_rules enable row level security;
alter table public.blocked_schedule_dates enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.appointments enable row level security;
alter table public.job_applications enable row level security;
alter table public.newsletter_subscribers enable row level security;

create policy "Anyone can read active meeting types"
  on public.meeting_types for select
  to anon, authenticated
  using (is_active = true);

create policy "Anyone can read active availability rules"
  on public.availability_rules for select
  to anon, authenticated
  using (is_active = true);

create policy "Anyone can read blocked dates"
  on public.blocked_schedule_dates for select
  to anon, authenticated
  using (true);

create policy "Anyone can submit contact forms"
  on public.contact_submissions for insert
  to anon, authenticated
  with check (status = 'new');

create policy "Anyone can create pending appointments"
  on public.appointments for insert
  to anon, authenticated
  with check (status = 'pending');

create policy "Anyone can submit job applications"
  on public.job_applications for insert
  to anon, authenticated
  with check (status = 'new');

create policy "Anyone can subscribe to the newsletter"
  on public.newsletter_subscribers for insert
  to anon, authenticated
  with check (status = 'subscribed');

-- Operational reads and updates should be performed by a trusted server or an authenticated admin role.