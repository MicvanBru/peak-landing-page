import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Peak Systems collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="October 12, 2026">
      <p>
        Peak Systems is a brand of Channel Crafters LLC, a New York limited liability company (&quot;Peak Systems,&quot; &quot;we,&quot; &quot;us&quot;). This policy explains what information we collect through peaksystems.io and through the services and apps we provide, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you give us.</strong> When you book a call or contact us, we collect your name, email address, phone number, and anything you tell us about your business.</li>
        <li><strong>Business data you connect.</strong> When you authorize one of our apps to connect to a service such as QuickBooks Online, we access the data that connection allows, such as your chart of accounts, transactions, vendors, customers, and financial reports.</li>
        <li><strong>Website usage.</strong> Our site uses Vercel Analytics and the Meta Pixel to record page visits, button clicks, and basic device and browser details. The Meta Pixel uses cookies.</li>
        <li><strong>Calculator inputs.</strong> The numbers you enter in our ROI calculator are processed in your browser and are not sent to us.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To provide the services you asked for, including bookkeeping, transaction categorization, reporting, and preparing records for your tax professional.</li>
        <li>To schedule calls, answer questions, and communicate with you about your account.</li>
        <li>To understand how our website is used and improve it.</li>
        <li>To meet legal obligations and protect our rights.</li>
      </ul>

      <h2>QuickBooks and other connected apps</h2>
      <p>
        We access your QuickBooks Online data only after you authorize the connection through Intuit, and only for the services you engaged us to perform. We do not sell your data, and we do not use it for advertising. You can disconnect our app at any time from your QuickBooks account or by emailing us. When you disconnect, we stop accessing your QuickBooks data. On request, we will delete the copies we hold, except records the law requires us to keep.
      </p>

      <h2>AI processing</h2>
      <p>
        We use AI tools, including models from providers such as Anthropic, to process data on your behalf, for example to suggest how transactions should be categorized. These providers process the data only to deliver that work to us.
      </p>

      <h2>How we share information</h2>
      <p>We do not sell personal information. We share it only with:</p>
      <ul>
        <li>Service providers that help us run our business, such as website hosting (Vercel), scheduling and customer management (GoHighLevel), analytics (Vercel and Meta), and AI providers, each limited to what they need to provide their service.</li>
        <li>Authorities, when the law requires it or to protect our rights and safety.</li>
        <li>A successor, if our business is sold or merged, under the same protections described here.</li>
      </ul>

      <h2>How long we keep information</h2>
      <p>
        We keep information for as long as we need it to provide our services and meet our legal, tax, and accounting obligations. After that, we delete it.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable safeguards to protect your information, including encrypted connections and access limited to the people and tools doing your work. No method of storage or transmission is perfectly secure.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can ask to see, correct, or delete the personal information we hold about you.</li>
        <li>You can disconnect any app you have connected at any time.</li>
        <li>You can block or delete cookies in your browser settings.</li>
      </ul>

      <h2>Children</h2>
      <p>Our services are for businesses and are not directed to children under 13. We do not knowingly collect their information.</p>

      <h2>Changes to this policy</h2>
      <p>If we change this policy, we will post the new version here and update the effective date.</p>

      <h2>Contact</h2>
      <p>
        Channel Crafters LLC, doing business as Peak Systems<br />
        Email: <a href="mailto:billy@peaksystems.io">billy@peaksystems.io</a>
      </p>
    </LegalPage>
  );
}
