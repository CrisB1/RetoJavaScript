/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'fauna': ['Fauna One', 'serif'],
        'source-code': ['"Source Code Pro"']
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

