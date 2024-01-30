<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CourseDrawerCard from "@/components/course-drawer-card.vue";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { ref, onMounted, watch } from "vue";
import { courseGenerator } from "@/lib/generator";
import { useCourseStore } from "@/stores/course";
import { useToast } from "@/components/ui/toast";

const courses = useCourseStore();

const coursePage = ref();
const courseCount = ref(0);
const page = ref(1);

const faculties = ref();
const pensums = ref();

const selectedFaculty = ref();
const selectedPensum = ref();

const courseRawText = ref();

const courseSearch = ref();
const isSearching = ref();

const { toast } = useToast();

function addCourseToCalendar() {
  let course = courseGenerator(courseRawText.value);
  courses.addCourse({ ...course, id: courses.courses.length });
  toast({
    title: "Curso añadido",
    description: "El curso se ha añadido al calendario",
  });
}

async function getPaginatedCourses() {
  let coursesPromise = supabase
    .from("courseview")
    .select("*")
    .order("course_id", { ascending: true });
  if (selectedFaculty.value && selectedFaculty.value !== "all") {
    coursesPromise = coursesPromise.eq("faculty_id", selectedFaculty.value);
  }
  if (selectedPensum.value && selectedPensum.value !== "all") {
    coursesPromise = coursesPromise.eq("pensum_id", selectedPensum.value);
  }
  if (isSearching.value) {
    coursesPromise = coursesPromise.ilike(
      "course_name",
      `%${courseSearch.value}%`
    );
  }
  coursesPromise = coursesPromise.range(
    (page.value - 1) * 10,
    page.value * 10 - 1
  );
  const courses = await coursesPromise;
  if (courses.error) {
    console.error(courses.error);
    return;
  }
  return courses.data;
}

async function getCourseCount() {
  let coursesPromise = supabase
    .from("courseview")
    .select("*", { count: "exact", head: true });
  if (selectedFaculty.value && selectedFaculty.value !== "all") {
    coursesPromise = coursesPromise.eq("faculty_id", selectedFaculty.value);
  }
  if (selectedPensum.value && selectedPensum.value !== "all") {
    coursesPromise = coursesPromise.eq("pensum_id", selectedPensum.value);
  }
  if (isSearching.value) {
    coursesPromise = coursesPromise.ilike(
      "course_name",
      `%${courseSearch.value}%`
    );
  }
  const courses = await coursesPromise;
  if (courses.error) {
    console.error(courses.error);
    return;
  }
  return courses.count;
}

async function getFaculties() {
  const faculties = await supabase.from("Faculties").select("id, name");
  if (faculties.error) {
    console.error(faculties.error);
    return;
  }
  return faculties.data;
}

async function getPensums() {
  const pensums = await supabase.from("Pensums").select("id, name, code");
  if (pensums.error) {
    console.error(pensums.error);
    return;
  }
  return pensums.data;
}

watch(selectedFaculty, async () => {
  isSearching.value = false;
  courseSearch.value = "";
  courseCount.value = await getCourseCount();
  page.value = 1;
  coursePage.value = await getPaginatedCourses(page.value);
});

watch(selectedPensum, async () => {
  isSearching.value = false;
  courseSearch.value = "";
  courseCount.value = await getCourseCount();
  page.value = 1;
  coursePage.value = await getPaginatedCourses(page.value);
});

watch(page, async () => {
  coursePage.value = await getPaginatedCourses(page.value);
});

async function searchCourse() {
  isSearching.value = true;
  courseCount.value = await getCourseCount();
  page.value = 1;
  coursePage.value = await getPaginatedCourses(page.value);
}

async function disableSearchCourse() {
  isSearching.value = false;
  courseSearch.value = "";
  courseCount.value = await getCourseCount();
  page.value = 1;
  coursePage.value = await getPaginatedCourses(page.value);
}

onMounted(async () => {
  coursePage.value = await getPaginatedCourses(0);
  courseCount.value = await getCourseCount();
  faculties.value = await getFaculties();
  pensums.value = await getPensums();
});
</script>

<template>
  <footer class="pt-md flex content-end justify-end">
    <Dialog>
      <DialogTrigger as-child>
        <Button>Añadir curso del indice</Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Catalogo de cursos</DialogTitle>
          <DialogDescription>
            Aqui podras visualizar todos los cursos disponibles en el SIA para
            la sede Medellin
          </DialogDescription>
        </DialogHeader>
        <div class="flex gap-md">
          <Input placeholder="Buscar curso" v-model="courseSearch" />
          <Button
            variant="ghost"
            size="icon"
            v-if="isSearching"
            v-on:click="disableSearchCourse"
          >
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 0H4.66667C4.20667 0 3.84667 0.233333 3.60667 0.586667L0 6L3.60667 11.4067C3.84667 11.76 4.20667 12 4.66667 12H14.6667C15.0203 12 15.3594 11.8595 15.6095 11.6095C15.8595 11.3594 16 11.0203 16 10.6667V1.33333C16 0.979711 15.8595 0.640573 15.6095 0.390524C15.3594 0.140476 15.0203 0 14.6667 0ZM12.6667 8.39333L11.7267 9.33333L9.33333 6.94L6.94 9.33333L6 8.39333L8.39333 6L6 3.60667L6.94 2.66667L9.33333 5.06L11.7267 2.66667L12.6667 3.60667L10.2733 6"
                fill="currentColor"
              />
            </svg>
          </Button>
          <Popover>
            <PopoverTrigger as-child>
              <Button variant="outline">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33342 6V11.2533C7.36009 11.4533 7.29342 11.6667 7.14009 11.8067C7.07841 11.8685 7.00515 11.9175 6.9245 11.951C6.84385 11.9844 6.7574 12.0016 6.67009 12.0016C6.58278 12.0016 6.49632 11.9844 6.41567 11.951C6.33502 11.9175 6.26176 11.8685 6.20009 11.8067L4.86009 10.4667C4.78738 10.3956 4.73209 10.3087 4.69855 10.2127C4.66501 10.1167 4.65413 10.0142 4.66675 9.91333V6H4.64675L0.806754 1.08C0.698493 0.94102 0.649643 0.764839 0.670879 0.589953C0.692115 0.415068 0.781711 0.255698 0.920087 0.146667C1.04675 0.0533334 1.18675 0 1.33342 0H10.6668C10.8134 0 10.9534 0.0533334 11.0801 0.146667C11.2185 0.255698 11.3081 0.415068 11.3293 0.589953C11.3505 0.764839 11.3017 0.94102 11.1934 1.08L7.35342 6H7.33342Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-80">
              <div
                class="flex gap-sm flex-col text-start content-center justify-start"
              >
                <div
                  class="text-center flex flex-col justify-start content-center"
                >
                  <Label class="text-start mb-sm">Facultad</Label>
                  <Select v-model="selectedFaculty">
                    <SelectTrigger>
                      <SelectValue placeholder="Facultad" />
                    </SelectTrigger>
                    <SelectContent>
                      <ScrollArea class="h-32">
                        <SelectGroup>
                          <SelectItem v-bind:value="`all`"> Todos </SelectItem>
                          <SelectItem
                            v-bind:key="`${faculty.id}`"
                            v-bind:value="`${faculty.id}`"
                            v-for="faculty in faculties"
                          >
                            {{ faculty.name }}
                          </SelectItem>
                        </SelectGroup>
                        <ScrollBar />
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                </div>
                <div
                  class="text-start flex-col flex justify-start content-center"
                >
                  <Label class="mb-sm">Pensum</Label>
                  <Select v-model="selectedPensum">
                    <SelectTrigger>
                      <SelectValue placeholder="Pensum" />
                    </SelectTrigger>
                    <SelectContent>
                      <ScrollArea class="h-32">
                        <SelectGroup>
                          <SelectItem v-bind:value="`all`"> Todos </SelectItem>
                          <SelectItem
                            v-bind:key="`${pensum.id}`"
                            v-bind:value="`${pensum.id}`"
                            v-for="pensum in pensums"
                          >
                            ({{ pensum.code }}) {{ pensum.name }}
                          </SelectItem>
                        </SelectGroup>
                        <ScrollBar />
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="outline" v-on:click="searchCourse">Buscar</Button>
        </div>
        <div class="flex flex-col">
          <Pagination
            class="justify-center"
            v-model:page="page"
            :total="courseCount - (courseCount % 10)"
            :sibling-count="1"
            show-edges
            :default-page="1"
          >
            <ScrollArea>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 max-h-80 gap-md"
                v-if="coursePage"
              >
                <CourseDrawerCard
                  v-if="coursePage[0]"
                  v-bind:course="coursePage[0]"
                />
                <CourseDrawerCard
                  v-if="coursePage[1]"
                  v-bind:course="coursePage[1]"
                />
                <CourseDrawerCard
                  v-if="coursePage[2]"
                  v-bind:course="coursePage[2]"
                />
                <CourseDrawerCard
                  v-if="coursePage[3]"
                  v-bind:course="coursePage[3]"
                />
                <CourseDrawerCard
                  v-if="coursePage[4]"
                  v-bind:course="coursePage[4]"
                />
                <CourseDrawerCard
                  v-if="coursePage[5]"
                  v-bind:course="coursePage[5]"
                />
                <CourseDrawerCard
                  v-if="coursePage[6]"
                  v-bind:course="coursePage[6]"
                />
                <CourseDrawerCard
                  v-if="coursePage[7]"
                  v-bind:course="coursePage[7]"
                />
                <CourseDrawerCard
                  v-if="coursePage[8]"
                  v-bind:course="coursePage[8]"
                />
                <CourseDrawerCard
                  v-if="coursePage[9]"
                  v-bind:course="coursePage[9]"
                />
              </div>
              <ScrollBar />
            </ScrollArea>
            <div class="flex justify-center mt-sm">
              <PaginationList
                v-slot="{ items }"
                class="flex items-center gap-1"
              >
                <PaginationFirst />
                <PaginationPrev />

                <template v-for="(item, index) in items">
                  <PaginationListItem
                    v-if="item.type === 'page'"
                    :key="index"
                    :value="item.value"
                    as-child
                  >
                    <Button
                      class="sm:max-w-15 w-full h-10 p-0"
                      :variant="item.value === page ? 'default' : 'outline'"
                    >
                      {{ item.value }}
                    </Button>
                  </PaginationListItem>
                  <PaginationEllipsis v-else :key="item.type" :index="index" />
                </template>

                <PaginationNext />
                <PaginationLast />
              </PaginationList>
            </div>
          </Pagination>
        </div>
        <DialogFooter>
          <Popover>
            <PopoverTrigger as-child>
              <Button> Añadir curso desde el portapapeles </Button>
            </PopoverTrigger>
            <PopoverContent class="w-80 h-80 flex flex-col gap-sm">
              <Label>Introduce el texto de la pagina del curso (SIA)</Label>
              <Textarea
                v-model="courseRawText"
                class="h-52"
                placeholder="Pega el texto aqui. Lo puedes conseguir dirigiendote al SIA, buscando el curso y entrando a ver los detalles, copiar todos sus datos con Ctrl+A y pegarlos en este area de texto con Ctrl+V"
              />
              <Button v-on:click="addCourseToCalendar">Añadir</Button>
            </PopoverContent>
          </Popover>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </footer>
</template>
