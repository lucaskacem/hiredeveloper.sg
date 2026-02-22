export default function Specializations() {
    const roles = [
        "Affiliate marketers", "Brand strategists", "Community managers", "Content marketers",
        "Copywriters", "Digital marketers", "Email marketers", "Growth hackers",
        "Inbound marketers", "Influencer marketers", "Marketing analysts", "Marketing consultants",
        "Marketing managers", "Performance marketers", "PPC specialists", "PR specialists",
        "Product marketers", "SEM specialists", "SEO specialists", "Social media marketers"
    ];

    return (
        <section className="bg-white py-20">
            <div className="max-w-[1280px] mx-auto px-12">
                <h2 className="text-[32px] font-bold text-[#0b152b] mb-4 text-center">
                    Top remote marketers are just a few clicks away
                </h2>
                <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    HireDeveloper.ae offers pre-vetted remote marketers ready to excel in their field. Choose the role you need to get started.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {roles.map((role) => (
                        <a
                            key={role}
                            href="/hire-marketers"
                            className="block p-4 border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-[#22a447] hover:text-[#22a447] hover:bg-[#f8fdf9] transition-all text-center"
                        >
                            {role}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
