export default function Testimonials() {
    return (
        <section className="bg-white py-24 border-t border-gray-100">
            <div className="max-w-[1280px] mx-auto px-12">
                <h2 className="text-[36px] font-bold text-[#0b152b] mb-16 text-center">
                    Why clients hire digital marketers with HireDeveloper.ae
                </h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Quote Mark Decoration */}
                    <div className="absolute -top-10 -left-10 text-gray-100 select-none">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M30 20C19 20 10 29 10 40V70H40V40H20C20 34.5 24.5 30 30 30V20ZM70 20C59 20 50 29 50 40V70H80V40H60C60 34.5 64.5 30 70 30V20Z" />
                        </svg>
                    </div>

                    <div className="bg-[#f7f9fc] rounded-2xl p-12 text-center relative z-10">
                        <blockquote className="text-2xl md:text-3xl font-medium text-[#0b152b] leading-normal mb-8">
                            "The quality of talent on HireDeveloper.ae is unmatched. We found a <span className="text-[#009fff] font-bold">superstar</span> in days who completely transformed our paid acquisition strategy."
                        </blockquote>

                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md mb-4">
                                <span className="text-white font-bold text-lg">AC</span>
                            </div>
                            <div className="font-bold text-[#0b152b] text-lg">Alex Chen</div>
                            <div className="text-gray-500">CMO at GrowthTech</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
