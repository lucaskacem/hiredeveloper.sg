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

// AIDA: DESIRE — UAE-specific value, "this is made for ME"
const UAE_STATS = [
  { value: '0%', label: 'Income Tax', icon: '🏦' },
  { value: 'GMT+4', label: 'Timezone', icon: '🕐' },
  { value: '200+', label: 'Nationalities', icon: '🌍' },
  { value: '7', label: 'Emirates Covered', icon: '🇦🇪' },
];

const FREE_ZONES = ['DIC', 'DIFC', 'DSO', 'ADGM', 'Hub71', 'Shams'];

export const UAEFocusScene: React.FC = () => {
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
      <Particles count={25} color={COLORS.green} speed={0.4} />

      {/* Dubai skyline background */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          opacity: interpolate(frame, [15, 40], [0, 0.12], {
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
          }),
        }}
      >
        <Img
          src={staticFile('images/dubai/skyline.svg')}
          style={{
            width: '100%',
            height: 'auto',
            filter: 'brightness(0.5)',
          }}
        />
      </div>

      {/* UAE colors gradient */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${COLORS.green}08 0%, transparent 50%, ${COLORS.red}05 100%)`,
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
            color: COLORS.green,
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 10,
            opacity: interpolate(frame, [5, 18], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          🇦🇪 Purpose-Built for UAE
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
          Dubai · Abu Dhabi · All 7 Emirates
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
          We understand the UAE market because we&apos;re built here.
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
        {UAE_STATS.map((stat, i) => {
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

      {/* Free Zones */}
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
          Serving All Major Free Zones
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 18,
          }}
        >
          {FREE_ZONES.map((zone, i) => {
            const zoneProgress = spring({
              frame: Math.max(0, frame - (120 + i * 6)),
              fps,
              config: { damping: 10, mass: 0.3 },
            });
            return (
              <div
                key={zone}
                style={{
                  fontFamily: FONT,
                  fontSize: 20,
                  fontWeight: 600,
                  color: COLORS.white,
                  backgroundColor: `${COLORS.green}15`,
                  border: `1.5px solid ${COLORS.green}40`,
                  padding: '10px 28px',
                  borderRadius: 30,
                  opacity: zoneProgress,
                  transform: `scale(${interpolate(zoneProgress, [0, 1], [0.7, 1])})`,
                }}
              >
                {zone}
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
          Sunday–Thursday Aligned · Golden Visa Support · 100% Foreign Ownership
        </div>
      </div>
    </AbsoluteFill>
  );
};
