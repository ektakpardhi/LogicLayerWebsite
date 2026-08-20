import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';
import { SERVICE_DETAILS } from '@/data/services';

export default function ServicesPage() {
  return (
    <PageFrame
      eyebrow="SERVICES / THE WORK"
        title={<>Technology Expertise Built Around <em className="text-orange-500">Your Business</em></>}
      intro="From custom software and digital experiences to AI, quality engineering, cloud modernization, and ongoing technology support, LogicLayer Solutions provides the technology capabilities businesses need to build, improve, and scale."
    >
      <PageSection
        eyebrow="01 / CORE CAPABILITIES"
        title={
          <>
            Our Technology <em className="text-orange-500">Services.</em>
          </>
        }
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SERVICE_DETAILS.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="pillar-card group block h-full transition hover:-translate-y-1 hover:border-orange-500">
              <div className="pillar-card-top bg-blue-700">
                <span>{String(index + 1).padStart(2, '0')} / {service.shortTitle}</span>
                <span>{service.capabilities.length} focus areas</span>
              </div>
              <div className="flex h-full flex-col p-6">
                <p className="mb-5 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-auto space-y-2">
                  {service.capabilities.slice(0, 4).map((feature) => (
                    <div key={feature} className="text-sm text-slate-700">• {feature}</div>
                  ))}
                </div>
                <span className="group mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 transition group-hover:text-orange-500">Explore Service <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="02 / STAFFING SOLUTIONS"
        title={
          <>
            Flexible talent for the <em className="text-orange-500">work that moves you.</em>
          </>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="border-t-2 border-slate-950 pt-5">
            <p className="text-xl leading-9 text-slate-700">
              Staffing is a core LogicLayer capability for teams that need fast, experienced technical support without the long cycle of hiring.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Contract and project-based engineering support',
                'On-demand QA and automation coverage',
                'Cloud and data talent for delivery gaps',
                'Interim leadership for modernization efforts',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-8 text-white">
            <p className="eyebrow text-yellow-300">WHY IT MATTERS</p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Need capacity without the hiring delay?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              We match experienced technical talent to your delivery needs quickly and thoughtfully so the work keeps moving.
            </p>
            <Link href="/services/staffing" className="btn-yellow mt-7">
              Explore staffing <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </PageSection>
    </PageFrame>
  );
}
