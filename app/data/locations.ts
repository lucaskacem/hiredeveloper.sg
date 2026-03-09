// -----------------------------------------------------------------------------
// locations.ts — Comprehensive location data for Singapore
// Used for programmatic SEO pages on the HireDeveloper.sg hiring platform
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
  population: number;
  lat: number;
  lng: number;
  wikipedia: string;
  description: string;
  /** Optional rich data for Singapore areas */
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
  cities: City[];
}

export interface Country {
  slug: string;
  name: string;
  demonym: string;
  metaDescription: string;
  regions: Region[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const countries: Country[] = [
  // ==========================================================================
  // SINGAPORE — 5 Planning Regions
  // ==========================================================================
  {
    slug: 'singapore',
    name: 'Singapore',
    demonym: 'Singaporean',
    metaDescription:
      'Hire pre-vetted remote developers across Singapore. Top 2% talent from Marina Bay to Jurong, matched in 48 hours. Save 40-60% vs local hiring.',
    regions: [
      // ----------------------------------------------------------------------
      // CENTRAL REGION
      // ----------------------------------------------------------------------
      {
        slug: 'central-region',
        name: 'Central Region',
            cities: [
          {
            slug: 'marina-bay',
            name: 'Marina Bay',
                    population: 15000,
            lat: 1.2814,
            lng: 103.8585,
            wikipedia: 'https://en.wikipedia.org/wiki/Marina_Bay,_Singapore',
            description:
              'Marina Bay is Singapore\'s premier financial district, home to Marina Bay Financial Centre, Marina Bay Sands, and the headquarters of major global banks. As the centrepiece of Singapore\'s CBD, it hosts the highest concentration of fintech firms, multinational tech offices, and financial institutions in Southeast Asia.',
            image: '/images/singapore/marina-bay.svg',
            imageAlt: 'Marina Bay Singapore skyline - hire developers in Singapore\'s financial district',
            freeZones: [
              { name: 'Marina Bay Financial Centre', slug: 'mbfc', focus: 'Financial services, fintech, and global banking headquarters' },
              { name: 'One Raffles Quay', slug: 'one-raffles-quay', focus: 'Grade A office space for banking, tech, and professional services' },
            ],
            techHubs: [
              { name: 'Marina Bay Financial Centre', description: 'Three-tower office complex housing DBS, Standard Chartered, Microsoft, and leading fintech firms' },
              { name: 'Asia Square', description: 'Premium Grade A office towers hosting Google\'s APAC headquarters and major tech companies' },
              { name: 'One Raffles Quay', description: 'Iconic waterfront office complex home to JP Morgan, Barclays, and tech-forward financial firms' },
            ],
            majorEmployers: ['DBS Bank', 'Standard Chartered', 'Microsoft', 'Google (APAC HQ)', 'JP Morgan', 'Barclays', 'ByteDance', 'Stripe'],
            hiringFacts: [
              'Marina Bay is Singapore\'s #1 financial district with 200+ financial institutions',
              'Home to Google\'s Asia-Pacific headquarters at Asia Square',
              'Average software engineer salary in the CBD: SGD 84,000-130,000/year',
              'English is the primary business language across all industries',
              'GMT+8 timezone bridges Asia, Australia, and European business hours',
              'Singapore ranks #1 in Asia for ease of doing business (World Bank)',
              '0% capital gains tax for businesses',
              'Smart Nation initiative drives demand for developers across all sectors',
            ],
          },
          {
            slug: 'raffles-place',
            name: 'Raffles Place',
                    population: 5000,
            lat: 1.2840,
            lng: 103.8517,
            wikipedia: 'https://en.wikipedia.org/wiki/Raffles_Place',
            description:
              'Raffles Place is the historic heart of Singapore\'s Central Business District and the traditional core of the city\'s financial sector. It houses the headquarters of Singapore\'s largest banks — OCBC, UOB — and global investment banks including Goldman Sachs and JPMorgan.',
            freeZones: [
              { name: 'Raffles Place Financial Hub', slug: 'raffles-place-hub', focus: 'Core CBD for banking, financial services, and enterprise technology' },
            ],
            techHubs: [
              { name: 'One Raffles Place', description: 'Landmark office tower in the CBD core, home to financial institutions and enterprise tech firms' },
              { name: 'Republic Plaza', description: 'One of Singapore\'s tallest buildings housing banks, law firms, and tech consultancies' },
            ],
            majorEmployers: ['OCBC Bank', 'UOB', 'Goldman Sachs', 'JPMorgan', 'Credit Suisse', 'Citibank', 'Deutsche Bank', 'McKinsey & Company'],
            hiringFacts: [
              'Raffles Place is the traditional financial heart of Singapore since the 1800s',
              'Home to SGX (Singapore Exchange) — Southeast Asia\'s largest stock exchange',
              'High demand for fintech, quantitative developers, and enterprise software engineers',
              'Directly connected by MRT to all major residential and business hubs',
            ],
          },
          {
            slug: 'orchard',
            name: 'Orchard',
                    population: 10000,
            lat: 1.3048,
            lng: 103.8318,
            wikipedia: 'https://en.wikipedia.org/wiki/Orchard_Road',
            description:
              'Orchard is Singapore\'s iconic shopping and lifestyle belt, but it is also a significant business hub. Home to numerous co-working spaces, creative agencies, adtech firms, and the regional offices of consumer tech companies, Orchard blends retail innovation with tech entrepreneurship.',
            techHubs: [
              { name: 'Shaw Centre & Ngee Ann City', description: 'Mixed-use towers housing co-working spaces, adtech companies, and creative agencies' },
              { name: 'Orchard Central', description: 'Hub for digital marketing agencies, UX studios, and consumer tech startups' },
            ],
            majorEmployers: ['WeWork Orchard', 'JustCo', 'Various creative and adtech agencies', 'Retail tech startups'],
            hiringFacts: [
              'Growing cluster of adtech, retail tech, and consumer app companies',
              'Multiple co-working spaces catering to startups and freelancers',
              'Strong presence of digital marketing and UX/UI design agencies',
            ],
          },
          {
            slug: 'tanjong-pagar',
            name: 'Tanjong Pagar',
                    population: 20000,
            lat: 1.2764,
            lng: 103.8465,
            wikipedia: 'https://en.wikipedia.org/wiki/Tanjong_Pagar',
            description:
              'Tanjong Pagar is a CBD extension district home to Tanjong Pagar Centre — Singapore\'s tallest building — and a growing cluster of tech companies, startups, and venture capital firms. Its blend of heritage shophouses and modern skyscrapers makes it a vibrant base for tech talent.',
            image: '/images/singapore/cbd.svg',
            imageAlt: 'Tanjong Pagar Singapore - CBD extension with tech companies and startups',
            techHubs: [
              { name: 'Tanjong Pagar Centre', description: 'Singapore\'s tallest building (290m) housing WeWork, tech firms, and the Guoco Tower co-working hub' },
              { name: 'AXA Tower & Mapletree Business City', description: 'Large-format offices near the CBD hosting enterprise tech and SaaS companies' },
            ],
            majorEmployers: ['Tencent', 'Sea Group (regional)', 'Visa', 'WeWork', 'Various VC-backed startups'],
            hiringFacts: [
              'Tanjong Pagar Centre (Guoco Tower) is Singapore\'s tallest building at 290 metres',
              'Growing hub for fintech startups and venture capital firms',
              'Heritage shophouses converted into trendy startup offices and co-working spaces',
              'Excellent connectivity — Tanjong Pagar MRT station is on the East-West Line',
            ],
          },
          {
            slug: 'bugis',
            name: 'Bugis',
                    population: 15000,
            lat: 1.3009,
            lng: 103.8558,
            wikipedia: 'https://en.wikipedia.org/wiki/Bugis,_Singapore',
            description:
              'Bugis is a cultural and commercial district in the heart of Singapore, rapidly emerging as a tech hub. The area is home to the government\'s technology offices, multiple co-working spaces, and a vibrant community of developers and digital creators drawn by its central location and lively atmosphere.',
            techHubs: [
              { name: 'Bugis Junction & Bugis+', description: 'Mixed-use complexes with co-working spaces and tech company offices' },
              { name: 'GovTech Hive', description: 'Singapore Government Technology Agency\'s innovation space for digital government services' },
            ],
            majorEmployers: ['GovTech Singapore', 'Various tech startups', 'Digital agencies', 'Co-working operators'],
            hiringFacts: [
              'Home to GovTech Singapore — the agency driving Smart Nation digital services',
              'Central location with two MRT lines (East-West and Downtown)',
              'Growing community of indie developers, digital creators, and startup founders',
              'Affordable office space compared to Marina Bay and Raffles Place',
            ],
          },
          {
            slug: 'one-north',
            name: 'one-north',
                    population: 10000,
            lat: 1.2996,
            lng: 103.7873,
            wikipedia: 'https://en.wikipedia.org/wiki/One-north',
            description:
              'one-north is Singapore\'s premier science, technology, and innovation district. Spanning 200 hectares, it houses Fusionopolis (ICT and media), Biopolis (biomedical sciences), LaunchPad (startups), and Block71 — one of the world\'s most tightly packed startup ecosystems. It is the epicentre of deep tech and R&D hiring in Singapore.',
            image: '/images/singapore/one-north.svg',
            imageAlt: 'one-north Singapore - Fusionopolis and Biopolis tech and science park',
            freeZones: [
              { name: 'one-north Innovation District', slug: 'one-north-district', focus: 'Science, technology, and R&D — home to Fusionopolis, Biopolis, and 400+ companies' },
            ],
            techHubs: [
              { name: 'Fusionopolis', description: 'Singapore\'s flagship ICT and media R&D hub — home to A*STAR research institutes and leading tech companies' },
              { name: 'Biopolis', description: 'World-class biomedical research hub with 2,000+ scientists across seven research institutes' },
              { name: 'LaunchPad @ one-north', description: 'JTC\'s startup incubator with 800+ startups and entrepreneurs, affordable co-working and office space' },
              { name: 'Block71', description: 'Legendary startup hub dubbed the "world\'s most tightly packed entrepreneurial ecosystem" — 250+ startups in a single block' },
            ],
            majorEmployers: ['A*STAR', 'Grab', 'Shopee (Sea Group)', 'Razer', 'Acronis', 'Garena', 'Ubisoft Singapore', 'Procter & Gamble Innovation Centre'],
            hiringFacts: [
              'one-north houses 400+ companies and 50,000+ workers across science and tech',
              'Block71 is home to 250+ startups — one of the world\'s densest startup ecosystems',
              'A*STAR operates 11 research institutes focused on AI, cybersecurity, and data science',
              'Grab and Shopee — Southeast Asia\'s two largest tech unicorns — are headquartered here',
              'Average deep tech engineer salary: SGD 90,000-150,000/year',
              'Fusionopolis houses the Infocomm Media Development Authority (IMDA)',
            ],
          },
          {
            slug: 'buona-vista',
            name: 'Buona Vista',
                    population: 15000,
            lat: 1.3073,
            lng: 103.7905,
            wikipedia: 'https://en.wikipedia.org/wiki/Buona_Vista,_Singapore',
            description:
              'Buona Vista is adjacent to one-north and serves as the gateway to Singapore\'s science and technology corridor. The area benefits from proximity to the National University of Singapore (NUS) and is home to many tech workers, research professionals, and startup founders.',
            techHubs: [
              { name: 'The Star Vista & Rochester Park', description: 'Commercial cluster near one-north with restaurants, offices, and co-working spaces popular with tech workers' },
              { name: 'NUS Enterprise', description: 'National University of Singapore\'s entrepreneurship centre supporting deep-tech startups and university spin-offs' },
            ],
            majorEmployers: ['National University of Singapore', 'NUS Enterprise spin-offs', 'Various one-north companies', 'Research institutes'],
            hiringFacts: [
              'Adjacent to one-north — Singapore\'s largest science and tech park',
              'Close to NUS — ranked #1 university in Asia (QS Rankings)',
              'Buona Vista MRT interchange connects the Circle and East-West Lines',
              'Popular residential area for tech professionals working at one-north, NUS, and NTU',
            ],
          },
        ],
      },

      // ----------------------------------------------------------------------
      // EAST REGION
      // ----------------------------------------------------------------------
      {
        slug: 'east-region',
        name: 'East Region',
            cities: [
          {
            slug: 'tampines',
            name: 'Tampines',
                    population: 260000,
            lat: 1.3496,
            lng: 103.9568,
            wikipedia: 'https://en.wikipedia.org/wiki/Tampines',
            description:
              'Tampines is one of Singapore\'s largest and most established residential towns and a designated regional centre in the east. It is a major employment hub with Tampines Concourse, numerous corporate offices, and a thriving community of tech professionals living in the area.',
            techHubs: [
              { name: 'Tampines Concourse', description: 'Business hub in the east with corporate offices, government agencies, and IT companies' },
              { name: 'Our Tampines Hub', description: 'Singapore\'s largest integrated community hub — serves as a model for Smart Nation initiatives' },
            ],
            majorEmployers: ['NTUC Enterprise', 'CPIB', 'Various SME tech companies', 'Retail and logistics tech firms'],
            hiringFacts: [
              'Tampines is a designated URA regional centre — the largest in east Singapore',
              'Home to many tech professionals who commute to Changi Business Park and the CBD',
              'Our Tampines Hub showcases Singapore\'s Smart Nation community technology',
              'Well-served by the East-West and Downtown MRT Lines',
            ],
          },
          {
            slug: 'changi-business-park',
            name: 'Changi Business Park',
                    population: 5000,
            lat: 1.3340,
            lng: 103.9670,
            wikipedia: 'https://en.wikipedia.org/wiki/Changi_Business_Park',
            description:
              'Changi Business Park (CBP) is a major technology and business hub in eastern Singapore, home to the regional offices of global IT companies including IBM, HP, Infosys, and CGI. Its proximity to Changi Airport and excellent connectivity make it a preferred location for tech operations centres and software development teams.',
            image: '/images/singapore/changi.svg',
            imageAlt: 'Changi Business Park Singapore - tech hub with IBM, HP, and Infosys offices',
            freeZones: [
              { name: 'Changi Free Trade Zone', slug: 'changi-ftz', focus: 'Logistics, air cargo, and trade-related technology companies near Changi Airport' },
            ],
            techHubs: [
              { name: 'Changi Business Park', description: 'Major business park with 70+ buildings hosting global tech companies, IT services firms, and shared services centres' },
              { name: 'Singapore Changi Airport (T5 Development)', description: 'World\'s best airport driving aviation tech, logistics AI, and smart infrastructure projects' },
            ],
            majorEmployers: ['IBM', 'HP', 'Infosys', 'CGI', 'Changi Airport Group', 'DXC Technology', 'Honeywell', 'Micron Technology'],
            hiringFacts: [
              'Changi Business Park houses 70+ buildings with 85,000+ workers',
              'IBM, HP, Infosys, and CGI operate major development centres here',
              'Adjacent to Changi Airport — the world\'s best airport (Skytrax)',
              'Strong demand for enterprise Java, cloud, and DevOps engineers',
              'Changi Free Trade Zone supports logistics tech and supply chain innovation',
            ],
          },
          {
            slug: 'paya-lebar',
            name: 'Paya Lebar',
                    population: 30000,
            lat: 1.3181,
            lng: 103.8912,
            wikipedia: 'https://en.wikipedia.org/wiki/Paya_Lebar',
            description:
              'Paya Lebar is rapidly transforming into a vibrant commercial hub with the opening of Paya Lebar Quarter (PLQ) — a mixed-use development that has attracted tech companies, media firms, and startups. Singtel\'s corporate headquarters and SPH Media are based here, making it a growing centre for telecoms and media technology.',
            techHubs: [
              { name: 'Paya Lebar Quarter (PLQ)', description: 'Three-tower commercial development housing Singtel HQ, co-working spaces, and tech companies' },
              { name: 'Singapore Post Centre', description: 'Business complex with logistics tech companies and e-commerce operations' },
            ],
            majorEmployers: ['Singtel', 'SPH Media', 'Grab (operations)', 'Various tech startups', 'E-commerce companies'],
            hiringFacts: [
              'Paya Lebar Quarter (PLQ) opened in 2019 and has rapidly attracted tech tenants',
              'Singtel — Southeast Asia\'s largest telecoms company — is headquartered here',
              'MRT interchange connects East-West and Circle Lines for excellent connectivity',
              'Growing cluster of media tech, adtech, and e-commerce companies',
            ],
          },
          {
            slug: 'pasir-ris',
            name: 'Pasir Ris',
                    population: 150000,
            lat: 1.3721,
            lng: 103.9474,
            wikipedia: 'https://en.wikipedia.org/wiki/Pasir_Ris',
            description:
              'Pasir Ris is a large residential town in northeastern Singapore, popular with families and tech professionals working in Changi Business Park and Tampines. The upcoming Cross Island MRT Line will significantly improve connectivity, further boosting its appeal as a home base for developers.',
            hiringFacts: [
              'Popular residential area for tech professionals working at Changi Business Park',
              'Close proximity to Changi Airport and industrial zones',
              'Cross Island MRT Line (opening mid-2030s) will enhance connectivity',
              'Affordable housing compared to central Singapore, attracting young tech workers',
            ],
          },
          {
            slug: 'bedok',
            name: 'Bedok',
                    population: 290000,
            lat: 1.3236,
            lng: 103.9273,
            wikipedia: 'https://en.wikipedia.org/wiki/Bedok',
            description:
              'Bedok is one of Singapore\'s largest and most mature residential towns, home to nearly 290,000 residents. Its excellent transport links via the East-West and Downtown MRT Lines make it a convenient residential hub for developers working across east and central Singapore.',
            hiringFacts: [
              'One of Singapore\'s largest residential towns with 290,000+ residents',
              'Served by both East-West and Downtown MRT Lines',
              'Many tech professionals live in Bedok and commute to Changi Business Park or the CBD',
              'Bedok Town Centre is a thriving commercial hub with growing office space',
            ],
          },
        ],
      },

      // ----------------------------------------------------------------------
      // NORTH REGION
      // ----------------------------------------------------------------------
      {
        slug: 'north-region',
        name: 'North Region',
            cities: [
          {
            slug: 'woodlands',
            name: 'Woodlands',
                    population: 250000,
            lat: 1.4382,
            lng: 103.7891,
            wikipedia: 'https://en.wikipedia.org/wiki/Woodlands,_Singapore',
            description:
              'Woodlands is a major regional centre in northern Singapore, undergoing significant transformation with the Woodlands Regional Centre masterplan. Home to Republic Polytechnic and growing commercial developments, it is being positioned as a key employment hub to reduce reliance on the CBD.',
            techHubs: [
              { name: 'Woodlands Regional Centre', description: 'Emerging business hub planned as a northern gateway with new commercial and tech developments' },
              { name: 'Republic Polytechnic', description: 'Polytechnic producing IT, engineering, and digital media graduates for Singapore\'s tech workforce' },
            ],
            majorEmployers: ['Republic Polytechnic', 'SMRT Corporation', 'Various manufacturing and logistics tech companies'],
            hiringFacts: [
              'Woodlands Regional Centre is being developed as a major northern employment hub',
              'Home to Republic Polytechnic producing thousands of IT graduates annually',
              'Thomson-East Coast MRT Line provides direct connection to the CBD',
              'Connected to Johor Bahru, Malaysia via the Causeway — cross-border tech talent pool',
            ],
          },
          {
            slug: 'sembawang',
            name: 'Sembawang',
                    population: 100000,
            lat: 1.4491,
            lng: 103.8185,
            wikipedia: 'https://en.wikipedia.org/wiki/Sembawang',
            description:
              'Sembawang is a residential town in northern Singapore with a mix of public and private housing. The area has a growing community of tech workers attracted by its quieter environment and improving connectivity via the North-South MRT Line.',
            hiringFacts: [
              'Quieter residential town popular with families in the tech sector',
              'Connected to the CBD via the North-South MRT Line',
              'Close to the former Sembawang Shipyard and defence tech clusters',
              'More affordable housing options compared to central Singapore',
            ],
          },
          {
            slug: 'yishun',
            name: 'Yishun',
                    population: 220000,
            lat: 1.4304,
            lng: 103.8354,
            wikipedia: 'https://en.wikipedia.org/wiki/Yishun',
            description:
              'Yishun is one of Singapore\'s largest residential towns in the north, with over 220,000 residents. Khoo Teck Puat Hospital and Northpoint City serve as anchors, while the area is home to a growing number of tech professionals attracted by affordable housing and good MRT connectivity.',
            hiringFacts: [
              'Over 220,000 residents — one of the most populated towns in the north',
              'Northpoint City is the largest mall in northern Singapore',
              'North-South MRT Line provides direct access to the CBD',
              'Active grassroots tech meetup and coding community',
            ],
          },
        ],
      },

      // ----------------------------------------------------------------------
      // NORTH-EAST REGION
      // ----------------------------------------------------------------------
      {
        slug: 'north-east-region',
        name: 'North-East Region',
            cities: [
          {
            slug: 'sengkang',
            name: 'Sengkang',
                    population: 240000,
            lat: 1.3917,
            lng: 103.8953,
            wikipedia: 'https://en.wikipedia.org/wiki/Sengkang',
            description:
              'Sengkang is a rapidly growing new town in northeastern Singapore with a young population and strong community of tech professionals. The Sengkang-Punggol corridor is being developed as a tech-forward residential area, with the nearby Punggol Digital District expected to create thousands of tech jobs.',
            hiringFacts: [
              'Young and growing population — average age lower than Singapore\'s national average',
              'Close to the upcoming Punggol Digital District (opening 2024-2025)',
              'Connected via the North-East MRT Line and Sengkang LRT',
              'Popular with young tech professionals and families due to newer, affordable housing',
            ],
          },
          {
            slug: 'punggol',
            name: 'Punggol',
                    population: 200000,
            lat: 1.4051,
            lng: 103.9024,
            wikipedia: 'https://en.wikipedia.org/wiki/Punggol',
            description:
              'Punggol is Singapore\'s designated "Digital District" and one of the most exciting tech developments in Southeast Asia. The Punggol Digital District (PDD) will house the Singapore Institute of Technology campus, JTC business park, and a cluster of cybersecurity, AI, and digital technology companies. It represents Singapore\'s vision for a future-ready tech ecosystem.',
            image: '/images/singapore/sentosa.svg',
            imageAlt: 'Punggol Digital District Singapore - future tech hub for AI and cybersecurity',
            freeZones: [
              { name: 'Punggol Digital District', slug: 'pdd', focus: 'Cybersecurity, AI, digital technology, and Smart Nation projects — integrated with SIT campus' },
            ],
            techHubs: [
              { name: 'Punggol Digital District (PDD)', description: 'Singapore\'s first enterprise district with an integrated university campus (SIT), JTC business park, and community facilities' },
              { name: 'Singapore Institute of Technology (SIT)', description: 'Applied university producing industry-ready graduates in cybersecurity, software engineering, and data science' },
            ],
            majorEmployers: ['Singapore Institute of Technology', 'JTC Corporation', 'Cybersecurity companies (upcoming PDD tenants)', 'AI startups'],
            hiringFacts: [
              'Punggol Digital District (PDD) is Singapore\'s flagship enterprise district for cybersecurity and tech',
              'SIT will relocate its campus to PDD, creating a live-learn-work-play tech ecosystem',
              'JTC is developing 100,000 sqm of business space for tech companies in PDD',
              'Strong government investment in making Punggol a testbed for Smart Nation solutions',
              'Expected to create over 28,000 jobs when fully developed',
            ],
          },
          {
            slug: 'hougang',
            name: 'Hougang',
                    population: 230000,
            lat: 1.3612,
            lng: 103.8863,
            wikipedia: 'https://en.wikipedia.org/wiki/Hougang',
            description:
              'Hougang is one of the oldest and most established residential towns in northeastern Singapore, with a mature community of over 230,000 residents. The area is well-connected to the CBD via the North-East MRT Line and is a popular residential choice for tech professionals working across central and eastern Singapore.',
            hiringFacts: [
              'One of northeastern Singapore\'s most established towns with 230,000+ residents',
              'Direct MRT access to the CBD via the North-East Line',
              'Affordable alternative to central living for tech workers',
              'Active community with several tech meetup groups and coders\' communities',
            ],
          },
          {
            slug: 'serangoon',
            name: 'Serangoon',
                    population: 120000,
            lat: 1.3500,
            lng: 103.8718,
            wikipedia: 'https://en.wikipedia.org/wiki/Serangoon',
            description:
              'Serangoon is a vibrant residential and commercial district anchored by NEX — one of the largest suburban malls in Singapore. Its MRT interchange (North-East and Circle Lines) makes it a highly accessible residential hub for tech professionals working across different parts of Singapore.',
            techHubs: [
              { name: 'NEX Mall & Serangoon Central', description: 'Commercial hub with growing office space and co-working facilities for tech professionals' },
            ],
            majorEmployers: ['Various SME tech companies', 'Co-working operators', 'Retail tech firms'],
            hiringFacts: [
              'Serangoon MRT is an interchange station connecting Circle and North-East Lines',
              'NEX is one of the largest suburban malls — a commercial anchor for the northeast',
              'Growing office and co-working space for tech SMEs and remote workers',
              'Popular residential area for tech professionals due to excellent connectivity',
            ],
          },
        ],
      },

      // ----------------------------------------------------------------------
      // WEST REGION
      // ----------------------------------------------------------------------
      {
        slug: 'west-region',
        name: 'West Region',
            cities: [
          {
            slug: 'jurong-east',
            name: 'Jurong East',
                    population: 85000,
            lat: 1.3329,
            lng: 103.7436,
            wikipedia: 'https://en.wikipedia.org/wiki/Jurong_East',
            description:
              'Jurong East is being developed into Singapore\'s second CBD through the Jurong Lake District (JLD) masterplan — the largest business district outside the city centre. Home to JTC Corporation headquarters and the upcoming Jurong Innovation District, it is set to become a major tech and innovation hub in western Singapore.',
            image: '/images/singapore/jurong.svg',
            imageAlt: 'Jurong East Singapore - Jurong Lake District future second CBD',
            freeZones: [
              { name: 'Jurong Innovation District (JID)', slug: 'jid', focus: 'Advanced manufacturing, robotics, Industry 4.0, and engineering innovation' },
              { name: 'Jurong Port Free Trade Zone', slug: 'jurong-port-ftz', focus: 'Maritime logistics, port technology, and supply chain innovation' },
            ],
            techHubs: [
              { name: 'Jurong Innovation District', description: 'JTC\'s integrated innovation district for advanced manufacturing, AI, and robotics — adjacent to NTU' },
              { name: 'JTC LaunchPad @ Jurong', description: 'Startup and scaleup space in western Singapore for Industry 4.0 and deep tech companies' },
              { name: 'International Business Park', description: 'Established business park near Jurong East with IT companies, shared services centres, and tech firms' },
            ],
            majorEmployers: ['JTC Corporation', 'PSA International', 'Ng Teng Fong General Hospital', 'Various Industry 4.0 companies'],
            hiringFacts: [
              'Jurong Lake District will be Singapore\'s largest business district outside the CBD',
              'Jurong Innovation District is being developed adjacent to NTU for industry-university collaboration',
              'International Business Park houses hundreds of tech and IT services companies',
              'High-Speed Rail terminal (future) will connect to Kuala Lumpur',
              'Strong demand for robotics, IoT, and advanced manufacturing engineers',
            ],
          },
          {
            slug: 'jurong-west',
            name: 'Jurong West',
                    population: 300000,
            lat: 1.3404,
            lng: 103.7090,
            wikipedia: 'https://en.wikipedia.org/wiki/Jurong_West',
            description:
              'Jurong West is the most populated town in western Singapore with over 300,000 residents. It combines residential living with proximity to Jurong Industrial Estate and the Tuas industrial zone, making it a residential base for engineers and tech professionals working in advanced manufacturing, logistics, and industrial technology.',
            freeZones: [
              { name: 'Tuas Mega Port (upcoming)', slug: 'tuas-megaport', focus: 'World\'s largest fully automated port — maritime tech, automation, and logistics AI' },
            ],
            hiringFacts: [
              'Most populated town in western Singapore with 300,000+ residents',
              'Close to Jurong Industrial Estate — Singapore\'s largest industrial zone',
              'Tuas Mega Port (opening in phases) will drive demand for automation and logistics tech',
              'Affordable housing popular with tech professionals working in the west',
            ],
          },
          {
            slug: 'clementi',
            name: 'Clementi',
                    population: 80000,
            lat: 1.3162,
            lng: 103.7649,
            wikipedia: 'https://en.wikipedia.org/wiki/Clementi,_Singapore',
            description:
              'Clementi is a mature residential town adjacent to the National University of Singapore (NUS) — Asia\'s top-ranked university. The area has a strong academic and research ecosystem, making it a natural residential hub for researchers, data scientists, and tech professionals connected to the university and one-north.',
            techHubs: [
              { name: 'National University of Singapore (NUS)', description: 'Asia\'s #1 university (QS Rankings) with world-class computer science, AI, and engineering programs' },
              { name: 'NUS Enterprise / BLOCK71', description: 'University-linked startup ecosystem producing dozens of deep-tech spin-offs annually' },
            ],
            majorEmployers: ['National University of Singapore', 'NUS spin-off companies', 'Research institutes'],
            hiringFacts: [
              'Adjacent to NUS — ranked #1 in Asia for computer science and engineering',
              'NUS produces 2,000+ computing and engineering graduates annually',
              'Strong ecosystem for AI, cybersecurity, and fintech research commercialisation',
              'East-West MRT Line provides direct connectivity to one-north and the CBD',
            ],
          },
          {
            slug: 'bukit-batok',
            name: 'Bukit Batok',
                    population: 140000,
            lat: 1.3590,
            lng: 103.7637,
            wikipedia: 'https://en.wikipedia.org/wiki/Bukit_Batok',
            description:
              'Bukit Batok is a well-established residential town in western Singapore with a growing commercial sector. Its location near Jurong East and good connectivity make it an affordable residential base for tech professionals working across the western employment hubs.',
            hiringFacts: [
              'Well-connected to Jurong East (future second CBD) via one MRT stop',
              'Bukit Batok MRT on the North-South Line provides direct CBD access',
              'Affordable residential option popular with tech workers in the west',
              'West Mall and Bukit Batok Central provide local commercial and co-working options',
            ],
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
