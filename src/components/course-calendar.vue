<script setup lang="ts">
import { useCourseStore } from "@/stores/course";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";

const courses = useCourseStore();

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const daySegments = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return `${hour}:00`;
}).flatMap((hour) => [hour, `${hour.split(':')[0]}:30`]);
console.log(daySegments);

const lecturesByDay = {
  0: [{
    start: '08:00',
    end: '10:00',
  }],
  1: [{
    start: '08:00',
    end: '10:00',
  }],
  2: [{
    start: '08:00',
    end: '10:00',
  }],
  3: [{
    start: '08:00',
    end: '10:00',
  }],
  4: [{
    start: '08:00',
    end: '10:00',
  }],
  5: [{
    start: '08:00',
    end: '10:00',
  }]
}
</script>

<template>
  <div class="pt-md">
    <ScrollArea class="border rounded-md h-full whitespace-nowrap overflow-hidden">
      <ul class="w-full h-full relative">
        <li v-for="day in Object.keys(lecturesByDay)" v-bind:key="day" class="w-full h-full flex content-center flex-wrap p-md">
          <Label class="w-20 h-12">
            {{ days[day] }}
          </Label>
          <div class="relative">
            <div class="w-full h-12 absolute">
              <ul class="flex gap-md">
                <li v-for="segment in daySegments" v-bind:key="segment" class="w-12 h-full flex content-center flex-wrap">
                  <div v-bind:key="segment"></div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <ScrollBar class="w-md" orientation="horizontal" />
    </ScrollArea>
  </div>
</template>