/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'source-code': ['"Source Code Pro"']
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

