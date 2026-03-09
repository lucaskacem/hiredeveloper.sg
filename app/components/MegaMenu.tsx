'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  categories,
  megaMenuColumns,
  designerItems,
  marketerItems,
  marketerMenuColumns,
  productManagerItems,
  projectManagerItems,
  assistantItems,
  locationsData,
  type CategoryKey,
  type MegaMenuItem,
} from '@/app/data/mega-menu';
import { useLanguage } from '../i18n/LanguageContext';

export default function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    setPortalTarget(document.getElementById('mega-panel-root'));
  }, []);

  const openMenu = useCallback((key: CategoryKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveCategory(key);
  }, []);

  const scheduleClose = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const renderFlatGrid = (items: MegaMenuItem[], baseHref: string) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
      {items.map((item) => (
        <a
          key={item.slug}
          href={baseHref}
          className="text-[13px] text-gray-300 hover:text-white transition-colors block"
        >
          {item.label}
        </a>
      ))}
      <a
        href={baseHref}
        className="text-[13px] text-[rgb(0,159,255)] hover:text-white transition-colors block font-medium"
      >
        {t('megaMenu.viewAll')} &rarr;
      </a>
    </div>
  );

  const renderDevelopersGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
      {megaMenuColumns.map((column) => (
        <div key={column.title}>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            {column.title}
          </h3>
          <ul className="space-y-2">
            {column.items.map((item) => (
              <li key={item.slug}>
                <a
                  href={`/hire-developers/${item.slug}`}
                  className="text-[13px] text-gray-300 hover:text-white transition-colors block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderMarketersGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {marketerMenuColumns.map((column) => (
        <div key={column.title}>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            {column.title}
          </h3>
          <ul className="space-y-2">
            {column.items.map((item) => (
              <li key={item.slug}>
                <a
                  href={`/hire-marketers/${item.slug}`}
                  className="text-[13px] text-gray-300 hover:text-white transition-colors block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderLocations = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {locationsData.map((country) => (
        <div key={country.slug}>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            <a
              href={`/locations/${country.slug}`}
              className="hover:text-white transition-colors"
            >
              {country.name}
            </a>
          </h3>
          <ul className="space-y-2">
            {country.cities.map((city) => (
              <li key={city.slug}>
                <a
                  href={`/locations/${country.slug}/${city.regionSlug}/${city.slug}`}
                  className="text-[13px] text-gray-300 hover:text-white transition-colors block"
                >
                  {city.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderPanelContent = () => {
    switch (activeCategory) {
      case 'developers':
        return renderDevelopersGrid();
      case 'designers':
        return renderFlatGrid(designerItems, '/hire-designers');
      case 'marketers':
        return renderMarketersGrid();
      case 'product-managers':
        return renderFlatGrid(productManagerItems, '/hire-product-managers');
      case 'project-managers':
        return renderFlatGrid(projectManagerItems, '/hire-project-managers');
      case 'assistants':
        return renderFlatGrid(assistantItems, '/hire-assistants');
      case 'locations':
        return renderLocations();
      default:
        return null;
    }
  };

  const panel = activeCategory !== null && portalTarget
    ? createPortal(
        <div
          className="bg-[#1a1a2e] shadow-2xl border-t border-gray-700"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="max-w-[1440px] mx-auto px-6 py-8">
            {renderPanelContent()}
          </div>
        </div>,
        portalTarget,
      )
    : null;

  return (
    <>
      {/* Secondary nav links */}
      {categories.map((cat) => (
        <a
          key={cat.key}
          href={cat.href}
          className={`text-[13px] md:text-[14px] whitespace-nowrap transition-colors py-3 block shrink-0 ${
            activeCategory === cat.key
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
          }`}
          onMouseEnter={() => openMenu(cat.key)}
          onMouseLeave={scheduleClose}
        >
          {cat.label}
        </a>
      ))}

      {/* Panel renders via portal into #mega-panel-root in Header */}
      {panel}
    </>
  );
}
