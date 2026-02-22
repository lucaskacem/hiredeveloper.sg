import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { COLORS } from '../styles';

interface ParticlesProps {
  count?: number;
  color?: string;
  speed?: number;
}

export const Particles: React.FC<ParticlesProps> = ({
  count = 30,
  color = COLORS.blue,
  speed = 1,
}) => {
  const frame = useCurrentFrame();

  // Generate deterministic particles
  const particles = Array.from({ length: count }, (_, i) => {
    const seed = i * 137.5;
    const x = ((seed * 7.3) % 1920);
    const startY = ((seed * 3.7) % 1080);
    const size = 2 + (seed % 4);
    const opacity = 0.1 + (seed % 5) / 10;
    const drift = Math.sin(frame * 0.02 * speed + seed) * 30;

    const y = (startY - frame * speed * (0.5 + (seed % 3) * 0.3)) % 1200;
    const adjustedY = y < -20 ? y + 1200 : y;

    return (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: x + drift,
          top: adjustedY,
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: color,
          opacity: opacity * interpolate(
            Math.sin(frame * 0.03 + seed),
            [-1, 1],
            [0.3, 1]
          ),
          filter: size > 4 ? `blur(1px)` : 'none',
        }}
      />
    );
  });

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
      {particles}
    </div>
  );
};
