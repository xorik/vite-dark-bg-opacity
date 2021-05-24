import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(30, 58, 138, ${opacityValue})`;
          }
          return `rgb(30, 58, 138)`;
        }
      }
    },
  },
  variants: {},
  plugins: [],
})
