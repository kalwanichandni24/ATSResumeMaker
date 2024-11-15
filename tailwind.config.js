module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Adjust the paths to your project structure
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',  // Include all folders where you use Tailwind
  ],
  theme: {
    extend: {
      colors: {
        customDarkBlue: '#001F3F', 
        customBeige: "#EAE4DD",
      },
    },
  },
  plugins: [],
};
