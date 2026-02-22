interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white py-4">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <ol className="flex items-center flex-wrap text-sm">
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
  );
}
