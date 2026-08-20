import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import PageFrame, { PageSection } from '@/components/PageFrame';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  return (
    <PageFrame eyebrow="CONTACT / START HERE" title={<>Bring the <em className="text-orange-500">context.</em></>} intro="Contact us for a general inquiry, a request for information, or a conversation about a technology challenge. For project planning, schedule directly.">
      <PageSection eyebrow="01 / YOUR NEXT STEP" title={<>A useful conversation is a <em className="text-orange-500">good beginning.</em></>}>
        <div className="grid gap-5 md:grid-cols-2"><Link href="/schedule" className="outcome-card bg-slate-950 text-white"><span>PRIMARY PATH</span><h3>Schedule With Us</h3><p>Choose a conversation type, date, and time before sharing your project details.</p><ArrowUpRight className="text-orange-500" /></Link><a href={`mailto:${siteConfig.contact.email}`} className="outcome-card border-slate-300"><span>GENERAL INQUIRY</span><h3 className="text-slate-950">Send an email</h3><p className="text-slate-600">{siteConfig.contact.email}</p><Mail className="absolute bottom-6 right-6 text-blue-700" /></a></div>
      </PageSection>
    </PageFrame>
  );
}
