# LogicLayer Website Architecture

## 1. Product Structure

### Public website

- `/` - Homepage with positioning, capabilities, proof, and primary CTA
- `/services` - CMS-driven service catalogue
- `/services/[slug]` - Service detail pages
- `/solutions` - Outcome-oriented solution groups
- `/industries` - CMS-driven industry pages
- `/case-studies` - CMS-driven proof and results
- `/about` - Company story, approach, and trust signals
- `/staffing` - Staffing capability and engagement model
- `/jobs` - Open roles and candidate CTA
- `/contact` - Contact form and company details
- `/schedule` - Meeting request and availability workflow
- `/studio/[[...tool]]` - Embedded Sanity Studio for editors

### Shared application shell

- Header and responsive navigation
- Services and primary CTA menus
- Footer with contact details and social links
- Page frame, section, typography, button, and form primitives
- Global metadata and brand settings

## 2. Application Design

### Frontend

- Next.js App Router renders public pages and server-side CMS data.
- React components own presentation and interaction state.
- `src/data` contains normalized domain loaders and temporary defaults.
- `src/sanity` contains Sanity configuration, schemas, queries, and clients.
- `src/lib/supabase.ts` is reserved for browser-safe Supabase access.
- Forms should submit through server actions or API route handlers, never expose service-role credentials.

### Content flow

```text
Editor -> Sanity Studio -> Sanity API -> Next.js server loader -> Page component
Visitor -> Next.js page -> Form endpoint/server action -> Supabase table
```

Sanity is the source of truth for marketing content. Supabase is the source of truth for operational records such as leads, appointments, applications, and workflow status.

### Reliability rules

- CMS loaders return normalized values and may use defaults while content is being entered.
- Public pages should tolerate empty optional CMS fields.
- Database writes require server-side validation and row-level security.
- Images should be rendered through Sanity image URLs rather than storing image binaries in Supabase.

## 3. Sanity CMS Design

### Documents

| Document | Purpose | Important relationships |
| --- | --- | --- |
| `siteSettings` | Global title, tagline, SEO, contact, colors, social links | Singleton document |
| `service` | Service name, descriptions, features, CTA, image | Referenced by industries and case studies |
| `industry` | Industry positioning, solutions, icon, description | References services |
| `caseStudy` | Client story, challenge, solution, results, image | References industry, services, testimonial |
| `testimonial` | Quote, author, role, company, image | Referenced by case studies |
| `blog` | Editorial content, body, categories, author, cover image | Standalone |
| `faq` | Question, answer, category, ordering | Standalone |

### Editorial conventions

- Every routable document needs a required slug.
- Use `order` for manually curated lists and `publishedAt` for editorial chronology.
- Use references for shared entities instead of duplicating titles.
- Keep marketing copy in Sanity; keep navigation and application behavior in code until an explicit navigation schema is needed.

## 4. Supabase Database Design

Supabase should store user-submitted and operational data, not duplicate Sanity marketing documents.

### Core tables

#### `contact_submissions`

- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `name text not null`
- `email text not null`
- `company text`
- `phone text`
- `subject text`
- `message text not null`
- `status text not null default 'new'` with values `new`, `in_progress`, `closed`, `spam`
- `source text`

#### `appointments`

- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `meeting_type text not null`
- `starts_at timestamptz not null`
- `ends_at timestamptz not null`
- `timezone text not null`
- `first_name text not null`
- `last_name text not null`
- `email text not null`
- `company text`
- `phone text`
- `service_slug text`
- `project_description text`
- `budget text`
- `timeline text`
- `status text not null default 'pending'` with values `pending`, `confirmed`, `cancelled`, `completed`
- `notes text`

#### `job_applications`

- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `job_title text not null`
- `name text not null`
- `email text not null`
- `resume_path text`
- `linkedin_url text`
- `message text`
- `status text not null default 'new'` with values `new`, `reviewing`, `interview`, `rejected`, `hired`

#### `newsletter_subscribers`

- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `email text unique not null`
- `status text not null default 'subscribed'`

### Security model

- Enable RLS on every table.
- Public clients may insert validated submissions only.
- Public clients must not select submissions, appointments, or applications.
- Admin workflows should use authenticated users and explicit policies.
- Store uploaded resumes in a private Supabase Storage bucket and expose files through signed URLs.
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only; never prefix it with `NEXT_PUBLIC_`.

## 5. Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-08-19
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

The Sanity project and Supabase project must be created separately. Sanity credentials are required for content reads; Supabase URL and anon key are required for browser-safe client initialization; the service-role key is required only for trusted server operations.

## 6. Recommended Build Order

1. Create the Sanity project and enter Website Settings, Services, Industries, FAQs, Testimonials, and Case Studies.
2. Connect the remaining public list and detail pages to the existing Sanity loaders.
3. Create Supabase tables, RLS policies, and private storage buckets through migrations.
4. Implement validated contact, schedule, and job application endpoints.
5. Add authenticated admin views or connect an external workflow tool for operational records.
6. Add preview/live editing after the production Sanity dataset and draft workflow are confirmed.