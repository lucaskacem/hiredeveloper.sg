interface RelatedLink {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  title: string;
  links: RelatedLink[];
}

export default function RelatedLinks({ title, links }: RelatedLinksProps) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3 bg-white rounded-lg text-sm text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md transition-all border border-gray-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
