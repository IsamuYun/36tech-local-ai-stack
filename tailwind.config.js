/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Noto Serif SC', 'serif'],
        text: ['Manrope', 'Noto Sans SC', 'PingFang SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'monospace']
      },
      colors: {
        ink: '#1B1320',
        paper: '#F6F4F0',
        rust: '#C16A2E'
      }
    }
  },
  plugins: []
};
