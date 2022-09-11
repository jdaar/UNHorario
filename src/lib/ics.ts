import type { ICalendarEvent } from "./types";
import { ICalendar } from "datebook";


/**
 * Gets the days between two dates
 * @since 0.0.2
 * @param start The start date
 * @param end The end date
 */
export function getTotalDays(start: Date, end: Date) {
  return (
    start.getFullYear() * start.getMonth() * start.getDate() -
    end.getFullYear() * end.getMonth() * end.getDate()
  );
}

/**
 * Get nearest date "as string (name by the week)" to a given date
 * @since 0.0.2
 * @param date The date to get the nearest date to
 * @expected_day The day we want to get (past or future)
 */
export function getNearestDay(date: Date, expected_day: number) {
  const currentDay = new Date().getDay();
  let returnValue = new Date(date);
  if (currentDay > expected_day) {
    returnValue.setDate(date.getDate() + (expected_day + 7 - currentDay) + 2);
  } else {
    returnValue.setDate(date.getDate() + (expected_day - currentDay) + 2);
  }
  return returnValue;
}

/**
 * Creates an ICS file from an ICalendarEvent
 * @since 0.0.2
 * @param events The events that will be added to the ics file
 */
export async function downloadIcsFromEvents(events: ICalendarEvent[]) {
  const startOfYear = new Date();
  startOfYear.setMonth(1);
  startOfYear.setDate(1);

  const middleOfYear = new Date();
  middleOfYear.setDate(1);
  middleOfYear.setMonth(6);

  const endOfYear = new Date();
  endOfYear.setMonth(12);
  endOfYear.setDate(31);

  const actualDate = new Date();

  let actualSemester = {
    start: actualDate.getMonth() > 6 ? middleOfYear : startOfYear,
    end: actualDate.getMonth() > 6 ? endOfYear : middleOfYear,
  };

  let calendar: ICalendar | null;

  if (events.length > 1) {
    for (let i = 0; i < events.length; i++) {
      console.log(events[i].daysOfWeek[0]);
      console.log(events[i]);
      let eventStartTime = new Date(
        actualSemester.start.getFullYear(),
        actualSemester.start.getMonth(),
        getNearestDay(
          actualSemester.start,
          parseInt(events[i].daysOfWeek[0]!)
        ).getDate(),
        parseInt(events[i].startTime!.split(":")[0]),
        parseInt(events[i].startTime!.split(":")[1])
      );

      let eventEndTime = new Date(
        actualSemester.start.getFullYear(),
        actualSemester.start.getMonth(),
        getNearestDay(
          actualSemester.start,
          parseInt(events[i].daysOfWeek[0]!)
        ).getDate(),
        parseInt(events[i].endTime!.split(":")[0]),
        parseInt(events[i].endTime!.split(":")[1])
      );

      if (i === 0) {
        calendar = new ICalendar({
          title: events[i].title,
          description: `${events[i].title}, Materia de la Universidad Nacional`,
          start: eventStartTime,
          end: eventEndTime,
          recurrence: {
            frequency: "WEEKLY",
            interval: 1,
          },
        });
        calendar.addProperty("COLOR", events[i].color);
      } else {
        const newCalendar = new ICalendar({
          title: events[i].title,
          description: `${events[i].title}, Materia de la Universidad Nacional`,
          start: eventStartTime,
          end: eventEndTime,
          recurrence: {
            frequency: "WEEKLY",
            interval: 1,
          },
        });
        newCalendar.addProperty("COLOR", events[i].color);

        calendar!.addEvent(newCalendar);
      }
    }
  }

  calendar!.download("UNHorario.ics");
}
