const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        colors: {
            primary: {
                "50": "#EAE9FB",
                "100": "#C5C2F5",
                "200": "#A09AEE",
                "300": "#7B73E8",
                "400": "#564CE1",
                "500": "#3124DB",
                "600": "#271DAF",
                "700": "#1D1683",
                "800": "#140F57",
                "900": "#0A072C",
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
