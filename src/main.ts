import FullCalendar from "@fullcalendar/vue3";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/pages/app.vue";
import CourseCalendar from "@/components/course-calendar.vue";
import MainSidebar from "@/components/main-sidebar.vue";
import MainLayout from "@/components/main-layout.vue";
import TextArea from "@/components/text-area.vue";
import CourseCard from "./components/course-card.vue";

const app = createApp(App);

app.component("FullCalendar", FullCalendar);
app.component("CourseCalendar", CourseCalendar);
app.component("MainSidebar", MainSidebar);
app.component("CourseCard", CourseCard);
app.component("MainLayout", MainLayout);
app.component("TextArea", TextArea);

app.use(createPinia());

app.mount("#app");
