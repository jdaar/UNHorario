import { ref } from "vue";
import { defineStore } from "pinia";
import type { Course } from "./types";
import { computed } from "vue";
import { hoursToDateString } from "@/lib/generator";
import { getRandomColor } from "@/lib/utils";

/**
 * Represents the initial state of the store
 * @since 0.0.1
 * @internal
 */
export const defaultCourses: Course[] = [];

/**
 * Represents the store for courses
 * @since 0.0.1
 */
export const useCourseStore = defineStore("course", {
  state: () => {
    const courses = ref(defaultCourses);

    /**
     * Adds a course to the store
     * @param course Instance of the course to add
     * @since 0.0.1
     */
    function addCourse(course: Course) {
      const actualCourse = courses.value.find((c) => c.code === course.code);
      if (!actualCourse) {
        courses.value.push(course);
      }
    }

    /**
     * Adds a course to the store
     * @param course Instance of the course to add
     * @since 0.0.1
     */
    function addCourseById(course_id: number) {
      /*
      const actualCourse = courses.value.find((c) => c.code === course.code);
      if (!actualCourse) {
        courses.value.push(course);
      }
      */
    }

    function removeCourse(course_code: string) {
      courses.value = courses.value.filter(
        (course) => course.code !== course_code
      );
    }

    /**
     * It selects a group in a course
     * @param course_code The code of the course
     * @param group_number The number of the group
     */
    function selectGroup(course_code: string, group_number: number) {
      const course = courses.value.find((course) => course.code === course_code);
      if (course) {
        course.selectedGroup = group_number;
      }
    }

    /**
     * It switches the boolean value of the included property of a course
     * @param course_code The code of the course to switch
     */
    function switchIncludeCourse(course_code: string) {
      const course = courses.value.find((course) => course.code === course_code);
      if (course) {
        course.included = !course.included;
      }
    }

    function uploadCourses(new_courses: Course[]) {
      for (let i = 0; i < courses.value.length; i += 1) {
        removeCourse(courses.value[i].code);
      }

      for (let i = 0; i < new_courses.length; i += 1) {
        addCourse(new_courses[i]);
      }
    }

    return {
      courses,
      addCourse,
      removeCourse,
      selectGroup,
      switchIncludeCourse,
      uploadCourses,
    };
  },
  getters: {
      getEvents: (state) => {
        return state.courses
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
      }
  }
});