import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getServiceDetail } from '@/data/services';

const service = getServiceDetail('cloud-devops')!;
export const metadata: Metadata = { title: `${service.title} | LogicLayer Solutions`, description: service.metadataDescription };
export default function CloudDevopsPage() { return <ServicePage service={service} />; }