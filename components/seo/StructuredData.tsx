import Script from 'next/script';

interface StructuredDataProps {
  page?: 'home' | 'systems-audit' | 'calculator';
}

export default function StructuredData({ page = 'home' }: StructuredDataProps) {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Peak Systems',
    alternateName: 'Peak Systems Business Automation',
    url: 'https://peak-systems.com',
    logo: 'https://peak-systems.com/logo.png',
    description: 'We help business owners stop working 70-hour weeks by building AI systems that automate repetitive tasks and give them 5-15 hours back weekly.',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Peak Systems Founder'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    knowsAbout: [
      'Business Automation',
      'AI Systems',
      'Workflow Optimization',
      'Process Automation',
      'Business Systems',
      'Productivity Solutions'
    ]
  };

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Systems Automation',
    description: 'Complete business automation services that help owners reclaim 5-15 hours weekly through AI-powered systems and workflow optimization.',
    provider: {
      '@type': 'Organization',
      name: 'Peak Systems'
    },
    serviceType: 'Business Automation Consulting',
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Business Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Systems Audit',
            description: 'Free 30-minute consultation to identify repetitive tasks and automation opportunities'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Process Automation',
            description: 'Custom automation solutions that eliminate repetitive tasks and streamline workflows'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Integration',
            description: 'Implementation of AI tools and systems to handle routine business operations'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '30',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Peak Systems - Business Automation',
    alternateName: 'Peak Systems',
    url: 'https://peak-systems.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://peak-systems.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Page-specific structured data
  const getPageSpecificData = () => {
    switch (page) {
      case 'systems-audit':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Free Systems Audit - Peak Systems',
          description: 'Book a free 30-minute systems audit to discover exactly which tasks are stealing your time and how to automate them.',
          url: 'https://peak-systems.com/systems-audit',
          mainEntity: {
            '@type': 'Service',
            name: 'Free Systems Audit',
            description: 'Comprehensive business systems analysis to identify automation opportunities',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'Free 30-minute consultation'
            }
          }
        };
      
      case 'calculator':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Automation ROI Calculator - Peak Systems',
          description: 'Calculate the true cost of repetitive tasks and potential savings from business automation.',
          url: 'https://peak-systems.com/calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web Browser'
        };
      
      default:
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Peak Systems - Get Your Life Back Through Business Automation',
          description: 'Stop working 70+ hour weeks. We build AI systems that automate your repetitive tasks and give you 5-15 hours back every week.',
          url: 'https://peak-systems.com'
        };
    }
  };

  const combinedData = [
    organizationData,
    serviceData,
    websiteData,
    getPageSpecificData()
  ];

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedData, null, 2)
      }}
    />
  );
}