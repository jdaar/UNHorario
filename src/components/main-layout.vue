<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/toast";

const { toast } = useToast();

import MainSidebar from "./main-sidebar.vue";

import { downloadCourses } from "@/lib/save";
import { useCourseStore } from "@/stores/course";
import type { Course } from "@/stores/types";
import { watch, ref } from "vue";

const courses = useCourseStore();
const savefile = ref();

watch(savefile, (value) => {
  if (!value) return;
  console.log(value);
});

/**
 * For use in uploadCourses
 * @since 0.0.2
 * @internal
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

/**
 * Uploads courses as JSON and parses them
 * @since 0.0.2
 * @param event DOM event that triggers the function
 */
function uploadCourses(event: Event) {
  const files =
    (event as HTMLInputEvent).target.files ||
    (event as DragEvent).dataTransfer!.files;
  if (!files.length) return;

  function asyncHandler(value: string) {
    const { courses: _courses } = JSON.parse(value);
    courses.uploadCourses(_courses as Course[]);
  }

  files[0]
    .text()
    .then(asyncHandler)
    .catch((error: Error) => {
      console.error(error);
    });
}
</script>

<template>
  <div class="h-full">
    <div class="p-md pt-0">
      <Card>
        <div class="flex sm:flex-row flex-col justify-between">
          <CardContent class="w-full">
            <slot></slot>
          </CardContent>
          <CardHeader class="w-full sm:w-1/2">
            <div class="flex justify-between">
              <CardTitle class="pt-xs">Calendario</CardTitle>
              <Popover>
                <PopoverTrigger as-child>
                  <Button variant="outline"> Descargar </Button>
                </PopoverTrigger>
                <PopoverContent class="w-80 flex flex-col gap-md">
                  <Label for="ics-download">Exportar a Google Calendar</Label>
                  <Button
                    id="ics-download"
                    variant="outline"
                    v-on:click="
                      toast({
                        title: 'Oops!',
                        description:
                          'Todavia estoy trabajando en esa caracteristica, estara lista antes del dia de inscripciones',
                      })
                    "
                    >Descargar ICS</Button
                  >
                  <Label for="un-upload">Subir archivo de guardado</Label>
                  <Input id="un-upload" type="file" @change="uploadCourses" />
                  <Label for="un-download">Descargar horario actual</Label>
                  <Button
                    id="un-download"
                    variant="outline"
                    v-on:click="downloadCourses"
                  >
                    Descargar archivo
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
            <MainSidebar />
          </CardHeader>
        </div>
      </Card>
    </div>
    <footer class="pl-md pb-lg">
      <Label>
        Creado por <a href="https://jhonatan.tech">Jhonatan David</a>
      </Label>
    </footer>
  </div>
</template>
