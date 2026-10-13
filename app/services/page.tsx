import type { Metadata } from 'next';
import { ServicesIndexPage } from '@/src/pages/ServicesIndexPage';

export const metadata: Metadata = {
  title: 'Engineering & Consulting Services | Suffix IT Solutions',
  description:
    'Full-lifecycle software engineering, ERP consulting, industrial IoT telemetry, IT infrastructure, and OT cybersecurity services.',
};

export default function Page() {
  return <ServicesIndexPage />;
}
