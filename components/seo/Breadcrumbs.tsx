import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

export default function Breadcrumbs({ items, currentPage }: BreadcrumbsProps) {
  // Create structured data for breadcrumbs
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://peak-systems.com'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `https://peak-systems.com${item.href}`
      })),
      {
        '@type': 'ListItem',
        position: items.length + 2,
        name: currentPage
      }
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData, null, 2)
        }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-muted">
            <li className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center gap-1 hover:text-accent transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
                <span className="sr-only sm:not-sr-only">Home</span>
              </Link>
            </li>
            
            {items.map((item) => (
              <li key={item.href} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-muted/60" />
                <Link 
                  href={item.href}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            
            <li className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-muted/60" />
              <span className="text-foreground font-medium" aria-current="page">
                {currentPage}
              </span>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}

// Predefined breadcrumb configurations for different pages
export const systemsAuditBreadcrumbs: BreadcrumbItem[] = [];

export const calculatorBreadcrumbs: BreadcrumbItem[] = [];

// For future use when adding more nested pages
export const getBreadcrumbs = (pathname: string): { items: BreadcrumbItem[], currentPage: string } => {
  switch (pathname) {
    case '/systems-audit':
      return {
        items: systemsAuditBreadcrumbs,
        currentPage: 'Free Systems Audit'
      };
    case '/calculator':
      return {
        items: calculatorBreadcrumbs,
        currentPage: 'ROI Calculator'
      };
    default:
      return {
        items: [],
        currentPage: 'Home'
      };
  }
};