import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "About", icon: "circle-info", link: "/aboutme/" },
  { text: "CV", icon: "file-lines", link: "/cv/" },
  {
    text: "GitHub",
    icon: "github",
    link: "https://github.com/okhsunrog/",
  },
]);
