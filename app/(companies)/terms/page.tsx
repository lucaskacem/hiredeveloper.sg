import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use | HireDeveloper.sg',
  description: 'Terms of Use for HireDeveloper.sg. Information about usage rights, obligations, and liability under Singapore jurisdiction.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="text-[40px] font-bold text-gray-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Last updated: February 2026
          </p>

          {/* Scope */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Scope
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              These Terms of Use apply to the use of the website and services of HireDeveloper.sg (hereinafter &ldquo;Provider&rdquo;). By using our website and services, you agree to these Terms of Use.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Deviating terms of the user will not be recognized unless the Provider expressly agrees to their validity in writing.
            </p>
          </section>

          {/* Service Description */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Service Description
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              HireDeveloper.sg operates an online platform for connecting businesses with remote professionals in software development, design, marketing, and project management. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-relaxed mb-4">
              <li>Placement of vetted freelance and full-time remote professionals</li>
              <li>Provision of talent profiles and evaluations</li>
              <li>Support throughout the hiring process</li>
              <li>Informational content and blog articles on remote work and talent acquisition</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              The Provider reserves the right to modify, expand, or restrict its services at any time.
            </p>
          </section>

          {/* Registration and User Account */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Registration and User Account
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Registration is required for certain services. When registering, you must provide truthful and complete information. You are obligated to keep your access credentials confidential and to protect them from third-party access.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              The Provider reserves the right to suspend or delete user accounts in the event of violations of these Terms of Use.
            </p>
          </section>

          {/* User Obligations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. User Obligations
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              The user agrees to use the website and offered services exclusively for lawful purposes. In particular, the following is prohibited:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-relaxed mb-4">
              <li>Providing false or misleading information during registration or the usage process</li>
              <li>Publishing content that violates applicable law or infringes on the rights of third parties</li>
              <li>Excessively loading the website or its infrastructure, or circumventing technical security mechanisms</li>
              <li>Using automated systems, bots, or scrapers without express permission</li>
              <li>Harassing, threatening, or otherwise interfering with the rights of other users</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              In the event of violations of these obligations, the Provider reserves the right to block access to the website and, where applicable, to assert claims for damages.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Intellectual Property and Copyright
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              All content on the website, including text, graphics, logos, images, and software, is protected by copyright and is the property of the Provider or its licensors.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Any reproduction, editing, distribution, and any form of commercial use beyond the scope of copyright law requires the prior written consent of the Provider.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              The Provider shall be liable without limitation for intentional misconduct and gross negligence. For slight negligence, the Provider shall only be liable in the event of a breach of material contractual obligations and only up to the amount of foreseeable, contract-typical damages.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              The above limitations of liability do not apply to damages resulting from injury to life, body, or health.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              The Provider does not guarantee the suitability, reliability, or qualifications of professionals placed through the platform. The final selection and verification of candidates is the responsibility of the client.
            </p>
          </section>

          {/* Data Protection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Data Protection
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The protection of your personal data is important to us. For details on the collection, processing, and use of your data, please refer to our{' '}
              <a href="/privacy" className="text-[rgb(0,159,255)] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Changes to These Terms of Use
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The Provider reserves the right to amend these Terms of Use at any time with effect for the future. The current version of the Terms of Use is always available on this page. By continuing to use the website after a change, you agree to the updated Terms of Use.
            </p>
          </section>

          {/* Final Provisions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Final Provisions
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              These Terms of Use shall be governed by and construed in accordance with the laws of Singapore. The courts of Singapore, Singapore shall have exclusive jurisdiction over any disputes arising out of or in connection with these Terms of Use, to the extent permitted by law.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Should any provision of these Terms of Use be or become invalid, the validity of the remaining provisions shall remain unaffected. In place of the invalid provision, a valid provision shall apply that most closely reflects the economic purpose of the invalid provision.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Any disputes arising from or in connection with these Terms of Use shall be resolved in accordance with Singapore federal law and the applicable regulations of the Emirate of Singapore.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
