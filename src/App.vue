<script setup lang="ts">
import "@fullcalendar/core/vdom"; // solves problem with Vite
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap5";
import { useCourseStore } from "./stores/course";
import { courseGenerator, hoursToDateString } from "./lib/generator";
import type { Course } from "./stores/types";
import { ref } from "vue";
import { computed } from "@vue/reactivity";

const courseHtml = ref("");
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
        daysOfTheWeek: [lecture.day],
        startTime: hoursToDateString(lecture.start),
        endTime: hoursToDateString(lecture.end),
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
 * @param values The string to parse and add to the calendar
 */
function addCourseToCalendar(values: string) {
  let course = courseGenerator(values);
  courses.addCourse(course);
}
</script>

<template>
  <div class="container app">
    <div class="main">
      <main>
        <h1><b style="color: var(--primary)">UN</b>Horario</h1>
        <article>
          <div class="parent">
            <div style="min-width: 70%">
              <FullCalendar
                :options="fullCalendarOptions.calendarOptions"
              ></FullCalendar>
            </div>
            <div class="course-container">
              <ul>
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
      <footer>Made by <a href="https://jasprilla.me">Jhonatan David</a></footer>
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
    grid-template-rows: 1fr 3fr;
    max-height: 75em;
    grid-column-gap: 0px;
    grid-row-gap: 15px;
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
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
</style>
