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

// AIDA: ATTENTION (agitate) — Make them FEEL the pain
const PAIN_POINTS = [
  { text: '3-6 months to hire', solution: '48h matching', icon: '⏳' },
  { text: 'Office + visa + benefits', solution: 'Save 40-60%', icon: '💸' },
  { text: 'No quality guarantee', solution: 'Top 2% vetted', icon: '❌' },
];

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  const fadeOut = interpolate(frame, [155, 180], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Shake effect — creates tension
  const shakeX = frame < 30 ? Math.sin(frame * 2) * interpolate(frame, [15, 30], [5, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }) : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      <Particles count={15} color={COLORS.red} speed={0.5} />

      {/* Title — Converting copy: agitate the problem */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          width: '100%',
          textAlign: 'center',
          transform: `translateX(${shakeX}px)`,
        }}
      >
        {/* Pre-headline — emotional trigger */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 20,
            fontWeight: 600,
            color: COLORS.red,
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 16,
            opacity: interpolate(frame, [3, 12], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }),
          }}
        >
          🇦🇪 UAE Companies Lose Millions Every Year
        </div>

        <div
          style={{
            fontFamily: FONT,
            fontSize: 64,
            fontWeight: 900,
            color: COLORS.white,
            opacity: interpolate(frame, [5, 18], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }),
          }}
        >
          Traditional Hiring is{' '}
          <span style={{ color: COLORS.red, textShadow: `0 0 30px ${COLORS.red}60` }}>Broken</span>
        </div>
      </div>

      {/* Pain → Solution cards */}
      <div
        style={{
          position: 'absolute',
          top: 280,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 50,
          padding: '0 100px',
        }}
      >
        {PAIN_POINTS.map((point, i) => {
          const cardDelay = 25 + i * 25;
          const strikeDelay = cardDelay + 35;
          const solDelay = strikeDelay + 8;

          const cardProgress = spring({
            frame: Math.max(0, frame - cardDelay),
            fps,
            config: { damping: 10, mass: 0.4, stiffness: 180 },
          });

          const strikeWidth = interpolate(frame, [strikeDelay, strikeDelay + 10], [0, 110], {
            extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
          });

          const solProgress = spring({
            frame: Math.max(0, frame - solDelay),
            fps,
            config: { damping: 8, mass: 0.3, stiffness: 250 },
          });

          return (
            <div
              key={i}
              style={{
                flex: 1,
                backgroundColor: `${COLORS.white}05`,
                border: `1px solid ${strikeWidth > 50 ? COLORS.green : COLORS.red}30`,
                borderRadius: 20,
                padding: '40px 30px',
                textAlign: 'center',
                opacity: cardProgress,
                transform: `translateY(${interpolate(cardProgress, [0, 1], [60, 0])}px) scale(${interpolate(cardProgress, [0, 1], [0.9, 1])})`,
              }}
            >
              <div style={{ fontSize: 50, marginBottom: 20 }}>{point.icon}</div>

              {/* Problem text with strikethrough */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 26,
                    fontWeight: 600,
                    color: strikeWidth > 50 ? COLORS.gray500 : COLORS.white,
                  }}
                >
                  {point.text}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-5%',
                    width: `${strikeWidth}%`,
                    height: 3,
                    backgroundColor: COLORS.red,
                    borderRadius: 2,
                    boxShadow: `0 0 10px ${COLORS.red}`,
                  }}
                />
              </div>

              {/* Solution — green = good */}
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 30,
                  fontWeight: 800,
                  color: COLORS.green,
                  marginTop: 30,
                  opacity: solProgress,
                  transform: `scale(${interpolate(solProgress, [0, 1], [0.5, 1])})`,
                  textShadow: `0 0 20px ${COLORS.green}40`,
                }}
              >
                ✓ {point.solution}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom urgency line */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          width: '100%',
          textAlign: 'center',
          opacity: interpolate(frame, [140, 155], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 22,
            fontWeight: 700,
            color: COLORS.gold,
          }}
        >
          Stop wasting time and money. There&apos;s a better way →
        </div>
      </div>
    </AbsoluteFill>
  );
};
