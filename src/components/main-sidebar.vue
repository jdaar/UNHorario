<script setup lang="ts">
import { useCourseStore } from "@/stores/course";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const courses = useCourseStore();

import CourseCard from "@/components/course-card.vue";
import CourseDrawer from "@/components/course-drawer.vue";
</script>

<template>
  <div class="flex flex-col justify-between h-full content-end pt-md">
    <div class="max-h-96">
      <ScrollArea class="w-full">
        <div class="gap-sm max-h-96 flex flex-col">
          <CourseCard
            v-bind:key="course.id"
            :course="course"
            v-for="course in courses.courses"
          />
        </div>
        <ScrollBar />
      </ScrollArea>
    </div>
    <CourseDrawer />
  </div>
</template>
