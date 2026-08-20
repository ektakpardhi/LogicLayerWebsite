import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SERVICES_MENU, siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 font-mono text-sm tracking-[0.12em]">
            <img src="/images/logiclayer-icon-option-monogram.svg" alt="LogicLayer" className="h-9 w-9" />
            <span>{siteConfig.company.logo}<small className="ml-2 text-[10px] text-gray-400">{siteConfig.company.logoSubtitle}</small></span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">{siteConfig.company.description}</p>
          <Link href={siteConfig.cta.href} className="mt-7 inline-flex items-center gap-3 bg-orange-500 px-4 py-3 font-mono text-xs uppercase text-gray-950 transition hover:bg-yellow-300">
            {siteConfig.cta.label}<ArrowUpRight size={15} />
          </Link>
        </div>
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-yellow-300">Explore</h2>
          <div className="mt-5 grid gap-3 text-sm text-gray-400">
            {siteConfig.navigation.slice(0, 6).map((item) => <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-yellow-300">Capabilities</h2>
          <div className="mt-5 grid gap-3 text-sm text-gray-400">
            {SERVICES_MENU.filter((service) => service.id !== 'services-overview').map((service) => <Link key={service.id} href={service.href} className="transition hover:text-white">{service.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-yellow-300">Start a conversation</h2>
          <p className="mt-5 text-sm leading-6 text-gray-400">Have a complex technology question? Bring the context. We will bring a clear next step.</p>
          <a href={`mailto:${siteConfig.contact.email}`} className="mt-5 inline-flex items-center gap-2 text-sm text-white hover:text-yellow-300"><Mail size={16} />{siteConfig.contact.email}</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-gray-800 px-4 py-5 font-mono text-[10px] uppercase tracking-[0.1em] text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} {siteConfig.company.name}</span>
        <span>{siteConfig.contact.address} / Built for what comes next</span>
      </div>
    </footer>
  );
}
