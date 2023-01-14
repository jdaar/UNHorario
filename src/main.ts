import FullCalendar from "@fullcalendar/vue3";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/pages/App.vue";

const app = createApp(App);

app.component("FullCalendar", FullCalendar);

app.use(createPinia());

app.mount("#app");
