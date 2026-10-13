import React, { useEffect } from 'react';
import { companyData } from '../data/company';

export const SeoStructuredData: React.FC = () => {
  useEffect(() => {
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://suffixit.com/#organization',
          name: companyData.name,
          url: 'https://suffixit.com',
          logo: 'https://suffixit.com/logo.png',
          foundingDate: '2017-07-01',
          description: companyData.history,
          telephone: companyData.phone,
          email: companyData.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: companyData.address.street,
            addressLocality: companyData.address.area,
            addressRegion: companyData.address.city,
            postalCode: '1212',
            addressCountry: 'BD',
          },
          sameAs: [
            companyData.socials.facebook,
            companyData.socials.linkedin,
            companyData.socials.twitter,
          ].filter(Boolean),
        },
        {
          '@type': 'WebSite',
          '@id': 'https://suffixit.com/#website',
          url: 'https://suffixit.com',
          name: 'Suffix IT Solutions',
          publisher: {
            '@id': 'https://suffixit.com/#organization',
          },
          inLanguage: 'en-US',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Rupantor ERP Suite',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Cross-platform, Web, Cloud',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          publisher: {
            '@id': 'https://suffixit.com/#organization',
          },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Smart Transformer IoT Telemetry',
          applicationCategory: 'IndustrialAutomation',
          operatingSystem: 'Embedded Linux, Cloud',
          publisher: {
            '@id': 'https://suffixit.com/#organization',
          },
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLdData);
    script.id = 'schema-org-jsonld';
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('schema-org-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  return null;
};
