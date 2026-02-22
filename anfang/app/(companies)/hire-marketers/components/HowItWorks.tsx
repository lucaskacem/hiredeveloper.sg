export default function HowItWorks() {
    const steps = [
        {
            step: 1,
            title: "Share your requirements",
            description: "Tell us about the role you need to fill and your ideal candidate."
        },
        {
            step: 2,
            title: "Start interviewing",
            description: "Meet pre-vetted candidates hand-picked for your needs."
        },
        {
            step: 3,
            title: "Make a hire",
            description: "Onboard your new team member and start working together."
        }
    ];

    return (
        <section className="bg-white py-24">
            <div className="max-w-[1280px] mx-auto px-12">
                <h2 className="text-[36px] font-bold text-[#0b152b] text-center mb-16">
                    It’s easy to hire with Arc
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-between relative gap-8">
                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-gray-100 -z-10"></div>

                    {steps.map((item, index) => (
                        <div key={item.step} className="flex flex-col items-center text-center flex-1 max-w-[320px] mx-auto">
                            <div className="w-12 h-12 rounded-full bg-[#0b152b] text-white text-xl font-bold flex items-center justify-center mb-6 shadow-md relative z-10">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-[#0b152b] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
