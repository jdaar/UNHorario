<script setup lang="ts">
import { courseGenerator } from "@/lib/generator";
import { useCourseStore } from "@/stores/course";

const courses = useCourseStore();

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
  <div class="container app">
    <div class="main">
      <main>
        <header class="header">
          <img src="/logo.svg" alt="UNHorario" />
          <ul>
            <li>
              <a href="https://github.com/jdaar/UNHorario/blob/master/USAGE.md"
                >Instrucciones de uso</a>
            </li>
            <li>
              <a href="https://github.com/jdaar/UNHorario/blob/master/IMPORT.md"
                >Instrucciones para importar en Google</a>
            </li>
            <li class="alertbud">
              <a href="https://alertbud.co" class="alertbud"
                >Prueba AlertBud</a>
            </li>
          </ul>
        </header>
        <article>
          <div class="parent">
            <slot></slot>
          </div>
          <footer>
            <text-area :callback="addCourseToCalendar">Añadir curso</text-area>
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
article {
  width: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 2000px;
  padding: 2em;
}

.parent {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 50em;
  width: 100%;
}

.main {
  width: 100%;
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
  padding: 1em;
}

.header > ul > li > a {
  text-decoration: none;
  font-size: larger;
  color: #507898
}
.header > ul > li > a:hover {
  text-decoration: none;
  font-size: larger;
  color: #f4511e
}

.credits {
  font-size: larger;
}

.alertbud {
    font-weight: bold;
}

@media (max-width: 1024px) {
  .parent {
    display: flex;
    flex-direction: column;
    max-height: 150em;
    grid-column-gap: 0px;
    grid-row-gap: 15px;
    grid-auto-flow: row;
    align-items: baseline;
    justify-content: center;
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

}
</style>
