/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      textShadow: {
        default: "2px 2px 4px rgba(52, 50, 50, 0.1)",
        md: "2px 2px 5px rgba(52, 50, 50, 0.3)",
        lg: "2px 2px 10px rgba(52, 50, 50, 0.5)",
        xl: "2px 2px 15px rgba(52, 50, 50, 0.7)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-default": {
          textShadow: "2px 2px 4px rgba(52, 50, 50, 0.1)",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 5px rgba(52, 50, 50, 0.3)",
        },
        ".text-shadow-lg": {
          textShadow: "2px 2px 10px rgba(52, 50, 50, 0.5)",
        },
        ".text-shadow-xl": {
          textShadow: "2px 2px 15px rgba(52, 50, 50, 0.7)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
