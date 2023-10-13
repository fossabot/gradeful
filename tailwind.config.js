/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        slate: {
          50: 'rgb(248 250 252)',
          100: 'rgb(241 245 249)',
          150: 'rgb(235 240 247)',
          200: 'rgb(226 232 240)',
          250: 'rgb(217 225 233)',
          300: 'rgb(203 213 225)',
          350: 'rgb(179 191 204)',
          400: 'rgb(148 163 184)',
          450: 'rgb(128 147 169)',
          500: 'rgb(100 116 139)',
          550: 'rgb(82 95 114)',
          600: 'rgb(71 85 105)',
          650: 'rgb(61 74 94)',
          700: 'rgb(51 65 85)',
          750: 'rgb(40 53 70)',
          800: 'rgb(30 41 59)',
          850: 'rgb(23 31 43)',
          900: 'rgb(15 23 42)',
          950: 'rgb(2 6 23)',
          1000: 'rgb(0 0 0)',
        },
      },
    },
  },
  plugins: [],
}

