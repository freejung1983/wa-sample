/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // STYLE_GUIDE Color Palette
        background: 'var(--background-dark)',
        foreground: 'var(--primary-text)',
        
        // Custom colors matching STYLE_GUIDE
        'primary-green': '#38E07A',
        'success-green': '#38E07A',
        'muted-green': '#16a34a',
        
        // Status colors
        'status-new': '#a1a1aa',
        'status-checkin': '#38E07A',
        'status-created': '#f59e0b',
        'status-ready': '#3b82f6',
        'status-completed': '#10b981',
        
        // MUI integration colors
        'mui-background': 'var(--mui-palette-background-default)',
        'mui-foreground': 'var(--mui-palette-text-primary)',
        'mui-surface': 'var(--mui-palette-background-paper)',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem',  // 352px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  important: true,
}
