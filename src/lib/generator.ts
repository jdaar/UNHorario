import {
  CourseType,
  type Course,
  type Day,
  type Group,
  type Hours,
  type Lecture,
} from "@/stores/types";

/**
 * Parses a day to a date string
 * @since 0.0.1
 * @param day The day to convert
 * @returns The string representation of the day as date
 */
export function hoursToDateString(hours: Hours) {
  let dayHours = hours.hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  let dayMinutes = hours.minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return `${dayHours}:${dayMinutes}:00`;
}

/**
 * Parses a day from a string
 * @since 0.0.1
 * @param dayString The day string to parse
 * @returns The parsed day
 * @internal
 */
export function asDay(dayString: string): Day | null {
  switch (dayString.trim()) {
    case "LUNES":
      return "1";
    case "MARTES":
      return "2";
    case "MIÉRCOLES":
      return "3";
    case "JUEVES":
      return "4";
    case "VIERNES":
      return "5";
    case "SÁBADO":
      return "6";
    case "DOMINGO":
      return "0";
    default:
      return null;
  }
}

/**
 * Parses an hour from a string
 * @since 0.0.1
 * @param hourString The hour string to parse
 * @returns The parsed hour
 * @internal
 */
export function asHour(hourString: string): Hours {
  const [hours, minutes] = hourString
    .split(":")
    .map((value) => parseInt(value));
  return { hours, minutes };
}

/**
 * Parses a lecture from string
 * @since 0.0.1
 * @param values String to be parsed
 * @returns Parsed string as Lecture[]
 */
export function lectureGenerator(values: string): Lecture[] {
  const returnValue: Lecture[] = values
    .replace("Horarios/Aula: No informadoFecha:", "")
    .split(".")
    .map((value) =>
      value.replace(
        /[0-9]{2}\/[0-9]{2}\/[0-9]{4} - [0-9]{2}\/[0-9]{2}\/[0-9]{4}/,
        ""
      )
    )
    .filter((value, index) => index % 5 === 0 && value !== "")
    .map((value) => ({
      day: asDay(value.split(" de ")[0]),
      start: asHour(value.split(" de ")[1].split(" a ")[0]),
      end: asHour(value.split(" de ")[1].split(" a ")[1]),
    }));

  return returnValue;
}

/**
 * Parses a group from string
 * @since 0.0.1
 * @param values String to be parsed
 * @returns Parsed string as Group[]
 */
export function groupGenerator(values: string): Group[] {
  const groupRegex = /\([1-9]*\) Grupo [1-9].*\n/;
  const relevantData = values
    .split(groupRegex)
    .map((value) => value.trim())
    .filter((value) => value !== "");
  let returnValue = [];

  for (let i = 0; i < relevantData.length; i++) {
    let actualData = relevantData[i].split("Volver")[0].split("\n");
    let group: Group = {
      teacher: actualData[0].split(":")[1].replace(".", ""),
      number: i + 1,
      availablePlaces: parseInt(actualData[5].split(":")[1]),
      lectures: lectureGenerator(actualData[2]),
    };
    returnValue.push(group);
  }

  return returnValue;
}

/**
 * Parses a course from a string
 * @since 0.0.1
 * @param values The values to parse
 * @returns Values parsed as a Course
 */
export function courseGenerator(values: string): Course {
  const relevantData = values.split("\nVolver\n")[1];

  const course: Course = {
    name: relevantData.split("\n")[0].split("(")[0].trim(),
    code: relevantData.split("\n")[0].split("(")[1].split(")")[0].trim(),
    credits: parseInt(relevantData.split("\n")[2].split(":")[1].trim()),
    type:
      relevantData.split("\n")[1].split(":")[1].trim() == "LIBRE ELECCIÓN"
        ? CourseType.freeChoice
        : CourseType.obligatory,
    groups: groupGenerator(relevantData.split(/CLASE .* \(.*\)/)[1]),
    selectedGroup: 1,
    included: true,
  };

  return course;
}
