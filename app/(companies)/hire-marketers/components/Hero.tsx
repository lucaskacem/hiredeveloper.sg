'use client';

import { useLeadFormModal } from '../../components/LeadFormModalProvider';

export default function HeroSection() {
    const { openModal } = useLeadFormModal();
    const trustMetrics = ['10,000+ placements', '4.9/5 rating', '97% satisfaction', '48h matching'];

    return (
        <section className="bg-[#0b152b] py-10 md:py-16 lg:py-20 overflow-hidden relative">
            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <div className="text-white">
                        <h1 className="text-[52px] leading-[1.1] font-bold tracking-tight mb-8">
                            Hire the <span className="relative inline-block">
                                Top 2%
                                <svg className="absolute w-full h-[8px] bottom-[-2px] left-0 text-[#22a447]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 5 10 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span> of <br />
                            <span className="text-[#96d0ff]">Freelance Marketing Experts</span>
                        </h1>

                        <p className="text-lg text-white/80 leading-relaxed max-w-[540px] mb-8">
                            HireDeveloper.sg is the easiest way to find and hire vetted remote marketers for your team in Singapore.
                        </p>

                        <ul className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                            {['Freelance Contractors', 'Full-Time Roles', 'Global Teams'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-[15px] font-medium text-white/90">
                                    <svg className="w-5 h-5 text-[#fdbd10]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mb-12">
                            <button
                                onClick={openModal}
                                className="inline-block w-full sm:w-auto px-8 py-4 bg-[#22a447] hover:bg-[#1e913f] text-white text-[17px] font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-[0_4px_14px_rgba(34,164,71,0.4)] text-center"
                            >
                                Get Matched in 48h
                            </button>
                            <p className="mt-3 text-sm text-white/60 font-medium">
                                $0 until you hire
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-8">
                                {trustMetrics.map((metric) => (
                                    <span
                                        key={metric}
                                        className="text-white/50 text-sm font-semibold tracking-wide"
                                    >
                                        {metric}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats Card */}
                    <div className="relative">
                        <div className="bg-white rounded-lg p-8 shadow-2xl relative z-10 text-gray-900 border border-gray-100">
                            <h3 className="text-xl font-bold mb-8 text-center text-gray-900">
                                Remote hiring made easy
                            </h3>

                            <div className="flex justify-between gap-4 mb-10 border-b border-gray-100 pb-8">
                                <div className="text-center flex-1">
                                    <div className="text-[#22a447] text-2xl font-bold mb-1">Up to 75%</div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">faster hiring</div>
                                </div>
                                <div className="w-px bg-gray-100"></div>
                                <div className="text-center flex-1">
                                    <div className="text-[#22a447] text-2xl font-bold mb-1">Up to 58%</div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">cost savings</div>
                                </div>
                                <div className="w-px bg-gray-100"></div>
                                <div className="text-center flex-1">
                                    <div className="text-[#22a447] text-2xl font-bold mb-1">800+</div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">hires made</div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 relative">
                                {/* Quote icon */}
                                <div className="absolute top-[-14px] left-6 bg-[#22a447] rounded-full p-1.5 shadow-md">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166C6.46432 18 6.0166 18.4477 6.0166 19V21H5.0166Z" />
                                    </svg>
                                </div>

                                <p className="text-gray-700 italic font-medium mb-4 leading-relaxed pt-2">
                                    &ldquo;HireDeveloper.sg found us a superstar who was a perfect culture fit.&rdquo;
                                </p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">Markus Gruber</div>
                                        <div className="text-gray-500 text-xs">CEO at TechVenture</div>
                                    </div>
                                    <div className="flex gap-1 text-[#fdbd10]">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
