import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';

export default function JobsPage() {
  return (
    <PageFrame
      eyebrow="JOBS / CAREERS"
      title={
        <>
          Build meaningful work with a <em className="text-orange-500">technology team that cares.</em>
        </>
      }
      intro="We’re building a network of thoughtful, technically strong professionals who want to help clients solve real problems with modern software, AI, cloud, and quality engineering."
    >
      <PageSection
        eyebrow="01 / OPEN ROLES"
        title={
          <>
            Opportunities across <em className="text-orange-500">engineering and delivery.</em>
          </>
        }
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {[
            {
              title: 'Software Engineer',
              summary: 'Design and build customer-facing and internal applications using modern engineering practices.',
            },
            {
              title: 'QA Engineer',
              summary: 'Drive automated and manual test strategy to help teams ship more confidently and more often.',
            },
            {
              title: 'Cloud & DevOps Engineer',
              summary: 'Deliver resilient, scalable infrastructure and automated deployment pipelines in modern cloud environments.',
            },
            {
              title: 'AI & Automation Consultant',
              summary: 'Help teams identify, prototype, and operationalize practical AI and automation solutions.',
            },
          ].map((job) => (
            <article key={job.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="eyebrow text-blue-700">FULL-TIME / CONTRACT</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-950">{job.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{job.summary}</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-orange-500">
                Apply now <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </PageSection>
    </PageFrame>
  );
}
