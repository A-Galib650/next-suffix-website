import type { Metadata } from 'next';
import { AboutPage } from '@/src/pages/AboutPage';

export const metadata: Metadata = {
  title: 'About Us | Suffix IT Solutions',
  description:
    'Suffix IT has been exporting quality software worldwide since 2017. Learn about our history, mission, vision, and enterprise technology focus.',
};

export default function Page() {
  return <AboutPage />;
}
