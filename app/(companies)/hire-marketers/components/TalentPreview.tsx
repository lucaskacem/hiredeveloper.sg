export default function TalentPreview() {
    const talents = [
        {
            initials: 'SK',
            name: 'Shane K.',
            role: 'Digital Marketer',
            location: 'United States',
            time: 'UTC-5',
            bio: 'Experienced digital marketer specializing in SEO and PPC campaigns, with a proven track record of driving growth for SaaS startups.',
            tags: ['SEO', 'PPC', 'Content Marketing'],
            gradient: 'bg-gradient-to-br from-blue-500 to-blue-600'
        },
        {
            initials: 'SJ',
            name: 'Sarah J.',
            role: 'Content Strategist',
            location: 'Canada',
            time: 'UTC-5',
            bio: 'Content strategist with a background in tech and SaaS. Expert at creating engaging content that drives conversions and brand awareness.',
            tags: ['Content Strategy', 'Copywriting', 'Social Media'],
            gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600'
        },
        {
            initials: 'MD',
            name: 'Michael D.',
            role: 'Growth Marketing Manager',
            location: 'United Kingdom',
            time: 'UTC+0',
            bio: 'Data-driven growth marketer with over 7 years of experience. I help businesses scale through paid acquisition and conversion optimization.',
            tags: ['Growth Marketing', 'Facebook Ads', 'Google Ads'],
            gradient: 'bg-gradient-to-br from-purple-500 to-purple-600'
        }
    ];

    return (
        <section className="bg-[#f7f9fc] py-20">
            <div className="max-w-[1280px] mx-auto px-12">
                <h2 className="text-[28px] font-bold text-[#0b152b] mb-8">
                    1,684 remote digital marketers and experts available:
                </h2>

                <div className="space-y-6">
                    {talents.map((talent, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
                            {/* Avatar Area */}
                            <div className="shrink-0 flex flex-col items-center gap-3 md:w-48">
                                <div className={`w-24 h-24 rounded-full ${talent.gradient} flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-md`}>
                                    {talent.initials}
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d8f0df] text-[#1c6e33] text-xs font-bold uppercase tracking-wider rounded-full">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Vetted
                                    </div>
                                </div>
                            </div>

                            {/* Info Area */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0b152b]">{talent.name}</h3>
                                        <p className="text-[#009fff] font-medium">{talent.role}</p>
                                    </div>
                                    <div className="text-sm text-gray-500 font-medium flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {talent.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {talent.time}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {talent.bio}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {talent.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Area */}
                            <div className="shrink-0 flex flex-col justify-center h-full pt-2">
                                <button className="whitespace-nowrap px-6 py-2.5 bg-white border border-[#22a447] text-[#22a447] font-semibold rounded-md hover:bg-[#22a447] hover:text-white transition-colors">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
