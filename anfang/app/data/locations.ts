// -----------------------------------------------------------------------------
// locations.ts — Comprehensive location data for German-speaking countries
// Used for programmatic SEO pages on the hiring platform
// -----------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface City {
  slug: string;
  name: string;
  population: number;
  lat: number;
  lng: number;
  wikipedia: string;
  description: string;
}

export interface Region {
  slug: string;
  name: string;
  cities: City[];
}

export interface Country {
  slug: string;
  name: string;
  demonym: string;
  metaDescription: string;
  regions: Region[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const countries: Country[] = [
  // ==========================================================================
  // DEUTSCHLAND — 16 Bundesländer
  // ==========================================================================
  {
    slug: 'deutschland',
    name: 'Deutschland',
    demonym: 'deutsche',
    metaDescription:
      'Finden und engagieren Sie die besten Remote-Entwickler in Deutschland. Zugang zu erstklassigen Programmierern in allen 16 Bundesländern — von Berlin bis München, Hamburg bis Frankfurt.',
    regions: [
      {
        slug: 'baden-wuerttemberg',
        name: 'Baden-Württemberg',
        cities: [
          {
            slug: 'stuttgart',
            name: 'Stuttgart',
            population: 635911,
            lat: 48.7758,
            lng: 9.1829,
            wikipedia: 'https://de.wikipedia.org/wiki/Stuttgart',
            description: 'Stuttgart ist die Landeshauptstadt Baden-Württembergs und ein globales Zentrum der Automobilindustrie mit Hauptsitzen von Mercedes-Benz und Porsche. Die Region beherbergt zudem eine wachsende Szene für Softwareentwicklung und Industrie-4.0-Anwendungen.',
          },
          {
            slug: 'karlsruhe',
            name: 'Karlsruhe',
            population: 308436,
            lat: 49.0069,
            lng: 8.4037,
            wikipedia: 'https://de.wikipedia.org/wiki/Karlsruhe',
            description: 'Karlsruhe ist Sitz des Karlsruher Instituts für Technologie (KIT) und gilt als eine der führenden IT-Städte Deutschlands. Die Stadt beheimatet zahlreiche Softwareunternehmen und ein lebendiges Gründerökosystem.',
          },
          {
            slug: 'mannheim',
            name: 'Mannheim',
            population: 311831,
            lat: 49.4875,
            lng: 8.4660,
            wikipedia: 'https://de.wikipedia.org/wiki/Mannheim',
            description: 'Mannheim ist ein bedeutender Wirtschaftsstandort in der Metropolregion Rhein-Neckar mit starker Industrie- und Dienstleistungstradition. Die Stadt entwickelt sich zunehmend zu einem Zentrum für digitale Innovation und Kreativwirtschaft.',
          },
          {
            slug: 'freiburg',
            name: 'Freiburg im Breisgau',
            population: 231195,
            lat: 47.9990,
            lng: 7.8421,
            wikipedia: 'https://de.wikipedia.org/wiki/Freiburg_im_Breisgau',
            description: 'Freiburg im Breisgau ist eine renommierte Universitätsstadt und Vorreiter im Bereich erneuerbare Energien und Nachhaltigkeit. Die Stadt hat eine wachsende Tech-Szene mit Schwerpunkt auf Green Tech und Softwareentwicklung.',
          },
          {
            slug: 'heidelberg',
            name: 'Heidelberg',
            population: 162273,
            lat: 49.3988,
            lng: 8.6724,
            wikipedia: 'https://de.wikipedia.org/wiki/Heidelberg',
            description: 'Heidelberg ist weltweit bekannt für seine traditionsreiche Universität und ein Zentrum für Biowissenschaften und Life Sciences. Die Stadt zieht zahlreiche Tech-Unternehmen und Forschungseinrichtungen an.',
          },
        ],
      },
      {
        slug: 'bayern',
        name: 'Bayern',
        cities: [
          {
            slug: 'muenchen',
            name: 'München',
            population: 1512491,
            lat: 48.1351,
            lng: 11.5820,
            wikipedia: 'https://de.wikipedia.org/wiki/M%C3%BCnchen',
            description: 'München ist Bayerns Landeshauptstadt und einer der wichtigsten Technologiestandorte Europas. Hier haben zahlreiche DAX-Konzerne und KI-Startups ihren Sitz, was die Stadt zu einem Magneten für IT-Talente macht.',
          },
          {
            slug: 'nuernberg',
            name: 'Nürnberg',
            population: 523026,
            lat: 49.4521,
            lng: 11.0767,
            wikipedia: 'https://de.wikipedia.org/wiki/N%C3%BCrnberg',
            description: 'Nürnberg ist Frankens Wirtschaftszentrum mit einer starken Tradition in Elektrotechnik und Automatisierung. Die Stadt beheimatet wichtige IT-Unternehmen und veranstaltet jährlich bedeutende Technologiemessen.',
          },
          {
            slug: 'augsburg',
            name: 'Augsburg',
            population: 304059,
            lat: 48.3705,
            lng: 10.8978,
            wikipedia: 'https://de.wikipedia.org/wiki/Augsburg',
            description: 'Augsburg ist eine der ältesten Städte Deutschlands und ein bedeutender Industriestandort mit Schwerpunkt auf Mechatronik und IT. Die Universität Augsburg und mehrere Forschungszentren fördern Innovation in der Region.',
          },
          {
            slug: 'regensburg',
            name: 'Regensburg',
            population: 157440,
            lat: 49.0134,
            lng: 12.1016,
            wikipedia: 'https://de.wikipedia.org/wiki/Regensburg',
            description: 'Regensburg ist ein wachsender Technologiestandort mit einem starken Fokus auf Halbleitertechnik und Softwareentwicklung. Die Universität Regensburg und das IT-Cluster tragen zu einer dynamischen Innovationslandschaft bei.',
          },
          {
            slug: 'wuerzburg',
            name: 'Würzburg',
            population: 131492,
            lat: 49.7913,
            lng: 9.9534,
            wikipedia: 'https://de.wikipedia.org/wiki/W%C3%BCrzburg',
            description: 'Würzburg ist eine traditionsreiche Universitätsstadt in Unterfranken mit wachsender Bedeutung im Bereich Digitalisierung und Robotik. Die Stadt verbindet akademische Exzellenz mit einer sich entwickelnden Gründerszene.',
          },
        ],
      },
      {
        slug: 'berlin',
        name: 'Berlin',
        cities: [
          {
            slug: 'berlin',
            name: 'Berlin',
            population: 3677472,
            lat: 52.5200,
            lng: 13.4050,
            wikipedia: 'https://de.wikipedia.org/wiki/Berlin',
            description: 'Berlin ist die Hauptstadt Deutschlands und Europas führendes Startup-Zentrum mit über 3.000 Tech-Unternehmen. Die Stadt beheimatet zahlreiche internationale Konzerne sowie ein florierendes Ökosystem aus Inkubatoren und Acceleratoren.',
          },
        ],
      },
      {
        slug: 'brandenburg',
        name: 'Brandenburg',
        cities: [
          {
            slug: 'potsdam',
            name: 'Potsdam',
            population: 185750,
            lat: 52.3906,
            lng: 13.0645,
            wikipedia: 'https://de.wikipedia.org/wiki/Potsdam',
            description: 'Potsdam ist Brandenburgs Landeshauptstadt und beherbergt renommierte Forschungseinrichtungen wie das Hasso-Plattner-Institut. Die Stadt profitiert von der Nähe zu Berlin und entwickelt sich zu einem attraktiven IT-Standort.',
          },
          {
            slug: 'cottbus',
            name: 'Cottbus',
            population: 99678,
            lat: 51.7563,
            lng: 14.3329,
            wikipedia: 'https://de.wikipedia.org/wiki/Cottbus',
            description: 'Cottbus ist ein wichtiger Wirtschaftsstandort in der Lausitz und befindet sich im Strukturwandel hin zu erneuerbaren Energien und Digitalisierung. Die Brandenburgische Technische Universität treibt Innovation in der Region voran.',
          },
          {
            slug: 'frankfurt-oder',
            name: 'Frankfurt (Oder)',
            population: 57015,
            lat: 52.3471,
            lng: 14.5506,
            wikipedia: 'https://de.wikipedia.org/wiki/Frankfurt_(Oder)',
            description: 'Frankfurt (Oder) ist eine Grenzstadt zu Polen und Sitz der Europa-Universität Viadrina. Die Stadt entwickelt sich als Brücke zwischen deutschen und polnischen Technologienetzwerken.',
          },
        ],
      },
      {
        slug: 'bremen',
        name: 'Bremen',
        cities: [
          {
            slug: 'bremen',
            name: 'Bremen',
            population: 569352,
            lat: 53.0793,
            lng: 8.8017,
            wikipedia: 'https://de.wikipedia.org/wiki/Bremen',
            description: 'Bremen ist ein bedeutender Handels- und Industriestandort mit starker Luft- und Raumfahrtindustrie, darunter Airbus und OHB. Die Stadt hat zudem eine wachsende Szene für digitale Wirtschaft und Softwareentwicklung.',
          },
          {
            slug: 'bremerhaven',
            name: 'Bremerhaven',
            population: 118353,
            lat: 53.5396,
            lng: 8.5809,
            wikipedia: 'https://de.wikipedia.org/wiki/Bremerhaven',
            description: 'Bremerhaven ist einer der größten Seehäfen Europas und ein Zentrum für maritime Wirtschaft und Offshore-Windenergie. Die Stadt setzt zunehmend auf Digitalisierung in Logistik und Hafentechnologie.',
          },
        ],
      },
      {
        slug: 'hamburg',
        name: 'Hamburg',
        cities: [
          {
            slug: 'hamburg',
            name: 'Hamburg',
            population: 1906411,
            lat: 53.5511,
            lng: 9.9937,
            wikipedia: 'https://de.wikipedia.org/wiki/Hamburg',
            description: 'Hamburg ist Deutschlands zweitgrößte Stadt und ein führendes Zentrum für Medien, E-Commerce und Logistik-Tech. Zahlreiche große Handelsunternehmen haben hier ihren Hauptsitz, ergänzt durch eine lebendige Fintech- und Gaming-Szene.',
          },
        ],
      },
      {
        slug: 'hessen',
        name: 'Hessen',
        cities: [
          {
            slug: 'frankfurt-am-main',
            name: 'Frankfurt am Main',
            population: 773068,
            lat: 50.1109,
            lng: 8.6821,
            wikipedia: 'https://de.wikipedia.org/wiki/Frankfurt_am_Main',
            description: 'Frankfurt am Main ist das Finanzzentrum Deutschlands und Sitz der Europäischen Zentralbank. Die Stadt ist ein Hotspot für FinTech-Unternehmen und beherbergt einen der weltweit größten Internet-Knotenpunkte, den DE-CIX.',
          },
          {
            slug: 'wiesbaden',
            name: 'Wiesbaden',
            population: 283083,
            lat: 50.0782,
            lng: 8.2398,
            wikipedia: 'https://de.wikipedia.org/wiki/Wiesbaden',
            description: 'Wiesbaden ist die hessische Landeshauptstadt und ein bedeutender Standort für Beratungs- und IT-Dienstleistungen. Die Stadt bietet ein attraktives Umfeld für Unternehmen in der Rhein-Main-Region.',
          },
          {
            slug: 'kassel',
            name: 'Kassel',
            population: 201048,
            lat: 51.3127,
            lng: 9.4797,
            wikipedia: 'https://de.wikipedia.org/wiki/Kassel',
            description: 'Kassel ist bekannt für die documenta und ein wichtiger Industriestandort mit Schwerpunkt auf Verkehrstechnik und Erneuerbare Energien. Die Universität Kassel fördert Forschung in Informatik und Ingenieurwesen.',
          },
          {
            slug: 'darmstadt',
            name: 'Darmstadt',
            population: 164044,
            lat: 49.8728,
            lng: 8.6512,
            wikipedia: 'https://de.wikipedia.org/wiki/Darmstadt',
            description: 'Darmstadt ist als Wissenschaftsstadt bekannt und beherbergt die Technische Universität Darmstadt sowie das GSI Helmholtzzentrum. Die Stadt ist ein wichtiger Standort für IT-Sicherheit, Telekommunikation und Raumfahrt.',
          },
          {
            slug: 'offenbach',
            name: 'Offenbach am Main',
            population: 133691,
            lat: 50.1006,
            lng: 8.7648,
            wikipedia: 'https://de.wikipedia.org/wiki/Offenbach_am_Main',
            description: 'Offenbach am Main liegt direkt neben Frankfurt und entwickelt sich zu einem attraktiven Standort für Kreativwirtschaft und Startups. Die Stadt profitiert von günstigen Gewerbeflächen und der Nähe zum Frankfurter Tech-Ökosystem.',
          },
        ],
      },
      {
        slug: 'mecklenburg-vorpommern',
        name: 'Mecklenburg-Vorpommern',
        cities: [
          {
            slug: 'rostock',
            name: 'Rostock',
            population: 209191,
            lat: 54.0924,
            lng: 12.0991,
            wikipedia: 'https://de.wikipedia.org/wiki/Rostock',
            description: 'Rostock ist die größte Stadt Mecklenburg-Vorpommerns und ein Zentrum für maritime Forschung und Technologie. Die Universität Rostock treibt Innovation in den Bereichen Informatik und Life Sciences voran.',
          },
          {
            slug: 'schwerin',
            name: 'Schwerin',
            population: 99609,
            lat: 53.6355,
            lng: 11.4012,
            wikipedia: 'https://de.wikipedia.org/wiki/Schwerin',
            description: 'Schwerin ist die Landeshauptstadt Mecklenburg-Vorpommerns und ein Verwaltungs- und Dienstleistungszentrum. Die Stadt setzt auf Digitalisierung der öffentlichen Verwaltung und fördert lokale IT-Unternehmen.',
          },
          {
            slug: 'greifswald',
            name: 'Greifswald',
            population: 59382,
            lat: 54.0865,
            lng: 13.3923,
            wikipedia: 'https://de.wikipedia.org/wiki/Greifswald',
            description: 'Greifswald ist eine traditionsreiche Universitätsstadt an der Ostsee mit Schwerpunkten in Physik und Biowissenschaften. Das Max-Planck-Institut für Plasmaphysik macht die Stadt zu einem Standort für Spitzenforschung.',
          },
        ],
      },
      {
        slug: 'niedersachsen',
        name: 'Niedersachsen',
        cities: [
          {
            slug: 'hannover',
            name: 'Hannover',
            population: 545049,
            lat: 52.3759,
            lng: 9.7320,
            wikipedia: 'https://de.wikipedia.org/wiki/Hannover',
            description: 'Hannover ist Niedersachsens Landeshauptstadt und internationaler Messestandort, bekannt für die Hannover Messe und die CeBIT. Die Stadt ist ein wichtiger Knotenpunkt für Industrie 4.0, Automobilzulieferer und IT-Dienstleistungen.',
          },
          {
            slug: 'braunschweig',
            name: 'Braunschweig',
            population: 249406,
            lat: 52.2689,
            lng: 10.5268,
            wikipedia: 'https://de.wikipedia.org/wiki/Braunschweig',
            description: 'Braunschweig ist ein bedeutendes Forschungszentrum mit der TU Braunschweig und zahlreichen Bundesforschungsanstalten. Die Stadt hat eine starke Verbindung zur Automobil- und Luftfahrtindustrie.',
          },
          {
            slug: 'oldenburg',
            name: 'Oldenburg',
            population: 172353,
            lat: 53.1435,
            lng: 8.2146,
            wikipedia: 'https://de.wikipedia.org/wiki/Oldenburg_(Oldb)',
            description: 'Oldenburg ist ein wachsender Wirtschaftsstandort im Nordwesten Deutschlands mit Stärken in Informatik und Energieforschung. Die Carl von Ossietzky Universität ist ein wichtiger Treiber für regionale Innovation.',
          },
          {
            slug: 'osnabrueck',
            name: 'Osnabrück',
            population: 166462,
            lat: 52.2799,
            lng: 8.0472,
            wikipedia: 'https://de.wikipedia.org/wiki/Osnabr%C3%BCck',
            description: 'Osnabrück ist eine Universitätsstadt mit einem starken Mittelstand und wachsender Bedeutung im Bereich Softwareentwicklung. Die Stadt verbindet traditionelle Industrie mit moderner Technologiekompetenz.',
          },
          {
            slug: 'goettingen',
            name: 'Göttingen',
            population: 118914,
            lat: 51.5413,
            lng: 9.9158,
            wikipedia: 'https://de.wikipedia.org/wiki/G%C3%B6ttingen',
            description: 'Göttingen ist eine renommierte Wissenschaftsstadt mit der Georg-August-Universität und mehreren Max-Planck-Instituten. Die Stadt ist bekannt für Spitzenforschung in Mathematik, Physik und Informatik.',
          },
        ],
      },
      {
        slug: 'nordrhein-westfalen',
        name: 'Nordrhein-Westfalen',
        cities: [
          {
            slug: 'koeln',
            name: 'Köln',
            population: 1083498,
            lat: 50.9375,
            lng: 6.9603,
            wikipedia: 'https://de.wikipedia.org/wiki/K%C3%B6ln',
            description: 'Köln ist eine Medien- und Technologiehochburg mit einem starken Ökosystem für Gamesentwicklung, E-Commerce und Digitalagenturen. Die Gamescom und zahlreiche Tech-Events machen die Stadt zu einem wichtigen Treffpunkt der digitalen Wirtschaft.',
          },
          {
            slug: 'duesseldorf',
            name: 'Düsseldorf',
            population: 625583,
            lat: 51.2277,
            lng: 6.7735,
            wikipedia: 'https://de.wikipedia.org/wiki/D%C3%BCsseldorf',
            description: 'Düsseldorf ist die Landeshauptstadt Nordrhein-Westfalens und ein wichtiges Zentrum für Telekommunikation, Mode und Unternehmensberatung. Die Stadt zieht mit einem starken Wirtschaftsumfeld zahlreiche IT-Fachkräfte an.',
          },
          {
            slug: 'dortmund',
            name: 'Dortmund',
            population: 588250,
            lat: 51.5136,
            lng: 7.4653,
            wikipedia: 'https://de.wikipedia.org/wiki/Dortmund',
            description: 'Dortmund hat sich vom Industriestandort zu einem modernen Technologiezentrum gewandelt und beheimatet den größten Technologiepark Europas. Die TU Dortmund und zahlreiche Forschungsinstitute treiben die digitale Transformation voran.',
          },
          {
            slug: 'essen',
            name: 'Essen',
            population: 582760,
            lat: 51.4556,
            lng: 7.0116,
            wikipedia: 'https://de.wikipedia.org/wiki/Essen',
            description: 'Essen ist die Energiehauptstadt Deutschlands und Sitz großer Konzerne wie thyssenkrupp und RWE. Die Stadt entwickelt sich zu einem Zentrum für Smart-City-Lösungen und digitale Energiewirtschaft.',
          },
          {
            slug: 'bonn',
            name: 'Bonn',
            population: 333533,
            lat: 50.7374,
            lng: 7.0982,
            wikipedia: 'https://de.wikipedia.org/wiki/Bonn',
            description: 'Bonn ist die ehemalige Bundeshauptstadt und Sitz der Deutschen Telekom sowie zahlreicher internationaler Organisationen. Die Stadt ist ein wichtiger Standort für Cybersicherheit und IT-Dienstleistungen.',
          },
        ],
      },
      {
        slug: 'rheinland-pfalz',
        name: 'Rheinland-Pfalz',
        cities: [
          {
            slug: 'mainz',
            name: 'Mainz',
            population: 220552,
            lat: 49.9929,
            lng: 8.2473,
            wikipedia: 'https://de.wikipedia.org/wiki/Mainz',
            description: 'Mainz ist die Landeshauptstadt von Rheinland-Pfalz und ein bedeutendes Medienzentrum mit dem ZDF-Hauptsitz. Die Johannes Gutenberg-Universität und Biotech-Unternehmen wie BioNTech machen die Stadt zu einem Innovationsstandort.',
          },
          {
            slug: 'ludwigshafen',
            name: 'Ludwigshafen am Rhein',
            population: 172557,
            lat: 49.4774,
            lng: 8.4452,
            wikipedia: 'https://de.wikipedia.org/wiki/Ludwigshafen_am_Rhein',
            description: 'Ludwigshafen ist der Hauptsitz der BASF, des weltweit größten Chemiekonzerns. Die Stadt setzt zunehmend auf Digitalisierung in der chemischen Industrie und entwickelt Smart-Factory-Lösungen.',
          },
          {
            slug: 'koblenz',
            name: 'Koblenz',
            population: 114024,
            lat: 50.3569,
            lng: 7.5890,
            wikipedia: 'https://de.wikipedia.org/wiki/Koblenz',
            description: 'Koblenz liegt am Zusammenfluss von Rhein und Mosel und ist ein Standort für IT-Unternehmen und Bundesbehörden. Die Universität Koblenz fördert Forschung in Informatik und Wirtschaftsinformatik.',
          },
          {
            slug: 'trier',
            name: 'Trier',
            population: 111528,
            lat: 49.7490,
            lng: 6.6371,
            wikipedia: 'https://de.wikipedia.org/wiki/Trier',
            description: 'Trier ist Deutschlands älteste Stadt und ein Hochschulstandort mit wachsender IT-Branche. Die Nähe zu Luxemburg und die Universität Trier machen die Stadt attraktiv für grenzüberschreitende Technologieprojekte.',
          },
        ],
      },
      {
        slug: 'saarland',
        name: 'Saarland',
        cities: [
          {
            slug: 'saarbruecken',
            name: 'Saarbrücken',
            population: 181959,
            lat: 49.2402,
            lng: 6.9969,
            wikipedia: 'https://de.wikipedia.org/wiki/Saarbr%C3%BCcken',
            description: 'Saarbrücken ist die Landeshauptstadt des Saarlands und beheimatet das renommierte DFKI (Deutsches Forschungszentrum für Künstliche Intelligenz). Die Universität des Saarlandes ist international für ihre Informatikforschung bekannt.',
          },
          {
            slug: 'neunkirchen',
            name: 'Neunkirchen',
            population: 46871,
            lat: 49.3448,
            lng: 7.1801,
            wikipedia: 'https://de.wikipedia.org/wiki/Neunkirchen_(Saar)',
            description: 'Neunkirchen ist eine ehemalige Industriestadt im Saarland, die sich im Strukturwandel befindet. Die Stadt setzt auf neue Wirtschaftszweige und die Ansiedlung kleinerer Technologieunternehmen.',
          },
          {
            slug: 'homburg',
            name: 'Homburg',
            population: 42714,
            lat: 49.3264,
            lng: 7.3389,
            wikipedia: 'https://de.wikipedia.org/wiki/Homburg',
            description: 'Homburg ist ein Standort des Universitätsklinikums des Saarlandes und Sitz bedeutender Industriewerke. Die Stadt verbindet Medizintechnik mit industrieller Fertigung und bietet Potenzial für Health-Tech-Innovationen.',
          },
        ],
      },
      {
        slug: 'sachsen',
        name: 'Sachsen',
        cities: [
          {
            slug: 'leipzig',
            name: 'Leipzig',
            population: 616093,
            lat: 51.3397,
            lng: 12.3731,
            wikipedia: 'https://de.wikipedia.org/wiki/Leipzig',
            description: 'Leipzig ist eine der am schnellsten wachsenden Städte Deutschlands und ein aufstrebendes Tech-Zentrum mit einer lebendigen Startup-Szene. Die Stadt zieht Kreative und IT-Fachkräfte an und beherbergt Unternehmen wie Spreadshirt und CHECK24.',
          },
          {
            slug: 'dresden',
            name: 'Dresden',
            population: 563311,
            lat: 51.0504,
            lng: 13.7373,
            wikipedia: 'https://de.wikipedia.org/wiki/Dresden',
            description: 'Dresden ist als „Silicon Saxony" bekannt und Europas größter Standort für Halbleiterfertigung mit mehreren internationalen Chipherstellern. Die TU Dresden ist eine Exzellenzuniversität mit Schwerpunkten in Mikroelektronik und KI.',
          },
          {
            slug: 'chemnitz',
            name: 'Chemnitz',
            population: 249922,
            lat: 50.8278,
            lng: 12.9214,
            wikipedia: 'https://de.wikipedia.org/wiki/Chemnitz',
            description: 'Chemnitz ist ein wichtiger Industriestandort mit Stärken im Maschinenbau und der Automobilzulieferung. Die TU Chemnitz forscht intensiv in den Bereichen Leichtbau, Sensorik und intelligente Produktionssysteme.',
          },
          {
            slug: 'zwickau',
            name: 'Zwickau',
            population: 87516,
            lat: 50.7183,
            lng: 12.4964,
            wikipedia: 'https://de.wikipedia.org/wiki/Zwickau',
            description: 'Zwickau ist ein traditionsreicher Automobilstandort, in dem Volkswagen seine E-Mobilitätsstrategie umsetzt. Die Westsächsische Hochschule bildet Fachkräfte in Informatik und Ingenieurwesen aus.',
          },
        ],
      },
      {
        slug: 'sachsen-anhalt',
        name: 'Sachsen-Anhalt',
        cities: [
          {
            slug: 'halle',
            name: 'Halle (Saale)',
            population: 242083,
            lat: 51.4969,
            lng: 11.9688,
            wikipedia: 'https://de.wikipedia.org/wiki/Halle_(Saale)',
            description: 'Halle (Saale) ist eine Universitätsstadt mit der Martin-Luther-Universität und einem Fokus auf Biowissenschaften und Materialforschung. Die Stadt entwickelt sich zu einem Standort für IT-Dienstleistungen und digitale Medien.',
          },
          {
            slug: 'magdeburg',
            name: 'Magdeburg',
            population: 239364,
            lat: 52.1205,
            lng: 11.6276,
            wikipedia: 'https://de.wikipedia.org/wiki/Magdeburg',
            description: 'Magdeburg ist die Landeshauptstadt Sachsen-Anhalts und beheimatet die Otto-von-Guericke-Universität mit starker Informatikforschung. Die Stadt entwickelt sich mit dem Fraunhofer-Institut als Standort für Industrie 4.0 und Logistik-Technologie.',
          },
          {
            slug: 'dessau-rosslau',
            name: 'Dessau-Roßlau',
            population: 79459,
            lat: 51.8311,
            lng: 12.2464,
            wikipedia: 'https://de.wikipedia.org/wiki/Dessau-Ro%C3%9Flau',
            description: 'Dessau-Roßlau ist als Bauhaus-Stadt weltbekannt und Sitz des Umweltbundesamtes. Die Stadt verbindet Design-Tradition mit einem wachsenden Interesse an nachhaltiger Technologie und digitaler Verwaltung.',
          },
        ],
      },
      {
        slug: 'schleswig-holstein',
        name: 'Schleswig-Holstein',
        cities: [
          {
            slug: 'kiel',
            name: 'Kiel',
            population: 249023,
            lat: 54.3233,
            lng: 10.1228,
            wikipedia: 'https://de.wikipedia.org/wiki/Kiel',
            description: 'Kiel ist die Landeshauptstadt Schleswig-Holsteins und ein Zentrum für maritime Wirtschaft und Meeresforschung. Die Christian-Albrechts-Universität und das GEOMAR Helmholtz-Zentrum treiben Innovationen in Ozeanforschung und Informatik voran.',
          },
          {
            slug: 'luebeck',
            name: 'Lübeck',
            population: 217198,
            lat: 53.8655,
            lng: 10.6866,
            wikipedia: 'https://de.wikipedia.org/wiki/L%C3%BCbeck',
            description: 'Lübeck ist UNESCO-Weltkulturerbe und Sitz der Universität zu Lübeck mit Schwerpunkt Medizininformatik und Life Sciences. Die Stadt entwickelt sich zu einem Standort für Medizintechnik und digitale Gesundheitslösungen.',
          },
          {
            slug: 'flensburg',
            name: 'Flensburg',
            population: 91126,
            lat: 54.7937,
            lng: 9.4469,
            wikipedia: 'https://de.wikipedia.org/wiki/Flensburg',
            description: 'Flensburg ist eine deutsch-dänische Grenzstadt und Hochschulstandort mit Stärken im Bereich erneuerbare Energien. Die Stadt profitiert von grenzüberschreitenden Kooperationen und einer wachsenden digitalen Wirtschaft.',
          },
        ],
      },
      {
        slug: 'thueringen',
        name: 'Thüringen',
        cities: [
          {
            slug: 'erfurt',
            name: 'Erfurt',
            population: 214417,
            lat: 50.9787,
            lng: 11.0328,
            wikipedia: 'https://de.wikipedia.org/wiki/Erfurt',
            description: 'Erfurt ist die Landeshauptstadt Thüringens und ein wachsender Standort für IT-Unternehmen und E-Commerce. Die zentrale Lage in Deutschland und die Fachhochschule Erfurt machen die Stadt attraktiv für Technologieunternehmen.',
          },
          {
            slug: 'jena',
            name: 'Jena',
            population: 111407,
            lat: 50.9272,
            lng: 11.5892,
            wikipedia: 'https://de.wikipedia.org/wiki/Jena',
            description: 'Jena ist eine Hightech-Stadt mit Weltunternehmen wie Carl Zeiss und Jenoptik sowie einer herausragenden Friedrich-Schiller-Universität. Die Stadt ist ein führender Standort für Optik, Photonik und Biotechnologie.',
          },
          {
            slug: 'gera',
            name: 'Gera',
            population: 91756,
            lat: 50.8810,
            lng: 12.0818,
            wikipedia: 'https://de.wikipedia.org/wiki/Gera',
            description: 'Gera ist eine Stadt in Ostthüringen, die sich vom Industriestandort zu einem Dienstleistungszentrum entwickelt. Die Stadt setzt auf Digitalisierung und die Ansiedlung moderner Unternehmen.',
          },
          {
            slug: 'weimar',
            name: 'Weimar',
            population: 65228,
            lat: 50.9795,
            lng: 11.3235,
            wikipedia: 'https://de.wikipedia.org/wiki/Weimar',
            description: 'Weimar ist eine Kulturstadt von Weltrang und Sitz der Bauhaus-Universität mit innovativen Studiengängen in Medieninformatik und Digital Engineering. Die Stadt verbindet kreatives Erbe mit moderner Technologieentwicklung.',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // ÖSTERREICH — 9 Bundesländer
  // ==========================================================================
  {
    slug: 'oesterreich',
    name: 'Österreich',
    demonym: 'österreichische',
    metaDescription:
      'Engagieren Sie erfahrene Remote-Entwickler in Österreich. Von Wien über Graz bis Innsbruck — finden Sie Top-Programmierer in allen neun Bundesländern.',
    regions: [
      {
        slug: 'burgenland',
        name: 'Burgenland',
        cities: [
          {
            slug: 'eisenstadt',
            name: 'Eisenstadt',
            population: 15467,
            lat: 47.8452,
            lng: 16.5252,
            wikipedia: 'https://de.wikipedia.org/wiki/Eisenstadt',
            description: 'Eisenstadt ist die Landeshauptstadt des Burgenlands und ein Verwaltungs- und Kulturzentrum. Die Stadt setzt auf Digitalisierung und die Entwicklung regionaler IT-Dienstleistungen.',
          },
          {
            slug: 'oberwart',
            name: 'Oberwart',
            population: 8282,
            lat: 47.2917,
            lng: 16.1967,
            wikipedia: 'https://de.wikipedia.org/wiki/Oberwart',
            description: 'Oberwart ist ein regionales Zentrum im Südburgenland mit wachsender Bedeutung als Wirtschaftsstandort. Die Stadt fördert die Ansiedlung von Kleinunternehmen und digitale Initiativen.',
          },
        ],
      },
      {
        slug: 'kaernten',
        name: 'Kärnten',
        cities: [
          {
            slug: 'klagenfurt',
            name: 'Klagenfurt am Wörthersee',
            population: 103671,
            lat: 46.6247,
            lng: 14.3050,
            wikipedia: 'https://de.wikipedia.org/wiki/Klagenfurt_am_W%C3%B6rthersee',
            description: 'Klagenfurt ist die Landeshauptstadt Kärntens und beheimatet die Alpen-Adria-Universität mit starker Informatikforschung. Die Stadt ist ein wachsender IT-Standort mit Schwerpunkt auf Spieleentwicklung und Smart Systems.',
          },
          {
            slug: 'villach',
            name: 'Villach',
            population: 63612,
            lat: 46.6111,
            lng: 13.8558,
            wikipedia: 'https://de.wikipedia.org/wiki/Villach',
            description: 'Villach ist ein bedeutender Technologiestandort in Kärnten und Sitz führender Halbleiterunternehmen. Die Stadt ist ein Zentrum für Mikroelektronik und Halbleiterentwicklung.',
          },
          {
            slug: 'wolfsberg',
            name: 'Wolfsberg',
            population: 25105,
            lat: 46.8419,
            lng: 14.8410,
            wikipedia: 'https://de.wikipedia.org/wiki/Wolfsberg_(K%C3%A4rnten)',
            description: 'Wolfsberg ist ein Wirtschaftszentrum im Lavanttal mit Unternehmen aus der Verpackungsindustrie und Elektronik. Die Stadt bietet ein solides wirtschaftliches Umfeld für mittelständische Betriebe.',
          },
        ],
      },
      {
        slug: 'niederoesterreich',
        name: 'Niederösterreich',
        cities: [
          {
            slug: 'st-poelten',
            name: 'St. Pölten',
            population: 55878,
            lat: 48.2048,
            lng: 15.6256,
            wikipedia: 'https://de.wikipedia.org/wiki/St._P%C3%B6lten',
            description: 'St. Pölten ist die Landeshauptstadt Niederösterreichs und entwickelt sich zu einem modernen Verwaltungs- und Technologiestandort. Die Fachhochschule St. Pölten bildet Fachkräfte in Medientechnik und Informatik aus.',
          },
          {
            slug: 'wiener-neustadt',
            name: 'Wiener Neustadt',
            population: 47215,
            lat: 47.8133,
            lng: 16.2467,
            wikipedia: 'https://de.wikipedia.org/wiki/Wiener_Neustadt',
            description: 'Wiener Neustadt ist ein wichtiger Wirtschaftsstandort südlich von Wien mit Schwerpunkt auf Luftfahrt und Fertigungstechnik. Die Fachhochschule Wiener Neustadt bildet Fachkräfte in Ingenieurwesen und Informatik aus.',
          },
          {
            slug: 'krems',
            name: 'Krems an der Donau',
            population: 25036,
            lat: 48.4093,
            lng: 15.6144,
            wikipedia: 'https://de.wikipedia.org/wiki/Krems_an_der_Donau',
            description: 'Krems an der Donau ist eine Universitätsstadt in der Wachau und Standort der Donau-Universität Krems. Die Stadt setzt auf Weiterbildung und digitale Innovationen im Bereich E-Government.',
          },
          {
            slug: 'baden',
            name: 'Baden',
            population: 26447,
            lat: 48.0069,
            lng: 16.2310,
            wikipedia: 'https://de.wikipedia.org/wiki/Baden_(Nieder%C3%B6sterreich)',
            description: 'Baden bei Wien ist eine Kurstadt mit wachsender Bedeutung als Wohn- und Wirtschaftsstandort im Wiener Umland. Die Nähe zu Wien macht die Stadt attraktiv für Pendler und kleine Technologieunternehmen.',
          },
        ],
      },
      {
        slug: 'oberoesterreich',
        name: 'Oberösterreich',
        cities: [
          {
            slug: 'linz',
            name: 'Linz',
            population: 208628,
            lat: 48.3069,
            lng: 14.2858,
            wikipedia: 'https://de.wikipedia.org/wiki/Linz',
            description: 'Linz ist die Landeshauptstadt Oberösterreichs und ein bedeutender Industrie- und Technologiestandort. Die Stadt ist bekannt für das Ars Electronica Center und eine starke Szene für Medienkunst und digitale Innovation.',
          },
          {
            slug: 'wels',
            name: 'Wels',
            population: 63569,
            lat: 48.1575,
            lng: 14.0289,
            wikipedia: 'https://de.wikipedia.org/wiki/Wels_(Stadt)',
            description: 'Wels ist eine Messestadt in Oberösterreich und ein wichtiger Standort für Handel und Gewerbe. Die Fachhochschule Wels bildet Fachkräfte in Technik und Informatik aus.',
          },
          {
            slug: 'steyr',
            name: 'Steyr',
            population: 38577,
            lat: 48.0427,
            lng: 14.4213,
            wikipedia: 'https://de.wikipedia.org/wiki/Steyr',
            description: 'Steyr ist eine traditionsreiche Industriestadt und Standort bedeutender Industrieunternehmen. Die Stadt ist ein Zentrum für Maschinenbau und Automatisierungstechnik.',
          },
          {
            slug: 'leonding',
            name: 'Leonding',
            population: 29491,
            lat: 48.2603,
            lng: 14.2406,
            wikipedia: 'https://de.wikipedia.org/wiki/Leonding',
            description: 'Leonding liegt direkt neben Linz und profitiert von der Nähe zum oberösterreichischen Wirtschaftszentrum. Die Stadt beherbergt mehrere Technologieunternehmen und bietet ein attraktives Wohnumfeld für IT-Fachkräfte.',
          },
        ],
      },
      {
        slug: 'salzburg',
        name: 'Salzburg',
        cities: [
          {
            slug: 'salzburg',
            name: 'Salzburg',
            population: 155416,
            lat: 47.8095,
            lng: 13.0550,
            wikipedia: 'https://de.wikipedia.org/wiki/Salzburg',
            description: 'Salzburg ist die Landeshauptstadt des gleichnamigen Bundeslandes und ein bedeutender Wirtschaftsstandort an der Grenze zu Deutschland. Die Stadt beheimatet eine wachsende IT-Szene und ist Sitz mehrerer internationaler Unternehmen.',
          },
          {
            slug: 'hallein',
            name: 'Hallein',
            population: 21781,
            lat: 47.6833,
            lng: 13.1000,
            wikipedia: 'https://de.wikipedia.org/wiki/Hallein',
            description: 'Hallein ist eine Kleinstadt im Salzburger Land mit einer Mischung aus Gewerbe und Dienstleistungen. Die Nähe zu Salzburg macht die Stadt zu einem ergänzenden Wirtschaftsstandort.',
          },
          {
            slug: 'saalfelden',
            name: 'Saalfelden am Steinernen Meer',
            population: 17101,
            lat: 47.4264,
            lng: 12.8489,
            wikipedia: 'https://de.wikipedia.org/wiki/Saalfelden_am_Steinernen_Meer',
            description: 'Saalfelden ist ein regionales Zentrum im Pinzgau mit Tourismus und Gewerbe als wirtschaftlichen Stützen. Die Stadt bietet Lebensqualität in alpiner Umgebung und zieht Remote-Arbeitende an.',
          },
        ],
      },
      {
        slug: 'steiermark',
        name: 'Steiermark',
        cities: [
          {
            slug: 'graz',
            name: 'Graz',
            population: 295424,
            lat: 47.0707,
            lng: 15.4395,
            wikipedia: 'https://de.wikipedia.org/wiki/Graz',
            description: 'Graz ist die zweitgrößte Stadt Österreichs und ein bedeutender Technologie- und Forschungsstandort. Die TU Graz und zahlreiche Industrieunternehmen machen die Stadt zu einem Zentrum für Automotive-Tech und Softwareentwicklung.',
          },
          {
            slug: 'leoben',
            name: 'Leoben',
            population: 24912,
            lat: 47.3817,
            lng: 15.0908,
            wikipedia: 'https://de.wikipedia.org/wiki/Leoben',
            description: 'Leoben ist Sitz der Montanuniversität und ein Zentrum für Bergbau, Werkstoffe und Metallurgie. Die Stadt verbindet traditionelle Industrie mit moderner Materialforschung.',
          },
          {
            slug: 'kapfenberg',
            name: 'Kapfenberg',
            population: 22798,
            lat: 47.4442,
            lng: 15.2922,
            wikipedia: 'https://de.wikipedia.org/wiki/Kapfenberg',
            description: 'Kapfenberg ist ein Industriestandort in der Obersteiermark mit Schwerpunkt auf Stahlverarbeitung und Hochtechnologie. Die Böhler-Werke machen die Stadt zu einem wichtigen Zentrum für Spezialstahl und Werkstofftechnik.',
          },
        ],
      },
      {
        slug: 'tirol',
        name: 'Tirol',
        cities: [
          {
            slug: 'innsbruck',
            name: 'Innsbruck',
            population: 131961,
            lat: 47.2692,
            lng: 11.4041,
            wikipedia: 'https://de.wikipedia.org/wiki/Innsbruck',
            description: 'Innsbruck ist die Landeshauptstadt Tirols und ein Wissenschaftsstandort mit der Leopold-Franzens-Universität und dem MCI. Die Stadt ist ein wachsendes Zentrum für IT-Startups, Quantencomputing-Forschung und digitale Gesundheitslösungen.',
          },
          {
            slug: 'kufstein',
            name: 'Kufstein',
            population: 19753,
            lat: 47.5833,
            lng: 12.1667,
            wikipedia: 'https://de.wikipedia.org/wiki/Kufstein',
            description: 'Kufstein ist eine Grenzstadt zu Bayern und ein regionales Wirtschaftszentrum im Tiroler Unterland. Die FH Kufstein bildet Fachkräfte in Wirtschaftsinformatik und Datenmanagement aus.',
          },
          {
            slug: 'telfs',
            name: 'Telfs',
            population: 16342,
            lat: 47.3100,
            lng: 11.0736,
            wikipedia: 'https://de.wikipedia.org/wiki/Telfs',
            description: 'Telfs ist eine Marktgemeinde im Tiroler Oberinntal mit einer diversifizierten Wirtschaft aus Gewerbe und Dienstleistungen. Die Nähe zu Innsbruck macht den Ort attraktiv als Wohn- und Arbeitsstandort.',
          },
        ],
      },
      {
        slug: 'vorarlberg',
        name: 'Vorarlberg',
        cities: [
          {
            slug: 'dornbirn',
            name: 'Dornbirn',
            population: 51063,
            lat: 47.4125,
            lng: 9.7417,
            wikipedia: 'https://de.wikipedia.org/wiki/Dornbirn',
            description: 'Dornbirn ist die größte Stadt Vorarlbergs und ein bedeutender Wirtschaftsstandort mit starker Textilindustrie und wachsender IT-Branche. Die FH Vorarlberg ist ein Treiber für Innovation und Technologietransfer in der Region.',
          },
          {
            slug: 'feldkirch',
            name: 'Feldkirch',
            population: 36199,
            lat: 47.2333,
            lng: 9.6000,
            wikipedia: 'https://de.wikipedia.org/wiki/Feldkirch',
            description: 'Feldkirch ist eine historische Stadt an der Grenze zu Liechtenstein und der Schweiz mit einem vielfältigen Wirtschaftsumfeld. Die Stadt ist ein regionales Zentrum für Bildung, Handel und Dienstleistungen.',
          },
          {
            slug: 'bregenz',
            name: 'Bregenz',
            population: 29806,
            lat: 47.5031,
            lng: 9.7471,
            wikipedia: 'https://de.wikipedia.org/wiki/Bregenz',
            description: 'Bregenz ist die Landeshauptstadt Vorarlbergs am Bodensee und ein Verwaltungs- und Kulturzentrum. Die Stadt setzt auf Digitalisierung und grenzüberschreitende Zusammenarbeit in der Bodenseeregion.',
          },
        ],
      },
      {
        slug: 'wien',
        name: 'Wien',
        cities: [
          {
            slug: 'wien',
            name: 'Wien',
            population: 1982097,
            lat: 48.2082,
            lng: 16.3738,
            wikipedia: 'https://de.wikipedia.org/wiki/Wien',
            description: 'Wien ist die Bundeshauptstadt Österreichs und eines der wichtigsten Wirtschafts- und Technologiezentren Mitteleuropas. Die Stadt beheimatet die TU Wien, zahlreiche Forschungsinstitute und ein florierendes Startup-Ökosystem mit Schwerpunkten in FinTech, Life Sciences und KI.',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // SCHWEIZ — 26 Kantone
  // ==========================================================================
  {
    slug: 'schweiz',
    name: 'Schweiz',
    demonym: 'Schweizer',
    metaDescription:
      'Stellen Sie erstklassige Remote-Entwickler in der Schweiz ein. Zugang zu hochqualifizierten Programmierern in allen 26 Kantonen — von Zürich über Genf bis Basel.',
    regions: [
      {
        slug: 'aargau',
        name: 'Aargau',
        cities: [
          {
            slug: 'aarau',
            name: 'Aarau',
            population: 21905,
            lat: 47.3925,
            lng: 8.0442,
            wikipedia: 'https://de.wikipedia.org/wiki/Aarau',
            description: 'Aarau ist die Kantonshauptstadt des Aargaus und ein Verwaltungs- und Dienstleistungszentrum. Die Stadt liegt verkehrsgünstig zwischen Zürich und Bern und bietet ein solides Umfeld für KMU und IT-Dienstleister.',
          },
          {
            slug: 'baden-ag',
            name: 'Baden',
            population: 19526,
            lat: 47.4733,
            lng: 8.3064,
            wikipedia: 'https://de.wikipedia.org/wiki/Baden_AG',
            description: 'Baden ist ein bedeutender Industriestandort und beheimatet den Hauptsitz führender Technologiekonzerne. Die Stadt ist ein Zentrum für Energietechnik und Ingenieurdienstleistungen.',
          },
          {
            slug: 'wettingen',
            name: 'Wettingen',
            population: 21087,
            lat: 47.4706,
            lng: 8.3189,
            wikipedia: 'https://de.wikipedia.org/wiki/Wettingen',
            description: 'Wettingen liegt im Großraum Baden und profitiert von der Nähe zu Zürich und zu bedeutenden Industriestandorten. Die Gemeinde ist ein attraktiver Wohn- und Arbeitsort für Fachkräfte in der Region.',
          },
        ],
      },
      {
        slug: 'appenzell-ausserrhoden',
        name: 'Appenzell Ausserrhoden',
        cities: [
          {
            slug: 'herisau',
            name: 'Herisau',
            population: 15911,
            lat: 47.3856,
            lng: 9.2781,
            wikipedia: 'https://de.wikipedia.org/wiki/Herisau',
            description: 'Herisau ist der Hauptort von Appenzell Ausserrhoden und ein regionales Wirtschaftszentrum. Die Stadt hat eine Tradition im Textilbereich und entwickelt sich als Standort für kleine Technologieunternehmen.',
          },
        ],
      },
      {
        slug: 'appenzell-innerrhoden',
        name: 'Appenzell Innerrhoden',
        cities: [
          {
            slug: 'appenzell',
            name: 'Appenzell',
            population: 5891,
            lat: 47.3317,
            lng: 9.4086,
            wikipedia: 'https://de.wikipedia.org/wiki/Appenzell',
            description: 'Appenzell ist der Hauptort des Kantons Appenzell Innerrhoden und ein kulturelles Zentrum mit Tourismus als wichtigem Wirtschaftsfaktor. Trotz seiner geringen Größe bietet der Ort Potenzial für Remote-Arbeit in idyllischer Umgebung.',
          },
        ],
      },
      {
        slug: 'basel-landschaft',
        name: 'Basel-Landschaft',
        cities: [
          {
            slug: 'liestal',
            name: 'Liestal',
            population: 14383,
            lat: 47.4842,
            lng: 7.7347,
            wikipedia: 'https://de.wikipedia.org/wiki/Liestal',
            description: 'Liestal ist die Kantonshauptstadt von Basel-Landschaft und ein Verwaltungszentrum nahe Basel. Die Stadt profitiert von der Nähe zur Pharma- und Chemieindustrie der Region.',
          },
          {
            slug: 'allschwil',
            name: 'Allschwil',
            population: 21397,
            lat: 47.5508,
            lng: 7.5361,
            wikipedia: 'https://de.wikipedia.org/wiki/Allschwil',
            description: 'Allschwil liegt direkt an der Grenze zu Basel und beherbergt den BaseLink-Campus für Life Sciences und Technologie. Die Gemeinde ist ein wichtiger Standort für Pharmaforschung und Biotech-Startups.',
          },
          {
            slug: 'reinach-bl',
            name: 'Reinach',
            population: 19262,
            lat: 47.4953,
            lng: 7.5922,
            wikipedia: 'https://de.wikipedia.org/wiki/Reinach_BL',
            description: 'Reinach ist eine Gemeinde im Kanton Basel-Landschaft mit diversifiziertem Gewerbe und guter Anbindung an Basel. Die Stadt bietet ein attraktives Umfeld für Unternehmen und Fachkräfte.',
          },
        ],
      },
      {
        slug: 'basel-stadt',
        name: 'Basel-Stadt',
        cities: [
          {
            slug: 'basel',
            name: 'Basel',
            population: 177654,
            lat: 47.5596,
            lng: 7.5886,
            wikipedia: 'https://de.wikipedia.org/wiki/Basel',
            description: 'Basel ist das Zentrum der Schweizer Pharmaindustrie und Sitz von Novartis und Roche. Die Stadt ist ein führender Standort für Life Sciences, Biotechnologie und digitale Gesundheitslösungen.',
          },
          {
            slug: 'riehen',
            name: 'Riehen',
            population: 21481,
            lat: 47.5789,
            lng: 7.6469,
            wikipedia: 'https://de.wikipedia.org/wiki/Riehen',
            description: 'Riehen ist eine Gemeinde im Kanton Basel-Stadt und bekannt für die Fondation Beyeler. Die Gemeinde bietet hohe Lebensqualität und profitiert von der Nähe zum Basler Wirtschaftsraum.',
          },
        ],
      },
      {
        slug: 'bern',
        name: 'Bern',
        cities: [
          {
            slug: 'bern',
            name: 'Bern',
            population: 134591,
            lat: 46.9480,
            lng: 7.4474,
            wikipedia: 'https://de.wikipedia.org/wiki/Bern',
            description: 'Bern ist die Bundesstadt der Schweiz und ein wichtiger Standort für öffentliche Verwaltung und IT-Dienstleistungen. Die Universität Bern und die Berner Fachhochschule treiben Forschung in Informatik und Medizintechnik voran.',
          },
          {
            slug: 'biel-bienne',
            name: 'Biel/Bienne',
            population: 55159,
            lat: 47.1368,
            lng: 7.2467,
            wikipedia: 'https://de.wikipedia.org/wiki/Biel/Bienne',
            description: 'Biel/Bienne ist eine zweisprachige Stadt und das Zentrum der Schweizer Uhrenindustrie mit Swatch Group und Rolex. Die Stadt entwickelt sich zunehmend zu einem Standort für Präzisionstechnik und Mikrotechnologie.',
          },
          {
            slug: 'thun',
            name: 'Thun',
            population: 43783,
            lat: 46.7580,
            lng: 7.6280,
            wikipedia: 'https://de.wikipedia.org/wiki/Thun',
            description: 'Thun ist eine Stadt am Thunersee und ein regionales Wirtschaftszentrum mit Rüstungs- und Maschinenbauindustrie. Die Stadt bietet eine hohe Lebensqualität und entwickelt sich als Standort für Technologieunternehmen.',
          },
        ],
      },
      {
        slug: 'freiburg',
        name: 'Freiburg',
        cities: [
          {
            slug: 'freiburg-ch',
            name: 'Freiburg',
            population: 38829,
            lat: 46.8065,
            lng: 7.1620,
            wikipedia: 'https://de.wikipedia.org/wiki/Freiburg_im_%C3%9Cechtland',
            description: 'Freiburg (Fribourg) ist eine zweisprachige Universitätsstadt an der deutsch-französischen Sprachgrenze. Die Universität Freiburg und die Hochschule für Technik und Architektur fördern Innovation in der Region.',
          },
          {
            slug: 'bulle',
            name: 'Bulle',
            population: 24257,
            lat: 46.6192,
            lng: 7.0564,
            wikipedia: 'https://de.wikipedia.org/wiki/Bulle_FR',
            description: 'Bulle ist ein regionales Zentrum im Greyerzerland mit einer wachsenden Wirtschaft. Die Stadt profitiert von ihrer Lage zwischen Freiburg und Lausanne und bietet ein dynamisches Umfeld für KMU.',
          },
        ],
      },
      {
        slug: 'genf',
        name: 'Genf',
        cities: [
          {
            slug: 'genf',
            name: 'Genf',
            population: 203856,
            lat: 46.2044,
            lng: 6.1432,
            wikipedia: 'https://de.wikipedia.org/wiki/Genf',
            description: 'Genf ist ein internationales Zentrum für Diplomatie, Finanzen und Technologie mit Sitz zahlreicher UN-Organisationen und des CERN. Die Stadt hat ein stark wachsendes Ökosystem für Blockchain, Cybersicherheit und Cleantech.',
          },
          {
            slug: 'vernier',
            name: 'Vernier',
            population: 35885,
            lat: 46.2170,
            lng: 6.0850,
            wikipedia: 'https://de.wikipedia.org/wiki/Vernier_GE',
            description: 'Vernier ist eine Gemeinde im Kanton Genf und Teil der Genfer Agglomeration. Die Stadt bietet Gewerbeflächen und profitiert von der Nähe zu internationalen Organisationen und Technologieunternehmen.',
          },
          {
            slug: 'lancy',
            name: 'Lancy',
            population: 33616,
            lat: 46.1833,
            lng: 6.1167,
            wikipedia: 'https://de.wikipedia.org/wiki/Lancy',
            description: 'Lancy ist eine Vorortgemeinde von Genf mit guter Infrastruktur und Anbindung. Die Gemeinde beherbergt Unternehmen aus verschiedenen Branchen und bietet ein attraktives Umfeld für Arbeitnehmer.',
          },
        ],
      },
      {
        slug: 'glarus',
        name: 'Glarus',
        cities: [
          {
            slug: 'glarus',
            name: 'Glarus',
            population: 12603,
            lat: 47.0404,
            lng: 9.0676,
            wikipedia: 'https://de.wikipedia.org/wiki/Glarus',
            description: 'Glarus ist der Hauptort des gleichnamigen Kantons und ein Zentrum für Textiltradition und alpine Wirtschaft. Die Gemeinde bietet Lebensqualität in den Bergen und Potenzial für Remote-Arbeit.',
          },
        ],
      },
      {
        slug: 'graubuenden',
        name: 'Graubünden',
        cities: [
          {
            slug: 'chur',
            name: 'Chur',
            population: 38100,
            lat: 46.8499,
            lng: 9.5329,
            wikipedia: 'https://de.wikipedia.org/wiki/Chur',
            description: 'Chur ist die Kantonshauptstadt Graubündens und die älteste Stadt der Schweiz. Die Stadt ist ein regionales Wirtschaftszentrum und Sitz der Fachhochschule Graubünden mit Studiengängen in Informationswissenschaft.',
          },
          {
            slug: 'davos',
            name: 'Davos',
            population: 10908,
            lat: 46.8003,
            lng: 9.8360,
            wikipedia: 'https://de.wikipedia.org/wiki/Davos',
            description: 'Davos ist weltweit bekannt als Austragungsort des World Economic Forum und ein bedeutender Tourismusort. Die Stadt zieht internationale Aufmerksamkeit an und bietet ein einzigartiges Umfeld für Konferenzen und Innovation.',
          },
        ],
      },
      {
        slug: 'jura',
        name: 'Jura',
        cities: [
          {
            slug: 'delsberg',
            name: 'Delémont',
            population: 12682,
            lat: 47.3651,
            lng: 7.3440,
            wikipedia: 'https://de.wikipedia.org/wiki/Del%C3%A9mont',
            description: 'Delémont ist die Hauptstadt des Kantons Jura und ein Verwaltungs- und Dienstleistungszentrum. Die Stadt hat eine Tradition in der Uhren- und Präzisionsindustrie.',
          },
          {
            slug: 'pruntrut',
            name: 'Porrentruy',
            population: 6891,
            lat: 47.4153,
            lng: 7.0750,
            wikipedia: 'https://de.wikipedia.org/wiki/Porrentruy',
            description: 'Porrentruy ist eine Kleinstadt im Kanton Jura nahe der französischen Grenze. Die Stadt ist ein regionales Zentrum mit Schwerpunkten in Bildung und lokaler Wirtschaft.',
          },
        ],
      },
      {
        slug: 'luzern',
        name: 'Luzern',
        cities: [
          {
            slug: 'luzern',
            name: 'Luzern',
            population: 82620,
            lat: 47.0502,
            lng: 8.3093,
            wikipedia: 'https://de.wikipedia.org/wiki/Luzern',
            description: 'Luzern ist ein bedeutendes Tourismus- und Wirtschaftszentrum in der Zentralschweiz. Die Hochschule Luzern bietet innovative Studiengänge in Informatik und Wirtschaftsinformatik und fördert lokale Startups.',
          },
          {
            slug: 'emmen',
            name: 'Emmen',
            population: 31268,
            lat: 47.0833,
            lng: 8.3000,
            wikipedia: 'https://de.wikipedia.org/wiki/Emmen_LU',
            description: 'Emmen ist eine Gemeinde im Kanton Luzern und ein wichtiger Industriestandort mit Schwerpunkt auf Luftfahrt und Maschinenbau. Die Nähe zu Luzern macht die Gemeinde attraktiv für Unternehmen und Fachkräfte.',
          },
          {
            slug: 'kriens',
            name: 'Kriens',
            population: 28014,
            lat: 47.0333,
            lng: 8.2833,
            wikipedia: 'https://de.wikipedia.org/wiki/Kriens',
            description: 'Kriens liegt direkt neben Luzern und ist ein wachsender Wohn- und Wirtschaftsstandort. Die Gemeinde bietet ein attraktives Umfeld für Dienstleistungsunternehmen und IT-Firmen.',
          },
        ],
      },
      {
        slug: 'neuenburg',
        name: 'Neuenburg',
        cities: [
          {
            slug: 'neuenburg',
            name: 'Neuenburg',
            population: 33489,
            lat: 46.9900,
            lng: 6.9293,
            wikipedia: 'https://de.wikipedia.org/wiki/Neuenburg_NE',
            description: 'Neuenburg (Neuchâtel) ist die Hauptstadt des gleichnamigen Kantons und ein Zentrum für Mikrotechnologie und Uhrenindustrie. Die Universität Neuenburg und das CSEM treiben Innovation in Präzisionstechnik und Nanotechnologie voran.',
          },
          {
            slug: 'la-chaux-de-fonds',
            name: 'La Chaux-de-Fonds',
            population: 36915,
            lat: 47.1035,
            lng: 6.8256,
            wikipedia: 'https://de.wikipedia.org/wiki/La_Chaux-de-Fonds',
            description: 'La Chaux-de-Fonds ist ein UNESCO-Weltkulturerbe und das historische Zentrum der Schweizer Uhrmacherei. Die Stadt beheimatet Uhrenhersteller wie Tissot und Corum und ist bekannt für Feinmechanik und Präzision.',
          },
        ],
      },
      {
        slug: 'nidwalden',
        name: 'Nidwalden',
        cities: [
          {
            slug: 'stans',
            name: 'Stans',
            population: 8414,
            lat: 46.9572,
            lng: 8.3661,
            wikipedia: 'https://de.wikipedia.org/wiki/Stans',
            description: 'Stans ist der Hauptort des Kantons Nidwalden und Sitz von Pilatus Flugzeugwerke. Die Gemeinde verbindet alpine Lebensqualität mit einer traditionsreichen Luft- und Raumfahrtindustrie.',
          },
        ],
      },
      {
        slug: 'obwalden',
        name: 'Obwalden',
        cities: [
          {
            slug: 'sarnen',
            name: 'Sarnen',
            population: 10691,
            lat: 46.8961,
            lng: 8.2456,
            wikipedia: 'https://de.wikipedia.org/wiki/Sarnen',
            description: 'Sarnen ist der Hauptort des Kantons Obwalden und ein kleines Verwaltungszentrum in der Zentralschweiz. Die Gemeinde bietet eine ruhige Umgebung und ist ein Standort für lokale Dienstleistungsunternehmen.',
          },
        ],
      },
      {
        slug: 'schaffhausen',
        name: 'Schaffhausen',
        cities: [
          {
            slug: 'schaffhausen',
            name: 'Schaffhausen',
            population: 37035,
            lat: 47.6961,
            lng: 8.6350,
            wikipedia: 'https://de.wikipedia.org/wiki/Schaffhausen',
            description: 'Schaffhausen ist die Kantonshauptstadt und ein Industriestandort mit Unternehmen wie Georg Fischer und IWC. Die Stadt verbindet Tradition im Maschinenbau mit moderner Fertigungstechnik.',
          },
        ],
      },
      {
        slug: 'schwyz',
        name: 'Schwyz',
        cities: [
          {
            slug: 'schwyz',
            name: 'Schwyz',
            population: 15683,
            lat: 47.0208,
            lng: 8.6531,
            wikipedia: 'https://de.wikipedia.org/wiki/Schwyz_(Gemeinde)',
            description: 'Schwyz ist der Hauptort des gleichnamigen Kantons und namensgebend für die Schweiz. Die Gemeinde ist ein Verwaltungszentrum und bietet ein attraktives steuerliches Umfeld für Unternehmen.',
          },
          {
            slug: 'freienbach',
            name: 'Freienbach',
            population: 16519,
            lat: 47.2058,
            lng: 8.7592,
            wikipedia: 'https://de.wikipedia.org/wiki/Freienbach',
            description: 'Freienbach liegt am Zürichsee und ist dank niedriger Steuersätze ein beliebter Standort für Unternehmen und Vermögende. Die Gemeinde beherbergt zahlreiche Holdings und Technologiefirmen.',
          },
        ],
      },
      {
        slug: 'solothurn',
        name: 'Solothurn',
        cities: [
          {
            slug: 'solothurn',
            name: 'Solothurn',
            population: 16896,
            lat: 47.2088,
            lng: 7.5372,
            wikipedia: 'https://de.wikipedia.org/wiki/Solothurn',
            description: 'Solothurn ist die Kantonshauptstadt und eine barocke Kleinstadt mit Uhrenindustrie und Präzisionsfertigung. Die Stadt bietet ein attraktives Umfeld zwischen Bern und Basel.',
          },
          {
            slug: 'olten',
            name: 'Olten',
            population: 18985,
            lat: 47.3500,
            lng: 7.9039,
            wikipedia: 'https://de.wikipedia.org/wiki/Olten',
            description: 'Olten ist ein wichtiger Verkehrsknotenpunkt in der Schweiz und Sitz mehrerer Dienstleistungsunternehmen. Die zentrale Lage macht die Stadt zu einem beliebten Konferenz- und Tagungsort.',
          },
        ],
      },
      {
        slug: 'st-gallen',
        name: 'St. Gallen',
        cities: [
          {
            slug: 'st-gallen',
            name: 'St. Gallen',
            population: 79399,
            lat: 47.4245,
            lng: 9.3767,
            wikipedia: 'https://de.wikipedia.org/wiki/St._Gallen',
            description: 'St. Gallen ist die Hauptstadt der Ostschweiz und beheimatet die renommierte Universität St. Gallen (HSG), eine der führenden Wirtschaftshochschulen Europas. Die Stadt ist ein Zentrum für Wirtschaftsinformatik, FinTech und Unternehmensberatung.',
          },
          {
            slug: 'rapperswil-jona',
            name: 'Rapperswil-Jona',
            population: 27483,
            lat: 47.2267,
            lng: 8.8183,
            wikipedia: 'https://de.wikipedia.org/wiki/Rapperswil-Jona',
            description: 'Rapperswil-Jona liegt am Zürichsee und ist Standort der OST (Ostschweizer Fachhochschule) mit einem starken Informatikbereich. Die Stadt verbindet hohe Lebensqualität mit einem wachsenden Technologieumfeld.',
          },
          {
            slug: 'wil',
            name: 'Wil',
            population: 24826,
            lat: 47.4614,
            lng: 9.0433,
            wikipedia: 'https://de.wikipedia.org/wiki/Wil_SG',
            description: 'Wil ist eine Kleinstadt im Kanton St. Gallen und ein regionales Wirtschaftszentrum mit guter Verkehrsanbindung. Die Stadt bietet ein solides Umfeld für Gewerbe und Dienstleistungen.',
          },
        ],
      },
      {
        slug: 'tessin',
        name: 'Tessin',
        cities: [
          {
            slug: 'lugano',
            name: 'Lugano',
            population: 63185,
            lat: 46.0037,
            lng: 8.9511,
            wikipedia: 'https://de.wikipedia.org/wiki/Lugano',
            description: 'Lugano ist das Finanzzentrum des Tessins und ein wachsender Standort für Blockchain und Kryptowährungen. Die Università della Svizzera italiana und das IDSIA treiben Innovation in KI-Forschung voran.',
          },
          {
            slug: 'bellinzona',
            name: 'Bellinzona',
            population: 43360,
            lat: 46.1944,
            lng: 9.0236,
            wikipedia: 'https://de.wikipedia.org/wiki/Bellinzona',
            description: 'Bellinzona ist die Kantonshauptstadt des Tessins und UNESCO-Weltkulturerbe. Die Stadt ist ein Verwaltungszentrum und entwickelt sich als Standort für digitale Dienstleistungen.',
          },
          {
            slug: 'locarno',
            name: 'Locarno',
            population: 16466,
            lat: 46.1667,
            lng: 8.7833,
            wikipedia: 'https://de.wikipedia.org/wiki/Locarno',
            description: 'Locarno ist bekannt für sein internationales Filmfestival und das milde Klima am Lago Maggiore. Die Stadt bietet ein attraktives Umfeld für kreative Industrien und Remote-Arbeit.',
          },
        ],
      },
      {
        slug: 'thurgau',
        name: 'Thurgau',
        cities: [
          {
            slug: 'frauenfeld',
            name: 'Frauenfeld',
            population: 26088,
            lat: 47.5575,
            lng: 8.8989,
            wikipedia: 'https://de.wikipedia.org/wiki/Frauenfeld',
            description: 'Frauenfeld ist die Kantonshauptstadt des Thurgaus und ein regionales Verwaltungs- und Wirtschaftszentrum. Die Stadt bietet eine gute Infrastruktur und ist Standort für mittelständische Unternehmen.',
          },
          {
            slug: 'kreuzlingen',
            name: 'Kreuzlingen',
            population: 23362,
            lat: 47.6500,
            lng: 9.1833,
            wikipedia: 'https://de.wikipedia.org/wiki/Kreuzlingen',
            description: 'Kreuzlingen liegt am Bodensee direkt an der Grenze zu Konstanz und profitiert von der grenzüberschreitenden Zusammenarbeit. Die Stadt ist ein Standort für Handel und Dienstleistungen in der Bodenseeregion.',
          },
        ],
      },
      {
        slug: 'uri',
        name: 'Uri',
        cities: [
          {
            slug: 'altdorf',
            name: 'Altdorf',
            population: 9431,
            lat: 46.8808,
            lng: 8.6381,
            wikipedia: 'https://de.wikipedia.org/wiki/Altdorf_UR',
            description: 'Altdorf ist der Hauptort des Kantons Uri und ein Verwaltungszentrum am Gotthard-Korridor. Die Gemeinde bietet ein ruhiges Umfeld und profitiert von der strategischen Verkehrslage zwischen Nord und Süd.',
          },
        ],
      },
      {
        slug: 'waadt',
        name: 'Waadt',
        cities: [
          {
            slug: 'lausanne',
            name: 'Lausanne',
            population: 140202,
            lat: 46.5197,
            lng: 6.6323,
            wikipedia: 'https://de.wikipedia.org/wiki/Lausanne',
            description: 'Lausanne ist Sitz der EPFL, einer der weltweit führenden technischen Hochschulen, und des Internationalen Olympischen Komitees. Die Stadt ist ein Innovationszentrum für Robotik, KI und Life Sciences.',
          },
          {
            slug: 'yverdon-les-bains',
            name: 'Yverdon-les-Bains',
            population: 30345,
            lat: 46.7785,
            lng: 6.6410,
            wikipedia: 'https://de.wikipedia.org/wiki/Yverdon-les-Bains',
            description: 'Yverdon-les-Bains ist ein Standort der HEIG-VD und beherbergt das Y-Parc, einen der größten Technologieparks der Westschweiz. Die Stadt ist ein wachsendes Zentrum für Innovation und Unternehmertum.',
          },
          {
            slug: 'montreux',
            name: 'Montreux',
            population: 26845,
            lat: 46.4312,
            lng: 6.9107,
            wikipedia: 'https://de.wikipedia.org/wiki/Montreux',
            description: 'Montreux ist weltweit bekannt für das Montreux Jazz Festival und liegt am Genfersee. Die Stadt zieht internationale Unternehmen an und bietet ein inspirierendes Umfeld für kreative und digitale Industrien.',
          },
        ],
      },
      {
        slug: 'wallis',
        name: 'Wallis',
        cities: [
          {
            slug: 'sitten',
            name: 'Sion',
            population: 35259,
            lat: 46.2333,
            lng: 7.3667,
            wikipedia: 'https://de.wikipedia.org/wiki/Sitten',
            description: 'Sion (Sitten) ist die Hauptstadt des Kantons Wallis und ein Zentrum für Energie und Landwirtschaftstechnologie. Die HES-SO Valais-Wallis fördert Forschung und Innovation in der Region.',
          },
          {
            slug: 'brig-glis',
            name: 'Brig-Glis',
            population: 13354,
            lat: 46.3167,
            lng: 7.9833,
            wikipedia: 'https://de.wikipedia.org/wiki/Brig-Glis',
            description: 'Brig-Glis liegt am Eingang zum Simplontunnel und ist ein Verkehrsknotenpunkt im Oberwallis. Die Stadt ist ein regionales Zentrum für Handel und Dienstleistungen.',
          },
        ],
      },
      {
        slug: 'zug',
        name: 'Zug',
        cities: [
          {
            slug: 'zug',
            name: 'Zug',
            population: 30934,
            lat: 47.1724,
            lng: 8.5175,
            wikipedia: 'https://de.wikipedia.org/wiki/Zug_(Stadt)',
            description: 'Zug ist als „Crypto Valley" bekannt und ein globales Zentrum für Blockchain-Technologie und Kryptowährungen. Die Stadt bietet ein äußerst attraktives steuerliches Umfeld und beherbergt zahlreiche internationale Technologieunternehmen.',
          },
          {
            slug: 'baar',
            name: 'Baar',
            population: 25070,
            lat: 47.1956,
            lng: 8.5283,
            wikipedia: 'https://de.wikipedia.org/wiki/Baar_ZG',
            description: 'Baar ist die größte Gemeinde im Kanton Zug und Sitz zahlreicher internationaler Unternehmen und Holdings. Die Gemeinde profitiert von niedrigen Steuern und der Nähe zu Zürich.',
          },
        ],
      },
      {
        slug: 'zuerich',
        name: 'Zürich',
        cities: [
          {
            slug: 'zuerich',
            name: 'Zürich',
            population: 421878,
            lat: 47.3769,
            lng: 8.5417,
            wikipedia: 'https://de.wikipedia.org/wiki/Z%C3%BCrich',
            description: 'Zürich ist das Wirtschaftszentrum der Schweiz und beheimatet die ETH Zürich, eine der weltweit führenden technischen Universitäten. Die Stadt ist ein Hotspot für FinTech, Blockchain und künstliche Intelligenz.',
          },
          {
            slug: 'winterthur',
            name: 'Winterthur',
            population: 115104,
            lat: 47.5006,
            lng: 8.7291,
            wikipedia: 'https://de.wikipedia.org/wiki/Winterthur',
            description: 'Winterthur ist die sechstgrößte Stadt der Schweiz und ein bedeutender Industrie- und Bildungsstandort. Die ZHAW (Zürcher Hochschule für Angewandte Wissenschaften) treibt Innovation in Informatik und Ingenieurwesen voran.',
          },
          {
            slug: 'uster',
            name: 'Uster',
            population: 36469,
            lat: 47.3472,
            lng: 8.7208,
            wikipedia: 'https://de.wikipedia.org/wiki/Uster',
            description: 'Uster ist eine Stadt im Zürcher Oberland und Teil der Metropolregion Zürich. Die Stadt bietet eine gute Verkehrsanbindung und ist ein attraktiver Wohn- und Wirtschaftsstandort für IT-Fachkräfte.',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // LIECHTENSTEIN
  // ==========================================================================
  {
    slug: 'liechtenstein',
    name: 'Liechtenstein',
    demonym: 'liechtensteinische',
    metaDescription:
      'Finden Sie qualifizierte Remote-Entwickler in Liechtenstein. Engagieren Sie Top-Programmierer aus dem innovativen Fürstentum im Herzen Europas.',
    regions: [
      {
        slug: 'liechtenstein',
        name: 'Liechtenstein',
        cities: [
          {
            slug: 'vaduz',
            name: 'Vaduz',
            population: 5774,
            lat: 47.1410,
            lng: 9.5215,
            wikipedia: 'https://de.wikipedia.org/wiki/Vaduz',
            description: 'Vaduz ist die Hauptstadt Liechtensteins und ein bedeutendes Finanzzentrum mit zahlreichen Banken und Treuhandgesellschaften. Das Fürstentum setzt zunehmend auf FinTech und Blockchain-Regulierung als Innovationstreiber.',
          },
          {
            slug: 'schaan',
            name: 'Schaan',
            population: 6228,
            lat: 47.1647,
            lng: 9.5108,
            wikipedia: 'https://de.wikipedia.org/wiki/Schaan',
            description: 'Schaan ist die bevölkerungsreichste Gemeinde Liechtensteins und Sitz von Hilti, einem weltweit führenden Unternehmen für Befestigungstechnik. Die Gemeinde ist ein wichtiger Industriestandort im Fürstentum.',
          },
          {
            slug: 'balzers',
            name: 'Balzers',
            population: 4733,
            lat: 47.0667,
            lng: 9.5000,
            wikipedia: 'https://de.wikipedia.org/wiki/Balzers',
            description: 'Balzers ist eine Gemeinde im Süden Liechtensteins und Sitz von Oerlikon Balzers, einem Spezialisten für Oberflächentechnik. Die Gemeinde verbindet Hochtechnologie mit alpiner Lebensqualität.',
          },
          {
            slug: 'triesen',
            name: 'Triesen',
            population: 5240,
            lat: 47.1069,
            lng: 9.5275,
            wikipedia: 'https://de.wikipedia.org/wiki/Triesen',
            description: 'Triesen ist eine Gemeinde südlich von Vaduz und ein Standort für Gewerbe und Dienstleistungen. Die Gemeinde bietet ein attraktives Umfeld für Unternehmen im Fürstentum Liechtenstein.',
          },
          {
            slug: 'eschen',
            name: 'Eschen',
            population: 4478,
            lat: 47.2108,
            lng: 9.5222,
            wikipedia: 'https://de.wikipedia.org/wiki/Eschen',
            description: 'Eschen ist eine Gemeinde im Liechtensteiner Unterland mit einer Mischung aus Gewerbe und Landwirtschaft. Die Gemeinde ist ein ruhiger Standort mit guter Anbindung an das Rheintal.',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // LUXEMBURG
  // ==========================================================================
  {
    slug: 'luxemburg',
    name: 'Luxemburg',
    demonym: 'luxemburgische',
    metaDescription:
      'Engagieren Sie erfahrene Remote-Entwickler in Luxemburg. Greifen Sie auf den mehrsprachigen Talentpool erstklassiger Programmierer im Großherzogtum zu.',
    regions: [
      {
        slug: 'luxemburg',
        name: 'Luxemburg',
        cities: [
          {
            slug: 'luxemburg-stadt',
            name: 'Luxemburg',
            population: 132778,
            lat: 49.6117,
            lng: 6.1300,
            wikipedia: 'https://de.wikipedia.org/wiki/Luxemburg_(Stadt)',
            description: 'Luxemburg-Stadt ist die Hauptstadt des Großherzogtums und ein führendes europäisches Finanzzentrum mit Sitz zahlreicher EU-Institutionen. Die Stadt hat ein wachsendes Tech-Ökosystem mit Schwerpunkten in FinTech, Cybersicherheit und Weltraumtechnologie.',
          },
          {
            slug: 'esch-an-der-alzette',
            name: 'Esch an der Alzette',
            population: 36228,
            lat: 49.4958,
            lng: 5.9806,
            wikipedia: 'https://de.wikipedia.org/wiki/Esch_an_der_Alzette',
            description: 'Esch an der Alzette ist die zweitgrößte Stadt Luxemburgs und beheimatet die Universität Luxemburg sowie das Innovationsviertel Belval. Die Stadt wandelt sich vom Stahlstandort zu einem modernen Zentrum für Forschung und Technologie.',
          },
          {
            slug: 'differdingen',
            name: 'Differdingen',
            population: 28711,
            lat: 49.5244,
            lng: 5.8914,
            wikipedia: 'https://de.wikipedia.org/wiki/Differdingen',
            description: 'Differdingen ist eine Stadt im Südwesten Luxemburgs mit industrieller Tradition in der Stahlindustrie. Die Stadt befindet sich im Wandel und setzt auf Diversifizierung der lokalen Wirtschaft.',
          },
          {
            slug: 'duedelingen',
            name: 'Düdelingen',
            population: 21750,
            lat: 49.4811,
            lng: 6.0867,
            wikipedia: 'https://de.wikipedia.org/wiki/D%C3%BCdelingen',
            description: 'Düdelingen ist eine Stadt im Süden Luxemburgs, die sich von einem Stahlstandort zu einem Kultur- und Technologiezentrum entwickelt. Das Nationale Dokumentationszentrum für Industriekultur dokumentiert den Strukturwandel.',
          },
          {
            slug: 'ettelbrueck',
            name: 'Ettelbrück',
            population: 9398,
            lat: 49.8475,
            lng: 6.1042,
            wikipedia: 'https://de.wikipedia.org/wiki/Ettelbr%C3%BCck',
            description: 'Ettelbrück ist ein regionales Zentrum im Norden Luxemburgs und ein wichtiger Markt- und Handelsort. Die Stadt bietet ein solides wirtschaftliches Umfeld und ist ein Knotenpunkt im Schienennetz des Landes.',
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/**
 * Returns an array of all country slugs.
 */
export function getAllCountrySlugs(): string[] {
  return countries.map((c) => c.slug);
}

/**
 * Returns every { country, region } path combination.
 */
export function getAllRegionPaths(): { country: string; region: string }[] {
  return countries.flatMap((c) =>
    c.regions.map((r) => ({ country: c.slug, region: r.slug })),
  );
}

/**
 * Returns every { country, region, city } path combination.
 */
export function getAllCityPaths(): {
  country: string;
  region: string;
  city: string;
}[] {
  return countries.flatMap((c) =>
    c.regions.flatMap((r) =>
      r.cities.map((ci) => ({
        country: c.slug,
        region: r.slug,
        city: ci.slug,
      })),
    ),
  );
}

/**
 * Find a country by its slug.
 */
export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

/**
 * Find a region and its parent country by path segments.
 */
export function getRegionByPath(
  countrySlug: string,
  regionSlug: string,
): { country: Country; region: Region } | undefined {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return undefined;
  const region = country.regions.find((r) => r.slug === regionSlug);
  if (!region) return undefined;
  return { country, region };
}

/**
 * Find a city and its parent region and country by path segments.
 */
export function getCityByPath(
  countrySlug: string,
  regionSlug: string,
  citySlug: string,
): { country: Country; region: Region; city: City } | undefined {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return undefined;
  const region = country.regions.find((r) => r.slug === regionSlug);
  if (!region) return undefined;
  const city = region.cities.find((ci) => ci.slug === citySlug);
  if (!city) return undefined;
  return { country, region, city };
}

/**
 * Get the top N cities by population for a given country.
 */
export function getTopCitiesForCountry(
  countrySlug: string,
  limit: number,
): City[] {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return [];
  const allCities = country.regions.flatMap((r) => r.cities);
  return allCities.sort((a, b) => b.population - a.population).slice(0, limit);
}

/**
 * Get nearby regions (neighbours by index position) for a given region.
 * Returns up to `limit` other regions from the same country, excluding the
 * specified region itself.
 */
export function getNearbyRegions(
  countrySlug: string,
  regionSlug: string,
  limit: number,
): Region[] {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return [];
  const regionIndex = country.regions.findIndex((r) => r.slug === regionSlug);
  if (regionIndex === -1) return [];

  // Collect regions near the current index, alternating before/after
  const nearby: Region[] = [];
  let offset = 1;
  while (nearby.length < limit && offset < country.regions.length) {
    const after = regionIndex + offset;
    if (after < country.regions.length) {
      nearby.push(country.regions[after]);
    }
    if (nearby.length >= limit) break;
    const before = regionIndex - offset;
    if (before >= 0) {
      nearby.push(country.regions[before]);
    }
    offset++;
  }
  return nearby.slice(0, limit);
}

/**
 * Get city data with an embedded OpenStreetMap URL for the city location.
 */
export function getCityData(countrySlug: string, regionSlug: string, citySlug: string) {
  const result = getCityByPath(countrySlug, regionSlug, citySlug);
  if (!result) return undefined;
  return {
    ...result,
    mapUrl: `https://www.openstreetmap.org/export/embed.html?bbox=${result.city.lng - 0.05}%2C${result.city.lat - 0.03}%2C${result.city.lng + 0.05}%2C${result.city.lat + 0.03}&layer=mapnik&marker=${result.city.lat}%2C${result.city.lng}`,
  };
}
