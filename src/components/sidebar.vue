<script setup lang="ts">
import { hoursToDateString } from "@/lib/generator";
import { downloadIcsFromEvents } from "@/lib/ics";
import { downloadCourses } from "@/lib/save";
import { getRandomColor } from "@/lib/utils";
import { useCourseStore } from "@/stores/course";
import type { Course } from "@/stores/types";
import type { EventInput } from "@fullcalendar/common";
import { computed } from "@vue/reactivity";
import course from "./course.vue";

const courses = useCourseStore();

/**
 * Contains all the events that will be displayed in the calendar.
 */
const events = computed(() =>
    courses.courses
        .filter((course) => course.included)
        .map((course: Course) =>
            course.groups[course.selectedGroup! - 1].lectures.map((lecture) => ({
                title: course.name,
                daysOfWeek: [lecture.day],
                startTime: hoursToDateString(lecture.start),
                endTime: hoursToDateString(lecture.end),
                groupId: course.code,
                color: getRandomColor(),
                allDay: false,
            }))
        )
        .reduce((accumulator, value) => accumulator.concat(value), [])
);

/**
 * For use in uploadCourses
 * @since 0.0.2
 * @internal
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

/**
 * Uploads courses as JSON and parses them
 * @since 0.0.2
 * @param event DOM event that triggers the function
 */
function uploadCourses(event: Event) {
    const files =
        (event as HTMLInputEvent).target.files ||
        (event as DragEvent).dataTransfer!.files;
    if (!files.length) return;

    /**
     * Parses the string value as JSON and executes courses.uploadCourses
     * @since 0.0.2
     * @internal
     * @param value The string to be parsed
     */
    function asyncHandler(value: string) {
        courses.uploadCourses(JSON.parse(value) as Course[]);
    }

    files[0]
        .text()
        .then(asyncHandler)
        .catch((error: Error) => {
            console.error(error);
        });
}
</script>

<template>
    <div class="course-container">
        <label class="upload-btn">
            <input type="file" class="" @change="uploadCourses" />
            Cargar UNHorario
        </label>
        <button v-on:click="downloadIcsFromEvents(events)">
            Descargar ICS
        </button>
        <button v-on:click="downloadCourses(courses.courses)">
            Descargar UNHorario
        </button>
        <ul class="mt">
            <li v-for="course in courses.courses" v-bind:key="course.code">
                <course :course="course" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
input[type="file"] {
    display: none;
}

.upload-btn {
  margin-bottom: 1em;
  text-decoration: none;
  background: var(--primary);
  color: #FFF;
  border-radius: 3px;
  width: 100%;
  text-align: center;
  padding: 0.75em;
  border: none;
  transition: 0.3s;
}

.upload-btn:hover {
  background: var(--primary-hover);
}

.course-container {
    flex-direction: column;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
    height: 47.5em;
    width: 100%;
}

ul {
    padding: 0;
}

.mt {
  margin-top: 3em !important;
}
</style>