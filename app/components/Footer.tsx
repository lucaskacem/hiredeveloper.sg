'use client';

import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const topTalent = {
    title: t('footer.topTalent'),
    links: [
      { name: 'Software Developer', url: '/hire-developers/software-development' },
      { name: 'Web Developer', url: '/hire-developers/web-development' },
      { name: 'Mobile App Developer', url: '/hire-developers/mobile-app-development' },
      { name: 'Frontend Developer', url: '/hire-developers/front-end' },
      { name: 'Backend Developer', url: '/hire-developers/back-end' },
      { name: 'Full-Stack Developer', url: '/hire-developers/full-stack' },
      { name: 'DevOps Engineer', url: '/hire-developers/devops' },
      { name: 'AI Developer', url: '/hire-developers/ai' },
      { name: 'Python Developer', url: '/hire-developers/python' },
      { name: 'React Developer', url: '/hire-developers/reactjs' },
      { name: 'Node.js Developer', url: '/hire-developers/nodejs' },
      { name: 'Product Designer', url: '/hire-designers' },
      { name: 'UX Designer', url: '/hire-designers' },
      { name: 'Product Manager', url: '/hire-product-managers' },
      { name: 'Project Manager', url: '/hire-project-managers' },
    ]
  };

  const marketingSkills = {
    title: t('footer.marketingTalent'),
    links: [
      { name: 'A/B Testing Expert', url: '/hire-marketers/ab-test-setup' },
      { name: 'Content Strategist', url: '/hire-marketers/content-strategy' },
      { name: 'Copywriter', url: '/hire-marketers/copywriting' },
      { name: 'SEO Audit Specialist', url: '/hire-marketers/seo-audit' },
      { name: 'Paid Ads Expert', url: '/hire-marketers/paid-ads' },
      { name: 'Email Marketing', url: '/hire-marketers/email-sequence' },
      { name: 'Page CRO Specialist', url: '/hire-marketers/page-cro' },
      { name: 'Programmatic SEO', url: '/hire-marketers/programmatic-seo' },
      { name: 'Social Media Creator', url: '/hire-marketers/social-content' },
      { name: 'Launch Strategist', url: '/hire-marketers/launch-strategy' },
      { name: 'Pricing Strategist', url: '/hire-marketers/pricing-strategy' },
      { name: 'Referral Programs', url: '/hire-marketers/referral-program' },
      { name: 'Analytics Tracking', url: '/hire-marketers/analytics-tracking' },
      { name: 'All 25 Specializations', url: '/hire-marketers' },
    ]
  };

  const locations = {
    title: t('footer.locations'),
    links: [
      { name: 'Singapore', url: '/locations/singapore' },
      { name: 'Marina Bay', url: '/locations/singapore/central-region/marina-bay' },
      { name: 'Raffles Place', url: '/locations/singapore/central-region/raffles-place' },
      { name: 'Orchard', url: '/locations/singapore/central-region/orchard' },
      { name: 'one-north', url: '/locations/singapore/central-region/one-north' },
      { name: 'Changi Business Park', url: '/locations/singapore/east-region/changi-business-park' },
      { name: 'Jurong', url: '/locations/singapore/west-region/jurong-east' }
    ]
  };

  const toolsColumn = {
    title: t('footer.tools'),
    links: [
      { name: 'Salary Calculator', url: '/tools/salary-calculator' },
      { name: 'Team Cost Calculator', url: '/tools/team-cost-calculator' },
      { name: 'Technology Comparison', url: '/tools/technology-comparison' },
      { name: 'Interview Questions', url: '/tools/interview-questions' },
      { name: 'Project Estimation', url: '/tools/project-estimation' },
      { name: 'Skill Assessment', url: '/tools/skill-assessment' },
      { name: 'All Tools', url: '/tools' },
    ]
  };

  const linksColumn = {
    title: t('footer.links'),
    links: [
      { name: 'Hire Developers', url: '/hire-developers' },
      { name: 'Hire Designers', url: '/hire-designers' },
      { name: 'Hire Marketers', url: '/hire-marketers' },
      { name: 'Hire Product Managers', url: '/hire-product-managers' },
      { name: 'All Locations', url: '/locations' },
      { name: 'Employer Blog', url: '/employer-blog/how-to-find-developers' },
      { name: 'How It Works', url: '/how-it-works' },
      { name: 'For Talent', url: '/for-talent' },
      { name: 'Pricing', url: '/pricing' },
      { name: 'FAQ', url: '/faq' },
      { name: 'Privacy', url: '/privacy' },
      { name: 'Terms of Use', url: '/terms' }
    ]
  };

  const renderColumn = (column: { title: string; links: { name: string; url: string }[] }, hideTitle?: boolean) => (
    <div>
      <h3 className={`text-xs font-bold text-white/60 mb-6 uppercase tracking-wider ${hideTitle ? 'opacity-0' : ''}`}>
        {column.title}
      </h3>
      <div className="space-y-3">
        {column.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="bg-black text-white py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-10 md:mb-12">
          {renderColumn(topTalent)}
          {renderColumn(marketingSkills)}
          {renderColumn(locations)}
          {renderColumn(toolsColumn)}
          {renderColumn(linksColumn)}
        </div>

        {/* Singapore Trust Signals */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-6 md:mb-8 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 md:gap-6 flex-wrap">
            <span className="text-xs md:text-sm text-white/70 font-medium">🇸🇬 {t('footer.serving')}</span>
            <span className="text-xs text-white/40">|</span>
            <span className="text-xs md:text-sm text-white/50">🇸🇬 {t('footer.singapore')}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <span className="text-[10px] md:text-xs text-white/40 px-2 md:px-3 py-1 border border-white/10 rounded-full">{t('footer.zeroIncomeTax')}</span>
            <span className="text-[10px] md:text-xs text-white/40 px-2 md:px-3 py-1 border border-white/10 rounded-full">{t('footer.gmt4')}</span>
            <span className="text-[10px] md:text-xs text-white/40 px-2 md:px-3 py-1 border border-white/10 rounded-full">{t('footer.workWeek')}</span>
            <span className="text-[10px] md:text-xs text-white/40 px-2 md:px-3 py-1 border border-white/10 rounded-full">{t('footer.goldenVisa')}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6 md:mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          {/* Copyright and Legal Links */}
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <span className="text-xs md:text-sm text-white/60">
              {t('footer.copyright')} {new Date().getFullYear()} HireDeveloper.sg
            </span>
            <a
              href="/privacy"
              className="text-xs md:text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('footer.cookiePolicy')}
            </a>
            <a
              href="/privacy"
              className="text-xs md:text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="/terms"
              className="text-xs md:text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('footer.termsOfUse')}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
            <span
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <span
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </span>
            <span
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
