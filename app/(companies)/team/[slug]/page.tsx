import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { getAllTeamMembers, getTeamMemberBySlug, TeamMember } from '@/app/data/team-members';
import HireButton from './HireButton';

/* ---------- Static generation ---------- */

export function generateStaticParams() {
  return getAllTeamMembers().map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) {
    return { title: 'Team Member Not Found | HireDeveloper.sg' };
  }
  return {
    title: `Hire ${member.nameEn} - ${member.roleEn} | HireDeveloper.sg`,
    description: `${member.nameEn} is a ${member.roleEn} based in ${member.location} with ${member.yearsExperience} years of experience. Hire vetted remote talent on HireDeveloper.sg.`,
  };
}

/* ---------- Helpers ---------- */

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

const avatarGradients = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-violet-600',
  'from-orange-500 to-amber-600',
  'from-rose-500 to-pink-600',
  'from-cyan-500 to-sky-600',
];

/* ---------- Page ---------- */

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const gradient = avatarGradients[member.id % avatarGradients.length];

  // Related members: up to 3 others
  const related = getAllTeamMembers()
    .filter((m) => m.slug !== member.slug)
    .slice(0, 3);

  const isAvailableNow =
    member.availability === 'Full-time & Freelance' ||
    member.availability === 'Freelance';

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* ====== Breadcrumb ====== */}
      <nav
        aria-label="Breadcrumb"
        className="bg-black border-b border-white/5"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-4">
          <ol className="flex items-center flex-wrap text-sm gap-2">
            <li>
              <a
                href="/"
                className="text-white/50 hover:text-[rgb(0,159,255)] transition-colors"
              >
                Home
              </a>
            </li>
            <li className="text-white/30">/</li>
            <li>
              <a
                href="/hire-developers"
                className="text-white/50 hover:text-[rgb(0,159,255)] transition-colors"
              >
                Talent
              </a>
            </li>
            <li className="text-white/30">/</li>
            <li className="text-white font-medium">{member.nameEn}</li>
          </ol>
        </div>
      </nav>

      {/* ====== Hero / Profile Header ====== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Gradient ring */}
                <div
                  className={`w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${gradient} p-1`}
                >
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-5xl md:text-6xl font-bold text-white/90">
                      {getInitials(member.nameEn)}
                    </span>
                  </div>
                </div>
                {/* Vetted badge */}
                <div className="absolute bottom-2 right-2 w-10 h-10 bg-[rgb(23,162,69)] rounded-full flex items-center justify-center border-4 border-black">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {member.nameEn}
              </h1>

              <p className="text-xl text-[rgb(0,159,255)] font-semibold mb-6">
                {member.roleEn}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                {/* Location */}
                <span className="flex items-center gap-1.5 text-sm text-white/70">
                  <svg
                    className="w-4 h-4 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {member.location}
                </span>

                {/* Availability badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    isAvailableNow
                      ? 'bg-[rgb(23,162,69)]/15 text-[rgb(23,162,69)]'
                      : 'bg-yellow-500/15 text-yellow-400'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isAvailableNow ? 'bg-[rgb(23,162,69)]' : 'bg-yellow-400'
                    }`}
                  />
                  {member.availability}
                </span>

                {/* Hourly rate */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">
                  {member.hourlyRate}
                </span>
              </div>

              {/* CTA */}
              <HireButton memberName={member.nameEn} />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Main Content ====== */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pb-24 space-y-16">
        {/* --- About --- */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-[#0050ff]" />
            About
          </h2>
          <p className="text-white/80 leading-relaxed text-lg max-w-3xl">
            {member.bioEn}
          </p>
        </section>

        {/* --- Specialty --- */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-[#0050ff]" />
            Specialty
          </h2>
          <div className="p-6 rounded-lg bg-gradient-to-r from-[#0050ff]/10 to-transparent border border-[#0050ff]/20 max-w-3xl">
            <h3 className="text-lg font-semibold text-[rgb(0,159,255)] mb-2">
              {member.skill}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {member.skillLabelEn}
            </p>
          </div>
        </section>

        {/* --- Experience --- */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-[#0050ff]" />
            Experience
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            {/* Years */}
            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-lg px-6 py-4">
              <span className="text-3xl font-bold text-[rgb(0,159,255)]">
                {member.yearsExperience}+
              </span>
              <span className="text-sm text-white/60">
                Years of
                <br />
                Experience
              </span>
            </div>

            {/* Previous companies */}
            {member.previousCompanies.map((company) => (
              <div
                key={company}
                className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-lg px-5 py-4"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">
                    {company.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-white/80">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- Certifications --- */}
        {member.certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#0050ff]" />
              Certifications
            </h2>
            <div className="flex flex-wrap gap-3">
              {member.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-lg text-sm text-white/80"
                >
                  <svg
                    className="w-4 h-4 text-[rgb(0,159,255)] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  {cert}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* --- Languages --- */}
        {member.languages.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#0050ff]" />
              Languages
            </h2>
            <div className="flex flex-wrap gap-3">
              {member.languages.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm font-medium text-white/80"
                >
                  <svg
                    className="w-4 h-4 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  {lang}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* --- Tools & Technologies --- */}
        {member.toolsUsed.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#0050ff]" />
              Tools &amp; Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {member.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg bg-[#0050ff]/10 border border-[#0050ff]/20 text-sm font-medium text-[rgb(0,159,255)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ====== Bottom CTA ====== */}
        <section className="pt-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#0050ff]/20 to-[rgb(0,159,255)]/10 border border-[#0050ff]/20 p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to work with {member.nameEn}?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Get started risk-free. $0 until you hire. We will match you with{' '}
              {member.nameEn} or similar vetted talent within 48 hours.
            </p>
            <HireButton
              memberName={member.nameEn}
              large
            />
          </div>
        </section>

        {/* ====== Related Team Members ====== */}
        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#0050ff]" />
              More Vetted Talent
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((other) => {
                const otherGradient =
                  avatarGradients[other.id % avatarGradients.length];
                return (
                  <a
                    key={other.slug}
                    href={`/team/${other.slug}`}
                    className="group block rounded-xl bg-white/[0.03] border border-white/10 p-6 hover:border-[#0050ff]/40 hover:bg-white/[0.05] transition-all duration-200"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {/* Small avatar */}
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${otherGradient} p-0.5 flex-shrink-0`}
                      >
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <span className="text-sm font-bold text-white/90">
                            {getInitials(other.nameEn)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold group-hover:text-[rgb(0,159,255)] transition-colors">
                          {other.nameEn}
                        </h3>
                        <p className="text-sm text-white/50">{other.roleEn}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {other.location}
                      </span>
                      <span className="text-xs text-white/40">
                        {other.yearsExperience}+ yrs
                      </span>
                      <span className="text-xs font-semibold text-[rgb(0,159,255)]">
                        {other.hourlyRate}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {other.toolsUsed.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[11px] bg-white/[0.06] text-white/50 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                      {other.toolsUsed.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[11px] text-white/30">
                          +{other.toolsUsed.length - 4}
                        </span>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
