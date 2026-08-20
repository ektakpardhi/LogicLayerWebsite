import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';
import { getServiceBySlug } from '@/data/services';

export default async function StaffingServicePage() {
  const service = await getServiceBySlug('staffing');

  if (!service) return null;

  return (
    <PageFrame
      eyebrow="SERVICES / STAFFING"
      title={
        <>
          Staffing for the <em className="text-orange-500">work that keeps moving.</em>
        </>
      }
      intro={service.longDescription || service.description}
    >
      <PageSection
        eyebrow="01 / THE MODEL"
        title={
          <>
            Flexible talent. <em className="text-orange-500">Clear outcomes.</em>
          </>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border-t-2 border-slate-950 pt-5">
            <p className="text-xl leading-9 text-slate-700">
              LogicLayer staffing solutions help teams add specialized technical capacity when a project demands speed, expertise, or flexibility. We place professionals who can integrate quickly and contribute with minimal ramp-up.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {service.features?.map((feature: string) => (
                <div key={feature} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-8 text-white">
            <p className="eyebrow text-yellow-300">WHEN TO USE IT</p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Need extra capacity fast?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Use staffing when the team needs immediate support, specialized expertise, or a short-term bridge while keeping strategic delivery on track.
            </p>
            <Link href="/schedule" className="btn-yellow mt-7">
              Schedule a staffing conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </PageSection>
    </PageFrame>
  );
}
