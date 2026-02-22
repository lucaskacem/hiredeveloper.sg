import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Resources for Talent | Guides, Tools & Tips | HireDeveloper.ae',
  description:
    'Resources for remote talent: salary calculator, application tips, interview preparation, remote work guides, and more. Everything for a successful remote career.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Resources for Talent - HireDeveloper.ae',
    description: 'Guides, tools, and tips for a successful remote career.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function TalentResourcesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'For Talent', href: '/for-talent' },
    { label: 'Talent Resources', href: '/talent-resources' },
  ];

  const relatedLinks = [
    { label: 'For Talent - Overview', href: '/for-talent' },
    { label: 'Remote Jobs', href: '/remote-jobs' },
    { label: 'Remote Companies', href: '/remote-companies' },
    { label: 'Salary Calculator', href: '/tools/salary-calculator' },
    { label: 'Skill Assessment', href: '/tools/skill-assessment' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Resources for Companies', href: '/resources' },
    { label: 'How It Works', href: '/how-it-works' },
  ];

  const tools = [
    {
      title: 'Salary Calculator',
      description: 'Compare salaries for various roles and find out what you can expect.',
      href: '/tools/salary-calculator',
    },
    {
      title: 'Skill Assessment',
      description: 'Test your technical skills and prepare for evaluations.',
      href: '/tools/skill-assessment',
    },
    {
      title: 'Technology Comparison',
      description: 'Compare technologies and find out which skills are most in demand.',
      href: '/tools/technology-comparison',
    },
  ];

  const interviewGuides = [
    {
      title: 'Preparing for a Remote Interview',
      description: 'Practical tips to help you excel in technical and personal remote interviews.',
      tips: [
        'Test your internet connection, camera, and microphone beforehand',
        'Choose a quiet, well-lit location',
        'Prepare concrete examples from previous projects',
        'Research the company and its products thoroughly',
        'Have questions prepared for the company',
      ],
    },
    {
      title: 'Acing the Technical Assessment',
      description: 'What you can do to shine in the technical portion.',
      tips: [
        'Practice live coding on platforms like LeetCode or HackerRank',
        'Explain your thought process out loud while coding',
        'Ask for clarification if the task is unclear',
        'Write clean, readable code with meaningful variable names',
        'Test your code with various edge cases',
      ],
    },
    {
      title: 'Presenting Your Portfolio Effectively',
      description: 'Make a strong first impression with your portfolio.',
      tips: [
        'Showcase 3-5 of your best and most relevant projects',
        'Describe your role and contribution in each project',
        'Use measurable results (numbers, metrics, impact)',
        'Keep your portfolio up to date and well organized',
        'Include links to live demos or GitHub repos',
      ],
    },
  ];

  const remoteWorkGuides = [
    {
      title: 'Staying Productive at Home',
      content:
        'Set up a dedicated workspace, establish routines, and try techniques like Pomodoro or time-blocking. Most importantly: separate work and personal life both physically and temporally. This makes a big difference for long-term productivity.',
    },
    {
      title: 'Communication in Remote Teams',
      content:
        'When in doubt, over-communicate. For non-urgent matters, Slack or email is fine. Complex topics belong in a video call. Keep your status updated and document decisions in writing -- it saves time later.',
    },
    {
      title: 'Time Zone Management',
      content:
        'When working for a UAE-based company, ensure you have at least 4-6 hours of overlap with Gulf Standard Time (GST). Communicate your working hours clearly and use tools like World Time Buddy to schedule meetings.',
    },
    {
      title: 'Professional Development',
      content:
        'Stay sharp. Online courses, open-source contributions, and side projects keep your skills fresh. Good to know: many of our partner companies actively support continuing education.',
    },
    {
      title: 'Networking as a Remote Professional',
      content:
        'A strong network works remotely too. Virtual meetups, open-source contributions, blog posts, professional communities: all of these help. Your network is your greatest asset.',
    },
    {
      title: 'Work-Life Balance',
      content:
        'When working from home, the line between work and personal life can easily blur. Clear working hours help. Take breaks, exercise, maintain hobbies. Those who disconnect well work better the next day.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageJsonLd />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[rgb(0,159,255)] font-semibold text-lg mb-4">For Talent</p>
            <h1 className="text-[48px] font-bold text-gray-900 mb-6">
              Resources for Talent
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need for a successful remote career: tools, guides,
              interview tips, and best practices for remote work.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Useful Tools
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Use our free tools for your career planning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Guides */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Interview Preparation
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            How to get ready for the application process at HireDeveloper.ae.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interviewGuides.map((guide) => (
              <div key={guide.title} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                <ul className="space-y-2">
                  {guide.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Work Guides */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Remote Work Guides
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Best practices for successful remote work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remoteWorkGuides.map((guide) => (
              <div key={guide.title} className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guide.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Our Vetting Process
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            What to expect during the HireDeveloper.ae screening process.
          </p>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: '1',
                title: 'Profile Review',
                description: 'We review your resume, portfolio, and professional experience. Make sure your profile is complete and showcases your best work.',
              },
              {
                step: '2',
                title: 'Technical Assessment',
                description: 'Depending on the role, you complete a technical test: coding challenge, design task, or strategy case. These are practical and typically take 1-2 hours.',
              },
              {
                step: '3',
                title: 'Communication Check',
                description: 'Remote work stands or falls on good communication. That is why we evaluate whether you can communicate clearly and professionally in English.',
              },
              {
                step: '4',
                title: 'Expert Interview',
                description: 'A subject-matter expert from our team conducts an interview to assess your technical abilities, soft skills, and suitability for remote work.',
              },
              {
                step: '5',
                title: 'Network Admission',
                description: 'After passing the screening, you are admitted to our network and gain access to matching companies and projects. Only the top 2% make it through.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[rgb(0,159,255)]">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ for talents */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[40px] font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions from Talent
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Does applying to HireDeveloper.ae cost anything?',
                  a: 'No, everything is free. Application, vetting, and network admission cost you nothing. We only earn when you are successfully placed.',
                },
                {
                  q: 'What are the typical salaries?',
                  a: 'Salaries vary depending on role, experience, and engagement model. As a developer, you can earn between $3,000 and $12,000 USD per month. Use our Salary Calculator for an individual estimate.',
                },
                {
                  q: 'Do I need to speak Arabic?',
                  a: 'Not necessarily. Many of our companies work in English. However, Arabic skills are an advantage and increase your chances, especially with companies that require direct client interaction.',
                },
                {
                  q: 'Can I work for multiple companies simultaneously?',
                  a: 'For freelance engagements, yes, as long as there are no conflicts of interest. For full-time positions, you work exclusively for one company.',
                },
                {
                  q: 'How do I get paid?',
                  a: 'HireDeveloper.ae ensures timely, secure payments. We support various payment methods and currencies. Billing is handled transparently through our platform.',
                },
              ].map((item) => (
                <div key={item.q} className="p-6 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/faq" className="text-[rgb(0,159,255)] hover:underline font-medium">
                View all FAQs
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks title="More Pages" links={relatedLinks} />

      <FinalCTA
        heading="Ready for Your Remote Career?"
        subheading="Apply now and become part of our network of top talent."
        ctaText="Apply Now"
      />

      <Footer />
    </div>
  );
}
