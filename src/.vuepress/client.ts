import { defineClientConfig } from "vuepress/client";
import Duration from "./components/Duration.vue";

export default defineClientConfig({
  enhance({ app, router }) {
    app.component("Duration", Duration);

    // Hope rc.110 wraps the scrollBehavior hook removed in VuePress rc.32.
    // Let VuePress's ScrollRestoration handle scrolling instead.
    delete router.options.scrollBehavior;
  },
});
