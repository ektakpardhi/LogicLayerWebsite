import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';

export default function StaffingPage() {
  return (
    <PageFrame
      eyebrow="STAFFING / PEOPLE"
      title={
        <>
          Flexible talent for the <em className="text-orange-500">work that moves you.</em>
        </>
      }
      intro="We help teams access the right technical talent to support delivery, fill short-term gaps, and accelerate critical projects without compromising quality."
    >
      <PageSection
        eyebrow="01 / WHAT WE DO"
        title={
          <>
            Skilled people. <em className="text-orange-500">Measured outcomes.</em>
          </>
        }
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border-t-2 border-slate-950 pt-5">
            <p className="text-xl leading-9 text-slate-700">
              LogicLayer helps companies scale engineering, QA, cloud, and data teams with flexible staffing models tailored to project needs, delivery velocity, and budget realities.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Contract developers',
                'QA and automation engineers',
                'Cloud and DevOps specialists',
                'Data and analytics talent',
                'Product and business analysts',
                'Interim technical leadership',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-8 text-white">
            <p className="eyebrow text-yellow-300">WHY TEAMS USE US</p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Need capacity without the hiring delay?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              We can help you staff focused technical roles, support urgent delivery needs, and provide experienced professionals who can contribute quickly and securely.
            </p>
            <Link href="/schedule" className="btn-yellow mt-7">
              Talk to us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </PageSection>
    </PageFrame>
  );
}
