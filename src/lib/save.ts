import { saveAs } from "file-saver";
import { useCourseStore } from "../stores/course.ts";

/**
 * Gets courses ands serializes them in json format, then downloads the input
 * @since 0.0.2
 * @param courses The courses to serialize
 */
export function downloadCourses() {
  const courseStore = useCourseStore();

  const file = new File(
    [
      JSON.stringify({
        courses: courseStore.courses,
        coursesLectures: courseStore.coursesLectures,
      }),
    ],
    "UNHorario.json",
    {
      type: "application/json;charset=utf-8",
    }
  );
  saveAs(file);
}

export function uploadSavefile() {}
