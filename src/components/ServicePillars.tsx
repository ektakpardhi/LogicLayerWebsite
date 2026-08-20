import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PRIMARY_SERVICES } from '@/data/services';
import SectionHeading from './SectionHeading';

export default function ServicePillars() {
  return (
    <section className="section-pad bg-[#f6f6f1]" id="services">
      <div className="container-shell">
        <SectionHeading
          eyebrow="01 / CORE CAPABILITIES"
          title={
            <>
              Make the <em className="text-orange-500">complex</em> useful.
            </>
          }
          description="Connected delivery across software, quality, AI, cloud, and managed support."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRIMARY_SERVICES.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.id} className="pillar-card block transition hover:-translate-y-1 hover:border-orange-500">
              <div className="pillar-card-top bg-blue-700">
                <span>{service.title}</span>
                <span>{service.features?.length || 0} focus areas</span>
              </div>
              <div className="p-5">
                <p className="mb-4 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="space-y-2 border-t border-slate-200 pt-4">
                  {service.features?.slice(0, 3).map((feature) => (
                    <div key={feature} className="text-sm text-slate-700">• {feature}</div>
                  ))}
                </div>
                <span className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:text-orange-500">
                  Learn more <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
