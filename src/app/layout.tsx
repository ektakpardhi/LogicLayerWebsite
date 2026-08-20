import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'LogicLayer Solutions - Technology Consulting & Software Development',
  description: 'LogicLayer Solutions helps businesses transform complex technology challenges into scalable digital solutions. Experts in software development, AI, cloud, DevOps, and quality engineering.',
  keywords: ['software development', 'web development', 'AI automation', 'cloud DevOps', 'quality engineering', 'technology consulting'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
