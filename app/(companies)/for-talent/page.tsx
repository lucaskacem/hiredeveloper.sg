import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'For Talent | Work Remotely with Top Companies | HireDeveloper.ae',
  description:
    'Join the HireDeveloper.ae network and work remotely for leading companies in Dubai, Abu Dhabi, and across the UAE. Vetted remote jobs, fair pay, flexible work models.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'For Talent - HireDeveloper.ae',
    description: 'Launch your remote career: Work for top companies in the UAE and Middle East.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ForTalentPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'For Talent', href: '/for-talent' },
  ];

  const relatedLinks = [
    { label: 'Remote Jobs', href: '/remote-jobs' },
    { label: 'Remote Companies', href: '/remote-companies' },
    { label: 'Talent Resources', href: '/talent-resources' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'Hire Designers', href: '/hire-designers' },
    { label: 'Hire Marketers', href: '/hire-marketers' },
    { label: 'Salary Calculator', href: '/tools/salary-calculator' },
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
              Work Remotely for Top Companies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Join the HireDeveloper.ae network and gain access to
              exclusive remote jobs with leading companies in Dubai, Abu Dhabi, and across the UAE. Fair pay,
              flexible work models, and exciting projects await you.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Apply Now
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Why HireDeveloper.ae?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            We connect you with the best companies and ensure the collaboration runs smoothly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Projects</h3>
              <p className="text-gray-600 leading-relaxed">
                Access exciting projects with startups, SMEs, and enterprises in the UAE.
                Many projects are exclusive and not publicly advertised.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fair Compensation</h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure fair compensation. Our talents earn
                above average for their location because great work deserves great pay.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Remote</h3>
              <p className="text-gray-600 leading-relaxed">
                Work from anywhere in the world. Home office, co-working space,
                or a balcony with a sea view: you decide where you work best.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Models</h3>
              <p className="text-gray-600 leading-relaxed">
                Freelance, part-time, or full-time. Choose what fits your
                lifestyle and switch flexibly between projects.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Work on challenging projects and develop your skills
                further. Our companies use cutting-edge technologies.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our Talent Success team supports you: from application through
                onboarding to ongoing collaboration. You are never alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            How to Join Our Network
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">
                Submit your profile, portfolio, and relevant experience. The process takes just a few minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Complete our technical evaluation, communication tests, and an expert interview.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Matching</h3>
              <p className="text-gray-600 text-sm">
                Our team matches you with suitable companies and projects that align with your skills and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Start Working</h3>
              <p className="text-gray-600 text-sm">
                After a successful interview with the company, you begin the collaboration. We handle the paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Who We Are Looking For
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            We are looking for experienced professionals who love remote work and deliver outstanding results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Developers</h3>
              <p className="text-gray-600 text-sm">
                Full-stack, frontend, backend, mobile, DevOps, AI: all technologies and frameworks.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Designers</h3>
              <p className="text-gray-600 text-sm">
                UX, UI, product, graphic, brand, interaction. Creative minds wanted.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marketers</h3>
              <p className="text-gray-600 text-sm">
                SEO, content, growth, performance, social media. Data-driven and results-oriented.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Product Managers</h3>
              <p className="text-gray-600 text-sm">
                Product strategy, roadmap, stakeholder management. Experienced PMs with a hands-on mentality.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Managers</h3>
              <p className="text-gray-600 text-sm">
                Agile, Scrum, PMP: certified project managers for complex projects.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assistants</h3>
              <p className="text-gray-600 text-sm">
                Virtual and executive assistants with strong organizational skills.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">350K+</div>
              <p className="text-sm text-gray-600 mt-1">Talents in our network</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">50+</div>
              <p className="text-sm text-gray-600 mt-1">Countries represented</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">800+</div>
              <p className="text-sm text-gray-600 mt-1">Successful placements</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">4.8/5</div>
              <p className="text-sm text-gray-600 mt-1">Talent satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks title="More Pages for Talent" links={relatedLinks} />

      <FinalCTA
        heading="Launch Your Remote Career"
        subheading="Apply now and gain access to exclusive remote jobs with top companies."
        ctaText="Apply Now"
      />

      <Footer />
    </div>
  );
}
