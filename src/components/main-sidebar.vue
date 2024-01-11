<script setup lang="ts">
import { courseGenerator } from "@/lib/generator";
import { useCourseStore } from "@/stores/course";
import { computed } from "vue";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const courses = useCourseStore();


import CourseCard from "@/components/course-card.vue";
import CourseDrawer from "@/components/course-drawer.vue";

/**
 * Courses sorted by included param
 */
const sortedCourses = computed(() => {
  let returnValue = [...courses.courses];
  returnValue.sort((a) => (a.included ? 0 : 1));
  return returnValue;
});

/**
 * Generates a course and adds it to the store
 * @since 0.0.1
 * @param values The string to parse and add to the calendar
 */
function addCourseToCalendar(values: string) {
  let course = courseGenerator(values);
  courses.addCourse(course);
}

</script>

<template>
  <div class="flex flex-col justify-between h-full content-end pt-md">
    <div class="max-h-96">
    <ScrollArea class="w-full h-full">
      <div class="gap-sm flex flex-col">
      <CourseCard :course_id="2" />
      <CourseCard :course_id="3" />
      <CourseCard :course_id="4" />
      <CourseCard :course_id="5" />
      <CourseCard :course_id="6" />
      </div>
    <ScrollBar />
    </ScrollArea>
    </div>
    <CourseDrawer />
  </div>
</template>