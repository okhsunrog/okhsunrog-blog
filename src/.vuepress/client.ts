import { defineClientConfig } from "vuepress/client";
import Duration from "./components/Duration.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Duration", Duration);
  },
});
