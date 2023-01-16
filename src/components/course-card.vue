<script setup lang="ts">
import { useCourseStore } from "@/stores/course";
import type { Course } from "@/stores/types";
import { useFeedbackStore } from "@/stores/feedback";
import { watch } from "vue";
import { computed } from "vue";
import { uploadComment } from "@/lib/firestore";

const courses = useCourseStore();
const feedbacks = useFeedbackStore();

const props = defineProps<{
  course: Course;
}>();

const teacher = computed(
  () => props.course.groups[props.course.selectedGroup! - 1]?.teacher
);

watch(teacher, (newValue) => {
  feedbacks.populateFeedback(newValue!);
});

const teacherRating = computed(
  () =>
    feedbacks.feedback.filter(
      (feedback) => feedback.teacher_name == teacher.value!
    )[0]?.rating ?? "Selecciona para ver"
);

async function addComment(content: string) {
  await uploadComment(teacher.value!, content);
}
</script>

<template>
  <article class="no-padding">
    <header>
      <h4>
        {{ course.name }} <b>({{ course.code }})</b>
      </h4>
      <details role="list">
        <summary>
          {{
            course.selectedGroup
              ? course.groups.filter((v) => v.number == course.selectedGroup)[0]
                  .name
              : "Seleccione un grupo"
          }}
        </summary>
        <ul role="listbox" class="group-container">
          <li
            v-for="group in course.groups.map((e) => ({
              number: e.number,
              name: e.name,
            }))"
            v-on:click="courses.selectGroup(course.code, group.number)"
            v-bind:key="group.number"
          >
            <p>
              Grupo {{ group.name }} ({{
                course.groups[group.number - 1].teacher
              }}, calificacion: {{ teacherRating }})
            </p>
          </li>
        </ul>
      </details>
      <h5>
        Del componente <b>{{ course.type }}</b> con
        <b>{{ course.credits }}</b> creditos
      </h5>
      <h5>
        <b>{{
          course.selectedGroup
            ? course.groups.filter((v) => v.number == course.selectedGroup)[0]
                .availablePlaces
            : 0
        }}</b>
        cupos disponibles
      </h5>
      <div v-if="course.selectedGroup">
        <h5>
          Dictada por
          <b>{{ course.groups[course.selectedGroup - 1].teacher }}</b> con una
          calificacion de {{ teacherRating }}
        </h5>
        <h5>¿Como calificarias a este docente?</h5>
        <div class="grid">
          <button
            v-on:click="
              feedbacks.sendFeedback(
                true,
                teacher
              )
            "
          >
            <b> + </b>
          </button>
          <button
            v-on:click="
              feedbacks.sendFeedback(
                false,
                teacher
              )
            "
          >
            <b> - </b>
          </button>
        </div>
        <h5>¿Deseas compartir tu opinion de este docente?</h5>
        <text-area label="Comentario" :callback="addComment">Publicar</text-area>
      </div>
      <label for="switch" style="display: flex; align-items: center">
        <input
          type="checkbox"
          id="switch"
          name="switch"
          role="switch"
          class="group-selector"
          :checked="course.included"
          v-on:input="courses.switchIncludeCourse(course.code)"
        />
        <h5 style="margin: 0">Incluir en el archivo</h5>
      </label>
    </header>
  </article>
</template>

<style scoped>
ul {
  padding: 0;
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
