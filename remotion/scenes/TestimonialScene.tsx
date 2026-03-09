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

// AIDA: DESIRE — Social proof + "they're already on their team in 48h"
const TESTIMONIALS = [
  {
    name: 'Sarah T.',
    role: 'CTO, Singapore Fintech',
    quote: '"Found our entire dev team in 2 weeks. They were in our standup within 48 hours."',
    photo: staticFile('images/video/testimonial-sarah.jpg'),
    rating: 5,
    color: '#009FFF',
  },
  {
    name: 'Michael C.',
    role: 'VP Engineering, Marina Bay',
    quote: '"Our React developer was in our Slack on Day 1. Saved us 60% vs local hiring."',
    photo: staticFile('images/video/testimonial-michael.jpg'),
    rating: 5,
    color: '#17A245',
  },
];

export const TestimonialScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp' });
  const fadeOut = interpolate(frame, [185, 210], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Premium shimmer effect across the scene
  const shimmerX = interpolate(frame, [0, 210], [-200, 2200], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      {/* Background photo — devs collaborating */}
      <Img
        src={staticFile('images/video/devs-collab.jpg')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.12,
          filter: 'brightness(0.6)',
        }}
      />

      <Particles count={25} color={COLORS.gold} speed={0.3} />

      {/* Premium gradient accent line at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: interpolate(frame, [5, 30], [0, 600], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          height: 2,
          background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 55,
          width: '100%',
          textAlign: 'center',
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
            marginBottom: 10,
            opacity: interpolate(frame, [5, 18], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }),
          }}
        >
          Real Results From Real Singapore Companies
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 50,
            fontWeight: 800,
            color: COLORS.white,
            opacity: interpolate(frame, [8, 22], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }),
          }}
        >
          🇸🇬 Trusted by <span style={{ color: COLORS.blue }}>500+ Singapore Companies</span>
        </div>
      </div>

      {/* Testimonial cards */}
      <div
        style={{
          position: 'absolute',
          top: 220,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 50,
          padding: '0 140px',
        }}
      >
        {TESTIMONIALS.map((t, i) => {
          const cardDelay = 25 + i * 30;
          const progress = spring({
            frame: Math.max(0, frame - cardDelay),
            fps,
            config: { damping: 10, mass: 0.5 },
          });

          return (
            <div
              key={i}
              style={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: `${COLORS.white}06`,
                border: `1px solid ${COLORS.white}12`,
                borderRadius: 24,
                padding: '40px 35px',
                opacity: progress,
                transform: `translateX(${interpolate(progress, [0, 1], [i === 0 ? -80 : 80, 0])}px)`,
              }}
            >
              {/* Shimmer effect on card */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: shimmerX - i * 400,
                  width: 100,
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, ${COLORS.white}08, transparent)`,
                  transform: 'skewX(-15deg)',
                }}
              />

              {/* Stars */}
              <div style={{ fontSize: 22, marginBottom: 16, letterSpacing: 4 }}>
                {'⭐'.repeat(t.rating)}
              </div>

              {/* Quote */}
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 25,
                  fontWeight: 600,
                  color: COLORS.white,
                  lineHeight: 1.5,
                  marginBottom: 24,
                  fontStyle: 'italic',
                }}
              >
                {t.quote}
              </div>

              {/* Author — photo avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {/* Avatar photo */}
                <Img
                  src={t.photo}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    objectFit: 'cover',
                    boxShadow: `0 0 15px ${t.color}40`,
                    border: `2px solid ${t.color}60`,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: FONT,
                      fontSize: 20,
                      fontWeight: 700,
                      color: COLORS.white,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT,
                      fontSize: 16,
                      color: COLORS.gray300,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Key message — "In your team in 48h" */}
      <div
        style={{
          position: 'absolute',
          bottom: 140,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 36,
            fontWeight: 800,
            color: COLORS.green,
            opacity: interpolate(frame, [110, 130], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            transform: `scale(${interpolate(
              spring({ frame: Math.max(0, frame - 115), fps, config: { damping: 8, mass: 0.5 } }),
              [0, 1], [0.8, 1]
            )})`,
            textShadow: `0 0 30px ${COLORS.green}40`,
          }}
        >
          In Your Team in 48 Hours. Ready to Ship Code.
        </div>
      </div>

      {/* Bottom stats bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 70,
          opacity: interpolate(frame, [140, 160], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        {[
          { value: '4.8/5', label: 'Average Rating' },
          { value: '97%', label: 'Client Satisfaction' },
          { value: '10,000+', label: 'Successful Hires' },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FONT, fontSize: 34, fontWeight: 800, color: COLORS.blue }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: FONT, fontSize: 15, color: COLORS.gray300, marginTop: 4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
