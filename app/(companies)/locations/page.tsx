import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import RelatedLinks from '../components/RelatedLinks';
import FinalCTA from '../components/FinalCTA';
import InlineCTABanner from '../components/InlineCTABanner';
import { countries, getTopCitiesForCountry } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Hire Remote Developers by Location | HireDeveloper.ae',
  description:
    'Find and hire the best remote developers across the UAE, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait. Access top-tier programmers in every major GCC city.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://hiredeveloper.ae/locations',
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hire Remote Developers by Location
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Find pre-vetted remote developers across the UAE, Saudi Arabia,
                Qatar, Bahrain, Oman, and Kuwait. Browse our locations and discover
                top programmers in your region.
              </p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.05)] border border-white/10 hidden lg:block">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/hero.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Country cards grid */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Browse All Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => {
              const topCities = getTopCitiesForCountry(country.slug, 5);
              const regionCount = country.regions.length;

              return (
                <Link
                  key={country.slug}
                  href={`/locations/${country.slug}`}
                  className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {country.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {regionCount} {regionCount === 1 ? 'region' : 'regions'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topCities.map((city) => (
                      <span
                        key={city.slug}
                        className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-700"
                      >
                        {city.name}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <InlineCTABanner
        headline="Looking for developers in your region?"
        subtext="Pre-vetted remote talent with timezone overlap — ready for your project."
      />

      <RelatedLinks
        title="Hire Developers by Specialization"
        links={[
          { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
          { label: 'Python Developers', href: '/hire-developers/python' },
          { label: 'React Developers', href: '/hire-developers/reactjs' },
          { label: 'Node.js Developers', href: '/hire-developers/nodejs' },
          { label: 'TypeScript Developers', href: '/hire-developers/typescript' },
          { label: 'Java Developers', href: '/hire-developers/java' },
          { label: 'AI Developers', href: '/hire-developers/ai' },
          { label: 'All Developer Specializations', href: '/hire-developers' },
        ]}
      />

      <RelatedLinks
        title="Hire Marketing Talent"
        links={[
          { label: 'SEO Audit Specialists', href: '/hire-marketers/seo-audit' },
          { label: 'Content Strategists', href: '/hire-marketers/content-strategy' },
          { label: 'Paid Ads Experts', href: '/hire-marketers/paid-ads' },
          { label: 'All Marketing Specializations', href: '/hire-marketers' },
        ]}
      />

      <RelatedLinks
        title="Hiring Resources"
        links={[
          { label: 'Developer Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
          { label: 'Finding Freelance Developers: 21+ Tips', href: '/employer-blog/how-to-find-developers' },
          { label: 'How to Conduct Remote Technical Interviews', href: '/employer-blog/how-to-conduct-a-remote-technical-interview' },
        ]}
      />

      <FinalCTA
        heading="Find Remote Developers in Your Region!"
        subheading="Start risk-free. Access pre-vetted programmers worldwide."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
