/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-gray" : "#EBEBE8",
        "dark-charcoal" : "#31352E",
        "moss-green" : "#778A35",
      },
    },
    fontFamily: {
      Jakarta: ["'Plus Jakarta Sans', sans-serif"],
    },
    container: {
      center: true,
    }
  },
  plugins: [],
};

