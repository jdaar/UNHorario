import {
  CourseType,
  type Course,
  type Day,
  type Group,
  type Hours,
  type Lecture,
} from "../stores/types.ts";

/**
 * Parses a day to a date string
 * @since 0.0.1
 * @param day The day to convert
 * @returns The string representation of the day as date
 */
export function hoursToDateString(hours: Hours) {
  const dayHours = hours.hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const dayMinutes = hours.minutes.toLocaleString("en-US", {
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
  const filteredValues: Lecture[] = values
    .replace("Horarios/Aula: No informado", "")
    .split("Duración")[0]
    .split(".")
    .map((value) =>
      value
        .trim()
        .replace(
          /Fecha:([0-9]){2}\/[0-9]{2}\/[0-9]{3}.*([0-9]){2}\/[0-9]{2}\/[0-9]{3}\w/gi,
          ""
        )
    )
    .map((v) => (v.match(/.* de [0-9]{2}:[0-9]{2} a [0-9]{2}:[0-9]{2}/i) ?? [null])[0])
    .filter((v) => v !== null);

  const returnValue = filteredValues
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
export function groupGenerator(_values: string): Group[] {
  if (!_values) return []
  const values = _values.trim()
  if (values.startsWith("Prerrequisitos")) return []
  //|(\((.*-)?[0-9]*\).*Estudiantes\s?.*)
  const groupRegex = new RegExp('^\(.*\)\s?(Grupo|Peama|Estudiante).*\r$', 'gi')

  const groups: {[x: string]: {start: number, end: number}} = { }
  const lines = values.split('\n')
  for (let linePtr = 0; linePtr < lines.length; linePtr++) {
    const line = lines[linePtr]
    if (line.match(groupRegex)) {
      const name = line.match(groupRegex)![0]
      const start = linePtr
      let end = linePtr
      while (lines[end + 1] && (!lines[end + 1].match(groupRegex) || lines[end + 1].match(/Prerrequisitos/gi))) {
        end++
      }
      groups[name] = { start, end }
    }
  }

  const returnValue = [];

  const groupNames = Object.keys(groups);

  for (let groupIdx = 0; groupIdx < groupNames.length; groupIdx += 1) {
    const actualData = lines.slice(
      groups[groupNames[groupIdx]].start,
      groups[groupNames[groupIdx]].end + 1
    )

    const name = groupNames[groupIdx];

    let teacher = "";
    try {
      teacher = actualData
        .filter((v) => v.match(/Profesor: .*/i))[0]
        .split(":")[1].replace(".", "");
    } catch (e) {
      console.log(e);
      console.log(actualData);
      continue;
    }

    const number = groupIdx + 1;

    let availablePlaces = 0;
    try {
      availablePlaces = parseInt(
        actualData
          .filter((v) => v.match(/Cupos disponibles: [0-9]+/i))[0]
          .split(": ")[1]
      );
    } catch (e) {
      console.log(e);
      console.log(actualData);
      continue;
    }

    let lectures;
    try {
      lectures = lectureGenerator(
        actualData.filter((_v, i) => i > 1).join("\n")
      );
    } catch (e) {
      console.log(e);
      console.log(actualData);
      continue;
    }

    const group: Group = {
      name,
      teacher,
      number,
      availablePlaces,
      lectures,
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
  const relevantData = values.split("Volver")[1].trim();

  const relevantDataHeader = relevantData.split("\n")[0];

  const name = relevantDataHeader.split("(")[0].trim();
  const code = relevantDataHeader.split("(")[1].split(")")[0].trim();
  const credits = parseInt(relevantData.split("\n")[2].split(":")[1].trim());
  const type = relevantData.split("\n")[1].split(":")[1].trim() == "LIBRE ELECCIÓN"
        ? CourseType.freeChoice
        : CourseType.obligatory;
  const groups = groupGenerator(relevantData.split(/CLASE .* \(.*\)/)[1]);

  const course: Course = {
    name,
    code,
    credits,
    type,
    groups,
    included: true
  };

  return course;
}
