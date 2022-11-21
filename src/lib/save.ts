import type { Course } from "@/stores/types";
import { saveAs } from "file-saver";

/**
 * Gets courses ands serializes them in json format, then downloads the input
 * @since 0.0.2
 * @param courses The courses to serialize
 */
export function downloadCourses(courses: Course[]) {
  const file = new File([JSON.stringify(courses)], "UNHorario.json", {
    type: "application/json;charset=utf-8",
  });
  saveAs(file);
}
