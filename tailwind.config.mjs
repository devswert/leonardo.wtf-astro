/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-light": "#FDF6EC",
        "brand-green": "#306564",
        "brand-green-light": "#D4D9D1",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        hornbill: ["Hornbill", "sans-serif"],
      },
    },
  },
  plugins: [],
};
