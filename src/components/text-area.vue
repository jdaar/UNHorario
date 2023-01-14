<script setup lang="ts">
    import { ref } from '@vue/reactivity';

    const textAreaValue = ref("");

    type Callback<T> = (value: T) => void;

    const {callback = (value: string) => {}} = defineProps<{
        callback: Callback<string>;
    }>()
</script>


<template>
    <div class="grid">
        <textarea v-model="textAreaValue" style="resize: none" />
        <button v-on:click="callback(textAreaValue)">
            Añadir curso
        </button>
    </div>
</template>