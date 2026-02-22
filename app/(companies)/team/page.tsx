'use client';

import { useState, useMemo } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { getAllTeamMembers, type TeamMember } from '@/app/data/team-members';

const avatarGradients = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-violet-600',
  'from-orange-500 to-amber-600',
  'from-rose-500 to-pink-600',
  'from-cyan-500 to-sky-600',
];

const skillColors: Record<string, string> = {
  'ab-test-setup': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'analytics-tracking': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  'competitor-alternatives': 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  'content-strategy': 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  'copy-editing': 'bg-rose-500/15 text-rose-400 border-rose-500/30',
  'copywriting': 'bg-pink-500/15 text-pink-400 border-pink-500/30',
  'email-sequence': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
  'form-cro': 'bg-teal-500/15 text-teal-400 border-teal-500/30',
  'free-tool-strategy': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'launch-strategy': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  'marketing-ideas': 'bg-violet-500/15 text-violet-400 border-violet-500/30',
  'marketing-psychology': 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30',
  'onboarding-cro': 'bg-sky-500/15 text-sky-400 border-sky-500/30',
  'page-cro': 'bg-lime-500/15 text-lime-400 border-lime-500/30',
  'paid-ads': 'bg-red-500/15 text-red-400 border-red-500/30',
  'paywall-upgrade-cro': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  'popup-cro': 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  'pricing-strategy': 'bg-green-500/15 text-green-400 border-green-500/30',
  'product-marketing-context': 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  'programmatic-seo': 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  'referral-program': 'bg-pink-500/15 text-pink-300 border-pink-500/30',
  'schema-markup': 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  'seo-audit': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'signup-flow-cro': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  'social-content': 'bg-rose-500/15 text-rose-300 border-rose-500/30',
};

const allMembers = getAllTeamMembers();

const uniqueSkills = Array.from(new Set(allMembers.map((m) => m.skill))).sort();
const uniqueLocations = Array.from(new Set(allMembers.map((m) => m.location))).sort();
const uniqueAvailabilities = Array.from(new Set(allMembers.map((m) => m.availability))).sort();

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function getSkillLabel(member: TeamMember): string {
  return member.skillLabelEn;
}

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');

  const filteredMembers = useMemo(() => {
    return allMembers.filter((member) => {
      const matchesSearch =
        searchQuery === '' ||
        member.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.nameAr.includes(searchQuery) ||
        member.roleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.skillLabelEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.toolsUsed.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesSkill =
        selectedSkill === '' || member.skill === selectedSkill;
      const matchesLocation =
        selectedLocation === '' || member.location === selectedLocation;
      const matchesAvailability =
        selectedAvailability === '' ||
        member.availability === selectedAvailability;

      return matchesSearch && matchesSkill && matchesLocation && matchesAvailability;
    });
  }, [searchQuery, selectedSkill, selectedLocation, selectedAvailability]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedSkill('');
    setSelectedLocation('');
    setSelectedAvailability('');
  };

  const hasActiveFilters =
    searchQuery || selectedSkill || selectedLocation || selectedAvailability;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* ====== Hero Section ====== */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0050ff]/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0050ff]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 pt-20 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[rgb(23,162,69)] animate-pulse" />
            <span className="text-sm text-white/70 font-medium">25 Verified Specialists</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Meet Our Expert Team
          </h1>
          <p
            className="text-2xl md:text-3xl font-semibold text-white/40 mb-6"
            dir="rtl"
            lang="ar"
          >
            تعرف على فريق خبرائنا
          </p>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-3">
            25 specialists. 25 marketing skills. Based in Dubai &amp; Abu Dhabi.
          </p>
          <p
            className="text-base md:text-lg text-white/40 max-w-2xl mx-auto"
            dir="rtl"
            lang="ar"
          >
            ٢٥ متخصصاً. ٢٥ مهارة تسويقية. مقرهم دبي وأبوظبي.
          </p>
        </div>
      </section>

      {/* ====== Filter Bar ====== */}
      <section className="sticky top-[116px] z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by name, role, or tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.06] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0050ff]/50 focus:ring-1 focus:ring-[#0050ff]/30 transition-all"
              />
            </div>

            {/* Skill filter */}
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="bg-white/[0.06] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white/80 focus:outline-none focus:border-[#0050ff]/50 transition-all appearance-none cursor-pointer min-w-[180px]"
            >
              <option value="" className="bg-gray-900">All Skills</option>
              {uniqueSkills.map((skill) => {
                const member = allMembers.find((m) => m.skill === skill);
                return (
                  <option key={skill} value={skill} className="bg-gray-900">
                    {member?.skillLabelEn || skill}
                  </option>
                );
              })}
            </select>

            {/* Location filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-white/[0.06] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white/80 focus:outline-none focus:border-[#0050ff]/50 transition-all appearance-none cursor-pointer min-w-[140px]"
            >
              <option value="" className="bg-gray-900">All Locations</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc} className="bg-gray-900">
                  {loc}
                </option>
              ))}
            </select>

            {/* Availability filter */}
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="bg-white/[0.06] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white/80 focus:outline-none focus:border-[#0050ff]/50 transition-all appearance-none cursor-pointer min-w-[160px]"
            >
              <option value="" className="bg-gray-900">All Availability</option>
              {uniqueAvailabilities.map((avail) => (
                <option key={avail} value={avail} className="bg-gray-900">
                  {avail}
                </option>
              ))}
            </select>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white bg-white/[0.04] border border-white/10 rounded-lg hover:bg-white/[0.08] transition-all"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results count */}
          <div className="mt-3 text-sm text-white/40">
            Showing {filteredMembers.length} of {allMembers.length} team members
            {hasActiveFilters && (
              <span className="text-[rgb(0,159,255)]"> (filtered)</span>
            )}
          </div>
        </div>
      </section>

      {/* ====== Team Grid ====== */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No team members found</h3>
              <p className="text-white/40 mb-6">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 text-sm font-semibold bg-[#0050ff] hover:bg-[#0050ff]/80 rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => {
                const gradient =
                  avatarGradients[member.id % avatarGradients.length];
                const skillColor =
                  skillColors[member.skill] ||
                  'bg-white/10 text-white/60 border-white/20';
                const isAvailableNow =
                  member.availability === 'Full-time & Freelance' ||
                  member.availability === 'Freelance';

                return (
                  <div
                    key={member.slug}
                    className="group relative rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#0050ff]/40 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
                  >
                    {/* Top gradient accent */}
                    <div
                      className={`h-1 w-full bg-gradient-to-r ${gradient}`}
                    />

                    <div className="p-6">
                      {/* Avatar + Name row */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Avatar */}
                        <div
                          className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} p-0.5 flex-shrink-0`}
                        >
                          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                            <span className="text-base font-bold text-white/90">
                              {member.avatar || getInitials(member.nameEn)}
                            </span>
                          </div>
                        </div>

                        {/* Name + Role */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-white group-hover:text-[rgb(0,159,255)] transition-colors truncate">
                            {member.nameEn}
                          </h3>
                          <p
                            className="text-sm text-white/40 truncate"
                            dir="rtl"
                            lang="ar"
                          >
                            {member.nameAr}
                          </p>
                        </div>

                        {/* Availability dot */}
                        <div
                          className={`w-3 h-3 rounded-full flex-shrink-0 mt-1.5 ${
                            isAvailableNow ? 'bg-[rgb(23,162,69)]' : 'bg-yellow-500'
                          }`}
                          title={member.availability}
                        />
                      </div>

                      {/* Role */}
                      <p className="text-sm font-semibold text-[rgb(0,159,255)] mb-1">
                        {member.roleEn}
                      </p>
                      <p
                        className="text-xs text-white/30 mb-4"
                        dir="rtl"
                        lang="ar"
                      >
                        {member.roleAr}
                      </p>

                      {/* Skill badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${skillColor}`}
                        >
                          {getSkillLabel(member)}
                        </span>
                      </div>

                      {/* Meta row: location, experience */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-white/50">
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5 text-white/30"
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
                        <span>{member.yearsExperience}+ yrs experience</span>
                        <span className="font-semibold text-white/70">
                          {member.hourlyRate}
                        </span>
                      </div>

                      {/* Bio excerpt */}
                      <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3">
                        {member.bioEn}
                      </p>

                      {/* Previous companies */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        {member.previousCompanies.map((company) => (
                          <span
                            key={company}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] text-white/50"
                          >
                            <span className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center flex-shrink-0">
                              <span className="text-[8px] font-bold text-white">
                                {company.slice(0, 1)}
                              </span>
                            </span>
                            {company}
                          </span>
                        ))}
                      </div>

                      {/* Availability badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                            isAvailableNow
                              ? 'bg-[rgb(23,162,69)]/10 text-[rgb(23,162,69)]'
                              : 'bg-yellow-500/10 text-yellow-400'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isAvailableNow
                                ? 'bg-[rgb(23,162,69)]'
                                : 'bg-yellow-400'
                            }`}
                          />
                          {member.availability}
                        </span>
                      </div>

                      {/* View Profile button */}
                      <a
                        href={`/team/${member.slug}`}
                        className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-white/[0.06] border border-white/10 hover:bg-[#0050ff] hover:border-[#0050ff] text-white transition-all duration-200"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ====== Skills Cloud Section ====== */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          {/* Verified badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(23,162,69)]/10 border border-[rgb(23,162,69)]/20 mb-8">
            <svg
              className="w-5 h-5 text-[rgb(23,162,69)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold text-[rgb(23,162,69)]">
              Verified &amp; Vetted
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Each team member is a verified specialist
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-4">
            Every specialist on our team has been rigorously vetted for
            expertise in their specific marketing discipline. Here are the 25
            skills our team covers:
          </p>
          <p
            className="text-base text-white/30 max-w-2xl mx-auto mb-12"
            dir="rtl"
            lang="ar"
          >
            كل متخصص في فريقنا تم التحقق من خبرته بدقة في تخصصه التسويقي المحدد. إليكم المهارات الـ 25 التي يغطيها فريقنا:
          </p>

          {/* Skills pill cloud */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allMembers.map((member) => {
              const skillColor =
                skillColors[member.skill] ||
                'bg-white/10 text-white/60 border-white/20';
              return (
                <a
                  key={member.skill}
                  href={`/team/${member.slug}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border hover:scale-105 transition-transform ${skillColor}`}
                >
                  <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                  {member.skillLabelEn}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== Bottom CTA ====== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="rounded-2xl bg-gradient-to-r from-[#0050ff]/20 to-[rgb(0,159,255)]/10 border border-[#0050ff]/20 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to hire a marketing specialist?
            </h2>
            <p
              className="text-xl text-white/40 mb-2"
              dir="rtl"
              lang="ar"
            >
              هل أنت مستعد لتوظيف متخصص في التسويق؟
            </p>
            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
              $0 until you hire. Get matched with a vetted marketing expert
              within 48 hours. Risk-free.
            </p>
            <a
              href="/hire-marketers"
              className="inline-block px-8 py-4 text-base font-bold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
            >
              Hire Marketing Talent
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
