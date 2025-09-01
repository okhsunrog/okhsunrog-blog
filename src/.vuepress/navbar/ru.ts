import { navbar } from "vuepress-theme-hope";

export const ruNavbar = navbar([
  "/ru/",
  { text: "Обо мне", icon: "circle-info", link: "/ru/aboutme/" },
  { text: "Резюме", icon: "file-lines", link: "/ru/cv/" },
  {
    text: "GitHub",
    icon: "github",
    link: "https://github.com/okhsunrog/",
  },
]); 