export default function Footer() {
  const topTalent = {
    title: 'TOP TALENTE',
    links: [
      { name: 'Softwareentwickler', url: '/hire-developers/software-development' },
      { name: 'Web-Entwickler', url: '/hire-developers/web-development' },
      { name: 'Mobile-App-Entwickler', url: '/hire-developers/mobile-app-development' },
      { name: 'Frontend-Entwickler', url: '/hire-developers/front-end' },
      { name: 'Backend-Entwickler', url: '/hire-developers/back-end' },
      { name: 'Full-Stack-Entwickler', url: '/hire-developers/full-stack' },
      { name: 'DevOps-Entwickler', url: '/hire-developers/devops' },
      { name: 'iOS-Entwickler', url: '/hire-developers/ios' },
      { name: 'KI-Entwickler', url: '/hire-developers/ai' },
      { name: 'PHP-Entwickler', url: '/hire-developers/php' },
      { name: 'Python-Entwickler', url: '/hire-developers/python' },
      { name: 'React-Entwickler', url: '/hire-developers/reactjs' },
      { name: 'Angular-Entwickler', url: '/hire-developers/front-end' },
      { name: 'Node.js-Entwickler', url: '/hire-developers/nodejs' },
      { name: 'Produktdesigner', url: '/hire-designers' },
      { name: 'Webdesigner', url: '/hire-designers' },
      { name: 'UI-Designer', url: '/hire-designers' },
      { name: 'UX-Designer', url: '/hire-designers' },
      { name: 'Mobile-App-Designer', url: '/hire-designers' },
      { name: 'Grafikdesigner', url: '/hire-designers' },
      { name: 'Brand-Designer', url: '/hire-designers' },
      { name: 'Digital Marketer', url: '/hire-marketers' },
      { name: 'SEO-Experten', url: '/hire-marketers' },
      { name: 'Content Writer', url: '/hire-marketers' },
      { name: 'Growth Marketer', url: '/hire-marketers' },
      { name: 'Fractional CMOs', url: '/hire-marketers' },
      { name: 'Produktmanager', url: '/hire-product-managers' },
      { name: 'Projektmanager', url: '/hire-project-managers' },
      { name: 'Programm-Manager', url: '/hire-project-managers' },
      { name: 'Virtuelle Assistenten', url: '/hire-assistants' }
    ]
  };

  const locations = {
    title: 'STANDORTE',
    links: [
      { name: 'Berlin', url: '/standorte/deutschland/berlin/berlin' },
      { name: 'München', url: '/standorte/deutschland/bayern/muenchen' },
      { name: 'Hamburg', url: '/standorte/deutschland/hamburg/hamburg' },
      { name: 'Köln', url: '/standorte/deutschland/nordrhein-westfalen/koeln' },
      { name: 'Frankfurt', url: '/standorte/deutschland/hessen/frankfurt' },
      { name: 'Stuttgart', url: '/standorte/deutschland/baden-wuerttemberg/stuttgart' },
      { name: 'Düsseldorf', url: '/standorte/deutschland/nordrhein-westfalen/duesseldorf' },
      { name: 'Wien', url: '/standorte/oesterreich/wien/wien' },
      { name: 'Zürich', url: '/standorte/schweiz/zuerich/zuerich' },
      { name: 'Genf', url: '/standorte/schweiz/genf/genf' },
      { name: 'Basel', url: '/standorte/schweiz/basel-stadt/basel' }
    ]
  };

  const toolsColumn = {
    title: 'TOOLS',
    links: [
      { name: 'Gehalt-Rechner', url: '/tools/gehalt-rechner' },
      { name: 'Team-Kosten-Rechner', url: '/tools/team-kosten-rechner' },
      { name: 'Technologie-Vergleich', url: '/tools/technologie-vergleich' },
      { name: 'Interview-Fragen', url: '/tools/interview-fragen-generator' },
      { name: 'Projekt-Schätzung', url: '/tools/projekt-schaetzung' },
      { name: 'Skill-Assessment', url: '/tools/skill-assessment' },
      { name: 'Alle Tools', url: '/tools' },
    ]
  };

  const linksColumn = {
    title: 'LINKS',
    links: [
      { name: 'Remote-Jobs', url: '/remote-jobs' },
      { name: 'Remote-Entwickler-Jobs', url: '/hire-developers' },
      { name: 'Remote-Design-Jobs', url: '/hire-designers' },
      { name: 'Remote-Marketing-Jobs', url: '/hire-marketers' },
      { name: 'Remote-Unternehmen', url: '/remote-unternehmen' },
      { name: "So funktioniert's", url: '/so-funktionierts' },
      { name: 'Anbietervergleich', url: '/vergleich' },
      { name: 'Ressourcen', url: '/ressourcen' },
      { name: 'Für Talente', url: '/fuer-talente' },
      { name: 'Ersparnis berechnen', url: '/ersparnis-berechnen' },
      { name: 'Fallstudien', url: '/fallstudien' },
      { name: 'Talent-Ressourcen', url: '/talent-ressourcen' },
      { name: 'Preise', url: '/preise' },
      { name: 'FAQ', url: '/faq' },
      { name: 'Datenschutz', url: '/datenschutz' },
      { name: 'Nutzungsbedingungen', url: '/nutzungsbedingungen' }
    ]
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">

          {/* Top Talent Column 1 */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider">
              {topTalent.title}
            </h3>
            <div className="space-y-3">
              {topTalent.links.slice(0, 15).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Top Talent Column 2 */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider opacity-0">
              {topTalent.title}
            </h3>
            <div className="space-y-3">
              {topTalent.links.slice(15).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider">
              {locations.title}
            </h3>
            <div className="space-y-3">
              {locations.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider">
              {toolsColumn.title}
            </h3>
            <div className="space-y-3">
              {toolsColumn.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider">
              {linksColumn.title}
            </h3>
            <div className="space-y-3">
              {linksColumn.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and Legal Links */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/60">
              © Copyright 2026 Programmier-Anfang
            </span>
            <a
              href="/datenschutz"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Cookie-Richtlinie
            </a>
            <a
              href="/datenschutz"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="/nutzungsbedingungen"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Nutzungsbedingungen
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
            <span
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <span
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </span>
            <span
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

