<script setup lang="ts">
import { useCourseStore } from "@/stores/course";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { ref } from "vue";

const courses = useCourseStore();

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const daySegments = Array.from({ length: 20 }, (_, i) => {
  const hour = (i+4).toString().padStart(2, '0');
  return `${hour}:00`;
}).flatMap((hour) => [hour, `${hour.split(':')[0]}:30`]);
console.log(daySegments);

const lecturesByDay = ref({
  0: [{
    course_id: 2,
    start: '08:00',
    end: '10:00',
  }],
  1: [{
    course_id: 2,
    start: '08:00',
    end: '10:00',
  }],
  2: [{
    course_id: 2,
    start: '08:00',
    end: '10:00',
  }],
  3: [{
    course_id: 2,
    start: '08:00',
    end: '12:00',
  }],
  4: [{
    course_id: 2,
    start: '08:00',
    end: '10:00',
  },
{
    course_id: 2,
    start: '08:00',
    end: '10:00',
  },
],
  5: [{
    course_id: 2,
    start: '08:00',
    end: '10:00',
  }]
})

function isDateBetween(range: {start: string, end: string}, date: string) {
  console.log(range, date)
  const [startHour, startMinute] = range.start.split(':').map((value) => parseInt(value));
  const [endHour, endMinute] = range.end.split(':').map((value) => parseInt(value));
  const [hour, minute] = date.split(':').map((value) => parseInt(value));

  const isHourBetween = (hour >= startHour && hour <= endHour);
  if (!isHourBetween) return false;
  if (minute > 0 && hour === endHour) return false;

  return true
}
</script>

<template>
  <div class="pt-md h-full">
    <ScrollArea class="border rounded-md h-full whitespace-nowrap w-full p-md">
      <ul class="w-full h-full relative">
        <li v-for="day in Object.keys(lecturesByDay)" v-bind:key="day" class="w-full h-full flex content-center">
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
                  <div v-for="lecture in lecturesByDay[day]" class="w-full">
                    <div class="w-full bg-yellow-400 rounded border max-h-20" v-if="isDateBetween(lecture, segment)">
                      <Label class="text-xs p-1 text-black">{{`Construccion`.slice(0, 9)}}...</Label>
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