<script setup lang="ts">
import { pageview } from "vue-gtag";
import { onMounted } from "vue";
import MainLayout from "@/components/main-layout.vue";
import CourseCalendar from "@/components/course-calendar.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/toast";

import Header from "@/components/header.vue";

onMounted(() => {
  pageview({ page_path: "/" });
});
</script>

<template>
  <Header></Header>
  <Tabs default-value="cronogram" class="h-full">
    <TabsList class="flex justify-center w-fit ml-md mb-0 pt-0 pb-0 mt-sm">
      <TabsTrigger value="cronogram">Cronograma</TabsTrigger>
      <TabsTrigger value="resources">Recursos</TabsTrigger>
      <TabsTrigger value="ranking">Ranking</TabsTrigger>
    </TabsList>
    <TabsContent value="cronogram">
      <MainLayout>
        <CourseCalendar />
      </MainLayout>
    </TabsContent>
    <TabsContent value="resources">
      <div class="h-full">
        <div class="p-md pt-0">
          <Card>
            <div class="flex flex-col">
              <CardHeader class="w-full sm:w-1/2">
                <CardTitle class="pt-xs">Recursos</CardTitle>
              </CardHeader>
              <CardContent class="w-full">
                <CardDescription>
                  <p>
                    El objetivo de esta pestaña es proveer recursos utiles para
                    los estudiantes de la universidad.
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <CardDescription>
                  <p>Trabajo en progreso</p>
                </CardDescription>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </TabsContent>
    <TabsContent value="ranking">
      <div class="h-full">
        <div class="p-md pt-0">
          <Card>
            <div class="flex flex-col">
              <CardHeader class="w-full sm:w-1/2">
                <CardTitle class="pt-xs">Ranking</CardTitle>
              </CardHeader>
              <CardContent class="w-full">
                <CardDescription>
                  <p>
                    El objetivo de esta pestaña es contar con un ranking de los
                    mejores profesores de la universidad (por materia).
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <CardDescription>
                  <p>Trabajo en progreso</p>
                </CardDescription>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </TabsContent>
  </Tabs>
  <Toaster />
</template>
