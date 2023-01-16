<script setup lang="ts">
import { ref } from "vue";

const textAreaValue = ref("");

type Callback<T> = (value: T) => void; // eslint-disable-line no-unused-vars

const props = defineProps<{
  callback: Callback<string>;
  label: string;
}>();

const action = () => {
  props.callback(textAreaValue.value);
  textAreaValue.value = "";
};
</script>

<template>
  <div class="grid">
    <textarea v-model="textAreaValue" :label="label" style="resize: none" />
    <button type="button" v-on:click="action">
      <slot></slot>
    </button>
  </div>
</template>
