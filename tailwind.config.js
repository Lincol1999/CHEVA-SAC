/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        // 'brandPrimary': '#4CAF4F',
        'brandPrimary': '#122D69',
        'neutralGrey': '#717171',
        'gray90': '#18191F',
        'background': '#122D69',
      },

    },
  },
  // plugins: [
  //   require('flowbite/plugin')
  // ],
}

