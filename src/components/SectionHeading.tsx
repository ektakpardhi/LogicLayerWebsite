import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className={`eyebrow ${dark ? 'text-yellow-300' : 'text-blue-700'}`}>{eyebrow}</p>
      <h2 className={`display-heading mt-4 ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {description && <p className={`mt-6 max-w-xl text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>}
    </div>
  );
}
