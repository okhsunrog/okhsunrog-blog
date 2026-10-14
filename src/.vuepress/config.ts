import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

// Capture once so SSR and browser bundles use the same month, even after deployment.
const buildMonth = new Date().toISOString().slice(0, 7);

export default defineUserConfig({
  base: "/",

  plugins: [
    {
      name: "build-month",
      define: {
        __BUILD_MONTH__: buildMonth,
      },
    },
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Okhsunrog's Blog",
      description: "Embedded Systems Engineer, Rust enthusiast, and open-source advocate.",
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Okhsunrog's Blog",
      description: "Инженер встраиваемых систем, энтузиаст Rust и сторонник открытого исходного кода.",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
