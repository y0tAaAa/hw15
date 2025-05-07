module.exports = {
  content: ["./src/**/*.{html,js,css}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        'text-main': '#333333',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 