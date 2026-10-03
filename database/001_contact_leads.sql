-- Ichthus website contact leads
-- Apply to a dedicated Neon project/database for the Ichthus commercial website.

create table if not exists contact_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'won', 'lost', 'spam')),
  locale text not null
    check (locale in ('en', 'pt')),
  name text not null,
  company text not null,
  email text not null,
  market text not null,
  message text not null,
  source_path text,
  referrer text,
  user_agent text,
  country_code text,
  notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sent', 'failed', 'skipped')),
  notification_error text,
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists contact_leads_created_at_idx
  on contact_leads (created_at desc);

create index if not exists contact_leads_status_idx
  on contact_leads (status, created_at desc);

create index if not exists contact_leads_email_idx
  on contact_leads (lower(email));
