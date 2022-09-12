<script setup lang="ts">
import "@fullcalendar/core/vdom"; // solves problem with Vite
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap5";
import { useCourseStore } from "./stores/course";
import { courseGenerator, hoursToDateString } from "./lib/generator";
import type { Course } from "./stores/types";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { downloadIcsFromEvents } from "./lib/ics";
import { downloadCourses } from "./lib/save";

const courseHtml = ref("");
const courses = useCourseStore();

const COLORS = [
  "#f94144", // red
  "#f3722c", // orange
  "#f8961e", // yellow
  "#f9844a", // yellow-orange
  "#f9c74f", // yellow-green
  "#90be6d", // green
  "#43aa8b", // green-blue
  "#4d908e", // blue-green
  "#577590", // blue
  "#277da1", // blue-purple
];

/**
 * Generates a random color from the COLORS array
 * @since 0.0.3
 * @internal
 */
function getRandomColor(): string {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

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
 * The configuration of the calendar
 */
const fullCalendarOptions = computed(() => ({
  calendarOptions: {
    plugins: [timeGridPlugin, bootstrapPlugin],
    initialView: "timeGridWeek",
    themeSystem: "bootstrap5",
    events: events.value,
  },
}));

/**
 * Generates a course and adds it to the store
 * @since 0.0.1
 * @param values The string to parse and add to the calendar
 */
function addCourseToCalendar(values: string) {
  let course = courseGenerator(values);
  courses.addCourse(course);
}

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
    .catch((error) => {
      console.error(error);
    });
}
</script>

<template>
  <div class="container app">
    <div class="main">
      <main>
        <header class="header">
          <img src="/logo.svg" alt="UNHorario">
          <ul>
            <li><a href="https://github.com/jdaar/UNHorario/blob/master/USAGE.md">¿Necesitas ayuda?</a></li>
          </ul>
        </header>
        <article>
          <div class="parent">
            <div class="calendar">
              <FullCalendar
                :options="fullCalendarOptions.calendarOptions"
              ></FullCalendar>
            </div>
            <div class="course-container">
              <label class="upload-btn">
                <input type="file" class="" @change="uploadCourses" />
                Cargar UNHorario 
              </label>
              <button
                v-on:click="downloadIcsFromEvents(events)"
              >
                Descargar ICS
              </button>
              <button
                v-on:click="downloadCourses(courses.courses)"
              >
                Descargar UNHorario
              </button>


              <ul class="mt">
                <li v-for="course in courses.courses" v-bind:key="course.code">
                  <article class="no-padding">
                    <header>
                      <h4>
                        {{ course.name }} <b>({{ course.code }})</b>
                      </h4>
                      <details role="list">
                        <summary>Grupo {{ course.selectedGroup }}</summary>
                        <ul role="listbox" class="group-container">
                          <li
                            v-for="group in course.groups.map((e) => e.number)"
                            v-on:click="courses.selectGroup(course.code, group)"
                            v-bind:key="group"
                          >
                            <p>
                              Grupo {{ group }} ({{
                                course.groups[group - 1].teacher
                              }})
                            </p>
                          </li>
                        </ul>
                      </details>
                      <div v-if="course.selectedGroup">
                        <h5>
                          Dictada por
                          <b>{{
                            course.groups[course.selectedGroup - 1].teacher
                          }}</b>
                        </h5>
                      </div>
                      <h5>
                        Del componente <b>{{ course.type }}</b> con
                        <b>{{ course.credits }}</b> creditos
                      </h5>
                      <label
                        for="switch"
                        style="display: flex; align-items: center"
                      >
                        <input
                          type="checkbox"
                          id="switch"
                          name="switch"
                          role="switch"
                          class="group-selector"
                          :checked="course.included"
                          v-on:input="courses.switchIncludeCourse(course.code)"
                        />
                        <h5 style="margin: 0">Incluir</h5>
                      </label>
                    </header>
                  </article>
                </li>
              </ul>
            </div>
          </div>
          <footer>
            <div class="grid">
              <textarea v-model="courseHtml" style="resize: none" />
              <button v-on:click="addCourseToCalendar(courseHtml)">
                Añadir curso
              </button>
            </div>
          </footer>
        </article>
      </main>
      <footer class="credits">
        Creado por <a href="https://jasprilla.me">Jhonatan David</a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  max-height: 50em;
  grid-row-gap: 0px;
  grid-auto-flow: column;
}

@media (max-width: 1024px) {
  .parent {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    max-height: 150em;
    grid-column-gap: 0px;
    grid-row-gap: 15px;
    grid-auto-flow: row;
    align-items: baseline;
    justify-content: center;
  }

  .calendar {
    height: 40em;
  }
}

.main {
  width: 100%;
}

.app {
  padding: 1em;
  padding-top: 3em;
  padding-bottom: 3em;
  width: 100%;
  max-width: 1400px !important;
  transform: scale(0.9);
  margin-top: -3em;
}

ul {
  padding: 0;
}

.course-container {
  flex-direction: column;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
}

.group-container {
  padding: 0.1em;
}

.group-container > li {
  display: inline-block;
}

.group-container > li > p {
  margin-bottom: 0;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-padding {
  padding-top: 0;
  padding-bottom: 1px;
}

.mt {
  margin-top: 3em !important;
}

.calendar {
  min-width: 70%;
}

.calendar > .fc {
  height: 100%;
}

.upload-btn {
  display: inline-block;
  padding: 0.8em 1em;
  margin-bottom: 1em;
  text-decoration: none;
  background: var(--primary);
  color: #FFF;
  border-radius: 3px;
  width: 100%;
  text-align: center;
  border: none;
  transition: 0.3s;
}

.upload-btn:hover {
  background: var(--primary-hover);
}

.upload-btn > input {
  display: none;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}

.header > img {
  max-width: 110px;
}

.header > ul {
  margin: 0;
  padding: 0;
}

.header > ul > li {
  display: inline-block;
  margin-left: 1em;
}

.header > ul > li > a {
  text-decoration: none;
  font-size: larger;
}

.credits {
  font-size: larger;
}
</style>
