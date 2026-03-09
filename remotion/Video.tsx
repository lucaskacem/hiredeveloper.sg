import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { SCENES, COLORS } from './styles';
import { IntroScene } from './scenes/IntroScene';
import { ProblemScene } from './scenes/ProblemScene';
import { StatsScene } from './scenes/StatsScene';
import { HowItWorksScene } from './scenes/HowItWorksScene';
import { RolesScene } from './scenes/RolesScene';
import { TestimonialScene } from './scenes/TestimonialScene';
import { SingaporeFocusScene } from './scenes/SingaporeFocusScene';
import { CTAScene } from './scenes/CTAScene';

export const MarketingVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black }}>
      {/* ATTENTION — Hook with Singapore flag + Singapore skyline */}
      <Sequence from={SCENES.intro.start} durationInFrames={SCENES.intro.duration}>
        <IntroScene />
      </Sequence>

      {/* ATTENTION — Agitate the pain */}
      <Sequence from={SCENES.problem.start} durationInFrames={SCENES.problem.duration}>
        <ProblemScene />
      </Sequence>

      {/* INTEREST — Proof & social proof */}
      <Sequence from={SCENES.stats.start} durationInFrames={SCENES.stats.duration}>
        <StatsScene />
      </Sequence>

      {/* INTEREST — Simple 3-step process */}
      <Sequence from={SCENES.howItWorks.start} durationInFrames={SCENES.howItWorks.duration}>
        <HowItWorksScene />
      </Sequence>

      {/* DESIRE — Expertise breadth */}
      <Sequence from={SCENES.roles.start} durationInFrames={SCENES.roles.duration}>
        <RolesScene />
      </Sequence>

      {/* DESIRE — Social proof & trust */}
      <Sequence from={SCENES.testimonial.start} durationInFrames={SCENES.testimonial.duration}>
        <TestimonialScene />
      </Sequence>

      {/* DESIRE — Singapore-specific value */}
      <Sequence from={SCENES.sgFocus.start} durationInFrames={SCENES.sgFocus.duration}>
        <SingaporeFocusScene />
      </Sequence>

      {/* ACTION — CTA with urgency */}
      <Sequence from={SCENES.cta.start} durationInFrames={SCENES.cta.duration}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
