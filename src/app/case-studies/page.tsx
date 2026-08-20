import PageFrame, { PageSection } from '@/components/PageFrame';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  return (
    <PageFrame eyebrow="CASE STUDIES / PERSPECTIVES" title={<>Proof over <em className="text-orange-500">promises.</em></>} intro="Our work starts with the real constraint and ends with a system, practice, or product your team can keep improving.">
      <PageSection eyebrow="01 / SELECTED WORK" title={<>Questions worth <em className="text-orange-500">solving.</em></>}>
        <div className="grid gap-10 lg:grid-cols-3">{CASE_STUDIES.map((study) => <article className="case-card" key={study.id}><span>{study.industry}</span><h3>{study.title}</h3><p>{study.result}</p><div>{study.services.map((service) => <small key={service}>{service}</small>)}</div></article>)}</div>
      </PageSection>
    </PageFrame>
  );
}
