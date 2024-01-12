import { ref } from "vue";
import { defineStore } from "pinia";
import type { Course } from "./types";
import { getRandomColor } from "@/lib/utils";

export const defaultCourses: Course[] = [];

export const useCourseStore = defineStore("course", {
  state: () => {
    const courses = ref(defaultCourses);
    const coursesLectures = ref([]);

    function addCourse(course: Course) {
      const actualCourse = courses.value.find((c) => c.id === course.id);
      if (!actualCourse) {
        const processedCourse = {
          ...course,
          color: course.color ?? getRandomColor(),
        };
        courses.value.push(processedCourse);
      }
    }

    function selectGroup(course_id: number, group_id: number, lectures: any[]) {
      const course = courses.value.find((course) => course.id === course_id);
      if (course) {
        const group = course.groups.filter(
          (v) => v.group_id == parseInt(group_id)
        );
        if (group.length > 0) {
          courses.value = [
            ...courses.value.filter((_course) => _course.id !== course_id),
            {
              ...course,
              selectedGroup: parseInt(group_id),
            },
          ];
          coursesLectures.value = [
            ...coursesLectures.value.filter(
              (lecture) => lecture.course_id !== course_id
            ),
            ...lectures.map((lecture) => {
              return {
                ...lecture,
                course_id,
                color: course.color,
                course_name: course.name,
              };
            }),
          ];
        }
      }
    }

    function removeCourse(course_id: number) {
      courses.value = courses.value.filter((course) => course.id !== course_id);
      coursesLectures.value = coursesLectures.value.filter(
        (lecture) => lecture.course_id !== course_id
      );
    }

    /**
     * It switches the boolean value of the included property of a course
     * @param course_code The code of the course to switch
     */
    function switchIncludeCourse(course_code: string) {
      const course = courses.value.find(
        (course) => course.code === course_code
      );
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
      coursesLectures,
      addCourse,
      removeCourse,
      selectGroup,
      switchIncludeCourse,
      uploadCourses,
    };
  },
  getters: {
    getEvents: (state) => {
      console.log(state);
      return {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
      };
    },
  },
});
