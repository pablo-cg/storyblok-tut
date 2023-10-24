/** @type {import('tailwindcss').Config} */
export default {
  content: ['storyblok/**/*.{vue,js,ts}', 'components/**/*.{vue,js,ts}', 'pages/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
