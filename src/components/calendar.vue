<script setup lang="ts">
    import "@fullcalendar/core/vdom"; // solves problem with Vite
    import timeGridPlugin from "@fullcalendar/timegrid";
    import bootstrapPlugin from "@fullcalendar/bootstrap5";
    import { computed } from '@vue/reactivity';

    import { useCourseStore } from "@/stores/course";
    import type { Course } from "@/stores/types";
    import { hoursToDateString } from "@/lib/generator";
    import { getRandomColor } from "@/lib/utils";

    const courses = useCourseStore();

    /**
     * Contains all the events that will be displayed in the calendar.
     */
    const events = computed(() =>
        courses.courses
            .filter((course) => course.included && course.selectedGroup)
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
    );


    const fullCalendarOptions = computed(() => ({
        calendarOptions: {
            plugins: [timeGridPlugin, bootstrapPlugin],
            initialView: "timeGridWeek",
            themeSystem: "bootstrap5",
            events: events.value,
        },
    }));
</script>


<template>
    <div class="calendar">
        <FullCalendar
        :options="fullCalendarOptions.calendarOptions"
        ></FullCalendar>
    </div>
</template>

<style scoped>
    .calendar {
        height: 50em;
        width: 100%;
    }

    .calendar > .fc {
        height: 100%;
        margin: 1em;
    }

    @media (max-width: 1024px) {
        .calendar {
            height: 40em;
        }
    }
</style>