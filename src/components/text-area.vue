<script setup lang="ts">
    import { ref } from '@vue/reactivity';

    const textAreaValue = ref("");

    type Callback<T> = (value: T) => void;

    const {callback = (value: string) => {}} = defineProps<{
        callback: Callback<string>;
    }>()

    const action = () => {
        callback(textAreaValue.value);
        textAreaValue.value = "";
    }
</script>


<template>
    <div class="grid">
        <textarea v-model="textAreaValue" style="resize: none" />
        <button v-on:click="action">
            <slot></slot>
        </button>
    </div>
</template>