/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'Noto Sans SC', 'PingFang SC', 'system-ui', 'sans-serif'],
        text: ['Inter', 'Noto Sans SC', 'PingFang SC', 'system-ui', 'sans-serif'],
        mono: ['Inter', 'Noto Sans SC', 'PingFang SC', 'system-ui', 'sans-serif']
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
