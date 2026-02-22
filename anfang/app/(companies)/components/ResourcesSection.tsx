interface Article {
  title: string;
  image: string;
  url: string;
}

interface ResourcesSectionProps {
  heading: string;
  subheading: string;
  articles: Article[];
}

export default function ResourcesSection({ heading, subheading, articles }: ResourcesSectionProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden flex items-center justify-center p-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full max-w-[200px] h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[rgb(0,159,255)] transition-colors leading-tight">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/employer-blog/how-to-find-developers"
            className="inline-block px-8 py-3 text-base font-semibold text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            Weitere Einstellungs-Guides ansehen
          </a>
        </div>
      </div>
    </section>
  );
}

