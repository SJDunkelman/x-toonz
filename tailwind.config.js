module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
      'from-light-violet',
      'to-pink',
      'to-blue',
      'to-[#4A4CBA]',
      'to-medium-blue',
      'to-lime-green',
      'to-red',
      'to-light-green',
  ],
  theme: {
    extend: {
        screens: {
            'md': '990px',
            'lg': '1140px',
        },
        fontFamily: {
            cabin: ["Cabin", "sans-serif"],
            caslon: ["Libre Caslon Text", "serif"],
            inter: ["Inter", "sans-serif"],
        },
        colors: {
            'darker-blue': '#153282',
            'blue': '#1F4DA5',
            'dark-blue': '#163383',
            'medium-blue': '#244B94',
            'dark-violet': '#6C32A5',
            'pink': '#9B4AB0',
            'light-pink': '#FFAFF0',
            'light-violet': '#D4C5E2',
            'red': '#933030',
            'lime-green': '#35A37D',
            'light-green': '#71CAB7',
        },
        backgroundImage: {
            'sky-top': "url('../images/backgrounds/sky-top-1.png')",
            'sky-bottom': "url('../images/backgrounds/sky-bottom.png')",
            'sky-middle': "url('../images/backgrounds/sky-middle-1.png')",
            'sky-middle-short': "url('../images/backgrounds/sky-middle-2.png')",
            'roadmap': "url('../images/roadmap/roadmap.png')",
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
    },
  },
  plugins: [],
}
