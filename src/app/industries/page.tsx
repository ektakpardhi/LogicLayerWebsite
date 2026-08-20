import PageFrame, { PageSection } from '@/components/PageFrame';
import { INDUSTRIES } from '@/data/industries';

export default function IndustriesPage() {
  return (
    <PageFrame eyebrow="INDUSTRIES / CONTEXT" title={<>Built for <em className="text-orange-500">high-stakes</em> work.</>} intro="Different industries bring different constraints. We meet the context with practical engineering, careful communication, and systems designed to last.">
      <PageSection eyebrow="01 / WHERE WE HELP" title={<>Context changes the <em className="text-orange-500">right answer.</em></>}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{INDUSTRIES.map((industry, index) => <article className="industry-card" key={industry.id}><span>0{index + 1}</span><h3>{industry.name}</h3><p>{industry.description}</p><small>{industry.focus}</small></article>)}</div>
      </PageSection>
    </PageFrame>
  );
}
