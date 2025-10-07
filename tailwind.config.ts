import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'scroll': 'scroll 30s linear infinite',
        'scroll-fast': 'scroll 10s linear infinite',
        'scroll-faster': 'scroll 7s linear infinite',
        'scroll-projects': 'scrollReverse 6s linear infinite',
        'energy-flow': 'energyFlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        scrollReverse: {
          '0%': {
            transform: 'translateX(-33.333%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        energyFlow: {
          '0%': {
            transform: 'translateY(-50%) scaleY(0)',
            opacity: '0',
          },
          '10%': {
            transform: 'translateY(-30%) scaleY(0.5)',
            opacity: '0.3',
          },
          '30%': {
            transform: 'translateY(0%) scaleY(1)',
            opacity: '1',
          },
          '70%': {
            transform: 'translateY(70%) scaleY(1)',
            opacity: '1',
          },
          '90%': {
            transform: 'translateY(100%) scaleY(0.5)',
            opacity: '0.3',
          },
          '100%': {
            transform: 'translateY(130%) scaleY(0)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
