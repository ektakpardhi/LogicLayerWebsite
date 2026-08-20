import PageFrame, { PageSection } from '@/components/PageFrame';

const principles = ['Curiosity before certainty', 'Clarity in every handoff', 'Quality as a design decision', 'Systems built to be changed'];

export default function AboutPage() {
  return (
    <PageFrame eyebrow="ABOUT / THE PEOPLE BEHIND THE LAYER" title={<>Technology with <em className="text-orange-500">human judgment.</em></>} intro="LogicLayer Solutions is a woman-led technology consulting and engineering partner based in Washington, DC. We help teams make difficult technology work more understandable and more useful.">
      <PageSection eyebrow="01 / OUR APPROACH" title={<>Leave systems <em className="text-orange-500">better.</em></>}>
        <div className="grid gap-12 lg:grid-cols-2"><div className="border-l-4 border-orange-500 pl-6 text-xl leading-9 text-slate-700">We stay close to the problem, communicate clearly, and build the capability to keep moving after the engagement ends.</div><div className="grid gap-4">{principles.map((principle, index) => <div key={principle} className="flex gap-5 border-t border-slate-300 py-5"><span className="font-mono text-xs text-blue-700">0{index + 1}</span><strong className="text-xl tracking-[-0.04em]">{principle}</strong></div>)}</div></div>
      </PageSection>
    </PageFrame>
  );
}
