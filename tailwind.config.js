/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      'xs': '482px',
      'sm': '640px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
      colors: {
        primary: {
            '50': '#faf5fe',
            '100': '#F6F4F7',
            '200': '#e8d4fa',
            '300': '#DAD2DE',
            '400': '#c485ed',
            '500': '#A38EAD',
            '600': '#8549A1', //dark color theme
            '700': '#7729a2',
            '800': '#642484',
            '900': '#481d5c', //light color theme
            '950': '#340b47',
        },
        secondary: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#95959B',
          '400': '#8C8C8C',
          '500': '#6d6d6d',
          '600': '#565660',
          '700': '#4f4f4f',
          '800': '#424242',
          '900': '#2C2C38',
          '950': '#20202A',
        }
      }
    },
  },
  plugins: [],
}

