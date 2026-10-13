import type { Metadata } from 'next';
import { CareerPage } from '@/src/pages/CareerPage';

export const metadata: Metadata = {
  title: 'Careers & Job Openings | Suffix IT Solutions',
  description:
    'Explore high-growth career opportunities in enterprise software, business development, and engineering at Suffix IT in Dhaka.',
};

export default function Page() {
  return <CareerPage />;
}
