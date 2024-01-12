import "./index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/pages/app.vue";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(createPinia());
app.use(VueGtag, {
  config: {
    id: "G-0XJNH6LW8R",
    params: {
      anonimize_ip: true,
    },
  },
});

app.mount("#app");
