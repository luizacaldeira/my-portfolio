import { Config } from "tailwindcss";
import tailwindcssAnimated from "tailwindcss-animated";

const config = {
content: [
   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
   "./components/**/*.{js,ts,jsx,tsx,mdx}",
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
   extend: {
   fontFamily: {
      display: ['var(--font-display)'],
      mono: ['var(--font-mono)'],
   },
   animation: {
      shimmer: 'shimmer 1s linear infinite',
      'pulse-width': 'pulseWidth 3s ease-in-out infinite',
      'pulse-width-2': 'pulseWidth2 3.5s ease-in-out infinite',
      'pulse-width-3': 'pulseWidth3 4s ease-in-out infinite',
   },
   keyframes: {
      shimmer: {
         '0%': { backgroundPosition: '0% 50%' },
         '100%': { backgroundPosition: '200% 50%' },
      },
      pulseWidth: {
         '0%, 100%': { transform: 'scaleX(1)' },
         '50%': { transform: 'scaleX(0.8)' },
      },
      pulseWidth2: {
         '0%, 100%': { transform: 'scaleX(1)' },
         '50%': { transform: 'scaleX(0.7)' },
      },
      pulseWidth3: {
         '0%, 100%': { transform: 'scaleX(1)' },
         '50%': { transform: 'scaleX(0.85)' },
      },
   },
   },
},
plugins: [
   tailwindcssAnimated
],
};
export default config;