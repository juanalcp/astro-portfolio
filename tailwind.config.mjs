import animations from "@midudev/tailwind-animations";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,md,mdx,ts,tsx}"],
  theme: {
    colors: {
      white: "#f9f8fc",
      primary: "#f7a400",
      secondary: "#2a223b",
      tertiary: "eee",
      b: "#080117",
      "text-1": "#cccacf",
    },
  },
  plugins: [animations],
};
