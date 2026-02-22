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

// AIDA: INTEREST — Show simplicity, remove objections
const STEPS = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Share your role, tech stack, and budget. Takes 2 minutes.',
    icon: '📋',
  },
  {
    number: '02',
    title: 'Interview Top Matches',
    description: 'Meet pre-vetted, UAE-aligned candidates within 48 hours.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Hire & Scale Fast',
    description: 'Onboard your new team member. Pay only when satisfied.',
    icon: '🚀',
  },
];

export const HowItWorksScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [185, 210], [1, 0], {
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
      <Particles count={12} color={COLORS.green} speed={0.3} />

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 18,
            fontWeight: 600,
            color: COLORS.blue,
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 12,
            opacity: interpolate(frame, [5, 18], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          Dead Simple Process
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
          From Request to <span style={{ color: COLORS.green }}>Hire in 3 Steps</span>
        </div>
      </div>

      {/* Steps */}
      <div
        style={{
          position: 'absolute',
          top: 290,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 50,
          padding: '0 120px',
        }}
      >
        {STEPS.map((step, i) => {
          const stepDelay = 30 + i * 40;
          const progress = spring({
            frame: Math.max(0, frame - stepDelay),
            fps,
            config: { damping: 12, mass: 0.5 },
          });

          const lineWidth = interpolate(
            frame,
            [stepDelay + 25, stepDelay + 40],
            [0, 100],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          return (
            <React.Fragment key={i}>
              <div
                style={{
                  flex: 1,
                  textAlign: 'center',
                  opacity: progress,
                  transform: `translateY(${interpolate(progress, [0, 1], [50, 0])}px)`,
                }}
              >
                {/* Step circle with glow */}
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: `${COLORS.blue}15`,
                    border: `3px solid ${COLORS.blue}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: 44,
                    boxShadow: `0 0 ${interpolate(progress, [0, 1], [0, 20])}px ${COLORS.blue}40`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Step number */}
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 16,
                    fontWeight: 700,
                    color: COLORS.blue,
                    marginBottom: 10,
                    letterSpacing: 2,
                  }}
                >
                  STEP {step.number}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 28,
                    fontWeight: 700,
                    color: COLORS.white,
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 18,
                    fontWeight: 400,
                    color: COLORS.gray300,
                    lineHeight: 1.5,
                  }}
                >
                  {step.description}
                </div>
              </div>

              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: 40,
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 3,
                      background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.green})`,
                      borderRadius: 2,
                      opacity: lineWidth / 100,
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Risk-reversal badge — removes final objection */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          width: '100%',
          textAlign: 'center',
          opacity: interpolate(frame, [160, 180], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <span
          style={{
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 700,
            color: COLORS.green,
            backgroundColor: `${COLORS.green}15`,
            padding: '14px 40px',
            borderRadius: 40,
            border: `2px solid ${COLORS.green}40`,
            boxShadow: `0 0 30px ${COLORS.green}20`,
          }}
        >
          💰 $0 Until You Hire — Zero Risk, Zero Commitment
        </span>
      </div>
    </AbsoluteFill>
  );
};
