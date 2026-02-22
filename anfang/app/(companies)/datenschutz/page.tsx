import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerkl\u00e4rung | Programmier-Anfang',
  description: 'Datenschutzerkl\u00e4rung von Programmier-Anfang. Informationen zur Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="text-[40px] font-bold text-gray-900 mb-4">
            Datenschutzerkl\u00e4rung
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Zuletzt aktualisiert: Februar 2026
          </p>

          {/* Verantwortliche Stelle */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Verantwortliche Stelle
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Verantwortlich f\u00fcr die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Programmier-Anfang<br />
              Musterstra\u00dfe 1<br />
              10115 Berlin<br />
              Deutschland<br />
              E-Mail: datenschutz@programmier-anfang.de
            </p>
          </section>

          {/* Erhebung und Speicherung */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Beim Besuch unserer Website werden automatisch Informationen durch den Browser \u00fcbermittelt und in sogenannten Server-Logfiles gespeichert. Diese Informationen umfassen:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-relaxed mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              Diese Daten werden nicht mit anderen Datenquellen zusammengef\u00fchrt. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung seiner Website.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Cookies
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endger\u00e4t gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher und effektiver zu gestalten.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Einige Cookies sind technisch notwendig und werden automatisch gesetzt (sogenannte \u201eSession-Cookies\u201c). Diese werden nach Ende Ihres Besuchs automatisch gel\u00f6scht. Andere Cookies verbleiben auf Ihrem Endger\u00e4t, bis Sie diese l\u00f6schen (\u201ePersistente Cookies\u201c).
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Sie k\u00f6nnen Ihren Browser so einstellen, dass Sie \u00fcber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalit\u00e4t unserer Website eingeschr\u00e4nkt sein.
            </p>
          </section>

          {/* Kontaktformular */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Kontaktformular
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f\u00fcr den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Die Verarbeitung der eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie k\u00f6nnen diese Einwilligung jederzeit widerrufen. Die Rechtm\u00e4\u00dfigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorg\u00e4nge bleibt vom Widerruf unber\u00fchrt.
            </p>
          </section>

          {/* Newsletter */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Newsletter
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Wenn Sie den auf der Website angebotenen Newsletter beziehen m\u00f6chten, ben\u00f6tigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, die uns die \u00dcberpr\u00fcfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters k\u00f6nnen Sie jederzeit widerrufen, etwa \u00fcber den \u201eAbmelden\u201c-Link im Newsletter. Die Rechtm\u00e4\u00dfigkeit der bereits erfolgten Datenverarbeitungsvorg\u00e4nge bleibt vom Widerruf unber\u00fchrt.
            </p>
          </section>

          {/* Analyse-Tools */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Analyse-Tools und Werbung
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Wir behalten uns vor, Analyse-Tools zur statistischen Auswertung der Nutzung unserer Website einzusetzen. Dabei k\u00f6nnen anonymisierte Nutzungsprofile erstellt werden. Die Analyse-Tools verwenden Cookies, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website erm\u00f6glichen.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Die durch Cookies erzeugten Informationen \u00fcber die Benutzung dieser Website werden in der Regel an einen Server \u00fcbertragen und dort gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          {/* Rechte der betroffenen Personen */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Rechte der betroffenen Personen
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Sie haben gegen\u00fcber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-relaxed mb-4">
              <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie k\u00f6nnen Auskunft \u00fcber Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie k\u00f6nnen die Berichtigung unrichtiger oder die Vervollst\u00e4ndigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf L\u00f6schung</strong> (Art. 17 DSGVO): Sie k\u00f6nnen die L\u00f6schung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Recht auf Einschr\u00e4nkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie k\u00f6nnen die Einschr\u00e4nkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Daten\u00fcbertragbarkeit</strong> (Art. 20 DSGVO): Sie k\u00f6nnen verlangen, dass wir Ihnen Ihre personenbezogenen Daten in einem strukturierten, g\u00e4ngigen und maschinenlesbaren Format \u00fcbermitteln.</li>
              <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie k\u00f6nnen jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einlegen.</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbeh\u00f6rde \u00fcber die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>

          {/* Datensicherheit */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Datensicherheit
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils h\u00f6chsten Verschl\u00fcsselungsstufe, die von Ihrem Browser unterst\u00fctzt wird. Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsma\u00dfnahmen, um Ihre Daten gegen zuf\u00e4llige oder vors\u00e4tzliche Manipulation, teilweisen oder vollst\u00e4ndigen Verlust, Zerst\u00f6rung oder den unbefugten Zugriff Dritter zu sch\u00fctzen.
            </p>
          </section>

          {/* Aktualitaet */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Aktualit\u00e4t und \u00c4nderung dieser Datenschutzerkl\u00e4rung
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Diese Datenschutzerkl\u00e4rung ist aktuell g\u00fcltig und hat den Stand Februar 2026. Durch die Weiterentwicklung unserer Website oder aufgrund ge\u00e4nderter gesetzlicher bzw. beh\u00f6rdlicher Vorgaben kann es notwendig werden, diese Datenschutzerkl\u00e4rung zu \u00e4ndern. Die jeweils aktuelle Datenschutzerkl\u00e4rung kann jederzeit auf dieser Seite abgerufen werden.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
