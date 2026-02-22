// HireDeveloper.ae Brand Styles for Remotion Video
export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#009FFF',
  blueDark: '#0066CC',
  green: '#17A245',
  greenDark: '#148D3C',
  buttonBlue: '#0050ff',
  gray100: '#F3F4F6',
  gray300: '#D1D5DB',
  gray500: '#6B7280',
  gray700: '#374151',
  gray900: '#111827',
  red: '#EF4444',
  redLight: '#FCA5A5',
  gold: '#F59E0B',
  purple: '#A855F7',
} as const;

export const FONT = 'Inter, system-ui, -apple-system, sans-serif';

export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
  durationInSeconds: 60,
  get durationInFrames() {
    return this.fps * this.durationInSeconds;
  },
} as const;

// Scene timing - FASTER pacing
export const SCENES = {
  intro: { start: 0, duration: 150 },        // 0-5s (faster hook)
  problem: { start: 150, duration: 180 },     // 5-11s
  stats: { start: 330, duration: 240 },       // 11-19s
  howItWorks: { start: 570, duration: 210 },  // 19-26s
  roles: { start: 780, duration: 180 },       // 26-32s
  testimonial: { start: 960, duration: 210 }, // 32-39s
  uaeFocus: { start: 1170, duration: 270 },   // 39-48s
  cta: { start: 1440, duration: 360 },        // 48-60s (longer CTA)
} as const;
