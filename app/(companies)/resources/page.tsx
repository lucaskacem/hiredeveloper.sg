import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Resources for Companies | Guides, Tools & Blog | HireDeveloper.sg',
  description:
    'Discover our resources for companies: hiring guides, cost calculators, blog articles, interview questions, and more. Everything for successful remote hiring.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Resources for Companies - HireDeveloper.sg',
    description: 'Guides, tools, blog articles, and more for successful remote hiring.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ResourcesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
  ];

  const relatedLinks = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Talent Resources', href: '/talent-resources' },
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'Hire Designers', href: '/hire-designers' },
    { label: 'Hire Marketers', href: '/hire-marketers' },
  ];

  const tools = [
    {
      title: 'Salary Calculator',
      description: 'Compare salaries for various roles and locations worldwide.',
      href: '/tools/salary-calculator',
    },
    {
      title: 'Team Cost Calculator',
      description: 'Calculate the total cost of your remote team and see your savings.',
      href: '/tools/team-cost-calculator',
    },
    {
      title: 'Technology Comparison',
      description: 'Compare technologies and frameworks for your next project.',
      href: '/tools/technology-comparison',
    },
    {
      title: 'Interview Questions Generator',
      description: 'Generate customized interview questions for various roles.',
      href: '/tools/interview-questions-generator',
    },
    {
      title: 'Project Estimation',
      description: 'Estimate the effort and cost for your software project.',
      href: '/tools/project-estimation',
    },
    {
      title: 'Skill Assessment',
      description: 'Evaluate the technical skills of your candidates.',
      href: '/tools/skill-assessment',
    },
  ];

  const guides = [
    {
      title: 'How It Works',
      description: 'Learn in 3 simple steps how to hire through HireDeveloper.sg.',
      href: '/how-it-works',
    },
    {
      title: 'Calculate Savings',
      description: 'Detailed cost comparison between local and remote hires.',
      href: '/calculate-savings',
    },
    {
      title: 'Pricing',
      description: 'Transparent pricing model: $0 until you hire, then a fair placement fee.',
      href: '/pricing',
    },
    {
      title: 'Case Studies',
      description: 'Success stories from companies that hired through HireDeveloper.sg.',
      href: '/case-studies',
    },
    {
      title: 'FAQ',
      description: 'Answers to the most frequently asked questions about HireDeveloper.sg.',
      href: '/faq',
    },
    {
      title: 'Provider Comparison',
      description: 'How HireDeveloper.sg compares to other platforms.',
      href: '/comparison',
    },
  ];

  const blogArticles = [
    {
      title: 'Finding Freelance Developers: 21+ Expert Tips & Strategies',
      description: 'Proven strategies to find the best freelance developers for your project.',
      href: '/employer-blog/how-to-find-developers',
      image: '/images/blog/people-search.svg',
    },
    {
      title: 'Is Your Developer Ready for Remote Work?',
      description: 'Interview questions that reveal whether a candidate is suited for remote work.',
      href: '/employer-blog/remote-ready-interview-questions',
      image: '/images/blog/remote-team.svg',
    },
    {
      title: 'Interview Questions for Software Engineers',
      description: 'The best questions for technical interviews with software developers.',
      href: '/employer-blog/software-engineer-interview-questions',
      image: '/images/blog/online-test.svg',
    },
    {
      title: 'How to Conduct a Remote Technical Interview',
      description: 'Best practices for conducting technical interviews in a remote setting.',
      href: '/employer-blog/how-to-conduct-a-remote-technical-interview',
      image: '/images/blog/code-review.svg',
    },
    {
      title: 'Building & Managing a Remote Engineering Team',
      description: 'A practical guide to building a successful distributed development team.',
      href: '/employer-blog/distributed-software-engineering-team',
      image: '/images/blog/team-collaboration.svg',
    },
    {
      title: 'Managing Remote Development Teams',
      description: 'Strategies and tools for effectively leading remote teams.',
      href: '/employer-blog/how-to-manage-developers-remote-team',
      image: '/images/blog/project-completed.svg',
    },
  ];

  const hiringPages = [
    { title: 'Hire Developers', description: 'Full-stack, frontend, backend, mobile, DevOps, AI, and more.', href: '/hire-developers' },
    { title: 'Hire Designers', description: 'UX, UI, product, graphic, brand, and other design roles.', href: '/hire-designers' },
    { title: 'Hire Marketers', description: 'SEO, content, growth, performance, and social media experts.', href: '/hire-marketers' },
    { title: 'Hire Product Managers', description: 'Experienced PMs for product strategy and roadmap.', href: '/hire-product-managers' },
    { title: 'Hire Project Managers', description: 'Certified project managers for complex projects.', href: '/hire-project-managers' },
    { title: 'Hire Assistants', description: 'Virtual and executive assistants for your daily operations.', href: '/hire-assistants' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageJsonLd />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-10 md:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 mb-6">
              Resources for Companies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need for successful remote hiring: interactive tools,
              hiring guides, blog articles, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-gray-50 py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            Interactive Tools
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our free tools help you make the right decisions when hiring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="text-center mt-8">
            <a href="/tools" className="text-[rgb(0,159,255)] hover:underline font-medium">
              View all tools
            </a>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            Guides & Resources
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Want to learn more about remote hiring? Our guides bring you up to speed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="bg-gray-50 py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            Blog Articles
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Practical tips and expert knowledge on remote hiring and team leadership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="block bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center p-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Pages */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            Talent by Category
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find the right talent for every role on your team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{page.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{page.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks title="More Pages" links={relatedLinks} />

      <FinalCTA
        heading="Ready to Build Your Remote Team?"
        subheading="Receive vetted candidate profiles within 48 hours. Risk-free with no upfront costs."
        ctaText="Get Started"
      />

      <Footer />
    </div>
  );
}
