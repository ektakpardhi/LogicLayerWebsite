import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { getServiceDetail, SERVICE_DETAILS, type ServiceDetail } from '@/data/services';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

function ServiceCard({ service }: { service: ServiceDetail }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block border border-slate-300 bg-white p-5 transition hover:-translate-y-1 hover:border-orange-500">
      <div className="flex items-start justify-between gap-4">
        <span className="eyebrow text-blue-700">{service.shortTitle}</span>
        <ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500" />
      </div>
      <h3 className="mt-8 text-xl font-bold leading-tight tracking-[-0.04em] text-slate-950">{service.shortTitle}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
    </Link>
  );
}

export default function ServicePage({ service }: { service: ServiceDetail }) {
  const related = service.relatedServices.map(getServiceDetail).filter((item): item is ServiceDetail => Boolean(item));

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-300 bg-white py-12 sm:py-20">
          <div className="container-shell">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-slate-500">
              <Link href="/" className="hover:text-blue-700">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-blue-700">Services</Link><span>/</span>
              <span className="text-slate-950">{service.shortTitle}</span>
            </nav>
            <div className="mt-12 max-w-5xl">
              <span className="eyebrow text-blue-700">SERVICE / {service.shortTitle}</span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[0.9] tracking-[-0.08em] text-slate-950 sm:text-7xl lg:text-8xl">{service.hero}</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">{service.description}</p>
              <Link href="/schedule" className="btn-primary mt-9">Schedule With Us <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#f6f6f1]">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="01 / OVERVIEW" title={<>Technology aligned to <em className="text-orange-500">the outcome.</em></>} />
            <p className="border-t-2 border-slate-950 pt-5 text-xl leading-9 text-slate-700">{service.overview}</p>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell">
            <SectionHeading eyebrow="02 / WHAT WE DO" title={<>Make the work <em className="text-orange-500">move.</em></>} description={service.description} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.capabilities.map((capability, index) => <div key={capability} className="border-t-2 border-slate-950 p-5"><span className="font-mono text-[10px] text-blue-700">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-8 text-lg font-bold tracking-[-0.04em] text-slate-950">{capability}</h3></div>)}
            </div>
          </div>
        </section>

        <section className="section-pad bg-slate-950 text-white">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <SectionHeading dark eyebrow="03 / BUSINESS BENEFITS" title={<>Useful change, <em>measured.</em></>} />
            <div className="grid gap-3 sm:grid-cols-2">{service.benefits.map((benefit) => <div key={benefit} className="flex gap-3 border border-slate-700 p-4 text-sm text-slate-200"><Check size={17} className="shrink-0 text-yellow-300" />{benefit}</div>)}</div>
          </div>
        </section>

        <section className="section-pad bg-yellow-300">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="04 / OUR APPROACH" title={<>Clear thinking. <em className="text-blue-700">Useful momentum.</em></>} />
            <div className="process-list">{service.approach.map((step, index) => <div key={step} className="process-item"><span>0{index + 1}</span><div><h3>{step}</h3><p>Keep decisions visible, delivery practical, and progress connected to the business goal.</p></div></div>)}</div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="05 / TECHNOLOGIES" title={<>Tools that serve <em className="text-orange-500">the work.</em></>} />
            <div className="space-y-7">
              {(service.techStack ?? [{ category: 'Core technologies', tools: service.technologies }]).map((stack) => (
                <div key={stack.category} className="border-t-2 border-slate-950 pt-4">
                  <p className="eyebrow text-blue-700">{stack.category}</p>
                  <div className="mt-4 flex flex-wrap gap-3">{stack.tools.map((technology) => <span key={technology} className="border border-slate-300 px-4 py-3 font-mono text-xs uppercase text-slate-700">{technology}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-slate-950 text-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading dark eyebrow="06 / DELIVERY DETAILS" title={<>What you can expect <em>from the work.</em></>} />
            <div className="grid gap-10 sm:grid-cols-2">
              <div><p className="eyebrow text-yellow-300">TYPICAL DELIVERABLES</p><div className="mt-5 space-y-4">{(service.deliverables ?? []).map((item) => <div key={item} className="flex gap-3 border-b border-slate-700 pb-4 text-sm leading-6 text-slate-200"><Check size={16} className="mt-1 shrink-0 text-orange-500" />{item}</div>)}</div></div>
              <div><p className="eyebrow text-yellow-300">ENGAGEMENT OPTIONS</p><div className="mt-5 space-y-3">{(service.engagementModels ?? []).map((item, index) => <div key={item} className="flex gap-3 border border-slate-700 p-4 text-sm text-slate-200"><span className="font-mono text-xs text-orange-500">0{index + 1}</span>{item}</div>)}</div></div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-yellow-300">
          <div className="container-shell">
            <SectionHeading eyebrow="07 / DELIVERY PROCESS" title={<>From first question to <em className="text-blue-700">lasting value.</em></>} description="A practical path that keeps decisions visible, progress measurable, and the team aligned from discovery through improvement." />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{(service.processDetails ?? service.approach.map((step) => ({ title: step, description: 'Keep the work connected to the business goal with clear decisions and visible progress.' }))).map((step, index) => <div key={step.title} className="border-t-2 border-slate-950 pt-5"><span className="font-mono text-xs text-blue-700">0{index + 1}</span><h3 className="mt-8 text-2xl font-bold tracking-[-0.05em] text-slate-950">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{step.description}</p></div>)}</div>
          </div>
        </section>

        <section className="section-pad bg-[#f6f6f1]">
          <div className="container-shell">
            <SectionHeading eyebrow="08 / FAQ" title={<>Questions worth <em className="text-orange-500">asking.</em></>} />
            <div className="grid gap-4 lg:grid-cols-2">{service.faqs.map((faq) => <details key={faq.question} className="border-t-2 border-slate-950 p-5"><summary className="cursor-pointer pr-6 text-lg font-bold tracking-[-0.04em] text-slate-950">{faq.question}</summary><p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">{faq.answer}</p></details>)}</div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell"><SectionHeading eyebrow="09 / RELATED SERVICES" title={<>Explore Related <em className="text-orange-500">Services.</em></>} /><div className="grid gap-5 md:grid-cols-3">{related.map((item) => <ServiceCard key={item.slug} service={item} />)}</div></div>
        </section>

        <section className="cta-band"><div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow text-yellow-300">READY TO TALK?</p><h2>Have a project <em>in mind?</em></h2><p>Let&apos;s discuss your goals, timeline, and technology needs.</p></div><Link href="/schedule" className="btn-yellow">Schedule With Us <ArrowUpRight size={16} /></Link></div></section>
      </main>
      <Footer />
    </>
  );
}

export { SERVICE_DETAILS };