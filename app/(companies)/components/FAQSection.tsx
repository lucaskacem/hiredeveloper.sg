'use client';

import { useState } from 'react';
import { useLanguage } from '@/app/i18n/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<string, FAQItem[]> = {
  developers: [
    {
      question: 'How quickly can I hire a remote developer?',
      answer: 'Typically, you will receive vetted candidate profiles within 48 hours. After the interview process, you can often hire a developer within one week and start working immediately.',
    },
    {
      question: 'How are developers vetted at HireDeveloper.sg?',
      answer: 'Every developer goes through a rigorous vetting process that includes technical assessments, code reviews, communication evaluations, and reference checks. Only the top 2% are accepted.',
    },
    {
      question: 'What does it cost to hire a freelance developer?',
      answer: 'Costs vary depending on experience level and specialization. HireDeveloper.sg charges no upfront fees. You only pay once you have found and hired the right developer.',
    },
    {
      question: 'Can I hire developers as both freelancers and full-time?',
      answer: 'Yes, HireDeveloper.sg offers both options. You can hire developers as freelancers on a project basis or as full-time remote employees, depending on your requirements.',
    },
    {
      question: 'What programming languages and technologies do your developers cover?',
      answer: 'Our developers are proficient in all major programming languages, including JavaScript, Python, Java, TypeScript, PHP, Ruby, Go, C#, Rust, Kotlin, and many more. We also cover frameworks like React, Node.js, Django, and Angular.',
    },
    {
      question: 'Is there a quality guarantee or trial period?',
      answer: 'Yes, HireDeveloper.sg offers a risk-free trial period. If you are not satisfied with the hired developer, we will help you find a replacement at no additional cost.',
    },
  ],
  'product designers': [
    {
      question: 'What types of designers can I hire through HireDeveloper.sg?',
      answer: 'You can hire UX designers, UI designers, product designers, interaction designers, visual designers, and full-service designers. Our designers are proficient in Figma, Adobe XD, Sketch, and other modern design tools.',
    },
    {
      question: 'How are designers vetted at HireDeveloper.sg?',
      answer: 'Every designer undergoes a thorough portfolio evaluation, design challenge, communication assessment, and reference check. We evaluate technical skills, creativity, and problem-solving ability equally.',
    },
    {
      question: 'How quickly can I hire a remote designer?',
      answer: 'Within 48 hours you will receive pre-vetted candidate profiles. Most companies hire a designer within 1-2 weeks of their initial request.',
    },
    {
      question: 'What does a freelance product designer cost?',
      answer: 'Freelance product designers cost between $25-200 per hour depending on experience. Senior UX/UI designers typically range from $80-150 per hour. HireDeveloper.sg charges no upfront fees.',
    },
    {
      question: 'Can designers also work on long-term projects?',
      answer: 'Yes, our designers are available for both short-term projects and long-term full-time remote positions. You can structure the collaboration flexibly.',
    },
  ],
  marketers: [
    {
      question: 'What marketing experts can I hire through HireDeveloper.sg?',
      answer: 'We offer digital marketers, SEO experts, content marketers, social media managers, growth hackers, email marketers, performance marketing specialists, and conversion optimizers.',
    },
    {
      question: 'How are marketers vetted at HireDeveloper.sg?',
      answer: 'Our marketers undergo a multi-stage vetting process: strategy assessments, case study analyses, proven results, and reference checks. Only the most qualified experts are accepted.',
    },
    {
      question: 'How quickly can I hire a marketing expert?',
      answer: 'Within 48 hours you will receive pre-vetted candidate profiles that match your requirements. Most companies hire a marketer within 1-2 weeks.',
    },
    {
      question: 'What does a freelance marketer cost?',
      answer: 'Costs vary between $30-175 per hour depending on specialization and experience. Senior growth marketers or part-time CMOs may have higher hourly rates. There are no upfront fees.',
    },
    {
      question: 'Can marketers deliver measurable results?',
      answer: 'Yes, our marketers are vetted based on demonstrable results. They rely on data-driven marketing and deliver measurable KPIs such as conversion rates, ROI, and organic growth.',
    },
  ],
  'product managers': [
    {
      question: 'What types of product managers can I hire?',
      answer: 'You can hire product managers, technical product managers, product owners, AI product managers, and data product managers. Our experts cover various industries and technologies.',
    },
    {
      question: 'How are product managers vetted at HireDeveloper.sg?',
      answer: 'Every product manager undergoes assessments in product strategy, stakeholder communication, agile methodologies, and technical understanding. Only experienced experts with proven track records are accepted.',
    },
    {
      question: 'How quickly can I hire a remote product manager?',
      answer: 'Within 48 hours you will receive pre-vetted candidate profiles. Most companies hire a product manager within 1-2 weeks.',
    },
    {
      question: 'What does a freelance product manager cost?',
      answer: 'Freelance product managers cost between $50-200 per hour depending on experience. Senior or VP-level PMs typically range from $100-200 per hour. There are no upfront fees.',
    },
    {
      question: 'Can product managers also work fractional or part-time?',
      answer: 'Yes, our product managers are available for various work models. From part-time freelance to project-based work to full-time remote positions, we offer flexible options.',
    },
  ],
  'project managers': [
    {
      question: 'What types of project managers can I hire?',
      answer: 'You can hire traditional project managers, Scrum Masters, program managers, and Agile Coaches. Our experts are experienced in both agile and traditional methodologies.',
    },
    {
      question: 'How are project managers vetted at HireDeveloper.sg?',
      answer: 'Every project manager undergoes assessments in project planning, risk management, stakeholder communication, and methodology expertise. Many are PMP, PSM, or PRINCE2 certified.',
    },
    {
      question: 'How quickly can I hire a remote project manager?',
      answer: 'Within 48 hours you will receive pre-vetted candidate profiles. Most companies hire a project manager within 1-2 weeks.',
    },
    {
      question: 'What does a freelance project manager cost?',
      answer: 'Freelance project managers cost between $40-175 per hour depending on experience and certifications. Certified PMPs and program managers typically fall at the upper end. There are no upfront fees.',
    },
    {
      question: 'Can project managers start work immediately?',
      answer: 'Yes, our project managers are ready to start immediately. They can quickly integrate into existing projects and teams, bringing structure and efficiency to your operations.',
    },
  ],
  assistants: [
    {
      question: 'What types of assistants can I hire?',
      answer: 'You can hire virtual assistants, executive assistants, and administrative assistants. Our experts support with calendar management, email management, research, data entry, and more.',
    },
    {
      question: 'How are assistants vetted at HireDeveloper.sg?',
      answer: 'Every assistant undergoes a careful evaluation where organizational skills, communication, technical competence, and time management are assessed. Only the most reliable candidates are accepted.',
    },
    {
      question: 'How quickly can I hire a remote assistant?',
      answer: 'Within 48 hours you will receive pre-vetted candidate profiles. Many companies hire a suitable assistant within one week.',
    },
    {
      question: 'What does a virtual assistant cost?',
      answer: 'Virtual assistants cost between $15-75 per hour depending on experience and tasks. Executive assistants with specialized experience typically range from $30-75 per hour.',
    },
    {
      question: 'What time zones do the assistants work in?',
      answer: 'Our assistants are available worldwide and cover all time zones. You can choose assistants who work in your time zone or with overlapping hours to ensure maximum productivity.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Category-aware FAQ generation for developer subcategories
// Uses the category name to determine domain and generate unique Q&A
// ---------------------------------------------------------------------------
function isAICategory(cat: string): boolean {
  const keywords = ['AI', 'OpenAI', 'ChatGPT', 'LLM', 'NLP', 'Data Scien', 'Data Engineer', 'Machine Learning'];
  return keywords.some(kw => cat.includes(kw));
}

function isWebCategory(cat: string): boolean {
  const keywords = ['Web', 'Frontend', 'Backend', 'Full-Stack', 'HTML', 'RESTful', 'WordPress', 'Ruby on Rails', 'Django', 'Laravel', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'PHP'];
  return keywords.some(kw => cat.includes(kw));
}

function isMobileCategory(cat: string): boolean {
  const keywords = ['Mobile', 'Swift', 'Android', 'iOS', 'React Native', 'Flutter', 'Xamarin', 'Ionic', 'PhoneGap', 'Kotlin'];
  return keywords.some(kw => cat.includes(kw));
}

function isInfraCategory(cat: string): boolean {
  const keywords = ['IT', 'DevOps', 'Security', 'AWS', 'Azure', 'Google Cloud', 'Network', 'Cloud'];
  return keywords.some(kw => cat.includes(kw));
}

function isDataCategory(cat: string): boolean {
  const keywords = ['Database', 'PostgreSQL', 'SQL', 'MySQL', 'BigQuery', 'Oracle', 'MongoDB', 'SQLite', 'Redis', 'Amazon RDS', 'Elasticsearch'];
  return keywords.some(kw => cat.includes(kw));
}

function isEcommerceCategory(cat: string): boolean {
  const keywords = ['E-Commerce', 'Shopify', 'WooCommerce', 'Magento', 'Wix', 'BigCommerce', 'Squarespace'];
  return keywords.some(kw => cat.includes(kw));
}

function getFAQsForCategory(category: string): FAQItem[] {
  if (faqData[category]) return faqData[category];

  // Base FAQs that appear for all developer subcategories but with varied phrasing
  const baseFaqs: FAQItem[] = [
    {
      question: `How long does it take to find a qualified ${category}?`,
      answer: `At HireDeveloper.sg, you typically receive a selection of pre-vetted ${category} profiles within 48 hours. Since all candidates have already passed our multi-stage screening process, you can significantly shorten the interview process. Most companies hire a ${category} within one to two weeks and start the collaboration immediately afterward.`,
    },
    {
      question: `How does HireDeveloper.sg ensure the quality of ${category}?`,
      answer: `Our vetting process consists of multiple stages: First, we evaluate professional qualifications based on work samples and technical tests. This is followed by a live coding assessment and a communication check. Only about 2% of all applicants make it into our network. Additionally, we collect feedback after every engagement to continuously ensure quality.`,
    },
    {
      question: `What contract models are available for working with a ${category}?`,
      answer: `HireDeveloper.sg offers maximum flexibility in contract arrangements. You can engage a ${category} as a freelancer on a project basis, bill on an hourly basis, or fill a long-term full-time remote position. Part-time and fractional models are also available. We are happy to advise you on which model best suits your project and budget.`,
    },
  ];

  // Domain-specific FAQs
  let domainFaqs: FAQItem[] = [];

  if (isAICategory(category)) {
    domainFaqs = [
      {
        question: `What AI frameworks and technologies do your ${category} work with?`,
        answer: `Our ${category} are proficient in leading AI frameworks including TensorFlow, PyTorch, Hugging Face Transformers, LangChain, scikit-learn, and the OpenAI API. Many also bring experience with MLOps tools like MLflow, Kubeflow, and Weights & Biases. Depending on your project requirements, we connect you with specialists in computer vision, NLP, reinforcement learning, or classical machine learning.`,
      },
      {
        question: `Can your ${category} also optimize or fine-tune existing models?`,
        answer: `Yes, many of our ${category} have hands-on experience in fine-tuning pre-trained models, optimizing inference times, and improving model accuracy. They also help with selecting suitable model architectures, data preparation, and building reproducible ML pipelines.`,
      },
      {
        question: `How do your ${category} handle sensitive data and privacy?`,
        answer: `Data privacy is a top priority for our ${category}. They are familiar with GDPR requirements and implement best practices such as data anonymization, access control, and secure data processing. Upon request, they work exclusively within your own infrastructure and sign NDAs and data processing agreements.`,
      },
    ];
  } else if (isWebCategory(category)) {
    domainFaqs = [
      {
        question: `What modern web technologies do your ${category} work with?`,
        answer: `Our ${category} work with the latest web technologies: React, Next.js, Vue.js, Angular, Node.js, TypeScript, Tailwind CSS, and many more. They build performant single-page applications, server-side rendered applications, and progressive web apps. They also focus on SEO, accessibility, and mobile optimization.`,
      },
      {
        question: `Can your ${category} also modernize existing web applications?`,
        answer: `Absolutely. Many of our ${category} specialize in migrating and modernizing existing web applications. Typical projects include transitioning from jQuery to React, introducing TypeScript into an existing codebase, or switching to a microservice architecture. They ensure minimal downtime and smooth transitions throughout.`,
      },
      {
        question: `How do your ${category} ensure the performance of my website?`,
        answer: `Our ${category} use tools like Lighthouse, WebPageTest, and Chrome DevTools to systematically analyze and optimize your website performance. This includes measures such as code splitting, lazy loading, image optimization, caching strategies, and minimizing critical render paths. The goal is always a Core Web Vitals score that improves both user experience and SEO rankings.`,
      },
    ];
  } else if (isMobileCategory(category)) {
    domainFaqs = [
      {
        question: `Do your ${category} develop for iOS, Android, or both platforms?`,
        answer: `Our ${category} cover all major platforms. Depending on your project requirements, you can engage native iOS developers (Swift/Objective-C), native Android developers (Kotlin/Java), or cross-platform specialists (React Native, Flutter). We are happy to advise you on which platform strategy makes the most sense for your project.`,
      },
      {
        question: `Can your ${category} also help with app store publishing?`,
        answer: `Yes, our ${category} know the guidelines of the Apple App Store and Google Play Store and support you throughout the entire publishing chain: app store optimization (ASO), screenshot creation, compliance with review guidelines, and update management. This helps you avoid rejections and accelerate the go-to-market process.`,
      },
      {
        question: `How do your ${category} ensure a great user experience?`,
        answer: `Our ${category} combine technical expertise with UX sensitivity. They consider platform-specific design guidelines (Material Design, Human Interface Guidelines), implement smooth animations, and ensure intuitive navigation. Many work closely with UX designers or bring their own design competence.`,
      },
    ];
  } else if (isInfraCategory(category)) {
    domainFaqs = [
      {
        question: `What cloud platforms and DevOps tools do your ${category} work with?`,
        answer: `Our ${category} are proficient with all major cloud platforms: AWS, Microsoft Azure, and Google Cloud. They work with tools like Terraform, Ansible, Docker, Kubernetes, Jenkins, GitLab CI/CD, and GitHub Actions. Depending on your needs, they support cloud migration, infrastructure automation, monitoring, or security audits.`,
      },
      {
        question: `Can your ${category} also help with compliance requirements?`,
        answer: `Yes, many of our ${category} have experience with compliance frameworks such as ISO 27001, SOC 2, GDPR, and PCI-DSS. They implement security controls, set up access management, and create audit trails. GDPR compliance is a particular focus of our experts serving the Singapore and international markets.`,
      },
      {
        question: `How do your ${category} ensure the availability and security of my systems?`,
        answer: `Our ${category} rely on proven strategies for high availability: redundancy, automated failover, load balancing, and disaster recovery planning. On the security side, they implement firewalls, intrusion detection systems, encrypted communication, and regular security audits. Proactive monitoring with tools like Prometheus, Grafana, or Datadog rounds out the picture.`,
      },
    ];
  } else if (isDataCategory(category)) {
    domainFaqs = [
      {
        question: `What database systems do your ${category} work with?`,
        answer: `Our ${category} cover a broad spectrum: relational databases like PostgreSQL, MySQL, SQL Server, and Oracle; NoSQL systems like MongoDB, Redis, and DynamoDB; and specialized solutions like Elasticsearch, BigQuery, and InfluxDB. They support design, migration, optimization, and high availability regardless of the technology used.`,
      },
      {
        question: `Can your ${category} also help with data migrations?`,
        answer: `Yes, data migration is one of the core competencies of our ${category}. They plan and execute migrations between different database systems, minimize downtime through strategies like blue-green deployments, and validate data integrity after every migration. Migration to cloud databases (AWS RDS, Azure SQL, Google Cloud SQL) is routinely performed as well.`,
      },
      {
        question: `How do your ${category} optimize database performance?`,
        answer: `Our ${category} analyze execution plans, identify slow queries, and optimize them through targeted indexing, query rewriting, and partitioning. They also set up caching strategies, configure connection pooling, and implement read replicas for high-traffic applications. The result: noticeably faster response times and lower infrastructure costs.`,
      },
    ];
  } else if (isEcommerceCategory(category)) {
    domainFaqs = [
      {
        question: `What e-commerce platforms do your ${category} work with?`,
        answer: `Our ${category} work with all leading e-commerce platforms: Shopify and Shopify Plus, WooCommerce, Magento (Adobe Commerce), BigCommerce, Wix, and custom solutions. They develop custom themes, individual plugins, and integrations with ERP, CRM, and payment systems.`,
      },
      {
        question: `Can your ${category} also optimize payment systems and checkout processes?`,
        answer: `Absolutely. Our ${category} integrate payment providers like Stripe, PayPal, Klarna, and Adyen and optimize the checkout process for maximum conversion. This includes one-click checkout, guest checkout, trust signals, and PCI-DSS compliance. Many have demonstrably improved conversion rates by 15-30%.`,
      },
      {
        question: `How do your ${category} support international expansion of my online store?`,
        answer: `Our ${category} have experience with internationalizing online stores. They implement multi-language support, country-specific payment methods, correct VAT calculations, and local shipping options. They also consider cultural differences in UX design and ensure fast loading times through CDN integration and regional hosting.`,
      },
    ];
  } else {
    // Generic but still richer fallback for other categories
    domainFaqs = [
      {
        question: `What special qualifications do your ${category} bring?`,
        answer: `Our ${category} possess deep domain expertise and proven project experience in their specialty. Many bring relevant certifications, industry experience, and a portfolio of successful projects. In the selection process, we evaluate not only technical skills but also problem-solving ability, communication, and the ability to quickly adapt to new contexts.`,
      },
      {
        question: `How do your ${category} integrate into my existing team?`,
        answer: `Our ${category} are experienced in remote collaboration and quickly integrate into existing teams. They routinely work with tools like Slack, Jira, Confluence, GitHub, and Microsoft Teams. Thanks to their experience with agile methodologies, they quickly adapt to your processes and company culture.`,
      },
      {
        question: `Can I flexibly scale the collaboration with a ${category}?`,
        answer: `Yes, flexibility is a core feature of working with HireDeveloper.sg. You can adjust the scope at any time, from a few hours per week to full-time integration. Switching between project phases with varying workloads is also seamlessly possible.`,
      },
    ];
  }

  return [...baseFaqs, ...domainFaqs];
}

function FAQJsonLd({ faqs, category }: { faqs: FAQItem[]; category: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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

export default function FAQSection({ category }: { category: string }) {
  const { t } = useLanguage();
  const faqs = getFAQsForCategory(category);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 overflow-hidden">
      <FAQJsonLd faqs={faqs} category={category} />
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-bold text-gray-900 mb-6 md:mb-10 text-center">
            {t('faq.title')}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-500 flex-shrink-0">
                    {openIndex === index ? '\u2212' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            {t('faq.moreQuestions')}{' '}
            <span className="font-semibold">{category}</span>?{' '}
            <a
              href="/hire-developers"
              className="text-[rgb(0,159,255)] hover:underline"
            >
              {t('faq.exploreTalent')}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
