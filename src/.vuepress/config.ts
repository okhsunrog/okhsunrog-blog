import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

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
