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
import { GlowText } from '../components/GlowText';

// AIDA: ACTION — Urgency, scarcity, risk reversal, premium feel
export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Pulse animation — draws the eye
  const pulse = interpolate(
    Math.sin(frame * 0.12),
    [-1, 1],
    [0.96, 1.04]
  );

  const glowIntensity = interpolate(
    Math.sin(frame * 0.1),
    [-1, 1],
    [0.3, 0.7]
  );

  // Final fade to black
  const fadeToBlack = interpolate(frame, [320, 360], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Flag entrance
  const flagProgress = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 8, mass: 0.4 },
  });

  // Premium rotating glow
  const rotateGlow = frame * 0.5;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.black,
        opacity: fadeIn,
      }}
    >
      <Particles count={35} color={COLORS.green} speed={0.8} />

      {/* Animated gradient background */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse at 50% 45%, ${COLORS.green}${Math.round(glowIntensity * 18).toString(16).padStart(2, '0')} 0%, transparent 55%),
            radial-gradient(circle at ${50 + Math.sin(rotateGlow * 0.02) * 20}% ${50 + Math.cos(rotateGlow * 0.02) * 20}%, ${COLORS.blue}08 0%, transparent 40%)
          `,
        }}
      />

      {/* Premium top accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: interpolate(frame, [5, 30], [0, 800], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          height: 2,
          background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
        }}
      />

      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* UAE flag */}
        <div
          style={{
            fontSize: 60,
            marginBottom: 12,
            opacity: flagProgress,
            transform: `scale(${interpolate(flagProgress, [0, 1], [0.3, 1])})`,
          }}
        >
          🇦🇪
        </div>

        {/* Urgency pre-line */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 20,
            fontWeight: 600,
            color: COLORS.gold,
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 18,
            opacity: interpolate(frame, [8, 22], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          Your Competitors Are Already Hiring Remotely
        </div>

        {/* Main CTA — GlowText for premium feel */}
        <GlowText
          text="Your New Developer"
          delay={12}
          fontSize={80}
          color={COLORS.white}
          glowColor={COLORS.blue}
        />
        <GlowText
          text="Starts in 48 Hours"
          delay={18}
          fontSize={80}
          color={COLORS.green}
          glowColor={COLORS.green}
          style={{ marginTop: -8 }}
        />

        {/* Subtext — "in your team" message */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 500,
            color: COLORS.gray300,
            marginTop: 16,
            opacity: interpolate(frame, [35, 50], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          In your Slack. In your standup. Shipping code from day one.
        </div>

        {/* CTA Button — premium with glow */}
        <div
          style={{
            marginTop: 40,
            opacity: interpolate(frame, [50, 65], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
            transform: `scale(${pulse})`,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 30,
              fontWeight: 700,
              color: COLORS.white,
              background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.greenDark})`,
              padding: '22px 70px',
              borderRadius: 50,
              boxShadow: `0 0 50px ${COLORS.green}60, 0 0 100px ${COLORS.green}20, inset 0 1px 0 ${COLORS.white}20`,
            }}
          >
            Get Your Free Match Now →
          </div>
        </div>

        {/* Risk reversal */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 18,
            fontWeight: 500,
            color: COLORS.gray300,
            marginTop: 18,
            opacity: interpolate(frame, [70, 85], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          $0 until you hire · No commitment · Cancel anytime
        </div>

        {/* URL — premium glow */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 40,
            fontWeight: 700,
            color: COLORS.blue,
            marginTop: 36,
            letterSpacing: 2,
            opacity: interpolate(frame, [90, 110], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
            textShadow: `0 0 25px ${COLORS.blue}50, 0 0 50px ${COLORS.blue}20`,
          }}
        >
          hiredeveloper.ae
        </div>

        {/* Trust footer pills */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            marginTop: 28,
            opacity: interpolate(frame, [115, 135], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          {[
            '⭐ 4.8/5 Rating',
            '97% Satisfaction',
            '90,000+ Developers',
            '$0 Until You Hire',
          ].map((item, i) => (
            <div
              key={i}
              style={{
                fontFamily: FONT,
                fontSize: 15,
                fontWeight: 600,
                color: COLORS.gray300,
                backgroundColor: `${COLORS.white}06`,
                padding: '8px 18px',
                borderRadius: 20,
                border: `1px solid ${COLORS.white}12`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </AbsoluteFill>

      {/* Fade to black */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.black,
          opacity: fadeToBlack,
          zIndex: 100,
        }}
      />
    </AbsoluteFill>
  );
};
