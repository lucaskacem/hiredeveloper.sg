import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen | Programmier-Anfang',
  description: 'Allgemeine Nutzungsbedingungen von Programmier-Anfang. Informationen zu Nutzungsrechten, Pflichten und Haftung.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NutzungsbedingungenPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="text-[40px] font-bold text-gray-900 mb-4">
            Nutzungsbedingungen
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Zuletzt aktualisiert: Februar 2026
          </p>

          {/* Geltungsbereich */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Geltungsbereich
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Diese Nutzungsbedingungen gelten f\u00fcr die Nutzung der Website und der Dienstleistungen von Programmier-Anfang (nachfolgend \u201eAnbieter\u201c). Mit der Nutzung unserer Website und Dienste erkl\u00e4ren Sie sich mit diesen Nutzungsbedingungen einverstanden.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Abweichende Bedingungen des Nutzers werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdr\u00fccklich schriftlich zu.
            </p>
          </section>

          {/* Leistungsbeschreibung */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Leistungsbeschreibung
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Programmier-Anfang betreibt eine Online-Plattform zur Vermittlung von Remote-Fachkr\u00e4ften in den Bereichen Softwareentwicklung, Design, Marketing und Projektmanagement. Unser Angebot umfasst:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-relaxed mb-4">
              <li>Vermittlung von gepr\u00fcften Freelance- und Vollzeit-Remote-Fachkr\u00e4ften</li>
              <li>Bereitstellung von Profilen und Bewertungen der Talente</li>
              <li>Unterst\u00fctzung im Einstellungsprozess</li>
              <li>Informationsangebote und Blog-Inhalte rund um Remote-Arbeit und Personalgewinnung</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              Der Anbieter beh\u00e4lt sich das Recht vor, das Angebot jederzeit zu \u00e4ndern, zu erweitern oder einzuschr\u00e4nken.
            </p>
          </section>

          {/* Registrierung und Nutzerkonto */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Registrierung und Nutzerkonto
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              F\u00fcr bestimmte Dienste ist eine Registrierung erforderlich. Bei der Registrierung sind wahrheitsgem\u00e4\u00dfe und vollst\u00e4ndige Angaben zu machen. Der Nutzer ist verpflichtet, seine Zugangsdaten vertraulich zu behandeln und vor dem Zugriff Dritter zu sch\u00fctzen.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Der Anbieter beh\u00e4lt sich das Recht vor, Nutzerkonten bei Verst\u00f6\u00dfen gegen diese Nutzungsbedingungen zu sperren oder zu l\u00f6schen.
            </p>
          </section>

          {/* Pflichten des Nutzers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Pflichten des Nutzers
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Der Nutzer verpflichtet sich, die Website und die angebotenen Dienste ausschlie\u00dflich f\u00fcr rechtm\u00e4\u00dfige Zwecke zu nutzen. Insbesondere ist es untersagt:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 leading-relaxed mb-4">
              <li>Falsche oder irref\u00fchrende Angaben bei der Registrierung oder im Nutzungsprozess zu machen</li>
              <li>Inhalte zu ver\u00f6ffentlichen, die gegen geltendes Recht versto\u00dfen oder Rechte Dritter verletzen</li>
              <li>Die Website oder ihre Infrastruktur \u00fcberm\u00e4\u00dfig zu belasten oder technische Sicherheitsmechanismen zu umgehen</li>
              <li>Automatisierte Systeme, Bots oder Scraper ohne ausdr\u00fcckliche Genehmigung zu verwenden</li>
              <li>Andere Nutzer zu bel\u00e4stigen, zu bedrohen oder in ihren Rechten zu beeintr\u00e4chtigen</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              Bei Verst\u00f6\u00dfen gegen diese Pflichten beh\u00e4lt sich der Anbieter das Recht vor, den Zugang zur Website zu sperren und gegebenenfalls Schadensersatzanspr\u00fcche geltend zu machen.
            </p>
          </section>

          {/* Geistiges Eigentum */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Geistiges Eigentum und Urheberrecht
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              S\u00e4mtliche Inhalte der Website, einschlie\u00dflich Texte, Grafiken, Logos, Bilder und Software, sind urheberrechtlich gesch\u00fctzt und Eigentum des Anbieters oder seiner Lizenzgeber.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Die Vervielf\u00e4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00dferhalb der Grenzen des Urheberrechts bed\u00fcrfen der vorherigen schriftlichen Zustimmung des Anbieters.
            </p>
          </section>

          {/* Haftungsbeschraenkung */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Haftungsbeschr\u00e4nkung
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Der Anbieter haftet unbeschr\u00e4nkt f\u00fcr Vorsatz und grobe Fahrl\u00e4ssigkeit. F\u00fcr leichte Fahrl\u00e4ssigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und nur in H\u00f6he des vorhersehbaren, vertragstypischen Schadens.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Die vorstehenden Haftungsbeschr\u00e4nkungen gelten nicht f\u00fcr Sch\u00e4den aus der Verletzung des Lebens, des K\u00f6rpers oder der Gesundheit sowie f\u00fcr Anspr\u00fcche nach dem Produkthaftungsgesetz.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Der Anbieter \u00fcbernimmt keine Gew\u00e4hr f\u00fcr die Eignung, Zuverl\u00e4ssigkeit oder Qualifikation der \u00fcber die Plattform vermittelten Fachkr\u00e4fte. Die endg\u00fcltige Auswahl und \u00dcberpr\u00fcfung der Kandidaten obliegt dem Auftraggeber.
            </p>
          </section>

          {/* Datenschutz */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Datenschutz
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Einzelheiten zur Erhebung, Verarbeitung und Nutzung Ihrer Daten entnehmen Sie bitte unserer{' '}
              <a href="/datenschutz" className="text-[rgb(0,159,255)] hover:underline">
                Datenschutzerkl\u00e4rung
              </a>
              .
            </p>
          </section>

          {/* Aenderungen der Nutzungsbedingungen */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. \u00c4nderungen der Nutzungsbedingungen
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Der Anbieter beh\u00e4lt sich vor, diese Nutzungsbedingungen jederzeit mit Wirkung f\u00fcr die Zukunft zu \u00e4ndern. Die aktuelle Fassung der Nutzungsbedingungen ist stets auf dieser Seite abrufbar. Durch die weitere Nutzung der Website nach einer \u00c4nderung erkl\u00e4ren Sie sich mit den ge\u00e4nderten Nutzungsbedingungen einverstanden.
            </p>
          </section>

          {/* Schlussbestimmungen */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Schlussbestimmungen
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand f\u00fcr alle Streitigkeiten aus oder im Zusammenhang mit diesen Nutzungsbedingungen ist, soweit gesetzlich zul\u00e4ssig, Berlin.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam sein oder werden, bleibt die Wirksamkeit der \u00fcbrigen Bestimmungen unber\u00fchrt. An die Stelle der unwirksamen Bestimmung tritt eine wirksame Bestimmung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am n\u00e4chsten kommt.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Die Europ\u00e4ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
