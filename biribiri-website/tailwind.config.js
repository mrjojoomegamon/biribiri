/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors from design system
        'bg-primary': '#1a1a1a',
        'bg-secondary': '#2a2a2a',
        'accent': '#e31e24',
        'accent-hover': '#c41e24',
        
        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'text-accent': '#e31e24',
        'text-highlight': '#ffd700',
        
        // Interface colors
        'border': '#333333',
        'overlay': 'rgba(0, 0, 0, 0.8)',
        'shadow': 'rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'title': 'clamp(2.5rem, 5vw, 4rem)',
        'subtitle': 'clamp(1.2rem, 2.5vw, 1.8rem)',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem', 
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
        'xxl': '8rem',
      },
      maxWidth: {
        'container': '1400px',
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'button': '0 4px 16px rgba(227, 30, 36, 0.3)',
        'text': '2px 2px 4px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'hover-lift': 'hoverLift 0.3s ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2px)' },
        },
      },
      screens: {
        'mobile': '768px',
        'tablet': '1024px', 
        'desktop': '1400px',
      },
    },
  },
  plugins: [],
}