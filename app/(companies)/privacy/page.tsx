import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | HireDeveloper.sg',
  description: 'Privacy Policy of HireDeveloper.sg. Information about the collection, processing, and use of your personal data in compliance with Singapore data protection laws.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="text-[40px] font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Last updated: February 2026
          </p>

          {/* Data Controller */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Data Controller
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              The entity responsible for data processing on this website is:
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              HireDeveloper.sg<br />
              Singapore, Singapore<br />
              Email: privacy@hiredeveloper.sg
            </p>
          </section>

          {/* Collection and Storage */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Collection and Storage of Personal Data
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              When you visit our website, certain information is automatically transmitted by your browser and stored in server log files. This information includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-relaxed mb-4">
              <li>Browser type and version</li>
              <li>Operating system used</li>
              <li>Referrer URL (the previously visited page)</li>
              <li>Hostname of the accessing device</li>
              <li>Date and time of the server request</li>
              <li>IP address</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              This data is not merged with other data sources. The collection of this data is carried out in accordance with the Singapore Personal Data Protection Act 2012 (PDPA). The website operator has a legitimate interest in the technically error-free presentation and optimization of its website.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Cookies
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Our website uses cookies. Cookies are small text files that are stored on your device and saved by your browser. They serve to make our services more user-friendly and effective.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Some cookies are technically necessary and are set automatically (&ldquo;session cookies&rdquo;). These are automatically deleted at the end of your visit. Other cookies remain on your device until you delete them (&ldquo;persistent cookies&rdquo;).
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              You can configure your browser to inform you about the use of cookies so that you can decide on a case-by-case basis whether to accept or reject a cookie. Disabling cookies may limit the functionality of our website.
            </p>
          </section>

          {/* Contact Form */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Contact Form
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              If you send us inquiries via our contact form, the information you provide in the form, including the contact data you enter, will be stored by us for the purpose of processing your inquiry and in case of follow-up questions.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              The processing of data entered in the contact form is based on your consent, in accordance with Singapore Federal Decree-Law No. 45/2021. You may revoke this consent at any time. The lawfulness of data processing operations carried out prior to the revocation remains unaffected.
            </p>
          </section>

          {/* Newsletter */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Newsletter
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              If you wish to subscribe to the newsletter offered on our website, we require an email address from you, as well as information that allows us to verify that you are the owner of the specified email address.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              You may revoke your consent to the storage of your data, email address, and its use for sending the newsletter at any time, for example via the &ldquo;unsubscribe&rdquo; link in the newsletter. The lawfulness of data processing operations already carried out remains unaffected by the revocation.
            </p>
          </section>

          {/* Analytics Tools */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Analytics Tools and Advertising
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We reserve the right to use analytics tools for the statistical evaluation of the use of our website. In doing so, anonymized usage profiles may be created. The analytics tools use cookies stored on your computer that enable analysis of how you use the website.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              The information generated by cookies about your use of this website is generally transmitted to and stored on a server. Processing is carried out in accordance with our legitimate interests under the Singapore Personal Data Protection Act 2012 (PDPA).
            </p>
          </section>

          {/* Rights of Data Subjects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Rights of Data Subjects
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Under the Singapore Personal Data Protection Act 2012 (PDPA), you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-relaxed mb-4">
              <li><strong>Right of Access</strong>: You may request information about your personal data processed by us.</li>
              <li><strong>Right to Rectification</strong>: You may request the correction of inaccurate or the completion of incomplete personal data stored by us.</li>
              <li><strong>Right to Erasure</strong>: You may request the deletion of your personal data stored by us, provided no statutory retention obligations apply.</li>
              <li><strong>Right to Restriction of Processing</strong>: You may request the restriction of the processing of your personal data.</li>
              <li><strong>Right to Data Portability</strong>: You may request that we provide your personal data in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Right to Object</strong>: You may object to the processing of your personal data at any time.</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              You also have the right to lodge a complaint with the Singapore Data Office or the relevant data protection authority regarding our processing of your personal data.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Data Security
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We use SSL/TLS encryption (Secure Socket Layer / Transport Layer Security) supported by your browser during your visit to our website. We employ appropriate technical and organizational security measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction, or unauthorized access by third parties.
            </p>
          </section>

          {/* Updates */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Updates to This Privacy Policy
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              This privacy policy is currently valid as of February 2026. Due to the continued development of our website or changes in legal or regulatory requirements, it may become necessary to amend this privacy policy. The current version of the privacy policy can be accessed at any time on this page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
