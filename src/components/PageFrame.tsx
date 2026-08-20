import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SectionHeading from './SectionHeading';

interface PageFrameProps {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  children: React.ReactNode;
}

export default function PageFrame({ eyebrow, title, intro, children }: PageFrameProps) {
  return (
    <><Navbar /><main><section className="border-b border-slate-300 bg-white py-20 sm:py-28"><div className="container-shell"><p className="eyebrow text-blue-700">{eyebrow}</p><h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[0.9] tracking-[-0.08em] text-slate-950 sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">{intro}</p><Link href="/schedule" className="btn-primary mt-9">Schedule With Us <ArrowUpRight size={16} /></Link></div></section>{children}</main><Footer /></>
  );
}

export function PageSection({ eyebrow, title, children, dark = false }: { eyebrow: string; title: React.ReactNode; children: React.ReactNode; dark?: boolean }) {
  return <section className={`section-pad ${dark ? 'bg-slate-950 text-white' : 'bg-[#f6f6f1]'}`}><div className="container-shell"><SectionHeading eyebrow={eyebrow} title={title} dark={dark} />{children}</div></section>;
}
