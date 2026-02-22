import React from 'react';
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { COLORS, FONT } from '../styles';

interface GlowTextProps {
  text: string;
  delay?: number;
  fontSize?: number;
  color?: string;
  glowColor?: string;
  fontWeight?: number;
  style?: React.CSSProperties;
}

export const GlowText: React.FC<GlowTextProps> = ({
  text,
  delay = 0,
  fontSize = 72,
  color = COLORS.white,
  glowColor = COLORS.blue,
  fontWeight = 900,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = frame - delay;

  if (adjustedFrame < 0) return null;

  const progress = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 8, mass: 0.3, stiffness: 200 },
  });

  const glowPulse = interpolate(
    Math.sin(adjustedFrame * 0.08),
    [-1, 1],
    [15, 35]
  );

  const scale = interpolate(progress, [0, 1], [1.3, 1]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        fontFamily: FONT,
        fontSize,
        fontWeight,
        color,
        opacity,
        transform: `scale(${scale})`,
        textShadow: `0 0 ${glowPulse}px ${glowColor}, 0 0 ${glowPulse * 2}px ${glowColor}40`,
        ...style,
      }}
    >
      {text}
    </div>
  );
};
