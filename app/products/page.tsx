import type { Metadata } from 'next';
import { ProductsIndexPage } from '@/src/pages/ProductsIndexPage';

export const metadata: Metadata = {
  title: 'Enterprise Software Products | Suffix IT Solutions',
  description:
    'Explore Suffix IT software products: Rupantor ERP, Suffix Payroll, Interconnect Billing, Smart Transformer IoT, and Omnichannel E-Commerce.',
};

export default function Page() {
  return <ProductsIndexPage />;
}
