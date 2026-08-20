import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';
import { Service } from '@/types';

export function ServiceDetailContent({ service }: { service: Service }) {
  const featureList = service.features || [];

  return (
    <PageFrame
      eyebrow={`SERVICES / ${service.category?.toUpperCase()}`}
      title={
        <>
          {service.title} for what comes <em className="text-orange-500">next.</em>
        </>
      }
      intro={service.longDescription || service.description}
    >
      <PageSection
        eyebrow="01 / THE OUTCOME"
        title={
          <>
            Make the work more <em className="text-orange-500">dependable.</em>
          </>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border-t-2 border-slate-950 pt-5">
            <p className="text-xl leading-9 text-slate-700">{service.description}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {featureList.map((feature) => (
                <div key={feature} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-8 text-white">
            <p className="eyebrow text-yellow-300">READY TO TALK?</p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Have a project in mind?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Let&apos;s talk about your goals, timeline, and technology needs.
            </p>
            <Link href="/schedule" className="btn-yellow mt-7">
              Schedule With Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </PageSection>
    </PageFrame>
  );
}
