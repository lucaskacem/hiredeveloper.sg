import OpenModalButton from './OpenModalButton';

interface InlineCTABannerProps {
  headline: string;
  subtext: string;
}

export default function InlineCTABanner({ headline, subtext }: InlineCTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">{headline}</h3>
            <p className="text-blue-100 text-sm">{subtext}</p>
          </div>
          <OpenModalButton className="shrink-0 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm">
            Find Talent Now
          </OpenModalButton>
        </div>
      </div>
    </section>
  );
}
