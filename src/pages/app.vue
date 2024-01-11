<script setup lang="ts">
import { pageview } from "vue-gtag";
import { onMounted } from "vue";

import MainLayout from "@/components/main-layout.vue";
import CourseCalendar from "@/components/course-calendar.vue";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

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
    </TabsList>
    <TabsContent value="cronogram">
      <MainLayout>
        <CourseCalendar />
      </MainLayout>
    </TabsContent>
    <TabsContent value="ranking">
      <MainLayout>
      </MainLayout>
    </TabsContent>
  </Tabs>
</template>