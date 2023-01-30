import { ref } from "vue";
import { defineStore } from "pinia";
import type { Feedback } from "./types";
import { getRatings, uploadRating } from "@/lib/firestore";

/**
 * Represents the initial state of the store
 * @since 0.0.1
 * @internal
 */
export const defaultFeedback: Feedback[] = [];

/**
 * Represents the store for courses
 * @since 0.0.1
 */
export const useFeedbackStore = defineStore("feedback", () => {
  const feedback = ref(defaultFeedback);

  /**
   * Sends feedback to the server and adds it to the store
   * @param value The value of the feedback
   * @param teacher_name The name of the teacher
   * @since 0.0.4
   */
  async function sendFeedback(value: boolean, teacher_name: string) {
    if (
      !feedback.value.find((f) => f.teacher_name === teacher_name && f.voted)
    ) {
      await uploadRating(value, teacher_name);
      getRatings(teacher_name).then((ratings) => {
        const actualRecord = feedback.value.findIndex(
          (f) => f.teacher_name === teacher_name
        );
        if (actualRecord !== -1)
          feedback.value[actualRecord] = {
            value,
            teacher_name,
            rating: ratings?.reduce((a, b) => a + (b ? 1 : -1), 0) ?? 0,
            voted: true,
          };
      });
    }
  }

  /**
   * Gets feedback from the server and adds it to the store
   * @param teacher_name The name of the teacher
   * @since 0.0.4
   */
  function populateFeedback(teacher_name: string) {
    if (!teacher_name) return;
    const actualRecord = feedback.value.filter(
      (f) => f.teacher_name === teacher_name
    );
    getRatings(teacher_name).then((ratings) => {
      feedback.value.push({
        value: actualRecord[0]?.value ?? false,
        teacher_name,
        rating: ratings?.reduce((a, b) => a + (b ? 1 : -1), 0) ?? 0,
        voted: actualRecord[0]?.voted ?? false,
      });
    });
  }

  return {
    feedback,
    sendFeedback,
    populateFeedback,
  };
});
