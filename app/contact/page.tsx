import type { Metadata } from 'next';
import { ContactPage } from '@/src/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us & Request RFQ | Suffix IT Solutions',
  description:
    'Contact Suffix IT Solutions Ltd. at Rupayan Millennium Square, North Badda, Gulshan, Dhaka-1212. Direct phone: +88 01958 424000.',
};

export default function Page() {
  return <ContactPage />;
}
