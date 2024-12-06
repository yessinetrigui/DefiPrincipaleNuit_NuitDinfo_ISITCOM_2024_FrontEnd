/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Include Flowbite React components
  ],
  theme: {
    extend: {}, // Add custom styles if needed
  },
  plugins: [
    require('flowbite/plugin'), // Add Flowbite plugin
  ],
};
