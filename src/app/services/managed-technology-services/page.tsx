import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';
import { getServiceBySlug } from '@/data/services';

export default function Page() {
  const service = getServiceBySlug('managed-technology-services');

  if (!service) return null;

  return (
    <PageFrame
      eyebrow="SERVICES / MANAGED TECHNOLOGY SERVICES"
      title={
        <>
          Ongoing support for the <em className="text-orange-500">technology you rely on.</em>
        </>
      }
      intro="We provide dependable application maintenance, production support, feature enhancements, and technical partnership so teams can stay focused on growth and delivery."
    >
      <PageSection
        eyebrow="01 / SUPPORT MODEL"
        title={
          <>
            Maintain momentum with <em className="text-orange-500">trusted operational support.</em>
          </>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="border-t-2 border-slate-950 pt-5">
            <p className="text-xl leading-9 text-slate-700">
              LogicLayer’s managed service model helps organizations keep systems healthy, resolve issues quickly, and continuously improve the software that powers operations and customer experience.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Application maintenance',
                'Production support',
                'Bug fixes and feature enhancements',
                'Monitoring and performance tuning',
                'Security update management',
                'Technical consulting and support',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-8 text-white">
            <p className="eyebrow text-yellow-300">VALUE</p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Less disruption. More consistency.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Ongoing support keeps critical systems optimized, secure, and responsive while giving your team room to focus on growth and innovation.
            </p>
            <Link href="/schedule" className="btn-yellow mt-7">
              Talk through your support needs <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </PageSection>
    </PageFrame>
  );
}
