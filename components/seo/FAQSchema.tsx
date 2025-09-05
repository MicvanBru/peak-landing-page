import Script from 'next/script';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
  page?: string;
}

export default function FAQSchema({ faqs, page }: FAQSchemaProps) {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `Frequently Asked Questions - ${page ? page : 'Peak Systems'}`,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <Script
      id={`faq-schema-${page ? page.toLowerCase().replace(/\s+/g, '-') : 'default'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData, null, 2)
      }}
    />
  );
}

// Predefined FAQ data for different pages
export const systemsAuditFAQs: FAQ[] = [
  {
    question: "What exactly happens during the Systems Audit?",
    answer: "We'll spend 30 minutes identifying your biggest time drains, calculating the real cost, and showing you exactly what can be systematized. You'll leave with a clear action plan."
  },
  {
    question: "Is this actually free or is there a catch?",
    answer: "It's genuinely free. No hidden fees. We do this because business owners who see what's possible often want help implementing the systems we identify."
  },
  {
    question: "How do you know what systems will work for my business?",
    answer: "We've built systems for 30+ businesses across every industry. The patterns are remarkably similar - most businesses waste time on the same 5-7 categories of tasks."
  },
  {
    question: "What if I don't have time for systems right now?",
    answer: "That's exactly why you need this audit. If you don't have time to save time, you'll be stuck in the same cycle forever. 30 minutes now could save you 10+ hours every week."
  },
  {
    question: "How quickly can I see results from automation?",
    answer: "Most clients see immediate time savings within 1-2 weeks of implementing our systems. The average business owner gets back 5-15 hours per week within the first month."
  },
  {
    question: "What types of tasks can actually be automated?",
    answer: "We can automate data entry, email management, customer follow-ups, appointment scheduling, invoice processing, social media posting, report generation, and most recurring administrative tasks."
  }
];

export const homepageFAQs: FAQ[] = [
  {
    question: "How can AI systems actually save me 5-15 hours per week?",
    answer: "AI systems handle your repetitive tasks like data entry, email responses, scheduling, and customer follow-ups. The average business owner spends 21 hours weekly on tasks that can be automated, so 5-15 hours is a conservative estimate."
  },
  {
    question: "Will AI systems work for my specific industry?",
    answer: "Yes. We've implemented systems across 30+ industries. The core business processes (scheduling, communication, data management, follow-ups) are remarkably similar across all businesses, regardless of industry."
  },
  {
    question: "How much does business automation typically cost?",
    answer: "Most automation solutions pay for themselves within 30-60 days. When you're paying yourself $50-200/hour to do tasks that cost $5-50/hour to automate, the ROI is immediate and substantial."
  },
  {
    question: "What if the systems break or need updates?",
    answer: "We build robust systems with backup processes and provide ongoing support. Most automation runs reliably for months without intervention, and we monitor everything to catch issues before they impact your business."
  },
  {
    question: "How long does it take to implement automation systems?",
    answer: "Simple automations can be live within days. Complex workflows typically take 1-3 weeks. The key is starting with your biggest time drains first, so you see immediate results while we build out additional systems."
  },
  {
    question: "Do I need to be tech-savvy to use these systems?",
    answer: "Not at all. We design everything to be simple and intuitive. If you can send an email, you can use our systems. We handle all the technical complexity behind the scenes."
  }
];

export const calculatorFAQs: FAQ[] = [
  {
    question: "How accurate is this ROI calculation?",
    answer: "The calculator uses conservative estimates based on real client data from 30+ businesses. Most clients actually save more time than the calculator predicts, making it a reliable baseline for planning automation investments."
  },
  {
    question: "What factors should I consider beyond just time savings?",
    answer: "Beyond time savings, consider reduced stress, improved accuracy, better customer experience, ability to scale, and opportunity cost. When you're not doing repetitive tasks, you can focus on growing your business."
  },
  {
    question: "How do I know which tasks to automate first?",
    answer: "Start with tasks that are repetitive, time-consuming, and follow predictable patterns. Common high-impact areas include email management, data entry, appointment scheduling, and customer follow-ups."
  },
  {
    question: "What's the typical payback period for automation?",
    answer: "Most automation pays for itself within 30-60 days. High-frequency, time-intensive tasks often show ROI in less than 30 days, while complex custom solutions may take 2-3 months to break even."
  }
];