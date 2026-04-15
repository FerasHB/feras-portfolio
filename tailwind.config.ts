import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090F',
        surface: '#11131A',
        surface2: '#171A24',
        border: 'rgba(255,255,255,0.08)',
        text: '#F5F7FF',
        muted: '#A7AFCC',
        accent: '#7C8CFF',
        accent2: '#8E5CFF',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,140,255,0.16), 0 24px 80px rgba(124,140,255,0.18)',
        soft: '0 20px 60px rgba(0,0,0,0.35)',
        premium: '0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px -4px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.06)',
        'premium-hover': '0 0 0 1px rgba(255,255,255,0.08), 0 16px 48px -8px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.12)',
        'inner-glow': 'inset 0 1px 1px rgba(255,255,255,0.15)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(124,140,255,0.22), transparent 34%), radial-gradient(circle at 80% 20%, rgba(142,92,255,0.18), transparent 28%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
