import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getServiceDetail } from '@/data/services';

const service = getServiceDetail('application-modernization')!;
export const metadata: Metadata = { title: `${service.title} | LogicLayer Solutions`, description: service.metadataDescription };
export default function ApplicationModernizationPage() { return <ServicePage service={service} />; }