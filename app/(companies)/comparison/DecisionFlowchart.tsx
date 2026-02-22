'use client';

import { useLeadFormModal } from '@/app/(companies)/components/LeadFormModalProvider';

function ArrowDown() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-0.5 h-6 bg-gray-300" />
      <svg className="w-4 h-4 text-gray-300 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

interface DecisionFlowchartProps {
  competitorName?: string;
}

export default function DecisionFlowchart({ competitorName = 'Alternative' }: DecisionFlowchartProps) {
  const { openModal } = useLeadFormModal();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-12">
        <div className="text-center mb-10">
          <span className="inline-block bg-[rgb(23,162,69)]/10 text-[rgb(23,162,69)] text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Decision Guide
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Which platform is right for you?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow the decision tree to find out whether HireDeveloper.ae or {competitorName} is a better fit for your requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Decision Node 1 */}
          <div className="flex justify-center">
            <div className="bg-white border-2 border-[rgb(0,159,255)] rounded-xl px-6 py-4 shadow-sm max-w-md text-center">
              <p className="text-sm font-bold text-gray-900">
                Do you need fast hiring?
              </p>
              <p className="text-xs text-gray-500 mt-1">Within 1 week?</p>
            </div>
          </div>

          {/* Branch 1 */}
          <div className="flex justify-center mt-2">
            <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
              {/* YES path */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-5 bg-gray-300" />
                <span className="text-xs font-bold text-[rgb(23,162,69)] bg-[rgb(23,162,69)]/10 px-2 py-0.5 rounded">YES</span>
                <div className="w-0.5 h-5 bg-gray-300" />
                <div className="bg-[rgb(23,162,69)]/5 border-2 border-[rgb(23,162,69)] rounded-xl px-5 py-4 shadow-sm text-center w-full">
                  <p className="text-sm font-bold text-[rgb(23,162,69)]">
                    🇦🇪 HireDeveloper.ae
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Matching in just 48 hours — faster than any alternative
                  </p>
                </div>
              </div>

              {/* NO path */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-5 bg-gray-300" />
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">NO</span>
                <div className="w-0.5 h-5 bg-gray-300" />
                <div className="bg-white border-2 border-[rgb(0,159,255)] rounded-xl px-5 py-4 shadow-sm text-center w-full">
                  <p className="text-sm font-bold text-gray-900">
                    Is UAE / Gulf focus important?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Sunday-Thursday, GMT+4 timezone?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Branch 2 */}
          <div className="flex justify-center mt-2">
            <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
              <div />
              <div className="grid grid-cols-2 gap-4">
                {/* YES path */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-5 bg-gray-300" />
                  <span className="text-xs font-bold text-[rgb(23,162,69)] bg-[rgb(23,162,69)]/10 px-2 py-0.5 rounded">YES</span>
                  <div className="w-0.5 h-5 bg-gray-300" />
                  <div className="bg-[rgb(23,162,69)]/5 border-2 border-[rgb(23,162,69)] rounded-lg px-3 py-3 shadow-sm text-center">
                    <p className="text-xs font-bold text-[rgb(23,162,69)]">
                      🇦🇪 HireDeveloper.ae
                    </p>
                    <p className="text-[10px] text-gray-600 mt-1">
                      Built for UAE businesses
                    </p>
                  </div>
                </div>

                {/* NO path */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-5 bg-gray-300" />
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">NO</span>
                  <div className="w-0.5 h-5 bg-gray-300" />
                  <div className="bg-white border-2 border-[rgb(0,159,255)] rounded-lg px-3 py-3 shadow-sm text-center">
                    <p className="text-xs font-bold text-gray-900">
                      Do you need pre-vetting?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branch 3 */}
          <div className="flex justify-center mt-2">
            <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
              <div />
              <div className="grid grid-cols-2 gap-4">
                <div />
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-gray-300" />
                    <span className="text-[10px] font-bold text-[rgb(23,162,69)] bg-[rgb(23,162,69)]/10 px-1.5 py-0.5 rounded">YES</span>
                    <div className="w-0.5 h-5 bg-gray-300" />
                    <div className="bg-[rgb(23,162,69)]/5 border-2 border-[rgb(23,162,69)] rounded-lg px-2 py-2 shadow-sm text-center">
                      <p className="text-[10px] font-bold text-[rgb(23,162,69)]">
                        HireDeveloper.ae
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-gray-300" />
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">NO</span>
                    <div className="w-0.5 h-5 bg-gray-300" />
                    <div className="bg-gray-50 border-2 border-gray-300 rounded-lg px-2 py-2 shadow-sm text-center">
                      <p className="text-[10px] font-bold text-gray-500">
                        {competitorName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Speed</h4>
              <p className="text-xs text-gray-500">Matching in 48h, not weeks</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Quality</h4>
              <p className="text-xs text-gray-500">Top 2% pre-vetted developers</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">UAE Focus</h4>
              <p className="text-xs text-gray-500">Built for Dubai & Gulf businesses</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={openModal}
              className="px-8 py-3 text-base font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
