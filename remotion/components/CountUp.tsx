import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONT } from '../styles';

interface CountUpProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  duration?: number;
  fontSize?: number;
  color?: string;
  labelText?: string;
  labelColor?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  delay = 0,
  duration = 45,
  fontSize = 72,
  color = COLORS.blue,
  labelText,
  labelColor = COLORS.gray300,
}) => {
  const frame = useCurrentFrame();
  const adjustedFrame = frame - delay;

  if (adjustedFrame < 0) return null;

  const value = Math.floor(
    interpolate(adjustedFrame, [0, duration], [from, to], {
      extrapolateRight: 'clamp',
    })
  );

  const opacity = interpolate(adjustedFrame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ textAlign: 'center', opacity }}>
      <div
        style={{
          fontFamily: FONT,
          fontSize,
          fontWeight: 800,
          color,
          lineHeight: 1.1,
        }}
      >
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
      {labelText && (
        <div
          style={{
            fontFamily: FONT,
            fontSize: fontSize * 0.3,
            fontWeight: 500,
            color: labelColor,
            marginTop: 8,
          }}
        >
          {labelText}
        </div>
      )}
    </div>
  );
};
