export default function WhyChooseArc() {
    const features = [
        {
            title: "Vorgeprüfte Talente",
            description: "Unser strenger Prüfungsprozess stellt sicher, dass Sie nur erstklassige Kandidaten sehen.",
            icon: (
                <svg className="w-8 h-8 text-[#22a447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Globaler Talentpool",
            description: "Zugang zu versteckten Talenten aus der ganzen Welt.",
            icon: (
                <svg className="w-8 h-8 text-[#22a447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "4x schneller einstellen",
            description: "Die meisten Unternehmen stellen in weniger als 72 Stunden ein.",
            icon: (
                <svg className="w-8 h-8 text-[#22a447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Keine Sprachbarriere",
            description: "Alle Kandidaten sind kommunikationsstark und bereit für die Zusammenarbeit.",
            icon: (
                <svg className="w-8 h-8 text-[#22a447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        },
        {
            title: "Keine versteckten Kosten",
            description: "Transparente Stundensätze, passend für jedes Budget.",
            icon: (
                <svg className="w-8 h-8 text-[#22a447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Wir erledigen alles",
            description: "Wir verwalten Rechnungen, Zahlungen und Papierkram für Sie.",
            icon: (
                <svg className="w-8 h-8 text-[#22a447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-[#f7f9fc] py-24">
            <div className="max-w-[1280px] mx-auto px-12">
                <div className="text-center mb-16">
                    <h2 className="text-[36px] font-bold text-[#0b152b] mb-4">
                        Warum Programmier-Anfang für Marketing-Experten wählen
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <div className="mb-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0b152b] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3.5 bg-[#22a447] hover:bg-[#1e913f] text-white text-lg font-bold rounded-lg transition-colors shadow-lg shadow-[#22a447]/20">
                        Marketer einstellen
                    </button>
                    <p className="mt-3 text-sm text-gray-500 font-medium">
                        Risikofreie Probezeit für jede Einstellung
                    </p>
                </div>
            </div>
        </section>
    );
}
