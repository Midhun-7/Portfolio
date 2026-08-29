/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        orb1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(80px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.9)' },
        },
        orb2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-60px, 40px) scale(0.95)' },
          '66%': { transform: 'translate(60px, -30px) scale(1.05)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-6px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        wave: 'wave 2.5s infinite',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'orb-1': 'orb1 18s ease-in-out infinite',
        'orb-2': 'orb2 14s ease-in-out infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      boxShadow: {
        glow: '0 0 30px rgba(59,130,246,0.3)',
        'glow-sm': '0 0 15px rgba(59,130,246,0.2)',
        card: '0 8px 40px rgba(0,0,0,0.5)',
        'card-hover': '0 24px 64px rgba(0,0,0,0.65)',
      },
    },
  },
  plugins: [],
};
