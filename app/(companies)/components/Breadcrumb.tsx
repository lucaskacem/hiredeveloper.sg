interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://hiredeveloper.sg${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-white py-3 md:py-4 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <ol className="flex items-center flex-wrap text-xs md:text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-gray-400">/</span>
                  )}
                  {isLast ? (
                    <span className="text-gray-900 font-medium">
                      {item.label}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-[rgb(0,159,255)]"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
