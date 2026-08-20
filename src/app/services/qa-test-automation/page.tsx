import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';
import { getServiceBySlug } from '@/data/services';

export default function Page() {
  const service = getServiceBySlug('qa-test-automation');

  if (!service) return null;

  return (
    <PageFrame
      eyebrow="SERVICES / QA & TEST AUTOMATION"
      title={
        <>
          Quality engineering for <em className="text-orange-500">faster, safer releases.</em>
        </>
      }
      intro="We improve software quality through modern testing strategy, automation, and engineering practices that help teams release with more confidence."
    >
      <PageSection
        eyebrow="01 / QUALITY STRATEGY"
        title={
          <>
            Catch issues earlier and ship with <em className="text-orange-500">more confidence.</em>
          </>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="border-t-2 border-slate-950 pt-5">
            <p className="text-xl leading-9 text-slate-700">
              LogicLayer helps businesses reduce release risk with a quality approach that combines strategic testing, automation, performance coverage, and practical collaboration across product teams.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Manual and functional testing',
                'Regression and integration testing',
                'API and UI automation',
                'End-to-end testing',
                'Performance and accessibility testing',
                'CI/CD test integration',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-8 text-white">
            <p className="eyebrow text-yellow-300">RESULT</p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Less uncertainty. More release confidence.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Better quality practices reduce defects, improve release predictability, and help teams move faster without risking the customer experience.
            </p>
            <Link href="/schedule" className="btn-yellow mt-7">
              Discuss your QA strategy <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </PageSection>
    </PageFrame>
  );
}
