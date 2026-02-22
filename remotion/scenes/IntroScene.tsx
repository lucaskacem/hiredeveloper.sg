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
import { GlowText } from '../components/GlowText';
import { Particles } from '../components/Particles';

// AIDA: ATTENTION — Stop the scroll, UAE-first, premium feel
export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cinematic zoom on skyline
  const zoom = interpolate(frame, [0, 150], [1.15, 1], {
    extrapolateRight: 'clamp',
  });

  // Flash in (wow effect)
  const flash = interpolate(frame, [0, 8], [1, 0], {
    extrapolateRight: 'clamp',
  });

  // Fade out
  const fadeOut = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Line wipe
  const lineWidth = interpolate(frame, [35, 60], [0, 800], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // UAE Flag scale-in with bounce
  const flagProgress = spring({
    frame: Math.max(0, frame - 2),
    fps,
    config: { damping: 8, mass: 0.4, stiffness: 180 },
  });

  // Flag pulse glow
  const flagGlow = interpolate(
    Math.sin(frame * 0.06),
    [-1, 1],
    [10, 30]
  );

  // Premium top line
  const topLineWidth = interpolate(frame, [0, 40], [0, 1920], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeOut }}>
      {/* Premium accent line at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: topLineWidth,
          height: 3,
          background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.green}, ${COLORS.blue})`,
          zIndex: 50,
        }}
      />

      {/* Dubai skyline with parallax zoom */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: `scale(${zoom})`,
          opacity: 0.2,
        }}
      >
        <Img
          src={staticFile('images/dubai/skyline.svg')}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 'auto',
            filter: `brightness(0.6) hue-rotate(${interpolate(frame, [0, 150], [0, 15])}deg)`,
          }}
        />
      </div>

      {/* Particles */}
      <Particles count={40} color={COLORS.blue} speed={1.5} />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `radial-gradient(ellipse at 50% 40%, ${COLORS.blue}12 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {/* UAE Flag — First thing visible */}
        <div
          style={{
            fontSize: 80,
            marginBottom: 16,
            opacity: flagProgress,
            transform: `scale(${interpolate(flagProgress, [0, 1], [0.3, 1])})`,
            filter: `drop-shadow(0 0 ${flagGlow}px ${COLORS.green}80)`,
          }}
        >
          🇦🇪
        </div>

        {/* Brand name */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 28,
            fontWeight: 600,
            color: COLORS.gray300,
            letterSpacing: 6,
            textTransform: 'uppercase',
            marginBottom: 20,
            opacity: interpolate(frame, [5, 18], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
            textShadow: `0 0 20px ${COLORS.blue}40`,
          }}
        >
          HireDeveloper.ae
        </div>

        {/* Main headline — Power words */}
        <GlowText
          text="Hire the Top 2%"
          delay={8}
          fontSize={92}
          color={COLORS.white}
          glowColor={COLORS.blue}
        />

        <GlowText
          text="Remote Talent"
          delay={16}
          fontSize={92}
          color={COLORS.blue}
          glowColor={COLORS.blue}
          style={{ marginTop: -5 }}
        />

        {/* Animated line */}
        <div
          style={{
            width: lineWidth,
            height: 4,
            background: `linear-gradient(90deg, transparent, ${COLORS.blue}, ${COLORS.green}, transparent)`,
            marginTop: 24,
            borderRadius: 2,
          }}
        />

        {/* KEY MESSAGE — In your team in 48h */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 42,
            fontWeight: 700,
            color: COLORS.green,
            marginTop: 24,
            opacity: interpolate(frame, [45, 58], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
            transform: `translateY(${interpolate(frame, [45, 58], [30, 0], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            })}px)`,
            textShadow: `0 0 30px ${COLORS.green}60`,
            letterSpacing: 2,
          }}
        >
          In Your Team in 48h · Ready to Work
        </div>

        {/* UAE city badges */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 32,
            opacity: interpolate(frame, [65, 78], [0, 1], {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp',
            }),
          }}
        >
          {['🇦🇪 Dubai', '🇦🇪 Abu Dhabi', '🇦🇪 All 7 Emirates'].map((city, i) => (
            <span
              key={city}
              style={{
                fontFamily: FONT,
                fontSize: 17,
                fontWeight: 600,
                color: COLORS.white,
                backgroundColor: `${COLORS.white}08`,
                border: `1px solid ${COLORS.white}20`,
                padding: '8px 22px',
                borderRadius: 30,
                opacity: interpolate(frame, [65 + i * 8, 75 + i * 8], [0, 1], {
                  extrapolateRight: 'clamp',
                  extrapolateLeft: 'clamp',
                }),
              }}
            >
              {city}
            </span>
          ))}
        </div>
      </AbsoluteFill>

      {/* Flash overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.white,
          opacity: flash,
          zIndex: 100,
        }}
      />
    </AbsoluteFill>
  );
};
