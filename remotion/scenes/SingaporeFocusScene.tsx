import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  spring,
  useVideoConfig,
  staticFile,
} from 'remotion';
import { COLORS, FONT } from '../styles';
import { Particles } from '../components/Particles';

// AIDA: DESIRE — Singapore-specific value, "this is made for ME"
const SG_STATS = [
  { value: '17%', label: 'Corporate Tax', icon: '🏦' },
  { value: 'GMT+8', label: 'Timezone', icon: '🕐' },
  { value: '4,000+', label: 'Tech Startups', icon: '🚀' },
  { value: '#1', label: 'Ease of Business', icon: '🇸🇬' },
];

const SG_BENEFITS = ['Smart Nation', 'APAC Hub', 'English-Speaking', 'Startup-Friendly', 'IP Protection', 'Stable Gov'];

export const SingaporeFocusScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [245, 270], [1, 0], {
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
      {/* Background photo — Singapore skyline */}
      <Img
        src={staticFile('images/video/singapore-night.jpg')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.15,
          filter: 'brightness(0.6)',
        }}
      />

      <Particles count={25} color={COLORS.sgRed} speed={0.4} />

      {/* Singapore colors gradient */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${COLORS.sgRed}08 0%, transparent 50%, ${COLORS.white}05 100%)`,
        }}
      />

      {/* Title */}
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
            color: COLORS.sgRed,
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 10,
            opacity: interpolate(frame, [5, 18], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          🇸🇬 Purpose-Built for Singapore
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 56,
            fontWeight: 800,
            color: COLORS.white,
            opacity: interpolate(frame, [10, 25], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          Hub of Southeast Asia · Gateway to APAC
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 22,
            fontWeight: 500,
            color: COLORS.gray300,
            marginTop: 8,
            opacity: interpolate(frame, [20, 35], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          We understand the Singapore market because we&apos;re built for it.
        </div>
      </div>

      {/* Stats grid */}
      <div
        style={{
          position: 'absolute',
          top: 260,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 45,
          padding: '0 160px',
        }}
      >
        {SG_STATS.map((stat, i) => {
          const statDelay = 35 + i * 18;
          const progress = spring({
            frame: Math.max(0, frame - statDelay),
            fps,
            config: { damping: 12, mass: 0.5 },
          });

          return (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: 'center',
                opacity: progress,
                transform: `scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
                backgroundColor: `${COLORS.white}05`,
                border: `1px solid ${COLORS.white}10`,
                borderRadius: 16,
                padding: '28px 20px',
                boxShadow: `0 0 ${interpolate(progress, [0, 1], [0, 15])}px ${COLORS.blue}10`,
              }}
            >
              <div style={{ fontSize: 44, marginBottom: 10 }}>{stat.icon}</div>
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 40,
                  fontWeight: 800,
                  color: COLORS.blue,
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 17,
                  fontWeight: 500,
                  color: COLORS.gray300,
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Singapore Benefits */}
      <div
        style={{
          position: 'absolute',
          top: 540,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 16,
            fontWeight: 600,
            color: COLORS.gray500,
            textTransform: 'uppercase',
            letterSpacing: 3,
            marginBottom: 18,
            opacity: interpolate(frame, [110, 125], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          Why Singapore Companies Choose Us
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 18,
          }}
        >
          {SG_BENEFITS.map((benefit, i) => {
            const benefitProgress = spring({
              frame: Math.max(0, frame - (120 + i * 6)),
              fps,
              config: { damping: 10, mass: 0.3 },
            });
            return (
              <div
                key={benefit}
                style={{
                  fontFamily: FONT,
                  fontSize: 20,
                  fontWeight: 600,
                  color: COLORS.white,
                  backgroundColor: `${COLORS.sgRed}15`,
                  border: `1.5px solid ${COLORS.sgRed}40`,
                  padding: '10px 28px',
                  borderRadius: 30,
                  opacity: benefitProgress,
                  transform: `scale(${interpolate(benefitProgress, [0, 1], [0.7, 1])})`,
                }}
              >
                {benefit}
              </div>
            );
          })}
        </div>

        {/* Work week + benefits */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 19,
            fontWeight: 600,
            color: COLORS.gray300,
            marginTop: 30,
            opacity: interpolate(frame, [180, 200], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          Mon–Fri Aligned · English-Speaking Teams · World&apos;s Easiest Place to Do Business
        </div>
      </div>
    </AbsoluteFill>
  );
};
