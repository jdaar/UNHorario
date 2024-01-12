<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCourseCount } from "@/lib/supabase";

const count = ref(0);

onMounted(() => {
  getCourseCount().then((_count) => {
    if (!_count) return console.error("No count returned");
    count.value = _count;
  });
});
</script>

<template>
  <header
    class="w-full h-16 mt-sm pl-md pr-md flex justify-between content-center flex-wrap"
  >
    <img
      class="object-cover w-12 h-12 self-center"
      src="/logo.svg"
      alt="UNHorario"
    />
    <ul class="flex gap-5 align-center h-full justify-center relative">
      <li
        class="sm:flex justify-center content-center flex-wrap sm:visible invisible hidden"
      >
        <img
          class="object-scale-down w-24 h-12"
          src="https://shields.io/github/v/release/jdaar/UNHorario?display_name=tag&sort=semver"
          alt="version"
        />
      </li>
      <section class="flex flex-col align-end justify-center">
        <h2 class="text-lg self-end">{{ count }} cursos en el indice</h2>
        <h3 class="text-xs">
          Ultima actualizacion del indice: 2:14PM 1/10/2024
        </h3>
      </section>
    </ul>
  </header>
</template>
