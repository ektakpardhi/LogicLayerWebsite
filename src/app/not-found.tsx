import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#f6f6f1] px-5 py-20"><div className="max-w-xl"><p className="eyebrow text-blue-700">404 / NOT FOUND</p><h1 className="mt-6 text-6xl font-extrabold leading-[0.9] tracking-[-0.08em] text-slate-950 sm:text-8xl">Page Not Found</h1><p className="mt-7 text-lg leading-8 text-slate-600">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/" className="btn-primary">Back to Home <ArrowUpRight size={16} /></Link><Link href="/services" className="btn-outline">View Services <ArrowUpRight size={16} /></Link><Link href="/contact" className="btn-outline">Contact Us <ArrowUpRight size={16} /></Link></div></div></main>;
}