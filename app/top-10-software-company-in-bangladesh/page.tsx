import type { Metadata } from 'next';
import { TopCompaniesPage } from '@/src/pages/TopCompaniesPage';

export const metadata: Metadata = {
  title: 'Top 10 Software Companies in Bangladesh | Suffix IT Solutions',
  description:
    'Independent industry ranking and overview of the leading enterprise software companies, fintech providers, and IT consultancies in Bangladesh.',
};

export default function Page() {
  return <TopCompaniesPage />;
}
