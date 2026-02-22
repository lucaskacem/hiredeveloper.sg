import React from 'react';
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { COLORS, FONT } from '../styles';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  style?: React.CSSProperties;
  type?: 'fadeUp' | 'typewriter' | 'scaleIn' | 'slideLeft';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  fontSize = 48,
  color = COLORS.white,
  fontWeight = 700,
  style = {},
  type = 'fadeUp',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = frame - delay;

  if (adjustedFrame < 0) return null;

  if (type === 'typewriter') {
    const charsToShow = Math.floor(
      interpolate(adjustedFrame, [0, text.length * 2], [0, text.length], {
        extrapolateRight: 'clamp',
      })
    );
    return (
      <div
        style={{
          fontFamily: FONT,
          fontSize,
          fontWeight,
          color,
          ...style,
        }}
      >
        {text.slice(0, charsToShow)}
        {charsToShow < text.length && (
          <span
            style={{
              opacity: Math.sin(adjustedFrame * 0.3) > 0 ? 1 : 0,
              color: COLORS.blue,
            }}
          >
            |
          </span>
        )}
      </div>
    );
  }

  const springConfig = { fps, damping: 12, mass: 0.5 };
  const progress = spring({ frame: adjustedFrame, fps, config: springConfig });

  const opacity = interpolate(progress, [0, 1], [0, 1]);

  let transform = '';
  if (type === 'fadeUp') {
    const y = interpolate(progress, [0, 1], [40, 0]);
    transform = `translateY(${y}px)`;
  } else if (type === 'scaleIn') {
    const scale = interpolate(progress, [0, 1], [0.7, 1]);
    transform = `scale(${scale})`;
  } else if (type === 'slideLeft') {
    const x = interpolate(progress, [0, 1], [100, 0]);
    transform = `translateX(${x}px)`;
  }

  return (
    <div
      style={{
        fontFamily: FONT,
        fontSize,
        fontWeight,
        color,
        opacity,
        transform,
        ...style,
      }}
    >
      {text}
    </div>
  );
};
