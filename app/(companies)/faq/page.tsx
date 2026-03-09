import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import FAQAccordion from './FAQAccordion';
import InlineCTABanner from '../components/InlineCTABanner';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | HireDeveloper.sg',
  description:
    'Answers to the most common questions about HireDeveloper.sg: hiring, costs, developer quality, collaboration, locations, and more. Everything you need to know.',
  robots: { index: true, follow: true },
};

/* ------------------------------------------------------------------ */
/*  FAQ data – 6 sections, 5-7 items each                             */
/* ------------------------------------------------------------------ */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        question: 'What is HireDeveloper.sg?',
        answer:
          'HireDeveloper.sg is Singapore\'s talent marketplace that connects companies with pre-vetted professionals worldwide. Founded to serve Singapore and APAC businesses, the platform offers 90,000+ vetted developers across 40+ specializations, 3,400+ marketers across 25+ disciplines, 2,000+ designers, and thousands of product managers, project managers, and virtual assistants. Only the top 2.1% of applicants pass our five-stage vetting process, which includes technical assessments, live coding sessions, communication evaluation, and reference checks. We support both freelance contracts and full-time placements, with first candidate profiles delivered within 48 hours.',
      },
      {
        question: 'How does HireDeveloper.sg work?',
        answer:
          'You describe your requirements and receive a selection of pre-vetted candidate profiles within 48 hours. After interviews and selection, you start the collaboration immediately. HireDeveloper.sg handles quality assurance, contracts, and billing.',
      },
      {
        question: 'Who is HireDeveloper.sg for?',
        answer:
          'HireDeveloper.sg is ideal for startups, SMEs, and enterprises in Singapore, and across Singapore that need qualified remote talent quickly without months-long recruitment processes. Whether it is a single project or an entire team, we have the right solution.',
      },
      {
        question: 'In which industries are your talents experienced?',
        answer:
          'Our talents bring experience from many industries: FinTech, e-commerce, SaaS, healthcare, logistics, media, education, real estate, oil & gas, and more. We match you specifically with people who know your industry.',
      },
      {
        question: 'How does HireDeveloper.sg differ from traditional recruitment agencies?',
        answer:
          'Traditional recruitment agencies in Singapore typically charge 15–25% of annual salary as placement fees and take 4–8 weeks to present candidates (source: APOS Singapore 2025 Recruitment Industry Report). HireDeveloper.sg operates differently: we maintain a pre-vetted network where only the top 2.1% of applicants are accepted after a five-stage screening process. First candidate profiles are delivered within 48 hours, not weeks. There are no upfront fees — you only pay upon successful hire. We also offer a risk-free trial period with free replacement if the candidate is not the right fit.',
      },
      {
        question: 'Can I try HireDeveloper.sg for free?',
        answer:
          'Yes. Registration and requests are free. You only pay when you hire someone. No risk, no hidden costs.',
      },
    ],
  },
  {
    id: 'hiring',
    title: 'Hiring',
    items: [
      {
        question: 'How do I hire through HireDeveloper.sg?',
        answer:
          'Describe your requirements through our contact form. Our team presents you with a selection of pre-vetted candidates within 48 hours. After interviews, you choose the best candidate and start the collaboration.',
      },
      {
        question: 'How long does it take to receive candidates?',
        answer:
          'Typically, you receive the first candidate profiles within 48 hours. Most companies hire within one to two weeks. For urgent needs, we can accelerate the process.',
      },
      {
        question: 'Can I hire both freelancers and full-time employees?',
        answer:
          'Yes, both options are available. Freelancers on a project basis, part-time workers, or full-time remote employees: you choose the model that fits your project.',
      },
      {
        question: 'What does the interview process look like?',
        answer:
          'Once you have candidate profiles, you interview according to your own standards: via video, technical tests, or pair programming. Our team helps with coordination and provides recommendations.',
      },
      {
        question: 'What happens if a candidate is not the right fit?',
        answer:
          'We offer a risk-free trial period. If you are not satisfied with a candidate, we find a replacement at no cost. Your success is our top priority.',
      },
      {
        question: 'Can I hire multiple talents at once?',
        answer:
          'Absolutely. Many of our clients build entire remote teams through us. We can fill multiple positions in parallel and assign dedicated account managers to support you.',
      },
    ],
  },
  {
    id: 'costs',
    title: 'Costs',
    items: [
      {
        question: 'What does HireDeveloper.sg cost?',
        answer:
          'There are no upfront fees. You only pay when you successfully hire a candidate. Costs vary depending on the experience level, specialization, and contract model of the talent.',
      },
      {
        question: 'Are there hidden costs or subscriptions?',
        answer:
          'No. No registration fees, no monthly subscriptions, nothing hidden. Our pricing model is transparent: you only pay for successfully placed talent.',
      },
      {
        question: 'How are freelancers billed?',
        answer:
          'Freelancers are typically billed on an hourly basis. Hourly rates vary between $25 and $200 USD depending on technology and experience. We provide you with a transparent monthly invoice.',
      },
      {
        question: 'How much do I save compared to local hires?',
        answer:
          'Companies using HireDeveloper.sg save 40–58% on staffing costs compared to hiring locally in Singapore. For context, a senior full-stack developer in Singapore\'s CBD commands SGD 10,000–16,000/month when including CPF contributions (17% employer share), office space, and benefits (source: Robert Half 2025 Salary Guide). Through our platform, equivalent pre-vetted talent from global markets costs SGD 5,000–9,000/month. Use our Team Cost Calculator at hiredeveloper.sg/tools/team-cost-calculator for a personalized estimate based on your team size, roles, and seniority requirements.',
      },
      {
        question: 'Is there a money-back guarantee?',
        answer:
          'Yes, we offer a satisfaction guarantee. If a talent does not meet your expectations during the trial period, we find a replacement at no cost or refund the placement fee.',
      },
    ],
  },
  {
    id: 'developers',
    title: 'Developers',
    items: [
      {
        question: 'How are developers vetted at HireDeveloper.sg?',
        answer:
          'Our vetting process includes multiple stages: resume and portfolio review, technical assessments and live coding tests, communication evaluation in English, and reference checks. Only about 2% of all applicants are accepted.',
      },
      {
        question: 'Which technologies and programming languages do you cover?',
        answer:
          'We cover all major technologies: JavaScript, TypeScript, Python, Java, PHP, Ruby, Go, C#, Rust, Kotlin, Swift, and many more. As well as frameworks like React, Next.js, Angular, Vue.js, Node.js, Django, Laravel, and Spring Boot.',
      },
      {
        question: 'Can your developers communicate in Chinese or Malay?',
        answer:
          'Some of our talents speak Mandarin, Malay, or other Asian languages. During candidate selection, we take your language requirements into account and ensure communication works well.',
      },
      {
        question: 'How do you ensure ongoing quality?',
        answer:
          'After every project, we collect feedback from both sides and conduct regular quality checks. Talents who repeatedly receive negative feedback are removed from the network. This keeps the quality consistently high.',
      },
      {
        question: 'Do you offer specialized AI and Machine Learning developers?',
        answer:
          'Yes, we have a growing network of AI specialists who work with TensorFlow, PyTorch, Hugging Face, LangChain, OpenAI API, and other frameworks. NLP, computer vision, or MLOps: we find the right expert.',
      },
      {
        question: 'How experienced are your developers on average?',
        answer:
          'Most have at least 5 years of professional experience, many over 10 years. We place junior, mid-level, and senior developers as well as tech leads and architects, depending on what you need.',
      },
    ],
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    items: [
      {
        question: 'In which time zones do your talents work?',
        answer:
          'Our talents are distributed worldwide and cover all time zones. We can specifically recommend candidates who work in your time zone or with significant overlap (e.g., SGT/Singapore Standard Time for Singapore).',
      },
      {
        question: 'Which communication tools are used?',
        answer:
          'Our talents are familiar with all common tools: Slack, Microsoft Teams, Zoom, Google Meet, Jira, Confluence, Asana, Trello, GitHub, GitLab, and more. They seamlessly integrate into your existing tool landscape.',
      },
      {
        question: 'How are contracts and employment law handled?',
        answer:
          'We take care of that. For freelancers, we execute service agreements. For full-time employees, we work with Employer-of-Record solutions that comply with local labor laws.',
      },
      {
        question: 'How do I protect my intellectual property?',
        answer:
          'All our contracts include NDA and IP transfer clauses by default. Intellectual property created during the collaboration belongs to you. Upon request, we customize the contracts to your specific requirements.',
      },
      {
        question: 'Can I end the collaboration at any time?',
        answer:
          'Yes, for freelance engagements there are typically short notice periods (1-2 weeks). For full-time contracts, the contractually agreed terms apply. We offer maximum flexibility for your business.',
      },
      {
        question: 'Do you provide onboarding support?',
        answer:
          'Yes, our Customer Success team guides you through the entire onboarding process. We ensure your new team member becomes productive quickly and are available for questions at any time.',
      },
    ],
  },
  {
    id: 'locations',
    title: 'Locations',
    items: [
      {
        question: 'Which countries do your talents come from?',
        answer:
          'Our talents come from over 50 countries worldwide, including Eastern Europe (Poland, Ukraine, Romania), Latin America (Brazil, Argentina, Mexico), South Asia (India, Pakistan), and Africa (Nigeria, Egypt, Kenya). We also place talents within Singapore and broader APAC region.',
      },
      {
        question: 'Can remote talents also work on-site?',
        answer:
          'Typically, our talents work remotely. However, upon request, we can also place candidates who are willing to work on-site occasionally or permanently in Singapore or Marina Bay. This depends on visa and work permit regulations.',
      },
      {
        question: 'How do you handle different time zones?',
        answer:
          'We take your time zone preferences into account during candidate selection. For companies in Singapore, we recommend talents with at least 4-6 hours of overlap with Singapore Standard Time (SGT). Our Eastern European and African talents often offer near-complete time zone overlap.',
      },
      {
        question: 'Are there legal considerations when hiring international talent?',
        answer:
          'Yes, different tax and labor law regulations apply depending on the country. We help you with Employer-of-Record solutions and ensure all contracts are legally compliant under Singapore law. This way, you avoid unnecessary risk with international hires.',
      },
      {
        question: 'Do you also have talents based in Singapore?',
        answer:
          'Yes, we have remote talents based in Singapore and APAC region. These candidates offer the advantage of the same time zone, cultural proximity, and legal framework. Visit our location pages for Singapore, and other cities.',
      },
      {
        question: 'How do you ensure data security with international teams?',
        answer:
          'All our contracts include data protection clauses compliant with Singapore Personal Data Protection Act (PDPA). Our talents are trained in handling sensitive data and adhere to international data protection standards. Upon request, they work exclusively within your infrastructure.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */

function FAQJsonLd({ sections }: { sections: FAQSection[] }) {
  const allItems = sections.flatMap((s) => s.items);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FAQPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
  ];

  const relatedLinks = [
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'Hire Designers', href: '/hire-designers' },
    { label: 'Hire Marketers', href: '/hire-marketers' },
    { label: 'Hire Product Managers', href: '/hire-product-managers' },
    { label: 'Hire Project Managers', href: '/hire-project-managers' },
    { label: 'Hire Assistants', href: '/hire-assistants' },
    { label: 'Locations', href: '/locations' },
    { label: 'Salary Calculator', href: '/tools/salary-calculator' },
    { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
    { label: 'Technology Comparison', href: '/tools/technology-comparison' },
    { label: 'Provider Comparison', href: '/comparison' },
    { label: 'All Tools', href: '/tools' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FAQJsonLd sections={faqSections} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Everything you need to know about HireDeveloper.sg: from hiring and costs to collaborating with remote talent.
            </p>
          </div>
        </div>
      </section>

      {/* Section navigation */}
      <nav className="bg-gray-50 border-b border-gray-200 sticky top-[116px] z-40">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="flex items-center gap-6 overflow-x-auto py-4">
            {faqSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-gray-600 hover:text-[rgb(0,159,255)] whitespace-nowrap transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* FAQ sections */}
      <div className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto space-y-16">
            {faqSections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-[32px] font-bold text-gray-900 mb-8">
                  {section.title}
                </h2>
                <FAQAccordion items={section.items} sectionId={section.id} />
              </section>
            ))}
          </div>
        </div>
      </div>

      <InlineCTABanner
        headline="Still have questions? We are happy to help!"
        subtext="Our team will help you find the right talent for your project."
      />

      {/* Contact note */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Did not find your question? Simply reach out to us.
              Our team typically responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks title="Related Pages" links={relatedLinks} />

      <FinalCTA
        heading="Ready to Build Your Team?"
        subheading="Receive vetted candidate profiles within 48 hours. Risk-free with no upfront costs."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
