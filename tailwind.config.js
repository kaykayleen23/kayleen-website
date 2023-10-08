/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '17': '-8deg',
      },
      margin: {
        '30': '40rem',
      },
      width: {
        'lg': '27rem',
        '90': '90%',
      },
      boxShadow: {
        'mine': '1px 1px 1px 1px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [require("daisyui")],
}

