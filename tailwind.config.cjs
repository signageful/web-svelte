const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        colors: {
            primary: {
                "50": "#EBEFFA",
                "100": "#C6D1F1",
                "200": "#A1B4E7",
                "300": "#7D97DE",
                "400": "#587AD5",
                "500": "#335CCC",
                "600": "#294AA3",
                "700": "#1F377A",
                "800": "#142552",
                "900": "#0A1229"
            },
            dark: "#192132",
            body: colors.slate[900],
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
