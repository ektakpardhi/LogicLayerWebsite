import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';
import { getServiceBySlug } from '@/data/services';

export default function Page() {
  const service = getServiceBySlug('web-digital-solutions');

  if (!service) return null;

  return (
    <PageFrame
      eyebrow="SERVICES / WEB & DIGITAL SOLUTIONS"
      title={
        <>
          Digital experiences that <em className="text-orange-500">convert, engage, and scale.</em>
        </>
      }
      intro="We create modern websites, portals, and web applications that are easier to use, easier to trust, and better aligned with business goals."
    >
      <PageSection
        eyebrow="01 / WHAT WE DELIVER"
        title={
          <>
            Productive digital experiences for <em className="text-orange-500">customers, users, and teams.</em>
          </>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="border-t-2 border-slate-950 pt-5">
            <p className="text-xl leading-9 text-slate-700">
              From business websites and customer portals to commerce experiences and internal web applications, we design and build digital products that support clarity, efficiency, and trust.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Corporate websites',
                'Customer portals',
                'Web applications',
                'E-commerce development',
                'CMS development',
                'Website redesign and maintenance',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-8 text-white">
            <p className="eyebrow text-yellow-300">WHY IT MATTERS</p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em]">A better experience drives better outcomes.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              The right digital experience reduces friction, increases trust, and helps teams deliver clearer value to the people they serve.
            </p>
            <Link href="/schedule" className="btn-yellow mt-7">
              Talk with our team <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </PageSection>
    </PageFrame>
  );
}
