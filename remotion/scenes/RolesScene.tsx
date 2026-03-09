import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  spring,
  useVideoConfig,
} from 'remotion';
import { COLORS, FONT } from '../styles';
import { Particles } from '../components/Particles';

// AIDA: DESIRE — Show breadth of expertise, make them want it
const ROLE_CATEGORIES = [
  {
    title: '🖥️ Developers',
    color: COLORS.blue,
    roles: ['Python', 'React', 'Node.js', 'AI/ML', 'DevOps', 'Full-Stack', 'TypeScript', 'Cloud'],
  },
  {
    title: '📈 Marketers',
    color: COLORS.green,
    roles: ['SEO', 'Content', 'Paid Ads', 'CRO', 'Email', 'Social', 'Analytics', 'Copywriting'],
  },
  {
    title: '🎨 Designers & PMs',
    color: COLORS.purple,
    roles: ['UI/UX', 'Product Design', 'Brand', 'Product Manager', 'Project Manager', 'Assistants'],
  },
];

export const RolesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [155, 180], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.black,
        opacity: fadeIn * fadeOut,
      }}
    >
      <Particles count={15} color={COLORS.purple} speed={0.3} />

      {/* Title — Desire trigger */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 18,
            fontWeight: 600,
            color: COLORS.gold,
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 10,
            opacity: interpolate(frame, [3, 15], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          Whatever You Need, We Have It
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 52,
            fontWeight: 800,
            color: COLORS.white,
            opacity: interpolate(frame, [5, 20], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          200+ Technologies · <span style={{ color: COLORS.blue }}>One Platform</span>
        </div>
      </div>

      {/* Role categories */}
      <div
        style={{
          position: 'absolute',
          top: 200,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 35,
          padding: '0 140px',
        }}
      >
        {ROLE_CATEGORIES.map((category, catIndex) => {
          const catDelay = 18 + catIndex * 25;
          const catProgress = spring({
            frame: Math.max(0, frame - catDelay),
            fps,
            config: { damping: 10, mass: 0.3 },
          });

          return (
            <div
              key={catIndex}
              style={{
                opacity: catProgress,
                transform: `translateX(${interpolate(catProgress, [0, 1], [-40, 0])}px)`,
              }}
            >
              {/* Category title */}
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 20,
                  fontWeight: 700,
                  color: category.color,
                  textTransform: 'uppercase',
                  letterSpacing: 3,
                  marginBottom: 14,
                }}
              >
                {category.title}
              </div>

              {/* Role pills with bounce */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {category.roles.map((role, roleIndex) => {
                  const pillDelay = catDelay + 8 + roleIndex * 4;
                  const pillProgress = spring({
                    frame: Math.max(0, frame - pillDelay),
                    fps,
                    config: { damping: 10, mass: 0.4, stiffness: 200 },
                  });

                  return (
                    <div
                      key={roleIndex}
                      style={{
                        fontFamily: FONT,
                        fontSize: 20,
                        fontWeight: 600,
                        color: COLORS.white,
                        backgroundColor: `${category.color}20`,
                        border: `1.5px solid ${category.color}50`,
                        padding: '10px 24px',
                        borderRadius: 30,
                        opacity: pillProgress,
                        transform: `scale(${interpolate(pillProgress, [0, 1], [0.5, 1])})`,
                      }}
                    >
                      {role}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom SG badge */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          width: '100%',
          textAlign: 'center',
          opacity: interpolate(frame, [140, 160], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 20,
            fontWeight: 600,
            color: COLORS.gray300,
          }}
        >
          🇸🇬 All roles aligned with Singapore business hours · Monday–Friday
        </div>
      </div>
    </AbsoluteFill>
  );
};
