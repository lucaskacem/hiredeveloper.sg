import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCTA from '../components/FinalCTA';
import HiringProcessFlowchart from '../components/HiringProcessFlowchart';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import CompaniesTestimonials from '../components/CompaniesTestimonials';
import DedicatedTeamSection from '../components/DedicatedTeamSection';
import HiringGuideSection from '../components/HiringGuideSection';
import Breadcrumb from '../components/Breadcrumb';
import RelatedLinks from '../components/RelatedLinks';

const year = new Date().getFullYear();
export const metadata = {
    title: `Hire Marketers - ${year} | HireDeveloper.sg`,
    description: `Hire the best remote marketers, growth experts, and content strategists in Singapore. Over 3,400 vetted freelance and full-time marketing professionals ready for interviews. Updated for ${year}.`,
    alternates: {
      canonical: 'https://hiredeveloper.sg/hire-marketers',
    },
};

export default function HireMarketersPage() {
    const profiles = [
        {
            name: "Layla K.",
            location: "Singapore, Singapore (UTC+8)",
            badge: "Vetted Marketer",
            bio: "Experienced growth marketer with 9 years scaling SaaS and e-commerce startups across the Asia Pacific. Specialized in SEO, content strategy, and paid acquisition. Grew organic traffic by 400% for a Singapore-based fintech.",
            skills: ["SEO", "Content Strategy", "Google Ads", "Growth Hacking", "Analytics", "Copywriting", "+5"],
            availability: "Full-Time & Freelance",
            previousCompany: { name: "Top Agency", logo: "" },
            avatar: "https://randomuser.me/api/portraits/women/25.jpg"
        },
        {
            name: "Omar B.",
            location: "Marina Bay, Singapore (UTC+8)",
            badge: "Vetted Marketer",
            bio: "Performance marketing expert focused on e-commerce and lead generation in APAC markets. Manages monthly ad budgets exceeding $150,000. Certified in Google Ads and Meta Blueprint.",
            skills: ["Paid Ads", "Meta Ads", "Email Marketing", "CRO", "A/B Testing", "+8"],
            availability: "Full-Time & Freelance",
            previousCompany: { name: "Top Brand", logo: "" },
            avatar: "https://randomuser.me/api/portraits/men/37.jpg"
        },
        {
            name: "Sophie W.",
            location: "Singapore, Singapore (UTC+8)",
            badge: "Vetted Marketer",
            bio: "Content strategist and copywriter with deep experience in B2B SaaS. Built content engines that generated 50,000+ monthly organic visitors. Expert in topic clusters and programmatic SEO.",
            skills: ["Content Strategy", "Copywriting", "Programmatic SEO", "Email Sequences", "Social Content", "+6"],
            availability: "Full-Time & Freelance",
            previousCompany: { name: "Top Company", logo: "" },
            avatar: "https://randomuser.me/api/portraits/women/31.jpg"
        }
    ];

    const stats = [
        { prefix: "Up to", value: "75%", label: "faster hiring" },
        { prefix: "Up to", value: "58%", label: "cost savings" },
        { value: "3,400+", label: "marketers available" }
    ];

    const testimonials = [
        {
            quote: "Our marketing ROI doubled within three months after hiring an expert through HireDeveloper.sg.",
            author: "S.J.",
            title: "CMO",
            company: "Singapore Tech Startup",
            avatar: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        {
            quote: "The quality of pre-vetted marketers saved us countless hours in the recruiting process.",
            author: "M.R.",
            title: "Founder",
            company: "Marina Bay SaaS Company",
            avatar: "https://randomuser.me/api/portraits/men/36.jpg"
        }
    ];

    const companiesTestimonials = [
        {
            quote: "HireDeveloper.sg helped us quickly find a top-tier CRO specialist who increased our conversions by 47%.",
            author: "L.K.",
            title: "VP Marketing",
            company: "E-Commerce Company",
            avatar: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
            quote: "We hired an SEO expert and a content strategist — both have been outstanding additions to our team.",
            author: "T.W.",
            title: "CEO",
            company: "FinTech Startup",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg"
        }
    ];

    const categorySections = [
        {
            id: "cro",
            title: "CRO & Optimization",
            items: [
                { name: "A/B Testing Expert", icon: "digital-marketing.svg", url: "/hire-marketers/ab-test-setup" },
                { name: "Form CRO Specialist", icon: "digital-marketing.svg", url: "/hire-marketers/form-cro" },
                { name: "Onboarding CRO Expert", icon: "digital-marketing.svg", url: "/hire-marketers/onboarding-cro" },
                { name: "Page CRO Specialist", icon: "digital-marketing.svg", url: "/hire-marketers/page-cro" },
                { name: "Paywall & Upsell Specialist", icon: "digital-marketing.svg", url: "/hire-marketers/paywall-upgrade-cro" },
                { name: "Popup Conversion Expert", icon: "digital-marketing.svg", url: "/hire-marketers/popup-cro" },
                { name: "Signup Flow Optimizer", icon: "digital-marketing.svg", url: "/hire-marketers/signup-flow-cro" },
            ]
        },
        {
            id: "content",
            title: "Content & Copy",
            items: [
                { name: "Content Strategist", icon: "content.svg", url: "/hire-marketers/content-strategy" },
                { name: "Copy Editor", icon: "content.svg", url: "/hire-marketers/copy-editing" },
                { name: "Copywriter", icon: "content.svg", url: "/hire-marketers/copywriting" },
                { name: "Social Media Creator", icon: "content.svg", url: "/hire-marketers/social-content" },
            ]
        },
        {
            id: "seo",
            title: "SEO & Technical",
            items: [
                { name: "Analytics & Tracking Specialist", icon: "seo.svg", url: "/hire-marketers/analytics-tracking" },
                { name: "Programmatic SEO Expert", icon: "seo.svg", url: "/hire-marketers/programmatic-seo" },
                { name: "Schema Markup Specialist", icon: "seo.svg", url: "/hire-marketers/schema-markup" },
                { name: "SEO Audit Specialist", icon: "seo.svg", url: "/hire-marketers/seo-audit" },
            ]
        },
        {
            id: "growth",
            title: "Growth & Strategy",
            items: [
                { name: "Free Tool Strategist", icon: "growth.svg", url: "/hire-marketers/free-tool-strategy" },
                { name: "Launch Strategist", icon: "growth.svg", url: "/hire-marketers/launch-strategy" },
                { name: "Marketing Ideation Expert", icon: "growth.svg", url: "/hire-marketers/marketing-ideas" },
                { name: "Marketing Psychology Expert", icon: "growth.svg", url: "/hire-marketers/marketing-psychology" },
                { name: "Pricing Strategist", icon: "growth.svg", url: "/hire-marketers/pricing-strategy" },
            ]
        },
        {
            id: "acquisition",
            title: "Acquisition & Retention",
            items: [
                { name: "Competitor Analysis Specialist", icon: "email.svg", url: "/hire-marketers/competitor-alternatives" },
                { name: "Email Marketing Specialist", icon: "email.svg", url: "/hire-marketers/email-sequence" },
                { name: "Paid Advertising Expert", icon: "email.svg", url: "/hire-marketers/paid-ads" },
                { name: "Product Marketing Manager", icon: "email.svg", url: "/hire-marketers/product-marketing-context" },
                { name: "Referral Program Specialist", icon: "email.svg", url: "/hire-marketers/referral-program" },
            ]
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Submit Your Request",
            description: "Describe the ideal marketer you're looking for.",
            subtext: "Tell us about the role, goals, and budget.",
            image: "request.png"
        },
        {
            number: "02",
            title: "Interview",
            description: "Receive vetted marketer profiles that match your requirements.",
            subtext: "Select the marketer you'd like to interview.",
            image: "interview.png"
        },
        {
            number: "03",
            title: "Hire",
            description: "When you're ready, hire your preferred marketer.",
            subtext: "We handle the contract and compliance.",
            image: "hire.png"
        }
    ];

    const dedicatedTeamFeatures = [
        {
            title: "Pre-Vetted Marketers",
            description: "Every marketer is tested for expertise, strategic thinking, and results-driven mindset."
        },
        {
            title: "Fast Matching",
            description: "Receive matching candidates within 48 hours from our pool of 3,400+ marketers."
        },
        {
            title: "25 Specializations",
            description: "From A/B testing to SEO audits, copywriting to pricing strategy — we cover every marketing skill."
        },
        {
            title: "Quality Guarantee",
            description: "Pay only when you're satisfied. $0 until you hire."
        }
    ];

    const guideSections = [
        {
            title: "Why hire marketers in Singapore?",
            subsections: [
                {
                    subtitle: "Access 25 Marketing Specializations",
                    content: "From CRO experts and A/B testers to SEO specialists and copywriters, our platform covers every marketing skill Singapore businesses need to grow. Whether you are a CBD-based fintech, a Block71 startup, or an established e-commerce brand in Singapore, we match you with specialists who understand how to drive results in the Southeast Asian market."
                },
                {
                    subtitle: "Global Expertise, Local Market Knowledge",
                    content: "Our marketers combine international best practices with deep understanding of the APAC market. They know how to reach multilingual audiences, navigate Singapore advertising regulations, and time campaigns around regional events like the Great Singapore Sale, Singapore Tech Week, and the Singapore FinTech Festival."
                },
                {
                    subtitle: "Scale On Demand, Stay Lean",
                    content: "Singapore's business environment moves fast. Whether you need a fractional CMO, a full marketing team, or a specialist for a single campaign, you can scale your marketing efforts up or down without the commitments of Singapore employment contracts, Employment Pass sponsorship, or long-term office leases in the CBD or one-north."
                }
            ]
        },
        {
            title: "Key marketing skills in high demand across Singapore",
            subsections: [
                {
                    subtitle: "Conversion Rate Optimization (CRO)",
                    content: "A/B testing, page optimization, form CRO, popup optimization, and signup flow optimization are the highest-demand skills for SaaS and e-commerce companies in Singapore. With Singapore's high customer acquisition costs, improving conversion rates is often the fastest path to profitable growth."
                },
                {
                    subtitle: "Content & SEO for Singapore Market",
                    content: "Content strategy, bilingual copywriting, programmatic SEO, and schema markup specialists help businesses dominate search results in both English and Chinese. With Singapore consumers researching online before purchasing, ranking on the first page of Google.com.sg is a critical growth lever."
                },
                {
                    subtitle: "Paid Acquisition & Growth",
                    content: "Google Ads, Meta Ads, and LinkedIn Ads experts combined with email marketing and referral program specialists drive measurable growth across Southeast Asia region. Singapore-focused paid media experts understand the nuances of targeting expat communities, local audiences, and B2B decision-makers in the region&apos;s key business hubs."
                }
            ]
        }
    ];

    const articles = [
        { title: "Finding Freelance Marketing Experts: 21+ Tips & Strategies", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
        { title: "Is Your Candidate Ready for Remote Work?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
        { title: "Interview Questions for Remote Marketing Experts", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
        { title: "How to Conduct a Remote Marketing Interview", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
        { title: "Building & Maintaining a Remote Marketing Team", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
        { title: "Managing Remote Marketing Teams", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" }
    ];

    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Hire Top Marketers in Singapore',
        description: `Hire the best remote marketers, growth experts, and content strategists in Singapore. Over 3,400 vetted freelance and full-time marketing professionals ready for interviews. Updated for ${year}.`,
        url: 'https://hiredeveloper.sg/hire-marketers',
        provider: {
            '@type': 'Organization',
            name: 'HireDeveloper.sg',
            url: 'https://hiredeveloper.sg',
        },
        serviceType: 'Marketing Talent Recruitment',
        areaServed: { '@type': 'Country', name: 'Singapore' },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: '$0 until you hire',
        },
    };

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            <Breadcrumb
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Hire Marketers', href: '/hire-marketers' },
                ]}
            />

            <HireHero
                category="marketers"
                count={3421}
                description="HireDeveloper.sg has 3,421 vetted remote marketers across 25 specializations — from CRO to copywriting, SEO to paid ads. Find the perfect talent to grow your brand in Singapore."
            />

            {/* Hero Video Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                    <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg hidden md:block">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="/videos/hero.webm" type="video/webm" />
                        </video>
                        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                    </div>
                </div>
            </section>

            <TalentShowcase
                heading="3,421 marketers available:"
                profiles={profiles}
                category="marketers"
            />
            <StatsTestimonials stats={stats} testimonials={testimonials} />
            <CategoriesGrid
                heading="25 marketing specializations, one platform"
                subheading="HireDeveloper.sg offers vetted experts for every marketing skill — from A/B testing to social content."
                sections={categorySections}
            />
            <HowItWorksSteps steps={steps} category="marketers" />
            <CompaniesTestimonials testimonials={companiesTestimonials} />
            <DedicatedTeamSection
                heading="Build your dedicated marketing team"
                description="Expand your reach with our global network of 3,400+ marketing professionals across 25 specializations."
                features={dedicatedTeamFeatures}
            />
            <WhyChooseArc />
            <HiringGuideSection
                heading="How to hire top marketers in Singapore"
                sections={guideSections}
            />
            <FAQSection category="marketers" />
            <ResourcesSection
                heading="Resources for hiring marketers"
                subheading="Tips and best practices for recruiting marketing talent."
                articles={articles}
            />

            <RelatedLinks
                title="Marketers by Location"
                links={[
                    { label: 'Marketers in Singapore', href: '/locations/singapore' },
                    { label: 'Marketers in Marina Bay', href: '/locations/singapore/central-region/marina-bay' },
                    { label: 'Marketers in one-north', href: '/locations/singapore/central-region/one-north' },
                    { label: 'Marketers in Jurong East', href: '/locations/singapore/west-region/jurong-east' },
                    { label: 'Marketers in Tampines', href: '/locations/singapore/east-region/tampines' },
                    { label: 'Marketers in Woodlands', href: '/locations/singapore/north-region/woodlands' },
                    { label: 'All Locations', href: '/locations' },
                ]}
            />

            <RelatedLinks
                title="Also Hire Developers"
                links={[
                    { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
                    { label: 'Python Developers', href: '/hire-developers/python' },
                    { label: 'React Developers', href: '/hire-developers/reactjs' },
                    { label: 'Full-Stack Developers', href: '/hire-developers/full-stack' },
                    { label: 'AI Developers', href: '/hire-developers/ai' },
                    { label: 'All Developer Specializations', href: '/hire-developers' },
                ]}
            />

            <RelatedLinks
                title="Useful Hiring Tools"
                links={[
                    { label: 'Salary Calculator', href: '/tools/salary-calculator' },
                    { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
                    { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
                    { label: 'All Tools', href: '/tools' },
                ]}
            />

            <HiringProcessFlowchart industry="your marketing team" />

            <FinalCTA
                heading="Your next marketing expert is just a click away!"
                subheading="Access 25 specializations. Start risk-free."
                ctaText="Hire Talent"
            />
            <Footer />
        </div>
    );
}
