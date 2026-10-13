import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern use of the Peak Systems website, services, and apps.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="October 12, 2026">
      <p>
        These terms govern your use of peaksystems.io and the services and apps provided by Channel Crafters LLC, a New York limited liability company doing business as Peak Systems (&quot;Peak Systems,&quot; &quot;we,&quot; &quot;us&quot;). By using our website, services, or apps, you agree to these terms.
      </p>

      <h2>Our services</h2>
      <p>
        We build AI systems and automation for businesses, including bookkeeping support such as transaction categorization, reporting, and preparing records for your tax professional. If you sign a separate written agreement with us, that agreement controls where it differs from these terms.
      </p>

      <h2>Connected accounts</h2>
      <p>
        Some of our services connect to third-party accounts, such as QuickBooks Online. By authorizing a connection, you confirm you have the authority to grant us access to that account, and you allow us to read and update its data to perform the services you requested. You can disconnect at any time. Your use of a third-party service is governed by that provider&apos;s own terms.
      </p>

      <h2>Not tax, legal, or financial advice</h2>
      <p>
        We are not a CPA firm, law firm, or financial advisor. Our work, including AI-assisted categorization and reports, is provided for your review. You are responsible for reviewing it and for decisions based on it. Consult a licensed professional for tax, legal, or financial advice.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Give us accurate information and keep it current.</li>
        <li>Use our website, services, and apps only for lawful purposes.</li>
        <li>Keep your account credentials secure.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The content, design, and code of our website and apps belong to us or our licensors. You keep ownership of your business data.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Our website, services, and apps are provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, express or implied, to the fullest extent the law allows.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, Peak Systems will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits or data. Our total liability for any claim is limited to the amount you paid us in the 12 months before the claim, or $100 if you have paid nothing.
      </p>

      <h2>Indemnity</h2>
      <p>
        You agree to defend and hold Peak Systems harmless from claims arising from your misuse of our website, services, or apps, or your violation of these terms.
      </p>

      <h2>Ending access</h2>
      <p>
        You can stop using our services and disconnect our apps at any time. We may suspend or end access if these terms are violated.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of New York, and disputes will be resolved in the courts located in New York.</p>

      <h2>Changes to these terms</h2>
      <p>If we change these terms, we will post the new version here and update the effective date.</p>

      <h2>Contact</h2>
      <p>
        Channel Crafters LLC, doing business as Peak Systems<br />
        Email: <a href="mailto:billy@peaksystems.io">billy@peaksystems.io</a>
      </p>
    </LegalPage>
  );
}
