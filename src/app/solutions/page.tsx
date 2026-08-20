import PageFrame, { PageSection } from '@/components/PageFrame';
import { SOLUTIONS } from '@/data/solutions';

export default function SolutionsPage() {
  return (
    <PageFrame eyebrow="SOLUTIONS / OUTCOMES" title={<>Start with the <em className="text-orange-500">change.</em></>} intro="Technology is most useful when it answers a business question. Explore the outcomes we help teams move toward.">
      <PageSection eyebrow="01 / OUTCOME AREAS" title={<>From ambition to <em className="text-orange-500">operating advantage.</em></>}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{SOLUTIONS.map((solution, index) => <article className="industry-card" key={solution.id}><span>0{index + 1}</span><h3>{solution.title}</h3><p>{solution.description}</p><ul className="mt-7 grid gap-2 border-t border-slate-200 pt-5 text-sm text-slate-600">{solution.outcomes.map((outcome) => <li key={outcome}>+ {outcome}</li>)}</ul></article>)}</div>
      </PageSection>
    </PageFrame>
  );
}
