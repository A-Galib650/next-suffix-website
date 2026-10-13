import type { Metadata } from 'next';
import './globals.css';
import { companyData } from '@/src/data/company';

export const metadata: Metadata = {
  metadataBase: new URL('https://suffixit.com'),
  title: {
    default: 'Suffix IT – Enterprise Software Solutions & Digital Transformation',
    template: '%s | Suffix IT Solutions',
  },
  description:
    'Suffix IT delivers enterprise software, ERP, Cloud, IoT, and custom digital transformation solutions with high availability, modern architecture, and proven reliability.',
  keywords: [
    'Enterprise Software Bangladesh',
    'ERP Software Dhaka',
    'Rupantor ERP',
    'Industrial IoT Telemetry',
    'Telecom Interconnect Billing',
    'Payroll Management Software',
    'Suffix IT Solutions',
  ],
  authors: [{ name: 'Suffix IT Solutions Ltd.' }],
  creator: 'Suffix IT Solutions Ltd.',
  publisher: 'Suffix IT Solutions Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suffixit.com',
    siteName: 'Suffix IT Solutions Ltd.',
    title: 'Suffix IT – Enterprise Software Solutions & Digital Transformation',
    description:
      'Suffix IT delivers enterprise software, ERP, Cloud, IoT, and custom digital transformation solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Suffix IT Solutions - Enterprise Software Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suffix IT – Enterprise Software Solutions',
    description:
      'Enterprise software, ERP, Cloud, IoT, and custom digital transformation solutions.',
    creator: '@suffixit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
