import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, ruNavbar } from "./navbar/index.js";
import { enSidebar, ruSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://okhsunrog.dev",

  author: {
    name: "Okhsunrog",
    url: "https://okhsunrog.dev",
  },

  logo: "iconify:fa6-solid:gears",

  repo: "okhsunrog/okhsunrog-blog",

  docsDir: "src",

  blog: {
    avatar: "/images/profile.webp",
    medias: {
      Email: "mailto:me@okhsunrog.dev",
      GitHub: "https://github.com/okhsunrog",
      Reddit: "https://www.reddit.com/user/okhsunrog",
      Twitter: "https://x.com/okhsunrog",
      Youtube: "https://www.youtube.com/channel/UCdn80hzJKF8NxoAt0VU6wxw",
      VK: "https://vk.com/okhsunrog",
      // TODO
      // Habr: {
      //   icon: "/images/habr.png",
      //   link: "https://habr.com/ru/users/okhsunrog",
      // },
      Codeberg: {
        icon: "https://design.codeberg.org/logo-kit/icon.svg",
        link: "https://codeberg.org/okhsunrog",
      },
      Telegram: "https://t.me/okhsunrog",
    },
  },

  // Dark mode configuration
  darkmode: "toggle",

  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      displayFooter: false,
      blog: {
        description: "Embedded Systems Engineer, Rust enthusiast, and open-source advocate.",
        intro: "/aboutme/",
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/ru/": {
      navbar: ruNavbar,
      sidebar: ruSidebar,
      displayFooter: false,
      blog: {
        description: "Инженер встраиваемых систем, энтузиаст Rust и сторонник открытого исходного кода.",
        intro: "/ru/aboutme/",
      },
      metaLocales: {
        editLink: "Редактировать эту страницу на GitHub",
      },
    },
  },

  markdown: {
    figure: true,
    imgLazyload: true,
    gfm: true,
    codeTabs: true,
  },

  plugins: {
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    },
    icon: {
      prefix: "fa6-solid:",
    },
  },
});
