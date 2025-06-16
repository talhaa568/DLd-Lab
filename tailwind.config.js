/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        orangeColor: "#F4511F",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

