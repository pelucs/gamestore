/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/src/assets/banner.png)",
        bannerHeadset: "url(/src/assets/banner-headset.png)",
        bannerCadeira: "url(/src/assets/banner-cadeira.png)"
      },
      screen: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px"
      },
      fontFamily: {
        sans: "Inter, sans-serif"
      },
      colors: {
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
        purple: {
          primary: '#8a4af3',
          secundary: '#673ab7'
        }
      }
    },
  },
  plugins: [],
}
