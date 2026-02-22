// -----------------------------------------------------------------------------
// locations.ts — Comprehensive location data for UAE and Gulf region
// Used for programmatic SEO pages on the HireDeveloper.ae hiring platform
// -----------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface FreeZone {
  name: string;
  slug: string;
  focus: string;
}

export interface TechHub {
  name: string;
  description: string;
}

export interface City {
  slug: string;
  name: string;
  nameAr: string;
  population: number;
  lat: number;
  lng: number;
  wikipedia: string;
  description: string;
  descriptionAr: string;
  /** Optional rich data for UAE cities */
  freeZones?: FreeZone[];
  techHubs?: TechHub[];
  majorEmployers?: string[];
  hiringFacts?: string[];
  image?: string;
  imageAlt?: string;
}

export interface Region {
  slug: string;
  name: string;
  nameAr: string;
  cities: City[];
}

export interface Country {
  slug: string;
  name: string;
  nameAr: string;
  demonym: string;
  metaDescription: string;
  metaDescriptionAr: string;
  regions: Region[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const countries: Country[] = [
  // ==========================================================================
  // UNITED ARAB EMIRATES — 7 Emirates
  // ==========================================================================
  {
    slug: 'uae',
    name: 'United Arab Emirates',
    nameAr: 'الإمارات العربية المتحدة',
    demonym: 'Emirati',
    metaDescription:
      'Hire pre-vetted remote developers across all 7 UAE emirates. Top 2% talent from Dubai to Abu Dhabi, matched in 48 hours. Save 40-60% vs local hiring.',
    metaDescriptionAr: 'وظّف أفضل المطورين عن بعد في جميع إمارات الدولة السبع. أفضل 2% من المواهب من دبي إلى أبوظبي، مطابقة خلال 48 ساعة. وفّر 40-60% مقارنة بالتوظيف المحلي.',
    regions: [
      {
        slug: 'dubai',
        name: 'Dubai',
        nameAr: 'دبي',
        cities: [
          {
            slug: 'dubai',
            name: 'Dubai',
            nameAr: 'دبي',
            population: 3500000,
            lat: 25.2048,
            lng: 55.2708,
            wikipedia: 'https://en.wikipedia.org/wiki/Dubai',
            description:
              'Dubai is the business hub of the Middle East, home to DIFC, Dubai Internet City, and Dubai Silicon Oasis. A thriving tech ecosystem with thousands of startups and enterprises makes it the top destination for hiring developers in the region.',
            descriptionAr: 'دبي هي مركز الأعمال في الشرق الأوسط، وموطن مركز دبي المالي العالمي ومدينة دبي للإنترنت وواحة دبي للسيليكون. تضم منظومة تقنية مزدهرة بآلاف الشركات الناشئة والمؤسسات مما يجعلها الوجهة الأولى لتوظيف المطورين في المنطقة.',
            image: '/images/dubai/skyline.svg',
            imageAlt: 'Dubai skyline at sunset with Burj Khalifa - hire developers in Dubai UAE',
            freeZones: [
              { name: 'Dubai Internet City (DIC)', slug: 'dic', focus: 'Technology and ICT companies — home to Google, Microsoft, LinkedIn, Meta regional HQs' },
              { name: 'Dubai International Financial Centre (DIFC)', slug: 'difc', focus: 'Fintech, banking, and financial services — 400+ financial firms' },
              { name: 'Dubai Silicon Oasis (DSO)', slug: 'dso', focus: 'Semiconductor, electronics, and software development — integrated tech park' },
              { name: 'Dubai Multi Commodities Centre (DMCC)', slug: 'dmcc', focus: 'Commodities trading, blockchain, and Web3 companies — 22,000+ member companies' },
              { name: 'Dubai Media City (DMC)', slug: 'dmc', focus: 'Media, marketing, and digital content — CNN, Reuters, BBC regional offices' },
              { name: 'Dubai Design District (d3)', slug: 'd3', focus: 'Design, fashion, and creative tech companies' },
            ],
            techHubs: [
              { name: 'Dubai Internet City', description: 'The Middle East\'s largest ICT hub with 1,600+ companies and 30,000+ knowledge workers' },
              { name: 'Dubai Silicon Oasis', description: 'Integrated technology park with co-working spaces, incubators, and Rochester Institute of Technology campus' },
              { name: 'DIFC Innovation Hub', description: 'Largest fintech accelerator in the MENA region, housing 500+ innovation-focused companies' },
              { name: 'Dubai Marina & JLT', description: 'Dense cluster of tech agencies, SaaS companies, and remote-first startups near DMCC free zone' },
              { name: 'in5 Tech', description: 'Government-backed innovation center supporting tech startups with funding and mentorship' },
            ],
            majorEmployers: ['Emirates Group', 'Careem (Uber)', 'Noon', 'Souq (Amazon)', 'DEWA', 'Talabat', 'Dubizzle', 'Property Finder', 'Kitopi', 'Majid Al Futtaim'],
            hiringFacts: [
              'Dubai is home to 30,000+ active tech companies',
              'Sunday-Thursday work week (UAE standard)',
              'Zero personal income tax for all residents',
              'GMT+4 timezone bridges Asia, Europe, and Africa business hours',
              '200+ nationalities live and work in Dubai',
              '95%+ internet penetration rate — highest in the MENA region',
              'Golden Visa available for tech professionals and entrepreneurs',
              'GITEX Global — world\'s largest tech show — is held annually in Dubai',
            ],
          },
          {
            slug: 'dubai-marina',
            name: 'Dubai Marina',
            nameAr: 'دبي مارينا',
            population: 50000,
            lat: 25.0805,
            lng: 55.1403,
            wikipedia: 'https://en.wikipedia.org/wiki/Dubai_Marina',
            description:
              'Dubai Marina is a vibrant waterfront community and one of the most popular residential areas for tech professionals in Dubai. Its proximity to Dubai Internet City and Media City makes it a convenient base for developers and digital workers.',
            descriptionAr: 'دبي مارينا مجتمع ساحلي نابض بالحياة ومن أكثر المناطق السكنية شعبية بين المتخصصين في التقنية. قربها من مدينة دبي للإنترنت ومدينة دبي للإعلام يجعلها قاعدة مثالية للمطورين والعاملين الرقميين.',
            hiringFacts: [
              'Minutes from Dubai Internet City and Dubai Media City',
              'High concentration of tech professionals and co-working spaces',
              'Excellent public transport via Dubai Metro and Tram',
            ],
          },
          {
            slug: 'jumeirah-lake-towers',
            name: 'Jumeirah Lake Towers',
            nameAr: 'أبراج بحيرات جميرا',
            population: 60000,
            lat: 25.0766,
            lng: 55.1389,
            wikipedia: 'https://en.wikipedia.org/wiki/Jumeirah_Lake_Towers',
            description:
              'Jumeirah Lake Towers (JLT) is a mixed-use free zone district adjacent to Dubai Marina, housing hundreds of tech companies, software agencies, and IT consultancies. The DMCC Free Zone headquartered here is one of the largest free zones in the UAE.',
            descriptionAr: 'أبراج بحيرات جميرا (JLT) منطقة متعددة الاستخدامات ومنطقة حرة مجاورة لدبي مارينا، تضم مئات شركات التقنية ووكالات البرمجيات واستشارات تقنية المعلومات. المنطقة الحرة DMCC المقرّة هنا من أكبر المناطق الحرة في الإمارات.',
            freeZones: [
              { name: 'DMCC Free Zone', slug: 'dmcc', focus: 'Multi-commodities, blockchain, crypto, and Web3 companies — 22,000+ member companies' },
            ],
            hiringFacts: [
              'One of the most affordable free zone office locations in Dubai',
              'Home to hundreds of tech startups and software agencies',
              'DMCC is the world\'s #1 free zone for seven consecutive years',
            ],
          },
          {
            slug: 'dubai-internet-city',
            name: 'Dubai Internet City',
            nameAr: 'مدينة دبي للإنترنت',
            population: 0,
            lat: 25.0952,
            lng: 55.152,
            wikipedia: 'https://en.wikipedia.org/wiki/Dubai_Internet_City',
            description:
              'Dubai Internet City (DIC) is a dedicated technology free zone and the Middle East\'s largest ICT hub. Home to regional offices of Google, Microsoft, LinkedIn, Meta, and hundreds of tech startups, it is the epicenter of software development hiring in the Gulf.',
            descriptionAr: 'مدينة دبي للإنترنت (DIC) منطقة حرة مخصصة للتكنولوجيا وأكبر مركز لتقنية المعلومات والاتصالات في الشرق الأوسط. تستضيف المكاتب الإقليمية لشركات Google وMicrosoft وLinkedIn وMeta ومئات الشركات الناشئة.',
            freeZones: [
              { name: 'Dubai Internet City (DIC)', slug: 'dic', focus: 'Technology, software, and internet companies — 1,600+ registered firms' },
            ],
            majorEmployers: ['Google', 'Microsoft', 'LinkedIn', 'Meta', 'SAP', 'Oracle', 'IBM', 'Dell', 'HP', 'Cisco'],
            hiringFacts: [
              '1,600+ tech companies in a single free zone',
              '30,000+ knowledge workers on campus',
              '100% foreign ownership allowed',
              'Zero corporate tax for qualifying activities',
            ],
          },
        ],
      },
      {
        slug: 'abu-dhabi',
        name: 'Abu Dhabi',
        nameAr: 'أبوظبي',
        cities: [
          {
            slug: 'abu-dhabi',
            name: 'Abu Dhabi',
            nameAr: 'أبوظبي',
            population: 1500000,
            lat: 24.4539,
            lng: 54.3773,
            wikipedia: 'https://en.wikipedia.org/wiki/Abu_Dhabi',
            description:
              'Abu Dhabi is the capital of the UAE, a growing hub for AI, fintech, and government technology. Hub71 and ADGM attract global tech talent, while major government digital transformation projects create strong demand for skilled developers.',
            descriptionAr: 'أبوظبي عاصمة الإمارات ومركز متنامٍ للذكاء الاصطناعي والتكنولوجيا المالية والتقنية الحكومية. يستقطب Hub71 وسوق أبوظبي العالمي المواهب التقنية العالمية، بينما تخلق مشاريع التحول الرقمي الحكومية طلباً قوياً على المطورين المهرة.',
            image: '/images/abu-dhabi/skyline.svg',
            imageAlt: 'Abu Dhabi skyline with Etihad Towers - hire developers in Abu Dhabi UAE',
            freeZones: [
              { name: 'Abu Dhabi Global Market (ADGM)', slug: 'adgm', focus: 'International financial center — fintech sandbox and innovation hub on Al Maryah Island' },
              { name: 'twofour54', slug: 'twofour54', focus: 'Media, entertainment, and digital content production zone' },
              { name: 'Masdar City Free Zone', slug: 'masdar', focus: 'Clean technology, renewable energy, and sustainability-focused startups' },
              { name: 'Abu Dhabi Airports Free Zone (ADAFZ)', slug: 'adafz', focus: 'Logistics, aviation tech, and trade companies' },
            ],
            techHubs: [
              { name: 'Hub71', description: 'Abu Dhabi\'s global tech ecosystem backed by Mubadala — 200+ startups, $2B+ in collective valuation' },
              { name: 'ADGM', description: 'Fintech regulatory sandbox attracting blockchain, DeFi, and digital banking startups' },
              { name: 'Masdar City', description: 'World\'s first carbon-neutral city — cleantech, IoT, and sustainability innovation hub' },
              { name: 'Mohamed bin Zayed University of AI (MBZUAI)', description: 'World\'s first graduate-level AI university, driving Abu Dhabi\'s position as a global AI capital' },
            ],
            majorEmployers: ['ADNOC', 'Etihad Airways', 'Mubadala', 'G42', 'Abu Dhabi Digital Authority', 'First Abu Dhabi Bank', 'EDGE Group', 'Presight AI', 'Aldar Properties', 'Abu Dhabi Ports'],
            hiringFacts: [
              'Abu Dhabi Digital Authority drives one of the largest gov-tech programs in the MENA region',
              'Hub71 provides up to $500K in incentives for qualifying tech startups',
              'G42 and MBZUAI make Abu Dhabi a leading AI research center globally',
              'ADGM is the first jurisdiction in the MENA region with a comprehensive digital assets framework',
              'Golden Visa program for tech professionals, researchers, and entrepreneurs',
            ],
          },
          {
            slug: 'al-ain',
            name: 'Al Ain',
            nameAr: 'العين',
            population: 766936,
            lat: 24.1917,
            lng: 55.7606,
            wikipedia: 'https://en.wikipedia.org/wiki/Al_Ain',
            description:
              'Al Ain is the UAE\'s fourth-largest city and an important educational center, home to UAE University. Known as the Garden City, it has a growing tech community supported by government initiatives and university research programs.',
            descriptionAr: 'العين رابع أكبر مدينة في الإمارات ومركز تعليمي مهم يضم جامعة الإمارات. تُعرف بمدينة الحدائق ولديها مجتمع تقني متنامٍ تدعمه المبادرات الحكومية وبرامج البحث الجامعية.',
          },
          {
            slug: 'masdar-city',
            name: 'Masdar City',
            nameAr: 'مدينة مصدر',
            population: 1300,
            lat: 24.4281,
            lng: 54.6165,
            wikipedia: 'https://en.wikipedia.org/wiki/Masdar_City',
            description:
              'Masdar City is a pioneering sustainable urban development and clean technology cluster in Abu Dhabi. It hosts the Masdar Institute of Science and Technology, numerous green-tech startups, and the headquarters of the International Renewable Energy Agency (IRENA).',
            descriptionAr: 'مدينة مصدر مشروع حضري مستدام رائد ومجمع للتكنولوجيا النظيفة في أبوظبي. تستضيف معهد مصدر للعلوم والتكنولوجيا والعديد من الشركات الناشئة في التقنية الخضراء ومقر الوكالة الدولية للطاقة المتجددة (IRENA).',
            freeZones: [
              { name: 'Masdar City Free Zone', slug: 'masdar', focus: 'Clean technology, renewable energy, IoT, and sustainability startups' },
            ],
            majorEmployers: ['IRENA', 'Siemens', 'Masdar (Abu Dhabi Future Energy)', 'Khalifa University'],
            hiringFacts: [
              'Headquarters of the International Renewable Energy Agency (IRENA)',
              'Focus on cleantech, IoT sensors, and smart city applications',
              'Integrated with Khalifa University for research collaborations',
            ],
          },
        ],
      },
      {
        slug: 'sharjah',
        name: 'Sharjah',
        nameAr: 'الشارقة',
        cities: [
          {
            slug: 'sharjah',
            name: 'Sharjah',
            nameAr: 'الشارقة',
            population: 1400000,
            lat: 25.3463,
            lng: 55.4209,
            wikipedia: 'https://en.wikipedia.org/wiki/Sharjah_(city)',
            description:
              'Sharjah is the cultural capital of the UAE and the third-largest emirate by population. With the Sharjah Research Technology and Innovation Park (SRTIP) and multiple free zones, it offers cost-effective options for tech companies looking to hire developers near Dubai.',
            descriptionAr: 'الشارقة العاصمة الثقافية للإمارات وثالث أكبر إمارة من حيث عدد السكان. مع وجود مجمع الشارقة للبحوث والتكنولوجيا والابتكار والعديد من المناطق الحرة، توفر خيارات فعّالة من حيث التكلفة لشركات التقنية الباحثة عن توظيف مطورين بالقرب من دبي.',
            image: '/images/locations/sharjah.svg',
            imageAlt: 'Sharjah UAE - cultural capital and tech hub for hiring developers',
            freeZones: [
              { name: 'Sharjah Media City (Shams)', slug: 'shams', focus: 'Media, digital marketing, IT, and e-commerce companies — 100% foreign ownership' },
              { name: 'Sharjah Research Technology and Innovation Park (SRTI Park)', slug: 'srti-park', focus: 'Research-driven tech companies, university collaborations, and deep-tech startups' },
              { name: 'Hamriyah Free Zone', slug: 'hamriyah', focus: 'Manufacturing, logistics, and industrial tech companies' },
              { name: 'Sharjah Airport International Free Zone (SAIF Zone)', slug: 'saif', focus: 'Trade, logistics, and commercial enterprises' },
            ],
            techHubs: [
              { name: 'SRTI Park', description: 'Sharjah\'s research and technology park — partnerships with University of Sharjah and American University of Sharjah' },
              { name: 'Sharjah University City', description: 'Cluster of 16+ universities producing thousands of IT and engineering graduates annually' },
              { name: 'Shams Free Zone', description: 'One of the most affordable free zones in the UAE — popular with remote-first tech companies' },
            ],
            majorEmployers: ['Bee\'ah', 'Sharjah Electricity and Water Authority', 'Air Arabia', 'University of Sharjah', 'American University of Sharjah'],
            hiringFacts: [
              '30-40% lower office rents compared to Dubai',
              '20-minute drive to Dubai Internet City',
              'University City produces thousands of STEM graduates annually',
              'Shams free zone offers licenses from AED 5,750/year — among the cheapest in the UAE',
              'No personal or corporate income tax',
            ],
          },
        ],
      },
      {
        slug: 'ajman',
        name: 'Ajman',
        nameAr: 'عجمان',
        cities: [
          {
            slug: 'ajman',
            name: 'Ajman',
            nameAr: 'عجمان',
            population: 540000,
            lat: 25.4052,
            lng: 55.5136,
            wikipedia: 'https://en.wikipedia.org/wiki/Ajman',
            description:
              'Ajman is the smallest emirate by area but has a rapidly growing economy with competitive free zone offerings. The Ajman Free Zone attracts SMEs and tech startups with affordable licensing, making it a cost-effective base for development teams.',
            descriptionAr: 'عجمان أصغر إمارة مساحةً لكنها تتمتع باقتصاد سريع النمو مع عروض مناطق حرة تنافسية. تجذب المنطقة الحرة بعجمان الشركات الصغيرة والمتوسطة والشركات التقنية الناشئة بتراخيص بأسعار معقولة.',
            image: '/images/locations/ajman.svg',
            imageAlt: 'Ajman UAE - affordable free zone for tech startups and SMEs',
            freeZones: [
              { name: 'Ajman Free Zone (AFZ)', slug: 'afz', focus: 'SMEs, tech startups, and e-commerce — one of the most affordable free zones in the UAE' },
              { name: 'Ajman Media City Free Zone', slug: 'ajman-media', focus: 'Digital media, IT services, and freelancer licenses' },
            ],
            hiringFacts: [
              'Among the most affordable business setup costs in the UAE',
              '30 minutes from Dubai and Sharjah tech hubs',
              'Ajman Free Zone offers flexi-desk licenses for remote teams',
              'Growing digital infrastructure and smart city initiatives',
            ],
          },
        ],
      },
      {
        slug: 'ras-al-khaimah',
        name: 'Ras Al Khaimah',
        nameAr: 'رأس الخيمة',
        cities: [
          {
            slug: 'ras-al-khaimah',
            name: 'Ras Al Khaimah',
            nameAr: 'رأس الخيمة',
            population: 400000,
            lat: 25.7895,
            lng: 55.9432,
            wikipedia: 'https://en.wikipedia.org/wiki/Ras_Al_Khaimah',
            description:
              'Ras Al Khaimah (RAK) is the northernmost emirate and one of the fastest-growing in the UAE. The RAK Digital Assets Oasis and free zone ecosystem attract blockchain companies, fintech firms, and software developers seeking a business-friendly environment.',
            descriptionAr: 'رأس الخيمة الإمارة الأشمالية ومن أسرع الإمارات نمواً. تجذب واحة رأس الخيمة للأصول الرقمية ومنظومة المناطق الحرة شركات البلوك تشين والتكنولوجيا المالية والمطورين الباحثين عن بيئة أعمال مواتية.',
            image: '/images/locations/ras-al-khaimah.svg',
            imageAlt: 'Ras Al Khaimah UAE - RAKEZ free zone and growing tech scene',
            freeZones: [
              { name: 'RAK Economic Zone (RAKEZ)', slug: 'rakez', focus: 'Multi-sector free zone — 15,000+ companies from 100+ countries, very competitive pricing' },
              { name: 'RAK Digital Assets Oasis (RAK DAO)', slug: 'rak-dao', focus: 'World\'s first free zone dedicated to digital and virtual asset companies, blockchain, and Web3' },
              { name: 'RAK International Corporate Centre (RAK ICC)', slug: 'rak-icc', focus: 'International business and holding companies' },
            ],
            hiringFacts: [
              'RAKEZ is one of the fastest-growing free zones in the UAE',
              'RAK DAO is the world\'s first dedicated Web3 and digital assets free zone',
              'Up to 50% cheaper than Dubai for business setup and operations',
              'Growing number of blockchain and crypto companies establishing here',
              'Home to Jebel Jais — the UAE\'s highest peak and eco-tourism destination',
            ],
          },
        ],
      },
      {
        slug: 'fujairah',
        name: 'Fujairah',
        nameAr: 'الفجيرة',
        cities: [
          {
            slug: 'fujairah',
            name: 'Fujairah',
            nameAr: 'الفجيرة',
            population: 225000,
            lat: 25.1288,
            lng: 56.3265,
            wikipedia: 'https://en.wikipedia.org/wiki/Fujairah',
            description:
              'Fujairah is the only emirate situated entirely on the Gulf of Oman coast. Its Creative City free zone focuses on media, technology, and creative industries, offering affordable business setup for IT companies and freelance developers.',
            descriptionAr: 'الفجيرة الإمارة الوحيدة الواقعة بالكامل على ساحل خليج عُمان. تركز منطقتها الحرة Creative City على الإعلام والتكنولوجيا والصناعات الإبداعية، وتقدم تأسيس أعمال بأسعار معقولة لشركات تقنية المعلومات والمطورين المستقلين.',
            image: '/images/locations/fujairah.svg',
            imageAlt: 'Fujairah UAE - Creative City free zone for tech and media companies',
            freeZones: [
              { name: 'Fujairah Creative City', slug: 'fujairah-creative', focus: 'Media, technology, creative industries, and IT consulting — popular with freelance developers' },
              { name: 'Fujairah Free Zone (FFZ)', slug: 'ffz', focus: 'Trade, logistics, and light manufacturing companies' },
            ],
            hiringFacts: [
              'Creative City offers some of the UAE\'s most affordable freelance licenses',
              'Strategic location on the Gulf of Oman — outside the Strait of Hormuz',
              'Growing data center infrastructure due to submarine cable landing points',
            ],
          },
        ],
      },
      {
        slug: 'umm-al-quwain',
        name: 'Umm Al Quwain',
        nameAr: 'أم القيوين',
        cities: [
          {
            slug: 'umm-al-quwain',
            name: 'Umm Al Quwain',
            nameAr: 'أم القيوين',
            population: 80000,
            lat: 25.5647,
            lng: 55.5554,
            wikipedia: 'https://en.wikipedia.org/wiki/Umm_Al_Quwain',
            description:
              'Umm Al Quwain is a tranquil emirate offering one of the most affordable business environments in the UAE. Its free trade zone provides cost-effective licensing for small tech companies and remote development teams.',
            descriptionAr: 'أم القيوين إمارة هادئة تقدم واحدة من أكثر بيئات الأعمال معقولية في الإمارات. توفر منطقتها الحرة للتجارة تراخيص فعّالة من حيث التكلفة لشركات التقنية الصغيرة وفرق التطوير عن بعد.',
            image: '/images/locations/umm-al-quwain.svg',
            imageAlt: 'Umm Al Quwain UAE - affordable emerging digital hub',
            freeZones: [
              { name: 'Umm Al Quwain Free Trade Zone (UAQFTZ)', slug: 'uaqftz', focus: 'Trade, small businesses, and cost-effective company formation' },
            ],
            hiringFacts: [
              'Most affordable emirate for business setup in the UAE',
              '45 minutes from Dubai — accessible for day trips',
              'Quiet environment suited for focused development work',
              'Growing government investment in digital infrastructure',
            ],
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // SAUDI ARABIA — 3 Key Regions
  // ==========================================================================
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    nameAr: 'المملكة العربية السعودية',
    demonym: 'Saudi',
    metaDescription:
      'Hire pre-vetted remote developers in Saudi Arabia. Top 2% talent in Riyadh, Jeddah, and Dammam for Vision 2030 projects. Get matched in 48 hours.',
    metaDescriptionAr: 'وظّف أفضل المطورين عن بعد في السعودية. أفضل 2% من المواهب في الرياض وجدة والدمام لمشاريع رؤية 2030. مطابقة خلال 48 ساعة.',
    regions: [
      {
        slug: 'riyadh-region',
        name: 'Riyadh Region',
        nameAr: 'منطقة الرياض',
        cities: [
          {
            slug: 'riyadh',
            name: 'Riyadh',
            nameAr: 'الرياض',
            population: 7600000,
            lat: 24.7136,
            lng: 46.6753,
            wikipedia: 'https://en.wikipedia.org/wiki/Riyadh',
            description:
              'Riyadh is the capital of Saudi Arabia and the largest city in the Gulf region. With Vision 2030 driving massive digital transformation, the city is home to NEOM Tech, Saudi Data and AI Authority (SDAIA), and a booming startup ecosystem fueled by billions in government tech investment.',
            descriptionAr: 'الرياض عاصمة المملكة العربية السعودية وأكبر مدينة في منطقة الخليج. مع رؤية 2030 التي تقود تحولاً رقمياً ضخماً، تضم المدينة NEOM Tech وهيئة البيانات والذكاء الاصطناعي السعودية (سدايا) ومنظومة شركات ناشئة مزدهرة مدعومة بمليارات الاستثمارات الحكومية في التقنية.',
          },
        ],
      },
      {
        slug: 'makkah-region',
        name: 'Makkah Region',
        nameAr: 'منطقة مكة المكرمة',
        cities: [
          {
            slug: 'jeddah',
            name: 'Jeddah',
            nameAr: 'جدة',
            population: 4600000,
            lat: 21.4858,
            lng: 39.1925,
            wikipedia: 'https://en.wikipedia.org/wiki/Jeddah',
            description:
              'Jeddah is Saudi Arabia\'s commercial capital and the gateway to Makkah, with a thriving business district along the Corniche. The city\'s tech scene is growing rapidly with co-working spaces, accelerators, and a strong demand for full-stack developers and mobile engineers.',
            descriptionAr: 'جدة العاصمة التجارية للمملكة العربية السعودية وبوابة مكة المكرمة. ينمو المشهد التقني في المدينة بسرعة مع مساحات العمل المشتركة والمسرّعات والطلب القوي على مطوري Full-Stack ومهندسي تطبيقات الجوال.',
          },
        ],
      },
      {
        slug: 'eastern-province',
        name: 'Eastern Province',
        nameAr: 'المنطقة الشرقية',
        cities: [
          {
            slug: 'dammam',
            name: 'Dammam',
            nameAr: 'الدمام',
            population: 1200000,
            lat: 26.4207,
            lng: 50.0888,
            wikipedia: 'https://en.wikipedia.org/wiki/Dammam',
            description:
              'Dammam is the capital of the Eastern Province and the center of Saudi Arabia\'s oil industry. The city has a growing tech sector driven by Saudi Aramco\'s digital initiatives, KFUPM research, and increasing demand for IoT, AI, and enterprise software developers.',
            descriptionAr: 'الدمام عاصمة المنطقة الشرقية ومركز صناعة النفط في السعودية. تشهد المدينة نمواً في القطاع التقني مدفوعاً بمبادرات أرامكو الرقمية وأبحاث جامعة الملك فهد للبترول والمعادن والطلب المتزايد على مطوري IoT والذكاء الاصطناعي وبرمجيات المؤسسات.',
          },
          {
            slug: 'neom',
            name: 'NEOM',
            nameAr: 'نيوم',
            population: 0,
            lat: 27.95,
            lng: 35.5833,
            wikipedia: 'https://en.wikipedia.org/wiki/Neom',
            description:
              'NEOM is Saudi Arabia\'s $500 billion megacity project on the Red Sea coast, envisioned as a global hub for innovation and technology. The project demands thousands of developers across AI, robotics, smart city infrastructure, and sustainable tech.',
            descriptionAr: 'نيوم مشروع المدينة السعودية الضخم بقيمة 500 مليار دولار على ساحل البحر الأحمر، يُتصوَّر كمركز عالمي للابتكار والتكنولوجيا. يتطلب المشروع آلاف المطورين في مجالات الذكاء الاصطناعي والروبوتات والبنية التحتية للمدن الذكية والتقنية المستدامة.',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // QATAR
  // ==========================================================================
  {
    slug: 'qatar',
    name: 'Qatar',
    nameAr: 'قطر',
    demonym: 'Qatari',
    metaDescription:
      'Hire pre-vetted remote developers in Qatar. Top 2% talent in Doha for Qatar National Vision 2030 projects. Get matched in 48 hours, $0 upfront.',
    metaDescriptionAr: 'وظّف أفضل المطورين عن بعد في قطر. أفضل 2% من المواهب في الدوحة لمشاريع رؤية قطر الوطنية 2030. مطابقة خلال 48 ساعة، $0 مقدماً.',
    regions: [
      {
        slug: 'qatar',
        name: 'Qatar',
        nameAr: 'قطر',
        cities: [
          {
            slug: 'doha',
            name: 'Doha',
            nameAr: 'الدوحة',
            population: 2382000,
            lat: 25.2854,
            lng: 51.531,
            wikipedia: 'https://en.wikipedia.org/wiki/Doha',
            description:
              'Doha is the capital and economic hub of Qatar, home to Qatar Science & Technology Park, Qatar Financial Centre, and a rapidly growing tech ecosystem. The city\'s National Vision 2030 and post-FIFA 2022 digital infrastructure create strong demand for software developers.',
            descriptionAr: 'الدوحة عاصمة قطر ومركزها الاقتصادي، موطن واحة قطر للعلوم والتكنولوجيا ومركز قطر المالي ومنظومة تقنية سريعة النمو. تخلق رؤية قطر الوطنية 2030 والبنية التحتية الرقمية بعد كأس العالم 2022 طلباً قوياً على مطوري البرمجيات.',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // BAHRAIN
  // ==========================================================================
  {
    slug: 'bahrain',
    name: 'Bahrain',
    nameAr: 'البحرين',
    demonym: 'Bahraini',
    metaDescription:
      'Hire pre-vetted remote developers in Bahrain. Top 2% talent in Manama\'s fintech ecosystem. Get matched in 48 hours, $0 until you hire.',
    metaDescriptionAr: 'وظّف أفضل المطورين عن بعد في البحرين. أفضل 2% من المواهب في منظومة التكنولوجيا المالية بالمنامة. مطابقة خلال 48 ساعة، $0 حتى التوظيف.',
    regions: [
      {
        slug: 'bahrain',
        name: 'Bahrain',
        nameAr: 'البحرين',
        cities: [
          {
            slug: 'manama',
            name: 'Manama',
            nameAr: 'المنامة',
            population: 411000,
            lat: 26.2235,
            lng: 50.5876,
            wikipedia: 'https://en.wikipedia.org/wiki/Manama',
            description:
              'Manama is the capital of Bahrain and a leading fintech hub in the Middle East. Home to Bahrain FinTech Bay, the Central Bank of Bahrain\'s regulatory sandbox, and AWS\'s regional infrastructure, the city attracts developers specializing in financial technology and cloud services.',
            descriptionAr: 'المنامة عاصمة البحرين ومركز رائد للتكنولوجيا المالية في الشرق الأوسط. تستضيف Bahrain FinTech Bay والبيئة التنظيمية التجريبية لمصرف البحرين المركزي والبنية التحتية الإقليمية لـ AWS، مما يجذب المطورين المتخصصين في التقنية المالية والخدمات السحابية.',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // OMAN
  // ==========================================================================
  {
    slug: 'oman',
    name: 'Oman',
    nameAr: 'عُمان',
    demonym: 'Omani',
    metaDescription:
      'Hire pre-vetted remote developers in Oman. Top 2% talent in Muscat for Oman Vision 2040 digital projects. Get matched in 48 hours.',
    metaDescriptionAr: 'وظّف أفضل المطورين عن بعد في عُمان. أفضل 2% من المواهب في مسقط لمشاريع رؤية عُمان 2040 الرقمية. مطابقة خلال 48 ساعة.',
    regions: [
      {
        slug: 'oman',
        name: 'Oman',
        nameAr: 'عُمان',
        cities: [
          {
            slug: 'muscat',
            name: 'Muscat',
            nameAr: 'مسقط',
            population: 1421000,
            lat: 23.588,
            lng: 58.3829,
            wikipedia: 'https://en.wikipedia.org/wiki/Muscat',
            description:
              'Muscat is the capital of the Sultanate of Oman and a steadily growing tech market. The Knowledge Oasis Muscat technology park, Oman Vision 2040 digital initiatives, and a focus on cybersecurity and e-government create increasing demand for skilled developers.',
            descriptionAr: 'مسقط عاصمة سلطنة عُمان وسوق تقني في نمو مطّرد. يخلق مجمع واحة المعرفة مسقط التقني ومبادرات رؤية عُمان 2040 الرقمية والتركيز على الأمن السيبراني والحكومة الإلكترونية طلباً متزايداً على المطورين المهرة.',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // KUWAIT
  // ==========================================================================
  {
    slug: 'kuwait',
    name: 'Kuwait',
    nameAr: 'الكويت',
    demonym: 'Kuwaiti',
    metaDescription:
      'Hire pre-vetted remote developers in Kuwait. Top 2% talent in Kuwait City for New Kuwait 2035 digital projects. Get matched in 48 hours.',
    metaDescriptionAr: 'وظّف أفضل المطورين عن بعد في الكويت. أفضل 2% من المواهب في مدينة الكويت لمشاريع كويت جديدة 2035 الرقمية. مطابقة خلال 48 ساعة.',
    regions: [
      {
        slug: 'kuwait',
        name: 'Kuwait',
        nameAr: 'الكويت',
        cities: [
          {
            slug: 'kuwait-city',
            name: 'Kuwait City',
            nameAr: 'مدينة الكويت',
            population: 3000000,
            lat: 29.3759,
            lng: 47.9774,
            wikipedia: 'https://en.wikipedia.org/wiki/Kuwait_City',
            description:
              'Kuwait City is the capital and economic center of Kuwait, driving the country\'s New Kuwait 2035 vision. The city has a growing fintech and e-commerce sector, with government digital transformation projects fueling demand for full-stack, mobile, and cloud developers.',
            descriptionAr: 'مدينة الكويت عاصمة الكويت ومركزها الاقتصادي، تقود رؤية كويت جديدة 2035. تشهد المدينة نمواً في قطاعي التكنولوجيا المالية والتجارة الإلكترونية، مع مشاريع التحول الرقمي الحكومية التي تغذي الطلب على مطوري Full-Stack والجوال والحوسبة السحابية.',
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/**
 * Returns an array of all country slugs.
 */
export function getAllCountrySlugs(): string[] {
  return countries.map((c) => c.slug);
}

/**
 * Returns every { country, region } path combination.
 */
export function getAllRegionPaths(): { country: string; region: string }[] {
  return countries.flatMap((c) =>
    c.regions.map((r) => ({ country: c.slug, region: r.slug })),
  );
}

/**
 * Returns every { country, region, city } path combination.
 */
export function getAllCityPaths(): {
  country: string;
  region: string;
  city: string;
}[] {
  return countries.flatMap((c) =>
    c.regions.flatMap((r) =>
      r.cities.map((ci) => ({
        country: c.slug,
        region: r.slug,
        city: ci.slug,
      })),
    ),
  );
}

/**
 * Find a country by its slug.
 */
export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

/**
 * Find a region and its parent country by path segments.
 */
export function getRegionByPath(
  countrySlug: string,
  regionSlug: string,
): { country: Country; region: Region } | undefined {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return undefined;
  const region = country.regions.find((r) => r.slug === regionSlug);
  if (!region) return undefined;
  return { country, region };
}

/**
 * Find a city and its parent region and country by path segments.
 */
export function getCityByPath(
  countrySlug: string,
  regionSlug: string,
  citySlug: string,
): { country: Country; region: Region; city: City } | undefined {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return undefined;
  const region = country.regions.find((r) => r.slug === regionSlug);
  if (!region) return undefined;
  const city = region.cities.find((ci) => ci.slug === citySlug);
  if (!city) return undefined;
  return { country, region, city };
}

/**
 * Get the top N cities by population for a given country.
 */
export function getTopCitiesForCountry(
  countrySlug: string,
  limit: number,
): City[] {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return [];
  const allCities = country.regions.flatMap((r) => r.cities);
  return allCities.sort((a, b) => b.population - a.population).slice(0, limit);
}

/**
 * Get nearby regions (neighbours by index position) for a given region.
 * Returns up to `limit` other regions from the same country, excluding the
 * specified region itself.
 */
export function getNearbyRegions(
  countrySlug: string,
  regionSlug: string,
  limit: number,
): Region[] {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return [];
  const regionIndex = country.regions.findIndex((r) => r.slug === regionSlug);
  if (regionIndex === -1) return [];

  // Collect regions near the current index, alternating before/after
  const nearby: Region[] = [];
  let offset = 1;
  while (nearby.length < limit && offset < country.regions.length) {
    const after = regionIndex + offset;
    if (after < country.regions.length) {
      nearby.push(country.regions[after]);
    }
    if (nearby.length >= limit) break;
    const before = regionIndex - offset;
    if (before >= 0) {
      nearby.push(country.regions[before]);
    }
    offset++;
  }
  return nearby.slice(0, limit);
}

/**
 * Get city data with an embedded OpenStreetMap URL for the city location.
 */
export function getCityData(countrySlug: string, regionSlug: string, citySlug: string) {
  const result = getCityByPath(countrySlug, regionSlug, citySlug);
  if (!result) return undefined;
  return {
    ...result,
    mapUrl: `https://www.openstreetmap.org/export/embed.html?bbox=${result.city.lng - 0.05}%2C${result.city.lat - 0.03}%2C${result.city.lng + 0.05}%2C${result.city.lat + 0.03}&layer=mapnik&marker=${result.city.lat}%2C${result.city.lng}`,
  };
}
