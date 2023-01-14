/**
 * Nature of the course
 * @since 0.0.1
 * @internal
 */
export enum CourseType {
  freeChoice = "Libre Elección",
  obligatory = "Obligatoria",
}

/**
 * Day of the week
 * @since 0.0.1
 * @internal
 */
export type Day = "1" | "2" | "3" | "4" | "5" | "6" | "0" | null;

/**
 * Represents an hour in a day
 * @since 0.0.1
 * @internal
 */
export type Hours = {
  hours: number;
  minutes: number;
};

/**
 * Represents a course
 * @since 0.0.1
 */
export type Course = {
  name: string;
  code: string;
  credits: number;
  type: CourseType;
  groups: Group[];
  selectedGroup?: number;
  included: boolean;
};

/**
 * Represents a group in a course
 * @since 0.0.1
 */
export type Group = {
  name: string;
  teacher: string;
  number: number;
  availablePlaces: number;
  lectures: Lecture[];
};

/**
 * Represents a lecture in a group
 * @since 0.0.1
 */
export type Lecture = {
  start: Hours;
  end: Hours;
  day: Day;
};

export type Feedback = {
  value: boolean;
  voted: boolean;
  rating: number;
  teacher_name: string;
};
