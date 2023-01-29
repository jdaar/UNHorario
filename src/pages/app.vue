<script setup lang="ts">
import { event } from "vue-gtag";
import { onMounted } from "vue";

onMounted(() => {
  event("viewedSite");
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

.fc-timegrid-slot-label {
  display: none !important;
  padding: 0 !important;
}

button {
  font-weight: 600;
}
</style>
