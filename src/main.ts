import FullCalendar from "@fullcalendar/vue3";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/pages/app.vue";
import CourseCalendar from "@/components/course-calendar.vue";
import MainSidebar from "@/components/main-sidebar.vue";
import MainLayout from "@/components/main-layout.vue";
import TextArea from "@/components/text-area.vue";

const app = createApp(App);

app.component("FullCalendar", FullCalendar);
app.component("calendar", CourseCalendar);
app.component("sidebar", MainSidebar);
app.component("layout", MainLayout);
app.component("textArea", TextArea);

app.use(createPinia());

app.mount("#app");
