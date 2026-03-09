'use client';

import { useLeadFormModal } from './LeadFormModalProvider';

interface Profile {
  name: string;
  location: string;
  badge: string;
  bio: string;
  skills: string[];
  availability: string;
  previousCompany: {
    name: string;
    logo: string;
  };
  avatar: string;
}

interface TalentShowcaseProps {
  heading: string;
  profiles: Profile[];
  category: string;
}

const profileGradients = [
  'bg-gradient-to-br from-blue-500 to-blue-600',
  'bg-gradient-to-br from-emerald-500 to-emerald-600',
  'bg-gradient-to-br from-purple-500 to-purple-600',
  'bg-gradient-to-br from-orange-500 to-orange-600',
  'bg-gradient-to-br from-rose-500 to-rose-600',
  'bg-gradient-to-br from-cyan-500 to-cyan-600',
];

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

export default function TalentShowcase({ heading, profiles, category }: TalentShowcaseProps) {
  const { openModal } = useLeadFormModal();
  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-[rgb(0,159,255)] transition-colors">Home</a>
          <span>/</span>
          <span className="text-gray-900 capitalize">{category}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-bold text-gray-900 mb-8 md:mb-12">
          {heading}
        </h2>

        {/* Profiles Grid */}
        <div className="space-y-8 mb-12">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  {profile.avatar && profile.avatar.startsWith('http') ? (
                    <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
                  ) : (
                    <div className={`w-16 h-16 rounded-full ${profileGradients[index % profileGradients.length]} flex items-center justify-center shadow-md`}>
                      <span className="text-white font-bold text-lg">{getInitials(profile.name)}</span>
                    </div>
                  )}
                  {/* Vetted Badge */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[rgb(23,162,69)] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  {/* Name and Location */}
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {profile.badge} in {profile.location}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-base text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {profile.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:gap-8">
                      {/* Availability */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Availability</div>
                        <div className="text-sm font-semibold text-gray-900">
                          {profile.availability}
                        </div>
                      </div>

                      {/* Previous Company */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Previously at</div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                            <span className="text-white font-bold text-[8px]">{profile.previousCompany.name.slice(0, 2).toUpperCase()}</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            {profile.previousCompany.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button onClick={openModal} className="px-6 py-2.5 text-sm font-semibold text-white bg-[rgb(23,162,69)] rounded-md hover:bg-[rgb(20,145,60)] transition-colors">
                      Hire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-lg p-6 sm:p-8 md:p-12">
          <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 md:mb-6">
            Discover more <span className="text-[rgb(0,159,255)]">remote {category}</span> today
          </h3>
          <button onClick={openModal} className="px-8 py-3 text-base font-semibold text-white bg-[rgb(23,162,69)] rounded-md hover:bg-[rgb(20,145,60)] transition-colors">
            Hire Now
          </button>
        </div>
      </div>
    </section>
  );
}
