<script setup lang="ts">
import { useCourseStore } from "@/stores/course";
import { useFeedbackStore } from "@/stores/feedback";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { supabase } from "@/lib/supabase";

/**
  * Gets the course by id from the supabase database at component initialization only
  * @since 0.0.1
  */
async function getCourseById(course_id: number) {
  const result = await supabase.from('Courses').select('*').eq('id', course_id).limit(1).single();
  if (result.error) {
    console.error(result.error);
    return null;
  }
  return result.data;
}

/**
  * Gets the course by id from the supabase database at component initialization only
  * @since 0.0.1
  */
async function getGroupsByCourseId(course_id: number) {
  const result = await supabase.from('groupview').select('*').eq('course_id', course_id);
  if (result.error) {
    console.error(result.error);
    return null;
  }
  return result.data;
}

import { ref, onMounted, computed } from "vue";

const props = defineProps<{
  course_id: number;
}>();

const course = ref();
const selectedCourseGroup = ref();
const courseGroups = ref();
const courseGroupsByTeacher = computed(() => {
  return groupBy(courseGroups.value, 'teachers');
});
const courseGroupsById = computed(() => {
  return groupBy(courseGroups.value, 'group_id');
});

// Really couldn't bother to write this myself https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
const groupBy = function<T>(xs: any, key: any) {
  if (xs == null) return null;
  return xs.reduce(function(rv: any, x: any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

onMounted(async () => {
  const result = await getCourseById(props.course_id);
  if (result == null) return;
  course.value = result;
  const resultGroups = await getGroupsByCourseId(props.course_id);
  courseGroups.value = resultGroups;
}); 
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="p-md border rounded w-full h-full">
      <div class="gap-md flex">
        <div class="w-1/6 flex content-center flex-wrap justify-center">
          <div class="w-12 p-0 text-green-500 text-center justify-center align-center content-center flex flex-wrap rounded-full mt-1 mb-2">
            <svg width="32" height="28" viewBox="0 0 16 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3334 6.66666C15.3334 6.31303 15.1929 5.9739 14.9429 5.72385C14.6928 5.4738 14.3537 5.33332 14.0001 5.33332H9.78675L10.4267 2.28666C10.4401 2.21999 10.4467 2.14666 10.4467 2.07332C10.4467 1.79999 10.3334 1.54666 10.1534 1.36666L9.44675 0.666656L5.06008 5.05332C4.81341 5.29999 4.66675 5.63332 4.66675 5.99999V12.6667C4.66675 13.0203 4.80722 13.3594 5.05727 13.6095C5.30732 13.8595 5.64646 14 6.00008 14H12.0001C12.5534 14 13.0267 13.6667 13.2267 13.1867L15.2401 8.48666C15.3001 8.33332 15.3334 8.17332 15.3334 7.99999V6.66666ZM0.666748 14H3.33341V5.99999H0.666748V14Z" fill="currentColor"/>
            </svg>
          </div>
          <Label class="text-center"><span class="text-green-500">{{ selectedCourseGroup ? courseGroupsById[selectedCourseGroup][0].quotas : 0 }}</span> cupos</Label>
        </div>
        <div class="w-full" v-if="course != null">
          <h4 class="text-md font-semibold">
            {{ course?.name }}
          </h4>
          <ul>
            <li class="flex content-center flex-wrap gap-2">
              <div class="flex content-center justify-center flex-wrap">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.333 1.22664C11.3465 1.81176 12.1881 2.65335 12.7732 3.66682C13.3583 4.68029 13.6663 5.82993 13.6663 7.00018C13.6663 8.17043 13.3583 9.32006 12.7731 10.3335C12.188 11.347 11.3464 12.1886 10.3329 12.7737C9.31946 13.3588 8.16982 13.6668 6.99957 13.6668C5.82932 13.6668 4.67969 13.3587 3.66623 12.7736C2.65277 12.1884 1.8112 11.3468 1.2261 10.3333C0.640994 9.31986 0.332978 8.17022 0.333008 6.99997L0.336341 6.78397C0.373677 5.63263 0.708706 4.51061 1.30877 3.5273C1.90883 2.54399 2.75344 1.73294 3.76027 1.17322C4.76709 0.613511 5.90177 0.324233 7.05368 0.333594C8.20558 0.342955 9.33541 0.650634 10.333 1.22664ZM6.99967 2.99997C6.82286 2.99997 6.65329 3.07021 6.52827 3.19523C6.40325 3.32026 6.33301 3.48983 6.33301 3.66664C5.80257 3.66664 5.29387 3.87735 4.91879 4.25242C4.54372 4.6275 4.33301 5.1362 4.33301 5.66664C4.33301 6.19707 4.54372 6.70578 4.91879 7.08085C5.29387 7.45592 5.80257 7.66664 6.33301 7.66664V8.99997C6.22247 9.00586 6.11217 8.98479 6.01159 8.93856C5.91101 8.89234 5.82318 8.82235 5.75567 8.73464L5.71034 8.6673C5.61913 8.5202 5.47428 8.41434 5.30643 8.37211C5.13858 8.32987 4.96088 8.35458 4.81092 8.44099C4.66095 8.5274 4.55047 8.66875 4.50283 8.83515C4.4552 9.00155 4.47415 9.17995 4.55567 9.33264C4.72583 9.62774 4.96855 9.8745 5.26081 10.0495C5.55307 10.2245 5.88519 10.322 6.22567 10.3326H6.33301C6.33287 10.496 6.39274 10.6538 6.50126 10.776C6.60978 10.8981 6.75939 10.9762 6.92167 10.9953L6.99967 11C7.17649 11 7.34605 10.9297 7.47108 10.8047C7.5961 10.6797 7.66634 10.5101 7.66634 10.3333L7.78367 10.33C8.30341 10.2999 8.79095 10.0684 9.1427 9.68462C9.49445 9.30082 9.68268 8.79499 9.66741 8.27461C9.65213 7.75423 9.43454 7.26032 9.06089 6.89782C8.68723 6.53532 8.18694 6.3328 7.66634 6.3333V4.99997C7.90501 4.99197 8.11367 5.0933 8.24367 5.2653L8.28901 5.33264C8.38022 5.47973 8.52506 5.58559 8.69292 5.62783C8.86077 5.67006 9.03846 5.64536 9.18843 5.55895C9.3384 5.47254 9.44888 5.33118 9.49651 5.16478C9.54415 4.99838 9.5252 4.81998 9.44367 4.6673C9.2736 4.37207 9.03092 4.12518 8.73865 3.95005C8.44638 3.77493 8.11422 3.67737 7.77367 3.66664H7.66634C7.66634 3.48983 7.5961 3.32026 7.47108 3.19523C7.34605 3.07021 7.17649 2.99997 6.99967 2.99997ZM7.66634 7.66664C7.84315 7.66664 8.01272 7.73687 8.13774 7.8619C8.26277 7.98692 8.33301 8.15649 8.33301 8.3333C8.33301 8.51011 8.26277 8.67968 8.13774 8.80471C8.01272 8.92973 7.84315 8.99997 7.66634 8.99997V7.66664ZM6.33301 4.99997V6.3333C6.1562 6.3333 5.98663 6.26306 5.8616 6.13804C5.73658 6.01302 5.66634 5.84345 5.66634 5.66664C5.66634 5.48982 5.73658 5.32026 5.8616 5.19523C5.98663 5.07021 6.1562 4.99997 6.33301 4.99997Z" fill="#64748B"/>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground">
                {{ course?.credits }} creditos
              </p>
            </li>
            <li class="flex content-center flex-wrap gap-2">
              <div class="flex content-center flex-col justify-center flex-wrap">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.20004 9.39997C5.14029 9.39997 5.08054 9.40872 5.02354 9.42723C4.69954 9.53247 4.35879 9.59997 4.00004 9.59997C3.64129 9.59997 3.30054 9.53247 2.97629 9.42723C2.91929 9.40872 2.85979 9.39997 2.80004 9.39997C1.24854 9.39997 -0.00820962 10.662 4.0387e-05 12.2155C0.00354039 12.872 0.54329 13.4 1.20004 13.4H6.80004C7.45679 13.4 7.99654 12.872 8.00004 12.2155C8.00829 10.662 6.75154 9.39997 5.20004 9.39997ZM4.00004 8.59998C5.32554 8.59998 6.40004 7.52548 6.40004 6.19998C6.40004 4.87448 5.32554 3.79998 4.00004 3.79998C2.67454 3.79998 1.60004 4.87448 1.60004 6.19998C1.60004 7.52548 2.67454 8.59998 4.00004 8.59998ZM14.8 0.599976H5.20004C4.53829 0.599976 4.00004 1.15623 4.00004 1.83973V2.99998C4.58554 2.99998 5.12754 3.16948 5.60004 3.44498V2.19998H14.4V9.39997H12.8V7.79998H9.60004V9.39997H7.69404C8.17154 9.81723 8.52204 10.3682 8.68629 11H14.8C15.4618 11 16 10.4437 16 9.76023V1.83973C16 1.15623 15.4618 0.599976 14.8 0.599976Z" fill="#64748B"/>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground w-2/3">
                {{ selectedCourseGroup ? courseGroupsById[selectedCourseGroup][0].teachers : 'Seleccione un grupo' }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Separator class="my-md" />
      <div class="gap-md flex">
        <div class="w-1/6"></div>  
        <div class="w-full" v-if="courseGroupsByTeacher != null">
          <Label class="mb-sm">Grupo</Label>
          <Select v-model="selectedCourseGroup">
            <SelectTrigger>
              <SelectValue placeholder="Seleccione un grupo" />
            </SelectTrigger>
            <SelectContent>
              <ScrollArea class="h-32">
              <SelectGroup v-for="teacher in Object.keys(courseGroupsByTeacher)">
                <SelectLabel>{{ teacher }}</SelectLabel>
                <SelectItem v-bind:value="`${group.group_id}`" v-for="group in courseGroupsByTeacher[teacher]">
                  {{ group.group_name  }}
                </SelectItem>
              </SelectGroup>
              <ScrollBar />
              </ScrollArea>
            </SelectContent>
          </Select>
        </div>
      </div>  
    </ContextMenuTrigger>
    <ContextMenuContent class="w-64">
      <ContextMenuItem inset>
        Eliminar
      </ContextMenuItem>
      <ContextMenuItem inset disabled>
        Organizar
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>