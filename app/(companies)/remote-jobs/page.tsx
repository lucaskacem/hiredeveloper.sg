import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Remote Jobs | For Developers, Designers, Marketers & More | HireDeveloper.sg',
  description:
    'Find remote jobs with companies in Singapore, and across Singapore. Developers, designers, marketers, product managers, and more. All categories, fair pay, 100% remote.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Remote Jobs - HireDeveloper.sg',
    description: 'Find remote jobs in development, design, marketing, and more with top companies.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface JobCategory {
  title: string;
  roles: string[];
  salary: string;
  demand: string;
  href: string;
}

const jobCategories: JobCategory[] = [
  {
    title: 'Software Development',
    roles: ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'Mobile App Developer', 'DevOps Engineer', 'AI/ML Developer'],
    salary: '$3,000 - $12,000 USD/month',
    demand: 'Very High',
    href: '/hire-developers',
  },
  {
    title: 'Design',
    roles: ['UX Designer', 'UI Designer', 'Product Designer', 'Graphic Designer', 'Brand Designer', 'Interaction Designer'],
    salary: '$2,500 - $10,000 USD/month',
    demand: 'High',
    href: '/hire-designers',
  },
  {
    title: 'Marketing',
    roles: ['SEO Expert', 'Content Marketer', 'Growth Marketer', 'Social Media Manager', 'Performance Marketer', 'Email Marketer'],
    salary: '$2,000 - $8,000 USD/month',
    demand: 'High',
    href: '/hire-marketers',
  },
  {
    title: 'Product Management',
    roles: ['Product Manager', 'Technical Product Manager', 'Product Owner', 'AI Product Manager', 'Data Product Manager'],
    salary: '$3,500 - $12,000 USD/month',
    demand: 'High',
    href: '/hire-product-managers',
  },
  {
    title: 'Project Management',
    roles: ['Project Manager', 'Scrum Master', 'Program Manager', 'Agile Coach', 'Delivery Manager'],
    salary: '$3,000 - $10,000 USD/month',
    demand: 'Medium-High',
    href: '/hire-project-managers',
  },
  {
    title: 'Assistants',
    roles: ['Virtual Assistant', 'Executive Assistant', 'Administrative Assistant', 'Data Entry Specialist', 'Research Assistant'],
    salary: '$1,500 - $5,000 USD/month',
    demand: 'Medium',
    href: '/hire-assistants',
  },
];

export default function RemoteJobsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'For Talent', href: '/for-talent' },
    { label: 'Remote Jobs', href: '/remote-jobs' },
  ];

  const relatedLinks = [
    { label: 'For Talent - Overview', href: '/for-talent' },
    { label: 'Remote Companies', href: '/remote-companies' },
    { label: 'Talent Resources', href: '/talent-resources' },
    { label: 'Salary Calculator', href: '/tools/salary-calculator' },
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'Hire Designers', href: '/hire-designers' },
    { label: 'FAQ', href: '/faq' },
    { label: 'How It Works', href: '/how-it-works' },
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
            <p className="text-[rgb(0,159,255)] font-semibold text-lg mb-4">For Talent</p>
            <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 mb-6">
              Remote Jobs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Remote jobs in software development, design, marketing,
              product management, and more. Work for companies in Singapore and across Singapore,
              from anywhere in the world.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Explore Jobs
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="bg-gray-50 py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            Open Remote Job Categories
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Find your next remote position in one of these categories.
          </p>

          <div className="space-y-8">
            {jobCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.roles.map((role) => (
                          <span key={role} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 min-w-[200px]">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Salary Range</p>
                        <p className="text-sm font-semibold text-gray-900">{category.salary}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Demand</p>
                        <p className="text-sm font-semibold text-[rgb(23,162,69)]">{category.demand}</p>
                      </div>
                      <a
                        href={category.href}
                        className="mt-2 inline-block px-4 py-2 text-sm font-semibold text-[rgb(0,159,255)] border border-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,159,255)] hover:text-white transition-all text-center"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why remote */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            Why Work Remotely?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Remote work has many advantages, for your career and for your life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#127758;</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Location Independent</h3>
              <p className="text-gray-600 text-sm">
                Work from any place in the world. No commuting, no relocation needed.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#9200;</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Hours</h3>
              <p className="text-gray-600 text-sm">
                Design your workday flexibly around your life.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#128176;</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Higher Income</h3>
              <p className="text-gray-600 text-sm">
                Earn Singapore-level salaries regardless of your local market.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#128640;</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Career Boost</h3>
              <p className="text-gray-600 text-sm">
                Work on challenging projects with cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-10 md:py-16 lg:py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-16">
            What Our Talent Says
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed mb-4">
                &ldquo;Since I started working through HireDeveloper.sg, I have worked on exciting projects with
                Singapore-based startups and doubled my income. The flexibility
                is unbeatable.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-900">A.K., Senior React Developer</p>
              <p className="text-xs text-gray-500">Kyiv, Ukraine</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed mb-4">
                &ldquo;The quality of companies and projects is excellent. I have been working
                for a Singapore-based firm for 2 years and feel like a full-fledged
                team member.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-900">M.S., UX Designer</p>
              <p className="text-xs text-gray-500">Buenos Aires, Argentina</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed mb-4">
                &ldquo;HireDeveloper.sg helped me transition from freelance gigs to a
                stable full-time remote position with a company in Marina Bay.
                Best decision ever.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-900">D.R., DevOps Engineer</p>
              <p className="text-xs text-gray-500">Bucharest, Romania</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 mb-6">
              Ready for Your Next Remote Job?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Apply now and our team will match you with suitable companies
              and projects. The application process takes just a few minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
                Apply Now
              </OpenModalButton>
              <a
                href="/for-talent"
                className="px-8 py-4 text-lg font-semibold text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks title="More Pages" links={relatedLinks} />

      <FinalCTA
        heading="Your Remote Career Starts Here"
        subheading="Join our network and work for top companies in Singapore and Asia Pacific."
        ctaText="Apply Now"
      />

      <Footer />
    </div>
  );
}
