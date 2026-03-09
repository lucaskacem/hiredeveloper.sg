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
import { CountUp } from '../components/CountUp';
import { Particles } from '../components/Particles';

// AIDA: INTEREST — Proof that backs the claim
const CLIENT_LOGOS = [
  'Spotify', 'Automattic', 'Udacity', 'Hopper', 'Hims', 'Splice',
];

export const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [210, 240], [1, 0], {
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
      {/* Background photo — office team */}
      <Img
        src={staticFile('images/video/office-team.jpg')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.1,
          filter: 'brightness(0.6)',
        }}
      />

      <Particles count={20} color={COLORS.blue} speed={0.4} />

      {/* Pre-headline — credibility trigger */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          width: '100%',
          textAlign: 'center',
          opacity: interpolate(frame, [5, 20], [0, 1], {
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
          }),
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
          }}
        >
          The Numbers Don&apos;t Lie
        </div>
      </div>

      {/* Stats grid */}
      <div
        style={{
          position: 'absolute',
          top: 130,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 70,
          padding: '0 120px',
        }}
      >
        <CountUp
          to={90000}
          suffix="+"
          delay={15}
          duration={50}
          fontSize={68}
          color={COLORS.blue}
          labelText="Vetted Developers"
        />
        <CountUp
          to={48}
          delay={30}
          duration={25}
          fontSize={68}
          color={COLORS.green}
          labelText="Hour Matching"
          suffix="h"
        />
        <CountUp
          to={60}
          delay={45}
          duration={35}
          fontSize={68}
          color={COLORS.blue}
          labelText="Cost Savings"
          suffix="%"
          prefix="Up to "
        />
        <CountUp
          to={2}
          delay={60}
          duration={15}
          fontSize={68}
          color={COLORS.green}
          labelText="Acceptance Rate"
          suffix="%"
          prefix="Top "
        />
      </div>

      {/* Trust bar */}
      <div
        style={{
          position: 'absolute',
          top: 400,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 700,
            color: COLORS.white,
            opacity: interpolate(frame, [80, 100], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          ⭐ 4.9/5 Rating &nbsp;&nbsp;|&nbsp;&nbsp; 97% Client Satisfaction &nbsp;&nbsp;|&nbsp;&nbsp; $0 Until You Hire
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          position: 'absolute',
          top: 470,
          left: '50%',
          transform: 'translateX(-50%)',
          width: interpolate(frame, [100, 125], [0, 500], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          height: 1,
          background: `linear-gradient(90deg, transparent, ${COLORS.blue}, transparent)`,
        }}
      />

      {/* Trusted by section */}
      <div
        style={{
          position: 'absolute',
          top: 510,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 16,
            color: COLORS.gray500,
            textTransform: 'uppercase',
            letterSpacing: 3,
            opacity: interpolate(frame, [110, 125], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
            marginBottom: 30,
          }}
        >
          Trusted by companies you know
        </div>

        {/* Logo row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 80,
          }}
        >
          {CLIENT_LOGOS.map((logo, i) => {
            const logoProgress = spring({
              frame: Math.max(0, frame - (120 + i * 8)),
              fps,
              config: { damping: 10, mass: 0.4 },
            });

            return (
              <div
                key={logo}
                style={{
                  fontFamily: FONT,
                  fontSize: 28,
                  fontWeight: 700,
                  color: COLORS.white,
                  opacity: logoProgress * 0.7,
                  transform: `translateY(${interpolate(logoProgress, [0, 1], [20, 0])}px)`,
                  letterSpacing: 1,
                }}
              >
                {logo}
              </div>
            );
          })}
        </div>
      </div>

      {/* Singapore-specific bottom note */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          width: '100%',
          textAlign: 'center',
          opacity: interpolate(frame, [170, 190], [0, 1], {
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
          🇸🇬 #1 Remote Talent Platform for Singapore Businesses
        </div>
      </div>
    </AbsoluteFill>
  );
};
