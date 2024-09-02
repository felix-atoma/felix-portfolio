/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#96BB7C',       // Your primary green color
        'secondary': '#85a76e',     // Your darker green color
        'orange': '#F7931E',        // Your orange color
        'white': '#FFFFFF',         // White color
        'gray': '#D1D5DB',          // Light gray for borders and backgrounds
        'dark-gray': '#333333',     // Dark gray for text
        'light-gray': '#666666',    // Light gray for secondary text
      },
      backgroundImage: {
        'testimonial-bg': "url('/src/assets/testimonial-bg.png')", // Example background image
      },
      fontSize: {
        'xs': '0.75rem',  // Extra small font size
        'sm': '0.875rem', // Small font size
        'base': '1rem',   // Base font size
        'lg': '1.125rem', // Large font size
        'xl': '1.25rem',  // Extra large font size
        '2xl': '1.5rem',  // 2x Extra large font size
      },
    },
  },
  plugins: [],
}
