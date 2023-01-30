<script setup lang="ts">
import { pageview } from "vue-gtag";
import { onMounted } from "vue";

onMounted(() => {
  pageview({ page_path: "/" });
});
</script>

<template>
  <MainLayout>
    <CourseCalendar />
    <MainSidebar />
  </MainLayout>
</template>

<style>
.app {
  margin-top: -6em;
  transform: scale(0.8);
}

html {
  font-family: "Montserrat", sans-serif;
}

button {
  font-weight: 600;
}

.fc-timegrid-slot-label-cushion {
  display: none !important;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
