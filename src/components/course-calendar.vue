<script setup lang="ts">
import { useCourseStore } from "@/stores/course";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { computed, ref } from "vue";
import { groupBy } from "@/lib/utils";

const courses = useCourseStore();

const days = {
  0: 'Lunes', 
  1: 'Martes', 
  3: 'Miércoles', 
  4: 'Jueves', 
  5: 'Viernes', 
  6: 'Sábado'
}

const daySegments = Array.from({ length: 20 }, (_, i) => {
  const hour = (i+4).toString().padStart(2, '0');
  return `${hour}:00`;
}).flatMap((hour) => [hour, `${hour.split(':')[0]}:30`]);

const lecturesByDay = computed(() => {
  const lectures = courses.coursesLectures;
  return groupBy(lectures, 'day')
});

function isDateBetween(range: {start: string, end: string}, date: string) {
  const [startHour, startMinute] = range.start.split(':').map((value) => parseInt(value));
  const [endHour, endMinute] = range.end.split(':').map((value) => parseInt(value));
  const [hour, minute] = date.split(':').map((value) => parseInt(value));

  const isHourBetween = (hour >= startHour && hour <= endHour);
  if (!isHourBetween) return false;
  if (endHour == hour && endMinute == minute) return false;
  if (endHour == hour && !(minute <= endMinute)) return false;
  if (startHour == hour && !(minute >= startMinute)) return false;

  return true
}
</script>

<template>
  <div class="pt-md h-full">
    <ScrollArea class="border rounded-md h-full whitespace-nowrap w-full p-md">
      <ul class="w-full h-full relative">
        <li v-for="day in Object.keys(days)" v-bind:key="day" class="w-full h-full flex content-center">
          <Label class="w-20 min-h-20 h-full">
            {{ days[day] }}
          </Label>
          <div>
            <div class="w-96 h-full flex flex-row">
              <div v-for="segment in daySegments" v-bind:key="segment" class="h-full flex justify-start content-start flex-col flex-wrap min-h-20 min-w-20 border">
                <div class="p-1">
                  <Label class="text-xs text-muted-foreground" v-bind:key="segment">{{ segment }}</Label>
                </div>
                <div class="gap-1 flex flex-col w-full p-1">
                  <div v-for="lecture in lecturesByDay[day]" class="w-full h-full">
                    <div :style="`background-color: ${lecture.color}`" class="w-full rounded border max-h-20" v-if="isDateBetween(lecture, segment)">
                      <Label class="text-xs p-1 text-muted">{{lecture.course_name.slice(0, 9)}}...</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
</template>