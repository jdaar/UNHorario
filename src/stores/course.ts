import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Course } from './types'

/**
 * Represents the initial state of the store
 * @since 0.0.1
 * @internal
 */
export const defaultCourses: Course[] = []


/**
 * Represents the store for courses
 * @since 0.0.1
 */
export const useCourseStore = defineStore('course', () => {
  const courses = ref(defaultCourses)

  /**
   * Adds a course to the store
   * @param course Instance of the course to add
   * @since 0.0.1
   */
  function addCourse(course: Course) {
    courses.value.push(course)
  }

  /**
   * Removes a course from the store
   * @param course_code The code of the course to remove
   */
  function removeCourse(course_code: string) {
    courses.value = courses.value.filter((course) => course.code !== course_code)
  }

  /**
   * It selects a group in a course
   * @param course_code The code of the course
   * @param group_number The number of the group
   */
  function selectGroup(course_code: string, group_number: number) {
    const course = courses.value.find((course) => course.code === course_code)
    if (course) {
      course.selectedGroup = group_number
    }
  }

  /**
   * It switches the boolean value of the included property of a course
   * @param course_code The code of the course to switch
   */
  function switchIncludeCourse(course_code: string) {
    const course = courses.value.find((course) => course.code === course_code)
    if (course) {
      course.included = !course.included
    }
  }

  return { courses, addCourse, removeCourse, selectGroup, switchIncludeCourse }
})
